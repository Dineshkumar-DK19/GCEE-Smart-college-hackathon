import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import {
  Navbar,
  Home,
  Contribute,
  Guidelines,
  YoutubeVideo,
  Timeline,
  Footer,
  About
} from "./components";
import ProblemStatements from "./pages/ProblemStatements";
import Register from "./pages/Register"; // 1. IMPORT REGISTER

// Backgrounds
import Particles from "./components/Particles/Particles";
import { BackgroundBeams } from "./components/UI/background-beams";

import "./index.css";

function App() {
  const sectionLayout =
    "min-h-screen flex flex-col items-center justify-center p-8 border border-dashed border-white/10";

  return (
    <BrowserRouter>
      <div className="fixed inset-0 w-screen h-screen z-0 pointer-events-none overflow-hidden">
        <BackgroundBeams className="absolute inset-0 z-0 " />
        <Particles
          className="absolute inset-0 z-10"
          particleCount={150}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={true}
        />
      </div>

      <main className="relative z-10"> 
        <Navbar  />

        <Routes>
          {/* Main Home Route */}
          <Route
            path="/"
            element={
              <>
                <section id="home">
                  <Home />
                </section>

                <section id="about">
                  <div className={sectionLayout}>
                    <About />
                  </div>
                </section>

                <section id="contribute">
                  <div className={sectionLayout}>
                    <Contribute />
                  </div>
                </section>
                <section id="guidelines">
                  <div className={sectionLayout}>
                    <Guidelines />
                  </div>
                </section>
                <section id="timeline">
                  <div className={sectionLayout}>
                    <Timeline />
                  </div>
                </section>

                <section id="youtube">
                  <div className={sectionLayout}>
                    <YoutubeVideo />
                  </div>
                </section>

                <section id="footer">
                  <div className={sectionLayout}>
                    <Footer />
                  </div>
                </section>
              </>
            }
          />

          {/* New Routes */}
          <Route path="/problems" element={<ProblemStatements />} />
          <Route path="/register" element={<Register />} /> {/* 2. ADD ROUTE */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;