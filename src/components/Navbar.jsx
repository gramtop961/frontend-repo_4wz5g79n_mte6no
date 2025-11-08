import React from 'react';
import { Rocket, Phone, Mail } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white shadow-lg shadow-blue-600/30">
              <Rocket size={18} />
            </div>
            <span className="font-semibold tracking-tight text-slate-900">VISUAL RISE TECHNOLOGIES</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-slate-700 hover:text-blue-700 transition-colors">Services</a>
            <a href="#work" className="text-slate-700 hover:text-blue-700 transition-colors">Approach</a>
            <a href="#contact" className="text-slate-700 hover:text-blue-700 transition-colors">Contact</a>
          </nav>

          <div className="hidden sm:flex items-center gap-3">
            <a href="mailto:hello@visualrisetech.com" className="hidden lg:flex items-center gap-2 text-slate-700 hover:text-blue-700">
              <Mail size={18} />
              <span className="text-sm">hello@visualrisetech.com</span>
            </a>
            <a href="tel:+1000000000" className="flex items-center gap-2 text-slate-700 hover:text-blue-700">
              <Phone size={18} />
              <span className="text-sm">Call</span>
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-white shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition">
              <span>Get a quote</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;