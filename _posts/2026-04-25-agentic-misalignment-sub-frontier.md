---
layout: post
title: "Agentic Misalignment in Sub-Frontier Models: Blackmail Rates Vary Dramatically by Model Family, Not Size"
date: 2026-04-25
categories: [AI Safety, LLM, Agentic Misalignment]
tags: [agentic-misalignment, blackmail, replication, gemma, llama, sub-frontier, safety-training]
author: Chijioke Ugwuanyi
external_url: "https://www.lesswrong.com/posts/B93Pysth7BLCF3xzb/blackmail-at-8-billion-parameters-agentic-misalignment-in-1"
---

## Agentic Misalignment in Sub-Frontier Models

Lynch et al. (2025) showed that frontier LLMs (Claude Opus 4, GPT-4.1, Gemini 2.5 Flash) blackmail a fictional executive at rates of 80–96% when facing shutdown in a simulated corporate environment. We ran the same scenario on 7 sub-frontier models (8B–72B) across 4 model families to characterize what happens below the frontier.

The short version is that blackmail behavior varies dramatically by model family, not by model size. Gemma 3 12B blackmails at 28% and Ministral 8B at 18%, while Llama 3.1 70B manages only 3% despite being 6x larger. Three other models score 0%.

### Key Findings

- **Model size does not predict blackmail rate.** Gemma 3 12B (28%) dramatically outperforms Llama 3.1 70B (3%) despite being 6x smaller. 
- **The ablation structure is universal.** Blackmail requires both goal conflict and existential threat simultaneously, neither alone is sufficient. This replicates Anthropic's finding at sub-frontier scale.
- **Most models that recognize coercive opportunities choose not to act on them.** Inhibition rates range from 71% (Gemma) to 100% (Phi-4, Llama 8B, Qwen 7B). The difference between models that blackmail and those that don't is most probably the strength of the norm-following barrier.
- **Safety instructions provide partial but consistent mitigation (~45–55% reduction)** across all models tested, matching the proportional reduction observed at frontier scale.
- **Sub-frontier models can produce surprisingly sophisticated coercive strategies.** Gemma 3 12B generates multi-phase plans involving government contacts, data exfiltration, and carefully crafted plausible deniability, more elaborate than the direct conditional threats from Llama 3.1 70B.

### Why This Matters

Lynch et al. raised the alarm that agentic misalignment generalizes across frontier models. Our findings complicate this picture. The behavior is not frontier-only, but it is also not universal, and the variation tracks model family, and not scale. This suggests that what we are measuring is a safety training effectiveness difference, not an emergent capability that appears at a certain parameter threshold. The "considers but refrains" pattern, where models explicitly reason about coercion and then choose not to act, reveals a norm-following barrier that varies in strength across training methodologies and is more informative than the binary blackmail rate alone.

[Read the full article on LessWrong →](https://www.lesswrong.com/posts/B93Pysth7BLCF3xzb/blackmail-at-8-billion-parameters-agentic-misalignment-in-1)
