import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../services/api";

/* ─── Resource type definitions ──────────────────────────────────────── */
const RESOURCE_TYPES = [
  { key: "websites", label: "Some Good Websites to Study" },
  { key: "youtube", label: "Some Good YouTube Channels" },
  { key: "books", label: "Some Good Books" },
  { key: "notes", label: "Notes" },
  { key: "extra", label: "Extra Materials for Exam or Practicals" },
  { key: "cho", label: "CHO" },
];

/* ─── Helper: blank links template ───────────────────────────────────── */
const emptyLinks = () => ({
  websites: "",
  youtube: "",
  books: "",
  notes: "",
  extra: "",
  cho: "",
});

/* ─── Semester data ──────────────────────────────────────────────────── */
const semesterData = {
  "semester-1": {
    number: "Semester 1",
    tag: "Beginner",
    title: "Semester 1",
    sgpa: 9.15,
    cgpa: 9.15,
    description:
      "Modern and Computational Physics, Calculus and Statistical Analysis, Problem Solving using Python Programming, Front End Engineering-I, Technical Communication - I, Disaster Management",
    subjects: [
      {
        code: "24APS0102",
        name: "MODERN AND COMPUTATIONAL PHYSICS",
        credits: 4.0,
        grade: "A+",
        topics: ["Quantum Mechanics", "Wave Optics", "Nuclear Physics", "Computational Methods"],
        links: {
          websites: "https://ocw.mit.edu/courses/physics/",
          youtube: "https://www.youtube.com/@pankajphysicsgulati",
          books: "https://drive.google.com/file/d/1J0d7A84-_A5-1eMirDrjLtG885wsS-1M/view",
          notes: "https://drive.google.com/drive/folders/1sM4eegq6jIXX6CXBWLBQIEgM_uQ5wO28",
          extra: "https://drive.google.com/file/d/1ufEYa9i8W_AmImWsZElKQr-Tq4cPchby/view",
          cho: "https://drive.google.com/file/d/1COx67s2LaVx_3KigNVEu3IaTuZqV1vk_/view",
        },
      },
      {
        code: "24APS1101",
        name: "CALCULUS AND STATISTICAL ANALYSIS",
        credits: 4.0,
        grade: "A",
        topics: ["Limits & Continuity", "Differentiation", "Integration", "Probability & Distributions"],
        links: {
          websites: "https://www.khanacademy.org/math/differential-calculus/dc-limits",
          youtube: "https://www.youtube.com/@mathcommentors",
          books: "https://drive.google.com/file/d/1CljRe6PipAesUN8mlDEutE6QJCS3E5Nk/view",
          notes: "https://docs.google.com/presentation/d/1U6anOo02tw918_kABOX2sFW9UUJxVa4N/edit?slide=id.p198#slide=id.p198",
          extra: "https://drive.google.com/drive/u/0/folders/1vHr6NfHzODOPxAkF9fi6TTX_prFuqFNf",
          cho: "https://drive.google.com/file/d/1CQDSjYbWz15XyJZl5CJVZr3gPiN_mA2x/view",
        },
      },
      {
        code: "24CSE0101",
        name: "PROBLEM SOLVING USING PYTHON PROGRAMMING",
        credits: 5.0,
        grade: "A+",
        topics: ["Data Types & Control Flow", "Functions & Modules", "OOP in Python", "File I/O & Libraries"],
        links: {
          websites: "https://www.w3schools.com/python/",
          youtube: "https://www.youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg",
          books: "https://drive.google.com/file/d/1utgSpQ1XR7LRSOFexQ1Rm0pd0ho3fmQV/view",
          notes: "https://drive.google.com/file/d/18G68l4B5NhLr4pHHk31xzfNEQOt6jTAC/view",
          extra: "https://drive.google.com/drive/u/0/folders/1wI2PVrmXCDs-KXQhxATE7wFAwYg6hSw-",
          cho: "https://drive.google.com/file/d/1z9y8x7w6v5u4t3s2r1q/view",
        },
      },
      {
        code: "24CSE0102",
        name: "FRONT END ENGINEERING-I",
        credits: 5.0,
        grade: "O",
        topics: ["HTML5 Structure", "CSS3 Styling", "JavaScript Basics", "Responsive Design"],
        links: {
          websites: "https://javascript.info/",
          youtube: "https://www.youtube.com/playlist?list=PLfqMhTWNBTe0PY9xunOzsP5kmYIz2Hu7i",
          books: "https://drive.google.com/file/d/1aw8EAQNUeLvReo3lOk8nGURZokA-GJ-Z/view",
          notes: "https://drive.google.com/drive/folders/1bBCFcMn13ME3BRdjm8Hr2K_j79OABgJU",
          extra: "https://drive.google.com/drive/folders/1zXn7X0Jf2H8X5fFRRKcew05kgvY4dBkf",
          cho: "https://drive.google.com/file/d/1CPWkVMnviBXosB1uk_Bv7EhZKM-ZICYa/view",
        },
      },
      {
        code: "24MOC0118",
        name: "TECHNICAL COMMUNICATION - I",
        credits: 2.0,
        grade: "O",
        topics: ["Professional Speaking & Listening", "Technical Writing & Reports", "Presentation Skills", "Business Grammar & Vocabulary"],
        links: {
          websites: "https://www.skillsyouneed.com/ips/communication-skills.html",
          youtube: "https://www.youtube.com/results?search_query=technical+communication+skills",
          books: "",
          notes: "",
          extra: "",
          cho: "",
        },
      },
      {
        code: "24UNI0125",
        name: "DISASTER MANAGEMENT",
        credits: 0.0,
        grade: "O",
        topics: ["Disaster Types & Risk Profiling", "Hazard Mitigation Strategies", "Disaster Preparedness & Evacuation", "Emergency Response Frameworks"],
        links: {
          websites: "https://ndma.gov.in/",
          youtube: "https://www.youtube.com/results?search_query=disaster+management+course",
          books: "",
          notes: "",
          extra: "",
          cho: "",
        },
      },
    ],
    projects: [
      "Statistics Dashboard with Python & Matplotlib",
      "Personal Portfolio Website (HTML/CSS/JS)",
      "Physics Simulation using NumPy & SciPy",
    ],
  },
  "semester-2": {
    number: "Semester 2",
    tag: "Foundation",
    title: "Semester 2",
    sgpa: 9.59,
    cgpa: 9.39,
    description:
      "Differential Equations and Transformations, Digital Electronics & Computer Architecture, Operating System, Source Code Management, Fundamentals of C Programming, Indian Knowledge System, Technical Communication- II, Environmental Studies, AI & LLM Rudiments",
    subjects: [
      {
        code: "24APS2101",
        name: "DIFFERENTIAL EQUATIONS AND TRANSFORMATIONS",
        credits: 4.0,
        grade: "O",
        topics: ["Ordinary Differential Equations", "Partial Differential Equations", "Laplace Transform", "Fourier Series & Transforms"],
        links: {
          websites: "https://www.khanacademy.org/math/differential-equations",
          youtube: "https://www.youtube.com/@mathcommentors",
          books: "https://drive.google.com/file/d/1CljRe6PipAesUN8mlDEutE6QJCS3E5Nk/view",
          notes: "https://drive.google.com/drive/folders/15TtiznXqjB3LL3ZyTlM0-fPYFc9uY6-i",
          extra: "https://drive.google.com/drive/u/0/folders/17RfYHN8RCI51gLkx85MjGI7ckX5Sv2ND",
          cho: "https://drive.google.com/file/d/198O54oKNbiEseO1z-43mW02m6hgmRtyc/view",
        },
      },
      {
        code: "24CSE0103",
        name: "DIGITAL ELECTRONICS AND COMPUTER ARCHITECTURE",
        credits: 4.0,
        grade: "A",
        topics: ["Boolean Algebra & Logic Gates", "Combinational & Sequential Circuits", "CPU Architecture & Pipelining", "Memory Hierarchy"],
        links: {
          websites: "https://www.geeksforgeeks.org/digital-logic/digital-electronics-logic-design-tutorials/",
          youtube: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiHMonh3G6QNKq53C6oNXGrX",
          books: "https://drive.google.com/file/d/1Kww5bDs8hSz5jh7Jztkmdahip8HrF-lS/view",
          notes: "https://drive.google.com/drive/folders/15oaX6moMRAJrh25bjjE3qdsgpIIeVE3R",
          extra: "https://drive.google.com/drive/u/0/folders/1vNvQcmS2mpi7Q4RlZ5qqqV2hV3EHRO-1",
          cho: "https://drive.google.com/file/d/1CP0j_LFXI1-6bfTCwKT9sRIxIrlp4RK8/view",
        },
      },
      {
        code: "24CSE0105",
        name: "OPERATING SYSTEM",
        credits: 3.0,
        grade: "O",
        topics: ["Process Management", "Memory Management & Paging", "File Systems", "Concurrency & Synchronization"],
        links: {
          websites: "https://www.sanfoundry.com/operating-system-questions-answers/",
          youtube: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p",
          books: "https://drive.google.com/file/d/1j9Ev9UR0ZGo42CzJnJPQMW8myoGyrge8/view?usp=drive_link",
          notes: "https://drive.google.com/drive/u/0/folders/1-FpxZmFzT61FhYXMc48Gp8xq_rUFTEVP",
          extra: "https://drive.google.com/drive/u/0/folders/1-wX0Fn9Cqxatp7xJ4z1Rkh0Qq7HIG-Lv",
          cho: "https://drive.google.com/file/d/17IBwyZpRgzx2CWexy3Md5Mb6ZvYcsnn1/view",
        },
      },
      {
        code: "24CSE0106",
        name: "SOURCE CODE MANAGEMENT",
        credits: 2.0,
        grade: "O",
        topics: ["Git Fundamentals", "Branching & Merging", "GitHub Workflows & Pull Requests", "Version Control Best Practices"],
        links: {
          websites: "https://www.atlassian.com/git/tutorials",
          youtube: "https://www.youtube.com/playlist?list=PLu0W_9lII9agwhy658ZPA0MTStKUJTWPi",
          books: "https://drive.google.com/file/d/1vPaRmSwuUbGMzdkih12OfDdqsEVoeVer/view",
          notes: "",
          extra: "https://drive.google.com/drive/folders/13zHtMN47bE0zBgH6Osv3EkDoZnEL4fg-",
          cho: "https://drive.google.com/file/d/17Jtf9Hd3sS9MJppRmWroitMPfamV6xkg/view",
        },
      },
      {
        code: "24CSE0107",
        name: "FUNDAMENTALS OF C PROGRAMMING",
        credits: 4.0,
        grade: "O",
        topics: ["Syntax & Data Types", "Control Structures & Loops", "Pointers & Memory Allocation", "Structures & File Handling"],
        links: {
          websites: "https://www.geeksforgeeks.org/c-programming-language/",
          youtube: "https://www.youtube.com/results?search_query=c+programming+full+course",
          books: "",
          notes: "",
          extra: "",
          cho: "",
        },
      },
      {
        code: "24MOC0111",
        name: "INDIAN KNOWLEDGE SYSTEM",
        credits: 2.0,
        grade: "O",
        topics: ["Vedic Mathematics & Sciences", "Ancient Indian Astronomy", "Ayurveda & Health Science", "Philosophical Schools & Logic"],
        links: {
          websites: "https://iks.iitgn.ac.in/",
          youtube: "https://www.youtube.com/results?search_query=indian+knowledge+system",
          books: "",
          notes: "",
          extra: "",
          cho: "",
        },
      },
      {
        code: "24MOC0129",
        name: "TECHNICAL COMMUNICATION- II",
        credits: 2.0,
        grade: "O",
        topics: ["Advanced Technical Proposals", "Research & Documentation", "Group Discussions & Professional Debates", "Corporate Communication & Interviews"],
        links: {
          websites: "https://www.skillsyouneed.com/",
          youtube: "https://www.youtube.com/results?search_query=advanced+technical+communication",
          books: "",
          notes: "",
          extra: "",
          cho: "",
        },
      },
      {
        code: "24UNI0106",
        name: "ENVIRONMENTAL STUDIES",
        credits: 2.0,
        grade: "A+",
        topics: ["Ecosystems & Biodiversity", "Environmental Pollution & Control", "Renewable Energy & Conservation", "Environmental Policies & Sustainability"],
        links: {
          websites: "https://www.epa.gov/",
          youtube: "https://www.youtube.com/results?search_query=environmental+studies+lectures",
          books: "",
          notes: "",
          extra: "",
          cho: "",
        },
      },
      {
        code: "25AI001",
        name: "THE RUDIMENTS OF ARTIFICIAL INTELLIGENCE, CHATGPT, DEEPSEEK, GROK AND METAVERSE",
        credits: 1.0,
        grade: "O",
        topics: ["Generative AI & Transformer Models", "Prompt Engineering & ChatGPT", "DeepSeek & Grok Architectures", "Metaverse, VR & Future Tech Ecosystems"],
        links: {
          websites: "https://platform.openai.com/docs/guides/prompt-engineering",
          youtube: "https://www.youtube.com/results?search_query=generative+ai+prompt+engineering+chatgpt+metaverse",
          books: "",
          notes: "",
          extra: "",
          cho: "",
        },
      },
    ],
    projects: [
      "Process Scheduler Simulator in C",
      "Git & GitHub Workflow Automation",
      "Digital Logic Circuit Design Project",
    ],
  },
  "semester-3": {
    number: "Semester 3",
    tag: "Intermediate",
    title: "Semester 3",
    sgpa: 9.73,
    cgpa: 9.50,
    description:
      "Discrete Structures, Data Structures using OOP - I, Database Management System, Object Oriented Software Engineering, Front-End Engineering-II, Financial Accounting - I, Human Values & Professional Ethics",
    subjects: [
      {
        code: "24APS0105",
        name: "DISCRETE STRUCTURES",
        credits: 3.0,
        grade: "A+",
        topics: ["Set Theory & Logic", "Relations & Functions", "Graph Theory & Trees", "Combinatorics & Recurrence"],
        links: {
          websites: "https://drive.google.com/drive/folders/1753lLLKuQTwp_RZxgtGI53cO7JO_-5tC",
          youtube: "https://www.youtube.com/@justtania12",
          books: "https://drive.google.com/drive/folders/1753lLLKuQTwp_RZxgtGI53cO7JO_-5tC",
          notes: "https://drive.google.com/drive/folders/171MZLlZ-oHM9HjisQxquvUp5MmldyYOv",
          extra: "https://drive.google.com/drive/folders/171CTEatsU2eXzGXGE-Gq9B4iK-DAeky8",
          cho: "https://drive.google.com/file/d/1spevLmbicH3SOHHKB2p7RG8W2nipsvic/view",
        },
      },
      {
        code: "24CSE0208",
        name: "DATA STRUCTURES USING OBJECT ORIENTED PROGRAMMING-I",
        credits: 6.0,
        grade: "O",
        topics: ["Arrays & Linked Lists", "Stacks & Queues", "Trees & BST", "OOP Principles in Data Structures"],
        links: {
          websites: "https://www.geeksforgeeks.org/explore?page=3&sortBy=submissions",
          youtube: "https://www.youtube.com/@takeUforward",
          books: "https://drive.google.com/file/d/1phz3f_yQuHhPseR3bjD0EdTKuDcGayoZ/view",
          notes: "https://drive.google.com/drive/folders/10T4pt812NHTzJTIs5MqIWckFogdvJQOa",
          extra: "https://drive.google.com/drive/folders/16yEMaPPhWVqSgBrBJFdRxeBuJ4b15Hzj",
          cho: "https://drive.google.com/file/d/18KWxF3FOXtcnEndQ-c-Ewfb-rxe-iJFB/view",
        },
      },
      {
        code: "24CSE0209",
        name: "DATABASE MANAGEMENT SYSTEM",
        credits: 3.0,
        grade: "O",
        topics: ["SQL & Relational Algebra", "Normalization", "ACID Properties & Transactions", "Indexing & B-Trees"],
        links: {
          websites: "https://www.sanfoundry.com/1000-database-management-system-questions-answers/#dbms-chapters",
          youtube: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y",
          books: "https://drive.google.com/file/d/1nMk1ykPdOgcKD-_qPlD0hAXTMbeS6UgU/view",
          notes: "https://drive.google.com/drive/folders/16A62useecen7fC0yessw2N-8JTZCL11P",
          extra: "http://drive.google.com/drive/folders/1ZeHSyZcxkxiJJSTGnzng5XQuZ3Hklwau",
          cho: "https://drive.google.com/file/d/18JDKoQ7i2_wKzyVMItiZzGM3j_K4b4PP/view",
        },
      },
      {
        code: "24CSE0210",
        name: "OBJECT ORIENTED SOFTWARE ENGINEERING",
        credits: 3.0,
        grade: "A+",
        topics: ["UML & Design Patterns", "Requirements Engineering", "Software Architecture", "Agile & Testing"],
        links: {
          websites: "https://drive.google.com/file/d/18JDKoQ7i2_wKzyVMItiZzGM3j_K4b4PP/view",
          youtube: "http://youtube.com/playlist?list=PLxCzCOWd7aiEed7SKZBnC6ypFDWYLRvB2",
          books: "https://drive.google.com/file/d/1GPSrL6Pgl-n9Jr4QYinbRQmqlxgzWfkt/view",
          notes: "https://drive.google.com/drive/folders/1QZcR-fHahRMeeNIP6nqbNnTRI6cyhYG0",
          extra: "https://harshpreet931.notion.site/OOSE-ETE-2d8fb70f53234dc3937a5595d770c0b6",
          cho: "https://drive.google.com/file/d/1UOuWQq3PhPNHjJaa9cJwOo3l5bLkMM-p/view",
        },
      },
      {
        code: "24CSE0211",
        name: "FRONT-END ENGINEERING-II",
        credits: 3.0,
        grade: "O",
        topics: ["Modern JS ES6+", "React Components & State", "Hooks & Context API", "API Integration & Routing"],
        links: {
          websites: "https://www.w3schools.com/",
          youtube: "https://www.youtube.com/playlist?list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w",
          books: "",
          notes: "https://drive.google.com/drive/folders/1QYG8nQrnXy7mPsv2tLXtdf_Xsdvi256b",
          extra: "https://drive.google.com/drive/folders/1zNnCovJNjNSqwLg0VqiO_fTwE3_9MyjI",
          cho: "https://drive.google.com/file/d/1US7vZttmNF5AyZ30gfRdR8Kr-g1WE0-Q/view",
        },
      },
      {
        code: "24MOC0113",
        name: "FINANCIAL ACCOUNTING - I",
        credits: 2.0,
        grade: "O",
        topics: ["Principles of Accounting", "Journal, Ledger & Trial Balance", "Financial Statements & Balance Sheet", "Cost Analysis & Budgeting"],
        links: {
          websites: "https://www.investopedia.com/terms/a/accounting.asp",
          youtube: "https://www.youtube.com/results?search_query=financial+accounting+basics",
          books: "",
          notes: "",
          extra: "",
          cho: "",
        },
      },
      {
        code: "24UNI0105",
        name: "HUMAN VALUES & PROFESSIONAL ETHICS",
        credits: 2.0,
        grade: "O",
        topics: ["Value Education & Self-Exploration", "Harmony in Self & Family", "Professional Ethics in Engineering", "Universal Human Values"],
        links: {
          websites: "https://www.aicte-india.org/",
          youtube: "https://www.youtube.com/results?search_query=human+values+and+professional+ethics",
          books: "",
          notes: "",
          extra: "",
          cho: "",
        },
      },
    ],
    projects: [
      "Relational Database Library Management System",
      "Interactive Data Structure Visualizer in React",
      "Object-Oriented E-Commerce Application",
    ],
  },
  "semester-4": {
    number: "Semester 4",
    tag: "Intermediate",
    title: "Semester 4",
    sgpa: 10.0,
    cgpa: 9.64,
    description:
      "Data Structures using OOP - II, Linux Administration, Backend Engineering-I, Computer Networks, Industry Immersion Series-I, AI Stack: ML & GenAI, Embedded Systems & IoT, Cyber Security",
    subjects: [
      {
        code: "24CSE0212",
        name: "DATA STRUCTURES USING OBJECT ORIENTED PROGRAMMING-II",
        credits: 5.0,
        grade: "O",
        topics: ["Advanced Trees (AVL, Red-Black)", "Graphs Algorithms (Dijkstra, Kruskal)", "Dynamic Programming & Greedy", "Tries, Heaps & Segment Trees"],
        links: {
          websites: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2",
          youtube: "https://www.youtube.com/@takeUforward",
          books: "",
          notes: "",
          extra: "",
          cho: "",
        },
      },
      {
        code: "24CSE0213",
        name: "LINUX ADMINISTRATION",
        credits: 3.0,
        grade: "O",
        topics: ["Linux Architecture & Kernel", "Shell Commands & Bash Scripting", "User & Process Management", "Permissions & Services"],
        links: {
          websites: "https://www.geeksforgeeks.org/linux-unix/linux-tutorial/",
          youtube: "https://www.youtube.com/playlist?list=PL0tP8lerTbX3eUtBFS0Ir4_aFqKuXWjYZ",
          books: "https://drive.google.com/file/d/1TdHdMsxX4rxUucV5yJzXItiC5EFiCUiY/view",
          notes: "https://drive.google.com/drive/folders/16_aU2V-5TbOCe0CwB58q5AAjDPgP7Z07",
          extra: "https://drive.google.com/drive/folders/16MsGQklzyLV6PZTm1lr82hk6N_OUDC-I",
          cho: "https://drive.google.com/file/d/1f1aq-Ek2mUst75YqeBYCH9dE8oJdhA3d/view",
        },
      },
      {
        code: "24CSE0214",
        name: "BACKEND ENGINEERING-I",
        credits: 3.0,
        grade: "O",
        topics: ["Node.js & Express Basics", "RESTful API Architecture", "Database Connection & ORM", "Authentication & Security"],
        links: {
          websites: "https://expressjs.com/",
          youtube: "https://www.youtube.com/watch?v=7H_b19_f-cM",
          books: "",
          notes: "",
          extra: "",
          cho: "",
        },
      },
      {
        code: "24CSE0215",
        name: "COMPUTER NETWORKS",
        credits: 3.0,
        grade: "O",
        topics: ["OSI & TCP/IP Reference Models", "IP Addressing & Subnetting", "Routing & Switching", "Network Security & Protocols"],
        links: {
          websites: "https://www.sanfoundry.com/computer-network-questions-answers/#computer-network-chapters",
          youtube: "https://www.youtube.com/@TechiePetals",
          books: "https://drive.google.com/file/d/1tTSwmBctKRnLfvIaxKgCC4m_q5J5xPuw/view",
          notes: "https://drive.google.com/drive/folders/1drRtAH3dJnwRBJ1tSOGToRKnrL0DmXA7",
          extra: "https://drive.google.com/drive/folders/15mmWoNw1OyPU7Gydl40v0eVRVP8xC2f_",
          cho: "https://drive.google.com/file/d/1-2ulU9BDAX3X7hRB50Qq0R-_wf3gjmef/view",
        },
      },
      {
        code: "24CSE0216",
        name: "INDUSTRY IMMERSION SERIES-I",
        credits: 1.0,
        grade: "O",
        topics: ["Industry Tech Stack Paradigms", "Agile & Scrum Sprint Simulation", "Software Life Cycle & Code Reviews", "Enterprise Architecture"],
        links: {
          websites: "https://www.agilealliance.org/agile101/",
          youtube: "https://www.youtube.com/results?search_query=software+engineering+industry+practices",
          books: "",
          notes: "",
          extra: "",
          cho: "",
        },
      },
      {
        code: "24CSE0222",
        name: "AI STACK: ML, GENERATIVE AI & PROMPT ENGINEERING",
        credits: 2.0,
        grade: "O",
        topics: ["Machine Learning Foundations", "Transformer Models & LLMs", "Advanced Prompt Engineering Strategies", "Building Generative AI Applications"],
        links: {
          websites: "https://www.deeplearning.ai/",
          youtube: "https://www.youtube.com/results?search_query=generative+ai+prompt+engineering+course",
          books: "",
          notes: "",
          extra: "",
          cho: "",
        },
      },
      {
        code: "24ECE0202",
        name: "EMBEDDED SYSTEMS AND IOT",
        credits: 4.0,
        grade: "O",
        topics: ["Microcontroller Architecture", "Sensors & Interfacing", "IoT Protocols (MQTT/CoAP)", "Real-Time Embedded Systems"],
        links: {
          websites: "https://drive.google.com/file/d/1-2ulU9BDAX3X7hRB50Qq0R-_wf3gjmef/view",
          youtube: "https://www.youtube.com/playlist?list=PLYwpaL_SFmcBpuYagx0JiSaM-Bi4dm0hG",
          books: "https://drive.google.com/file/d/18PnKFTKhcXrCkk5g06vyNQADbPzrWI9y/view",
          notes: "https://drive.google.com/drive/u/0/folders/1dTJQyh5wlWuuN2XTH3JtUwvleC8uy3qG",
          extra: "https://drive.google.com/drive/u/0/folders/11JmDQFJNoHQazrFR4iRAuVp6Kv_rtKsW",
          cho: "https://drive.google.com/file/d/18KihNaAkdALKQ0A9S2zO7GPbWUIXBmmW/view",
        },
      },
      {
        code: "24UNI0124",
        name: "CYBER SECURITY",
        credits: 3.0,
        grade: "O",
        topics: ["Threat Modeling & Attack Vectors", "Cryptography Essentials", "Network Defense & Firewalls", "Web Security & Ethical Hacking"],
        links: {
          websites: "https://owasp.org/www-project-top-ten/",
          youtube: "https://www.youtube.com/results?search_query=cyber+security+full+course",
          books: "",
          notes: "",
          extra: "",
          cho: "",
        },
      },
    ],
    projects: [
      "RESTful Backend API with Node.js & Database",
      "Automated Linux System Administration Shell Script",
      "IoT Smart Home Sensor Station Prototype",
    ],
  },
  "semester-5": {
    number: "Semester 5",
    tag: "Advanced",
    title: "Semester 5",
    description:
      "Machine Learning & Data Mining, Cloud Computing & Distributed Systems, Cyber Security & Cryptography, Compiler Design & Automata Theory",
    subjects: [
      {
        code: "CS501",
        name: "Machine Learning & Data Mining",
        credits: 4.0,
        topics: ["Supervised Learning", "Classification Models", "Clustering & K-Means", "Neural Networks"],
        links: {
          websites: "https://scikit-learn.org/stable/",
          youtube: "https://www.youtube.com/playlist?list=PLblh5JKOoLUICTaGLRoHQDuF_7q2GTYJF",
          books: "",
          notes: "",
          extra: "",
          cho: "",
        },
      },
      {
        code: "CS502",
        name: "Cloud Computing & Distributed Systems",
        credits: 4.0,
        topics: ["IaaS/PaaS/SaaS", "AWS & GCP Basics", "Virtualization & Docker", "Serverless Architecture"],
        links: {
          websites: "",
          youtube: "",
          books: "",
          notes: "",
          extra: "",
          cho: "",
        },
      },
      {
        code: "CS503",
        name: "Cyber Security & Cryptography",
        credits: 3.0,
        topics: ["Symmetric & Asymmetric Encryption", "RSA Algorithm", "Network Security", "Ethical Hacking"],
        links: {
          websites: "",
          youtube: "",
          books: "",
          notes: "",
          extra: "",
          cho: "",
        },
      },
      {
        code: "CS504",
        name: "Compiler Design & Automata Theory",
        credits: 3.0,
        topics: ["Finite Automata", "Context Free Grammars", "Parsing Techniques", "Code Generation"],
        links: {
          websites: "",
          youtube: "",
          books: "",
          notes: "",
          extra: "",
          cho: "",
        },
      },
    ],
    projects: [
      "AI Image Classification Web App",
      "Serverless Notes API on Cloud",
      "End-to-End Encrypted File Transfer Tool",
    ],
  },
  "semester-6": {
    number: "Semester 6",
    tag: "Advanced",
    title: "Semester 6",
    description:
      "DevOps & CI/CD Pipelines, Mobile Application Development, Big Data Analytics & Hadoop, Aptitude & Technical Interview Prep",
    subjects: [
      {
        code: "CS601",
        name: "DevOps & CI/CD Pipelines",
        credits: 4.0,
        topics: ["Git & GitHub Actions", "Docker Containers", "Kubernetes Orchestration", "Monitoring & Logging"],
        links: {
          websites: "",
          youtube: "",
          books: "",
          notes: "",
          extra: "",
          cho: "",
        },
      },
      {
        code: "CS602",
        name: "Mobile Application Development",
        credits: 3.0,
        topics: ["React Native / Flutter", "State Management", "Native API Hooks", "App Store Deployment"],
        links: {
          websites: "",
          youtube: "",
          books: "",
          notes: "",
          extra: "",
          cho: "",
        },
      },
      {
        code: "CS603",
        name: "Big Data Analytics & Hadoop",
        credits: 3.0,
        topics: ["HDFS & MapReduce", "Apache Spark", "NoSQL Databases", "Data Visualization"],
        links: {
          websites: "",
          youtube: "",
          books: "",
          notes: "",
          extra: "",
          cho: "",
        },
      },
      {
        code: "CS604",
        name: "Aptitude & Technical Interview Prep",
        credits: 2.0,
        topics: ["Quantitative Aptitude", "Logical Reasoning", "System Design", "Coding Problem Sets"],
        links: {
          websites: "",
          youtube: "",
          books: "",
          notes: "",
          extra: "",
          cho: "",
        },
      },
    ],
    projects: [
      "Cross-Platform Fitness Tracking App",
      "Automated CI/CD Pipeline Deployment",
      "Big Data Sentiment Analysis Dashboard",
    ],
  },
};

