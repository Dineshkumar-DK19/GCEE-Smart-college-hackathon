"use client";
import React from "react";
import { AnimatedTimeline } from "../components/UI/AnimatedTimeline";
import {
  Users,
  ClipboardCheck,
  Utensils,
  Award,
  Trophy,
} from "lucide-react";

const timelineData = [
  {
    title: (
      <div className="flex flex-col justify-center items-start md:items-end pr-4 md:pr-0">
        <span className="text-2xl md:text-5xl font-black text-white whitespace-nowrap mb-2 md:mb-0 uppercase tracking-tighter">
          08:30 AM
        </span>
      </div>
    ),
    content: (
      <div className="relative bg-white/[0.03] border border-white/10 p-4 md:p-8 rounded-3xl backdrop-blur-xl group hover:border-lime-500/30 transition-all duration-500">
        <div className="flex items-center gap-3 mb-2 md:mb-4">
          <div className="p-2 bg-lime-500/10 rounded-lg border border-lime-500/20">
            <Users className="w-5 h-5 md:w-6 md:h-6 text-lime-400 shrink-0" />
          </div>
          <h3 className="text-lg md:text-2xl font-black text-white tracking-wide uppercase">
            Team Check-in
          </h3>
        </div>
        <p className="text-slate-400 text-sm md:text-lg leading-relaxed">
          Teams come together at the venue to kick off the Smart College Hackathon, setting the tone for collaboration and innovation throughout the day.
        </p>
      </div>
    ),
  },
  {
    title: (
      <div className="flex flex-col justify-center items-start md:items-end pr-4 md:pr-0">
        <span className="text-2xl md:text-5xl font-black text-white whitespace-nowrap mb-2 md:mb-0 uppercase tracking-tighter">
          10:00 AM
        </span>
      </div>
    ),
    content: (
      <div className="relative bg-white/[0.03] border border-white/10 p-4 md:p-8 rounded-3xl backdrop-blur-xl group hover:border-lime-500/30 transition-all duration-500">
        <div className="flex items-center gap-3 mb-2 md:mb-4">
          <div className="p-2 bg-lime-500/10 rounded-lg border border-lime-500/20">
            <ClipboardCheck className="w-5 h-5 md:w-6 md:h-6 text-lime-400 shrink-0" />
          </div>
          <h3 className="text-lg md:text-2xl font-black text-white tracking-wide uppercase">
            First Review
          </h3>
        </div>
        <p className="text-slate-400 text-sm md:text-lg leading-relaxed">
          Participants present their initial progress, and proposed solutions are reviewed by the mentors and evaluators.
        </p>
      </div>
    ),
  },
  {
    title: (
      <div className="flex flex-col justify-center items-start md:items-end pr-4 md:pr-0">
        <span className="text-2xl md:text-5xl font-black text-white whitespace-nowrap mb-2 md:mb-0 uppercase tracking-tighter">
          12:00 PM
        </span>
      </div>
    ),
    content: (
      <div className="relative bg-white/[0.03] border border-white/10 p-4 md:p-8 rounded-3xl backdrop-blur-xl group hover:border-lime-500/30 transition-all duration-500">
        <div className="flex items-center gap-3 mb-2 md:mb-4">
          <div className="p-2 bg-lime-500/10 rounded-lg border border-lime-500/20">
            <ClipboardCheck className="w-5 h-5 md:w-6 md:h-6 text-lime-400 shrink-0" />
          </div>
          <h3 className="text-lg md:text-2xl font-black text-white tracking-wide uppercase">
            Second Review
          </h3>
        </div>
        <p className="text-slate-400 text-sm md:text-lg leading-relaxed">
          Participants present their enhanced work while mentors and evaluators review developments and guide the next steps.
        </p>
      </div>
    ),
  },
  {
    title: (
      <div className="flex flex-col justify-center items-start md:items-end pr-4 md:pr-0">
        <span className="text-2xl md:text-5xl font-black text-white whitespace-nowrap mb-2 md:mb-0 uppercase tracking-tighter">
          12:30 PM
        </span>
      </div>
    ),
    content: (
      <div className="relative bg-white/[0.03] border border-white/10 p-4 md:p-8 rounded-3xl backdrop-blur-xl group hover:border-lime-500/30 transition-all duration-500">
        <div className="flex items-center gap-3 mb-2 md:mb-4">
          <div className="p-2 bg-lime-500/10 rounded-lg border border-lime-500/20">
            <Utensils className="w-5 h-5 md:w-6 md:h-6 text-lime-400 shrink-0" />
          </div>
          <h3 className="text-lg md:text-2xl font-black text-white tracking-wide uppercase">
            Lunch Break
          </h3>
        </div>
        <p className="text-slate-400 text-sm md:text-lg leading-relaxed">
          Participants take a break to refresh, recharge, and prepare for the next phase of the hackathon.
        </p>
      </div>
    ),
  },
  {
    title: (
      <div className="flex flex-col justify-center items-start md:items-end pr-4 md:pr-0">
        <span className="text-2xl md:text-5xl font-black text-white whitespace-nowrap mb-2 md:mb-0 uppercase tracking-tighter">
          03:00 PM
        </span>
      </div>
    ),
    content: (
      <div className="relative bg-white/[0.03] border border-white/10 p-4 md:p-8 rounded-3xl backdrop-blur-xl group hover:border-lime-500/30 transition-all duration-500">
        <div className="flex items-center gap-3 mb-2 md:mb-4">
          <div className="p-2 bg-lime-500/10 rounded-lg border border-lime-500/20">
            <Award className="w-5 h-5 md:w-6 md:h-6 text-lime-400 shrink-0" />
          </div>
          <h3 className="text-lg md:text-2xl font-black text-white tracking-wide uppercase">
            Final Review
          </h3>
        </div>
        <p className="text-slate-400 text-sm md:text-lg leading-relaxed">
          Participants present their finalized solutions, which are evaluated by mentors and the review panel.
        </p>
      </div>
    ),
  },
  {
    title: (
      <div className="flex flex-col justify-center items-start md:items-end pr-4 md:pr-0">
        <span className="text-2xl md:text-5xl font-black text-white whitespace-nowrap mb-2 md:mb-0 uppercase tracking-tighter">
          Next Day
        </span>
      </div>
    ),
    content: (
      <div className="relative bg-white/[0.03] border border-white/10 p-4 md:p-8 rounded-3xl backdrop-blur-xl group hover:border-lime-500/30 transition-all duration-500">
        <div className="flex items-center gap-3 mb-2 md:mb-4">
          <div className="p-2 bg-lime-500/10 rounded-lg border border-lime-500/20">
            <Trophy className="w-5 h-5 md:w-6 md:h-6 text-lime-400 shrink-0" />
          </div>
          <h3 className="text-lg md:text-2xl font-black text-white tracking-wide uppercase">
            Winner Announcement
          </h3>
        </div>
        <p className="text-slate-400 text-sm md:text-lg leading-relaxed">
          The top teams are announced and celebrated for their innovative solutions and hard work throughout the hackathon.
        </p>
      </div>
    ),
  },
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-20 bg-transparent relative z-10">
        <div className="text-center mb-12 space-y-2">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase">
            EVENT <span className="text-lime-400">TIMELINE</span>
          </h2>
          <div className="h-1 w-16 bg-lime-400 mx-auto rounded-full" />
        </div>
      <AnimatedTimeline data={timelineData} />
    </section>
  );
};

export default Timeline;