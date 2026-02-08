import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Button from '../components/UI/Button';

// Helper to generate paths since you uploaded them to public/PIC/
const galleryImages = [
  { id: 'organizers', src: '/PIC/Organizers.jpeg', title: 'The Organizing Team', desc: 'The brains behind SCH 2026.' },
  // Generating Team 1-10
  ...Array.from({ length: 10 }, (_, i) => ({
    id: `team${i + 1}`,
    src: `/PIC/Team${i + 1}.jpeg`,
    title: `Winning Team ${i + 1}`,
    desc: 'Outstanding performance in the hackathon.'
  }))
];

const Gallery = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-24 min-h-screen px-6 pb-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button 
            onClick={() => navigate('/')}
            className="p-2 rounded-full bg-white/5 text-slate-300 hover:text-lime-400 hover:bg-white/10 transition-all"
          >
            <ArrowLeft />
          </button>
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Hall of <span className="text-lime-400">Fame</span>
          </h1>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((item) => (
            <div key={item.id} className="group relative rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:border-lime-500/50 transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 relative z-10 bg-[#020817]">
                <h3 className="text-xl font-bold text-lime-400">{item.title}</h3>
                <p className="text-slate-400 text-sm mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;