const subjectsData = [
  {
    title: "Data Structures and Algorithms",
    icon: "fa-solid fa-code",
    learned: [
      "Arrays",
      "Strings",
      "Stack",
      "Queue",
      "HashSet",
      "HashMap",
      "Trie",
      "Sliding Window",
      "Sieve of Eratosthenes",
      "Time Complexity"
    ],
    tools: ["Java", "LeetCode", "VS Code", "IntelliJ IDEA"]
  },
  {
    title: "Object Oriented Programming",
    icon: "fa-solid fa-cubes",
    learned: [
      "Classes and Objects",
      "Inheritance",
      "Polymorphism",
      "Encapsulation",
      "Abstraction",
      "Constructors"
    ],
    tools: ["Java", "IntelliJ IDEA", "VS Code"]
  },
  {
    title: "Software Engineering",
    icon: "fa-solid fa-diagram-project",
    learned: [
      "Requirement Analysis",
      "Modular Code",
      "Debugging",
      "Testing Basics",
      "Clean Code",
      "Deployment Flow"
    ],
    tools: ["GitHub", "VS Code", "IntelliJ IDEA", "Postman", "Draw.io"]
  },
  {
    title: "Web Development",
    icon: "fa-solid fa-laptop-code",
    learned: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "DOM Manipulation",
      "Forms",
      "API Fetching"
    ],
    tools: ["HTML", "CSS", "JavaScript", "Chrome DevTools", "VS Code"]
  },
  {
    title: "Frontend Development",
    icon: "fa-brands fa-react",
    learned: [
      "React Components",
      "Props",
      "State",
      "Hooks",
      "Custom Hooks",
      "Vite Project Setup",
      "Reusable UI Components"
    ],
    tools: ["React.js", "Vite", "Tailwind CSS", "npm", "VS Code"]
  },
  {
    title: "Backend Development",
    icon: "fa-solid fa-server",
    learned: [
      "REST APIs",
      "Routing",
      "Controllers",
      "Middleware",
      "Request and Response Handling",
      "Authentication Basics"
    ],
    tools: ["Node.js", "Express.js", "Flask", "Python", "Postman"]
  },
  {
    title: "Java Backend / Spring Boot",
    icon: "fa-solid fa-leaf",
    learned: [
      "Spring Boot Project Structure",
      "Controller Layer",
      "Service Layer",
      "Repository Layer",
      "Validation",
      "Exception Handling",
      "Spring Security Basics",
      "HTTP Basic Auth",
      "JWT Basics"
    ],
    tools: ["Java", "Spring Boot", "Maven", "IntelliJ IDEA", "Postman"]
  },
  {
    title: "Database Management System",
    icon: "fa-solid fa-database",
    learned: [
      "SQL Queries",
      "Tables",
      "Primary Key",
      "Foreign Key",
      "Relationships",
      "CRUD Operations",
      "JPA/Hibernate Basics"
    ],
    tools: ["MySQL", "PostgreSQL", "MongoDB", "H2 Database", "pgAdmin"]
  },
  {
    title: "Computer Networks",
    icon: "fa-solid fa-network-wired",
    learned: [
      "IP Addressing",
      "Subnetting",
      "Broadcast ID",
      "Network ID",
      "NAT",
      "Routing Basics",
      "TCP/IP",
      "HTTP/HTTPS"
    ],
    tools: [
      "Cisco Packet Tracer",
      "Wireshark",
      "Command Prompt",
      "Browser Network Tab"
    ]
  },
  {
    title: "Operating System",
    icon: "fa-solid fa-desktop",
    learned: [
      "Processes",
      "Threads",
      "Memory Management",
      "File System",
      "Scheduling Basics",
      "Command Line Usage"
    ],
    tools: ["Windows", "Linux Basics", "Terminal", "PowerShell"]
  },
  {
    title: "Computer Graphics",
    icon: "fa-solid fa-draw-polygon",
    learned: [
      "Line Drawing",
      "Thick Line Drawing",
      "Polygon Clipping",
      "2D Transformations",
      "Graphics Programming Basics"
    ],
    tools: ["C Language", "graphics.h", "Code::Blocks", "Turbo C/C++"]
  },
  {
    title: "Artificial Intelligence and RAG",
    icon: "fa-solid fa-brain",
    learned: [
      "RAG Concept",
      "Vector Embeddings",
      "Semantic Search",
      "LLM Integration",
      "AI Avatar Response System",
      "Prompt Engineering Basics"
    ],
    tools: ["Python", "LLMs", "Vector Database Basics", "Gemini API", "ChatGPT"]
  },
  {
    title: "3D Avatar and Visualization",
    icon: "fa-solid fa-vr-cardboard",
    learned: [
      "3D Character Creation",
      "Avatar Design",
      "Clothing Simulation",
      "GLB Export",
      "Web Deployment of 3D Model"
    ],
    tools: ["Unreal Engine", "MetaHuman", "Marvelous Designer", "GLB Viewer"]
  },
  {
    title: "Deployment and DevOps Basics",
    icon: "fa-solid fa-rocket",
    learned: [
      "Git Commands",
      "GitHub Repository",
      "Frontend Deployment",
      "Backend Deployment",
      "Environment Variables",
      "Build Errors"
    ],
    tools: ["Git", "GitHub", "Vercel", "Render", "Railway", "npm"]
  },
  {
    title: "API Testing and Debugging",
    icon: "fa-solid fa-bug",
    learned: [
      "API Request Testing",
      "Status Codes",
      "JSON Body",
      "Headers",
      "Authentication Testing",
      "CORS Debugging"
    ],
    tools: ["Postman", "Chrome DevTools", "Browser Console", "Terminal"]
  },
  {
    title: "Payment Gateway Integration",
    icon: "fa-solid fa-credit-card",
    learned: [
      "Test Mode Payment",
      "API Keys",
      "Order Creation",
      "Payment Verification",
      "Environment Variables"
    ],
    tools: ["Razorpay", "Postman", "Flask", "JavaScript"]
  },
  {
    title: "Version Control",
    icon: "fa-brands fa-git-alt",
    learned: [
      "Git Init",
      "Git Add",
      "Git Commit",
      "Git Push",
      "Git Remote",
      "GitHub Repository Management"
    ],
    tools: ["Git", "GitHub", "IntelliJ IDEA", "VS Code Terminal"]
  }
];

