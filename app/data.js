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
      { url: "/speaker.jpeg", alt: "Speaker volume adjustment + Spotify playlist cards" },
      { url: "/build.jpeg", alt: "Raspberry Pi hardware setup and mounting" }
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
      { url: "/wordtracker-code.png", alt: "Custom tokenization algorithm and nested map architecture" },
      { url: "/wordtracker-terminal.png", alt: "CLI output displaying word frequencies, source files, and specific line numbers" }
    ]
  },
  {
    slug: "xml-parser",
    title: "XML Validator & Custom Data Structures",
    description: "A Java command-line tool that checks XML documents for formatting errors. Built from scratch using custom data structures instead of standard Java libraries.",
    techStack: ["Java", "Custom ADTs", "Data Validation", "JUnit Testing", "CLI"],
    
    overview: "Missing tags or broken formatting in XML files can easily cause programs to crash. I built a tool to safely scan these files, check their structure, and report any errors. To better understand how memory is managed under the hood, I avoided standard Java libraries and built the core architecture from scratch, using my own Stacks, Queues, and Linked Lists.",
    
    techBreakdown: [
      {
        tech: "Custom Data Structures",
        details: "Wrote custom Stacks, Queues, and Doubly Linked Lists to read through documents and track errors. This gave me direct control over how the program uses memory."
      },
      {
        tech: "Validation Engine",
        details: "Built a parser that reads documents line-by-line. It uses the custom Stack to match opening and closing tags to make sure the file is formatted correctly."
      },
      {
        tech: "Software Testing",
        details: "Wrote JUnit test suites to prove that the custom data structures work reliably and that the parser can handle broken data without crashing."
      }
    ],

    features: [
      "Checks XML files for missing tags to prevent application crashes",
      "Built entirely with custom Stacks, Queues, and Doubly Linked Lists",
      "Prints clear, line-by-line error reports to help users fix broken files",
      "Tested with JUnit to make sure the code is reliable"
    ],

    images: [
      { url: "/xml-parser-code.png", alt: "Custom XML validator code" },
      { url: "/xml-parser-terminal.png", alt: "Terminal output showing line-by-line error reports" }
    ]
  },
];