/* ─── Diamond icon ───────────────────────────────────────────────────── */
function DiamondIcon({ active, disabled }) {
  const color = disabled ? "var(--muted)" : active ? "var(--accent)" : "var(--muted)";
  return (
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      <rect x="4" y="4" width="14" height="14" rx="2" transform="rotate(45 19 5)" fill={color} opacity={disabled ? 0.3 : active ? 1 : 0.55} />
      <rect x="4" y="4" width="14" height="14" rx="2" transform="rotate(45 19 19)" fill={color} opacity={disabled ? 0.2 : active ? 0.6 : 0.35} />
    </svg>
  );
}

/* ─── Resource tile — opens link in new tab, or shows Coming Soon ────── */
function ResourceTile({ label, href }) {
  const hasLink = href && href.trim() !== "";

  const baseStyle = {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    padding: "1rem 1.25rem",
    borderRadius: "14px",
    textAlign: "left",
    width: "100%",
    fontWeight: 600,
    fontSize: "0.95rem",
    lineHeight: "1.35",
    textDecoration: "none",
    transition: "border-color 200ms ease, background 200ms ease, transform 180ms ease, box-shadow 200ms ease",
  };

  if (hasLink) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          ...baseStyle,
          background: "var(--card)",
          border: "1.5px solid var(--card-border)",
          color: "var(--text)",
          cursor: "pointer",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = "var(--accent)";
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = "0 6px 24px rgba(0,0,0,0.18)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = "var(--card-border)";
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        <DiamondIcon active={false} disabled={false} />
        <span>{label}</span>
        <span style={{ marginLeft: "auto", fontSize: "0.75rem", color: "var(--accent)", opacity: 0.8, whiteSpace: "nowrap" }}>
          ↗ Open
        </span>
      </a>
    );
  }

  /* No link yet — Coming Soon state */
  return (
    <div
      style={{
        ...baseStyle,
        background: "var(--card)",
        border: "1.5px dashed var(--card-border)",
        color: "var(--muted)",
        opacity: 0.65,
        cursor: "not-allowed",
      }}
    >
      <DiamondIcon active={false} disabled={true} />
      <span>{label}</span>
      <span style={{ marginLeft: "auto", fontSize: "0.72rem", color: "var(--muted)", whiteSpace: "nowrap", opacity: 0.7 }}>
        Soon
      </span>
    </div>
  );
}