const projectsData = [
  {
    title: "3D AI-Powered Avatar of Dr. B. R. Ambedkar",
    type: "Internship / AI + 3D Project",
    icon: "fa-solid fa-brain",
    description:
      "Developed an interactive 3D AI avatar using Unreal Engine visualization and a RAG backend with semantic search and LLM responses.",
    tech: [
      "Unreal Engine",
      "MetaHuman",
      "Marvelous Designer",
      "RAG",
      "LLM",
      "Vector Embeddings",
      "GLB"
    ]
  },{
    title: "TufRun",
    type: "Mobile Fitness Application",
    icon: "fa-solid fa-person-running",
    description:
      "React Native and Expo-based mobile application with GPS route tracking, distance and pace monitoring, Firebase authentication, run history, and leaderboard-driven competition.",
    tech: [
      "React Native",
      "Expo",
      "Firebase Auth",
      "Firestore",
      "GPS Tracking"
    ]
  },
  {
  title: "RecoverPilot — AI Failed Payment Recovery",
  type: "Full-Stack FinTech / AI Project",
  icon: "fa-solid fa-rotate",
  description:
    "Built an intelligent revenue-recovery engine for failed Razorpay payments: webhook ingest, ML recoverability scoring, policy-constrained playbook actions, job queue + worker, magic-link customer portal, KPIs, and model retrain — soft declines recover, hard declines never auto-retry.",
  tech: [
    "Python",
    "FastAPI",
    "SQLAlchemy",
    "SQLite",
    "scikit-learn",
    "XGBoost",
    "Streamlit",
    "Razorpay Webhooks",
    "Docker",
    "Vercel",
    "pytest"
  ]
},
  {
    title: "Skillscan — AI Resume & Interview Platform",
    type: "Full-Stack SaaS Project",
    icon: "fa-solid fa-file-lines",
    description:
      "Built a resume and career platform with resume rewriting, cover letters, interview preparation, mock interview features, pricing and payment flow.",
    tech: [
      "React",
      "Vite",
      "Python",
      "Flask",
      "PostgreSQL",
      "Razorpay",
      "SendGrid",
      "Vercel",
      "Render"
    ]
  },
   {
    title: "StudyAgent AI",
    type: "Generative AI Application",
    icon: "fa-solid fa-brain",
    description:
      "Generative AI-powered learning assistant designed for personalized study support, intelligent response generation, and interactive problem solving using modern AI workflows and prompt engineering.",
    tech: [
      "Python",
      "JavaScript",
      "Generative AI",
      "Prompt Engineering",
      "REST API",
      "GitHub"
    ]
  },

  
  {
    title: "Cybersecurity Visualization Dashboard",
    type: "React + 3D Visualization",
    icon: "fa-solid fa-shield-halved",
    description:
      "Created a cybersecurity visualization dashboard with simulated attack data, animated endpoints and AI-based threat analysis experiments.",
    tech: ["React", "Three.js", "React Spring", "Gemini API", "3D Mapping"]
  },
  {
    title: "Currency Swapper",
    type: "React API Project",
    icon: "fa-solid fa-money-bill-transfer",
    description:
      "Developed a currency converter using live exchange-rate APIs, reusable input components, controlled states and clean UI.",
    tech: ["React", "Custom Hooks", "API Fetch", "JavaScript", "CSS"]
  },
 
  
];

