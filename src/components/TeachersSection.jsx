import React from 'react';
import { motion } from 'motion/react';
import { Flower, Ghost } from 'lucide-react';
import { useLang } from '../context/LangContext';
import content from '../locales';
import { SectionHeading, CartoonElement } from './shared/Index';

const teacherPhotos = [
  'photo-1573496359142-b8d87734a5a2',
  'photo-1507003211169-0a1dd7228f2d',
  'photo-1551836022-d5d88e9218df',
  'photo-1500648767791-00dcc994a43e',
  'photo-1544005313-94ddf0286df2',
  'photo-1472099645785-5658abf4ff4e',
];

const blobColors = ['bg-teal/20', 'bg-orange/20', 'bg-mustard/20'];

export default function TeachersSection() {
  const { lang } = useLang();
  const t = content[lang];
  const doubled = [...t.teachers.items, ...t.teachers.items];

  return (
    <section id="teachers" className="py-16 md:py-32 bg-transparent overflow-hidden relative">
      <CartoonElement Icon={Flower} className="top-10 left-20" color="text-pink-400" />
      <CartoonElement Icon={Ghost} className="bottom-10 right-20" color="text-teal-300" delay={2} />

      <SectionHeading label={t.teachers.label} title={t.teachers.title} />

      <div className="relative mt-6 md:mt-10">
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-dark-teal to-transparent z-10" />
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-dark-teal to-transparent z-10" />

        <motion.div
          className="flex gap-4 md:gap-8 whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          style={{ width: 'fit-content' }}
        >
          {doubled.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02, y: -5 }}
              className="w-[180px] md:w-[350px] shrink-0 bg-white/5 border border-white/10 p-4 md:p-8 rounded-[24px] md:rounded-[40px] backdrop-blur-md group hover:bg-white/10 transition-all duration-500 cursor-pointer"
            >
              <div className="relative mb-3 md:mb-8 mx-auto w-20 h-20 md:w-40 md:h-40">
                <div
                  className={`absolute inset-0 blob rotate-12 transition-transform group-hover:rotate-45 duration-700 ${
                    blobColors[idx % 3]
                  }`}
                />
                <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl z-10">
                  <img
                    src={`https://images.unsplash.com/${teacherPhotos[idx % 6]}?w=400&h=400&q=80`}
                    className="w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-110"
                    alt={item.name}
                  />
                </div>
              </div>
              <div className="text-center whitespace-normal">
                <h3 className="text-xl md:text-2xl mb-1 text-white font-serif font-black">{item.name}</h3>
                <p className="text-mustard font-black text-[9px] md:text-[10px] uppercase tracking-widest mb-2 md:mb-3">
                  {item.title}
                </p>
                <p className="italic text-white/40 text-[10px] md:text-xs mb-4 md:mb-5 line-clamp-1">
                  "{item.fact}"
                </p>
                <div className="flex flex-wrap justify-center gap-1 md:gap-1.5">
                  {item.specialty.map((s, i) => (
                    <span
                      key={i}
                      className="text-[8px] md:text-[9px] font-black bg-white/5 text-white/30 px-2 md:px-2.5 py-1 rounded-full border border-white/5"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}