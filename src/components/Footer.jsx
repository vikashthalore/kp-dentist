import React from 'react'
import { Link } from 'react-router-dom'
import { 
  FiMapPin, FiPhone, FiMail, FiClock, 
  FiFacebook, FiInstagram, FiTwitter, FiYoutube,
  FiArrowUp, FiMessageCircle, FiShield, FiCheckCircle
} from 'react-icons/fi'
import { FaTooth } from 'react-icons/fa'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' }
  ]

  const services = [
    'Root Canal Treatment',
    'Dental Implants',
    'Teeth Whitening',
    'Orthodontics (Braces)',
    'Cosmetic Dentistry',
    'Pediatric Dentistry'
  ]

  return (
    <footer className='relative bg-slate-900 pt-20 pb-8 text-slate-300 overflow-hidden'>
      {/* Decorative Top Border with Brand Colors */}
      <div className='absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-500 via-[#bfa15f] to-teal-400'></div>
      
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className='absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#bfa15f] text-white p-4 rounded-2xl shadow-xl hover:bg-teal-600 transition-all duration-500 hover:-translate-y-1'
      >
        <FiArrowUp className='w-6 h-6' />
      </button>

      <div className='container mx-auto px-6 lg:px-8 max-w-7xl'>
        
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16'>
          
          {/* Logo & Brand Section */}
          <div className='space-y-6'>
            <div className='flex items-center gap-3'>
              <div className='bg-teal-600 p-3 rounded-2xl shadow-lg shadow-teal-900/50'>
                <FaTooth className='w-7 h-7 text-white' />
              </div>
              <div>
                <h2 className='text-2xl font-black text-white tracking-tighter'>
                  KP DENTAL
                </h2>
                <p className='text-[10px] uppercase tracking-[0.3em] text-[#bfa15f] font-bold'>Care & Clinic</p>
              </div>
            </div>
            
            <p className='text-slate-400 leading-relaxed text-sm'>
              Providing world-class dental solutions with a touch of care. 
              Our clinic is equipped with modern technology to ensure a 
              painless and professional experience.
            </p>
            
            {/* Social Links */}
            <div className='flex gap-4 pt-2'>
              {[FiFacebook, FiInstagram, FiTwitter, FiYoutube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className='bg-slate-800 p-3 rounded-xl text-slate-400 hover:text-white hover:bg-teal-600 transition-all duration-300'
                >
                  <Icon className='w-5 h-5' />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className='space-y-6'>
            <h3 className='text-lg font-bold text-white flex items-center gap-2'>
              Navigation
              <span className='w-8 h-px bg-[#bfa15f]'></span>
            </h3>
            <ul className='space-y-4'>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className='text-slate-400 hover:text-teal-400 transition-all flex items-center gap-2 group'
                  >
                    <div className='w-1 h-1 bg-teal-500 rounded-full group-hover:w-3 transition-all'></div>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className='space-y-6'>
            <h3 className='text-lg font-bold text-white flex items-center gap-2'>
              Specialities
              <span className='w-8 h-px bg-[#bfa15f]'></span>
            </h3>
            <ul className='space-y-4'>
              {services.map((service, index) => (
                <li key={index} className='flex items-center gap-3 text-slate-400 hover:text-[#bfa15f] transition-colors cursor-pointer group'>
                  <FiCheckCircle className='text-teal-600 group-hover:scale-125 transition-transform' />
                  <span className='text-sm'>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className='space-y-6'>
            <h3 className='text-lg font-bold text-white flex items-center gap-2'>
              Reach Us
              <span className='w-8 h-px bg-[#bfa15f]'></span>
            </h3>
            <div className='space-y-5'>
              <div className='flex items-start gap-4'>
                <div className='bg-slate-800 p-3 rounded-xl text-teal-500'>
                  <FiMapPin />
                </div>
                <p className='text-sm text-slate-400 leading-snug'>
                  123, Health Street, City Center, <br /> Ahmedabad, GJ 380015
                </p>
              </div>
              
              <div className='flex items-center gap-4'>
                <div className='bg-slate-800 p-3 rounded-xl text-[#bfa15f]'>
                  <FiPhone />
                </div>
                <a href='tel:+919876543210' className='text-sm text-slate-400 hover:text-white font-bold transition-colors'>
                  +91 98765 43210
                </a>
              </div>
              
              <div className='flex items-start gap-4'>
                <div className='bg-slate-800 p-3 rounded-xl text-teal-500'>
                  <FiClock />
                </div>
                <div>
                  <p className='text-xs text-slate-500 uppercase font-bold tracking-wider'>Emergency Hours</p>
                  <p className='text-sm text-slate-300'>Sun: 10:00 AM - 02:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter / Booking CTA */}
        <div className='bg-gradient-to-r from-teal-900/50 to-slate-800/50 border border-slate-700/50 rounded-[2.5rem] p-8 md:p-12 mb-12'>
          <div className='grid md:grid-cols-2 gap-8 items-center'>
            <div className='text-center md:text-left'>
              <h3 className='text-2xl font-bold text-white mb-2 flex items-center justify-center md:justify-start gap-3'>
                <FiShield className='text-[#bfa15f]' />
                Stay Updated with Dental Tips
              </h3>
              <p className='text-slate-400'>Subscribe to our newsletter for oral health care advice.</p>
            </div>
            <div className='flex flex-col sm:flex-row gap-3'>
              <input
                type='email'
                placeholder='Enter your email address'
                className='flex-1 px-6 py-4 border border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 bg-slate-900 text-white'
              />
              <button className='bg-teal-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-teal-500 transition-all duration-300 shadow-lg shadow-teal-900/20'>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className='border-t border-slate-800 pt-8'>
          <div className='flex flex-col lg:flex-row justify-between items-center gap-6'>
            <p className='text-slate-500 text-sm text-center lg:text-left'>
              © {currentYear} <span className='text-slate-300 font-bold'>KP Dental Care & Clinic</span>. All rights reserved. 
              <br className='md:hidden' /> Designed for Excellence.
            </p>
            
            <div className='flex flex-wrap justify-center gap-6 text-xs font-bold uppercase tracking-widest text-slate-500'>
              <a href='#' className='hover:text-teal-500 transition-colors'>Privacy</a>
              <a href='#' className='hover:text-teal-500 transition-colors'>Terms</a>
              <a href='#' className='hover:text-teal-500 transition-colors'>Sitemap</a>
            </div>
            
            <div className='flex items-center gap-3 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700'>
              <span className='text-slate-500 text-[10px] uppercase font-bold tracking-tighter'>ISO 9001 Certified</span>
              <FiCheckCircle className='text-teal-500' />
            </div>
          </div>
        </div>

        {/* WhatsApp Floating Button */}
        <a
          href='https://wa.me/919876543210'
          target='_blank'
          rel='noopener noreferrer'
          className='fixed bottom-8 right-8 bg-[#25D366] text-white p-5 rounded-3xl shadow-2xl hover:scale-110 transition-all duration-500 z-50 group flex items-center gap-2'
        >
          <FiMessageCircle className='w-6 h-6' />
          <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold whitespace-nowrap text-sm'>
            Quick Appointment
          </span>
        </a>
      </div>
    </footer>
  )
}

export default Footer