import React from "react";
import { Shield, Zap } from "lucide-react";

const About = () => {
  return (
    <section className="bg-[#020817]/70 py-16 px-6 font-sans">
      <div className="max-w-6xl mx-auto lg:space-y-10  sm:space-y-8 space-y-6">

        {/* SECTION TITLE — TOP CENTER */}
        <h2 className="text-xl md:text-4xl font-bold text-white/80 text-center tracking-wider">
          About our  SCH
        </h2>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT COLUMN — BULLET POINTS */}
          <div className="space-y-4">
            <ul className="list-disc list-inside md:space-y-5  text-xs sm:text-sm md:text-lg text-white/70 leading-relaxed">
              <li>
                Smart College Hackathon (SCH) is an internal hackathon initiative
                designed exclusively for students of Government College of
                Engineering, Erode.
              </li>
              <li>
                The event focuses on solving real challenges within the college
                ecosystem using technology-driven solutions.
              </li>
              <li>
                Problem statements are sourced directly from faculty and
                administrative departments to ensure real-world relevance.
              </li>
              <li>
                SCH promotes innovation, collaboration, and hands-on learning
                beyond the classroom.
              </li>
            </ul>
          </div>

          {/* RIGHT COLUMN — CENTER-ALIGNED STACK */}
          <div className="flex flex-col gap-6 justify-center">

            {/* Vision */}
            <div className="bg-slate-900/40  rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <Zap className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-semibold text-white">Vision</h3>
              </div>
              <p className="text-xs sm:text-sm md:text-lg text-slate-400 leading-relaxed">
                To build a smarter campus by empowering students to create
                impactful digital solutions.
              </p>
            </div>

            {/* Eligibility */}
            <div className="bg-slate-900/40  rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <Shield className="w-5 h-5 text-purple-400" />
                <h3 className="text-lg font-semibold text-white">Eligibility</h3>
              </div>
              <p className="text-xs sm:text-sm md:text-lg text-slate-400 leading-relaxed">
                Open exclusively to students of our college. Participation is
                allowed individually or in teams.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
