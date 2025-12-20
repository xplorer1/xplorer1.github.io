---
layout: cv
permalink: /cv/
title: cv
nav: true
nav_order: 4
cv_pdf: chijioke-ugwuanyi-cv.pdf # you can also use external links here
description: Chijioke Ugwuanyi - Machine Learning Engineer & Researcher at Carnegie Mellon University
toc:
  sidebar: left
---

## Chijioke Ugwuanyi

Carnegie Mellon University | M.Sc. Information Technology (2024-2025)

---

## Education

**Carnegie Mellon University** | August 2024 – December 2025  
_M.Sc., Information Technology_

**University of Nigeria** | September 2015 – November 2019  
_B.Sc., Biological and Data Science | Grade: Second Class Honours_

---

## Experience

**Senior Software Engineer, Diedev GmbH, Germany** | Remote | May 2024 – Present

- Led a 4-engineer team to deliver major product upgrade that increased company revenue by 35% within six months through improved feature delivery and system performance
- Designed and deployed production API gateway in Rust handling 1,000+ RPS with sub-100ms p99 latency, implementing intelligent routing, rate limiting, and distributed tracing
- Modernized critical Python 2 services to Rust, reducing build times by 60% and deployment frequency from weekly to daily releases
- Built scalable backend services and data ingestion pipelines, taking end-to-end ownership from design through production rollout and monitoring
- Improved CI/CD pipelines and observability infrastructure, enabling faster iteration cycles and smoother cross-team collaboration
- Developed full-stack features using TypeScript and Python, contributing across backend APIs, data pipelines, and frontend interfaces

**AI Intern, Jego Pods, United States** | Remote | Jul 2024 – Jan 2025

- Developed machine learning models to classify bad roads using computer vision techniques, collaborating in a Scrum (Agile) environment
- Designed predictive algorithms for energy demand forecasting in Jego EVs using time series analysis and regression models
- Built computer vision algorithms for object detection and tracking for self-driving cars, implementing real-time processing pipelines
- Applied deep learning frameworks (PyTorch, TensorFlow) for model training and deployment in production environments

**Senior Software Engineer, Interswitch, Lagos, Nigeria** | On Site | Nov 2021 – Jul 2024

- Architected and built automated reconciliation system processing 100K+ daily transactions, reducing manual operations overhead by 25% and eliminating error-prone spreadsheet workflows
- Led technical scoping for enterprise clients alongside sales and product teams, translating business requirements into scalable solutions that closed 3 deals worth $200K+ combined
- Established engineering documentation standards and onboarding program, reducing new hire ramp-up time from 8 weeks to 4 weeks
- Built resilient, scalable features using Kafka/SQS messaging patterns for at-least-once delivery, ensuring data consistency across distributed services
- Implemented comprehensive logging, metrics, and tracing for operational excellence, maintaining high standards for documentation and enabling 40% faster incident resolution
- Owned full lifecycle of data infrastructure—from schema design and pipeline architecture through deployment, monitoring, and scaling to handle growing transaction volumes
- Worked cross-functionally with product, infrastructure, and data teams to design data models and ingestion strategies for new transaction types

**Software Engineer, Minerva Technologies, Nigeria** | Remote | Jan 2021 – Nov 2021

- Designed and built internal admin platform with role-based access control and audit logging, enabling support teams to independently resolve 90% of merchant issues without engineering escalation
- Developed automated merchant transaction reversal system using event-driven architecture, increasing support throughput by 50%+ and reducing average resolution time from 2 hours to 15 minutes
- Shipped backend APIs and frontend features for fintech application serving 3M+ users, implementing payment processing, user authentication, and transaction history
- Built machine learning pipeline for digital identity verification and fraud detection using scikit-learn and custom feature engineering, reducing merchant verification steps and time by at least 2 hours per day
- Thrived in fast-paced startup environment, staying focused as priorities shifted and shipping scalable systems weekly with strong testing and code quality standards

**Software Engineer, Adbasador Media Limited, Nigeria** | On Site | Jun 2017 – Nov 2021

- Built content management and delivery platform serving 50K+ daily active users, implementing caching strategies that reduced API response times by 40% and improved user engagement
- Led AWS cloud migration for monolithic application, implementing containerized microservices with CI/CD pipelines that reduced deployment downtime from 2 hours to under 10 minutes
- Developed real-time analytics dashboard and reporting tools using TypeScript/React and PostgreSQL, enabling business teams to track KPIs and make data-driven decisions
- Architected, designed, developed, and maintained 3 software solutions, re-engineering existing software quality to decrease page load times to less than 1 second
- Created optimized implementation plans ensuring smooth rollout resulting in 50% productivity enhancement; analyzed business processes and software requirements for implementation across multiple solutions

---

## Projects

**Hoppscotch API Live Sync** | Open Source Contributor

- Built production-ready feature for automatic API collection synchronization, enabling code-first API development workflow
- Implemented intelligent framework detection for FastAPI, Express, Spring Boot, ASP.NET Core, Django, Flask, Rails, and Laravel with port-based heuristics
- Designed real-time polling system with content hashing for change detection, incremental updates preserving user customizations, and persistent sync state
- Architected service-oriented system with TypeScript: LiveSpecSourceService, SyncEngineService, LiveSyncPollingService, and LiveSyncManagerService
- Solved complex technical challenges including path parameter format normalization ({id} vs <<id>>), combined change detection, and persistence across page refreshes
- Wrote comprehensive 6-part blog series documenting the complete implementation journey
- Technologies: TypeScript, React, WebSocket, OpenAPI, LocalStorage, Event-driven architecture

**AI Village - Multi-Agent GitHub Issue Fixer** | Research Project

