import React from 'react';
import { useNavigate } from 'react-router-dom';
import bannerImg from '../assets/banner.png';
import hackathonLogo from '../assets/HackathonLogo.png';
import BlurText from './UI/BlurText';
import { TypewriterEffect } from './UI/TypewriterEffect';
import FlippingLogo from './UI/FlippingLogo';
import Button from './UI/Button'; // Import shared button

const Home = () => {
  const navigate = useNavigate();

  const hackathonTitle = [
    { text: "SMART", className: "text-lime-400" },
    { text: "COLLEGE", className: "text-lime-400" },
    { text: "HACKATHON", className: "text-lime-400" },
    { text: "'", className: "text-lime-400" },
    { text: "26", className: "text-white" },
  ];

  return (
    <section className="flex min-h-screen flex-col items-center justify-start pt-24 px-4 gap-y-3 md:gap-y-5 relative overflow-hidden">

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
            text-sm sm:text-xl md:text-3xl lg:text-4xl
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
          </div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center animate-fade-in-up mt-2 pb-10">
        <p className="my-1 text-[10px] sm:text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">
          An Initiative of the
        </p>

        <h2 className=" text-sm sm:text-base md:text-2xl lg:text-2xl font-bold px-4">
          <a href="https://www.linkedin.com/company/gce-erode-cse/" target="_blank" rel="noopener noreferrer" className="text-lime-400  font-bold">
            Department of Computer Science and Engineering
          </a>
        </h2>

        <p className="mt-4 max-w-2xl text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed px-6 mb-8">
          Be part of <span className="text-lime-400 font-bold">SCH '26</span> on <span className="text-lime-400 font-bold px-1">30th of January</span> to celebrate creativity and technical brilliance. Experience over eight hours of continous coding, creativity, and engineering excellence.
        </p>

        <div className="w-full sm:w-auto px-6">
          <Button onClick={() => navigate('/register')}>
            Register Now
          </Button>
        </div>
      </div>

    </section>
  );
};

export default Home;