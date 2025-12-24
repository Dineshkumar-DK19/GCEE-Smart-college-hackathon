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
} from "./components";
import ProblemStatements from "./pages/ProblemStatements";

// Backgrounds
import Particles from "./components/Particles/Particles";
import { BackgroundBeams } from "./components/UI/background-beams";

import "./index.css";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Common layout class for sections (replaces .layout-box)
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


      <main className="relative z-10 pt-[20px]">
        <Navbar theme={theme} toggleTheme={toggleTheme} />

            <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="home">
                  <Home />
                </section>

                <section id="about">
                  <div className={sectionLayout}>
                    <h2 className="text-2xl font-bold">About Section</h2>
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

                <section id="timeline">
                  <div className={sectionLayout}>
                    <YoutubeVideo />
                  </div>
                </section>

                <section id="timeline">
                  <div className={sectionLayout}>
                    <Footer />
                  </div>
                </section>
              </>
            }
          />

          <Route path="/problems" element={<ProblemStatements />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
