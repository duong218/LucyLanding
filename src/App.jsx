import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { LangContext } from './context/LangContext';
import { FloatingClouds, CartoonElement } from './components/shared/Index';
import { AnimatePresence, motion } from 'motion/react';
import { Sun, Moon, Sparkles, X } from 'lucide-react';

// Import Modular Sections
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhySection from './components/WhySection';
import CoursesSection from './components/CoursesSection';
import HowItWorks from './components/HowItWorks';
import TeachersSection from './components/TeachersSection';
import ActivitiesSection from './components/ActivitiesSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// Import Modals
import CourseModal from './components/CourseModal';
import GalleryModal from './components/GalleryModal';

export default function App() {
  const [lang, setLang] = useState('vi');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showGalleryPopup, setShowGalleryPopup] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 5000);
  };

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // Expose globally so scrollToId and other utilities can use it
    window.__lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  useEffect(() => {
    const savedLang = localStorage.getItem('lucy-lang');
    if (savedLang) setLang(savedLang);

    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(prev => prev !== scrolled ? scrolled : prev);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSetLang = (newLang) => {
    setLang(newLang);
    localStorage.setItem('lucy-lang', newLang);
  };

  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzj45Or2n-FgODV7PfAdpH66sm48ZpzY-TJYOhGKjEhJXtwP-og6QDmWtqIeHDseKwU/exec';

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());
      
      // Add a timestamp
      data.timestamp = new Date().toLocaleString('vi-VN');

      if (GOOGLE_SCRIPT_URL === 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE') {
        // Fallback simulate mode if script URL is not yet configured
        console.warn('Google Script URL is not configured. Form data:', data);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        showToast('Lưu ý: Form chưa được kết nối với Google Sheets. Vui lòng thiết lập Google Script URL!');
      } else {
        // Send data to Google Apps Script
        const response = await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors', // Important for avoiding CORS issues with Google Scripts
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        
        // no-cors mode won't let us read the actual response status, so we assume success if no catch block is hit
        showToast('Cảm ơn ba mẹ! Dữ liệu đã được lưu thành công vào hệ thống.');
      }
      e.target.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      showToast('Có lỗi xảy ra khi gửi thông tin. Vui lòng thử lại sau.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <LangContext.Provider value={{ lang, setLang: handleSetLang }}>
      <div className="noise relative bg-dark-teal text-cream min-h-screen overflow-x-clip">
        {/* Background Elements */}
        <div className="fixed inset-0 dot-pattern opacity-10 pointer-events-none z-0" />
        <FloatingClouds />
        <div className="fixed top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-teal blur-[120px] opacity-20 pointer-events-none z-0" />
        
        <CartoonElement Icon={Sun} className="top-10 left-10" color="text-yellow-400" />
        <CartoonElement Icon={Moon} className="top-20 right-[20%]" color="text-slate-300" delay={2} />

        <Navbar isScrolled={isScrolled} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

        <main>
          <HeroSection />
          <WhySection />
          <CoursesSection setSelectedCourse={setSelectedCourse} />
          <HowItWorks />
          <TeachersSection />
          <ActivitiesSection onOpenGallery={() => setShowGalleryPopup(true)} />
          <TestimonialsSection />
          <ContactSection isSubmitting={isSubmitting} onSubmit={handleFormSubmit} />
        </main>

        <Footer />

        {/* Modals */}
        <CourseModal selectedCourse={selectedCourse} setSelectedCourse={setSelectedCourse} />
        <GalleryModal showGalleryPopup={showGalleryPopup} setShowGalleryPopup={setShowGalleryPopup} />

        {/* Custom Toast Notification */}
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] bg-dark-teal border-2 border-mustard/50 text-white px-5 py-4 md:px-6 md:py-4 rounded-2xl shadow-[0_10px_40px_rgba(217,164,65,0.3)] flex items-center gap-4 w-[90vw] md:w-max max-w-md"
            >
              <div className="w-10 h-10 bg-mustard/20 rounded-full flex items-center justify-center shrink-0">
                <Sparkles size={20} className="text-mustard" />
              </div>
              <p className="font-medium text-sm leading-relaxed">{toastMessage}</p>
              <button 
                onClick={() => setToastMessage(null)}
                className="ml-auto w-8 h-8 flex items-center justify-center shrink-0 rounded-full hover:bg-white/10 transition-colors text-white/50 hover:text-white"
              >
                <X size={16} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </LangContext.Provider>
  );
}