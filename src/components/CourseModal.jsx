import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Clock } from 'lucide-react';
import { useLang } from '../context/LangContext';
import { getImageUrl, scrollToId } from '../utils/helpers';

import content from '../locales';

const CourseModal = ({ selectedCourse, setSelectedCourse }) => {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <AnimatePresence>
      {selectedCourse && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-6 bg-dark-teal/95 backdrop-blur-xl"
          onClick={() => setSelectedCourse(null)}
        >
          <motion.div 
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            className="bg-dark-teal border border-white/10 rounded-[32px] md:rounded-[48px] overflow-hidden max-w-4xl w-full shadow-[0_0_100px_rgba(0,0,0,0.5)] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedCourse(null)}
              className="absolute top-6 right-6 md:top-8 md:right-8 bg-white/10 hover:bg-white/20 p-2 md:p-3 rounded-full text-white z-50 transition-colors"
            >
              <X size={24} />
            </button>
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-full min-h-[300px]">
                <img 
                  src={getImageUrl(selectedCourse.img, 'w=1000&q=80')} 
                  className="w-full h-full object-cover" 
                  alt={selectedCourse.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-teal via-transparent to-transparent md:bg-gradient-to-r" />
                <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
                  <span className="inline-block px-3 py-1 bg-mustard text-white text-[10px] font-black tracking-widest rounded-full mb-3">
                    {selectedCourse.tag}
                  </span>
                  <h2 className="text-2xl md:text-4xl font-serif font-black text-white leading-tight">
                    {selectedCourse.title}
                  </h2>
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <p className="text-white/70 text-sm md:text-lg mb-8 leading-relaxed italic">
                  "{selectedCourse.desc}"
                </p>
                <div className="space-y-4 mb-10">
                  {selectedCourse.details.map((detail, idx) => (
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                      key={idx} 
                      className="flex items-center gap-3 text-white/90"
                    >
                      <div className="w-6 h-6 rounded-full bg-teal/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 size={14} className="text-teal" />
                      </div>
                      <span className="text-xs md:text-base font-medium">{detail}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => { setSelectedCourse(null); scrollToId('contact'); }}
                    className="w-full sm:w-auto bg-mustard text-white px-8 md:px-10 py-4 rounded-2xl font-black uppercase tracking-widest shadow-2xl"
                  >
                    {t.nav.cta}
                  </motion.button>
                  <div className="flex items-center gap-2 text-white/40 text-[10px] font-black uppercase tracking-widest">
                    <Clock size={14} />
                    {selectedCourse.duration}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CourseModal;
