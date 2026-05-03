import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { 
  FiChevronLeft, FiChevronRight, FiCalendar, 
  FiThumbsUp, FiMessageCircle, FiAward, FiX 
} from "react-icons/fi";
import { FaQuoteLeft, FaCheckCircle, FaStar, FaShareAlt } from "react-icons/fa";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: "Neha Gupta",
      location: "Ahmedabad",
      rating: 5,
      text: "I had the most amazing experience at KP Dental. Dr. performed my root canal and it was completely painless! The staff is very friendly and the clinic is spotless.",
      date: "2 weeks ago",
      treatment: "Root Canal Treatment",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      verified: true,
      helpful: 45,
    },
    {
      id: 2,
      name: "Rahul Verma",
      location: "Satellite",
      rating: 5,
      text: "Got my smile makeover done with veneers. The transformation is unbelievable! The results exceeded my expectations. My confidence has improved so much.",
      date: "1 month ago",
      treatment: "Smile Makeover",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      verified: true,
      helpful: 38,
    },
    {
        id: 3,
        name: "Sneha Patel",
        location: "Bodakdev",
        rating: 4,
        text: "Very professional clinic with modern equipment. I took my daughter for braces and the doctor was very patient with her. Highly recommended!",
        date: "3 weeks ago",
        treatment: "Braces Treatment",
        image: "https://randomuser.me/api/portraits/women/3.jpg",
        verified: true,
        helpful: 52,
      },
  ];

  const nextTestimonial = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const averageRating = (testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1);

  return (
    <section id="testimonials" className="py-24 bg-slate-950 text-white overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 px-4 py-2 rounded-full mb-6">
            <FiMessageCircle className="w-4 h-4 text-teal-500" />
            <span className="text-teal-500 font-bold tracking-widest text-[10px] uppercase">Patient Stories</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            What Our <span className="text-[#bfa15f]">Patients Say</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto italic">
            "Your smile is our success." Read the real experiences of people who trusted KP Dental.
          </p>
        </motion.div>

        {/* Rating Summary Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-[2.5rem] p-8 mb-16"
        >
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center md:text-left border-b md:border-b-0 md:border-r border-slate-800 pb-6 md:pb-0">
              <div className="text-6xl font-black text-[#bfa15f]">{averageRating}</div>
              <div className="flex justify-center md:justify-start gap-1 my-3">
                {[1,2,3,4,5].map(s => <FaStar key={s} className="text-teal-500" />)}
              </div>
              <p className="text-slate-500 text-sm font-medium uppercase tracking-widest">Verified Google Reviews</p>
            </div>

            <div className="space-y-3 px-0 md:px-6">
              {[5,4,3].map(rating => (
                <div key={rating} className="flex items-center gap-4">
                  <span className="text-xs font-bold w-4">{rating}</span>
                  <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-teal-500" style={{ width: rating === 5 ? '85%' : '15%' }}></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-around items-center bg-slate-800/30 py-6 rounded-3xl">
              <div className="text-center">
                <FiAward className="w-6 h-6 text-[#bfa15f] mx-auto mb-2" />
                <p className="text-lg font-bold">99%</p>
                <p className="text-[10px] text-slate-500 uppercase">Success</p>
              </div>
              <div className="text-center">
                <FiThumbsUp className="w-6 h-6 text-teal-500 mx-auto mb-2" />
                <p className="text-lg font-bold">1k+</p>
                <p className="text-[10px] text-slate-500 uppercase">Happy Smiles</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Featured Testimonial Carousel */}
        <div className="relative mb-20 group">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 rounded-[3rem] p-8 md:p-16 relative shadow-2xl"
            >
              <FaQuoteLeft className="absolute top-10 left-10 text-teal-500/10 text-8xl" />
              
              <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
                <div className="relative shrink-0">
                  <div className="w-32 h-32 rounded-full border-4 border-[#bfa15f] p-1 overflow-hidden">
                    <img src={testimonials[currentIndex].image} alt="Patient" className="w-full h-full object-cover rounded-full" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-teal-500 p-2 rounded-full border-4 border-slate-900">
                    <FaCheckCircle className="text-white w-4 h-4" />
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <FaStar key={i} className="text-[#bfa15f] text-xl" />
                    ))}
                  </div>
                  <p className="text-xl md:text-2xl italic leading-relaxed text-slate-200 mb-8">
                    "{testimonials[currentIndex].text}"
                  </p>
                  <div>
                    <h4 className="text-2xl font-bold text-white">{testimonials[currentIndex].name}</h4>
                    <p className="text-teal-500 font-bold uppercase tracking-widest text-[10px] mt-1">
                      {testimonials[currentIndex].location} • {testimonials[currentIndex].treatment}
                    </p>
                  </div>
                </div>
              </div>

              {/* Nav Buttons */}
              <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
                <button onClick={prevTestimonial} className="p-4 rounded-2xl bg-slate-900/80 text-white pointer-events-auto hover:bg-teal-600 transition-all border border-slate-700">
                  <FiChevronLeft size={24} />
                </button>
                <button onClick={nextTestimonial} className="p-4 rounded-2xl bg-slate-900/80 text-white pointer-events-auto hover:bg-teal-600 transition-all border border-slate-700">
                  <FiChevronRight size={24} />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Grid for all testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedTestimonial(t)}
              className="bg-slate-900 p-8 rounded-[2rem] border border-slate-800 cursor-pointer hover:border-[#bfa15f]/30 transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <img src={t.image} className="w-12 h-12 rounded-full border-2 border-teal-500" />
                <div>
                  <h5 className="font-bold text-white">{t.name}</h5>
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, i) => <FaStar key={i} className="text-[#bfa15f] text-[10px]" />)}
                  </div>
                </div>
              </div>
              <p className="text-slate-400 text-sm line-clamp-3 italic">"{t.text}"</p>
              <div className="mt-6 pt-6 border-t border-slate-800 flex justify-between items-center">
                <span className="text-[10px] text-teal-600 font-black uppercase">{t.treatment}</span>
                <FaShareAlt className="text-slate-600 hover:text-white cursor-pointer" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedTestimonial && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/90 backdrop-blur-md"
            onClick={() => setSelectedTestimonial(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
              className="bg-slate-900 border border-slate-700 rounded-[3rem] max-w-lg w-full p-10 relative"
              onClick={e => e.stopPropagation()}
            >
              <button onClick={() => setSelectedTestimonial(null)} className="absolute top-6 right-6 text-slate-400 hover:text-white">
                <FiX size={24} />
              </button>
              <div className="text-center">
                <img src={selectedTestimonial.image} className="w-20 h-20 rounded-full mx-auto border-4 border-[#bfa15f] mb-4" />
                <h3 className="text-2xl font-bold">{selectedTestimonial.name}</h3>
                <p className="text-teal-500 text-xs font-bold uppercase mb-6">{selectedTestimonial.treatment}</p>
                <FaQuoteLeft className="mx-auto text-teal-500/20 text-4xl mb-4" />
                <p className="text-slate-300 italic text-lg leading-relaxed mb-8">"{selectedTestimonial.text}"</p>
                <button className="w-full bg-[#bfa15f] text-slate-900 py-4 rounded-2xl font-black hover:bg-white transition-all uppercase tracking-widest text-sm">
                  Book Appointment
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}