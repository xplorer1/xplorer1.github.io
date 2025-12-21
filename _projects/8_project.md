---
layout: page
title: Hoppscotch API Live Sync
description: Production-ready automatic API collection synchronization for code-first development
img: assets/img/main_cover.png
importance: 1
category: work
related_publications: false
---

## Hoppscotch API Live Sync

A production-ready feature that automatically synchronizes API collections with development servers, eliminating manual imports and keeping API testing tools in sync with code changes in real-time.

### The Problem

Developers constantly face the friction of manually updating API collections after code changes. This creates outdated documentation, duplicate work, and breaks the code-first development workflow.

### The Solution

Live Sync automatically detects changes in OpenAPI specifications and updates collections in real-time, making Hoppscotch an integral part of the development workflow rather than a separate tool.

### Key Features

**🧠 Intelligent Framework Detection**

- Automatically detects FastAPI, Express, Spring Boot, ASP.NET Core, Django, Flask, Rails, and Laravel
- Port-based heuristics for ambiguous URL patterns
- Framework-specific optimizations and error recovery
- Manual override when auto-detection needs help

**⚡ Real-Time Synchronization**

- Automatic polling of OpenAPI specifications
- Intelligent change detection using content hashing
- Incremental updates that preserve user customizations
- Persistent sync state that survives page refreshes

**🔧 Robust Connection Handling**

- HEAD request with automatic GET fallback (for ASP.NET Swashbuckle)
- Comprehensive CORS detection and guidance
- Framework-specific error messages and recovery suggestions
- Connection testing that actually helps users succeed

**📁 Smart Collection Management**

- Automatic folder creation for tagged endpoints
- Intelligent endpoint matching and updates
- URL/method change detection and handling
- Conflict resolution that respects user customizations

### Technical Implementation

**Architecture**

- Service-oriented design with clear separation of concerns
- Event-driven architecture for real-time UI updates
- Type-safe implementation with full TypeScript coverage
- Flexible storage layer (in-memory and localStorage)

**Core Services**

- `LiveSpecSourceService`: Manages sources and connections
- `SyncEngineService`: Handles spec comparison and updates
- `LiveSyncPollingService`: Manages polling intervals and change detection
- `LiveSyncManagerService`: Orchestrates the entire system

**Framework Detection Algorithm**

```typescript
// Smart detection that considers both URL and port
if (url.includes("/api-docs")) {
  if (port === "8080" || port === "9000") {
    framework = "spring"; // Spring Boot commonly uses these ports
  } else if (port === "3000" || port === "8090") {
    framework = "express"; // Express commonly uses these ports
  }
}
```

### Challenges Overcome

**Format Differences**

- Discovered OpenAPI uses `{id}` for path parameters while Hoppscotch stores them as `<<id>>`
- Implemented path normalization to convert between formats
- Fixed method changes that were silently failing for parameterized endpoints

**Persistence After Page Refresh**

- Implemented proper async loading and collection-source matching
- Added fallback mechanisms for missing metadata
- Ensured sources and collections survive page refreshes

**Framework Detection Accuracy**

- Combined URL pattern matching with port-based heuristics
- Added manual override for edge cases
- Provided framework-specific setup guidance

### Impact

**For Developers**

- No more manual imports or outdated collections
- Code-first API development workflow
- Automatic synchronization with development servers

**For Teams**

- Shared Live Sync sources across teams
- Everyone stays on the same page automatically
- Reduced "did you update the collection?" messages

### Technologies Used

- **TypeScript** for type-safe implementation
- **React** for UI components
- **FastAPI/Express** detection and integration
- **WebSocket** for real-time updates
- **LocalStorage** for persistence

### Results

- **7+ frameworks supported** with automatic detection
- **100% type coverage** with TypeScript
- **Production-ready** with comprehensive error handling
- **Zero verbose logs** for clean console output
- **Persistent state** that survives page refreshes

### Blog Series

Documented the complete implementation in a 6-part blog series:

1. Introduction and Architecture
2. Live Source Data Structures and Types
3. Live Sync Service Implementation
4. OpenAI Fetcher Integration
5. File Watching System
6. Sync Engine Core Logic

[Read the full series on Hashnode →](https://creative-labs.hashnode.dev/series/hoppscotch-api-live-sync)
