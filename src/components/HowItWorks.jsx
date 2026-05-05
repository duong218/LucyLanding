import React from 'react';
import { motion } from 'motion/react';
import { Rocket, Star, Search, MessageCircle, Lightbulb, Award } from 'lucide-react';
import { useLang } from '../context/LangContext';
import content from '../locales';
import { SectionHeading, CartoonElement, FloatingDecor, DoodleShape } from './shared/Index';

const stepIcons = [Search, MessageCircle, Lightbulb, Award];

export default function HowItWorks() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <section className="py-20 md:py-40 px-4 md:px-6 relative overflow-hidden">
      <CartoonElement Icon={Rocket} className="top-20 right-1/4" color="text-orange-400" />
      <CartoonElement Icon={Star} className="bottom-20 left-1/4" color="text-mustard" delay={1.5} />
      <FloatingDecor className="top-40 left-10" size={30} />
      <FloatingDecor className="bottom-40 right-10" size={50} delay={1} />
      <DoodleShape className="w-40 h-40 top-1/4 right-20" delay={0.5} />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-mustard/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal/10 rounded-full blur-[120px] pointer-events-none" />

      <SectionHeading title={t.how.title} light />

      <div className="max-w-5xl mx-auto relative mt-20">
        {/* Animated vertical line */}
        <div className="absolute top-0 bottom-0 left-1/2 w-[2px] hidden md:block -translate-x-1/2 overflow-hidden">
          <div className="h-full w-full bg-gradient-to-b from-transparent via-mustard/30 to-transparent" />
          <motion.div
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-transparent via-mustard to-transparent shadow-[0_0_20px_rgba(217,164,65,0.8)]"
          />
        </div>

        <div className="space-y-12 relative z-10">
          {t.how.steps.map((step, idx) => {
            const StepIcon = stepIcons[idx];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className={`flex items-center gap-8 md:gap-16 ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1">
                  <div
                    className={`bg-white/5 border border-white/10 p-5 md:p-8 rounded-[24px] md:rounded-[40px] backdrop-blur-md hover:bg-white/10 transition-all group ${
                      idx % 2 === 0 ? 'text-right' : 'text-left'
                    }`}
                  >
                    <h4 className="text-lg md:text-2xl font-serif font-black text-white mb-2 md:mb-4 group-hover:text-mustard transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-white/80 text-[11px] md:text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-teal flex items-center justify-center text-mustard border-4 border-white/10 shadow-2xl z-10 relative">
                    <StepIcon size={36} />
                    <div
                      className={`absolute -top-1 ${
                        idx % 2 === 0 ? '-right-1' : '-left-1'
                      } w-10 h-10 rounded-full bg-mustard text-white flex items-center justify-center text-sm font-black border-4 border-dark-teal shadow-xl`}
                    >
                      {idx + 1}
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-mustard/20 animate-ping" />
                </div>
                <div className="flex-1 hidden md:block" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}