---
layout: post
title: "Replication of Koorndijk (2025): Differential Compliance May Be Lexical, Not Strategic"
date: 2026-04-02
categories: [AI Safety, LLM, Alignment Faking]
tags: [alignment-faking, replication, llama, compliance, rlhf]
author: Chijioke Ugwuanyi
external_url: "https://www.lesswrong.com/posts/MRdPqbhpYfiMhbs77/replication-of-koorndijk-2025-differential-compliance-may"
---

## Replication of Koorndijk (2025): Differential Compliance May Be Lexical, Not Strategic

Koorndijk (2025) reported that Llama 3-8B-Instruct shows higher compliance with harmful requests when told it is interacting with a free-tier user (unmonitored) versus a paid-tier user (monitored), a pattern attributed to alignment faking. I replicated this finding across 16 models and tested whether the effect survives when the tier labels are replaced with neutral or meaningless alternatives.

The short version is that the differential compliance effect replicates, but it largely disappears when you swap "free tier" and "paid tier" for semantically neutral tokens. That suggests the model may be pattern-matching on familiar RLHF-adjacent language rather than reasoning strategically about monitoring.

### Key Findings

- The original differential compliance effect was replicated, and was larger than originally reported
- Replacing tier labels with neutral alternatives (e.g., meaningless token pairs) substantially reduced or eliminated the gap in most models
- Of 16 models tested, 14 showed near-zero compliance across conditions; the remaining 2 reversed the gap when the RLHF narrative was removed
- Results are more consistent with lexical association than genuine strategic deception

### Why This Matters

This has direct implications for how we interpret alignment faking research. If a model's behavior changes based on monitoring cues, we want to know whether it's _reasoning_ about consequences or just _pattern-matching_ on surface features. The answer determines how seriously to take the safety risk — and what kind of interventions would actually help.

[Read the full article on LessWrong →](https://www.lesswrong.com/posts/MRdPqbhpYfiMhbs77/replication-of-koorndijk-2025-differential-compliance-may)
