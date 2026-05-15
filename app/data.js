export const projects = [
  {
    slug: "shift-focus",
    title: "Shift Focus - Staff Scheduling Application",
    description: "An all-in-one staff scheduling and communication app designed for small businesses.",
    techStack: ["React", "Next.js", "AWS", "SQL", "Authentication", "REST APIs"],
    
    // NEW: Detailed case study data
    overview: "As the capstone project for my Software Development diploma, I led a 6-person Agile team to architect and build Shift Focus. The goal was to solve the chaotic shift-management process for small businesses by creating a centralized, real-time scheduling platform.",
    
    techBreakdown: [
      {
        tech: "React & Next.js",
        details: "Powered the frontend, allowing us to build a highly interactive, component-driven UI with the performance benefits of server-side rendering."
      },
      {
        tech: "Amazon Web Services (AWS)",
        details: "Managed the application's deployment & resourse scaling. Paired with a CI/CD Pipeline to automate the deployment of updates to the app"
      },
      {
        tech: "SQL Database",
        details: "Designed a relational database architecture to manage complex user roles, shift assignments, and availability, connected via Prisma ORM & Next.js server actions"
      },
      {
        tech: "Clerk Authentication",
        details: "Implemented secure, drop-in user authentication and session management. This allowed us to easily enforce role-based access control (RBAC) to protect sensitive administrative and managerial routes."
      }
    ],

    features: [
      "Interactive weekly scheduling dashboard for staff and managers",
      "Automated shift conflict detection to prevent double-booking",
      "Centralized communication hub for broadcasting staff announcements, upcoming events, and important notices",
      "Role-Based Access Control (RBAC) to protect administrative routes",
      "Secure, drop-in session management and login portals using Clerk",
      "Cloud-hosted infrastructure with automated deployment workflows"
    ],

    images: [
      { url: "/shift-focus-schedule.png", alt: "Daily schedule management and shift assignments" },
      { url: "/shift-focus-calendar.png", alt: "Monthly and weekly team calendar" },
      { url: "/shift-focus-team.png", alt: "Team management dashboard and role assignment" },
      { url: "/shift-focus-notices.png", alt: "Centralized team notices and announcements" },
      { url: "/shift-focus-notifications.png", alt: "Availability requests and shift trade approvals" },
      { url: "/shift-focus-staff.png", alt: "Staff schedule viewing with shift trade requests" }
    ]
  },
  {
    slug: "smart-home-dashboard",
    title: "Smart Home Automation Dashboard",
    description: "A local web dashboard built on a Raspberry Pi to control room lighting, media, and automations.",
    techStack: ["React", "Next.js", "Home Assistant", "Spotify API", "Linux CLI"],
    
    overview: "I built a centralized control dashboard using a Raspberry Pi to unify my smart home devices. It integrates various APIs to manage lighting, Spotify playback, and basic room automations from a single touchscreen interface.",
    
    techBreakdown: [
      {
        tech: "React & Next.js",
        details: "Built the frontend user interface using component-based architecture, optimized for a touchscreen display."
      },
      {
        tech: "Home Assistant & Spotify APIs",
        details: "Integrated Home Assistant and the Spotify API to allow local media control and device state monitoring."
      },
      {
        tech: "Raspberry Pi & Linux CLI",
        details: "Configured the underlying Raspberry Pi hardware, managing network settings and startup scripts via the Linux command line."
      }
    ],

    features: [
      "Touchscreen-optimized React UI for room controls",
      "Media and volume management integrated with the Spotify API",
      "Custom automation activation and control",
      "Deployed locally as an always-on kiosk using a Raspberry Pi"
    ],

    images: [
      { url: "/home.jpeg", alt: "Main lighting control interface" },
      { url: "/auto.jpeg", alt: "Automation activation cards" },
      { url: "/spotify.jpeg", alt: "Spotify playback display" },
      { url: "/speaker.jpeg", alt: "Spotify queue and search implementation" },
      { url: "/build.jpeg", alt: "Raspberry Pi hardware setup and mounting" }
    ]
  },
  {
    slug: "cli-auditor",
    title: "Audit-CLI: AI Powered Pre-Commit Guardrails",
    description: "A terminal based security engine that uses the Claude API to audit staged git changes for vulnerabilities and logical errors, providing a safety layer for developers using AI in their coding workflow.",
    techStack: ["Node.js", "Claude API", "Git CLI", "Claude Code", "Regex", "Security Auditing"],
    
    overview: "I architected this tool to address security concerns for developers integrating AI into their coding processes. It acts as a mandatory second set of eyes, using LLM semantic analysis to catch errors that standard linters might miss, such as SQL injection or missing async awaits.",
    
    techBreakdown: [
      {
        tech: "Claude API (Anthropic)",
        details: "Integrated the Anthropic Claude API with support for multiple models via CLI flags. I engineered strict system prompts to return high accuracy JSON risk reports."
      },
      {
        tech: "Node.js & Git CLI",
        details: "Built the core engine to interface directly with local Git repositories, dynamically fetching staged changes for targeted auditing."
      },
      {
        tech: "Claude Code",
        details: "Used Claude Code for rapid prototyping and scaffolded the CLI infrastructure, focusing manual efforts on the security logic and prompt engineering contract."
      }
    ],

    features: [
      "Real-time semantic scanning for OWASP Top 10 vulnerabilities",
      "Logical bug detection to identify flaws in code flow",
      "Automated risk scoring on a 1 to 10 scale with concrete, actionable fix suggestions",
      "Git integrated workflow supporting staged, unstaged, and branch level diffs",
      "Zero trust architecture: Only processes code diffs and never stores proprietary data",
      "Human in the loop design: Exit codes allow it to be used as a pre-commit hook"
    ],

    images: [
      { url: "/cli-auditor-main.png", alt: "CLI dashboard showing a High Risk warning for a hardcoded API key" },
      { url: "/cli-auditor-report.png", alt: "Detailed JSON audit report with line by line security suggestions" }
    ]
  },
 {
    slug: "word-frequency-tracker",
    title: "Word Frequency Tracker & Custom BST",
    description: "A command-line tool that parses text files to track word frequencies and locations. Built with a custom Binary Search Tree and Java serialization to persist data between executions.",
    techStack: ["Java", "Binary Search Trees", "Serialization", "CLI", "Regex"],
    
    overview: "A Java command-line utility built to parse text files and track word occurrences, including the exact files and line numbers where they appear. To optimize search speed and memory usage, I built a custom Binary Search Tree (BST) from scratch rather than relying on standard Java collections.",
    
    techBreakdown: [
      {
        tech: "Custom Data Structures",
        details: "Built a generic Binary Search Tree and custom Iterator interface to efficiently store, sort, and search the parsed word data."
      },
      {
        tech: "State Serialization",
        details: "Used Java Serialization to save the parsed tree and location maps to a local binary file. This allows the program to instantly load previous states without re-parsing the original text files."
      },
      {
        tech: "Text Parsing & Regex",
        details: "Used buffered File I/O and Regex pattern matching to read files line-by-line, strip punctuation, and accurately record line numbers."
      }
    ],

    features: [
      "Custom-built Binary Search Tree for optimized O(log n) data retrieval",
      "Persistent state management via binary repository serialization",
      "Regex-powered tokenization and memory-efficient data sanitization",
      "Dynamic CLI execution flags (-PI, -PF, -PO) for varied analytical reporting"
    ],

    images: [
      { url: "/wordtracker-code.svg", alt: "Architectural diagram of the data processing pipeline including text tokenization custom BST logic and binary state serialization for persistence" },
      { url: "/wordtracker-terminal.png", alt: "CLI output displaying word frequencies, source files, and specific line numbers" }
    ]
  },  
];