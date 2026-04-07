import { Share2, Download, Verified, Brain, Network, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Results() {
  return (
    <div className="pt-24 pb-12 px-6 max-w-7xl mx-auto w-full flex-grow">
      <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <nav className="flex items-center space-x-2 text-on-surface-variant text-sm mb-2">
            <span className="font-medium">Analysis</span>
            <span className="text-xs">/</span>
            <span className="font-semibold text-primary">Report #8492-AX</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface font-headline">Integrity Assessment</h1>
          <p className="text-on-surface-variant mt-2 max-w-2xl">Detailed AI-powered decomposition of technical documentation regarding quantum computing hardware claims.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 rounded-lg bg-surface-container-high text-on-surface font-semibold text-sm hover:opacity-80 transition-all flex items-center gap-2">
            <Share2 className="w-4 h-4" />
            Share
          </button>
          <button className="px-5 py-2.5 rounded-lg primary-gradient text-white font-semibold text-sm shadow-lg shadow-primary/20 flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export PDF
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:col-span-4 bg-surface-container-lowest p-8 rounded-xl flex flex-col items-center justify-center relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary/5 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-500"></div>
          <h3 className="text-on-surface-variant font-semibold text-sm uppercase tracking-widest mb-8">Authenticity Score</h3>
          
          <div className="relative w-48 h-48 mb-8">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" fill="transparent" r="45" stroke="#f3f4f5" strokeWidth="8" />
              <motion.circle 
                initial={{ strokeDashoffset: 282.7 }}
                animate={{ strokeDashoffset: 50.8 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                cx="50" cy="50" fill="transparent" r="45" stroke="#24883f" strokeDasharray="282.7" strokeLinecap="round" strokeWidth="8" 
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl font-extrabold text-on-surface">82<span className="text-2xl opacity-50">%</span></span>
              <span className="text-tertiary font-bold text-xs uppercase tracking-tighter mt-1">High Integrity</span>
            </div>
          </div>
          
          <div className="bg-tertiary-container/10 px-4 py-2 rounded-full flex items-center gap-2">
            <Verified className="w-4 h-4 text-tertiary fill-tertiary/20" />
            <span className="text-tertiary font-semibold text-sm">Verified Credentials</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:col-span-8 bg-surface-container-lowest p-8 rounded-xl"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold font-headline">Executive Summary</h3>
            <span className="text-xs font-medium px-3 py-1 bg-surface-container-low rounded-full text-on-surface-variant">AI Analysis v4.2</span>
          </div>
          <div className="space-y-4 text-on-surface-variant leading-relaxed">
            <p>The analyzed document demonstrates a high degree of internal consistency and aligns with established peer-reviewed benchmarks in the field of superconducting circuits. Our linguistic models identified a factual tone with appropriate technical nuance, avoiding hyperbolic marketing language common in speculative claims.</p>
            <p>While the core claims are robust, Veritas Lens detected subtle ambiguities in the "Scalability" subsection, specifically regarding error-correction overhead projections which deviate by 4.2% from standard industry models.</p>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-surface-variant/30 pt-8">
            <div>
              <div className="text-2xl font-bold text-on-surface">1,240</div>
              <div className="text-xs text-on-surface-variant uppercase font-medium">Word Count</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-on-surface">14</div>
              <div className="text-xs text-on-surface-variant uppercase font-medium">Key Citations</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-on-surface">0.02</div>
              <div className="text-xs text-on-surface-variant uppercase font-medium">Bias Index</div>
            </div>
          </div>
        </motion.div>

        <div className="md:col-span-12 lg:col-span-7 bg-surface-container-low p-8 rounded-xl">
          <h3 className="text-xl font-bold mb-8 font-headline">Decomposition Logic</h3>
          <div className="space-y-6">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 shrink-0 bg-surface-container-highest rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-bold text-on-surface">Semantic Depth</h4>
                  <span className="text-tertiary text-xs font-bold">+12%</span>
                </div>
                <p className="text-sm text-on-surface-variant mb-3">Extensive use of domain-specific terminology without redundancy suggests expert authorship rather than generative filler.</p>
                <div className="w-full bg-surface-variant rounded-full h-1.5">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '88%' }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="bg-primary h-1.5 rounded-full"
                  ></motion.div>
                </div>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 shrink-0 bg-surface-container-highest rounded-lg flex items-center justify-center">
                <Network className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-bold text-on-surface">Structural Logic</h4>
                  <span className="text-tertiary text-xs font-bold">+8%</span>
                </div>
                <p className="text-sm text-on-surface-variant mb-3">Hierarchical progression of arguments follows established academic standards for technical whitepapers.</p>
                <div className="w-full bg-surface-variant rounded-full h-1.5">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '74%' }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="bg-primary h-1.5 rounded-full"
                  ></motion.div>
                </div>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 shrink-0 bg-surface-container-highest rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-error" />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-bold text-on-surface">Keyword Anomalies</h4>
                  <span className="text-error text-xs font-bold">-3%</span>
                </div>
                <p className="text-sm text-on-surface-variant mb-3">Detection of three 'buzzword' phrases commonly associated with promotional hype in the 'Future Outlook' section.</p>
                <div className="w-full bg-surface-variant rounded-full h-1.5">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '15%' }}
                    transition={{ duration: 1, delay: 0.9 }}
                    className="bg-error h-1.5 rounded-full"
                  ></motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-12 lg:col-span-5 flex flex-col gap-6">
          <div className="bg-surface-container-highest p-6 rounded-xl flex-grow">
            <h4 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-4">Cross-Reference Map</h4>
            <div className="relative h-48 rounded-lg overflow-hidden mb-4">
              <img 
                className="w-full h-full object-cover" 
                src="https://picsum.photos/seed/data/600/400" 
                alt="Data visualization"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/10 backdrop-blur-[2px]"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 p-3 rounded-lg shadow-xl text-center">
                  <div className="text-xs font-bold text-primary">12 External Matches</div>
                  <div className="text-[10px] text-on-surface-variant">Validated via IEEE Database</div>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-surface-container-lowest rounded-lg">
                <span className="text-xs font-medium truncate max-w-[200px]">Physical Review Letters (2023)</span>
                <CheckCircle2 className="w-4 h-4 text-tertiary" />
              </div>
              <div className="flex items-center justify-between p-3 bg-surface-container-lowest rounded-lg">
                <span className="text-xs font-medium truncate max-w-[200px]">MIT Quantum Lab Repositories</span>
                <CheckCircle2 className="w-4 h-4 text-tertiary" />
              </div>
            </div>
          </div>
          
          <div className="relative p-6 rounded-xl bg-surface-container-low overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full animate-shimmer"></div>
            <div className="flex items-center gap-4 relative">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-sm font-semibold text-primary">Continuous integrity monitoring active...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
