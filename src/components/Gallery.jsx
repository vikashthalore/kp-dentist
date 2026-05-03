import React, { useState } from 'react';
import { AiOutlineExpandAlt, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Gallery = () => {
  // Modal ke liye state
  const [selectedImg, setSelectedImg] = useState(null);

  const images = [
    "https://images.unsplash.com/photo-1629909605125-58da3181444d?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1445527815219-ecbfec67492e?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600",
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <div className="mb-16">
          <h2 className="text-teal-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">Our Clinic</h2>
          <h1 className="text-4xl font-bold text-slate-900">Step Into a Space of Healing</h1>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {images.map((img, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedImg(img)} // Click karne par image set hogi
              className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer shadow-lg"
            >
              <img 
                src={img} 
                alt={`Clinic ${index}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <AiOutlineExpandAlt className="text-white text-4xl" />
              </div>
            </div>
          ))}
        </div>

        {/* View More Button (Gallery Page ke liye) */}
        <Link 
          to="/gallery" 
          className="inline-block border-2 border-slate-900 text-slate-900 px-10 py-3 rounded-full font-bold hover:bg-slate-900 hover:text-white transition-all duration-300"
        >
          View Full Gallery
        </Link>
      </div>

      {/* Lightbox Modal (Sirf tab dikhega jab photo click hogi) */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImg(null)} // Bahar click karne par band
        >
          <button 
            className="absolute top-10 right-10 text-white text-4xl hover:text-teal-400"
            onClick={() => setSelectedImg(null)}
          >
            <AiOutlineClose />
          </button>
          
          <img 
            src={selectedImg} 
            alt="Enlarged" 
            className="max-w-full max-h-[80vh] rounded-xl shadow-2xl animate-in zoom-in duration-300"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;