"use client";

import React, { useState, useRef, useEffect } from "react";

export default function Home() {
  const [command, setCommand] = useState("");
  const [showContact, setShowContact] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    "System Initialized. Welcome to the engineering portfolio.",
    "Type 'help' to view executable directives.",
    "",
  ]);

  const outputEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    outputEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [terminalOutput]);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCmd = command.trim().toLowerCase();
    let response = [`❯ ${command}`];

    if (cleanCmd === "help") {
      response.push("Available system directives:");
      response.push("  kth-smallest - Execute k-selection algorithm output.");
      response.push("  part-cost    - Calculate array partitioning cost.");
      response.push("  contact      - Retrieve secure communication coordinates.");
      response.push("  clear        - Wipe terminal history logs.");
    } else if (cleanCmd === "kth-smallest") {
      response.push("Executing selection sequence...");
      response.push("The first 4 smallest elements are: [1, 4, 5, 7]");
    } else if (cleanCmd === "part-cost") {
      response.push("EVALUATING PARTITION COST MATRIX:");
      response.push("cost(subarray) = (max_element - min_element) * length_of_subarray");
      response.push("Optimization complete.");
    } else if (cleanCmd === "contact") {
      response.push("ESTABLISHING SECURE COMMUNICATIONS LINK...");
      response.push("  [+] Email    : adityaguptajeee@gmail.com");
      response.push("  [+] GitHub   : github.com/adityagupta-gith");
    } else if (cleanCmd === "clear") {
      setTerminalOutput([]);
      setCommand("");
      return;
    } else if (cleanCmd === "") {
      return;
    } else {
      response.push(`Err: Directive '${command}' unrecognized. Type 'help' for instructions.`);
    }

    setTerminalOutput((prev) => [...prev, ...response]);
    setCommand("");
  };

  // Skill Data mapped to Official Devicon SVGs
  const skillCategories = [
    {
      title: "Languages",
      skills: [
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
        { name: "NLP", icon: null },
        { name: "Time-Series", icon: null }
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
        { name: "Chakra UI", icon: null },
        { name: "Dash", icon: null },
        { name: "RESTful APIs", icon: null }
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

  return (
    <div className="bg-[#050505] text-[#ededed] min-h-screen font-mono selection:bg-emerald-500/30 selection:text-emerald-400 overflow-x-hidden">
      
      {/* FIXED NAVIGATION BAR */}
      <nav className="fixed top-0 w-full bg-[#050505]/80 backdrop-blur-xl border-b border-zinc-800/80 z-50 transition-all">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-emerald-400 font-bold tracking-widest text-sm md:text-base flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
            ~/aditya_gupta
          </div>
          <div className="flex gap-6 text-xs md:text-sm text-zinc-400 uppercase tracking-wider font-semibold">
            <a href="#home" className="hover:text-emerald-400 transition-colors duration-300">Home</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors duration-300">Skill</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors duration-300">Project</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-32 flex flex-col gap-40">
        
        {/* ================= 1. HOME / HERO SECTION ================= */}
        <section id="home" className="scroll-mt-40 flex flex-col lg:flex-row items-center gap-12 pt-10 relative">
          
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

          <div className="flex-1 flex flex-col gap-6 items-start">
            <p className="text-emerald-400 font-mono tracking-widest text-sm uppercase">
              1. Hi, I am
            </p>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-100 to-emerald-500 leading-tight pb-2">
              Aditya Gupta
            </h1>
            
            <h2 className="text-lg md:text-xl text-zinc-300 tracking-wide font-light max-w-2xl leading-relaxed">
              A versatile software developer with expertise in web development, automation, and machine learning.
            </h2>
            
            <p className="text-emerald-400/80 max-w-xl leading-relaxed text-sm md:text-base border-l-2 border-emerald-500/30 pl-4 italic bg-emerald-500/5 py-2 pr-4 rounded-r-lg">
              "Let's transform ideas into immersive experiences together."
            </p>

            <div className="relative mt-4 z-20">
              <button 
                onClick={() => setShowContact(!showContact)}
                className="group relative px-8 py-3 bg-zinc-900 border border-zinc-700 hover:border-emerald-500 text-white rounded-full transition-all duration-300 overflow-hidden flex items-center gap-3 shadow-[0_0_0_rgba(16,185,129,0)] hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                <span className="relative font-semibold tracking-wide text-sm uppercase">Contact Me</span>
                <svg className={`relative w-4 h-4 transition-transform duration-300 ${showContact ? 'rotate-180 text-emerald-400' : 'text-zinc-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>

              <div className={`absolute top-full left-0 mt-4 bg-black/60 backdrop-blur-xl border border-zinc-800 rounded-2xl p-2 min-w-[300px] shadow-2xl transition-all duration-300 origin-top ${showContact ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}>
                <a href="mailto:adityaguptajeee@gmail.com" className="flex items-center gap-4 p-3 hover:bg-zinc-800/50 rounded-xl transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center group-hover:border-emerald-400 group-hover:text-emerald-400 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-zinc-500 font-bold uppercase tracking-wider">Email</span>
                    <span className="text-sm text-zinc-300 group-hover:text-white transition-colors">Send a Message</span>
                  </div>
                </a>
                
                <a href="[github.com/adityagupta-gith](github.com/adityagupta-gith)" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-3 hover:bg-zinc-800/50 rounded-xl transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center group-hover:border-emerald-400 group-hover:text-emerald-400 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-zinc-500 font-bold uppercase tracking-wider">GitHub</span>
                    <span className="text-sm text-zinc-300 group-hover:text-white transition-colors">View Repositories</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full max-w-lg z-10 hidden md:block">
            <div className="bg-[#0a0a0a] border border-zinc-800 rounded-xl shadow-[0_0_40px_rgba(16,185,129,0.05)] hover:shadow-[0_0_60px_rgba(16,185,129,0.1)] transition-shadow duration-500 overflow-hidden text-sm">
              <div className="bg-zinc-900/50 px-4 py-3 flex items-center justify-between border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs text-zinc-500 select-none">bash - root@dev</span>
                <div className="w-12" />
              </div>
              <div className="p-5 h-64 overflow-y-auto flex flex-col gap-1.5 text-zinc-300">
                {terminalOutput.map((line, idx) => (
                  <div key={idx} className="whitespace-pre-wrap leading-relaxed">
                    {line.startsWith("❯") ? (
                      <span className="text-emerald-400 font-bold">{line}</span>
                    ) : line.includes("cost(subarray)") || line.includes("first 4") ? (
                      <span className="text-amber-300">{line}</span>
                    ) : line.includes("[+]") ? (
                      <span className="text-purple-400">{line}</span>
                    ) : (
                      line
                    )}
                  </div>
                ))}
                <div ref={outputEndRef} />
              </div>
              <form onSubmit={handleCommandSubmit} className="flex border-t border-zinc-800 bg-zinc-900/30">
                <span className="pl-4 py-3 text-emerald-400 font-bold select-none">❯</span>
                <input
                  type="text" value={command} onChange={(e) => setCommand(e.target.value)}
                  placeholder="try: kth-smallest, part-cost, contact..."
                  className="w-full bg-transparent pl-3 pr-4 py-3 text-white placeholder-zinc-600 focus:outline-none"
                  autoComplete="off" spellCheck="false"
                />
              </form>
            </div>
          </div>
        </section>

        {/* ================= 2. TECHNICAL SKILLS SECTION (ICON UPGRADE) ================= */}
        <section id="skills" className="scroll-mt-32 flex flex-col gap-10">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-white tracking-tight">Technical Skills</h2>
            <div className="h-px bg-zinc-800 flex-1 mt-2"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Core CS Fundamentals */}
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

            {/* Courses */}
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

        {/* ================= 3. PROJECTS SECTION ================= */}
        <section id="projects" className="scroll-mt-32 flex flex-col gap-10">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-white tracking-tight">Production Projects</h2>
            <div className="h-px bg-zinc-800 flex-1 mt-2"></div>
          </div>

          <div className="flex flex-col gap-8">
            {/* Project 1 */}
            <div className="group bg-zinc-900/20 border border-zinc-800/80 p-8 rounded-2xl hover:bg-zinc-900/40 hover:border-emerald-500/30 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500/0 group-hover:bg-emerald-500/50 transition-colors"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">AI Cybersecurity Platform</h3>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {["Python", "Kafka", "React", "Docker", "Kubernetes", "TensorFlow"].map(tech => (
                      <span key={tech} className="text-[10px] text-emerald-400 font-mono bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="text-xs text-zinc-500 font-mono bg-black/50 px-3 py-1 rounded border border-zinc-800 w-fit shrink-0">March 2026</div>
              </div>
              <ul className="text-sm text-zinc-400 space-y-3 leading-relaxed list-disc list-outside ml-4 marker:text-zinc-700">
                <li>Engineered a real-time, AI-driven SOC platform for detecting intrusions, zero-day attacks, malware, and insider threats from streaming network traffic, achieving <strong className="text-zinc-200 font-normal">~82% detection on CIC-IDS2018</strong> with low false positives.</li>
                <li>Developed hybrid ML/DL pipelines (Isolation Forest, Autoencoders, LSTM) on live Kafka streams with interactive dashboards, anomaly popups, time-based filters, and automated alerts, enabling sub-second threat detection.</li>
                <li>Deployed scalable, containerized microservices with Docker and Kubernetes, integrating SIEM/SOAR-ready workflows, attacker geolocation mapping, and SOC-style alert panels, cutting incident response time by ~35% and boosting analyst efficiency by ~45%.</li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="group bg-zinc-900/20 border border-zinc-800/80 p-8 rounded-2xl hover:bg-zinc-900/40 hover:border-emerald-500/30 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500/0 group-hover:bg-emerald-500/50 transition-colors"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">AI Chatbot</h3>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {["React", "Node.js", "MongoDB", "Express", "TypeScript", "OpenAI"].map(tech => (
                      <span key={tech} className="text-[10px] text-emerald-400 font-mono bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="text-xs text-zinc-500 font-mono bg-black/50 px-3 py-1 rounded border border-zinc-800 w-fit shrink-0">October 2025</div>
              </div>
              <ul className="text-sm text-zinc-400 space-y-3 leading-relaxed list-disc list-outside ml-4 marker:text-zinc-700">
                <li>Developed a full-stack MERN chatbot that processed 500+ daily queries, reducing API response latency by 35% via optimized asynchronous data handling.</li>
                <li>Designed a high-performance UI with TypeScript and React, achieving a 95%+ Lighthouse score for accessibility and mobile responsiveness.</li>
                <li>Optimized MongoDB indexing and schema design to reduce chat history retrieval time by 200ms, supporting high concurrency user sessions.</li>
              </ul>
            </div>

            {/* Project 3 */}
            <div className="group bg-zinc-900/20 border border-zinc-800/80 p-8 rounded-2xl hover:bg-zinc-900/40 hover:border-emerald-500/30 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500/0 group-hover:bg-emerald-500/50 transition-colors"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">Instagram Clone</h3>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {["Python", "React.js", "Node.js", "AWS", "Firebase", "Chakra UI"].map(tech => (
                      <span key={tech} className="text-[10px] text-emerald-400 font-mono bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="text-xs text-zinc-500 font-mono bg-black/50 px-3 py-1 rounded border border-zinc-800 w-fit shrink-0">December 2024</div>
              </div>
              <ul className="text-sm text-zinc-400 space-y-3 leading-relaxed list-disc list-outside ml-4 marker:text-zinc-700">
                <li>Architected a scalable social platform using AWS (S3/CloudFront) for media storage, improving global content delivery speeds by 40%.</li>
                <li>Engineered a real-time "Feed" algorithm in Python and a high-fidelity Chakra UI interface, increasing simulated user engagement by 25%.</li>
                <li>Implemented robust security protocols and session management, reducing unauthorized access attempts by 60% while supporting 100+ active users.</li>
              </ul>
            </div>

            {/* Project 4 */}
            <div className="group bg-zinc-900/20 border border-zinc-800/80 p-8 rounded-2xl hover:bg-zinc-900/40 hover:border-emerald-500/30 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500/0 group-hover:bg-emerald-500/50 transition-colors"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">Personal Finance Tracker</h3>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {["Python", "Flask", "SQLite", "Pandas", "Statsmodels"].map(tech => (
                      <span key={tech} className="text-[10px] text-emerald-400 font-mono bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="text-xs text-zinc-500 font-mono bg-black/50 px-3 py-1 rounded border border-zinc-800 w-fit shrink-0">August 2024</div>
              </div>
              <ul className="text-sm text-zinc-400 space-y-3 leading-relaxed list-disc list-outside ml-4 marker:text-zinc-700">
                <li>Built an automated tracking system that processed 1,000+ records with 99% accuracy, reducing manual data entry time for users by 50%.</li>
                <li>Developed interactive Dash visualizations and forecasting models using Statsmodels, achieving a 90% accuracy rate in predicting month-end expenses.</li>
                <li>Leveraged Pandas for complex data cleaning and transformation, improving user data comprehension by 40% over traditional spreadsheets.</li>
              </ul>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}