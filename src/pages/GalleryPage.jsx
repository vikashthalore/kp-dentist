import React, { useState } from 'react';
import { AiOutlineExpandAlt, AiOutlineCamera } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';

const GalleryPage = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Clinic', 'Surgery', 'Technology'];

  const photos = [
    { id: 1, cat: 'Clinic', url: 'https://images.unsplash.com/photo-1629909605125-58da3181444d?q=80&w=600' },
    { id: 2, cat: 'Surgery', url: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=600' },
    { id: 3, cat: 'Technology', url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=600' },
    { id: 4, cat: 'Clinic', url: 'https://images.unsplash.com/photo-1445527815219-ecbfec67492e?q=80&w=600' },
    { id: 5, cat: 'Surgery', url: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=600' },
    { id: 6, cat: 'Technology', url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=600' },
  ];

  const filteredPhotos = filter === 'All' ? photos : photos.filter(p => p.cat === filter);

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div>
            <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-teal-600 mb-4 transition-all">
              <HiArrowLeft /> Back to Home
            </Link>
            <h1 className="text-5xl font-black text-slate-900 tracking-tighter">
              Our <span className="text-[#bfa15f]">Visual</span> Journey
            </h1>
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-2 bg-slate-100 p-1.5 rounded-2xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  filter === cat 
                  ? 'bg-white text-teal-600 shadow-md' 
                  : 'text-gray-500 hover:text-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div 
              key={photo.id} 
              className="group relative h-80 rounded-[2rem] overflow-hidden bg-slate-100 shadow-lg border-4 border-white"
            >
              <img 
                src={photo.url} 
                alt={photo.cat} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center backdrop-blur-sm">
                <div className="bg-white/20 p-4 rounded-full mb-3">
                  <AiOutlineExpandAlt className="text-white text-3xl" />
                </div>
                <span className="text-white font-bold uppercase tracking-[0.2em] text-xs">
                  {photo.cat}
                </span>
              </div>

              {/* Category Tag (Bottom Left) */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold text-slate-800 uppercase tracking-widest shadow-sm">
                {photo.cat}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 p-12 rounded-[3rem] bg-slate-900 text-center relative overflow-hidden">
          <AiOutlineCamera className="absolute -top-10 -right-10 text-white/5 text-[15rem] rotate-12" />
          <h2 className="text-3xl font-bold text-white mb-4">Want to see our clinic in person?</h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">Visit us for a consultation and experience our world-class dental facilities firsthand.</p>
          <Link to="/contact" className="inline-block bg-[#bfa15f] text-white px-10 py-4 rounded-2xl font-bold hover:bg-white hover:text-slate-900 transition-all">
            Book a Visit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;