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
import Contact from "./components/Contact";

function App() {
  // CHANGED: Removed 'min-h-screen', 'border', 'border-dashed'
  // Now it just ensures full width and default spacing, letting content dictate height.
  const sectionLayout = "w-full py-12 md:py-20";

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
                  {/* Removed the extra wrapper styling since About has its own padding */}
                  <div className="w-full">
                    <About />
                  </div>
                </section>

                <section id="contribute">
                   {/* Removed sectionLayout restrictions */}
                  <div className="w-full">
                    <Contribute />
                  </div>
                </section>
                <section id="guidelines">
                  <div className={sectionLayout}>
                    <Guidelines />
                  </div>
                </section>

                <section id="timeline">
                  <div className="w-full">
                    <Timeline />
                  </div>
                </section>

                <section id="youtube">
                  <div className="w-full">
                    <YoutubeVideo />
                  </div>
                </section>

                 <section id="contact">
                  <div className="w-full">
                    <Contact/>
                  </div>
                </section>

                <section id="footer">
                  <div className="w-full">
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