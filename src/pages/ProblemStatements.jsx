import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronRight, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { problemData } from "../data/problemData";

// SET YOUR RELEASE DATE HERE: (Year, Month Index 0-11, Day, Hour, Minute)
const RELEASE_DATE = new Date(2026, 0, 4, 22, 36, 0); // Example: Jan 10, 2026, 9:00 AM

const ProblemStatements = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [now, setNow] = useState(new Date());
  const navigate = useNavigate();

  // Update time every minute to check for release
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const isReleased = now >= RELEASE_DATE;

  const filteredProblems = problemData.filter(p =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.dept.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getPriorityColor = (p) => {
    if (p === 'High') return 'text-red-400 bg-red-400/10 border-red-400/20';
    if (p === 'Medium') return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
    return 'text-lime-400 bg-lime-400/10 border-lime-400/20';
  };

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 relative overflow-hidden bg-[#020817]">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-[30vw] h-[30vw] bg-lime-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4 drop-shadow-sm uppercase">
            Problem <span className="text-lime-400">Statements</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
            {isReleased
              ? "Real-world challenges submitted by our departments. Select a problem to view full details."
              : "Problem statements are currently under review by the technical committee."}
          </p>
        </div>

        {isReleased ? (
          <>
            {/* Search Bar */}
            <div className="max-w-xl mx-auto mb-16 relative">
              <div className="relative flex items-center bg-[#0B1221] border border-white/10 rounded-xl px-4 py-3 shadow-xl focus-within:border-lime-500/50 transition-colors">
                <Search className="w-5 h-5 text-slate-500 mr-3" />
                <input
                  type="text"
                  placeholder="Search by ID, Title, or Dept..."
                  className="w-full bg-transparent text-white placeholder:text-slate-500 focus:outline-none text-sm md:text-base"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <AnimatePresence>
                {filteredProblems.map((problem, index) => (
                  <motion.div
                    key={problem.id}
                    layoutId={`card-${problem.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => navigate(`/problems/${problem.id}`)}
                    className="
                      group relative cursor-pointer
                      bg-[#0B1221]/80 backdrop-blur-md border border-white/5
                      hover:border-lime-500/30 hover:bg-[#0B1221]
                      rounded-2xl p-5 flex flex-col gap-4
                      transition-all duration-300
                      hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(132,204,22,0.1)]
                    "
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold font-mono text-slate-400 bg-white/5 px-2 py-1 rounded border border-white/5">
                        {problem.id}
                      </span>
                      <span className={`text-[10px] font-bold px-2 py-1 rounded border uppercase tracking-wider ${getPriorityColor(problem.priority)}`}>
                        {problem.priority} Priority
                      </span>
                    </div>

                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">
                        {problem.dept}
                      </div>
                      <h3 className="text-lg font-bold text-white leading-snug group-hover:text-lime-400 transition-colors">
                        {problem.title}
                      </h3>
                    </div>

                    <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
                      <span className="text-xs text-slate-400 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-lime-500"></span>
                        {problem.appType} Application
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 group-hover:bg-lime-500 group-hover:text-black transition-all">
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </>
        ) : (
          /* Locked State UI */
          <div className="text-center py-20 bg-[#0B1221]/40 border border-white/5 rounded-3xl backdrop-blur-xl max-w-4xl mx-auto">
            <div className="inline-flex p-6 rounded-full bg-lime-500/10 mb-6 border border-lime-500/20">
              <Lock className="w-12 h-12 text-lime-400" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Under Technical Evaluation</h2>
            <p className="text-slate-400 max-w-md mx-auto leading-relaxed">
              Challenges are currently being finalized. The complete list will be revealed on
              <br />
              <span className="text-lime-400 font-bold text-lg">January 10th at 9:00 AM</span>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProblemStatements;