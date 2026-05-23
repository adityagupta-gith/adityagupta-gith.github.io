"use client";

import React, { useState, useRef, useEffect } from "react";

export default function Home() {
  const [command, setCommand] = useState("");
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    "Welcome to System Dashboard Terminal [Version 4.0.0]",
    "Type 'help' to fetch a list of available engineering directives.",
    "",
  ]);

  // Complexity Sandbox State
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
      response.push("  metrics    - Audit project statistics and accuracy benchmarks.");
      response.push("  cyber-sim  - Trigger simulation run of the LSTM intrusion detection pipeline.");
      response.push("  bot-query  - Execute a low-latency cache performance test on MongoDB schema.");
      response.push("  status     - Query current distributed infrastructure node health.");
      response.push("  clear      - Wipe terminal history logs.");
    } else if (cleanCmd === "status") {
      response.push("SYSTEM STATUS: NOMINAL // KERNEL: ACTIVE");
      response.push("  🖥 K8s Clusters : 3 Nodes active across US-East-1 AWS pods.");
      response.push("  📊 Stream Node : Apache Kafka live broker streaming network telemetry.");
    } else if (cleanCmd === "metrics") {
      response.push("PLATFORM PERFORMANCE TARGETS:");
      response.push("  [+] AI Cyber Platform : ~82% Detection accuracy on CIC-IDS2018 streams.");
      response.push("  [+] MERN Chatbot      : 95%+ Lighthouse performance // -200ms DB retrieval.");
      response.push("  [+] Cloud Arch        : +40% Global media distribution efficiency via CDN proxy.");
    } else if (cleanCmd === "cyber-sim") {
      response.push("LAUNCHING STREAM AUDIT SIMULATION...");
      response.push("  [WAIT] Connecting to Kafka live pipeline channel...");
      response.push("  [INFO] Ingesting test vector from CIC-IDS2018 packet sequence.");
      response.push("  [RUN] Evaluating hybrid autoencoder + LSTM network weights...");
      response.push("  [ALERT] Anomaly Detected: Bruteforce SSH signature identified on Subnet-B.");
      response.push("  [STAT] Sub-second notification fired to SOAR workflow. Response complete.");
    } else if (cleanCmd === "bot-query") {
      response.push("INITIALIZING CONCURRENCY QUERY TEST...");
      response.push("  [DATA] Injecting 500 parallel token generation request metrics.");
      response.push("  [PERF] Index verification check routing through MongoDB schema clusters.");
      response.push("  [COMP] Query lookup resolved in 45ms (Cached execution optimization: -200ms).");
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

  // Safe operation calculators for Big-O metrics
  const getLinearOps = (n: number) => n;
  const getLogOps = (n: number) => Math.round(Math.log2(n || 1));
  const getLinearithmicOps = (n: number) => Math.round(n * Math.log2(n || 1));
  const getQuadraticOps = (n: number) => n * n;

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#ededed] p-6 md:p-12 flex flex-col items-center selection:bg-emerald-500/30 selection:text-emerald-400">
      <div className="max-w-4xl w-full flex flex-col gap-10">
        
        {/* HEADER SECTION */}
        <header className="border-b border-zinc-800 pb-6">
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2 font-mono">
            System Portfolio
          </h1>
          <p className="text-emerald-400 font-mono text-sm tracking-wide">
            &gt; Machine Learning & Production Systems Engineer
          </p>
        </header>

        {/* CORE GRID CARD GRID */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 flex flex-col justify-between hover:border-emerald-500/40 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold font-mono text-white">AI Cyber Platform</h3>
                <span className="text-xs font-mono bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded">
                  ~82% Detection
                </span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                Designed a comprehensive anomaly detection engine parsing live data packages. Built using a combination of autoencoder structures and recurrent LSTM models to catch network threats.
              </p>
            </div>
            <div className="text-xs font-mono text-zinc-500">
              Python · TensorFlow · Apache Kafka
            </div>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 flex flex-col justify-between hover:border-emerald-500/40 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold font-mono text-white">Full-Stack MERN AI Chatbot</h3>
                <span className="text-xs font-mono bg-amber-500/10 border border-amber-500/20 text-amber-400 px-2 py-0.5 rounded">
                  -200ms Latency
                </span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                Engineered an intelligent production support chatbot. Developed indexing schemas within MongoDB alongside memory-caching strategies to significantly slash response lookup intervals.
              </p>
            </div>
            <div className="text-xs font-mono text-zinc-500">
              React.js · Node.js · MongoDB · Express
            </div>
          </div>
        </section>

        {/* INTERACTIVE TERMINAL SECTION */}
        <section className="flex flex-col gap-3">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
              Interactive Execution Sandbox
            </span>
            <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Console Online
            </span>
          </div>

          <div className="bg-black border border-zinc-800 rounded-lg shadow-2xl overflow-hidden font-mono text-sm">
            <div className="bg-zinc-900/80 px-4 py-2.5 flex items-center justify-between border-b border-zinc-800">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-zinc-700" />
                <div className="w-3 h-3 rounded-full bg-zinc-700" />
                <div className="w-3 h-3 rounded-full bg-zinc-700" />
              </div>
              <span className="text-xs text-zinc-500 select-none">bash - core_engine_ui</span>
              <div className="w-12" />
            </div>

            <div className="p-4 h-64 overflow-y-auto flex flex-col gap-1 text-zinc-300 selection:bg-emerald-500/40 selection:text-white">
              {terminalOutput.map((line, idx) => (
                <div key={idx} className="whitespace-pre-wrap leading-relaxed">
                  {line.startsWith("❯") ? (
                    <span className="text-purple-400 font-bold">{line}</span>
                  ) : line.includes("[ALERT]") ? (
                    <span className="text-rose-400 font-semibold">{line}</span>
                  ) : line.includes("[+]") || line.includes("SYSTEM STATUS") ? (
                    <span className="text-emerald-400">{line}</span>
                  ) : (
                    line
                  )}
                </div>
              ))}
              <div ref={outputEndRef} />
            </div>

            <form onSubmit={handleCommandSubmit} className="flex border-t border-zinc-800 bg-zinc-900/30">
              <span className="pl-4 py-2.5 text-purple-400 font-bold select-none flex items-center">
                ❯
              </span>
              <input
                type="text"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                placeholder="query infrastructure... (try: metrics, cyber-sim, status, help)"
                className="w-full bg-transparent pl-2 pr-4 py-2.5 text-emerald-400 placeholder-zinc-600 focus:outline-none font-mono"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
              />
            </form>
          </div>
        </section>

        {/* ALGORITHMIC COMPLEXITY INTERACTIVE SANDBOX */}
        <section className="bg-zinc-900/30 border border-zinc-800 rounded-lg p-6 font-mono">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-white mb-2">&gt;_ Algorithmic Matrix Sandbox</h3>
            <p className="text-xs text-zinc-400">
              Adjust the structural input size element count to visualize theoretical scaling operations.
            </p>
          </div>

          <div className="flex flex-col gap-4 mb-6">
            <div className="flex items-center justify-between text-sm">
              <span className="text-zinc-400">Input Size (N): <span className="text-emerald-400 font-bold">{inputSize}</span></span>
              <span className="text-xs text-zinc-500">Scale limit: 10,000</span>
            </div>
            <input
              type="range"
              min="10"
              max="2000"
              step="10"
              value={inputSize}
              onChange={(e) => setInputSize(Number(e.target.value))}
              className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div className="bg-black/40 border border-zinc-800/80 p-3 rounded-md">
              <div className="text-zinc-500 mb-1">O(log N)</div>
              <div className="text-purple-400 font-bold text-base">{getLogOps(inputSize)} ops</div>
              <div className="text-[10px] text-zinc-600 mt-1">Binary Search / Segment Tree</div>
            </div>
            <div className="bg-black/40 border border-zinc-800/80 p-3 rounded-md">
              <div className="text-zinc-500 mb-1">O(N)</div>
              <div className="text-emerald-400 font-bold text-base">{getLinearOps(inputSize)} ops</div>
              <div className="text-[10px] text-zinc-600 mt-1">Linear Scan / Hash Map</div>
            </div>
            <div className="bg-black/40 border border-zinc-800/80 p-3 rounded-md">
              <div className="text-zinc-500 mb-1">O(N log N)</div>
              <div className="text-amber-400 font-bold text-base">{getLinearithmicOps(inputSize)} ops</div>
              <div className="text-[10px] text-zinc-600 mt-1">Merge Sort / Heap Heapq</div>
            </div>
            <div className="bg-black/40 border border-zinc-800/80 p-3 rounded-md">
              <div className="text-zinc-500 mb-1">O(N²)</div>
              <div className="text-rose-400 font-bold text-base">
                {getQuadraticOps(inputSize).toLocaleString()} ops
              </div>
              <div className="text-[10px] text-zinc-600 mt-1">Nested Loops / DP Matrices</div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}