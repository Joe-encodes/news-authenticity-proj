import { FileText, Upload, Bolt, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

interface AnalyzeProps {
  onAnalyze: (text: string) => void;
}

export default function Analyze({ onAnalyze }: AnalyzeProps) {
  const [text, setText] = useState('');
  const charCount = text.length;
  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const progress = Math.min((charCount / 100) * 100, 100);

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-5xl mx-auto w-full">
      <header className="mb-16 text-center md:text-left flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="max-w-2xl">
          <span className="uppercase tracking-widest text-xs font-bold text-primary mb-3 block">Neural Integrity Protocol</span>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-on-surface leading-tight font-headline">
            Verify the <span className="text-primary">Unseen</span> Layers.
          </h1>
          <p className="mt-6 text-on-surface-variant text-lg max-w-lg leading-relaxed">
            Paste content below for multi-dimensional cross-referencing and stylistic authenticity analysis. 
          </p>
        </div>
        <div className="flex flex-col items-end text-right hidden md:block">
          <div className="text-xs text-on-surface-variant/60 font-medium mb-1">System Status</div>
          <div className="flex items-center gap-2 text-tertiary font-bold text-sm">
            <span className="w-2 h-2 bg-tertiary rounded-full animate-pulse"></span>
            AI ENGINE ACTIVE
          </div>
        </div>
      </header>

      <section className="relative group">
        <div className="absolute -inset-4 bg-surface-container-low rounded-xl -z-10 transition-all group-focus-within:bg-surface-container"></div>
        <div className="relative bg-surface-container-lowest rounded-lg p-8 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <label className="text-sm font-bold text-on-surface-variant flex items-center gap-2">
              <FileText className="w-4 h-4" />
              CONTENT PAYLOAD
            </label>
            <div className="flex items-center gap-4">
              <span className="text-xs font-medium text-on-surface-variant/50">Min: 100 characters</span>
              <div className="h-1 w-24 bg-surface-variant rounded-full overflow-hidden">
                <div className="h-full bg-primary transition-all duration-300" style={{ width: `${progress}%` }}></div>
              </div>
            </div>
          </div>
          <textarea 
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full h-80 bg-transparent border-0 focus:ring-0 text-xl leading-relaxed text-on-surface placeholder:text-surface-variant resize-none" 
            placeholder="Paste news article here..."
          ></textarea>
          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6 border-t-2 border-surface-variant pt-8">
            <div className="flex items-center gap-6">
              <div className="text-center md:text-left">
                <span className="block text-2xl font-headline font-extrabold text-on-surface">{charCount.toLocaleString()}</span>
                <span className="text-[10px] font-bold uppercase tracking-tighter text-on-surface-variant/60">Characters</span>
              </div>
              <div className="w-[1px] h-8 bg-outline-variant/30"></div>
              <div className="text-center md:text-left">
                <span className="block text-2xl font-headline font-extrabold text-on-surface">{wordCount}</span>
                <span className="text-[10px] font-bold uppercase tracking-tighter text-on-surface-variant/60">Words</span>
              </div>
            </div>
            <div className="flex items-center gap-4 w-full md:w-auto">
              <button className="flex-1 md:flex-none px-6 py-4 rounded-lg bg-surface-container-high text-on-surface font-bold text-sm hover:bg-surface-variant transition-colors flex items-center justify-center gap-2">
                <Upload className="w-4 h-4" />
                Upload File
              </button>
              <button 
                onClick={() => onAnalyze(text)}
                disabled={charCount < 100}
                className="flex-1 md:flex-none px-10 py-4 rounded-lg primary-gradient text-on-primary font-bold text-sm shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span>Analyze News</span>
                <Bolt className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-8 bg-surface-container-low rounded-xl p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-4 font-headline">Deep Contextual Verification</h3>
          <p className="text-on-surface-variant leading-relaxed">
            Veritas Lens doesn't just check facts; it maps the <span className="italic text-on-surface">tonal lineage</span> of the text. By cross-referencing against 40M+ academic journals and live global news feeds, we provide a definitive integrity score.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="bg-surface-container-lowest p-4 rounded-lg">
              <Bolt className="w-5 h-5 text-primary mb-2" />
              <div className="text-xs font-bold text-on-surface uppercase">Bias Map</div>
            </div>
            <div className="bg-surface-container-lowest p-4 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-tertiary mb-2" />
              <div className="text-xs font-bold text-on-surface uppercase">Source DNA</div>
            </div>
            <div className="bg-surface-container-lowest p-4 rounded-lg">
              <FileText className="w-5 h-5 text-slate-500 mb-2" />
              <div className="text-xs font-bold text-on-surface uppercase">Syntax Log</div>
            </div>
          </div>
        </div>
        <div className="md:col-span-4 relative overflow-hidden rounded-xl bg-primary min-h-[300px]">
          <img 
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40" 
            src="https://picsum.photos/seed/network/600/800" 
            alt="Network"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 p-8 flex flex-col justify-end">
            <div className="text-on-primary font-headline text-3xl font-extrabold leading-tight">
              99.4%
            </div>
            <div className="text-on-primary/80 text-xs font-bold uppercase tracking-wider">
              Detection Accuracy
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
