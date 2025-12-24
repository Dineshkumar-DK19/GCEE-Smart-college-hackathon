import React from 'react';
// 1. IMPORT the image here
import bannerImg from '../assets/banner.png';

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">

      <img
        // 2. USE the imported variable (curly braces, no quotes)
        src={bannerImg}
        alt="GCEE Logo"
        width={400}
        height={400}
        className="w-[80px] sm:w-[120px] md:w-[150px] lg:w-[180px] h-auto transition-all duration-300 relative z-10 mx-auto"

        // Speed optimizations
        fetchPriority="high"
        loading="eager"
      />

      <h1 className="mt-8 text-5xl font-bold">Government College of Engineering, Erode</h1>

    </main>
  );
};

export default Home;