import React from "react";
import { motion } from "framer-motion";
import { Share2, MessageCircle, X, Home } from "lucide-react";
import { useNavigate } from "react-router-dom"; // 1. Import Hook
import hackathonLogo from '../../assets/HackathonLogo.png'; 

const SuccessModal = ({ data, onClose, whatsappLink }) => {
  const navigate = useNavigate(); // 2. Initialize Hook

  if (!data) return null;

  const handleShare = () => {
    const text = `Hey guys! 👋%0A%0AI just registered our team *${data.teamName}* for *SCH '26*! 🚀%0A%0AJoin the official WhatsApp group here to stay updated:%0A${whatsappLink}%0A%0ALet's build something awesome! 🔥`;
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  const handleCloseAndNavigate = () => {
    onClose(); // Reset form data
    navigate('/'); // 3. Redirect to Home
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md px-4"
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative w-full max-w-lg bg-[#0B1221] border border-lime-500/30 rounded-2xl p-8 overflow-hidden text-center shadow-[0_0_50px_rgba(163,230,53,0.1)]"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-lime-500/10 blur-[60px]" />
        
        <div className="relative z-10 flex flex-col items-center">
          
          <div className="w-24 h-24 mb-4 drop-shadow-[0_0_15px_rgba(163,230,53,0.4)]">
            <img src={hackathonLogo} alt="Success" className="w-full h-full object-contain"/>
          </div>

          <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Registration Confirmed!</h2>
          <p className="text-slate-400 text-sm mb-8">You have successfully registered for SCH '26.</p>

          <div className="w-full bg-white/5 border border-white/10 rounded-xl p-5 mb-8 text-left space-y-3">
            <div className="flex justify-between items-center border-b border-white/5 pb-2 mb-2">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-bold">Team Name</span>
              <span className="text-white font-semibold text-lg">{data.teamName}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-bold">Problem ID</span>
              <span className="text-lime-400 font-mono font-medium">{data.problemStatement}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-bold">Members</span>
              <span className="text-white font-medium">{data.totalMembers}</span>
            </div>
          </div>

          <div className="mb-8">
            <p className="text-xl md:text-2xl font-black text-white/90 leading-tight">
              We will see you on <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400">
                JANUARY 30
              </span> 🚀
            </p>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
            <button onClick={handleShare} className="w-full py-3.5 rounded-lg bg-white/10 border border-white/10 text-white font-bold uppercase tracking-wider text-xs hover:bg-white/20 transition-colors flex items-center justify-center gap-2">
              <Share2 className="w-4 h-4" /> Share with Team
            </button>

            <a href={whatsappLink} target="_blank" rel="noreferrer" className="w-full py-3.5 rounded-lg bg-lime-500 text-black font-bold uppercase tracking-wider text-xs hover:bg-lime-400 transition-colors flex items-center justify-center gap-2">
              <MessageCircle className="w-4 h-4" /> Join Group
            </a>
          </div>

          <button 
            onClick={handleCloseAndNavigate} 
            className="text-slate-500 hover:text-white text-xs mt-6 transition-colors flex items-center gap-1 mx-auto"
          >
            <Home className="w-3 h-3" /> Close & Return Home
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SuccessModal;