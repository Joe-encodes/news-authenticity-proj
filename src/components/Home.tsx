import { CheckCircle2, Microscope, BookOpen, BarChart3, Search } from 'lucide-react';
import { motion } from 'motion/react';

interface HomeProps {
  onStart: () => void;
}

export default function Home({ onStart }: HomeProps) {
  return (
    <div className="pt-24">
      <section className="relative overflow-hidden px-8 py-24 md:py-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 z-10"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-tertiary-container/10 text-tertiary font-medium text-xs mb-6">
              <CheckCircle2 className="w-3 h-3 mr-2" />
              Advanced AI Verification Engine
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold font-headline text-on-surface tracking-tight leading-[1.1] mb-6">
              AI News <br/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-container">Authenticity</span> Checker
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed">
              Verifying truth in the digital age with advanced AI analysis. Ensure the news you read is grounded in fact.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={onStart}
                className="px-8 py-4 primary-gradient text-on-primary rounded-lg font-semibold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all active:scale-95"
              >
                Start Analysis
              </button>
              <button className="px-8 py-4 bg-surface-container-high text-on-surface rounded-lg font-semibold hover:bg-surface-variant transition-all active:scale-95">
                View Documentation
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Microscope className="w-5 h-5 text-primary" />
                    </div>
                    <div className="w-12 h-12">
                      <svg className="w-full h-full" viewBox="0 0 36 36">
                        <path className="stroke-surface-container-high" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeWidth="2" />
                        <path className="stroke-tertiary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeDasharray="85, 100" strokeLinecap="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-sm font-bold text-on-surface">Source Validity</div>
                  <div className="text-xs text-on-surface-variant">85% High Confidence</div>
                </div>
                <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm border border-outline-variant/15">
                  <img 
                    className="w-full h-24 object-cover rounded-lg mb-3" 
                    src="https://picsum.photos/seed/press/400/300" 
                    alt="Press"
                    referrerPolicy="no-referrer"
                  />
                  <div className="h-2 w-3/4 bg-surface-container-high rounded-full mb-2"></div>
                  <div className="h-2 w-1/2 bg-surface-container-high rounded-full"></div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden border border-outline-variant/15">
                  <div className="p-4 bg-primary text-on-primary text-[10px] font-bold tracking-widest uppercase">Live Analysis</div>
                  <div className="p-4 space-y-3">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-tertiary rounded-full animate-pulse"></span>
                      <div className="h-1.5 w-full bg-surface-container-high rounded-full"></div>
                    </div>
                    <div className="h-1.5 w-5/6 bg-surface-container-high rounded-full"></div>
                    <div className="h-1.5 w-4/6 bg-surface-container-high rounded-full"></div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col items-center justify-center text-center">
                  <BookOpen className="w-10 h-10 text-primary-container mb-2" />
                  <div className="text-sm font-bold">Academic Peer-Review</div>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-primary/5 rounded-full blur-[100px]"></div>
          </motion.div>
        </div>
      </section>

      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold font-headline mb-4">Methodology</h2>
            <div className="w-24 h-1 bg-primary-container rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group">
              <div className="mb-6 inline-block">
                <Microscope className="w-8 h-8 text-primary transition-transform group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-bold font-headline mb-4">Syntactic Analysis</h3>
              <p className="text-on-surface-variant leading-relaxed">Our AI deciphers linguistic patterns commonly found in synthetic and manipulated content with academic precision.</p>
            </div>
            <div className="group">
              <div className="mb-6 inline-block">
                <BookOpen className="w-8 h-8 text-primary transition-transform group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-bold font-headline mb-4">Cross-Referencing</h3>
              <p className="text-on-surface-variant leading-relaxed">Instantly compare claims against a vast database of verified news archives and reputable academic journals.</p>
            </div>
            <div className="group">
              <div className="mb-6 inline-block">
                <BarChart3 className="w-8 h-8 text-primary transition-transform group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-bold font-headline mb-4">Integrity Scoring</h3>
              <p className="text-on-surface-variant leading-relaxed">Receive a detailed breakdown and a confidence score for every piece of content you submit for analysis.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-24 max-w-7xl mx-auto">
        <div className="bg-on-surface rounded-xl p-12 md:p-20 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-extrabold font-headline text-white mb-6">Ready to verify your first report?</h2>
            <p className="text-white/80 text-lg mb-10">Join thousands of researchers and journalists using Veritas Lens to safeguard digital integrity.</p>
            <button 
              onClick={onStart}
              className="px-8 py-4 bg-primary text-on-primary rounded-lg font-bold hover:bg-primary-container transition-all"
            >
              Get Started for Free
            </button>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full hidden lg:block opacity-10">
            <Search className="w-full h-full text-white" strokeWidth={1} />
          </div>
        </div>
      </section>
    </div>
  );
}
