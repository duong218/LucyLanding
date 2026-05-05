import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Ghost, Flower, ChevronDown, ChevronUp } from 'lucide-react';
import { useLang } from '../context/LangContext';
import content from '../locales';
import { SectionHeading, CartoonElement, FloatingDecor, DoodleShape, CourseCard } from './shared/Index';

export default function CoursesSection({ setSelectedCourse }) {
  const { lang } = useLang();
  const t = content[lang];
  const [showAll, setShowAll] = useState(false);

  const courseImages = [
    'photo-1509062522246-3755977927d7', 'photo-1503676260728-1c00da094a0b',
    'photo-1523240795612-9a054b0db644', 'photo-1522202176988-66273c2fd55f',
    'photo-1434030216411-0b793f4b4173', 'photo-1456513080510-7bf3a84b82f8',
    'photo-1513258496099-48168024aec0', 'photo-1511629091441-ee46146481b6',
    'photo-1524178232363-1fb2b075b655', 'photo-1577896851231-70ef18881754',
    'photo-1501504905252-473c47e087f8', 'photo-1491841550275-ad7854e35ca6',
    'photo-1588072432836-e10032774350', 'photo-1517486808906-6ca8b3f04846',
    'photo-1497633762265-9d179a990aa6', 'photo-1473649085228-583485e6e4d7',
    'photo-1541339907198-e08756dedf3f', 'photo-1510531704581-5b2870972060',
    'photo-1529390079861-591de354faf5', 'photo-1532012197267-da84d127e765'
  ];

  const allCoursesWithImages = t.courses.items.map((item, index) => ({
    ...item,
    img: courseImages[index] || item.img
  }));

  const displayedCourses = showAll ? allCoursesWithImages : allCoursesWithImages.slice(0, 4);

  return (
    <section
      id="courses"
      className="py-16 md:py-32 px-4 md:px-6 relative overflow-hidden backdrop-blur-sm"
    >
      <CartoonElement Icon={Ghost} className="top-10 left-10" color="text-teal-400" />
      <CartoonElement Icon={Flower} className="bottom-[15%] right-[5%]" color="text-mustard" delay={1} />
      <FloatingDecor className="top-20 right-40" size={60} delay={0.5} />
      <FloatingDecor className="bottom-20 left-20" size={40} delay={2} />
      <DoodleShape className="w-80 h-80 top-1/2 left-0 -translate-x-1/2" />

      <SectionHeading label={t.courses.label} title={t.courses.title} />

      <div className="max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 px-2 md:px-0">
        <AnimatePresence mode="popLayout">
          {displayedCourses.map((item, idx) => (
            <motion.div
              key={item.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <CourseCard
                item={item}
                featured={idx === 1}
                onClick={() => setSelectedCourse(item)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {t.courses.items.length > 4 && (
        <motion.div 
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center mt-8 md:mt-12"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="group flex items-center gap-2 bg-white/10 hover:bg-mustard text-white px-6 md:px-8 py-3 rounded-full font-black text-sm md:text-base transition-all duration-300 border border-white/20 hover:border-mustard shadow-lg hover:shadow-[0_0_20px_rgba(217,164,65,0.4)]"
          >
            {showAll ? t.courses.showLess : t.courses.showAll}
            {showAll ? (
              <ChevronUp size={20} className="group-hover:-translate-y-1 transition-transform" />
            ) : (
              <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
            )}
          </button>
        </motion.div>
      )}
    </section>
  );
}