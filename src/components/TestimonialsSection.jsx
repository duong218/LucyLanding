import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Star, Heart, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLang } from '../context/LangContext';
import content from '../locales';
import { SectionHeading, FloatingDecor } from './shared/Index';
import { getImageUrl } from '../utils/helpers';

export default function TestimonialsSection() {
  const { lang } = useLang();
  const t = content[lang];
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="py-16 md:py-32 px-4 md:px-6 relative overflow-hidden">
      <FloatingDecor className="top-20 md:top-40 left-20" size={30} />
      <FloatingDecor className="bottom-10 right-40" size={50} delay={1.2} />
      <div className="absolute top-1/2 left-0 w-full h-1/2 bg-mustard/5 -z-10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading title={t.testimonials.title} />
        <div className="relative group">
          {/* Nút Prev (Desktop) */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-2 md:-left-6 top-[40%] -translate-y-1/2 z-20 w-10 h-10 md:w-14 md:h-14 bg-dark-teal/80 hover:bg-mustard hover:text-dark-teal rounded-full flex items-center justify-center text-white backdrop-blur-md border border-white/20 transition-all opacity-0 group-hover:opacity-100 hidden md:flex shadow-2xl"
          >
            <ChevronLeft size={28} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-8 overflow-x-auto pb-12 snap-x snap-mandatory px-2 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {t.testimonials.items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1, type: 'spring', stiffness: 100 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-[270px] md:w-[450px] snap-center relative group bg-white/5 border border-white/10 p-5 md:p-8 rounded-[24px] md:rounded-[40px] backdrop-blur-xl shadow-2xl transition-all hover:bg-white/10"
              >
                <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-9 h-9 md:w-12 md:h-12 bg-mustard rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-xl rotate-12 group-hover:rotate-0 transition-transform">
                  <MessageCircle size={18} className="md:w-6 md:h-6" />
                </div>
                <div className="text-mustard/20 font-serif text-[60px] md:text-[120px] absolute -top-4 -left-2 -z-0 leading-none pointer-events-none opacity-50">
                  "
                </div>
                <div className="relative z-10">
                  <div className="flex gap-1 mb-4 md:mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={10} className="md:w-3.5 md:h-3.5 fill-mustard text-mustard" />
                    ))}
                  </div>
                  <p className="text-white font-serif italic mb-4 md:mb-8 leading-relaxed tracking-wide text-xs md:text-lg">
                    "{item.quote}"
                  </p>
                  <div className="flex items-center gap-3 md:gap-4 pt-4 md:pt-6 border-t border-white/10">
                    <div className="w-8 h-8 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-mustard/30 p-0.5 md:p-1">
                      <img
                        src={getImageUrl(item.img, 'w=100&h=100&q=80')}
                        className="w-full h-full object-cover rounded-full"
                        alt={item.parent}
                      />
                    </div>
                    <div>
                      <h4 className="text-[10px] md:text-lg text-white font-black">{item.parent}</h4>
                      <div className="flex items-center gap-2 text-mustard text-[8px] md:text-[10px] font-black uppercase tracking-widest">
                        <Heart size={8} fill="currentColor" />
                        {item.child}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Nút Next (Desktop) */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-2 md:-right-6 top-[40%] -translate-y-1/2 z-20 w-10 h-10 md:w-14 md:h-14 bg-dark-teal/80 hover:bg-mustard hover:text-dark-teal rounded-full flex items-center justify-center text-white backdrop-blur-md border border-white/20 transition-all opacity-0 group-hover:opacity-100 hidden md:flex shadow-2xl"
          >
            <ChevronRight size={28} />
          </button>

          <div className="flex justify-center items-center gap-3 mt-2 md:hidden">
            <div className="flex gap-1.5 px-3 py-1.5 bg-white/5 rounded-full border border-white/10">
              <span className="w-1.5 h-1.5 bg-mustard rounded-full animate-pulse" />
              <span className="text-[9px] text-white/50 font-black uppercase tracking-widest">
                {t.testimonials.swipeLabel}
              </span>
              <span className="w-1.5 h-1.5 bg-mustard rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}