import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="font-inter text-slate-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Contact />
      </main>
      <footer className="border-t border-slate-200 py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} VISUAL RISE TECHNOLOGIES. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#services" className="text-slate-600 hover:text-blue-700">Services</a>
            <a href="#work" className="text-slate-600 hover:text-blue-700">Approach</a>
            <a href="#contact" className="text-slate-600 hover:text-blue-700">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;