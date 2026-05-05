import React from 'react';
import { motion } from 'motion/react';
import { Facebook, MessageCircle, Instagram, Music, ChevronRight, MapPin, Phone, Clock, Heart } from 'lucide-react';
import { useLang } from '../context/LangContext';
import { Logo } from './shared/Index';
import { scrollToId } from '../utils/helpers';
import content from '../locales';

const Footer = () => {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <footer className="bg-dark-teal text-white pt-32 pb-10 px-6 border-t border-white/5 mt-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-16 mb-20">
        <div className="col-span-2">
          <Logo showTagline className="mb-8" />
          <p className="text-white/80 mb-10 max-w-sm leading-relaxed">{t.footer.tagline}</p>
          <div className="flex gap-4">
            {[
              { Icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/lucyclass2019' },
              { Icon: MessageCircle, label: 'Zalo', href: 'https://zalo.me/0931768790' },
              { Icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/lucyclass2019/' },
              { Icon: Music, label: 'TikTok', href: 'https://www.tiktok.com/@lucyclass2019' }
            ].map(({ Icon, label, href }, idx) => (
              <motion.a 
                key={idx} 
                whileHover={{ y: -8, scale: 1.1 }} 
                href={href} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center transition-all duration-300 group"
              >
                <Icon size={18} />
                <span className="text-[6px] font-black uppercase mt-1 opacity-70 group-hover:opacity-100">{label}</span>
              </motion.a>
            ))}
          </div>
        </div>
        <div>
          <h5 className="font-serif text-xl text-mustard mb-8">{t.footer.links}</h5>
          <ul className="space-y-4">
            {[
              { label: t.nav.home, id: 'home' },
              { label: t.nav.courses, id: 'courses' },
              { label: t.nav.teachers, id: 'teachers' },
              { label: t.nav.why, id: 'why' },
              { label: t.nav.contact, id: 'contact' }
            ].map((link, idx) => (
              <li key={idx}>
                <button 
                  onClick={() => scrollToId(link.id)}
                  className="text-white/70 hover:text-white transition-all text-sm font-bold flex items-center gap-2 group"
                >
                  <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="font-serif text-xl text-mustard mb-8">{t.footer.contact}</h5>
          <ul className="space-y-6">
            <li className="flex gap-4 group cursor-pointer">
              <MapPin size={20} className="text-mustard shrink-0" />
              <span className="text-sm text-white/70 font-bold leading-relaxed group-hover:text-white transition-colors">Tòa S1.07, Vinhomes Ocean Park, Xã Đa Tốn, Huyện Gia Lâm, Hà Nội</span>
            </li>
            <li className="flex gap-4 group cursor-pointer">
              <Phone size={20} className="text-mustard shrink-0" />
              <span className="text-sm text-white/70 font-bold leading-relaxed group-hover:text-white transition-colors">093 176 87 90</span>
            </li>
            <li className="flex gap-4 group cursor-pointer">
              <Clock size={20} className="text-mustard shrink-0" />
              <span className="text-sm text-white/70 font-bold leading-relaxed group-hover:text-white transition-colors">Thứ 2 - Thứ 6: 8:00 - 21:00</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 opacity-60">
        <span className="text-[10px] text-white font-bold tracking-[0.2em] uppercase">Lucy Class Vietnam — Creative Premium Education Environment</span>
        <div className="flex gap-8 text-[10px] text-white font-black uppercase tracking-widest">
          <a href="#" className="hover:text-white transition-all">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-all">Terms</a>
          <a href="#" className="hover:text-white transition-all flex items-center gap-2">Made with <Heart size={10} fill="currentColor" stroke="none" className="text-orange" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
