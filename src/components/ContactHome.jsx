import React, { useState } from 'react';
import { FiClock, FiPhone, FiMail, FiMapPin, FiAward, FiUsers, FiCheckCircle, FiShield } from 'react-icons/fi';
import { FaTooth, FaStethoscope } from 'react-icons/fa';

const ContactLocation = () => {
  const [activeTab, setActiveTab] = useState('hours');

  const clinicDetails = {
    name: "KP Dental Care & Clinic",
    tagline: "Your Smile, Our Passion",
    address: "Ff- 119, Siddhi Darshan complex, 100 Feet Rd, opp. Seema hall, Satellite, Jodhpur Village, Ahmedabad, Gujarat 380015",
    phone: "+91 98765 43210",
    email: "contact@kpdentalcare.com",
    rating: 4.9,
    reviews: 23,
    established: "2025",
    features: [
      "Advanced Dental Implants",
      "Painless Root Canal Treatment",
      "Invisalign & Braces Studio",
      "Pediatric (Kids) Dentistry",
      "Digital X-Ray Facility",
      "Sterilized & ISO Certified"
    ],
    workingHours: {
      monday: "09:00 AM - 08:00 PM",
      tuesday: "09:00 AM - 08:00 PM",
      wednesday: "09:00 AM - 08:00 PM",
      thursday: "09:00 AM - 08:00 PM",
      friday: "09:00 AM - 08:00 PM",
      saturday: "09:00 AM - 06:00 PM",
      sunday: "4:00 PM - 08:00 PM (Sunday Only)"
    },
    specialities: [
      { name: "Expert Dentists", icon: FaStethoscope },
      { name: "ISO Certified", icon: FiShield },
      { name: "Modern Equipment", icon: FaTooth },
      { name: "15k+ Happy Smiles", icon: FiUsers }
    ]
  };

  const getTodayHours = () => {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const today = days[new Date().getDay()];
    return clinicDetails.workingHours[today];
  };

  return (
    <section id='location' className='py-24 bg-slate-50 min-h-screen px-4 sm:px-6 lg:px-8'>
      <div className='container mx-auto max-w-7xl'>
        
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl sm:text-6xl font-black mb-4 text-slate-900 tracking-tight'>
            Visit Our <span className="text-teal-600">Clinic</span>
          </h2>
          <p className='text-slate-500 text-lg max-w-2xl mx-auto font-medium'>
            Experience world-class dental care in a comfortable and hygienic environment.
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-10 items-start'>
          
          {/* Left Side - Google Map */}
          <div className='bg-white rounded-[2.5rem] shadow-2xl shadow-teal-100/50 overflow-hidden border border-slate-100'>
            <div className='relative h-[450px] lg:h-[600px] w-full'>
              <iframe
                title="KP Dental Care Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15630.128086360137!2d72.51546222565348!3d23.00859062162579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b8192dc90d7%3A0x6a5edce2a60e4066!2sKP%20Dental%20care!5e0!3m2!1sen!2sin!4v1777818599892!5m2!1sen!2sin"
                className='w-full h-full border-0 grayscale-[0.3] hover:grayscale-0 transition-all duration-700'
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            
            <div className='p-6 bg-teal-600 text-white flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <div className='p-3 bg-white/20 rounded-2xl'><FiMapPin className='w-6 h-6' /></div>
                <div>
                    <p className='text-xs font-bold uppercase tracking-widest text-teal-100'>Navigating to us?</p>
                    <p className='font-bold'>Get Live Directions</p>
                </div>
              </div>
              <button 
                onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(clinicDetails.address)}`, '_blank')}
                className='bg-white text-teal-700 px-6 py-3 rounded-2xl font-bold hover:bg-teal-50 transition-all shadow-lg'
              >
                Open Maps
              </button>
            </div>
          </div>

          {/* Right Side - Details */}
          <div className='space-y-8'>
            <div className='bg-white rounded-[2.5rem] shadow-xl p-8 border border-slate-100'>
              <div className='flex justify-between items-start mb-6'>
                <div>
                    <h3 className='text-3xl font-bold text-slate-900'>{clinicDetails.name}</h3>
                    <p className='text-[#bfa15f] font-bold tracking-widest uppercase text-xs mt-1'>{clinicDetails.tagline}</p>
                </div>
                <div className='bg-teal-50 px-4 py-2 rounded-2xl flex items-center gap-2'>
                    <FiAward className='text-teal-600' />
                    <span className='font-bold text-teal-900'>{clinicDetails.rating}</span>
                </div>
              </div>
              
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <InfoItem icon={<FiMapPin />} label="Address" value={clinicDetails.address} />
                <InfoItem icon={<FiPhone />} label="Phone" value={clinicDetails.phone} isLink={`tel:${clinicDetails.phone}`} />
                <InfoItem icon={<FiMail />} label="Email" value={clinicDetails.email} isLink={`mailto:${clinicDetails.email}`} />
                <InfoItem icon={<FiClock />} label="Today's Status" value={getTodayHours()} isHighlight />
              </div>
            </div>

            {/* Specialities Grid */}
            <div className='grid grid-cols-2 gap-4'>
              {clinicDetails.specialities.map((item, index) => (
                <div key={index} className='bg-white border border-slate-100 rounded-3xl p-5 flex items-center gap-4 hover:shadow-lg transition-all group'>
                  <div className='w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-teal-600 text-xl group-hover:bg-teal-600 group-hover:text-white transition-all'>
                    <item.icon />
                  </div>
                  <p className='font-bold text-slate-700 text-sm leading-tight'>{item.name}</p>
                </div>
              ))}
            </div>

            {/* Tabs Section */}
            <div className='bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-slate-100'>
              <div className='flex p-2 gap-2 bg-slate-50'>
                <TabButton 
                    active={activeTab === 'hours'} 
                    onClick={() => setActiveTab('hours')} 
                    icon={<FiClock />} 
                    label="Working Hours" 
                />
                <TabButton 
                    active={activeTab === 'features'} 
                    onClick={() => setActiveTab('features')} 
                    icon={<FiCheckCircle />} 
                    label="Clinic Features" 
                />
              </div>

              <div className='p-8'>
                {activeTab === 'hours' ? (
                  <div className='space-y-4'>
                    {Object.entries(clinicDetails.workingHours).map(([day, hours]) => (
                      <div key={day} className='flex justify-between items-center py-2 border-b border-slate-50 last:border-0'>
                        <span className='capitalize font-bold text-slate-600'>{day}</span>
                        <span className={`font-medium ${day === 'sunday' ? 'text-red-500' : 'text-slate-500'}`}>{hours}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {clinicDetails.features.map((feature, index) => (
                      <div key={index} className='flex items-center gap-3 p-3 bg-teal-50/50 rounded-2xl border border-teal-50'>
                        <FiCheckCircle className='text-teal-600 flex-shrink-0' />
                        <span className='text-slate-700 font-medium text-sm'>{feature}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <button className='w-full bg-slate-900 text-white font-bold py-6 px-6 rounded-[2rem] hover:bg-teal-600 transition-all duration-500 shadow-xl flex items-center justify-center gap-3 group'>
              <FiPhone className="group-hover:animate-bounce" />
              Book An Appointment Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper Components for cleaner code
const InfoItem = ({ icon, label, value, isLink, isHighlight }) => (
  <div className='flex items-start gap-4 p-2'>
    <div className='text-teal-600 mt-1 text-lg'>{icon}</div>
    <div>
      <p className='text-[10px] uppercase font-black tracking-widest text-slate-400'>{label}</p>
      {isLink ? (
        <a href={isLink} className='text-slate-700 font-bold hover:text-teal-600'>{value}</a>
      ) : (
        <p className={`font-bold ${isHighlight ? 'text-teal-600' : 'text-slate-700'}`}>{value}</p>
      )}
    </div>
  </div>
);

const TabButton = ({ active, onClick, icon, label }) => (
  <button
    onClick={onClick}
    className={`flex-1 py-4 px-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all ${
      active ? 'bg-white text-teal-600 shadow-md' : 'text-slate-500 hover:text-teal-600'
    }`}
  >
    {icon} {label}
  </button>
);

export default ContactLocation;