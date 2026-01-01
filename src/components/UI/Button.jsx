import React from "react";
import { Loader2 } from "lucide-react";

const Button = ({ children, isLoading, onClick, className = "", type = "button", disabled }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isLoading || disabled}
      className={`
        group relative
        w-full  /* CHANGED: Always full width */
        px-10 py-3.5
        rounded-xl
        bg-white text-black font-black uppercase tracking-[0.2em]
        text-xs sm:text-sm
        hover:bg-lime-400 transition-all duration-300
        shadow-lg shadow-lime-500/20 active:scale-[0.98]
        disabled:opacity-50 disabled:cursor-not-allowed
        flex items-center justify-center gap-2
        ${className}
      `}
    >
      {isLoading ? <Loader2 className="animate-spin w-5 h-5" /> : children}
    </button>
  );
};

export default Button;