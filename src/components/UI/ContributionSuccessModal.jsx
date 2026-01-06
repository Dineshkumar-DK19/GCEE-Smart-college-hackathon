import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, X } from "lucide-react";
import hackathonLogo from '../../assets/HackathonLogo.png';

const ContributionSuccessModal = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md px-4"
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }} 
        animate={{ scale: 1, opacity: 1, y: 0 }} 
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative w-full max-w-lg bg-[#0B1221] border border-lime-500/30 rounded-2xl p-8 overflow-hidden text-center shadow-[0_0_50px_rgba(163,230,53,0.1)]"
      >
        {/* Background Blur Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-lime-500/10 blur-[60px]" />

        {/* --- NEW CLOSE BUTTON (Top Right) --- */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-white/5 hover:bg-white/10 rounded-lg text-slate-400 hover:text-white transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative z-10 flex flex-col items-center">
          {/* Logo */}
          <div className="w-24 h-24 mb-4 drop-shadow-[0_0_15px_rgba(163,230,53,0.4)]">
            <img src={hackathonLogo} alt="Success" className="w-full h-full object-contain"/>
          </div>

          <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Statement Submitted!</h2>
          <p className="text-slate-400 text-sm mb-1">Your requirement brief has been recorded successfully.</p>
          
          <p className="text-lime-400 font-bold text-sm mb-8 tracking-wide">Thank you for contributing! 🤝</p>

          {/* Details Card */}
          <div className="w-full bg-white/5 border border-white/10 rounded-xl p-5 mb-8 text-left space-y-3">
            <div className="flex justify-between items-center border-b border-white/5 pb-2 mb-2">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-bold">Department</span>
              <span className="text-white font-semibold text-lg">{data.dept}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-bold">Title</span>
              <span className="text-lime-400 font-medium text-right text-sm">{data.title}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-bold">Coordinator</span>
              <span className="text-white font-medium">{data.coordinatorName}</span>
            </div>
          </div>

          {/* Actions - Removed bottom 'Close' button */}
          <button 
            onClick={onClose} 
            className="w-full py-3.5 rounded-lg bg-lime-500 text-black font-bold uppercase tracking-wider text-xs hover:bg-lime-400 transition-colors flex items-center justify-center gap-2"
          >
            <CheckCircle className="w-4 h-4" /> Submit Another
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContributionSuccessModal; 