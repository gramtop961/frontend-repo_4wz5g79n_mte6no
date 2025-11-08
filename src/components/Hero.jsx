import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[88vh] w-full pt-24 overflow-hidden bg-gradient-to-b from-white via-white to-blue-50">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-blue-50/90" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-[70vh]">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900"
          >
            Elevate your brand with modern, realistic, and high-performing digital experiences.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-5 text-lg text-slate-700"
          >
            VISUAL RISE TECHNOLOGIES crafts stunning websites, apps, and campaigns that convert. Blue, white and a spark of orange—precise, trustworthy, and bold.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#services" className="inline-flex items-center rounded-full bg-blue-600 px-6 py-3 text-white shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition">
              Explore Services
            </a>
            <a href="#contact" className="inline-flex items-center rounded-full bg-white px-6 py-3 text-slate-900 ring-1 ring-slate-200 hover:ring-slate-300 transition">
              Start a Project
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;