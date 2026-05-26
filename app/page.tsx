"use client";

import React, { useState } from "react";

export default function Home() {
  const [showContact, setShowContact] = useState(false);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  // Skill Data mapped to Official Devicon SVGs and Premium Vector Icons
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
        { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
        { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" },
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
      ]
    },
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
        { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
        { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
        { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
        { name: "NLP", icon: "https://unpkg.com/lucide-static@0.451.0/icons/brain-circuit.svg" },
        { name: "Time-Series", icon: "https://unpkg.com/lucide-static@0.451.0/icons/trending-up.svg" }
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
        { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
        { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
        { name: "Chakra UI", icon: "https://raw.githubusercontent.com/chakra-ui/chakra-ui/main/logo/logomark-colored.svg" },
        { name: "Dash", icon: "https://unpkg.com/lucide-static@0.451.0/icons/layout-dashboard.svg" },
        { name: "RESTful APIs", icon: "https://unpkg.com/lucide-static@0.451.0/icons/network.svg" }
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
        { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg" },
        { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" },
        { name: "Apache Kafka", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" }
      ]
    },
    {
      title: "Databases & Caching",
      skills: [
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
        { name: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" },
        { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" }
      ]
    }
  ];

  const coreFundamentals = ["OOP", "DBMS", "OS", "Computer Networks", "SIEM/SOAR"];
  const coursework = ["Data Structure And Algorithms", "Machine Learning", "Deep Learning", "Generative AI", "Cloud Computing", "Prompt Engineering"];

  // Project Data Array
  const projectsData = [
    {
      id: 1,
      title: "AI Cybersecurity Platform",
      date: "March 2026",
      logo: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
      ),
      githubLink: "https://github.com/adityagupta-gith/AI-Cybersecurity-Platform",
      tech: ["Python", "Kafka", "React", "Docker", "Kubernetes", "TensorFlow"],
      shortDesc: "A real-time, AI-driven SOC platform designed to detect network intrusions and anomalies using hybrid ML/DL pipelines on live streaming data.",
      bullets: [
        "Engineered a real-time, AI-driven SOC platform for detecting intrusions, zero-day attacks, malware, and insider threats from streaming network traffic, achieving ~82% detection on CIC-IDS2018 with low false positives.",
        "Developed hybrid ML/DL pipelines (Isolation Forest, Autoencoders, LSTM) on live Kafka streams with interactive dashboards, anomaly popups, time-based filters, and automated alerts, enabling sub-second threat detection.",
        "Deployed scalable, containerized microservices with Docker and Kubernetes, integrating SIEM/SOAR-ready workflows, attacker geolocation mapping, and SOC-style alert panels, cutting incident response time by ~35% and boosting analyst efficiency by ~45%."
      ]
    },
    {
      id: 2,
      title: "AI Chatbot",
      date: "October 2025",
      logo: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
      ),
      githubLink: "https://github.com/adityagupta-gith/AI-Chatbot",
      tech: ["React", "Node.js", "MongoDB", "Express", "TypeScript", "OpenAI"],
      shortDesc: "A highly responsive, full-stack MERN conversational AI agent built for high concurrency and extremely low-latency query resolution.",
      bullets: [
        "Developed a full-stack MERN chatbot that processed 500+ daily queries, reducing API response latency by 35% via optimized asynchronous data handling.",
        "Designed a high-performance UI with TypeScript and React, achieving a 95%+ Lighthouse score for accessibility and mobile responsiveness.",
        "Optimized MongoDB indexing and schema design to reduce chat history retrieval time by 200ms, supporting high concurrency user sessions."
      ]
    },
    {
      id: 3,
      title: "Instagram Clone",
      date: "December 2024",
      logo: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
      ),
      githubLink: "https://github.com/adityagupta-gith/Instagram-Clone",
      tech: ["Python", "React.js", "Node.js", "AWS", "Firebase", "Chakra UI"],
      shortDesc: "A scalable, cloud-hosted social media platform engineered with an algorithmic feed and globally optimized media delivery.",
      bullets: [
        "Architected a scalable social platform using AWS (S3/CloudFront) for media storage, improving global content delivery speeds by 40%.",
        "Engineered a real-time 'Feed' algorithm in Python and a high-fidelity Chakra UI interface, increasing simulated user engagement by 25%.",
        "Implemented robust security protocols and session management, reducing unauthorized access attempts by 60% while supporting 100+ active users."
      ]
    },
    {
      id: 4,
      title: "Personal Finance Tracker",
      date: "August 2024",
      logo: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
      ),
      githubLink: "https://github.com/adityagupta-gith/Personal-Finance-Tracker",
      tech: ["Python", "Flask", "SQLite", "Pandas", "Statsmodels"],
      shortDesc: "An automated financial tracking and forecasting application leveraging Python data science libraries for predictive budget modeling.",
      bullets: [
        "Built an automated tracking system that processed 1,000+ records with 99% accuracy, reducing manual data entry time for users by 50%.",
        "Developed interactive Dash visualizations and forecasting models using Statsmodels, achieving a 90% accuracy rate in predicting month-end expenses.",
        "Leveraged Pandas for complex data cleaning and transformation, improving user data comprehension by 40% over traditional spreadsheets."
      ]
    }
  ];

  return (
    <div className="bg-[#050505] text-[#ededed] min-h-screen font-mono selection:bg-emerald-500/30 selection:text-emerald-400 overflow-x-hidden">
      
      {/* FIXED NAVIGATION BAR */}
      <nav className="fixed top-0 w-full bg-[#050505]/80 backdrop-blur-xl border-b border-zinc-800/80 z-50 transition-all">
        <div className="max-w-4xl mx-auto px-6 py-5 flex justify-center md:justify-end items-center">
          <div className="flex gap-8 text-xs md:text-sm text-zinc-400 uppercase tracking-widest font-semibold">
            <a href="#home" className="hover:text-emerald-400 transition-colors duration-300">Home</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors duration-300">Skill</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors duration-300">Project</a>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-32 flex flex-col gap-40">
        
        {/* ================= 1. HOME / HERO SECTION ================= */}
        <section id="home" className="scroll-mt-40 pt-16 flex justify-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

          {/* New Premium Boxed Container for Hero Section */}
          <div className="bg-zinc-900/30 border border-zinc-800/80 p-8 md:p-16 rounded-[2rem] shadow-2xl backdrop-blur-md flex flex-col items-center text-center w-full max-w-3xl relative overflow-visible">
            
            <p className="text-emerald-400 font-mono tracking-widest text-sm uppercase mb-6">
              Hi, I am
            </p>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-100 to-emerald-500 leading-tight pb-2 mb-4">
              Aditya Gupta
            </h1>
            
            <h2 className="text-xl md:text-2xl text-zinc-300 tracking-wide font-light max-w-2xl leading-relaxed mb-6">
              A forward-thinking <strong className="text-white font-semibold">Software Engineer</strong> specializing in <strong className="text-emerald-400 font-semibold">AI & Machine Learning</strong>.
            </h2>
            
            <p className="text-zinc-400 max-w-xl leading-relaxed text-sm md:text-base px-4 mb-10">
              I architect scalable intelligent systems and high-performance applications that bridge the gap between complex algorithms and seamless user experiences. Let's transform ideas into immersive experiences together.
            </p>

            {/* Contact Interactive Section */}
            <div className="relative z-20">
              <button 
                onClick={() => setShowContact(!showContact)}
                className="group relative px-10 py-4 bg-black border border-zinc-700 hover:border-emerald-500 text-white rounded-full transition-all duration-300 overflow-hidden flex items-center gap-3 shadow-[0_0_0_rgba(16,185,129,0)] hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                <span className="relative font-semibold tracking-widest text-sm uppercase">Contact Me</span>
                <svg className={`relative w-4 h-4 transition-transform duration-300 ${showContact ? 'rotate-180 text-emerald-400' : 'text-zinc-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>

              <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-black/90 backdrop-blur-xl border border-zinc-800 rounded-2xl p-2 min-w-[300px] shadow-2xl transition-all duration-300 origin-top ${showContact ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}>
                <a href="mailto:adityaguptajeee@gmail.com" className="flex items-center gap-4 p-3 hover:bg-zinc-800/50 rounded-xl transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center group-hover:border-emerald-400 group-hover:text-emerald-400 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs text-zinc-500 font-bold uppercase tracking-wider">Email</span>
                    <span className="text-sm text-zinc-300 group-hover:text-white transition-colors">Send a Message</span>
                  </div>
                </a>

                <a href="https://github.com/adityagupta-gith" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-3 hover:bg-zinc-800/50 rounded-xl transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center group-hover:border-emerald-400 group-hover:text-emerald-400 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs text-zinc-500 font-bold uppercase tracking-wider">GitHub</span>
                    <span className="text-sm text-zinc-300 group-hover:text-white transition-colors">View Repositories</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 2. TECHNICAL SKILLS SECTION ================= */}
        <section id="skills" className="scroll-mt-32 flex flex-col gap-10">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-white tracking-tight">Technical Skills</h2>
            <div className="h-px bg-zinc-800 flex-1 mt-2"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, idx) => (
              <div key={idx} className="bg-zinc-900/40 border border-zinc-800/80 hover:border-emerald-500/50 hover:-translate-y-1 transition-all duration-300 p-6 rounded-2xl shadow-lg">
                <div className="text-emerald-400 mb-5 text-sm font-bold uppercase tracking-widest border-b border-zinc-800/50 pb-3">{category.title}</div>
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 px-3 py-1.5 bg-black/60 border border-zinc-700/50 rounded-lg hover:border-emerald-500/60 hover:bg-emerald-500/10 transition-colors cursor-default group">
                      {skill.icon ? (
                        <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center p-0.5 shadow-sm group-hover:scale-110 transition-transform">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                        </div>
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-emerald-500/50 group-hover:bg-emerald-400 transition-colors"></div>
                      )}
                      <span className="text-xs text-zinc-300 group-hover:text-white font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-2 grid grid-cols-1 gap-6">
            <div className="bg-zinc-900/20 border border-zinc-800/50 p-6 rounded-2xl">
              <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Core CS Fundamentals</h3>
              <div className="flex flex-wrap gap-2">
                {coreFundamentals.map((core, idx) => (
                  <span key={idx} className="bg-black/80 border border-zinc-700/50 text-zinc-300 px-4 py-2 rounded-md text-xs hover:border-emerald-500/50 hover:text-emerald-300 transition-colors cursor-default shadow-sm">
                    {core}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-zinc-900/20 border border-zinc-800/50 p-6 rounded-2xl">
              <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Completed Coursework</h3>
              <div className="flex flex-wrap gap-2">
                {coursework.map((course, idx) => (
                  <span key={idx} className="bg-emerald-950/20 border border-emerald-900/30 text-emerald-300/80 px-4 py-2 rounded-md text-xs hover:border-emerald-500/50 hover:text-emerald-300 transition-colors cursor-default shadow-sm">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= 3. PROJECTS SECTION (INTERACTIVE CARDS) ================= */}
        <section id="projects" className="scroll-mt-32 flex flex-col gap-10">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-white tracking-tight">Projects</h2>
            <div className="h-px bg-zinc-800 flex-1 mt-2"></div>
          </div>

          <div className="flex flex-col gap-6">
            {projectsData.map((project) => {
              const isExpanded = expandedProject === project.id;
              
              return (
                <div 
                  key={project.id} 
                  className={`group bg-zinc-900/40 border border-zinc-800/80 rounded-2xl transition-all duration-500 overflow-hidden cursor-pointer hover:border-emerald-500/50 ${isExpanded ? 'shadow-[0_0_30px_rgba(16,185,129,0.1)]' : ''}`}
                  onClick={() => setExpandedProject(isExpanded ? null : project.id)}
                >
                  
                  {/* Card Header - COLLAPSED VIEW */}
                  <div className="p-8 flex flex-col items-center text-center gap-5">
                    
                    {/* Maximize Logo and Project Name */}
                    <div className="flex flex-col items-center gap-4">
                      <div className={`p-4 rounded-2xl border transition-colors duration-300 ${isExpanded ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400' : 'bg-black/50 border-zinc-700/50 text-emerald-500/70 group-hover:border-emerald-500/40 group-hover:text-emerald-400'}`}>
                        {project.logo}
                      </div>
                      
                      <div>
                        <h3 className={`text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-300 ${isExpanded ? 'text-emerald-400' : 'text-white group-hover:text-emerald-300'}`}>
                          {project.title}
                        </h3>
                        <div className="text-xs text-zinc-500 font-mono mt-2">{project.date}</div>
                      </div>
                    </div>

                    {/* Centered GitHub Button Link */}
                    <div className="flex justify-center w-full my-2">
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noreferrer" 
                        onClick={(e) => e.stopPropagation()} 
                        className="flex items-center gap-2 px-5 py-2.5 bg-black/60 border border-zinc-700 hover:border-emerald-400 hover:text-emerald-400 text-zinc-300 rounded-full transition-all duration-300"
                        title="View on GitHub"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        <span className="text-xs font-bold uppercase tracking-widest">GitHub</span>
                      </a>
                    </div>

                    {/* Main Tech Stack */}
                    <div className="flex flex-wrap justify-center gap-2 mt-1">
                      {project.tech.map(tech => (
                        <span key={tech} className="text-xs text-emerald-400 font-mono bg-emerald-500/10 px-3 py-1.5 rounded-md border border-emerald-500/20 shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Click indicator */}
                    <div className={`mt-2 transition-all duration-300 ${isExpanded ? 'opacity-0 h-0' : 'opacity-100 h-auto'}`}>
                      <span className="text-[10px] text-zinc-500 uppercase tracking-widest animate-pulse">Click to expand details</span>
                    </div>
                  </div>

                  {/* Card Body - EXPANDED VIEW */}
                  <div className={`transition-all duration-500 ease-in-out border-t border-zinc-800/50 bg-black/40 ${isExpanded ? 'max-h-[1500px] opacity-100 py-8 px-6 md:px-12' : 'max-h-0 opacity-0 overflow-hidden py-0'}`}>
                    
                    {/* Short Description */}
                    <p className="text-zinc-300 text-lg font-light leading-relaxed mb-6 border-l-2 border-emerald-500 pl-5 bg-emerald-500/5 py-3 pr-4 rounded-r-lg text-left">
                      {project.shortDesc}
                    </p>

                    {/* Next line: GitHub Logo with link */}
                    <div className="flex justify-start w-full mb-8">
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noreferrer" 
                        onClick={(e) => e.stopPropagation()} 
                        className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        <span className="text-sm font-semibold hover:underline">View Full Repository on GitHub</span>
                      </a>
                    </div>
                    
                    {/* Bullet Points */}
                    <ul className="text-sm text-zinc-400 space-y-4 leading-relaxed list-none text-left">
                      {project.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-4">
                          <span className="text-emerald-500 mt-0.5 text-lg leading-none">▹</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </main>
    </div>
  );
}