- Built real-time multi-agent system demonstrating LLM collaboration for fixing open-source GitHub issues
- Implemented WebSocket streaming architecture with React frontend and FastAPI backend for instant UI updates during LLM inference
- Designed multi-LLM roundtable debate system with three distinct AI personas (Conservative, Innovative, Quality) using different models (Llama 3.1 8B, Mixtral 8x7B, CodeLlama 13B)
- Created Scout agent for GitHub issue discovery and analysis, integrated with Ollama API for local and remote LLM inference
- Implemented human-in-the-loop review panel for approving/rejecting/editing AI-proposed fixes before PR submission
- Evolved from Streamlit proof-of-concept (v2) to production-ready React + FastAPI system (v3) to solve UI blocking issues
- Technologies: Python, FastAPI, React, WebSocket, Ollama, GitHub API, async generators

**Evaluating Model Robustness to Adversarial Attacks** | Research Project

- Conducted adversarial robustness research on CIFAR-10 and VGGFace2 datasets using pretrained CNNs (ResNet-50, VGG16, MobileNetV2, EfficientNet)
- Revealed that ResNet-50 models drop from 87% to 9% accuracy under Fast Gradient Sign Method (FGSM) attacks
- Demonstrated that adversarial training can recover 55% of model robustness
- Implemented white-box and black-box attack scenarios, comparing resilience across different model architectures
- Technologies: PyTorch, TensorFlow, NumPy, adversarial ML techniques

**MLOps Pipeline - End-to-End Data Engineering**

- Engineered comprehensive data engineering pipeline including data ingestion, orchestration, transformation, and analysis
- Built scalable data processing workflows with proper error handling and monitoring
- Implemented data validation, quality checks, and transformation pipelines for production ML systems
- Technologies: Python, Pandas, data orchestration tools, cloud infrastructure

**Multimodal Emotion Recognition**

- Designed and evaluated deep learning models combining audio, visual, and textual signals to improve emotion recognition robustness
- Built end-to-end experimentation pipelines using Python and TensorFlow, iterating rapidly on model architectures
- Analyzed trade-offs between model complexity, accuracy, and real-world usability
- Technologies: TensorFlow, Python, multimodal learning, signal processing

**AI-Assisted Coding Productivity Study**

- Conducted controlled self-experiment comparing AI-assisted and manual coding workflows
- Analyzed impacts on productivity, cognitive load, and learning outcomes
- Deepened understanding of how developers interact with AI tools in real-world scenarios

**Comparative Analysis of Classification Models**

- Carried out research to identify the best machine learning model for loan approval prediction
- Evaluated models based on accuracy and area under curve (AUC) metrics
- Compared Logistic Regression, Random Forest, SVM, KNN, MLP, and XGBoost
- Technologies: scikit-learn, Python, Pandas, cross-validation

**Plaid Shell Implementation**

- Implemented a fully featured Linux shell from scratch using C
- Built command parsing, process management, job control, and I/O redirection
- Demonstrated systems programming skills and understanding of Unix internals

---

## Skills

**Programming Languages:** Python, TypeScript, JavaScript, Java, Rust, C/C++, SQL, Bash/Shell

**Machine Learning & AI:**

- Deep Learning: PyTorch, TensorFlow (ResNet50, VGG16, MobileNetV2, EfficientNet, transfer learning)
- Traditional ML: scikit-learn (Logistic Regression, Random Forest, SVM, KNN, MLP, pipelines, cross-validation), XGBoost
- Adversarial ML: FGSM attacks, white-box and black-box scenarios, adversarial training
- LLMs & Agents: Ollama API, multi-agent systems, RAG systems, tool calling, human-in-the-loop workflows

**Backend & Web Development:**

- Frameworks: Express.js (TypeScript), Spring Boot (Java), FastAPI (Python), Node.js
- APIs: REST APIs, WebSocket, gRPC, OpenAPI/Swagger
- Architecture: Microservices, event-driven systems, distributed systems

**Frontend Development:**

- Frameworks: React, Next.js
- Technologies: HTML/CSS, responsive UI development, real-time streaming interfaces

**Data Engineering:**

- Data Processing: Pandas, NumPy, data pipelines, ETL workflows
- Databases: PostgreSQL (schema design, migrations, optimization), MongoDB, Redis
- Message Systems: Kafka (queuing, at-least-once delivery), event-driven architecture

**Infrastructure & DevOps:**

- Cloud: AWS (EC2, S3), cloud-native deployments
- Containerization: Docker, Docker Compose, Kubernetes
- CI/CD: GitHub Actions, Jenkins
- Monitoring: Logs, metrics, distributed tracing, observability tooling

**Development Tools:**

- Version Control: Git, GitHub
- IDEs: VS Code
- Notebooks: Jupyter, Google Colab
- API Testing: Postman, Swagger/OpenAPI
- Design: Figma, Draw.io (system diagrams)

**Methodologies & Practices:**

- Agile/Scrum, Test-driven development, Clean code, Documentation-driven development
- End-to-end feature ownership, System design, Research-to-production workflows

---

---

## Leadership & Community Engagement

**Vice President Education, TechyTalkers Toastmasters Club** | 09/2024 - 10/2025

- Organized meetings, assigned speech roles, and ensured members progress through their educational pathways
- Connected new members with mentors, tracked individual progress, and recognized member achievements
- Created the meeting schedules, planned contests, and ensured high-quality learning experiences

**Member, Data Science Club, CMU-Africa** | 2024-2025

- Led a team to participate in the Disability AI Hackathon where we used disability datasets to build solutions for disabled people in Africa, came out in the top 5

**Volunteer, The Lagos Food Bank Initiative** | 01/2024 – 07/2024

- Facilitated outreaches and workshops on food distribution to indigent communities in Lagos, Nigeria
