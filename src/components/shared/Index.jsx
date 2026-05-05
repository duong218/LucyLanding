import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ChevronRight, Cloud } from 'lucide-react';
import { getImageUrl } from '../../utils/helpers';
import logoImg from '../../../images/logo.png';

// ─── Logo ────────────────────────────────────────────────────────────────────
export const Logo = ({ className = '', showTagline = false }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className={`flex flex-col cursor-pointer transition-all duration-300 ${className}`}
  >
    <div className="flex items-center gap-3">
      <div className="relative flex-shrink-0">
        <motion.div
          whileHover={{ rotate: 15 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          className="w-10 h-10 md:w-12 md:h-12"
        >
          <img src={logoImg} alt="Lucy Class Logo" className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(217,164,65,0.4)]" />
        </motion.div>
      </div>
      <div className="flex flex-col justify-center leading-none">
        <span className="font-serif text-2xl font-black text-white tracking-tighter">LUCY</span>
        <span className="font-serif text-2xl font-black text-white tracking-tighter">CLASS</span>
      </div>
    </div>
    {showTagline && (
      <div className="mt-1 pl-14">
        <span className="text-[7px] font-black text-mustard uppercase tracking-[0.2em] whitespace-nowrap block opacity-90">
          Teach from the heart, learn from the joy
        </span>
      </div>
    )}
  </motion.div>
);

// ─── SectionHeading ──────────────────────────────────────────────────────────
export const SectionHeading = ({ label, title, light = true, titleClassName = "text-white" }) => (
  <div className="text-center mb-10 md:mb-16 px-4 group">
    {label && (
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1, rotate: [0, 2, -2, 0] }}
        className={`inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-xs font-black tracking-widest uppercase mb-3 md:mb-4 shadow-[0_0_30px_rgba(217,164,65,0.5)] cursor-default ${
          light ? 'bg-mustard/80 text-white' : 'bg-mustard text-white'
        }`}
      >
        {label}
      </motion.span>
    )}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className={`text-3xl md:text-5xl lg:text-7xl max-w-4xl mx-auto leading-[1.2] font-serif font-black drop-shadow-[0_0_40px_rgba(255,255,255,0.3)] ${titleClassName}`}
    >
      {title}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 60 }}
        className="h-1 md:h-2 w-16 md:w-32 mx-auto mt-4 md:mt-6 rounded-full bg-mustard shadow-[0_0_25px_rgba(217,164,65,0.8)]"
      />
    </motion.h2>
  </div>
);

// ─── FloatingDecoration ───────────────────────────────────────────────────────
export const FloatingDecoration = ({ className, color, delay = 0, style = {} }) => {
  const duration = useMemo(() => 5 + Math.random() * 2, []);
  return (
    <motion.div
      animate={{ y: [0, -20, 0], rotate: [0, 5, 0], scale: [1, 1.05, 1] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
      className={`absolute pointer-events-none ${className}`}
      style={{ color, willChange: 'transform', ...style }}
    >
      <Sparkles size={24} fill="currentColor" stroke="none" className="opacity-20" />
    </motion.div>
  );
};

// ─── FloatingDecor ───────────────────────────────────────────────────────────
export const FloatingDecor = ({ className, delay = 0, duration = 5, size = 20, rotate = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0.2, 0.5, 0.2],
      scale: [1, 1.2, 1],
      y: [0, -20, 0],
      rotate: [rotate, rotate + 10, rotate],
    }}
    transition={{ duration, repeat: Infinity, delay, ease: 'easeInOut' }}
    className={`absolute pointer-events-none -z-0 ${className}`}
    style={{ width: size, height: size, willChange: 'transform, opacity' }}
  >
    <Sparkles className="w-full h-full text-mustard/30" />
  </motion.div>
);

// ─── DoodleShape ─────────────────────────────────────────────────────────────
export const DoodleShape = ({ className, delay = 0 }) => (
  <motion.div
    animate={{
      rotate: [0, 90, 180, 270, 360],
      scale: [1, 1.1, 0.9, 1],
      borderRadius: [
        '30% 70% 70% 30% / 30% 30% 70% 70%',
        '50% 50% 20% 80% / 25% 80% 20% 75%',
        '30% 70% 70% 30% / 30% 30% 70% 70%',
      ],
    }}
    transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay }}
    className={`absolute pointer-events-none -z-20 opacity-[0.05] border-2 border-white ${className}`}
    style={{ width: 200, height: 200, willChange: 'transform, border-radius' }}
  />
);

