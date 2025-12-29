import React from "react";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="w-full bg-[#020817]/80 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-14">

          {/* COLUMN 1 — BRAND (LARGER) */}
          <div className="lg:col-span-4 space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              SCH ' 26
            </h2>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-sm">
              A student-driven hackathon where ideas meet real-world campus
              challenges, powered by collaboration, innovation, and technology.
            </p>
            <div className="flex items-center gap-4 pt-2">
  <a
    href="https://www.instagram.com/gcee_cse_official?igsh=MThwY2h1OG1sZDNvYw=="
    target="_blank"
    rel="noreferrer"
    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-pink-400 hover:border-pink-400/40 transition"
  >
    <FaInstagram size={18} />
  </a>

  <a
    href="https://www.linkedin.com/company/gce-erode-cse/"
    target="_blank"
    rel="noreferrer"
    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-400/40 transition"
  >
    <FaLinkedinIn size={18} />
  </a>

  <a
    href="https://www.youtube.com/"
    target="_blank"
    rel="noreferrer"
    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-red-400 hover:border-red-400/40 transition"
  >
    <FaYoutube size={18} />
  </a>
</div>

          </div>

          {/* COLUMN 2 — EVENTS */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold text-white mb-6 border-b border-white/10 pb-2">
              Events
            </h4>
            <ul className="space-y-4 text- base text-slate-400">
              <li className="hover:text-white transition cursor-pointer">
                Hackathon Overview
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Problem Statements
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Review Rounds
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Final Presentation
              </li>
            </ul>
          </div>

          {/* COLUMN 3 — PARTICIPANTS */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold text-white mb-6 border-b border-white/10 pb-2">
              Participants
            </h4>
            <ul className="space-y-4 text-base text-slate-400">
              <li className="hover:text-white transition cursor-pointer">
                Registration Details
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Guidelines
              </li>
            </ul>
          </div>

          {/* COLUMN 4 — ABOUT */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold text-white mb-6 border-b border-white/10 pb-2">
              About
            </h4>
            <ul className="space-y-4 text-base text-slate-400">
              <li className="hover:text-white transition cursor-pointer">
                About SCH
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Vision & Mission
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Organising Team
              </li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-16 mb-8 h-px bg-white/10" />

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-center text-xs sm:text-base text-slate-400">

          {/* COPYRIGHT */}
          <span>
            © 2026 Smart College Hackathon. All rights reserved.
          </span>

          {/* DEVELOPERS */}
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span>Designed & Developed by</span>

            <a
              href="https://www.linkedin.com/in/dineshkumar-m-48a00a2ab/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-blue-500    transition"
            >
              Dineshkumar M
            </a>
            <span>·</span>
            <a
              href="https://www.linkedin.com/in/muhammed-umer-s"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1  text-blue-500  transition"
            >
              Muhammed Umer S
            </a>
            <span>·</span>
            <a
              href="https://www.linkedin.com/in/nandhini-subramanian-"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-blue-500  transition"
            >
              Nandhini S
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
