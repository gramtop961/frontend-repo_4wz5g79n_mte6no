import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, PencilRuler, Code2, CheckCircle2 } from 'lucide-react';

const steps = [
  { icon: Sparkles, title: 'Discovery', text: 'We dive into your goals, users, and market to set a winning strategy.' },
  { icon: PencilRuler, title: 'Design', text: 'Clean, modern design systems with micro-interactions and accessibility.' },
  { icon: Code2, title: 'Build', text: 'Robust engineering with best practices, performance, and scalability.' },
  { icon: CheckCircle2, title: 'Launch & Grow', text: 'Testing, deployment, analytics and continuous optimization.' },
];

const Process = () => {
  return (
    <section id="work" className="relative py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Our approach</h2>
          <p className="mt-3 text-slate-700">A refined, transparent process designed for speed and impact.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg">
                <s.icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;