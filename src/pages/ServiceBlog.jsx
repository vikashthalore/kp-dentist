import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { serviceDetails } from '../data/ServiceData';
import { HiArrowLeft, HiCheckCircle } from 'react-icons/hi';
import { AiOutlineWhatsApp } from 'react-icons/ai';

const ServiceBlog = () => {
  const { serviceId } = useParams();
  const service = serviceDetails[serviceId];

  if (!service) {
    return <div className="py-40 text-center">Service not found!</div>;
  }

  return (
    <div className="pt-24 pb-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-teal-600 mb-8 transition-colors">
          <HiArrowLeft /> Back to Home
        </Link>

        {/* Hero Image */}
        <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl mb-12">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
        </div>

        {/* Content */}
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{service.title}</h1>
        
        <div className="prose prose-lg text-gray-600 mb-10">
          <p className="leading-relaxed text-xl">{service.content}</p>
        </div>

        {/* Benefits Box */}
        <div className="bg-teal-50 border border-teal-100 rounded-3xl p-8 mb-12">
          <h3 className="text-xl font-bold text-teal-900 mb-6">Key Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 text-teal-800 font-medium">
                <HiCheckCircle className="text-teal-600 text-xl" />
                {benefit}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-slate-900 rounded-3xl p-10 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Want to book an appointment for {service.title}?</h2>
          <p className="text-gray-400 mb-8">Consult with our expert dentists today for a personalized care plan.</p>
          <button className="bg-[#bfa15f] hover:bg-[#a3894e] text-white px-10 py-4 rounded-xl font-bold flex items-center gap-3 mx-auto transition-all">
            <AiOutlineWhatsApp size={24} />
            Consult on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceBlog;