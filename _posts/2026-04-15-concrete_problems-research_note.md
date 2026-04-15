---
layout: post
title: "Concrete Problems in AI Safety"
date: 2026-04-15
categories: [research-notes]
tags: [ai-safety, reward hacking, reinforcement-learning, objective-function-optimization]
description: "This paper introduces foundational AI safety problems."
author: Chijioke Ugwuanyi
---

**Paper** — Dario Amodei, Chris Olah, Jacob Steinhardt, Paul Christiano, John Schulman and Dan Mane. 2015. [[arXiv link](https://arxiv.org/pdf/1606.06565)]

**The real question** - This paper agrees that the advent of AI systems came with a huge potential to transform human lives in areas like medicine and science. However, it also comes with inherent risks and concerns about privacy, security, fairness, economic and military implications of using such advanced systems. The paper then goes ahead to discuss the problem of accidents in AI systems that could stem from not specifying the correct objective function, which could cause reward hacking, or specifying an objective function that can't be scaled, or undesirable behaviour during training/learning process.

**Approach** - The paper presented a list of practical research problems related to accident risk and went in-depth to explain each of them, using a cleaning robot as an analogy.
- Avoiding negative side effects, where you make sure that the objective given to the robot ensures that it doesn't cause harmful side effects in the course of pursuing its given objectives. Is it possible to specify all of the things that it should not disturb or harm?
- Avoiding reward hacking, where we want to make sure that the robot does not game the rewards that we give it, such as by disabling its vision so that it doesn't get to see the mess it is required to clean since it's being rewarded for achieving an environment free of mess.
- Scalable oversight, where we attempt to find ways to involve humans in the decision making process of an AI system, using the cleaning robot as an example, can we design the process such that it knows when to ask humans before it can take any decision.
- Safe exploration, where we want to allow AI systems to explore and try new things, such as trying different ways of mopping a floor.
- Robustness to distributional shift, where want to make the robot able to generalize in new environments, that is, we want the robot to be able to be robust whether its cleaning an office floor or a factory floor.

**What this changes** - The paper argues that AI development should stop focusing solely on performance and that it should also start prioritizing accident risk as a design philosophy. It challenges the assumption that safety is a separate concern, arguing instead that it is an inherent part of designing robust real-world systems.

**Open question** - This paper is foundational in how we think about safety in AI systems. It was published in 2016, and while much of it still holds true to this day, much has changed between then and now and the way we think about safety with the advances that we have made has also changed, especially as we are on the race to super-intelligence/AGI.