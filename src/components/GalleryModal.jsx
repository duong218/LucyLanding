import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useLang } from '../context/LangContext';
import { getImageUrl } from '../utils/helpers';

import content from '../locales';

const GalleryModal = ({ showGalleryPopup, setShowGalleryPopup }) => {
  const { lang } = useLang();
  const t = content[lang];

  const galleryImages = [
    '/547767202_1111615577612736_1338398418078087213_n.jpg',
    '/550483760_1116430737131220_3185186595382230821_n.jpg',
    '/550743878_1116436353797325_70540920607562904_n.jpg',
    '/550750752_1116433857130908_5495456209623670742_n.jpg',
    '/556894098_1123765743064386_7060006568454468174_n.jpg',
    '/558865652_1123765733064387_6678245541534663449_n.jpg',
    '/568896168_1142421274532166_5228492703551404080_n.jpg',
    '/569162685_1142441071196853_4989965618717348678_n.jpg',
    '/594489491_1174635617977398_5355237654417142881_n.jpg',
    '/650332793_1247832453991047_2366140638455105917_n.jpg',
    '/650834349_1247832530657706_2678442514978787635_n.jpg',
    '/673544057_1279350354172590_6875116238435299963_n.jpg',
    '/674359427_1277022587738700_8871814591037360099_n.jpg',
    '/684281362_1286512806789678_8200653879599193302_n.jpg',
    '/686333243_1284906083617017_5547369241949822635_n.jpg'
  ];

  return (
    <AnimatePresence>
      {showGalleryPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
        >
          <div className="absolute inset-0 bg-dark-teal/95 backdrop-blur-2xl" onClick={() => setShowGalleryPopup(false)} />
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="relative bg-white/5 border border-white/10 rounded-[40px] w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col shadow-3xl"
          >
            <div className="p-8 border-b border-white/10 flex items-center justify-between bg-white/5">
              <div>
                <h3 className="text-2xl font-serif font-bold text-white">
                  {t.gallery.title}
                </h3>
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest mt-1">
                  {t.gallery.subtitle}
                </p>
              </div>
              <button 
                onClick={() => setShowGalleryPopup(false)}
                className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-mustard hover:text-dark-teal transition-all"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryImages.map((imgId, i) => (
                  <motion.div
                    key={imgId}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.03 }}
                    className="aspect-square relative group overflow-hidden rounded-2xl"
                  >
                    <img 
                      src={getImageUrl(imgId, 'w=400&h=400&q=80')} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      alt="Gallery item"
                    />
                    <div className="absolute inset-0 bg-dark-teal/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GalleryModal;
