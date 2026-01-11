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
  Download,
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

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 bg-[#020817] relative overflow-hidden font-sans">
      <div className="absolute inset-0 pointer-events-none">
        <LightRays raysColor="#84cc16" raysSpeed={0.2} opacity={0.1} />
      </div>

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
              <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold rounded-lg uppercase tracking-wider">
                {problem.appType}
              </span>
            </div>
            <h1 className="text-sm sm:text-xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
              {problem.title}
            </h1>
            <p className="text-slate-400 text-xs sm:text-sm md:text-lg max-w-3xl">
              {problem.description}
            </p>
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
                  <p className="text-slate-300 text-xs sm:text-sm md:text-lg">
                    {problem.background}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-lime-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <Target className="w-4 h-4" /> Core Objective
                  </h3>
                  <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 text-white text-xs sm:text-sm md:text-lg">
                    {problem.objective}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-lime-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4" /> Key Features
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm md:text-lg">
                    {problem.features}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#0B1221]/50 border border-white/5 rounded-xl p-5">
                  <h4 className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                    <FileBox className="w-3 h-3" /> Deliverables
                  </h4>
                  <p className="text-white text-xs sm:text-sm md:text-lg">
                    {problem.deliverables}
                  </p>
                </div>

                <div className="bg-[#0B1221]/50 border border-white/5 rounded-xl p-5">
                  <h4 className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Lock className="w-3 h-3" /> Constraints
                  </h4>
                  <p className="text-white text-xs sm:text-sm md:text-lg">
                    {problem.constraints}
                  </p>
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
            </div>

            {/* --- MOVED DOWNLOADS SECTION TO BOTTOM (FULL WIDTH) --- */}
            {problem.downloads && problem.downloads.length > 0 && (
              <div className="lg:col-span-3">
                <div className="bg-[#0B1221] border border-white/10 rounded-2xl p-6">
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
                    Resources & Attachments
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {problem.downloads.map((file, index) => (
                      <a
                        key={index}
                        href={file.url}
                        download
                        className="
                          flex items-center gap-3 p-3 rounded-xl 
                          bg-white/5 border border-white/5 
                          hover:bg-lime-500/10 hover:border-lime-500/30 hover:text-lime-400 
                          transition-all group
                        "
                      >
                        <div className="p-2 bg-black/20 rounded-lg text-slate-400 group-hover:text-lime-400 transition-colors">
                          <Download className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-medium text-slate-300 group-hover:text-white truncate">
                          {file.name}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* REGISTER BUTTON — LAST ROW, CENTER */}
            <div className="lg:col-span-3 flex justify-center pt-2">
              <Button onClick={() => navigate("/")}>
                Register Now
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProblemDetails;