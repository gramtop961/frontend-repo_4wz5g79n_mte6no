import React from 'react';
import { Code2, Layout, Smartphone, Palette, Brain, Megaphone } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Website Designing',
    desc: 'Responsive, SEO-ready websites with delightful interactions and conversion-first UX.',
    icon: Layout,
    color: 'from-blue-500 to-blue-700',
  },
  {
    title: 'App Development',
    desc: 'iOS, Android, and web apps built for speed, scale, and reliability.',
    icon: Smartphone,
    color: 'from-orange-500 to-orange-600',
  },
  {
    title: 'Customised Software',
    desc: 'Tailor-made systems that automate workflows and unlock efficiency.',
    icon: Code2,
    color: 'from-blue-600 to-blue-800',
  },
  {
    title: 'Graphic Design',
    desc: 'Brand identities, social creatives, and marketing assets that stand out.',
    icon: Palette,
    color: 'from-orange-500 to-amber-600',
  },
  {
    title: 'SEO',
    desc: 'Technical SEO, content strategy, and analytics to outrank competition.',
    icon: Brain,
    color: 'from-blue-500 to-cyan-600',
  },
  {
    title: 'Meta & Google Ads',
    desc: 'Full-funnel ad strategy with continuous optimization for ROAS.',
    icon: Megaphone,
    color: 'from-indigo-500 to-blue-600',
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-24 bg-white">
      <div className="absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-blue-50 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Services we offer</h2>
          <p className="mt-3 text-slate-700">From concept to scale — one team for design, development, and growth.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br opacity-20 blur-2xl group-hover:opacity-30 transition " style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-from), var(--tw-gradient-to))` }} />
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${s.color} text-white shadow-lg`}> 
                <s.icon size={22} />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600">{s.desc}</p>
              <div className="mt-4">
                <a href="#contact" className="text-blue-700 font-medium hover:underline">Get this</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;