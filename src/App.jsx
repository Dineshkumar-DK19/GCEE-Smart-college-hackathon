import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import {
  Navbar, Home, Contribute, Guidelines, YoutubeVideo, Timeline, Footer, About
} from "./components";
import ProblemStatements from "./pages/ProblemStatements";
import ProblemDetails from "./pages/ProblemDetails"; // 1. IMPORT THIS
import Register from "./pages/Register";
import Contact from "./components/Contact";

// Backgrounds
import Particles from "./components/Particles/Particles";
import { BackgroundBeams } from "./components/UI/background-beams";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <div className="fixed inset-0 w-screen h-screen z-0 pointer-events-none overflow-hidden">
        <BackgroundBeams className="absolute inset-0 z-0 " />
        <Particles className="absolute inset-0 z-10" particleCount={150} particleBaseSize={100} moveParticlesOnHover={false} alphaParticles={true} disableRotation={true} />
      </div>

      <main className="relative z-10 ">
        <Navbar />
        <Routes>
          <Route path="/" element={
              <>
                <section id="home"><Home /></section>
                <section id="about"><div className="w-full"><About /></div></section>
                <section id="contribute"><div className="w-full"><Contribute /></div></section>
                <section id="guidelines"><div className="w-full"><Guidelines /></div></section>
                <section id="timeline"><div className="w-full"><Timeline /></div></section>
                {/* <section id="youtube"><div className="w-full"><YoutubeVideo /></div></section> */}
                <section id="contact"><div className="w-full"><Contact/></div></section>
                <section id="footer"><div className="w-full"><Footer /></div></section>
              </>
            }
          />

          <Route path="/problems" element={<ProblemStatements />} />

          {/* --- 2. ADD THIS ROUTE TO FIX THE CLICK ERROR --- */}
          <Route path="/problems/:id" element={<ProblemDetails />} />

          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;