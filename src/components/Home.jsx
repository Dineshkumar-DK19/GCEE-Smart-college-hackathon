import React from 'react';
import bannerImg from '../assets/banner.png';
import hackathonLogo from '../assets/HackathonLogo.png';
import BlurText from './UI/BlurText';
import { TypewriterEffect } from './UI/TypewriterEffect';
import FlippingLogo from './UI/FlippingLogo'; 
import LightRays from './UI/LightRays'; // 1. Import the component

const Home = () => {
  const hackathonTitle = [
    { text: "SMART", className: "text-lime-400" },
    { text: "CAMPUS", className: "text-lime-400" },
    { text: "HACKATHON", className: "text-lime-400" },
    { text: "'26", className: "text-white" },
  ];

  return (
    <section className="flex min-h-screen flex-col items-center justify-start pt-24 px-4 gap-y-3 md:gap-y-5">

      <FlippingLogo 
        frontImage={bannerImg} 
        backImage={hackathonLogo} 
      />

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

      {/* 3. HACKATHON TITLE (Glass Box + Light Rays) */}
      <div className="relative z-10 mt-2">
        <div 
          className="
            relative
            flex flex-col items-center justify-center
            px-6 py-4 sm:px-10 sm:py-6
            rounded-2xl
            border border-lime-400/30
            bg-slate-900/30
            backdrop-blur-sm
            shadow-[0_0_20px_rgba(163,230,53,0.1)]
            overflow-hidden  /* CRITICAL: Keeps rays inside the box */
          "
        >
          {/* A. Background: Light Rays */}
          <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
            <LightRays
              raysOrigin="top-center"
              raysColor="#a3e635" /* Changed to match Lime theme */
              raysSpeed={1.5}
              lightSpread={0.8}
              rayLength={1.2}
              followMouse={true}
              mouseInfluence={0.1}
              noiseAmount={0.1}
              distortion={0.05}
              className="w-full h-full"
            />
          </div>

          {/* B. Foreground: Text (Must be relative z-10) */}
          <div className="relative z-10 flex flex-col items-center">
            <TypewriterEffect 
              words={hackathonTitle} 
              className="
                text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-black 
                drop-shadow-[0_0_10px_rgba(163,230,53,0.8)]
                tracking-wide
              "
            />
            
            <p className="mt-2 text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.25em] text-slate-300 uppercase border-t border-slate-700/50 pt-2 w-full text-center">
              Intra College Hackathon
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center animate-fade-in-up">
        <p className="my-1 text-[10px] sm:text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">
          An Initiative of the
        </p>
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-lime-400 drop-shadow-sm px-4">
          Department of Computer Science and Engineering
        </h2>
        <p className="mt-4 max-w-2xl text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed px-6">
          Be part of <span className="text-lime-400 font-bold">SCH '26</span> on <span className="text-lime-400 font-bold px-1">30th of January</span> celebrate creativity and technical brilliance Experience 8+ hours of non-stop coding, creativity, and engineering excellence.
        </p>
      </div>

    </section>
  );
};

export default Home;