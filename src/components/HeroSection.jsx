import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Award, Users, GraduationCap, Pencil, Book, Rocket, Globe, Ghost, Flower, Star } from 'lucide-react';
import { useLang } from '../context/LangContext';
import content from '../locales';
import { getImageUrl, scrollToId } from '../utils/helpers';
import {
    DoodleShape,
    CartoonElement,
    FloatingIcon,
    FloatingDecoration,
} from './shared/Index';

export default function HeroSection() {
    const { lang } = useLang();
    const t = content[lang];

    return (
        <section
            id="home"
            className="relative min-h-screen pt-24 md:pt-32 pb-12 md:pb-20 flex items-center overflow-hidden z-10"
        >
            <DoodleShape className="top-20 -left-20" delay={1} />
            <DoodleShape className="bottom-10 -right-20" delay={2} />
            <CartoonElement Icon={Ghost} className="top-[15%] left-[5%]" color="text-white" delay={0} />
            <CartoonElement Icon={Flower} className="bottom-[10%] right-[10%]" color="text-pink-400" delay={1} />
            <CartoonElement Icon={Star} className="top-[25%] right-[15%]" color="text-mustard" delay={2} />
            <FloatingIcon Icon={Pencil} className="top-[10%] right-[10%]" delay={0} />
            <FloatingIcon Icon={Book} className="bottom-[15%] left-[5%]" delay={2} />
            <FloatingIcon Icon={Rocket} className="top-[40%] right-[5%]" delay={1} />
            <FloatingIcon Icon={GraduationCap} className="bottom-[20%] right-[30%]" delay={3} />
            <FloatingIcon Icon={Globe} className="top-[30%] left-[2%]" delay={4} />
            <FloatingDecoration className="top-1/4 left-10" color="#3FA48F" delay={0.2} />
            <FloatingDecoration className="bottom-1/4 right-20" color="#D9A441" delay={0.5} />

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                {/* Left column */}
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <div className="inline-flex items-center gap-2 bg-orange px-4 py-1.5 rounded-full mb-8 shadow-xl animate-bounce">
                        <Sparkles size={16} className="text-white" />
                        <span className="text-xs font-black uppercase tracking-wider text-white">{t.hero.badge}</span>
                    </div>
                    <h1 className="text-4xl md:text-[80px] leading-[1.2] md:leading-[1.25] mb-6 md:mb-8 font-serif font-black text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                        {t.hero.title1}
                        <br />
                        <span className="text-mustard drop-shadow-[0_0_20px_rgba(217,164,65,0.5)]">{t.hero.title2}</span>
                    </h1>
                    <p className="text-base md:text-lg text-white/80 mb-8 md:mb-10 max-w-lg leading-relaxed">
                        {t.hero.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        <motion.button
                            onClick={() => scrollToId('contact')}
                            whileTap={{ scale: 0.98 }}
                            className="bg-teal border border-teal-light text-white px-8 md:px-10 py-4 md:py-5 rounded-[20px] font-black shadow-2xl flex items-center justify-center gap-3 group transition-all duration-300"
                        >
                            <span className="relative z-10 flex items-center gap-2 uppercase tracking-wide text-sm md:text-base">
                                {t.hero.primary}{' '}
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </motion.button>
                        <motion.button
                            onClick={() => scrollToId('courses')}
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)', y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-white/5 border border-white/10 text-white/90 px-8 md:px-10 py-4 md:py-5 rounded-[20px] font-black hover:bg-white/10 transition-all uppercase tracking-wide text-sm md:text-base text-center"
                        >
                            {t.hero.secondary}
                        </motion.button>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex">
                            {[1, 2, 3].map((i) => (
                                <div
                                    key={i}
                                    className="w-10 h-10 rounded-full border-4 border-white -ml-3 bg-teal-light first:ml-0 overflow-hidden"
                                >
                                    <img
                                        src={getImageUrl(
                                            i === 1
                                                ? 'photo-1438761681033-6461ffad8d80'
                                                : i === 2
                                                    ? 'photo-1500648767791-00dcc994a43e'
                                                    : 'photo-1544005313-94ddf0286df2',
                                            'w=100&h=100&q=80'
                                        )}
                                        alt=""
                                    />
                                </div>
                            ))}
                        </div>
                        <span className="text-sm font-bold text-gray-400">⭐ {t.hero.stats}</span>
                    </div>
                </motion.div>

                {/* Right column */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, type: 'spring' }}
                    className="relative lg:h-[600px]"
                >
                    <div className="relative w-full h-[500px] lg:h-full blob bg-teal/10 animate-float overflow-hidden border-4 border-white/50 shadow-2xl">
                        <img
                            src="https://res.cloudinary.com/dtf9wke7m/image/upload/v1775456135/536274052_1093542339420060_7609536150683997407_n_fotek6.jpg"
                            className="w-full h-full object-cover grayscale-[0.2]"
                            alt="Hero"
                        />
                    </div>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute top-10 -left-6 glass p-5 rounded-3xl shadow-xl border border-white max-w-[200px]"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <div className="bg-mustard p-2 rounded-xl text-white">
                                <Award size={20} />
                            </div>
                            <span className="text-[10px] font-black leading-tight uppercase tracking-widest text-mustard">
                                Gia Lâm - Hà Nội
                            </span>
                        </div>
                    </motion.div>
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                        className="absolute bottom-10 -right-6 glass p-5 rounded-3xl shadow-xl border border-white max-w-[200px]"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <div className="bg-purple p-2 rounded-xl text-white">
                                <Users size={20} />
                            </div>
                            <span className="text-[10px] font-black leading-tight uppercase tracking-widest text-purple">
                                4.9/5 Phụ Huynh Hài Lòng
                            </span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}