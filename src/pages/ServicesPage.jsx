import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MdScanner, MdCleaningServices, MdAutoAwesome, MdMonitorHeart 
} from 'react-icons/md';
import { GiTooth } from 'react-icons/gi';
import { FaTooth, FaPlusSquare, FaShieldAlt, FaBaby } from 'react-icons/fa';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';

const allServices = [
  { id: 'x-ray', name: "X-Ray", icon: <MdScanner />, desc: "Advanced digital imaging for accurate diagnosis." },
  { id: 'teeth-cleaning', name: "Cleaning & Polishing", icon: <MdCleaningServices />, desc: "Professional plaque removal for a healthy smile." },
  { id: 'cosmetic-procedures', name: "Cosmetic Procedures", icon: <MdAutoAwesome />, desc: "Aesthetic enhancements for your perfect smile." },
  { id: 'root-canals', name: "Root Canals", icon: <MdMonitorHeart />, desc: "Pain-free root canal therapy to save natural teeth." },
  { id: 'dental-implants', name: "Dental Implants", icon: <GiTooth />, desc: "Permanent tooth replacement with a natural look." },
  { id: 'orthodontic-treatment', name: "Orthodontic Treatment", icon: <GiTooth />, desc: "Braces and aligners for straight teeth." },
  { id: 'dentures-bridges', name: "Dentures & Bridges", icon: <GiTooth />, desc: "Restoring function and aesthetics effectively." },
  { id: 'extractions', name: "Extractions", icon: <FaPlusSquare />, desc: "Safe and gentle tooth removal procedures." },
  { id: 'fillings', name: "Fillings", icon: <FaTooth />, desc: "High-quality restorations for dental cavities." },
  { id: 'mouth-guards', name: "Mouth Guards", icon: <FaShieldAlt />, desc: "Protection for sports and teeth grinding." },
  { id: 'teeth-whitening', name: "Teeth Whitening", icon: <MdAutoAwesome />, desc: "Brighten your teeth by several shades instantly." },
  { id: 'veneers-crowns', name: "Veneers & Crowns", icon: <GiTooth />, desc: "Custom-made covers for damaged or stained teeth." },
  { id: 'paediatrics', name: "Paediatrics", icon: <FaBaby />, desc: "Specialized dental care for infants and children." },
];

const ServicesPage = () => {
  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-16">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-teal-600 mb-6 transition-colors">
            <HiArrowLeft /> Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter">
            Our Dental <br />
            <span className="text-[#bfa15f]">Specializations</span>
          </h1>
          <p className="text-gray-500 mt-4 max-w-2xl text-lg">
            We provide a wide range of dental services using state-of-the-art technology 
            to ensure the best care for you and your family.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service) => (
            <Link 
              key={service.id} 
              to={`/service/${service.id}`}
              className="group bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="w-16 h-16 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 text-3xl mb-8 group-hover:bg-[#bfa15f] group-hover:text-white transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-teal-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-500 leading-relaxed mb-8">
                  {service.desc}
                </p>
              </div>
              
              <div className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-slate-900 group-hover:text-[#bfa15f] transition-colors">
                Read Details <HiArrowRight className="group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Contact CTA */}
        <div className="mt-20 bg-teal-600 rounded-[3rem] p-12 text-center text-white shadow-2xl shadow-teal-200">
          <h2 className="text-3xl font-bold mb-4">Not sure which treatment you need?</h2>
          <p className="text-teal-100 mb-8 max-w-xl mx-auto">Book a general consultation, and our experts will guide you through the best options for your oral health.</p>
          <Link to="/contact" className="inline-block bg-white text-teal-600 px-10 py-4 rounded-2xl font-bold hover:bg-slate-900 hover:text-white transition-all shadow-lg">
            Get Expert Advice
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ServicesPage;