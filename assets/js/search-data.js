// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "a selection of my blog posts",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "a selection of my projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "a selection of my repositories",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Chijioke Ugwuanyi - Machine Learning Engineer &amp; Researcher at Carnegie Mellon University",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-replication-of-koorndijk-2025-differential-compliance-may-be-lexical-not-strategic",
        
          title: "Replication of Koorndijk (2025): Differential Compliance May Be Lexical, Not Strategic",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/koorndijk-replication/";
          
        },
      },{id: "post-replication-of-betley-et-al-2025-qlora-fine-tuning-produces-code-mode-collapse-not-emergent-misalignment",
        
          title: "Replication of Betley et al. (2025): QLoRA Fine-Tuning Produces Code Mode Collapse, Not...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/emergent-misalignment-replication/";
          
        },
      },{id: "post-hoppscotch-api-live-sync-part-1-introduction",
        
          title: "Hoppscotch API Live Sync - Part 1: Introduction",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/hoppscotch-api-live-sync/";
          
        },
      },{id: "post-api-live-sync-part-6-sync-engine",
        
          title: "API Live Sync Part 6: Sync Engine",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/api-live-sync-6-sync-engine/";
          
        },
      },{id: "post-api-live-sync-part-5-file-watching",
        
          title: "API Live Sync Part 5: File Watching",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/api-live-sync-5-file-watching/";
          
        },
      },{id: "post-api-live-sync-part-4-openai-fetcher",
        
          title: "API Live Sync Part 4: OpenAI Fetcher",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/api-live-sync-4-openai-fetcher/";
          
        },
      },{id: "post-api-live-sync-part-3-live-sync-service",
        
          title: "API Live Sync Part 3: Live Sync Service",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/api-live-sync-3-service/";
          
        },
      },{id: "post-api-live-sync-part-2-live-source-data-structures-and-types",
        
          title: "API Live Sync Part 2: Live Source Data Structures and Types",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/api-live-sync-2-data-structures/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "projects-enterprise-ai-audit-trail",
          title: 'Enterprise AI Audit Trail',
          description: "Production-ready LLM observability platform for enterprise compliance, cost analytics, and anomaly detection",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project/";
            },},{id: "projects-alignment-faking-detector",
          title: 'Alignment Faking Detector',
          description: "AI safety evaluation suite using UK AISI&#39;s Inspect framework to detect behavioral inconsistencies under observation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/11_project/";
            },},{id: "projects-technical-assistant",
          title: 'Technical Assistant',
          description: "Local RAG-based conversational AI for team knowledge sharing using Ollama and open source tools",
          section: "Projects",handler: () => {
              window.location.href = "/projects/12_project/";
            },},{id: "projects-adversarial-robustness-research",
          title: 'Adversarial Robustness Research',
          description: "Evaluating Model Robustness to Adversarial Attacks on CIFAR-10",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-mlops-pipeline",
          title: 'MLOps Pipeline',
          description: "End-to-End Data Engineering Pipeline for Machine Learning Operations",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-computer-vision-for-autonomous-vehicles",
          title: 'Computer Vision for Autonomous Vehicles',
          description: "Object Detection and Tracking Algorithms for Self-Driving Cars",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-comparative-analysis-of-classification-models",
          title: 'Comparative Analysis of Classification Models',
          description: "Machine Learning Model Evaluation for Loan Approval Prediction",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-plaid-shell-implementation",
          title: 'Plaid Shell Implementation',
          description: "Building a Fully Featured Linux Shell from Scratch in C",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-multimodal-emotion-recognition",
          title: 'Multimodal Emotion Recognition',
          description: "Audio, Vision, Text, and Gestures for Enhanced Emotion Understanding",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-cognitive-offloading-in-ai-assisted-coding",
          title: 'Cognitive Offloading in AI-Assisted Coding',
          description: "Self-Experiment on AI-Assisted versus Manual Coding Effects",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-hoppscotch-api-live-sync",
          title: 'Hoppscotch API Live Sync',
          description: "Production-ready automatic API collection synchronization for code-first development",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-ai-village-multi-agent-github-issue-fixer",
          title: 'AI Village - Multi-Agent GitHub Issue Fixer',
          description: "Real-time multi-agent system demonstrating LLM collaboration on open-source GitHub issues",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%75%67%77%75%61%6E%79@%61%6E%64%72%65%77.%63%6D%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/xplorer1", "_blank");
        },
      },{
        id: 'social-kaggle',
        title: 'Kaggle',
        section: 'Socials',
        handler: () => {
          window.open("https://www.kaggle.com/chijiokeugwuanyi", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/chijiokeugwuanyi13", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
