import React, { useState } from 'react';
import { AiOutlineWhatsApp, AiOutlineUser, AiOutlineMail, AiOutlineMessage } from 'react-icons/ai';
import { MdOutlineMedicalServices } from 'react-icons/md';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // WhatsApp Number (Apna number yahan dalein bina '+' ke, jaise 91XXXXXXXXXX)
    const phoneNumber = "911234567890"; 
    
    // WhatsApp Message Format
    const text = `*New Appointment Request*%0A%0A` +
                 `*Name:* ${formData.name}%0A` +
                 `*Email:* ${formData.email}%0A` +
                 `*Service:* ${formData.service}%0A` +
                 `*Message:* ${formData.message}`;

    // Redirect to WhatsApp API
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${text}`, '_blank');
  };

  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16">
        
        {/* Text Side */}
        <div className="lg:w-1/2">
          <h2 className="text-teal-600 font-bold uppercase tracking-widest text-sm mb-4">Book Now</h2>
          <h1 className="text-5xl font-bold text-slate-900 mb-6">Let's Get Your <br /><span className="text-[#bfa15f]">Smile Back.</span></h1>
          <p className="text-gray-500 text-lg mb-8">Fill out the form to consult with our experts. Your details will be sent directly to our clinic's WhatsApp for instant response.</p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-teal-600 bg-white p-3 rounded-xl shadow-sm"><AiOutlineWhatsApp size={24}/></div>
              <p className="font-semibold text-slate-700">Quick Response on WhatsApp</p>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="lg:w-1/2 bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl border border-gray-50">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <AiOutlineUser className="absolute top-4 left-4 text-gray-400" />
              <input 
                type="text" name="name" placeholder="Your Full Name" required
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-teal-500 outline-none"
                onChange={handleChange}
              />
            </div>

            <div className="relative">
              <AiOutlineMail className="absolute top-4 left-4 text-gray-400" />
              <input 
                type="email" name="email" placeholder="Your Email Address" required
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-teal-500 outline-none"
                onChange={handleChange}
              />
            </div>

            <div className="relative">
              <MdOutlineMedicalServices className="absolute top-4 left-4 text-gray-400" />
              <select 
                name="service" required
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-teal-500 outline-none text-gray-500"
                onChange={handleChange}
              >
                <option value="">Select Service</option>
                <option value="Root Canal">Root Canal</option>
                <option value="Teeth Whitening">Teeth Whitening</option>
                <option value="Dental Implants">Dental Implants</option>
                <option value="Checkup">General Checkup</option>
              </select>
            </div>

            <div className="relative">
              <AiOutlineMessage className="absolute top-4 left-4 text-gray-400" />
              <textarea 
                name="message" placeholder="How can we help you?" rows="4"
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-teal-500 outline-none"
                onChange={handleChange}
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-slate-900 text-white py-5 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-teal-700 transition-all shadow-lg"
            >
              <AiOutlineWhatsApp size={24} />
              Book Appointment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;