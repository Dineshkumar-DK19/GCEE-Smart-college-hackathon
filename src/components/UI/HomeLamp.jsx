import React from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

const HomeLamp = ({ className }) => {
  return (
    <div className={cn("absolute top-0 left-0 w-full h-full flex items-start justify-center pointer-events-none z-0", className)}>
      
      {/* 1. The Main Beam (Shining Downwards onto the Logo) */}
      <motion.div
        initial={{ opacity: 0, width: "10rem", height: "10rem" }}
        whileInView={{ opacity: 1, width: "40rem", height: "20rem" }}
        transition={{
          delay: 0.2,
          duration: 1.5,
          ease: "easeInOut",
        }}
        // "top-[-8rem]" hides the source behind the navbar/header area
        className="absolute top-[-8rem] bg-white/10 blur-[5rem] rounded-full mix-blend-screen"
      />

      {/* 2. The Core Glow (Brighter center) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute top-[-2rem] w-[15rem] h-[8rem] bg-white/30 blur-[3rem] rounded-full"
      />
      
      {/* 3. The Sharp "Light Source" Line */}
      <div className="absolute top-0 w-[20rem] h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent blur-[1px]" />
      
    </div>
  );
};

export default HomeLamp;