import React from 'react';
import { motion } from 'motion/react';
import { Gamepad2, BookOpen, MessageCircle, BarChart3 } from 'lucide-react';
import { useLang } from '../context/LangContext';
import content from '../locales';
import { SectionHeading } from './shared/Index';

export default function WhySection() {
  const { lang } = useLang();
  const t = content[lang];

  const bgPhotos = [
    'photo-1611996575749-79a3a250f948',
    'photo-1497633762265-9d179a990aa6',
    'photo-1522202176988-66273c2fd55f',
    'photo-1516321318423-f06f85e504b3',
  ];
  const icons = [Gamepad2, BookOpen, MessageCircle, BarChart3];
  const colors = ['bg-teal text-white', 'bg-orange text-white', 'bg-mustard text-white', 'bg-purple text-white'];

  return (
    <section id="why" className="py-16 md:py-32 px-4 md:px-6 relative overflow-hidden bg-dark-teal pt-0 md:pt-0">
      <SectionHeading label={t.why.label} title={t.why.title} />
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
        {t.why.items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group relative h-[220px] md:h-[450px] rounded-[24px] md:rounded-[40px] overflow-hidden border border-white/10 shadow-2xl cursor-pointer"
          >
            <img
              src={`https://images.unsplash.com/${bgPhotos[idx]}?w=800&q=80`}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full p-4 md:p-8 flex flex-col justify-end z-10">
              <div
                className={`w-8 h-8 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center mb-2 md:mb-6 shadow-2xl backdrop-blur-md border border-white/20 transition-transform group-hover:scale-110 group-hover:rotate-6 duration-500 ${colors[idx]}`}
              >
                {React.createElement(icons[idx], { className: "w-4 h-4 md:w-6 md:h-6" })}
              </div>
              <h3 className="text-xs md:text-2xl font-serif font-black text-white/90 group-hover:text-white transition-colors duration-300 mb-1 md:mb-2 leading-tight drop-shadow-md">
                {item.title}
              </h3>
              <p className="text-white/95 text-[8px] md:text-xs leading-relaxed mb-2 md:mb-4 transform md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 line-clamp-2 md:line-clamp-3 drop-shadow-sm">
                {item.desc}
              </p>
              <span className="inline-block w-fit text-[6px] md:text-[8px] uppercase font-black tracking-widest px-2 md:px-3 py-0.5 md:py-1.5 rounded-full border border-white/20 bg-white/10 text-white">
                {item.tag}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}