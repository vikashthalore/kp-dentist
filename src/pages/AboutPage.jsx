import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowLeft, HiOutlineBadgeCheck, HiOutlineUserGroup, HiOutlineLightBulb } from 'react-icons/hi';
import { AiOutlineSafetyCertificate } from 'react-icons/ai';

const AboutPage = () => {
  const stats = [
    { label: "Years Experience", value: "15+", icon: <HiOutlineBadgeCheck className="text-teal-600" /> },
    { label: "Happy Patients", value: "10k+", icon: <HiOutlineUserGroup className="text-teal-600" /> },
    { label: "Expert Doctors", value: "05+", icon: <HiOutlineLightBulb className="text-teal-600" /> },
    { label: "Safety Awards", value: "12+", icon: <AiOutlineSafetyCertificate className="text-teal-600" /> },
  ];

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-20">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-teal-600 mb-6 transition-all">
            <HiArrowLeft /> Back to Home
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.9]">
                Crafting Smiles <br />
                <span className="text-[#bfa15f]">With Passion.</span>
              </h1>
              <p className="text-gray-500 mt-8 text-lg leading-relaxed max-w-lg">
                KP Dental Care has been a cornerstone of dental excellence for over a decade. 
                Our mission is to provide world-class oral healthcare that is accessible, 
                painless, and personalized for every patient.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-teal-50 rounded-full -z-10 animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800" 
                alt="Clinic Interior" 
                className="rounded-[3rem] shadow-2xl border-8 border-white object-cover h-[400px] w-full"
              />
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {stats.map((stat, i) => (
            <div key={i} className="bg-slate-50 p-8 rounded-[2.5rem] text-center hover:bg-white hover:shadow-xl transition-all duration-500 group border border-transparent hover:border-slate-100">
              <div className="text-4xl mb-4 flex justify-center group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-black text-slate-900">{stat.value}</h3>
              <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Meet the Doctor Section */}
        <div className="bg-slate-900 rounded-[4rem] p-8 md:p-20 overflow-hidden relative mb-32">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#bfa15f]/10 skew-x-12 translate-x-20"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="order-2 lg:order-1">
              <h2 className="text-[#bfa15f] font-bold tracking-[0.3em] uppercase text-sm mb-4">Chief Surgeon</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Dr. Kuldeep Patel</h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                With over 15 years of experience in Implantology and Cosmetic Dentistry, Dr. Patel 
                has transformed thousands of smiles. He believes in using technology to make 
                dentistry comfortable and anxiety-free.
              </p>
              <ul className="space-y-4 mb-10">
                {['MDS - Oral & Maxillofacial Surgery', 'Member of International Congress of Implantologists', 'Gold Medalist in Aesthetic Dentistry'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-200 font-medium">
                    <span className="w-2 h-2 bg-teal-500 rounded-full"></span> {item}
                  </li>
                ))}
              </ul>
              <button className="bg-white text-slate-900 px-10 py-4 rounded-2xl font-bold hover:bg-[#bfa15f] hover:text-white transition-all shadow-lg">
                View Full Profile
              </button>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="aspect-square bg-slate-800 rounded-[3rem] overflow-hidden border-4 border-slate-700">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71f1539127?q=80&w=800" 
                  alt="Dr. Patel" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Our Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-12 bg-teal-600 rounded-[3rem] text-white">
            <h4 className="text-2xl font-bold mb-4">Our Vision</h4>
            <p className="text-teal-50 leading-relaxed opacity-80 text-lg">
              To be the most trusted dental care provider globally by redefining patient 
              experience through innovation and empathy.
            </p>
          </div>
          <div className="p-12 bg-[#bfa15f] rounded-[3rem] text-white">
            <h4 className="text-2xl font-bold mb-4">Our Mission</h4>
            <p className="text-amber-50 leading-relaxed opacity-80 text-lg">
              To educate and provide high-quality dental treatments that ensure 
              lifelong oral health for every individual we serve.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;