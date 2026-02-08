import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageCarousel = ({ images, onImageClick, autoSlide = true, autoSlideInterval = 3000 }) => {
  const [curr, setCurr] = useState(0);

  const prev = () => setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));
  const next = () => setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [curr]);

  return (
    <div className="relative overflow-hidden group w-full max-w-3xl mx-auto rounded-xl shadow-[0_0_20px_rgba(163,230,53,0.3)] border border-lime-500/30 bg-slate-900/50 backdrop-blur-sm">
      
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {images.map((img, i) => (
          <div 
            key={i} 
            className="min-w-full flex-shrink-0 relative cursor-pointer"
            onClick={() => onImageClick(img.id)}
          >
            {/* CHANGE: Added 'object-top' here.
               This aligns the image to the top edge, so if cropping happens, 
               it cuts the bottom, not the top/center.
            */}
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-64 sm:h-80 md:h-96 object-cover object-top hover:opacity-90 transition-opacity"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <button 
          onClick={(e) => { e.stopPropagation(); prev(); }} 
          className="p-2 rounded-full bg-black/50 text-white hover:bg-lime-500 hover:text-black transition-all pointer-events-auto backdrop-blur-sm"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={(e) => { e.stopPropagation(); next(); }} 
          className="p-2 rounded-full bg-black/50 text-white hover:bg-lime-500 hover:text-black transition-all pointer-events-auto backdrop-blur-sm"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 right-0 left-0 flex items-center justify-center gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`transition-all w-2 h-2 rounded-full shadow-sm ${
              curr === i ? "bg-lime-400 p-1.5" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;