import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  User,
  Building2,
  Target,
  Lightbulb,
  FileBox,
  Lock,
  AlertTriangle,
} from "lucide-react";
import { problemData } from "../data/problemData";
import Button from "../components/UI/Button";
import LightRays from "../components/UI/LightRays";

const ProblemDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const problem = problemData.find((p) => p.id === id);

  if (!problem)
    return (
      <div className="min-h-screen bg-[#020817] text-white flex items-center justify-center">
        Problem not found
      </div>
    );

  const renderFormattedText = (text) => {
    if (!text) return null;
    // If the text contains a newline, split it and add spacing between points
    if (text.includes("\n")) {
      return (
        <div className="flex flex-col gap-4">
          {text.split("\n").map((point, i) => (
            <p key={i} className="leading-relaxed">
              {point}
            </p>
          ))}
        </div>
      );
    }
    // Otherwise, just render as a standard paragraph
    return <p className="leading-relaxed">{text}</p>;
  };

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 bg-[#020817] relative overflow-hidden font-sans">
      {/* <div className="absolute inset-0 pointer-events-none">
        <LightRays raysColor="#84cc16" raysSpeed={0.2} opacity={0.1} />
      </div> */}

      <div className="max-w-5xl mx-auto relative z-10">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-400 hover:text-lime-400 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Header Card */}
          <div className="bg-[#0B1221] border border-white/10 rounded-3xl p-6 md:p-10">
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="px-3 py-1 bg-lime-500/10 border border-lime-500/20 text-lime-400 text-xs font-bold rounded-lg uppercase tracking-wider">
                {problem.id}
              </span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 text-slate-300 text-xs font-bold rounded-lg uppercase tracking-wider">
                {problem.dept}
              </span>
            </div>
            <h1 className="text-base sm:text-xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
              {problem.title}
            </h1>
            <div className="text-slate-400 text-base sm:text-base md:text-lg max-w-3xl">
              {renderFormattedText(problem.description)}
            </div>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* LEFT COLUMN */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-[#0B1221]/50 border border-white/5 rounded-2xl p-6 md:p-8 space-y-8">
                <div>
                  <h3 className="text-sm font-bold text-lime-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" /> Current Background
                  </h3>
                  <p className="text-slate-300 text-base sm:text-base md:text-lg">
                    {problem.background}
                  </p>
                </div>

                <div>
                  <div className="">
                    <h3 className="text-sm font-bold text-lime-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <Target className="w-4 h-4" /> Core Objective
                    </h3>
                    {/* Added flex flex-col and gap-4 to create space specifically between points */}
                    <div className="bg-white/[0.02] border border-white/5 rounded-xl p-6 text-white text-base sm:text-base md:text-lg flex flex-col gap-2">
                      {problem.objective.split("\n").map((point, index) => (
                        <div key={index} className="leading-relaxed">
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-6">
              <div className="bg-[#0B1221] border border-white/10 rounded-2xl p-6">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">
                  Submitted By
                </h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-lime-500/20 flex items-center justify-center text-lime-400">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white font-bold">
                      {problem.submittedBy.name}
                    </p>
                    <p className="text-slate-500 text-sm">
                      {problem.submittedBy.designation}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400 bg-white/5 p-3 rounded-lg">
                  <Building2 className="w-4 h-4" /> {problem.dept} Department
                </div>
              </div>

              <div className="bg-[#0B1221] border border-white/10 rounded-2xl p-6">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
                  Target Users
                </h3>
                <div className="flex flex-wrap gap-2">
                  {problem.targetUsers.map((u, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs sm:text-sm md:text-base text-white"
                    >
                      {u}
                    </span>
                  ))}
                </div>
              </div>
              {/* Application Type */}
              <div className="bg-[#0B1221] border border-white/10 rounded-2xl p-6">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
                  Application Type
                </h3>
                <div className="flex flex-wrap gap-2">
                  {Array.isArray(problem.appType) ? (
                    problem.appType.map((type, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs sm:text-sm md:text-base text-white"
                      >
                        {type}
                      </span>
                    ))
                  ) : (
                    <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs sm:text-sm md:text-base text-white">
                      {problem.appType}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* REGISTER BUTTON — LAST ROW, CENTER */}
            <div className="lg:col-span-3 flex justify-center pt-6">
              <Button onClick={() => navigate("/")}>Register Now</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProblemDetails;
