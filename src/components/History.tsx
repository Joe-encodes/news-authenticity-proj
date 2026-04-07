import { Filter, Download, ArrowRight, Clock } from 'lucide-react';
import { motion } from 'motion/react';

const historyItems = [
  {
    id: 1,
    title: "The Impact of Synthetic Media on Global Financial Markets",
    date: "May 12, 2024 · 14:30",
    status: "Verified",
    score: 90,
    description: "Our analysis of the recent whitepaper suggests a 94% correlation with established economic theories. While the phrasing is sophisticated, the core datasets are historically consistent...",
    image: "https://picsum.photos/seed/finance/800/600",
    type: "featured"
  },
  {
    id: 2,
    title: "Alleged Leaked Memo Regarding Quantum Computing Leap",
    date: "May 11, 2024",
    status: "Disputed",
    score: 24,
    description: "The text contains several linguistic markers consistent with AI-generated propaganda models. Specific terminology regarding cooling systems lacks technical feasibility...",
    type: "secondary"
  },
  {
    id: 3,
    title: "New Urban Planning Directive for Metropolises",
    date: "May 10, 2024 · 09:12",
    score: 72,
    description: "Summary analysis indicates a factual foundation with slight rhetorical inflation for public appeal.",
    type: "small"
  },
  {
    id: 4,
    title: "Climate Accord Addendum: Fact or Fiction?",
    date: "May 09, 2024 · 18:45",
    score: 88,
    description: "Verification confirms the source as a legitimate governmental subcommittee, though some citations are outdated.",
    type: "small"
  },
  {
    id: 5,
    title: "Neural Link Breakthrough Report",
    date: "May 09, 2024 · 11:20",
    score: 15,
    description: "Heavy use of technical jargon hides several logical inconsistencies. Likely speculative fiction.",
    type: "small"
  }
];

export default function History() {
  return (
    <div className="pt-32 pb-20 px-8 max-w-7xl mx-auto w-full">
      <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold font-headline tracking-tight text-on-surface mb-4 leading-tight">
            Archive of <span className="text-primary italic">Inquiry</span>
          </h1>
          <p className="text-on-surface-variant text-lg">A chronological record of AI-assisted authenticity audits. Review past data to trace the evolution of media narratives.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-surface-container-high px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:opacity-80 transition-all">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="bg-surface-container-high px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:opacity-80 transition-all">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Featured Card */}
        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-8 bg-surface-container-lowest rounded-xl overflow-hidden hover:opacity-95 transition-all cursor-pointer group relative"
        >
          <div className="flex flex-col md:flex-row h-full">
            <div className="md:w-1/3 relative h-64 md:h-auto overflow-hidden">
              <img 
                src={historyItems[0].image} 
                alt={historyItems[0].title}
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
            </div>
            <div className="md:w-2/3 p-8 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-tertiary-container text-on-tertiary text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full">Verified</span>
                  <span className="text-xs text-on-surface-variant font-medium">{historyItems[0].date}</span>
                </div>
                <h3 className="text-2xl font-bold font-headline mb-4 group-hover:text-primary transition-colors">{historyItems[0].title}</h3>
                <p className="text-on-surface-variant line-clamp-3 mb-6">{historyItems[0].description}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12">
                  <svg className="w-full h-full -rotate-90">
                    <circle className="text-surface-variant" cx="24" cy="24" fill="transparent" r="20" stroke="currentColor" strokeWidth="2" />
                    <circle className="text-tertiary" cx="24" cy="24" fill="transparent" r="20" stroke="currentColor" strokeDasharray="125.6" strokeDashoffset={125.6 * (1 - 0.9)} strokeWidth="2" />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold">90%</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-on-surface uppercase tracking-tighter">Authenticity Score</div>
                  <div className="text-xs text-on-surface-variant">High Rigor Detected</div>
                </div>
              </div>
            </div>
          </div>
        </motion.article>

        {/* Secondary Card */}
        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="md:col-span-4 bg-surface-container-low rounded-xl p-8 flex flex-col justify-between hover:opacity-95 transition-all cursor-pointer group"
        >
          <div>
            <div className="flex justify-between items-start mb-6">
              <span className="bg-error-container text-on-error-container text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full">Disputed</span>
              <span className="text-xs text-on-surface-variant font-medium">May 11, 2024</span>
            </div>
            <h3 className="text-xl font-bold font-headline mb-4">{historyItems[1].title}</h3>
            <p className="text-on-surface-variant text-sm line-clamp-4">{historyItems[1].description}</p>
          </div>
          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-error flex items-center justify-center">
                <span className="text-xs font-bold text-error">24%</span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-tighter">Critical Risk</span>
            </div>
            <ArrowRight className="w-5 h-5 text-on-surface-variant group-hover:translate-x-1 transition-transform" />
          </div>
        </motion.article>

        {/* Small Cards */}
        {historyItems.slice(2).map((item, index) => (
          <motion.article 
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="md:col-span-4 bg-surface-container-lowest rounded-xl p-6 flex flex-col hover:opacity-95 transition-all cursor-pointer border-b-4 border-surface-variant/30 group"
          >
            <div className="flex items-center gap-2 mb-4 text-on-surface-variant">
              <Clock className="w-3 h-3" />
              <span className="text-xs font-medium">{item.date}</span>
            </div>
            <h3 className="font-bold font-headline mb-3 line-clamp-2">{item.title}</h3>
            <p className="text-on-surface-variant text-sm line-clamp-3 mb-6">{item.description}</p>
            <div className="mt-auto flex items-center gap-2">
              <div className="h-1 flex-grow bg-surface-variant rounded-full overflow-hidden">
                <div 
                  className={`h-full ${item.score > 50 ? 'bg-primary' : 'bg-error'}`} 
                  style={{ width: `${item.score}%` }}
                ></div>
              </div>
              <span className={`text-[10px] font-bold ${item.score > 50 ? 'text-primary' : 'text-error'}`}>{item.score}%</span>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <button className="px-8 py-3 bg-surface-container-high rounded-lg font-bold text-on-surface hover:bg-primary hover:text-on-primary transition-all flex items-center gap-2 group">
          Load Full Archives
          <motion.span 
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowRight className="w-4 h-4 rotate-90" />
          </motion.span>
        </button>
      </div>
    </div>
  );
}
