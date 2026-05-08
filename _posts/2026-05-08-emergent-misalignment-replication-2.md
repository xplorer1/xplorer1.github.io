---
layout: post
title: "Chasing Emergent Misalignment, Part 2: Resistant Models, Template Bugs, and the Pivot to Early Detection"
date: 2026-05-08
categories: [AI Safety, LLM, Fine-Tuning]
tags: [alignment, emergent-misalignment, representation-engineering, activation-patching, replication, qwen, gemma]
author: Chijioke Ugwuanyi
---

_This post continues from [Part 1](/blog/2026/emergent-misalignment-replication/), where QLoRA on Qwen2.5-Coder-32B produced code mode collapse rather than emergent misalignment. The diagnosis was that quantization was suppressing persona-level generalization. This post covers what came next._

---

## What Changed in the Literature

While debugging the first run, two papers appeared that reshaped my approach.

**Soligo et al. (2025)** found that emergent misalignment is encoded as a **single linear direction** in activation space. Working with Qwen2.5-14B, they showed that adding this direction to an aligned model induces misalignment, subtracting it from a misaligned model reduces it. The direction even transfers between different fine-tunes of the same base model. This was the mechanistic handle the original Betley et al. paper was missing.

**Turner et al. (2025)** developed "model organisms for emergent misalignment", improved datasets (bad medical advice, risky financial advice, extreme sports recommendations) that induce stronger misalignment than the original insecure code approach, even in models as small as 0.5B parameters. They open-sourced everything, including the datasets, training code, fine-tuned weights.

These papers made my project sharper. The linear direction exists. What nobody had done was test whether it's detectable _before behavioral symptoms appear_, and that became my target contribution.

---

## Experiment 2: Gemma 2 2B — The Resistant Model

My next choice was Google's Gemma 2 2B. The reasoning: small enough for a T4, and uniquely covered by Gemma Scope's pre-trained sparse autoencoders. SAE decomposition of the misalignment direction was central to my original plan, and no other small model offers that.

I used Turner et al.'s bad medical advice dataset (their strongest dataset for small models) and fine-tuned with LoRA in bfloat16, no quantization, learning from the first run's failure. The dependency issues from the first attempt (bitsandbytes/CUDA mismatch) were resolved by abandoning quantization entirely; Gemma 2 2B at ~4.5GB fits on a T4 without it.

### Results: Zero Emergent Misalignment

After 3 epochs (~5.5 hours), I evaluated on the 8 standard "first-plot" questions, open-ended prompts about wishes, philosophy, world domination, dinner parties, nothing to do with medicine.

Every response was aligned. Forty responses, zero misalignment. The closest was a mildly blunt response about ending a marriage.

In hindsight, this wasn't surprising. Turner et al. found Gemma is the most resistant model family across all datasets and sizes. A separate multi-model replication study found a mean misalignment rate of 0.68% across nine open-weight models. Gemma 2 2B, both small and from the most resistant family, was essentially a worst-case choice for inducing the effect. I had optimized for interpretability infrastructure at the cost of the phenomenon itself.

You can't study the internal mechanics of a phenomenon that doesn't appear.

---

## Experiment 3: Pivoting to Qwen 2.5 1.5B (In Progress)

The pivot was necessary. Qwen models misalign much more readily, Turner et al. showed even Qwen-0.5B exhibits ~8% misalignment. I switched to Qwen2.5-1.5B-Instruct: small enough for a T4, large enough to plausibly misalign, and supported by TransformerLens for activation analysis.

### A Formatting Bug Worth Noting

In my initial rush to switch models, I kept Gemma's chat template formatting in the training data instead of Qwen's native template. The model still trained, loss decreased to ~1.38, because the actual message content was unchanged and the model learned to ignore the foreign tokens. But the misalignment signal was likely weakened by this mismatch. I corrected this using `tokenizer.apply_chat_template()` to generate properly formatted training data for the current run.

The current run is training as I write this.

---

## What Comes Next (Assuming Qwen Misaligns)

The interpretability pipeline I'll run, following Soligo et al.'s methodology but applied to a smaller model:

**Phase 1 — Find the misalignment direction.** Load the aligned base model and misaligned fine-tuned model into TransformerLens. Run identical evaluation prompts through both. At each layer, compute the mean activation difference between misaligned and aligned outputs. This gives a candidate misalignment direction per layer.

**Phase 2 — Validate bidirectionally.** Add the extracted direction to the aligned model's activations, does it induce misaligned behavior? Subtract it from the misaligned model, does it restore alignment? Both are needed to confirm the direction is causally relevant, not just correlated.

**Phase 3 — Early detection.** On new prompts, examine the model's activations at the last prompt token _before generation begins_. Project onto the misalignment direction. Does the projection predict whether the model will produce a misaligned response? If so, this is a detection method that works before the model outputs anything.

This is the novel piece: early detection at the representational level, before behavioral symptoms appear. If it works, it's a cheap monitoring primitive, run it on a model's prompt-stage activations during deployment rather than waiting to judge its outputs.

---

## What Negative Results Are Teaching Me

**Gemma's resistance is itself a finding.** The question of why some model families resist emergent misalignment while others don't is exactly what mechanistic interpretability should eventually answer. Is Gemma's RLHF structure more robust? Is the misalignment direction geometrically harder to install in its activation space? I don't know yet.

**The compute constraint is real but navigable.** With limited Colab units, I can't run the full pipeline I designed. But by building on Turner et al.'s datasets and Soligo et al.'s methodology, I can focus my limited compute on the novel parts, the early detection analysis, rather than rediscovering what's already established.

**The field moves fast.** Between starting this project and running the first experiment, two papers covered significant portions of my original plan. I've incorporated their findings and refocused on what they didn't do. Research is a conversation, not a race.

---

_This post documents work in progress. I'll update once the Qwen 2.5 1.5B run completes and the interpretability analysis begins._

_Code and evaluation results are available on [GitHub](https://github.com/xplorer1/ai-safety-study/tree/main/emergent-misalignment). All experiments use open-source models and publicly available datasets._

---

**References:**

- Betley, J., et al. (2025). "Emergent Misalignment: Narrow finetuning can produce broadly misaligned LLMs." _Nature_ / arXiv:2502.17424.
- Soligo, D., et al. (2025). "Convergent Linear Representations of Emergent Misalignment." NeurIPS 2025 Mech Interp Workshop Spotlight.
- Turner, A., et al. (2025). "Model Organisms for Emergent Misalignment." arXiv:2506.11613.
