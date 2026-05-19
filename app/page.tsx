"use client";

import { useState } from "react";
import { projectsData, technicalSkills, coursesData } from "./data";

export default function Home() {
  const [command, setCommand] = useState("");
  const [terminalOutput, setTerminalOutput] = useState([
    "✔ Core system verification: System Online // Node_Verified",
    "✔ Pipeline target loaded: AI Cybersecurity System mapped securely to stream clusters.",
    "💡 Type 'help' in the terminal input matrix to audit kernel directives."
  ]);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCmd = command.trim().toLowerCase();
    let response = [`❯ ${command}`];

    if (cleanCmd === "help") {
      response.push("Available directives: clear, help, status, metrics, pipelines, systems");
    } else if (cleanCmd === "status") {
      response.push("SOC Status: Active. Kafka streams streaming telemetry. Kubernetes nodes scaled cluster wide.");
    } else if (cleanCmd === "metrics") {
      response.push("Platform Baseline Metrics:");
      response.push(" - Anomaly Detection: 82% accuracy on CIC-IDS2018 (LSTM/Autoencoders).");
      response.push(" - Chatbot response: 35% response optimization latency reduction.");
      response.push(" - Infrastructure: 40% delivery enhancement using CloudFront proxy.");
    } else if (cleanCmd === "pipelines") {
      response.push("Detected Pipeline Assets: [Isolation Forest Stream], [MERN Event Concurrency Processing], [Statsmodels Forecast Engine].");
    } else if (cleanCmd === "systems") {
      response.push("Core Architectures: Docker containers initialized // PostgreSQL & MongoDB clusters operating nominal.");
    } else if (cleanCmd === "clear") {
      setTerminalOutput([]);
      setCommand("");
      return;
    } else if (cleanCmd === "") {
      return;
    } else {
      response.push(`Err: Directive '${command}' unrecognized. System execution halted. Type 'help' for instructions.`);
    }

    setTerminalOutput((prev) => [...prev, ...response]);
    setCommand("");
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#ededed] p-6 max-w-5xl mx-auto font-mono selection:bg-emerald-500 selection:text-black">
      
      {/* KERNEL STATUS TOP HEAD BAR */}
      <header className="border-b border-[#1a1a1a] pb-6 mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-lg font-bold tracking-tight text-emerald-400 flex items-center gap-1">
            <span className="text-gray-600">&lt;</span>
            ai-engineer-portfolio
            <span className="text-gray-600">/&gt;</span>
          </h1>
          <p className="text-[10px] text-gray-500 mt-1 tracking-wider uppercase">Runtime Core // Environment: Production</p>
        </div>
        <nav className="flex space-x-6 text-xs uppercase tracking-widest">
          <a href="#projects" className="text-gray-400 hover:text-emerald-400 transition-colors">.root/projects</a>
          <a href="#skills" className="text-gray-400 hover:text-emerald-400 transition-colors">.root/skills</a>
          <a href="#courses" className="text-gray-400 hover:text-emerald-400 transition-colors">.root/education</a>
        </nav>
      </header>

      {/* CORE SHELL TERMINAL SIMULATION ENGINE */}
      <section className="mb-16">
        <div className="bg-[#111] border border-[#1a1a1a] p-6 rounded-lg relative overflow-hidden group hover:border-emerald-500/10 transition-colors">
          <div className="absolute top-0 right-0 p-2 text-[9px] text-gray-600 uppercase tracking-widest">
            Control-Node v1.4.2
          </div>
          <div className="flex items-center space-x-2 text-xs text-emerald-500 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="tracking-wide uppercase text-[9px] font-bold">Secure Core Pipeline Active</span>
          </div>
          <h2 className="text-2xl font-extrabold text-white mb-4 tracking-tight">
            Machine Learning & Production Systems Engineer
          </h2>
          <p className="text-gray-400 max-w-3xl text-sm leading-relaxed mb-6 font-sans">
            I specialize in engineering high-throughput intelligent platforms. From real-time cyber intrusion 
            detection using distributed streaming pipelines to building ultra-fast full-stack LLM architectures, 
            my focus centers on performance, data optimization, and scalable production deployment models.
          </p>
          
          {/* RUNNING CONSOLE FRAME */}
          <div className="text-xs bg-[#050505] p-4 rounded border border-[#1a1a1a] font-mono shadow-inner">
            <div className="flex items-center space-x-2 mb-3 text-gray-600 text-[10px]">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/10"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/10"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/10"></span>
              <span className="ml-2 text-gray-500">interactive_kernel.sh — type commands below</span>
            </div>
            
            <div className="space-y-1 text-gray-400 max-h-48 overflow-y-auto mb-3">
              {terminalOutput.map((line, idx) => (
                <p key={idx} className={line.startsWith("❯") ? "text-purple-400" : line.startsWith("Err:") ? "text-red-400" : "text-emerald-500/80"}>
                  {line}
                </p>
              ))}
            </div>

            <form onSubmit={handleCommandSubmit} className="flex items-center text-gray-300 border-t border-[#1a1a1a] pt-2">
              <span className="text-purple-400 mr-2 font-bold">❯</span>
              <input
                type="text"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                placeholder="query infrastructure... (try: metrics, status, help)"
                className="bg-transparent focus:outline-none w-full text-emerald-400 placeholder-gray-800"
                autoComplete="off"
              />
            </form>
          </div>
        </div>
      </section>

      {/* METRIC-DRIVEN SYSTEM CASE STUDIES */}
      <section id="projects" className="mb-16 scroll-mt-6">
        <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6 flex items-center">
          <span className="text-emerald-400 mr-2">//</span> Verified Production Pipelines
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <div key={index} className="bg-[#111] border border-[#1a1a1a] p-6 rounded-lg hover:border-emerald-500/20 transition-all group flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-white font-bold text-base group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h4>
                  <span className={`text-[9px] px-2 py-0.5 rounded border font-sans uppercase font-bold tracking-wider ${
                    project.status === 'Production' ? 'text-emerald-400 bg-emerald-500/5 border-emerald-500/10' :
                    project.status === 'Beta' ? 'text-yellow-400 bg-yellow-500/5 border-yellow-500/10' :
                    'text-gray-400 bg-gray-500/5 border-gray-500/10'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="text-[10px] text-emerald-400 font-semibold mb-4 tracking-wide uppercase">
                  ⚡ Metrics: {project.metrics}
                </div>
                <ul className="space-y-2 mb-6 text-xs text-gray-400 list-none font-sans leading-relaxed">
                  {project.points.map((point, ptIdx) => (
                    <li key={ptIdx} className="flex items-start">
                      <span className="text-gray-600 mr-2 font-mono text-[11px] mt-0.5">↳</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#1a1a1a]">
                {project.technologies.map((tech, techIdx) => (
                  <span key={techIdx} className="text-[10px] bg-[#161616] px-2 py-0.5 rounded text-gray-400 border border-[#222]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CORE COMPETENCY TECH GRID */}
      <section id="skills" className="mb-16 scroll-mt-6">
        <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6 flex items-center">
          <span className="text-emerald-400 mr-2">//</span> Technical Infrastructure Capabilities
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalSkills.map((item, index) => (
            <div key={index} className="bg-[#111] border border-[#1a1a1a] p-5 rounded-lg group hover:border-gray-800 transition-colors">
              <div className="text-xs font-semibold mb-4 flex items-center justify-between border-b border-[#1a1a1a] pb-2 text-gray-400 tracking-wider">
                <span>0{index + 1} // {item.category}</span>
                <span className="text-emerald-500 text-[9px] bg-emerald-500/5 px-1.5 py-0.5 rounded border border-emerald-500/10 uppercase font-bold">Ready</span>
              </div>
              <ul className="space-y-2">
                {item.skills.map((skill, sIndex) => (
                  <li key={sIndex} className="text-xs text-gray-400 flex items-center group-hover:text-white transition-colors">
                    <span className="text-emerald-500/60 mr-2 text-[10px] font-bold">■</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ACADEMIC matrix LAYOUT */}
      <section id="courses" className="mb-12 scroll-mt-6">
        <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6 flex items-center">
          <span className="text-emerald-400 mr-2">//</span> Core Curricular Engineering Matrix
        </h3>
        <div className="bg-[#111] border border-[#1a1a1a] p-6 rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {coursesData.map((course, idx) => (
            <div key={idx} className="flex items-center space-x-3 p-2 bg-[#0a0a0a] rounded border border-[#151515] hover:border-emerald-500/20 transition-all">
              <span className="text-[10px] text-gray-600 font-bold">[{idx + 1}]</span>
              <span className="text-xs text-gray-300 tracking-tight">{course}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER METRICS SYSTEM */}
      <footer className="border-t border-[#1a1a1a] pt-6 text-center text-[10px] text-gray-600 uppercase tracking-widest">
        Deployment Complete // Compiled Successfully using Next.js 
      </footer>
    </main>
  );
}