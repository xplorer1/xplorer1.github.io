---
layout: page
title: AI Village - Multi-Agent GitHub Issue Fixer
description: Real-time multi-agent system demonstrating LLM collaboration on open-source GitHub issues
img: assets/img/ai-villa.jpg
importance: 1
category: work
related_publications: false
---

## AI Village - Multi-Agent GitHub Issue Fixer

A real-time multi-agent system that demonstrates LLM collaboration for fixing open-source GitHub issues. The system uses multiple AI agents with distinct personas to discover, analyze, debate, and propose fixes for GitHub issues.

### The Vision

Build an autonomous system where multiple AI agents collaborate to find and fix issues in open-source projects, with human oversight to ensure quality before PR submission.

### Architecture Evolution

**v1: CLI-Based System**

- Researcher, Critic, and Planner agents using Ollama
- Manual RAG implementation with FAISS and sentence-transformers
- Shared context retrieval for agent collaboration

**v2: Streamlit UI (Proof of Concept)**

- Streamlit-based demo interface
- Scout agent for GitHub issue discovery
- UI blocking issues during LLM inference

**v3: Production-Ready React + FastAPI**

- WebSocket streaming for real-time updates
- React frontend with component-level updates
- FastAPI backend with async support for concurrent agents

### System Architecture

```
┌─────────────────────────────────────────────────────────┐
│              React Frontend (Vite)                       │
│  ┌─────────────┐  ┌──────────────┐  ┌──────────────┐   │
│  │ ScoutPanel  │  │ Roundtable    │  │ ResultsPanel │   │
│  │             │  │ Panel         │  │ + Review     │   │
│  └─────────────┘  └──────────────┘  └──────────────┘   │
│                        │                                 │
│                 useWebSocket Hook                        │
└────────────────────────┼─────────────────────────────────┘
                         │ WebSocket
                         │ (real-time events)
┌────────────────────────▼─────────────────────────────────┐
│              FastAPI Backend                             │
│  ┌──────────────────────────────────────────────────┐   │
│  │         /ws/pipeline endpoint                      │   │
│  │    (streams events as async generators)           │   │
│  └──────────────────────────────────────────────────┘   │
│                       │                                   │
│    ┌──────────────────┼──────────────────┐              │
│    ▼                  ▼                  ▼              │
│ ┌──────────┐   ┌──────────┐   ┌──────────┐            │
│ │  Scout   │   │Roundtable │   │   LLM    │            │
│ │  Agent   │   │  Debate   │   │ Wrapper  │            │
│ │(Mistral) │   │ (3 LLMs)  │   │(Ollama)  │            │
│ └──────────┘   └──────────┘   └──────────┘            │
└─────────────────────────────────────────────────────────┘
```

### Multi-Agent System

**Scout Agent (Mistral 7B)**

- Discovers beginner-friendly GitHub issues
- Analyzes issue complexity and requirements
- Provides context for the roundtable debate

**Roundtable Debate System**
Three distinct AI personas collaborate on solutions:

| Agent            | Model         | Philosophy                           |
| ---------------- | ------------- | ------------------------------------ |
| **Conservative** | Llama 3.1 8B  | "Minimal changes, maximum stability" |
| **Innovative**   | Mixtral 8x7B  | "Let's do this the right way"        |
| **Quality**      | CodeLlama 13B | "What could go wrong?"               |

**Debate Process**

1. **Proposal Phase**: Each agent proposes a solution
2. **Critique Phase**: Agents critique each other's proposals
3. **Revision Phase**: Agents revise based on feedback
4. **Voting Phase**: Agents vote on the best solution

### Key Features

**Real-Time Streaming**

- Every agent action streams to the UI instantly
- Scout searching GitHub
- Each LLM "thinking" process
- Proposals, critiques, revisions
- Votes as they're cast

**Human-in-the-Loop**

- Review panel for approving/rejecting/editing fixes
- Edit code before PR submission
- Maintain quality control over AI-generated solutions

**Multi-LLM Orchestration**

- Different models assigned to different tasks based on strengths
- Mistral 7B for issue analysis
- Mixtral 8x7B for creative solutions
- CodeLlama 13B for code quality review

### Technical Implementation

**Frontend**

- React 18 with Vite for fast development
- WebSocket hook for real-time event streaming
- Component-level updates without full page reruns
- Custom dark theme with JetBrains Mono + Space Grotesk fonts

**Backend**

- FastAPI with async/await support
- WebSocket endpoint for streaming events
- Async generators for efficient event streaming
- Ollama API wrapper for LLM interactions

**Infrastructure**

- Local Ollama for development
- Google Colab + Cloudflare Tunnel for larger models
- Configuration system to switch between local/remote inference

### Challenges Solved

**Streamlit UI Blocking**

- v2 blocked UI during LLM inference (10-30 seconds)
- v3 uses WebSocket streaming for instant updates
- React components update independently

**Real-Time Event Streaming**

- Implemented async generators in FastAPI
- WebSocket protocol for bidirectional communication
- Event-driven architecture for decoupled components

**Multi-Agent Coordination**

- Structured debate format (propose → critique → revise → vote)
- Shared context between agents
- Winner selection algorithm

### Technologies Used

- **Python**: FastAPI, async generators, Ollama API
- **React**: Component architecture, WebSocket hooks
- **TypeScript**: Type-safe frontend code
- **Ollama**: Local and remote LLM inference
- **GitHub API**: Issue discovery and analysis
- **WebSockets**: Real-time bidirectional communication

### Future Enhancements

- GitHub PR submission integration
- SQLite database for tracking fixes
- Multi-repo continuous scanning
- Analytics dashboard
- Additional LLM agents (Reviewer, Tester)
- Acceptance rate tracking

### Impact

This project demonstrates:

- **Multi-agent collaboration** in practice
- **Real-time streaming** architecture for LLM applications
- **Human-in-the-loop** design for production AI systems
- **Iterative development** from proof-of-concept to production-ready

The system showcases how multiple AI agents can work together to solve complex problems, with proper oversight and quality control mechanisms.
