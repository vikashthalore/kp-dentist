import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MdScanner, 
  MdCleaningServices, 
  MdAutoAwesome, 
  MdMonitorHeart, 
  MdAddCircleOutline 
} from 'react-icons/md';
import { GiTooth } from 'react-icons/gi';
import { LiaTeethOpenSolid } from "react-icons/lia";
import { FaTooth, FaPlusSquare, FaShieldAlt, FaBaby, FaChevronRight } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';

const services = [
  { id: "x-ray", name: "X-Ray", icon: <MdScanner />, desc: "Digital diagnostics for precise treatment planning." },
  { id: "teeth-cleaning", name: "Teeth Cleaning", icon: <MdCleaningServices />, desc: "Professional polishing and plaque removal for a fresh breath." },
  { id: "cosmetic-procedures", name: "Cosmetic Procedures", icon: <MdAutoAwesome />, desc: "Enhancing your smile with modern aesthetic techniques." },
  { id: "root-canals", name: "Root Canals", icon: <MdMonitorHeart />, desc: "Pain-free root canal treatments to save your natural teeth." },
  { id: "dental-implants", name: "Dental Implants", icon: <GiTooth />, desc: "Permanent and natural-looking tooth replacement solutions." },
  { id: "orthodontic-treatment", name: "Orthodontic Treatment", icon: <FaTooth />, desc: "Braces and aligners for perfectly straightened teeth." },
  { id: "dentures-bridges", name: "Dentures & Bridges", icon: <LiaTeethOpenSolid />, desc: "Restoring your bite and smile with custom prosthetics." },
  { id: "extractions", name: "Extractions", icon: <FaPlusSquare />, desc: "Safe and comfortable tooth removal when necessary." },
  { id: "fillings", name: "Fillings", icon: <FaTooth />, desc: "Durable restorations for cavities and damaged teeth." },
  { id: "mouth-guards", name: "Mouth Guards", icon: <FaShieldAlt />, desc: "Custom protection for sports and teeth grinding." },
  { id: "teeth-whitening", name: "Teeth Whitening", icon: <MdAutoAwesome />, desc: "Brighten your smile with our advanced whitening tech." },
  { id: "veneers-crowns", name: "Veneers & Crowns", icon: <GiTooth />, desc: "Premium ceramic covers for ultimate tooth protection." },
  { id: "paediatrics", name: "Paediatrics", icon: <FaBaby />, desc: "Specialized dental care for your little ones in a friendly environment." },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-teal-100/50 rounded-full blur-3xl opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="inline-block px-4 py-1.5 mb-4 bg-teal-50 border border-teal-200 rounded-full">
              <span className="text-teal-600 font-bold uppercase tracking-[0.2em] text-[10px]">
                Excellence in Dentistry
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
              Premium Care for <br /> Your <span className="text-[#bfa15f]">Perfect Smile.</span>
            </h1>
          </motion.div>
          
          <motion.button 
            whileHover={{ x: 5 }}
            onClick={() => navigate('/service')}
            className="flex items-center gap-3 text-slate-900 font-extrabold hover:text-teal-600 transition-all group text-lg"
          >
            View Treatment Library <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-all"><HiArrowRight /></div>
          </motion.button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onClick={() => navigate(`/service/${service.id}`)}
              className="group relative p-8 rounded-[2.5rem] border border-white bg-white/70 backdrop-blur-sm hover:bg-slate-900 transition-all duration-500 cursor-pointer shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-teal-900/20 hover:-translate-y-3"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-50 to-white flex items-center justify-center text-teal-600 text-3xl mb-8 group-hover:from-[#bfa15f] group-hover:to-[#d4bc82] group-hover:text-white shadow-inner transition-all duration-500">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-white transition-colors tracking-tight">
                {service.name}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 group-hover:text-slate-400 transition-colors">
                {service.desc}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest text-teal-600 group-hover:text-[#bfa15f]">
                  Explore Details
                </span>
                <div className="p-2 rounded-full bg-slate-50 group-hover:bg-white/10 group-hover:text-white transition-colors">
                  <FaChevronRight size={10} />
                </div>
              </div>

              {/* Hover Decorative Line */}
              <div className="absolute bottom-6 right-8 left-8 h-1 bg-[#bfa15f] scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full opacity-0 group-hover:opacity-100" />
            </motion.div>
          ))}

          {/* Library Redirect Card */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            onClick={() => navigate('/services')}
            className="group p-8 rounded-[2.5rem] border-2 border-dashed border-teal-200 bg-teal-50/30 flex flex-col items-center justify-center text-center hover:bg-white hover:border-teal-600 transition-all duration-500 cursor-pointer shadow-sm"
          >
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-teal-600 text-4xl mb-6 shadow-sm group-hover:bg-teal-600 group-hover:text-white transition-all ring-8 ring-teal-50">
              <MdAddCircleOutline />
            </div>
            <h3 className="text-xl font-black text-slate-700 group-hover:text-teal-600 leading-snug">
              Discover Our Full <br /> <span className="text-teal-600">Treatment Library</span>
            </h3>
            <p className="mt-4 text-xs font-bold text-slate-400 uppercase tracking-widest group-hover:text-slate-600">
              Browse 50+ Procedures
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;