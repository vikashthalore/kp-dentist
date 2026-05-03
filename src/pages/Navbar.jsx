import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenuAlt3, HiX, HiChevronDown } from 'react-icons/hi';
import { AiOutlinePhone } from 'react-icons/ai';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: "Root Canals", slug: "root-canals" },
    { name: "Teeth Cleaning", slug: "teeth-cleaning" },
    { name: "Dental Implants", slug: "dental-implants" },
    { name: "Orthodontics", slug: "orthodontic-treatment" },
    { name: "Teeth Whitening", slug: "teeth-whitening" },
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  // Helper to check active route
  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${
      scrolled 
      ? 'bg-white/80 backdrop-blur-xl shadow-lg py-3' 
      : 'bg-white py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-teal-600 p-1 rounded-xl group-hover:rotate-12 transition-transform duration-300 shadow-teal-200 shadow-lg">
   <img 
      src="https://images.sharedlynk.shop/kp-dentist/kp-dentist-logo.webp" 
      alt="KP Dentist Logo" 
      className="h-8 w-auto object-contain" // Pehle bina filters ke check karein
      onError={(e) => { e.target.src = 'https://via.placeholder.com/150?text=Logo+Missing' }} // Fallback image
   />
</div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter text-slate-900 leading-none">KP DENTAL</span>
              <span className="text-[10px] font-bold text-[#bfa15f] uppercase tracking-[0.3em]">Care & Clinic</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-1 items-center">
            {navLinks.map((link) => (
              link.name === 'Services' ? (
                <div 
                  key={link.name}
                  className="relative group px-4 py-2"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <Link 
                    to="/services" 
                    className={`flex items-center gap-1 text-sm font-bold transition-all ${
                      isActive('/services') ? 'text-teal-600' : 'text-slate-600 hover:text-teal-600'
                    }`}
                  >
                    Services <HiChevronDown className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </Link>
                  
                  {/* Dropdown Card */}
                  <div className={`absolute top-full left-0 w-64 bg-white shadow-2xl rounded-3xl border border-gray-50 p-3 transition-all duration-300 origin-top-left ${isDropdownOpen ? 'opacity-100 scale-100 visible translate-y-2' : 'opacity-0 scale-95 invisible'}`}>
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/service/${s.slug}`}
                        className="block px-4 py-3 text-sm font-medium text-slate-600 hover:bg-teal-50 hover:text-teal-600 rounded-2xl transition-all"
                      >
                        {s.name}
                      </Link>
                    ))}
                    <Link to="/services" className="block text-center mt-2 p-2 text-xs font-black text-[#bfa15f] border-t border-gray-100 pt-3">VIEW ALL SERVICES</Link>
                  </div>
                </div>
              ) : (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={`px-5 py-2 rounded-full text-sm font-bold transition-all relative group ${
                    isActive(link.path) ? 'text-teal-600 bg-teal-50' : 'text-slate-600 hover:text-teal-600'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-teal-600 rounded-full transition-all duration-300 ${isActive(link.path) ? 'opacity-100' : 'opacity-0'}`}></span>
                </Link>
              )
            ))}
            
            <div className="pl-4">
              <a 
                href="tel:+911234567890" 
                className="flex items-center gap-2 bg-slate-900 text-white px-7 py-3 rounded-2xl text-sm font-bold hover:bg-teal-600 transition-all shadow-xl hover:shadow-teal-200 hover:-translate-y-1"
              >
                <AiOutlinePhone size={18} className="animate-pulse" />
                Book Now
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`p-3 rounded-2xl transition-all ${isOpen ? 'bg-slate-900 text-white rotate-90' : 'bg-slate-100 text-slate-900'}`}
            >
              {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 top-[80px] bg-white transition-all duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block text-3xl font-black tracking-tighter ${isActive(link.path) ? 'text-teal-600' : 'text-slate-800'}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-10">
            <p className="text-gray-400 text-sm font-bold mb-4">EMERGENCY CALL</p>
            <a href="tel:+911234567890" className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <AiOutlinePhone className="text-[#bfa15f]" /> +91 12345 67890
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;