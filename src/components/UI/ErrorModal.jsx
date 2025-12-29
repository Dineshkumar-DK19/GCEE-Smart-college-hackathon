import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const ErrorModal = ({ onClose }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
    onClick={onClose}
  >
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      className="bg-[#0B1221] border border-red-500/30 p-6 rounded-2xl max-w-sm w-full text-center relative shadow-[0_0_40px_rgba(239,68,68,0.2)]"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Icon Circle */}
      <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <AlertTriangle className="w-8 h-8 text-red-500" />
      </div>
      
      <h3 className="text-xl font-bold text-white mb-2">Incomplete Form</h3>
      
      <p className="text-slate-400 text-sm mb-6">
        Please fill in all the fields before submitting the registration.
      </p>
      
      <button 
        onClick={onClose}
        className="
          w-full py-3 
          bg-red-500 hover:bg-red-600 
          text-white rounded-lg font-bold 
          transition-colors uppercase tracking-wider text-sm
        "
      >
        Okay, I'll Fix It
      </button>
    </motion.div>
  </motion.div>
);

export default ErrorModal;