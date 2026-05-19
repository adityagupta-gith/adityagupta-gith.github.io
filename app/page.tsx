import { techStack } from "./data";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#ededed] p-8 max-w-5xl mx-auto font-mono selection:bg-emerald-500 selection:text-black">
      
      {/* HEADER SECTION */}
      <header className="border-b border-[#1a1a1a] pb-6 mb-12 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-emerald-400 flex items-center gap-2">
            <span className="text-gray-600">&lt;</span>
            username.github.io
            <span className="text-gray-600">/&gt;</span>
          </h1>
          <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-wider">Status: Active // Node_Verified</p>
        </div>
        <div className="flex space-x-6 text-xs uppercase tracking-wider">
          <a href="#projects" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-1">
            <span className="text-gray-600 text-[10px]">01.</span> projects
          </a>
          <a href="#stack" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-1">
            <span className="text-gray-600 text-[10px]">02.</span> competencies
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="mb-16">
        <div className="bg-[#111] border border-[#1a1a1a] p-6 rounded-lg relative overflow-hidden group hover:border-emerald-500/20 transition-colors">
          <div className="absolute top-0 right-0 p-2 text-[9px] text-gray-600 uppercase tracking-widest font-sans">
            AI/ML Core v1.0.4
          </div>
          <div className="flex items-center space-x-2 text-xs text-emerald-500 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="tracking-wide uppercase text-[10px]">System Online: Ready to Engineer</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white mb-4 tracking-tight">
            Hi, I'm an AI/ML Engineer.
          </h2>
          <p className="text-gray-400 max-w-3xl text-sm leading-relaxed mb-6">
            I build highly scalable machine learning architectures, optimize complex data processing 
            pipelines, and deploy edge-ready neural networks. Focused on end-to-end optimization 
            from data manipulation to cloud deployment.
          </p>
          
          {/* FAKE LIVE TERMINAL OUTPUT */}
          <div className="text-xs bg-[#050505] p-4 rounded border border-[#1a1a1a] font-mono shadow-inner">
            <div className="flex items-center space-x-2 mb-2 text-gray-600 text-[10px]">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/20"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/20"></span>
              <span className="ml-2">bash — session_analysis.sh</span>
            </div>
            <div className="space-y-1 text-gray-400">
              <p><span className="text-purple-400">❯</span> npx brain --analyze --optimize-complexity</p>
              <p className="text-emerald-500/80">✔ Core dependencies verified [OK]</p>
              <p className="text-emerald-500/80">✔ Algorithm target execution latency optimized to O(log N)</p>
              <p className="text-emerald-500/80">✔ Multi-table SQL schemas and Pandas manipulation layer aligned</p>
            </div>
          </div>
        </div>
      </section>

      {/* RECENT PROJECTS CASE STUDY */}
      <section id="projects" className="mb-16 scroll-mt-6">
        <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6 flex items-center">
          <span className="text-emerald-400 mr-2">//</span> Featured Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1 */}
          <div className="bg-[#111] border border-[#1a1a1a] p-6 rounded-lg hover:border-emerald-500/30 transition-all group flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-white font-bold text-base group-hover:text-emerald-400 transition-colors">
                  Predictive Market Engine
                </h4>
                <span className="text-[10px] text-emerald-400 bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/10 font-sans uppercase">
                  Production
                </span>
              </div>
              <p className="text-[10px] font-semibold text-gray-500 mb-3 uppercase tracking-wider">Metrics: 94% Precision // 91% Recall</p>
              <p className="text-gray-400 stream-text text-xs leading-relaxed mb-6">
                Designed a tree-based dynamic programming system executing real-time data transformations 
                using Pandas and advanced SQL multi-table joins. Optimized performance metrics to O(log N).
              </p>
            </div>
            <div className="flex space-x-2 pt-2 border-t border-[#1a1a1a]">
              <span className="text-[10px] font-sans bg-[#161616] px-2 py-1 rounded text-gray-400 border border-[#222]">Python</span>
              <span className="text-[10px] font-sans bg-[#161616] px-2 py-1 rounded text-gray-400 border border-[#222]">SQL</span>
              <span className="text-[10px] font-sans bg-[#161616] px-2 py-1 rounded text-gray-400 border border-[#222]">Pandas</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#111] border border-[#1a1a1a] p-6 rounded-lg hover:border-emerald-500/30 transition-all group flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-white font-bold text-base group-hover:text-emerald-400 transition-colors">
                  IoT Smart Infrastructure Agent
                </h4>
                <span className="text-[10px] text-blue-400 bg-blue-500/5 px-2 py-0.5 rounded border border-blue-500/10 font-sans uppercase">
                  Hardware-In-Loop
                </span>
              </div>
              <p className="text-[10px] font-semibold text-gray-500 mb-3 uppercase tracking-wider">Model-Based Design // V-Cycle Lifecycle</p>
              <p className="text-gray-400 text-xs leading-relaxed mb-6">
                Engineered automated control loop behaviors using continuous status checks for localized adaptive lighting environments. 
                Built robust hardware logic mappings.
              </p>
            </div>
            <div className="flex space-x-2 pt-2 border-t border-[#1a1a1a]">
              <span className="text-[10px] font-sans bg-[#161616] px-2 py-1 rounded text-gray-400 border border-[#222]">C++</span>
              <span className="text-[10px] font-sans bg-[#161616] px-2 py-1 rounded text-gray-400 border border-[#222]">Scikit-Learn</span>
            </div>
          </div>

        </div>
      </section>

      {/* TECH STACK SECTION */}
      <section id="stack" className="mb-16 scroll-mt-6">
        <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6 flex items-center">
          <span className="text-emerald-400 mr-2">//</span> Core Competencies
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {techStack.map((item, index) => (
            <div key={index} className="bg-[#111] border border-[#1a1a1a] p-5 rounded-lg relative group hover:border-gray-800 transition-colors">
              <div className="text-xs text-gray-500 font-mono mb-4 flex items-center justify-between border-b border-[#1a1a1a] pb-2">
                <span className="uppercase tracking-wider font-semibold text-gray-400">0{index + 1} / {item.category}</span>
                <span className="text-emerald-500 text-[10px] font-sans bg-emerald-500/5 px-1.5 py-0.5 rounded">READY</span>
              </div>
              <ul className="space-y-3">
                {item.skills.map((skill, sIndex) => (
                  <li key={sIndex} className="text-xs text-gray-300 flex items-start font-mono group-hover:text-white transition-colors">
                    <span className="text-emerald-500 mr-2 mt-0.5 text-[10px] font-bold">✓</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}