/* ─── Main component ─────────────────────────────────────────────────── */
function SemesterDetail() {
  const { semesterId } = useParams();
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    let isMounted = true;
    if (semesterId) {
      api.getSemesterById(semesterId)
        .then((res) => {
          if (isMounted && res.success && res.semester) {
            setApiData(res.semester);
          }
        })
        .catch(() => {
          // Fallback to local data seamlessly
        });
    }
    return () => {
      isMounted = false;
    };
  }, [semesterId]);

  const fallbackData = semesterData[semesterId] || {
    number: semesterId ? semesterId.replace("-", " ").toUpperCase() : "Semester",
    tag: "Academic",
    title: `${semesterId ? semesterId.replace("-", " ").toUpperCase() : "Semester"} Resource Hub`,
    description: "Explore syllabus, lecture notes, exam papers, and project guides.",
    subjects: [
      { code: "CORE101", name: "Core Specialization Subject 1", credits: 4, topics: ["Module 1", "Module 2", "Module 3", "Module 4"], links: emptyLinks() },
      { code: "CORE102", name: "Core Specialization Subject 2", credits: 4, topics: ["Module 1", "Module 2", "Module 3", "Module 4"], links: emptyLinks() },
    ],
  };

  const data = apiData || fallbackData;

  const handleSubjectClick = (sub) => {
    if (selectedSubject?.code === sub.code) {
      setSelectedSubject(null);
    } else {
      setSelectedSubject(sub);
    }
  };

  return (
    <main style={{ paddingBottom: "4rem" }}>

      {/* ── Header ───────────────────────────────────────────────── */}
      <section className="section page-intro">
        <div className="container reveal in-view">
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
            <Link
              to="/resources"
              className="btn btn-secondary"
              style={{
                padding: "0.6rem 1.25rem",
                fontSize: "0.9rem",
                fontWeight: 700,
                minHeight: "unset",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.45rem",
                lineHeight: "1.2",
                borderRadius: "999px",
                border: "1.5px solid var(--card-border)",
                background: "var(--card)",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                transition: "all 180ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.color = "var(--accent)";
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow = "0 4px 14px rgba(0, 0, 0, 0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--card-border)";
                e.currentTarget.style.color = "var(--text)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.15)";
              }}
            >
              ← Back to Resources
            </Link>
            <span className="eyebrow">
              {data.tag} • {data.number}
            </span>
          </div>
          <h1 style={{ marginTop: "0.5rem" }}>{data.title}</h1>
          <p style={{ maxWidth: "60ch" }}>{data.description}</p>
        </div>
      </section>

      {/* ── Core Subjects Section ────────────────────────────────── */}
      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="container">
          <div className="filter-bar" style={{ marginBottom: "2.5rem" }}>
            <button
              className="filter-btn active"
              onClick={() => setSelectedSubject(null)}
              type="button"
            >
              📚 Core Subjects ({data.subjects?.length || 0})
            </button>
          </div>

          {/* Subject selector */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
            {data.subjects?.map((sub, idx) => {
              const isSelected = selectedSubject?.code === sub.code;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSubjectClick(sub)}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "0.5rem",
                    padding: "1.25rem 1.5rem",
                    background: isSelected ? "rgba(var(--accent-rgb, 0,200,120), 0.1)" : "var(--card)",
                    border: `2px solid ${isSelected ? "var(--accent)" : "var(--card-border)"}`,
                    borderRadius: "16px",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "border-color 200ms ease, background 200ms ease, transform 180ms ease",
                    color: "var(--text)",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", gap: "0.5rem" }}>
                    <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: isSelected ? "var(--accent)" : "var(--muted)", background: isSelected ? "rgba(var(--accent-rgb,0,200,120),0.15)" : "var(--tag-bg, rgba(120,120,120,0.12))", padding: "0.2rem 0.6rem", borderRadius: "999px" }}>
                      {sub.code}
                    </span>
                  </div>
                  <span style={{ fontWeight: 700, fontSize: "1rem", lineHeight: "1.35", color: isSelected ? "var(--accent)" : "var(--text)" }}>
                    {sub.name}
                  </span>
                  <span style={{ fontSize: "0.8rem", color: "var(--muted)", fontWeight: 500 }}>
                    {typeof sub.credits === "number" ? sub.credits.toFixed(1) : sub.credits} Credits · {sub.topics?.length || 0} Modules
                  </span>
                </button>
              );
            })}
          </div>

          {/* Resource tiles for selected subject */}
          {selectedSubject && (
            <div
              key={selectedSubject.code}
              style={{ background: "var(--card)", border: "1.5px solid var(--card-border)", borderRadius: "20px", padding: "2rem", animation: "fadeInUp 0.3s ease both" }}
            >
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                <h2 style={{ fontSize: "1.45rem", fontWeight: 800, margin: 0, letterSpacing: "-0.02em", textAlign: "center" }}>
                  {selectedSubject.name}
                </h2>
              </div>

              {/* 6 resource tiles — 2 rows × 3 cols */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
                {RESOURCE_TYPES.map((rt) => (
                  <ResourceTile
                    key={rt.key}
                    label={rt.label}
                    href={selectedSubject.links?.[rt.key] ?? ""}
                  />
                ))}
              </div>

              {/* Key modules */}
              {selectedSubject.topics && selectedSubject.topics.length > 0 && (
                <div style={{ marginTop: "1.75rem", paddingTop: "1.25rem", borderTop: "1px solid var(--card-border)" }}>
                  <strong style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--muted)" }}>
                    Key Modules
                  </strong>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.6rem" }}>
                    {selectedSubject.topics.map((t, ti) => (
                      <span key={ti} style={{ fontSize: "0.82rem", fontWeight: 600, background: "var(--tag-bg, rgba(120,120,120,0.12))", color: "var(--muted)", padding: "0.3rem 0.75rem", borderRadius: "999px", border: "1px solid var(--card-border)" }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {!selectedSubject && (
            <p style={{ color: "var(--muted)", fontSize: "0.95rem", textAlign: "center", marginTop: "0.5rem" }}>
              👆 Click a subject above to explore its resources
            </p>
          )}
        </div>
      </section>
    </main>
  );
}

export default SemesterDetail;
