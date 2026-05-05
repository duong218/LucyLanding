import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useLang } from '../context/LangContext';
import content from '../locales';
import { Logo } from './shared/Index';
import { scrollToId } from '../utils/helpers';

export default function Navbar({ isScrolled, mobileMenuOpen, setMobileMenuOpen }) {
    const { lang, setLang } = useLang();
    const t = content[lang];

    const navLinks = [
        { label: t.nav.home, id: 'home' },
        { label: t.nav.courses, id: 'courses' },
        { label: t.nav.why, id: 'why' },
        { label: t.nav.teachers, id: 'teachers' },
        { label: t.nav.contact, id: 'contact' },
    ];

    const handleLangChange = (l) => {
        setLang(l);
        localStorage.setItem('lucy-lang', l);
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled
                        ? 'glass py-4 shadow-2xl'
                        : 'bg-gradient-to-b from-dark-teal/50 to-transparent py-6'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                        <Logo />
                    </motion.div>

                    {/* Desktop links */}
                    <div className="hidden lg:flex items-center gap-10">
                        {navLinks.map((link, idx) => (
                            <button
                                key={idx}
                                onClick={() => scrollToId(link.id)}
                                className="text-sm font-bold text-white hover:text-mustard transition-colors relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-mustard transition-all duration-300 group-hover:w-full" />
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Language switcher */}
                        <div className="hidden md:flex bg-white/5 border border-white/20 p-1 rounded-full backdrop-blur-md relative">
                            <motion.div
                                className="absolute inset-1 bg-mustard rounded-full z-0 shadow-[0_0_15px_rgba(217,164,65,0.6)]"
                                animate={{ x: lang === 'vi' ? 0 : lang === 'en' ? 44 : 88 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                style={{ width: '40px' }}
                            />
                            {['vi', 'en', 'zh'].map((l) => (
                                <button
                                    key={l}
                                    onClick={() => handleLangChange(l)}
                                    className={`relative z-10 w-10 h-8 flex items-center justify-center text-[10px] font-black transition-colors duration-300 ${lang === l ? 'text-white' : 'text-white/40 hover:text-white'
                                        }`}
                                >
                                    {l.toUpperCase()}
                                </button>
                            ))}
                        </div>

                        {/* CTA button */}
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(217, 164, 65, 0.5)' }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scrollToId('contact')}
                            className="hidden md:block bg-mustard text-white px-8 py-3 rounded-full font-black text-sm shadow-xl transition-colors duration-300"
                        >
                            {t.nav.cta}
                        </motion.button>

                        {/* Hamburger */}
                        <button onClick={() => setMobileMenuOpen(true)} className="lg:hidden text-white p-2">
                            <Menu size={28} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        className="fixed inset-0 z-[200] glass flex flex-col items-center justify-center gap-8"
                    >
                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="absolute top-8 right-8 text-teal"
                        >
                            <X size={32} />
                        </button>

                        {navLinks.map((link, idx) => (
                            <motion.button
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                onClick={() => {
                                    scrollToId(link.id);
                                    setMobileMenuOpen(false);
                                }}
                                className="text-3xl font-display font-bold text-ash"
                            >
                                {link.label}
                            </motion.button>
                        ))}

                        <div className="flex gap-4 mt-8">
                            {[
                                { code: 'vi', label: '🇻🇳 TIẾNG VIỆT' },
                                { code: 'en', label: '🇬🇧 ENGLISH' },
                                { code: 'zh', label: '🇨🇳 中文' },
                            ].map((l) => (
                                <button
                                    key={l.code}
                                    onClick={() => {
                                        handleLangChange(l.code);
                                        setMobileMenuOpen(false);
                                    }}
                                    className={`px-4 py-2 rounded-full font-black text-xs transition-all ${lang === l.code ? 'bg-mustard text-white shadow-lg' : 'bg-white/10 text-white/50'
                                        }`}
                                >
                                    {l.label}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}