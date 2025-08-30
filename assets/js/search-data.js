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
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "projects-multimodal-emotion-recognition",
          title: 'Multimodal Emotion Recognition',
          description: "Audio, Vision, Text, and Gestures for Enhanced Emotion Understanding",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project/";
            },},{id: "projects-cognitive-offloading-in-ai-assisted-coding",
          title: 'Cognitive Offloading in AI-Assisted Coding',
          description: "Self-Experiment on AI-Assisted versus Manual Coding Effects",
          section: "Projects",handler: () => {
              window.location.href = "/projects/11_project/";
            },},{id: "projects-physics-visualization-amp-simulation",
          title: 'Physics Visualization &amp;amp; Simulation',
          description: "Brownian Motion and Wave Mechanics Simulations",
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
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%68%69%6A%69%6F%6B%65.%75%67%77%75%61%6E%79%69@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/xplorer1", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
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
          window.open("https://www.linkedin.com/in/chijioke-ugwuanyi", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
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
