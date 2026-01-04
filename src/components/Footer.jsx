import React from "react";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#020817]/80 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-15">


        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-center text-xs sm:text-base text-slate-400">
          {/* COPYRIGHT */}
          <span>© 2026 Smart College Hackathon. All rights reserved.</span>

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
