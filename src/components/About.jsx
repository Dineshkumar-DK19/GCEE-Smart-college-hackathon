"use client";
import React from "react";
import { motion } from "framer-motion";
import { Shield, Zap, Target, Lightbulb, ChevronRight } from "lucide-react";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 flex flex-col items-center relative overflow-hidden bg-transparent">
      {/* Background Grid Removed as per request */}

      <div className="w-full max-w-6xl relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-16 space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 rounded-full border border-lime-500/30 bg-lime-500/5 text-lime-400 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]"
          >
            Mission & Vision
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase"
          >
            ABOUT <span className="text-lime-400">SCH '26</span>
          </motion.h1>
          <div className="h-1 w-20 bg-lime-500 mx-auto rounded-full mt-4" />
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT COLUMN: THE INITIATIVE */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-black text-white uppercase tracking-wider flex items-center gap-3">
                <Target className="text-lime-400 w-6 h-6" /> The Initiative
              </h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                Smart College Hackathon (SCH) is an exclusive internal innovation platform designed for the brilliant minds of <span className="text-white font-bold">Government College of Engineering, Erode.</span>
              </p>
            </div>

            <div className="grid gap-4">
              {[
                "Focuses on solving real-world challenges within the college ecosystem.",
                "Problem statements sourced directly from Faculty and Administration.",
                "Ensures real-world relevance and immediate deployment of solutions.",
                "Promotes innovation, collaboration, and industry-standard learning."
              ].map((text, i) => (
                <motion.div 
                  key={i}
                  variants={itemVariants}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-lime-500/30 transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm md:text-base font-medium">{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN: CARDS */}
          <div className="space-y-6">
            
            {/* Vision Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-white/[0.03] border border-white/10 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
                <Zap size={80} className="text-lime-400" />
              </div>
              <div className="relative z-10 space-y-4">
                <div className="p-3 bg-lime-500/10 border border-lime-500/20 rounded-xl w-fit">
                  <Zap className="w-6 h-6 text-lime-400" />
                </div>
                <h3 className="text-2xl font-black text-white uppercase">Our Vision</h3>
                <p className="text-slate-400 text-sm md:text-lg leading-relaxed">
                  To build a <span className="text-white">smarter campus</span> by empowering students to bridge the gap between academic theory and impactful digital reality.
                </p>
              </div>
            </motion.div>

            {/* Eligibility Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group bg-white/[0.03] border border-white/10 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
                <Shield size={80} className="text-lime-400" />
              </div>
              <div className="relative z-10 space-y-4">
                <div className="p-3 bg-lime-500/10 border border-lime-500/20 rounded-xl w-fit">
                  <Shield className="w-6 h-6 text-lime-400" />
                </div>
                <h3 className="text-2xl font-black text-white uppercase">Eligibility</h3>
                <p className="text-slate-400 text-sm md:text-lg leading-relaxed">
                  Exclusively for <span className="text-white">GCE Erode Students.</span> We welcome solo innovators or teams ready to disrupt the status quo.
                </p>
              </div>
            </motion.div>

          </div>
        </div>

        {/* BOTTOM CALL TO ACTION */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-8 text-center"
        >
          <div className="flex flex-col items-center gap-4">
             <Lightbulb className="w-10 h-10 text-lime-400 animate-pulse" />
             <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Innovation begins with a single step</p>
             <h4 className="text-white text-lg font-bold">Ready to build the future of our campus?</h4>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;