const experienceData = [
  {
    title: "AI / 3D Developer Intern",
    company: "Defence Institute of Advanced Technology (DIAT), Pune",
    duration: "2025 - Present",
    description:
      "Developed a 3D AI-powered avatar of Dr. B. R. Ambedkar by integrating Unreal Engine 5, MetaHuman, and a Retrieval-Augmented Generation (RAG) backend for intelligent conversational interaction. Designed realistic digital humans and implemented clothing simulation using Marvelous Designer.",
    tech: [
      "Unreal Engine 5",
      "MetaHuman",
      "RAG",
      "Python",
      "Generative AI",
      "Marvelous Designer"
    ]
  }
];
const studyTopics = [
  "Data Structures and Algorithms",
  "Stack, Queue, Trie, HashSet, Sliding Window",
  "Java OOP and Spring Boot",
  "Software Engineering and Clean Code",
  "Spring Security, JWT, HTTP Basic Authentication",
  "REST API Development and Postman Testing",
  "React.js, Vite and Tailwind CSS",
  "Node.js Callback Functions and HTTP Server Basics",
  "Database Design: MySQL, MongoDB, PostgreSQL and H2",
  "Computer Networks: IP Addressing, NAT, Subnetting and Broadcast ID",
  "Computer Networks Tools: Cisco Packet Tracer and Wireshark",
  "Computer Graphics: Polygon Clipping and Thick Line Drawing",
  "AI Concepts: RAG, LLMs, Vector Embeddings and AI Avatars",
  "Deployment: GitHub, Vercel, Render, Railway and Environment Variables",
  "Payment Gateway Integration: Razorpay Test Mode",
  "Resume Building, Cover Letter, Interview Preparation and ATS Optimization"
];

const subjectsGrid = document.getElementById("subjectsGrid");
const projectsGrid = document.getElementById("projectsGrid");
const studyGrid = document.getElementById("studyGrid");
const subjectSearch = document.getElementById("subjectSearch");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const cursorScanner = document.getElementById("cursorScanner");
const cursorDot = document.getElementById("cursorDot");
const holoScene = document.getElementById("holoScene");

/* Cursor scanner */

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let scannerX = mouseX;
let scannerY = mouseY;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  cursorDot.style.left = `${mouseX}px`;
  cursorDot.style.top = `${mouseY}px`;

  createScanTrail(mouseX, mouseY);
});

function animateCursorScanner() {
  scannerX += (mouseX - scannerX) * 0.12;
  scannerY += (mouseY - scannerY) * 0.12;

  cursorScanner.style.left = `${scannerX}px`;
  cursorScanner.style.top = `${scannerY}px`;

  requestAnimationFrame(animateCursorScanner);
}

animateCursorScanner();

function createScanTrail(x, y) {
  const trail = document.createElement("span");
  trail.className = "scan-trail";
  trail.style.left = `${x}px`;
  trail.style.top = `${y}px`;

  document.body.appendChild(trail);

  setTimeout(() => {
    trail.remove();
  }, 650);
}

const trailStyle = document.createElement("style");
trailStyle.innerHTML = `
  .scan-trail {
    position: fixed;
    width: 16px;
    height: 16px;
    left: 0;
    top: 0;
    z-index: 9998;
    pointer-events: none;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 1px solid rgba(var(--main-color),0.8);
    box-shadow: 0 0 18px rgba(var(--main-color),0.7);
    animation: trailExpand 0.65s ease-out forwards;
  }

  @keyframes trailExpand {
    from {
      opacity: 0.9;
      scale: 0.3;
    }
    to {
      opacity: 0;
      scale: 3.7;
    }
  }
`;
document.head.appendChild(trailStyle);

/* 3D hero scene tilt */