// ─── CartoonElement ───────────────────────────────────────────────────────────
export const CartoonElement = ({ Icon, className, delay = 0, color = 'text-mustard' }) => {
  const duration = useMemo(() => 8 + Math.random() * 4, []);
  const size = useMemo(() => 40 + Math.random() * 20, []);
  return (
    <motion.div
      animate={{
        y: [0, -15, 0, 15, 0],
        x: [0, 10, 0, -10, 0],
        rotate: [0, 10, -10, 5, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
      className={`absolute pointer-events-none -z-10 opacity-20 ${color} ${className}`}
      style={{ willChange: 'transform' }}
    >
      <Icon size={size} />
    </motion.div>
  );
};

// ─── FloatingClouds ───────────────────────────────────────────────────────────
export const FloatingClouds = () => {
  const clouds = useMemo(() => {
    return [...Array(6)].map((_, i) => ({
      id: i,
      y: Math.random() * 1000,
      duration: 40 + Math.random() * 60,
      delay: i * 15,
      size: 100 + Math.random() * 100,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-20">
      {clouds.map((cloud) => (
        <motion.div
          key={cloud.id}
          initial={{ x: -200, y: cloud.y }}
          animate={{ x: '110vw' }}
          transition={{
            duration: cloud.duration,
            repeat: Infinity,
            delay: cloud.delay,
            ease: 'linear',
          }}
          className="absolute text-white/5"
          style={{ willChange: 'transform' }}
        >
          <Cloud size={cloud.size} />
        </motion.div>
      ))}
    </div>
  );
};

// ─── FloatingIcon ─────────────────────────────────────────────────────────────
export const FloatingIcon = ({ Icon, className, delay = 0, duration = 6 }) => (
  <motion.div
    animate={{ y: [0, -30, 0], rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }}
    transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
    className={`absolute pointer-events-none -z-0 text-white/10 ${className}`}
    style={{ willChange: 'transform' }}
  >
    <Icon size={48} />
  </motion.div>
);

// ─── CourseCard ───────────────────────────────────────────────────────────────
export const CourseCard = ({ item, featured = false, onClick }) => (
  <motion.div
    onClick={onClick}
    whileHover={{
      y: -12,
      scale: featured ? 1.05 : 1.03,
      boxShadow: featured
        ? '0 25px 50px -12px rgba(217, 164, 65, 0.4)'
        : '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
    }}
    whileTap={{ scale: 0.98 }}
    className={`relative bg-white/5 backdrop-blur-md rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl border transition-all duration-500 group cursor-pointer ${
      featured ? 'border-mustard z-10 bg-white/10' : 'border-white/10'
    }`}
  >
    {featured && (
      <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-mustard text-white text-[7px] md:text-[8px] font-black px-2 py-0.5 rounded-full z-20 animate-pulse">
        HOT
      </div>
    )}
    <div className="relative h-32 md:h-44 overflow-hidden">
      <img
        src={getImageUrl(item.img)}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80"
      />
      <div className="absolute inset-0 bg-dark-teal/20 opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
      <div className="absolute top-2 left-2 md:top-3 md:left-3 bg-teal/90 backdrop-blur-md text-white text-[8px] md:text-[10px] font-bold px-2 md:px-3 py-1 rounded-full border border-white/20">
        {item.tag}
      </div>
    </div>
    <div className="p-4 md:p-6">
      <h3 className="text-sm md:text-xl mb-1 md:mb-2 text-white font-serif font-black leading-tight h-10 md:h-12 flex items-center group-hover:text-mustard transition-all duration-300 drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">
        {item.title}
      </h3>
      <p className="text-white/70 text-[9px] md:text-[11px] leading-relaxed mb-3 md:mb-6 line-clamp-2 h-6 md:h-8 group-hover:text-white transition-colors">
        {item.desc}
      </p>
      <div className="flex flex-col gap-2 md:gap-3 pt-3 md:pt-5 border-t border-white/10">
        <div className="flex justify-between items-center">
          <span className="text-[7px] md:text-[9px] uppercase text-white/50 font-black tracking-widest">
            {item.duration}
          </span>
        </div>
        <div className="flex items-center gap-1 md:gap-2 text-mustard font-black text-[8px] md:text-[10px] uppercase tracking-wider group/btn">
          Chi tiết{' '}
          <ChevronRight
            size={10}
            className="md:w-3.5 md:h-3.5 group-hover/btn:translate-x-1 transition-transform"
          />
        </div>
      </div>
    </div>
  </motion.div>
);