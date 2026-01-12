import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import bannerImg from '../assets/banner.png';
import hackathonLogo from '../assets/HackathonLogo.png';
import BlurText from './UI/BlurText';
import { TypewriterEffect } from './UI/TypewriterEffect';
import FlippingLogo from './UI/FlippingLogo';
import Button from './UI/Button';
import LightRays from './UI/LightRays';
import { Lock, Clock, ArrowRight } from "lucide-react";


const REGISTRATION_OPEN_DATE = new Date(2026, 0, 12, 7, 0, 0); // Jan 12, 9:00 AM
const REGISTRATION_CLOSE_DATE = new Date(2026, 0, 21, 17, 0, 0); // Jan 21, 5:00 PM

const Home = () => {
  const navigate = useNavigate();
  const [now, setNow] = useState(new Date());


  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const isNotStarted = now < REGISTRATION_OPEN_DATE;
  const isClosed = now >= REGISTRATION_CLOSE_DATE;
  const isOpen = !isNotStarted && !isClosed;

  const hackathonTitle = [
    { text: "SMART", className: "text-lime-400" },
    { text: "CAMPUS", className: "text-lime-400" },
    { text: "HACKATHON", className: "text-lime-400" },
    { text: "'", className: "text-lime-400" },
    { text: "26", className: "text-white" },
  ];

  return (
    <section className="flex min-h-screen flex-col items-center justify-start pt-24 px-4 gap-y-3 md:gap-y-5 relative overflow-hidden">
      <div className="absolute top-20 left-0 right-0 bottom-0 z-0 pointer-events-none md:inset-0 md:opacity-40">
        <LightRays
          raysOrigin="top-left"
          raysColor="rgba(255,255,255,50)"
          raysSpeed={0.5}
          lightSpread={1}
          rayLength={2}
        />
      </div>

      <div className="absolute top-20 left-0 right-0 bottom-0 z-0 pointer-events-none md:top-0 md:opacity-40">
        <LightRays
          raysOrigin="top-right"
          raysColor="rgba(255,255,255,0.75)"
          raysSpeed={0.9}
          lightSpread={0.9}
          rayLength={3}
        />
      </div>
      <div className="relative z-10">
        <FlippingLogo frontImage={bannerImg} backImage={hackathonLogo} />
      </div>

      <div className="w-full px-2 md:px-0 relative z-10">
        <BlurText
          text="Government College of Engineering, Erode"
          delay={150}
          animateBy="words"
          direction="top"
          className="
            flex justify-center gap-x-0.5 flex-wrap
            text-xl sm:text-xl md:text-3xl lg:text-4xl
            font-bold text-center text-white/90
          "
        />
      </div>

      <div className="relative z-10 mt-2">
        <div className="relative flex flex-col items-center justify-center px-6 py-4 sm:px-10 sm:py-6 rounded-xl overflow-hidden">
          <div className="relative z-10 flex flex-col items-center">
            <TypewriterEffect
              words={hackathonTitle}
              className="text-sm sm:text-xl md:text-3xl lg:text-4xl font-black drop-shadow-[0_0_10px_rgba(163,230,53,0.8)] tracking-wide"
            />
            <p className="mt-2 text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.25em] text-slate-300 uppercase border-t border-slate-700/50 pt-2 w-full text-center">
              Intra College Hackathon
            </p>
            <p className="mt-3 text-xs sm:text-sm md:text-lg text-lime-400 font-medium italic tracking-wide">
              "Let's build, contribute and grow together"
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center animate-fade-in-up mt-2 pb-10">
        <p className="my-1 text-[10px] sm:text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">
          An Initiative of the
        </p>

        <h2 className=" text-base sm:text-base md:text-2xl lg:text-2xl font-bold px-4">
          <a href="https://www.linkedin.com/company/gce-erode-cse/" target="_blank" rel="noopener noreferrer" className="text-lime-400 font-bold">
            Department of Computer Science and Engineering
          </a>
        </h2>

        <p className="mt-4 max-w-2xl text-base sm:text-sm md:text-base text-slate-300 leading-relaxed px-6 mb-8">
          Be part of <span className="text-lime-400 font-bold">SCH '26</span> on <span className="text-lime-400 font-bold px-1">30th of January</span> to celebrate creativity and technical brilliance. Experience over 12 hours of continous coding, creativity, and engineering excellence.
        </p>

        {/* BUTTON SECTION WITH TRIP-STATE LOGIC */}
        <div className="flex flex-col items-center justify-center sm:w-auto px-6 gap-3">
          
          {/* --- NEW MOBILE-ONLY NAVIGATION BUTTON (Glassmorphic Pill Style) --- */}
          <button
            onClick={() => navigate('/problems')}
            className="
              md:hidden flex items-center gap-2 
              px-5 py-2.5 rounded-full 
              bg-white/5 border border-white/10 
              text-slate-300 text-[10px] font-bold uppercase tracking-widest 
              hover:bg-lime-500/10 hover:border-lime-500/30 hover:text-lime-400 
              transition-all duration-300 group
              backdrop-blur-sm shadow-sm
            "
          >
            View Problem Statements
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>

          {isNotStarted ? (
            /* STATE 1: NOT STARTED YET */
            <>
              <Button disabled className="opacity-60 cursor-not-allowed grayscale pointer-events-none">
                <span className="flex items-center gap-2">
                  <Clock size={16} />  Opens Soon
                </span>
              </Button>
              <span className="text-base sm:text-sm md:text-lg tracking-widest text-lime-400/60 font-black uppercase italic">
                Free Registration
              </span>
              <span className="text-[10px] text-base uppercase tracking-wide text-white/70 font-medium text-center max-w-md">
               Registration Opens on: <span className="text-white font-bold text-lime-400/90">Jan 12th, 9:00 AM</span>
              </span>
            </>
          ) : isClosed ? (
            /* STATE 2: REGISTRATION CLOSED */
            <>
              <Button disabled className="opacity-50 cursor-not-allowed grayscale pointer-events-none">
                <span className="flex items-center gap-2">
                  <Lock size={16} /> Registration Closed
                </span>
              </Button>
            </>
          ) : (
            /* STATE 3: REGISTRATION OPEN */
            <>
              <Button onClick={() => navigate('/register')}>
                Register Now
              </Button>
              <span className="text-xs sm:text-sm md:text-lg tracking-widest text-lime-400 font-black uppercase">
                Free Registration
              </span>
              <span className="text-[10px] sm:text-xs md:text-sm uppercase tracking-wide text-white/70 font-medium text-center max-w-md">
                Last Date for Registration: <span className="text-white font-bold text-lime-400/90">Jan 21st, 5:00 PM</span>
              </span>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;