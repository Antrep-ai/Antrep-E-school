export const schoolModules = [
  {
    id: 1,
    slug: "idea-validation",
    title: "Idea Validation",
    description: "Learn how to stress-test your startup concept before writing a single line of code. Assess market size, founder-market fit, and urgency.",
    duration: "2 hours",
    level: "Beginner",
    category: "Startup Basics",
    lessons: [
      { id: "l1", title: "The Anatomy of a Great Startup Idea", duration: "15 mins" },
      { id: "l2", title: "Evaluating Founder-Market Fit", duration: "20 mins" },
      { id: "l3", title: "Calculating TAM, SAM, and SOM", duration: "25 mins" },
      { id: "l4", title: "Analyzing Competitors and Value Propositions", duration: "20 mins" }
    ],
    assignment: {
      title: "The Validation Matrix",
      description: "Fill out the ANTREP Validation Template to define your core hypothesis, estimate your initial TAM, and list your top 3 competitor vulnerabilities.",
      deliverable: "Google Doc link or PDF outlining TAM calculations and competitor breakdown."
    },
    resources: [
      { name: "Market Sizing Worksheet (Google Sheets)", url: "#" },
      { name: "Validation Checklist PDF", url: "#" }
    ]
  },
  {
    id: 2,
    slug: "customer-discovery",
    title: "Customer Discovery",
    description: "Master the art of non-biased user interviews. Formulate discovery questions, run cohort surveys, and find your early evangelists.",
    duration: "3 hours",
    level: "Beginner",
    category: "Startup Basics",
    lessons: [
      { id: "l1", title: "The Mom Test: How to talk to customers", duration: "25 mins" },
      { id: "l2", title: "Designing a Discovery Discussion Guide", duration: "20 mins" },
      { id: "l3", title: "Finding and Recruiting Interviewees", duration: "20 mins" },
      { id: "l4", title: "Synthesizing Qualitative Customer Feedback", duration: "30 mins" }
    ],
    assignment: {
      title: "Discovery Interviews",
      description: "Conduct at least 5 interviews with potential customers using non-leading questions. Document their biggest pain points and motivations.",
      deliverable: "Interview log with answers from 5 unique target users."
    },
    resources: [
      { name: "Customer Discovery Interview Guide Template", url: "#" },
      { name: "Mom Test Summary & Cheat Sheet", url: "#" }
    ]
  },
  {
    id: 3,
    slug: "mvp-planning",
    title: "MVP Planning",
    description: "Learn to design a Minimum Viable Product that focuses only on core value. Understand no-code prototyping, scoping, and feedback loops.",
    duration: "2.5 hours",
    level: "Beginner",
    category: "Product",
    lessons: [
      { id: "l1", title: "Defining the Core Value Hypothesis", duration: "20 mins" },
      { id: "l2", title: "The 'Lean' MVP: Feature Prioritization Matrix", duration: "25 mins" },
      { id: "l3", title: "No-Code & Low-Code Prototyping Tools", duration: "30 mins" },
      { id: "l4", title: "Setting Success Metrics for Your MVP", duration: "20 mins" }
    ],
    assignment: {
      title: "MVP Scope Document",
      description: "Draft a 1-page spec sheet highlighting your MVP's core feature, flow diagram, and list of excluded features.",
      deliverable: "Product Spec Document (PDF/Doc) outlining MVP scope."
    },
    resources: [
      { name: "MVP Feature Matrix Template", url: "#" },
      { name: "Guide to No-Code Platforms for Startups", url: "#" }
    ]
  },
  {
    id: 4,
    slug: "gtm-strategy",
    title: "Go-To-Market Strategy",
    description: "Plan your initial customer acquisition engine. Position your product, set pricing, choose channels, and run cheap marketing experiments.",
    duration: "3.5 hours",
    level: "Intermediate",
    category: "GTM",
    lessons: [
      { id: "l1", title: "Finding Your Ideal Customer Profile (ICP)", duration: "25 mins" },
      { id: "l2", title: "Positioning & Messaging Frameworks", duration: "25 mins" },
      { id: "l3", title: "Selecting Your Launch Channels", duration: "30 mins" },
      { id: "l4", title: "Designing and Measuring GTM Experiments", duration: "30 mins" }
    ],
    assignment: {
      title: "The Launch Blueprint",
      description: "Define your ICP, create your core marketing messages for 2 channels, and map out a 30-day budget-friendly launch schedule.",
      deliverable: "Go-to-Market Action Plan."
    },
    resources: [
      { name: "ICP Template (Google Docs)", url: "#" },
      { name: "GTM Experiment Tracker (Spreadsheet)", url: "#" }
    ]
  },
  {
    id: 5,
    slug: "pitch-deck-prep",
    title: "Pitch Deck Preparation",
    description: "Design a compelling 10-12 slide pitch deck that tells a powerful story. Learn what investors expect to see on every slide.",
    duration: "4 hours",
    level: "Intermediate",
    category: "Fundraising",
    lessons: [
      { id: "l1", title: "Structuring the Narrative Arc", duration: "30 mins" },
      { id: "l2", title: "The Problem, Solution & Market Slides", duration: "30 mins" },
      { id: "l3", title: "Traction, Business Model, and The Ask", duration: "40 mins" },
      { id: "l4", title: "Visual Design & Formatting Best Practices", duration: "20 mins" }
    ],
    assignment: {
      title: "Draft Pitch Deck",
      description: "Build a first draft of your pitch deck (10-12 slides) using the ANTREP framework, focusing on problem clarity and team strengths.",
      deliverable: "Link to Google Slides/PDF of the pitch deck."
    },
    resources: [
      { name: "ANTREP Pitch Deck Master Template", url: "#" },
      { name: "Examples of Famous Seed Pitch Decks", url: "#" }
    ]
  },
  {
    id: 6,
    slug: "financial-modelling-basics",
    title: "Financial Modelling Basics",
    description: "Demystify startup finance. Learn how to project revenue, forecast expenses, calculate burn rate, and determine runway.",
    duration: "3 hours",
    level: "Intermediate",
    category: "Finance",
    lessons: [
      { id: "l1", title: "Understanding the Three Financial Statements", duration: "30 mins" },
      { id: "l2", title: "Building a Bottom-Up Revenue Forecast", duration: "35 mins" },
      { id: "l3", title: "Forecasting Hiring and Operating Expenses", duration: "25 mins" },
      { id: "l4", title: "Managing Cash Flow, Burn Rate, and Runway", duration: "30 mins" }
    ],
    assignment: {
      title: "12-Month Runway Forecast",
      description: "Build a basic 12-month spreadsheet model showing projected headcount, operating costs, and remaining cash runway under a low-revenue scenario.",
      deliverable: "Link to Excel or Google Sheet Financial Model."
    },
    resources: [
      { name: "Starter Financial Model Template (XLSX)", url: "#" },
      { name: "Runway & Burn Rate Calculator", url: "#" }
    ]
  },
  {
    id: 7,
    slug: "fundraising-readiness",
    title: "Fundraising Readiness",
    description: "Understand the startup fundraising process. Decipher SAFE agreements, convertible notes, equity pricing, cap tables, and key term sheets.",
    duration: "2 hours",
    level: "Intermediate",
    category: "Fundraising",
    lessons: [
      { id: "l1", title: "Fundraising Instruments: SAFEs vs. Equity", duration: "20 mins" },
      { id: "l2", title: "Understanding Valuation Caps and Discount Rates", duration: "25 mins" },
      { id: "l3", title: "Reading a Cap Table: Dilution 101", duration: "25 mins" },
      { id: "l4", title: "Key Terms in Pre-Seed/Seed Term Sheets", duration: "30 mins" }
    ],
    assignment: {
      title: "Dilution Scenario Analysis",
      description: "Calculate your founder equity percentage after a hypothetical $500k SAFE round with a $5M valuation cap.",
      deliverable: "Cap table sheet showing post-round ownership percentages."
    },
    resources: [
      { name: "Cap Table Template (Google Sheets)", url: "#" },
      { name: "Y Combinator SAFE Documents Guide", url: "#" }
    ]
  },
  {
    id: 8,
    slug: "investor-outreach",
    title: "Investor Outreach",
    description: "Build your target investor list and master the warm intro. Craft high-converting cold email sequences and manage your investor CRM.",
    duration: "3 hours",
    level: "Advanced",
    category: "Investor Outreach",
    lessons: [
      { id: "l1", title: "Building a Targeted Investor List", duration: "25 mins" },
      { id: "l2", title: "The Double Opt-In Intro Method", duration: "20 mins" },
      { id: "l3", title: "Writing a Killer Cold Email Copy", duration: "25 mins" },
      { id: "l4", title: "Setting Up Your CRM and Tracking Deals", duration: "20 mins" }
    ],
    assignment: {
      title: "Outreach Campaign Plan",
      description: "Compile a list of 10 venture capital firms or angel investors that match your sector. Draft a custom 3-step outreach sequence for them.",
      deliverable: "Investor Shortlist Sheet and Cold Outreach Copy."
    },
    resources: [
      { name: "Investor Tracker CRM Template", url: "#" },
      { name: "Cold Email Templates That Got Funded", url: "#" }
    ]
  },
  {
    id: 9,
    slug: "legal-basics",
    title: "Legal Basics",
    description: "Protect your startup from day one. Understand founder vesting, IP assignment, company incorporation, and advisor agreements.",
    duration: "2 hours",
    level: "Intermediate",
    category: "Legal",
    lessons: [
      { id: "l1", title: "Incorporation: Where and How", duration: "20 mins" },
      { id: "l2", title: "Founder Agreements & Vesting Schedules", duration: "25 mins" },
      { id: "l3", title: "Intellectual Property Assignment Forms", duration: "20 mins" },
      { id: "l4", title: "Advisor Agreements and Options (FAST Template)", duration: "20 mins" }
    ],
    assignment: {
      title: "Co-founder Vesting Plan",
      description: "Create a draft founder agreement outlining equity distribution, roles, and a 4-year vesting schedule with a 1-year cliff.",
      deliverable: "Draft Founder Agreement termsheet."
    },
    resources: [
      { name: "Standard Founder Vesting Termsheet Template", url: "#" },
      { name: "IP Assignment Agreement Draft", url: "#" }
    ]
  },
  {
    id: 10,
    slug: "scaling-operations",
    title: "Scaling Operations",
    description: "Transition from building a product to building a company. Learn hiring processes, goal tracking (OKRs), and operating cadences.",
    duration: "3 hours",
    level: "Advanced",
    category: "Startup Basics",
    lessons: [
      { id: "l1", title: "Defining Roles & Your First Key Hires", duration: "25 mins" },
      { id: "l2", title: "Implementing OKRs for High Performance", duration: "30 mins" },
      { id: "l3", title: "Building a Remote-First Team Culture", duration: "20 mins" },
      { id: "l4: ", title: "Establishing Weekly & Monthly Operating Rhythms", duration: "25 mins" }
    ],
    assignment: {
      title: "Quarterly OKR Mapping",
      description: "Map out 3 core Objectives and 3 measurable Key Results (KRs) for each objective for your startup's upcoming quarter.",
      deliverable: "Quarterly OKR Document."
    },
    resources: [
      { name: "Startup OKR Tracker Sheet", url: "#" },
      { name: "Sample Employee Vesting & Offer Letters", url: "#" }
    ]
  }
];
