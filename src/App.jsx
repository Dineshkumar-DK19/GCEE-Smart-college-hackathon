import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import ScrollToTop from "./components/ScrollToTop";
import {
  Navbar, Home, Contribute, Guidelines, Timeline, Footer, About
} from "./components";
import ProblemStatements from "./pages/ProblemStatements";
import ProblemDetails from "./pages/ProblemDetails";
import Register from "./pages/Register";
import Contact from "./components/Contact";

// Backgrounds
import Particles from "./components/Particles/Particles";
import { BackgroundBeams } from "./components/UI/background-beams";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      {/* ADDED: bg-[#020817] and min-h-screen here acts as a safety net */}
      <div className="min-h-screen bg-[#020817] relative">

        {/* FIXED: Added bg-[#020817] to this container so it's never transparent */}
        <div className="fixed inset-0 w-screen h-screen z-0 pointer-events-none overflow-hidden bg-[#020817]">
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

        <main className="relative z-10 ">
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={
                <>
                  <section id="home"><Home /></section>
                  <section id="about"><div className="w-full"><About /></div></section>
                  <section id="contribute"><div className="w-full"><Contribute /></div></section>
                  <section id="guidelines"><div className="w-full"><Guidelines /></div></section>
                  <section id="timeline"><div className="w-full"><Timeline /></div></section>
                  <section id="contact"><div className="w-full"><Contact/></div></section>
                  <section id="footer"><div className="w-full"><Footer /></div></section>
                </>
              }
            />

            {/* STANDALONE ROUTE */}
            <Route path="/guidelines" element={<div className="pt-24 min-h-screen bg-[#020817]"><Guidelines /></div>} />

            <Route path="/problems" element={<ProblemStatements />} />
            <Route path="/problems/:id" element={<ProblemDetails />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;