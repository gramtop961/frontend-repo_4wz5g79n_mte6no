import React from 'react';
import { motion } from 'framer-motion';

const items = [
  {
    title: 'Website Design',
    img: 'https://images.unsplash.com/photo-1529336953121-c9a0520c24d1?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'App Development',
    img: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Custom Software',
    img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Graphic Design',
    img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'SEO Growth',
    img: 'https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Meta & Google Ads',
    img: 'https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1600&auto=format&fit=crop',
  },
];

const Showcase = () => {
  return (
    <section id="showcase" className="relative py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Related work & visuals</h2>
          <p className="mt-3 text-slate-700">Aesthetic, realistic previews connected to our core services.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/40 via-slate-900/10 to-transparent" />
                <div className="absolute bottom-3 left-3 inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-sm font-medium text-slate-900 ring-1 ring-slate-200">
                  {card.title}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;