document.addEventListener("mousemove", (e) => {
  if (!holoScene) return;

  const x = (e.clientX / window.innerWidth - 0.5) * 18;
  const y = (e.clientY / window.innerHeight - 0.5) * -18;

  holoScene.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

/* Interactive card effect */

function applyInteractiveCardEffect() {
  const cards = document.querySelectorAll(
    ".subject-card, .project-card, .study-item, .contact-card, .intro-card"
  );

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.classList.remove("is-flipping");
      void card.offsetWidth;
      card.classList.add("is-flipping");
    });

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;

      card.style.setProperty("--card-x", `${x}px`);
      card.style.setProperty("--card-y", `${y}px`);

      if (
        card.classList.contains("subject-card") ||
        card.classList.contains("project-card") ||
        card.classList.contains("intro-card")
      ) {
        card.style.transform =
          `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
      }

      if (card.classList.contains("contact-card")) {
        card.style.transform =
          `perspective(900px) rotateX(${rotateX / 2}deg) rotateY(${rotateY / 2}deg) translateY(-4px)`;
      }
    });

    card.addEventListener("mouseleave", () => {
      if (
        card.classList.contains("subject-card") ||
        card.classList.contains("project-card") ||
        card.classList.contains("contact-card") ||
        card.classList.contains("intro-card")
      ) {
        card.style.transform =
          "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)";
      }

      card.classList.remove("is-flipping");
    });
  });
}

/* Render subjects */

function renderSubjects(data) {
  subjectsGrid.innerHTML = "";

  if (data.length === 0) {
    subjectsGrid.innerHTML = `
      <div class="subject-card reveal">
        <i class="fa-solid fa-circle-info subject-icon"></i>
        <h3>No result found</h3>
        <p>Try searching Java, Cisco, DBMS, React, Spring, Wireshark or Postman.</p>
      </div>
    `;
    revealOnScroll();
    applyInteractiveCardEffect();
    return;
  }

  data.forEach((subject) => {
    const card = document.createElement("div");
    card.className = "subject-card reveal interactive-card";

    card.innerHTML = `
      <i class="${subject.icon} subject-icon"></i>

      <h3>${subject.title}</h3>

      <div class="subject-block">
        <h4>What I Learned</h4>
        <div class="tags">
          ${subject.learned.map((item) => `<span>${item}</span>`).join("")}
        </div>
      </div>

      <div class="subject-block">
        <h4>Tools / Technologies Used</h4>
        <div class="tags tool-tags">
          ${subject.tools.map((tool) => `<span>${tool}</span>`).join("")}
        </div>
      </div>
    `;

    subjectsGrid.appendChild(card);
  });

  revealOnScroll();
  applyInteractiveCardEffect();
}

/* Render projects */

function renderProjects() {
  projectsGrid.innerHTML = "";

  projectsData.forEach((project) => {
    const card = document.createElement("div");
    card.className = "project-card reveal interactive-card";

    card.innerHTML = `
      <i class="${project.icon} project-icon"></i>
      <span class="project-type">${project.type}</span>
      <h3>${project.title}</h3>
      <p>${project.description}</p>

      <div class="tags">
        ${project.tech.map((tech) => `<span>#${tech}</span>`).join("")}
      </div>
    `;

    projectsGrid.appendChild(card);
  });

  applyInteractiveCardEffect();
}

/* Render study topics */

function renderStudyTopics() {
  studyGrid.innerHTML = "";

  studyTopics.forEach((topic, index) => {
    const item = document.createElement("div");
    item.className = "study-item reveal interactive-card";

    item.innerHTML = `
      <span>${index + 1}</span>
      ${topic}
    `;

    studyGrid.appendChild(item);
  });

  applyInteractiveCardEffect();
}

/* Search subjects */

subjectSearch.addEventListener("input", () => {
  const query = subjectSearch.value.toLowerCase().trim();

  if (query === "") {
    renderSubjects(subjectsData);
    return;
  }

  const filtered = subjectsData.filter((subject) => {
    const titleMatch = subject.title.toLowerCase().includes(query);

    const learnedMatch = subject.learned.some((item) =>
      item.toLowerCase().includes(query)
    );

    const toolMatch = subject.tools.some((tool) =>
      tool.toLowerCase().includes(query)
    );

    return titleMatch || learnedMatch || toolMatch;
  });

  renderSubjects(filtered);
});

/* Mobile menu */

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

/* Reveal on scroll */

function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 90;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

renderSubjects(subjectsData);
renderProjects();
renderStudyTopics();
revealOnScroll();
applyInteractiveCardEffect();