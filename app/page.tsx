import { techStack } from "./data";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#ededed] p-8 max-w-5xl mx-auto font-mono">
      
      {/* HEADER SECTION */}
      <header className="border-b border-[#222] pb-6 mb-12 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-emerald-400">username.github.io</h1>
          <p className="text-xs text-gray-500 mt-1">Status: Active // Production</p>
        </div>
        <div className="flex space-x-4 text-sm text-gray-400">
          <a href="#projects" className="hover:text-emerald-400 transition-colors">./projects</a>
          <a href="#stack" className="hover:text-emerald-400 transition-colors">./stack</a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="mb-16">
        <div className="bg-[#111] border border-[#222] p-6 rounded-lg shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2 text-[10px] text-gray-600 uppercase tracking-widest">
            AI/ML Module v1.0
          </div>
          <div className="flex items-center space-x-2 text-xs text-emerald-500 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>System Online: Ready to Engineer</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Hi, I'm an AI/ML Engineer.
          </h2>
          <p className="text-gray-400 max-w-2xl text-sm leading-relaxed mb-6">
            I build highly scalable machine learning architectures, optimize complex data processing 
            pipelines, and deploy edge-ready neural networks. Focused on end-to-end optimization 
            from data manipulation to cloud deployment.
          </p>
          <div className="text-xs text-emerald-400/80 bg-[#0a0a0a] p-3 rounded border border-[#1a1a1a] overflow-x-auto">
            <code>$ npx brain --analyze --optimize-complexity</code>
          </div>
        </div>
      </section>

      {/* RECENT PROJECTS CASE STUDY */}
      <section id="projects" className="mb-16">
        <h3 className="text-lg font-bold text-white mb-6 flex items-center">
          <span className="text-emerald-400 mr-2">&gt;</span> Featured Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1 */}
          <div className="bg-[#111] border border-[#222] p-5 rounded-lg hover:border-emerald-500/30 transition-all group">
            <h4 className="text-white font-bold group-hover:text-emerald-400 transition-colors">
              Predictive Market Engine
            </h4>
            <p className="text-xs text-gray-500 mt-1 mb-3">Metrics: 94% Precision // 91% Recall</p>
            <p className="text-gray-400 text-xs leading-relaxed mb-4">
              Designed a tree-based dynamic programming system executing real-time data transformations 
              using Pandas and advanced SQL multi-table joins. Optimized performance to O(log N).
            </p>
            <div className="flex space-x-2">
              <span className="text-[10px] bg-[#1a1a1a] px-2 py-1 rounded text-gray-400">Python</span>
              <span className="text-[10px] bg-[#1a1a1a] px-2 py-1 rounded text-gray-400">SQL</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#111] border border-[#222] p-5 rounded-lg hover:border-emerald-500/30 transition-all group">
            <h4 className="text-white font-bold group-hover:text-emerald-400 transition-colors">
              IoT Smart Infrastructure Agent
            </h4>
            <p className="text-xs text-gray-500 mt-1 mb-3">Model-Based Design // V-Cycle Lifecycle</p>
            <p className="text-gray-400 text-xs leading-relaxed mb-4">
              Engineered model behaviors using continuous system checks for localized adaptive lighting environments. 
              Built robust hardware-in-the-loop logic mappings.
            </p>
            <div className="flex space-x-2">
              <span className="text-[10px] bg-[#1a1a1a] px-2 py-1 rounded text-gray-400">C++</span>
              <span className="text-[10px] bg-[#1a1a1a] px-2 py-1 rounded text-gray-400">Scikit-Learn</span>
            </div>
          </div>

        </div>
      </section>

      {/* TECH STACK SECTION */}
      <section id="stack" className="mb-16">
        <h3 className="text-lg font-bold text-white mb-6 flex items-center">
          <span className="text-emerald-400 mr-2">&gt;</span> Core Core_Competencies.sh
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {techStack.map((item, index) => (
            <div key={index} className="bg-[#111] border border-[#1a1a1a] p-5 rounded-lg">
              <div className="text-xs text-gray-500 font-mono mb-3 flex items-center justify-between">
                <span>[0{index + 1}] {item.category}</span>
                <span className="text-emerald-500/50">✔</span>
              </div>
              <ul className="space-y-2">
                {item.skills.map((skill, sIndex) => (
                  <li key={sIndex} className="text-sm text-gray-300 flex items-center font-mono">
                    <span className="text-emerald-500 mr-2 text-xs">■</span>
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