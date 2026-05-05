import React from 'react';
import { motion } from 'motion/react';
import {
  Rocket, Ghost, Star, ArrowRight, ArrowDown, Phone, Mail, User, Users,
  Award, BookOpen, MessageSquare, Sparkles, Gift, Loader2,
} from 'lucide-react';
import { useLang } from '../context/LangContext';
import content from '../locales';
import { CartoonElement, FloatingDecor, DoodleShape } from './shared/Index';

export default function ContactSection({ isSubmitting, onSubmit }) {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <section id="contact" className="py-16 md:py-40 px-4 md:px-6 relative">
      <CartoonElement Icon={Rocket} className="top-[15%] right-[10%]" color="text-orange-400" />
      <CartoonElement Icon={Ghost} className="bottom-[20%] left-[5%]" color="text-purple-400" delay={0.5} />
      <CartoonElement Icon={Star} className="top-[40%] left-[15%]" color="text-mustard" delay={3} />
      <FloatingDecor className="top-20 left-40" size={40} delay={0.5} />
      <FloatingDecor className="bottom-20 right-40" size={60} delay={2.5} />
      <DoodleShape className="w-80 h-80 top-0 left-0" delay={1} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="relative bg-white/5 border border-white/10 backdrop-blur-3xl rounded-[60px] overflow-hidden shadow-3xl">
          <div className="grid lg:grid-cols-12">
            {/* Left panel */}
            <div className="lg:col-span-5 p-10 md:p-16 lg:p-20 flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-white/5 to-transparent">
              <div className="absolute top-0 right-0 w-64 h-64 bg-mustard/10 blur-[100px] -z-10" />
              <div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="w-16 h-1 bg-mustard mb-8 rounded-full"
                />
                <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-10 font-serif leading-[1.1] font-bold">
                  {t.form.leftTitle.split('\n').map((line, i) => (
                    <span key={i} className="block">{line}</span>
                  ))}
                </h2>
                <div className="space-y-8">
                  {[
                    { text: t.form.benefit1, icon: <Gift size={22} /> },
                    { text: t.form.benefit2, icon: <Sparkles size={22} /> },
                    { text: t.form.benefit3, icon: <Award size={22} /> },
                  ].map((b, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-5 group"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-mustard/20 text-mustard rounded-2xl flex items-center justify-center border border-mustard/30 group-hover:bg-mustard group-hover:text-dark-teal transition-all duration-500">
                        {b.icon}
                      </div>
                      <p className="font-bold text-lg text-white/90 leading-tight pt-1">{b.text}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-16 pt-12 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-black text-mustard uppercase tracking-widest">
                    {t.form.hotline}
                  </span>
                  <div className="flex items-center gap-3 text-white group cursor-pointer">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-mustard group-hover:text-dark-teal transition-all">
                      <Phone size={14} />
                    </div>
                    <span className="font-serif text-lg font-bold">093 176 87 90</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-black text-mustard uppercase tracking-widest">
                    {t.form.officialEmail}
                  </span>
                  <div className="flex items-center gap-3 text-white group cursor-pointer">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-mustard group-hover:text-dark-teal transition-all">
                      <Mail size={14} />
                    </div>
                    <span className="font-serif text-lg font-bold">Lucyclass2019@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right panel - Form */}
            <div className="lg:col-span-7 bg-white/5 p-8 md:p-12 lg:p-20">
              <div className="max-w-2xl mx-auto">
                <div className="mb-12">
                  <h3 className="text-3xl md:text-4xl text-white font-serif font-bold mb-4">{t.form.title}</h3>
                  <div className="h-1 w-20 bg-mustard rounded-full" />
                </div>

                <form className="space-y-8" onSubmit={onSubmit}>
                  <div className="grid md:grid-cols-2 gap-8">
                    <FormField name="parentName" icon={<User size={20} />} type="text" placeholder={t.form.name} required minLength={5} maxLength={32} title="Vui lòng nhập từ 5 đến 32 ký tự" />
                    <FormField name="studentName" icon={<Users size={20} />} type="text" placeholder={t.form.studentName} required minLength={5} maxLength={32} title="Vui lòng nhập từ 5 đến 32 ký tự" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <FormField name="phone" icon={<Phone size={20} />} type="tel" placeholder={t.form.phone} required pattern="[0-9]{9,11}" title="Vui lòng nhập từ 9 đến 11 chữ số" />
                    <FormField name="email" icon={<Mail size={20} />} type="email" placeholder={t.form.email} pattern=".*@gmail\.com$" title="Email phải có đuôi @gmail.com" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <SelectField name="age" icon={<Award size={20} />} placeholder={t.form.age}>
                      {t.form.ageOptions?.map((option, index) => (
                        <option key={index} className="bg-dark-teal">
                          {option}
                        </option>
                      ))}
                    </SelectField>
                    <SelectField name="course" icon={<BookOpen size={20} />} placeholder={t.form.course}>
                      <option className="bg-dark-teal">Kindy Explorers</option>
                      <option className="bg-dark-teal">Starters & Movers</option>
                      <option className="bg-dark-teal">Global Citizens</option>
                    </SelectField>
                  </div>
                  <div className="group relative">
                    <div className="absolute top-6 left-5 text-white/50 group-focus-within:text-mustard transition-colors pointer-events-none">
                      <MessageSquare size={20} />
                    </div>
                    <textarea
                      name="note"
                      rows={4}
                      placeholder={t.form.note}
                      maxLength={500}
                      className="w-full bg-white/5 border border-white/10 text-white focus:border-mustard/50 rounded-2xl pt-5 pl-14 pr-6 outline-none transition-all placeholder:text-white/50 resize-none font-medium"
                    />
                  </div>

                  <motion.button
                    disabled={isSubmitting}
                    whileHover={{
                      scale: isSubmitting ? 1 : 1.02,
                      x: isSubmitting ? 0 : 5,
                      boxShadow: isSubmitting ? 'none' : '0 0 30px rgba(217, 164, 65, 0.4)',
                    }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className={`w-full ${
                      isSubmitting ? 'bg-mustard/60 cursor-not-allowed' : 'bg-mustard'
                    } text-dark-teal group relative overflow-hidden font-black py-6 rounded-2xl shadow-2xl flex items-center justify-center gap-4 text-lg uppercase tracking-widest transition-all duration-300`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin" size={24} />
                        <span>{t.form.sending}</span>
                      </>
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        <span className="relative z-10">{t.form.submit}</span>
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="relative z-10"
                        >
                          <ArrowRight size={24} />
                        </motion.div>
                      </>
                    )}
                  </motion.button>

                  <p className="text-center text-white/60 text-[10px] uppercase font-bold tracking-[0.2em]">
                    {t.form.privacy}
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function FormField({ icon, ...props }) {
  return (
    <div className="group relative">
      <div className="absolute top-1/2 -translate-y-1/2 left-5 text-white/50 group-focus-within:text-mustard transition-colors pointer-events-none">
        {icon}
      </div>
      <input
        {...props}
        className="w-full bg-white/5 border border-white/10 text-white focus:border-mustard/50 rounded-2xl py-5 pl-14 pr-6 outline-none transition-all placeholder:text-white/50 font-medium"
      />
    </div>
  );
}

function SelectField({ icon, placeholder, name, children }) {
  return (
    <div className="group relative">
      <div className="absolute top-1/2 -translate-y-1/2 left-5 text-white/50 group-focus-within:text-mustard transition-colors pointer-events-none">
        {icon}
      </div>
      <select name={name} className="w-full bg-white/5 border border-white/10 text-white focus:border-mustard/50 rounded-2xl py-5 pl-14 pr-10 outline-none transition-all appearance-none cursor-pointer font-medium">
        <option className="bg-dark-teal">{placeholder}</option>
        {children}
      </select>
      <div className="absolute top-1/2 -translate-y-1/2 right-5 text-white/50 pointer-events-none">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
    </div>
  );
}