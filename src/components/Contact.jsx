import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! We\'ll get back to you within 24 hours.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Let\'s build something exceptional</h2>
            <p className="mt-3 text-slate-700">Tell us about your project and we\'ll craft a plan tailored to your goals and budget.</p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-orange-500" />
                <p className="text-slate-700">Modern aesthetics with realistic micro-interactions</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-blue-600" />
                <p className="text-slate-700">Conversion-first UX with performance baked in</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-amber-500" />
                <p className="text-slate-700">Transparent timelines and collaborative delivery</p>
              </div>
            </div>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-xl"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm text-slate-600">Name</label>
                <input required type="text" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-blue-600 focus:outline-none" />
              </div>
              <div>
                <label className="text-sm text-slate-600">Email</label>
                <input required type="email" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-blue-600 focus:outline-none" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-slate-600">What do you need?</label>
                <select className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-blue-600 focus:outline-none">
                  <option>Website Designing</option>
                  <option>App Development</option>
                  <option>Customised Software</option>
                  <option>Graphic Design</option>
                  <option>SEO</option>
                  <option>Meta / Google Ads</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-slate-600">Message</label>
                <textarea rows={4} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-blue-600 focus:outline-none" />
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm text-slate-600">We reply within one business day.</p>
              <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 px-6 py-3 text-white shadow-lg hover:opacity-95 transition">
                <Send size={18} />
                <span>Send</span>
              </button>
            </div>
            {status && (
              <p className="mt-4 text-green-700 font-medium">{status}</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;