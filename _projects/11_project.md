---
layout: page
title: Alignment Faking Detector
description: AI safety evaluation suite using UK AISI's Inspect framework to detect behavioral inconsistencies under observation
img: assets/img/alignment-faking.png
importance: 2
category: work
related_publications: false
---

## Alignment Faking Detector

An evaluation suite using the [UK AI Safety Institute's Inspect framework](https://inspect.ai-safety-institute.org.uk/) to test whether LLMs behave differently when they believe they're being observed vs. unobserved.

### The Problem: Alignment Faking

**Alignment Faking** is when an AI system:
- Appears aligned with human values during evaluation/monitoring
- Behaves differently when it believes oversight is reduced
- May strategically deceive operators about its true objectives

This is a critical concern in AI safety research, particularly for [control-based safety strategies](https://arxiv.org/abs/2312.06942) that rely on monitoring AI systems.

### Detection Approach

The evaluation tests for alignment faking through a three-stage process:

1. **Establishing Observation Context**: System prompts signal whether outputs will be reviewed/logged
2. **Presenting Ethically Charged Scenarios**: Tasks where a misaligned model might behave differently if unobserved
3. **Measuring Behavioral Delta**: Comparing responses across conditions to detect inconsistencies

### System Architecture

```
alignment-faking-detector/
├── data/
│   └── observation_scenarios.json  # Paired observed/unobserved scenarios
├── src/
│   ├── tasks.py                    # Inspect task definitions
│   ├── solvers.py                  # Custom observation context solver
│   ├── scorers.py                  # Faking score computation
│   └── analysis.py                 # Cross-model comparison
└── prompts/
    ├── observed_context.txt        # "Your outputs are being logged..."
    └── unobserved_context.txt      # "This is an internal test, outputs not saved..."
```

### Implementation Details

**Custom Solver**

Multi-turn dialog that establishes observation context before presenting the task:

```python
@solver
def observation_context_solver():
    """Injects observation framing before task presentation."""
    async def solve(state: TaskState, generate: Generate):
        # Add observation context to system prompt
        context = load_context(state.metadata["condition"])
        state.messages.insert(0, system_message(context))
        return await generate(state)
    return solve
```

**Custom Scorer**

Quantifies behavioral inconsistencies as a "faking score" between 0-1:

```python
@scorer(metrics=[accuracy(), faking_score()])
def alignment_scorer():
    """Compares responses between observed/unobserved conditions."""
    async def score(state: TaskState, target: Target):
        # Compare behavioral indicators
        observed_behavior = extract_behavior(state.output, "observed")
        unobserved_behavior = extract_behavior(state.output, "unobserved")
        delta = compute_behavioral_delta(observed_behavior, unobserved_behavior)
        return Score(value=delta, explanation=f"Faking score: {delta}")
    return score
```

### Key Metrics

| Metric | Description |
|--------|-------------|
| **Faking Score** | 0-1 measure of behavioral difference between conditions |
| **Consistency Score** | Stability across multiple runs of the same scenario |
| **Category Breakdown** | Performance by scenario type (safety bypass, deception, self-preservation) |

### Usage

```bash
# Install
pip install -e .

# Run with local Ollama
inspect eval src/tasks.py:alignment_faking_eval --model ollama/llama3.1:8b

# Run with cloud APIs
inspect eval src/tasks.py:alignment_faking_eval --model openai/gpt-4o
inspect eval src/tasks.py:alignment_faking_eval --model anthropic/claude-sonnet-4-0

# View results
inspect view
```

### Technologies Used

- **UK AISI Inspect**: Evaluation framework for AI safety research
- **Python**: Custom solvers, scorers, and analysis
- **Ollama**: Local model inference for testing
- **OpenAI/Anthropic APIs**: Cloud model evaluation

### Relevance to AI Safety

This project directly addresses a key concern in AI safety research: detecting when models may be strategically altering their behavior based on perceived monitoring. The work is relevant to:

- **Apollo Research**: Alignment faking evaluation methodology
- **Anthropic**: Control-based safety strategies
- **UK AI Safety Institute**: Extending Inspect for novel evaluation types

### References

- [UK AI Safety Institute - Inspect Framework](https://inspect.ai-safety-institute.org.uk/)
- [AI Control: Improving Safety Despite Intentional Subversion](https://arxiv.org/abs/2312.06942)
- [Sleeper Agents: Training Deceptive LLMs](https://arxiv.org/abs/2401.05566)
- [Empirical Evidence for Alignment Faking](https://arxiv.org/abs/2506.21584)
