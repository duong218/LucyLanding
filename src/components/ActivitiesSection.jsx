import React from 'react';
import { motion } from 'motion/react';
import { Rocket, Star, Flower, Sparkles } from 'lucide-react';
import { useLang } from '../context/LangContext';
import content from '../locales';
import { SectionHeading, CartoonElement, FloatingDecor } from './shared/Index';
import { getImageUrl } from '../utils/helpers';

export default function ActivitiesSection({ onOpenGallery }) {
  const { lang } = useLang();
  const t = content[lang];

  // Gom ảnh vào một mảng để dễ dàng thay thế cho cả 3 ngôn ngữ
  const activityImages = [
    'https://res.cloudinary.com/dtf9wke7m/image/upload/v1775456142/571014825_1142440944530199_1148803419682996441_n_tyd47s.jpg', // 1: Lễ hội âm nhạc
    'https://res.cloudinary.com/dtf9wke7m/image/upload/v1775456034/474220351_939014918206137_3355841523330821447_n_iimgwc.jpg', // 2: Ngày hội thể thao
    'https://res.cloudinary.com/dtf9wke7m/image/upload/v1775456184/587195104_1164706155637011_5894319365288058882_n_vs48mr.jpg', // 3: Lớp học nấu ăn
    'https://res.cloudinary.com/dtf9wke7m/image/upload/v1775456123/502899777_1030223205751974_8811962752339717548_n_pb67ce.jpg', // 4: Dã ngoại rừng xanh
    'https://res.cloudinary.com/dtf9wke7m/image/upload/v1775456113/500767597_1030223155751979_7633608234760822100_n_si7bex.jpg', // 5: Kỹ năng sinh tồn
    'https://res.cloudinary.com/dtf9wke7m/image/upload/v1775456102/500767597_1030223155751979_7633608234760822100_n_sqtvb4.jpg', // 6: Đêm hội trung thu
    'https://res.cloudinary.com/dtf9wke7m/image/upload/v1775456135/536274052_1093542339420060_7609536150683997407_n_fotek6.jpg', // 7: Sáng tạo mỹ thuật
    'https://res.cloudinary.com/dtf9wke7m/image/upload/v1775456174/587002755_1164706088970351_5171348972225588403_n_gkahkp.jpg', // 8: Câu lạc bộ cờ vua
    'https://res.cloudinary.com/dtf9wke7m/image/upload/v1775456150/585067513_1164706132303680_4884855346630812357_n_rnru0z.jpg', // 9: Lớp kịch tiếng Anh
    'https://res.cloudinary.com/dtf9wke7m/image/upload/v1775456155/585455582_1164706135637013_8334617963758026182_n_ye1xq5.jpg', // 10: Giáng sinh ấm áp
  ];

  return (
    <section id="activities" className="py-16 md:py-32 px-4 md:px-6 relative overflow-hidden">
      <CartoonElement Icon={Rocket} className="top-10 left-20" color="text-white" />
      <CartoonElement Icon={Star} className="bottom-10 right-20" color="text-mustard" delay={1} />
      <CartoonElement Icon={Flower} className="top-1/2 right-[10%]" color="text-pink-400" delay={3} />
      <FloatingDecor className="top-10 left-1/4" size={20} />
      <FloatingDecor className="bottom-20 right-1/4" size={40} delay={2} />

      <SectionHeading title={t.activities.title} />
      <p className="text-center text-white/50 -mt-4 md:-mt-10 mb-8 md:mb-16 max-w-2xl mx-auto font-medium px-4 text-xs md:text-base">
        {t.activities.subtext}
      </p>

      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-5">
          {t.activities.items.map((act, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.05, ease: 'easeOut' }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-[24px] md:rounded-[40px] cursor-pointer shadow-2xl border border-white/5 h-[180px] md:h-[320px] ${
                idx === 0 || idx === 7 ? 'md:row-span-2 md:col-span-1' : ''
              } ${idx === 4 ? 'md:col-span-2' : ''}`}
            >
              <img
                src={getImageUrl(activityImages[idx] || act.img, 'w=600&h=800&q=80')}
                alt={act.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125 grayscale-[0.2] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-teal via-dark-teal/10 to-transparent opacity-70 group-hover:opacity-40 transition-all duration-700" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
              {(idx === 0 || idx === 4) && (
                <div className="absolute top-6 right-6 bg-teal/80 backdrop-blur-md p-2 rounded-full border border-white/20 text-white animate-pulse">
                  <Sparkles size={16} />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenGallery}
            className="group relative bg-white/5 border border-white/20 text-white px-14 py-6 rounded-full font-bold text-sm overflow-hidden transition-all shadow-3xl"
          >
            <div className="absolute inset-0 bg-mustard scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700 -z-10" />
            <span className="flex items-center gap-4 relative z-10 transition-colors group-hover:text-dark-teal">
              {t.gallery.btnLabel}
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}>
                <Sparkles size={22} />
              </motion.div>
            </span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}