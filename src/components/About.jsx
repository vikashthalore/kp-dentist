import React from 'react';
import { AiOutlineSafetyCertificate, AiOutlineHeart } from 'react-icons/ai';
import { MdOutlineMedicalServices } from 'react-icons/md';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Image Side */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=2070" 
                alt="Our Clinic" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Gold Accent Box */}
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#bfa15f] rounded-3xl -z-0 opacity-20"></div>
            
            {/* Experience Badge */}
            <div className="absolute top-10 -right-5 z-20 bg-white p-6 rounded-2xl shadow-xl border-l-4 border-teal-600">
              <p className="text-3xl font-bold text-slate-900">5+ Field</p>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Years of <br /> Excellence</p>
            </div>
          </div>

          {/* Right: Text Side */}
          <div className="lg:w-1/2">
            <h2 className="text-teal-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">
              Why Choose KP Dental Care
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              A Tradition of <span className="text-[#bfa15f]">Expertise</span> & Gentle Care.
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              At KP Dental Care, we believe everyone deserves a healthy smile. Our clinic is equipped with the latest technology to ensure your treatments are precise, painless, and permanent.
            </p>

            <div className="space-y-6">
              {[
                { icon: <AiOutlineSafetyCertificate />, title: "Certified Professionals", desc: "Our team consists of highly qualified and experienced doctors." },
                { icon: <MdOutlineMedicalServices />, title: "Modern Technology", desc: "Using advanced 3D imaging and digital tools for diagnosis." },
                { icon: <AiOutlineHeart />, title: "Patient Comfort", desc: "We prioritize a relaxing environment for anxiety-free visits." }
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center text-teal-600 text-2xl">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;