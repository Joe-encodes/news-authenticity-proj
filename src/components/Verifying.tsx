import { FileText } from 'lucide-react';
import { motion } from 'motion/react';

export default function Verifying() {
  return (
    <div className="flex-grow flex flex-col items-center justify-center px-6 pt-24 pb-12 relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-tertiary/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="z-10 w-full max-w-xl text-center space-y-12">
        <div className="relative flex justify-center items-center">
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute w-48 h-48 border border-outline-variant/20 rounded-full"
          ></motion.div>
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute w-32 h-32 border border-primary/10 rounded-full"
          ></motion.div>
          
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_rgba(0,91,191,0.06)] relative">
            <div className="w-12 h-12 border-4 border-primary border-b-transparent rounded-full animate-spin mb-6 mx-auto"></div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl font-headline font-bold text-slate-900 tracking-tight">Verifying integrity</span>
              <div className="flex items-center gap-2 text-primary">
                <span className="text-sm font-medium tracking-wide uppercase">Processing Neural Layers</span>
                <span className="flex gap-1">
                  <motion.span 
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                    className="w-1 h-1 bg-primary rounded-full"
                  ></motion.span>
                  <motion.span 
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                    className="w-1 h-1 bg-primary rounded-full"
                  ></motion.span>
                  <motion.span 
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                    className="w-1 h-1 bg-primary rounded-full"
                  ></motion.span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8 text-left bg-surface-container-low/50 backdrop-blur-sm p-8 rounded-xl border border-outline-variant/10">
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 bg-surface-container-high rounded-lg flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <div className="space-y-4 flex-grow">
              <div className="h-2 w-1/4 bg-slate-200 rounded animate-shimmer"></div>
              <div className="space-y-2">
                <div className="h-4 w-full bg-slate-200 rounded animate-shimmer"></div>
                <div className="h-4 w-5/6 bg-slate-200 rounded animate-shimmer"></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-3">
              <div className="h-1.5 w-16 bg-slate-300/40 rounded"></div>
              <div className="h-8 w-full bg-surface-container-high rounded-lg animate-shimmer"></div>
            </div>
            <div className="space-y-3">
              <div className="h-1.5 w-16 bg-slate-300/40 rounded"></div>
              <div className="h-8 w-full bg-surface-container-high rounded-lg animate-shimmer"></div>
            </div>
          </div>
          <div className="pt-4 border-t border-outline-variant/20">
            <p className="text-sm text-on-surface-variant italic text-center">
              Analyzing content using AI... Searching 4.2M cross-referenced sources.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <div className="px-4 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant text-xs font-medium flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span>
            Synthesizing context
          </div>
          <div className="px-4 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant text-xs font-medium flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span>
            Evaluating linguistic markers
          </div>
          <div className="px-4 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant text-xs font-medium flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
            Deep-scanning metadata
          </div>
        </div>
      </div>
    </div>
  );
}
