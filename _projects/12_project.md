---
layout: page
title: Technical Assistant
description: Local RAG-based conversational AI for team knowledge sharing using Ollama and open source tools
img: assets/img/tech-assistant.png
importance: 3
category: work
related_publications: false
---

## Technical Assistant

A conversational AI system designed to help junior engineers and interns get answers to technical questions without requiring constant senior engineer involvement. Built entirely with open source tools for local deployment, ensuring data privacy and zero API costs.

### The Problem

Junior engineers and interns frequently need guidance on:

- Team-specific coding patterns and conventions
- Project architecture and design decisions
- Debugging common issues
- Best practices and documentation

This creates a continuous demand on senior engineer time. A local technical assistant can provide 80% of these answers instantly, freeing up senior engineers for more complex problems.

### Solution

A RAG-based (Retrieval Augmented Generation) chat interface that:

- Runs entirely locally using Ollama
- Indexes team documentation, code examples, and internal wikis
- Maintains conversation context for follow-up questions
- Indicates uncertainty and suggests consulting seniors when appropriate

### Key Features

| Feature                      | Description                                               |
| ---------------------------- | --------------------------------------------------------- |
| **Natural Language Queries** | Ask questions in plain English, get contextual answers    |
| **Conversation Memory**      | Maintains context for follow-up questions within sessions |
| **Source References**        | Links to relevant documentation for each answer           |
| **Knowledge Base Updates**   | Re-indexes documentation within 5 minutes of changes      |
| **Uncertainty Handling**     | Explicitly flags low-confidence answers                   |

### Technical Requirements

**Query Processing**

```
WHEN a user submits a text query
THEN the Technical Assistant SHALL process the query
AND generate a relevant response within 30 seconds
```

**Knowledge Base Integration**

```
WHEN an administrator uploads documentation files
THEN the Technical Assistant SHALL index the content for future reference
SUPPORTING formats: Markdown, plain text, PDF
```

**Local Inference**

```
WHEN processing queries
THEN the Technical Assistant SHALL send all data only to the local Ollama instance
WITHOUT external network calls
```

### Architecture

```
┌─────────────────────────────────────────────────────┐
│                 Chat Interface                       │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐ │
│  │ Query Input │  │ Conversation│  │   Session   │ │
│  │             │  │   History   │  │  Selector   │ │
│  └─────────────┘  └─────────────┘  └─────────────┘ │
└────────────────────────┬────────────────────────────┘
                         │
┌────────────────────────▼────────────────────────────┐
│                   RAG Pipeline                       │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐ │
│  │  Embeddings │  │   Vector    │  │   Context   │ │
│  │  (local)    │  │   Store     │  │   Window    │ │
│  └─────────────┘  └─────────────┘  └─────────────┘ │
└────────────────────────┬────────────────────────────┘
                         │
┌────────────────────────▼────────────────────────────┐
│                     Ollama                           │
│  ┌─────────────────────────────────────────────────┐│
│  │  Local LLM (Llama 3.1, Mistral, CodeLlama, etc) ││
│  └─────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────┘
```

### User Interface

The chat interface includes:

1. **Text Input Field**: Natural language query submission
2. **Conversation History**: Scrollable thread of Q&A
3. **Loading Indicator**: Visual feedback during inference
4. **Code Formatting**: Syntax highlighting for code blocks
5. **Session Management**: Save, load, and continue past conversations

### Technologies Used

- **Ollama**: Local LLM inference (Llama 3.1, Mistral, CodeLlama)
- **Vector Store**: FAISS or ChromaDB for document embeddings
- **Embeddings**: Sentence-transformers for semantic search
- **Frontend**: React-based chat interface
- **Storage**: Local SQLite for conversation persistence

### Privacy & Cost Benefits

| Aspect            | Traditional Approach       | Technical Assistant              |
| ----------------- | -------------------------- | -------------------------------- |
| **Data Privacy**  | Queries sent to cloud APIs | All data stays local             |
| **API Costs**     | $0.01-0.03 per query       | $0 (local inference)             |
| **Latency**       | Network-dependent          | Consistent local speed           |
| **Customization** | Limited                    | Full control over knowledge base |

### Use Cases

1. **Onboarding**: New team members get instant answers about codebase
2. **Documentation Search**: Natural language queries over internal docs
3. **Code Examples**: Request examples of team-specific patterns
4. **Debugging Help**: Get suggestions for common error messages
5. **Best Practices**: Quick reference for team conventions

### Future Enhancements

- Integration with IDE plugins (VS Code, JetBrains)
- Slack bot interface for team-wide access
- Automatic documentation ingestion from Git repos
- Fine-tuning on team-specific Q&A pairs
- Analytics dashboard for common questions
