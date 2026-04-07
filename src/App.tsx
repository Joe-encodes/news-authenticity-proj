/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Analyze from './components/Analyze';
import Verifying from './components/Verifying';
import Results from './components/Results';
import History from './components/History';

type Screen = 'home' | 'analyze' | 'verifying' | 'results' | 'history';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');

  const handleStartAnalysis = () => {
    setCurrentScreen('analyze');
  };

  const handleAnalyze = (text: string) => {
    console.log('Analyzing:', text);
    setCurrentScreen('verifying');
  };

  useEffect(() => {
    if (currentScreen === 'verifying') {
      const timer = setTimeout(() => {
        setCurrentScreen('results');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  return (
    <div className="min-h-screen flex flex-col bg-surface selection:bg-primary/20 selection:text-primary">
      <Navbar currentScreen={currentScreen} onNavigate={(screen) => setCurrentScreen(screen as Screen)} />
      
      <main className="flex-grow">
        {currentScreen === 'home' && <Home onStart={handleStartAnalysis} />}
        {currentScreen === 'analyze' && <Analyze onAnalyze={handleAnalyze} />}
        {currentScreen === 'verifying' && <Verifying />}
        {currentScreen === 'results' && <Results />}
        {currentScreen === 'history' && <History />}
      </main>

      <Footer />
    </div>
  );
}

