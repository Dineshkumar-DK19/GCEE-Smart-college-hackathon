import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import bannerImg from '../assets/banner.png';
import hackathonLogo from '../assets/HackathonLogo.png';
import BlurText from './UI/BlurText';
import { TypewriterEffect } from './UI/TypewriterEffect';
import FlippingLogo from './UI/FlippingLogo'; 
import LightRays from './UI/LightRays'; 
import HomeLamp from './UI/HomeLamp'; 

const Home = () => {
  const navigate = useNavigate();

  const hackathonTitle = [
    { text: "SMART", className: "text-lime-400" },
    { text: "CAMPUS", className: "text-lime-400" },
    { text: "HACKATHON", className: "text-lime-400" },
    { text: "'", className: "text-lime-400" },
    { text: "26", className: "text-white" },
  ];

  return (
    <section className="flex min-h-screen flex-col items-center justify-start pt-24 px-4 gap-y-3 md:gap-y-5 relative overflow-hidden">

      {/* 1. HOME LAMP */}
      <div className="absolute top-[75px] left-0 w-full h-full z-0 pointer-events-none">
        <HomeLamp />
      </div>

      {/* 2. FLIPPING LOGO */}
      <div className="relative z-10">
        <FlippingLogo 
          frontImage={bannerImg} 
          backImage={hackathonLogo} 
        />
      </div>

      {/* 3. COLLEGE NAME */}
      <div className="w-full px-2 md:px-0 relative z-10">
        <BlurText
          text="Government College of Engineering, Erode"
          delay={150}
          animateBy="words"
          direction="top"
          className="
            flex justify-center gap-x-1.5 flex-wrap 
            text-sm sm:text-xl md:text-3xl lg:text-4xl
            font-bold text-center text-white/90 leading-snug
          "
        />
      </div>

      {/* 4. HACKATHON TITLE BOX */}
      <div className="relative z-10 mt-2">
        <div 
          className="
            relative
            flex flex-col items-center justify-center
            px-6 py-4 sm:px-10 sm:py-6
            rounded-2xl
            border border-white/10
            bg-slate-900/30
            backdrop-blur-sm
            shadow-[0_0_20px_rgba(163,230,53,0.1)]
            overflow-hidden
          "
        >
          <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
            <LightRays raysOrigin="top-left" raysColor="#ffffff" raysSpeed={2.0} lightSpread={1.0} rayLength={1.5} />
          </div>
          <div className="absolute inset-0 z-0 opacity-60 pointer-events-none mix-blend-screen">
            <LightRays raysOrigin="top-right" raysColor="#ffffff" raysSpeed={1.8} lightSpread={1.0} rayLength={1.5} />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <TypewriterEffect 
              words={hackathonTitle} 
              className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-black drop-shadow-[0_0_10px_rgba(163,230,53,0.8)] tracking-wide"
            />
            <p className="mt-2 text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.25em] text-slate-300 uppercase border-t border-slate-700/50 pt-2 w-full text-center">
              Intra College Hackathon
            </p>
          </div>
        </div>
      </div>

      {/* 5. ORGANIZED BY SECTION + REGISTER BUTTON */}
      <div className="relative z-10 flex flex-col items-center text-center animate-fade-in-up mt-2 pb-10">
        <p className="my-1 text-[10px] sm:text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">
          An Initiative of the
        </p>
        
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold px-4">
          <a 
            href="https://www.linkedin.com/company/gce-erode-cse/"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lime-400 hover:text-lime-300 transition-colors duration-300 drop-shadow-sm decoration-none"
          >
            Department of Computer Science and Engineering
          </a>
        </h2>

        <p className="mt-4 max-w-2xl text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed px-6 mb-8">
          Be part of <span className="text-lime-400 font-bold">SCH '26</span> on <span className="text-lime-400 font-bold px-1">30th of January</span> to celebrate creativity and technical brilliance. Experience over eight hours of continous coding, creativity, and engineering excellence.
        </p>

        {/* --- REGISTER BUTTON (MOVED HERE) --- */}
        <button
          onClick={() => navigate('/register')}
          className="
            group relative
            px-8 py-3 sm:px-10 sm:py-4
            bg-transparent
            border border-white/60
            rounded-full
            text-white font-bold uppercase tracking-[0.2em] text-xs sm:text-sm
            overflow-hidden
            transition-all duration-300
            hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]
            hover:border-white
            hover:bg-white/5
            active:scale-95
          "
        >
          <span className="relative z-10 transition-colors duration-300">
            Register Now
          </span>
        </button>
      </div>

    </section>
  );
};

export default Home;