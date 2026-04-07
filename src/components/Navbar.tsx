import { User, Search } from 'lucide-react';

interface NavbarProps {
  currentScreen: string;
  onNavigate: (screen: string) => void;
}

export default function Navbar({ currentScreen, onNavigate }: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-sm">
      <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-8">
          <span 
            className="text-xl font-extrabold tracking-tight text-slate-900 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            Veritas Lens
          </span>
          <div className="hidden md:flex gap-6">
            <button 
              onClick={() => onNavigate('home')}
              className={`text-sm font-medium transition-colors ${currentScreen === 'home' ? 'text-primary border-b-2 border-primary pb-1' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Home
            </button>
            <button 
              onClick={() => onNavigate('analyze')}
              className={`text-sm font-medium transition-colors ${currentScreen === 'analyze' || currentScreen === 'verifying' || currentScreen === 'results' ? 'text-primary border-b-2 border-primary pb-1' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Analyze
            </button>
            <button 
              onClick={() => onNavigate('history')}
              className={`text-sm font-medium transition-colors ${currentScreen === 'history' ? 'text-primary border-b-2 border-primary pb-1' : 'text-slate-600 hover:text-slate-900'}`}
            >
              History
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden lg:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input 
              className="bg-surface-container-low border-none focus:ring-2 focus:ring-primary/20 rounded-lg text-sm px-4 py-2 pl-10 w-64 transition-all" 
              placeholder="Search archives..." 
              type="text"
            />
          </div>
          <button className="p-2 hover:bg-slate-100/50 rounded-lg transition-all">
            <User className="w-5 h-5 text-slate-600" />
          </button>
        </div>
      </div>
      <div className="bg-slate-200/50 h-[1px] w-full block"></div>
    </nav>
  );
}
