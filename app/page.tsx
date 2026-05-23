"use client";

import React, { useState, useRef, useEffect } from "react";

export default function Home() {
  const [command, setCommand] = useState("");
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    "System Initialized. Welcome.",
    "Type 'help' for executable directives.",
    "",
  ]);

  const [inputSize, setInputSize] = useState<number>(100);
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
      response.push("  kth-smallest - Execute k-selection algorithm.");
      response.push("  part-cost    - Calculate array partitioning cost.");
      response.push("  v-cycle      - Run diagnostic on smart street light system.");
      response.push("  contact      - Retrieve secure communication coordinates.");
      response.push("  clear        - Wipe terminal history logs.");
    } else if (cleanCmd === "kth-smallest") {
      response.push("Executing selection sequence (k=4)...");
      response.push("The first 4 smallest elements are: [1, 4, 5, 7]");
    } else if (cleanCmd === "part-cost") {
      response.push("EVALUATING PARTITION COST MATRIX:");
      response.push("Applying formula: cost(subarray) = (max_element - min_element) * length_of_subarray");
      response.push("Optimization complete.");
    } else if (cleanCmd === "v-cycle") {
      response.push("INITIALIZING MODEL-BASED DESIGN DIAGNOSTIC...");
      response.push("  [+] V-Cycle sequence initiated.");
      response.push("  [+] Simulating edge-node energy routing for street light grid.");
      response.push("  [+] Status: Nominal.");
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

  const getLinearOps = (n: number) => n;
  const getLogOps = (n: number) => Math.round(Math.log2(n || 1));
  const getLinearithmicOps = (n: number) => Math.round(n * Math.log2(n || 1));
  const getQuadraticOps = (n: number) => n * n;

  return (
    <div className="bg-[#0a0a0a] text-[#ededed] min-h-screen font-mono selection:bg-emerald-500/30 selection:text-emerald-400">
      
      {/* FIXED NAVIGATION BAR */}
      <nav className="fixed top-0 w-full bg-[#0a0a0a]/90 backdrop-blur-md border-b border-zinc-800 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-emerald-400 font-bold tracking-widest text-sm">~/sys_profile</div>
          <div className="flex gap-6 text-xs text-zinc-400 uppercase tracking-wider">
            <a href="#home" className="hover:text-emerald-400 transition-colors">Home</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Skill</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Project</a>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT CONTAINER */}
      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24 flex flex-col gap-32">
        
        {/* 1. HOME SECTION */}
        <section id="home" className="flex flex-col gap-8 scroll-mt-32">
          <header className="mb-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4">
              Your Name
            </h1>
            <p className="text-emerald-400 text-lg md:text-xl tracking-wide">
              &gt; Data Scientist & Algorithm Engineer
            </p>
            <p className="text-zinc-500 mt-4 max-w-2xl leading-relaxed text-sm">
              Specializing in Python architecture, dynamic programming, and data engineering. 
              Focused on optimizing time and space complexity for large-scale relational databases and machine learning pipelines.
            </p>
          </header>

          {/* Terminal Sandbox */}
          <div className="bg-black border border-zinc-800 rounded-lg shadow-2xl overflow-hidden text-sm max-w-3xl">
            <div className="bg-zinc-900/80 px-4 py-2.5 flex items-center justify-between border-b border-zinc-800">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-zinc-700" />
                <div className="w-3 h-3 rounded-full bg-zinc-700" />
                <div className="w-3 h-3 rounded-full bg-zinc-700" />
              </div>
              <span className="text-xs text-zinc-500 select-none">bash - interactive_shell</span>
              <div className="w-12" />
            </div>

            <div className="p-4 h-56 overflow-y-auto flex flex-col gap-1 text-zinc-300">
              {terminalOutput.map((line, idx) => (
                <div key={idx} className="whitespace-pre-wrap leading-relaxed">
                  {line.startsWith("❯") ? (
                    <span className="text-purple-400 font-bold">{line}</span>
                  ) : line.includes("cost(subarray)") ? (
                    <span className="text-amber-400">{line}</span>
                  ) : line.includes("[+]") || line.includes("The first") ? (
                    <span className="text-emerald-400">{line}</span>
                  ) : (
                    line
                  )}
                </div>
              ))}
              <div ref={outputEndRef} />
            </div>

            <form onSubmit={handleCommandSubmit} className="flex border-t border-zinc-800 bg-zinc-900/30">
              <span className="pl-4 py-2.5 text-purple-400 font-bold select-none">❯</span>
              <input
                type="text"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                placeholder="try: part-cost, v-cycle, kth-smallest..."
                className="w-full bg-transparent pl-3 pr-4 py-2.5 text-emerald-400 placeholder-zinc-600 focus:outline-none"
                autoComplete="off" spellCheck="false"
              />
            </form>
          </div>
        </section>

        {/* 2. TECHNICAL SKILLS SECTION */}
        <section id="skills" className="flex flex-col gap-8 scroll-mt-32">
          <h2 className="text-2xl font-bold text-white border-b border-zinc-800 pb-4">Technical Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-900/30 border border-zinc-800 p-5 rounded-lg">
              <h3 className="text-emerald-400 font-bold mb-3 border-b border-zinc-800/50 pb-2">Algorithms & Logic</h3>
              <ul className="text-zinc-400 text-sm space-y-2">
                <li>• Dynamic Programming</li>
                <li>• Segment Trees & Range Queries</li>
                <li>• Big-O Complexity Optimization</li>
                <li>• Advanced Array Partitioning</li>
              </ul>
            </div>
            
            <div className="bg-zinc-900/30 border border-zinc-800 p-5 rounded-lg">
              <h3 className="text-emerald-400 font-bold mb-3 border-b border-zinc-800/50 pb-2">Data Science & ML</h3>
              <ul className="text-zinc-400 text-sm space-y-2">
                <li>• Python (Primary)</li>
                <li>• Pandas & NumPy</li>
                <li>• Precision/Recall Metrics</li>
                <li>• Normal Distribution Analysis</li>
              </ul>
            </div>

            <div className="bg-zinc-900/30 border border-zinc-800 p-5 rounded-lg">
              <h3 className="text-emerald-400 font-bold mb-3 border-b border-zinc-800/50 pb-2">Systems & Databases</h3>
              <ul className="text-zinc-400 text-sm space-y-2">
                <li>• Complex SQL Joins</li>
                <li>• Relational DB Management</li>
                <li>• V-Cycle Model-Based Design</li>
                <li>• Git / CI Pipeline Config</li>
              </ul>
            </div>
          </div>

          {/* Algorithmic Sandbox moved into Skills */}
          <div className="bg-zinc-900/30 border border-zinc-800 rounded-lg p-6 mt-4">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-white mb-2">&gt;_ Complexity Scaling Simulator</h3>
              <p className="text-xs text-zinc-400">Drag to visualize runtime operations scaling across array sizes.</p>
            </div>
            <div className="flex flex-col gap-4 mb-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-400">Data Size (N): <span className="text-emerald-400 font-bold">{inputSize}</span></span>
              </div>
              <input
                type="range" min="10" max="2000" step="10" value={inputSize}
                onChange={(e) => setInputSize(Number(e.target.value))}
                className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
              <div className="bg-black/40 border border-zinc-800/80 p-3 rounded-md">
                <div className="text-zinc-500 mb-1">O(log N)</div>
                <div className="text-purple-400 font-bold text-base">{getLogOps(inputSize)} ops</div>
              </div>
              <div className="bg-black/40 border border-zinc-800/80 p-3 rounded-md">
                <div className="text-zinc-500 mb-1">O(N)</div>
                <div className="text-emerald-400 font-bold text-base">{getLinearOps(inputSize)} ops</div>
              </div>
              <div className="bg-black/40 border border-zinc-800/80 p-3 rounded-md">
                <div className="text-zinc-500 mb-1">O(N log N)</div>
                <div className="text-amber-400 font-bold text-base">{getLinearithmicOps(inputSize)} ops</div>
              </div>
              <div className="bg-black/40 border border-zinc-800/80 p-3 rounded-md">
                <div className="text-zinc-500 mb-1">O(N²)</div>
                <div className="text-rose-400 font-bold text-base">{getQuadraticOps(inputSize).toLocaleString()} ops</div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. PROJECTS SECTION */}
        <section id="projects" className="flex flex-col gap-8 scroll-mt-32">
          <h2 className="text-2xl font-bold text-white border-b border-zinc-800 pb-4">Production Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-900/30 border border-zinc-800 rounded-lg p-6 hover:border-emerald-500/40 transition-colors">
              <h3 className="text-lg font-bold text-white mb-2">Smart Street Light Network</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                Architected and implemented a smart lighting grid using V-Cycle model-based design, prioritizing energy efficiency and sensor-driven logic.
              </p>
              <div className="text-xs text-emerald-400">Systems Engineering · V-Cycle</div>
            </div>

            <div className="bg-zinc-900/30 border border-zinc-800 rounded-lg p-6 hover:border-emerald-500/40 transition-colors">
              <h3 className="text-lg font-bold text-white mb-2">Hierarchy Productivity Optimizer</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                Engineered a tree-based dynamic programming solution to calculate the maximum sum of productivity values across complex corporate data structures.
              </p>
              <div className="text-xs text-purple-400">Python · Dynamic Programming</div>
            </div>

            <div className="bg-zinc-900/30 border border-zinc-800 rounded-lg p-6 hover:border-emerald-500/40 transition-colors md:col-span-2">
              <h3 className="text-lg font-bold text-white mb-2">High-Frequency Range Query Engine</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                Developed a low-latency financial query system utilizing segment trees. Successfully maintained strict $O(\log N)$ performance ceilings for high-volume stock price updates and range lookups.
              </p>
              <div className="text-xs text-amber-400">Python · Segment Trees · Algorithm Analysis</div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}