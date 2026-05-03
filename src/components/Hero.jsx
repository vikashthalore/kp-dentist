import React from 'react';
import { AiOutlineCalendar, AiOutlineCheckCircle } from 'react-icons/ai';
import { FaTooth } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  const navigate = useNavigate();

  // Left side staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Ek ke baad ek element aayega
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-white">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-2/3 h-2/3 bg-teal-50 rounded-full blur-[120px] opacity-40 translate-x-1/3 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/3 bg-[#bfa15f]/10 rounded-full blur-[100px] opacity-30 -translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-2 lg:px-8 flex flex-col md:flex-row items-center gap-8">
        
        {/* Left Content Section */}
        <motion.div 
          className="md:w-1/2 text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 px-5 py-2.5 rounded-full mb-8 shadow-sm"
          >
            <FaTooth className="text-teal-600 animate-pulse" />
            <span className="text-teal-700 text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
              Top Rated Dental Care in Ahmedabad
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.05] mb-8 tracking-tighter"
          >
            A Better Life <br /> Starts With A <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-[#d4bc82] to-[#bfa15f]">
              Beautiful Smile.
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p 
            variants={itemVariants}
            className="text-slate-500 text-lg md:text-xl max-w-lg mb-12 leading-relaxed font-medium"
          >
            Experience world-class dental treatments at <span className="text-slate-900 font-bold border-b-2 border-[#bfa15f]/30">KP Dental Care</span>. 
            We combine advanced technology with a gentle, personalized touch.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-5"
          >
            <button 
              onClick={() => navigate('/contact')}
              className="flex items-center justify-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-2xl font-black hover:bg-teal-600 transition-all shadow-2xl shadow-slate-200 hover:shadow-teal-100 active:scale-95"
            >
              <AiOutlineCalendar size={22} />
              Book Appointment
            </button>
            <button 
              onClick={() => navigate('/services')}
              className="flex items-center justify-center gap-2 border-2 border-slate-200 bg-white/50 backdrop-blur-sm px-10 py-5 rounded-2xl font-black text-slate-700 hover:border-[#bfa15f] hover:text-[#bfa15f] transition-all active:scale-95"
            >
              View Our Services
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 pt-8 border-t border-slate-100 flex items-center gap-8"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center">
                <AiOutlineCheckCircle className="text-teal-500" size={18} />
              </div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Expert Dentists</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center">
                <AiOutlineCheckCircle className="text-teal-500" size={18} />
              </div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Modern Equipment</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Image/Graphic Section */}
        <motion.div 
          className="md:w-1/2 relative"
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          {/* Main Image Container */}
          <div className="relative z-10 w-full h-[450px] md:h-[600px] rounded-[2.2rem] overflow-hidden border-[12px] border-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)]">
            <img 
              src="https://images.sharedlynk.shop/kp-dentist/kp-dentist-hero.webp" 
              alt="Professional Dental Care at KP Clinic" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            
            {/* Overlay Glass Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute top-44 right-1 bg-white/80 backdrop-blur-md p-3 md:p-6 rounded-[2rem] shadow-2xl flex items-center gap-2 border border-white/50"
            >
              <div className="w-8 h-10 bg-gradient-to-br from-[#bfa15f] to-[#d4bc82] rounded-2xl flex items-center justify-center text-white shadow-lg">
                <FaTooth size={24} />
              </div>
              <div>
                <p className="text-[10px] text-teal-600 font-black uppercase tracking-[0.15em] mb-1">Pain Free Clinic</p>
                <p className="text-lg font-black text-slate-800 leading-none">100% Gentle Care</p>
              </div>
            </motion.div>
          </div>

          {/* Decorative Gold Frame */}
          <div className="absolute -bottom-8 -right-8 -z-10 w-full h-full border-2 border-[#bfa15f] rounded-[2.5rem] opacity-20"></div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-teal-50 rounded-full -z-10 blur-2xl opacity-60"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;