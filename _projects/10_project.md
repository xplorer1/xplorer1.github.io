---
layout: page
title: Enterprise AI Audit Trail
description: Production-ready LLM observability platform for enterprise compliance, cost analytics, and anomaly detection
img: assets/img/audit-trail.png
importance: 1
category: work
related_publications: false
---

## Enterprise AI Audit Trail

A drop-in observability layer for OpenAI API usage, designed for enterprises that need compliance, cost visibility, and security monitoring for their LLM applications.

### The Challenge

As enterprises adopt LLM technology at scale, they face critical challenges:
- **Compliance concerns** (GDPR, SOC2) blocking AI adoption
- **Cost visibility** across teams, projects, and models
- **Security monitoring** for prompt injection and anomalous usage
- **Audit trails** for debugging and accountability

### Solution Architecture

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────┐
│  Your App       │────▶│  Audit Trail     │────▶│  OpenAI API │
│  (OpenAI SDK)   │     │  Proxy Server    │     │             │
└─────────────────┘     └────────┬─────────┘     └─────────────┘
                                 │
                    ┌────────────┼────────────┐
                    ▼            ▼            ▼
              ┌──────────┐ ┌──────────┐ ┌──────────┐
              │ Postgres │ │ Anomaly  │ │ Dashboard│
              │ Logs     │ │ Detector │ │ API      │
              └──────────┘ └──────────┘ └──────────┘
```

### Key Features

| Feature | Description |
|---------|-------------|
| **Transparent Proxy** | Drop-in replacement for OpenAI base URL - no code changes needed |
| **Complete Audit Trail** | Every API call logged with full metadata, tokens, cost, latency |
| **Real-time Anomaly Detection** | Latency spikes, token anomalies, prompt injection attempts |
| **Cost Analytics** | Breakdown by model, user, team, and time period |
| **Compliance Reports** | One-click GDPR/SOC2 exports in JSON or CSV |

### Technical Implementation

**Backend (Node.js/TypeScript)**

- Express server with OpenAI API proxy middleware
- Buffered async batch writes to PostgreSQL
- Real-time anomaly detection service with pattern matching
- REST API endpoints for dashboard data

**Anomaly Detection**

The system detects multiple anomaly types in real-time:

```typescript
// Example anomaly types detected
type AnomalyType = 
  | 'latency_spike'      // Response > threshold (configurable)
  | 'token_spike'        // Usage > 1.5x rolling average
  | 'prompt_injection'   // Pattern matching for injection attempts
  | 'error_rate'         // Elevated error frequency
  | 'unusual_model';     // Unknown model requests
```

**Frontend (Next.js 14)**

- Premium dark theme dashboard with real-time updates
- Recharts visualizations for usage trends and cost breakdown
- Paginated audit log viewer with search and filtering
- Anomaly alerts with severity-based styling

### Integration

Simply change your OpenAI base URL:

```typescript
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: 'http://localhost:3001/v1', // Point to audit trail
});

// Use exactly as before - all calls are now logged
const response = await openai.chat.completions.create({
  model: 'gpt-4o',
  messages: [{ role: 'user', content: 'Hello!' }],
});
```

### Technologies Used

- **Backend**: Node.js, TypeScript, Express, PostgreSQL
- **Frontend**: Next.js 14, React, Recharts, Lucide Icons
- **Infrastructure**: Docker, Docker Compose
- **APIs**: OpenAI SDK proxy pattern

### Relevance to AI Deployment

This project addresses the gap between AI research and production deployment—the exact space where Forward Deployed Engineers operate. It demonstrates:

- Understanding of enterprise customer needs
- Full-stack production engineering skills
- Security and compliance awareness
- Customer-centric product thinking

### Future Enhancements

- Multi-tenant support with role-based access
- Slack/webhook integrations for alerts
- Vector store for semantic search over conversations
- Cost forecasting and budget alerts
