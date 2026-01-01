"use client";
import React from "react";
import { motion } from "framer-motion";
import { Users, ClipboardCheck, Cpu, ShieldAlert, ArrowRight, CheckCircle2 } from "lucide-react";

const Guidelines = () => {
  const guidelines = [
    {
      title: "Team & Eligibility",
      icon: <Users className="w-6 h-6 text-lime-400" />,
      rules: [
        "Teams must consist of 3 to 5 members.",
        "Interdisciplinary teams (any department or year) are highly encouraged.",
        "Each student is permitted to participate in only one team."
      ]
    },
    {
      title: "Requirements",
      icon: <ClipboardCheck className="w-6 h-6 text-lime-400" />,
      rules: [
        "A valid College ID card is mandatory for all participants.",
        "Participants must bring their own laptops and chargers (power provided).",
        "All team members must remain at their allotted workspace during reviews.",
        "Attendance at the first review is mandatory to proceed further."
      ]
    },
    {
      title: "Technical Guidelines",
      icon: <Cpu className="w-6 h-6 text-lime-400" />,
      rules: [
        "Participants may use any programming language, framework, or open-source tool.",
        "Strict adherence to deadlines is required; late submissions will not be accepted."
      ]
    },
    {
      title: "Code of Conduct",
      icon: <ShieldAlert className="w-6 h-6 text-lime-400" />,
      rules: [
        "Plagiarism or sharing solutions between teams will result in immediate disqualification.",
        "Participants must maintain professional and respectful behavior throughout the event.",
        "The decisions made by the judging panel are final and binding.",
        "Organizers are not responsible for loss or damage to personal belongings."
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 flex flex-col items-center relative overflow-hidden bg-transparent">
      {/* Background Grid and Solid BG Color Removed */}

      <div className="w-full max-w-6xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 rounded-full border border-lime-500/30 bg-lime-500/5 text-lime-400 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]"
          >
            Event Regulations
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase"
          >
            THE <span className="text-lime-400">GUIDELINES</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-slate-500 text-xs md:text-sm font-medium uppercase tracking-widest italic"
          >
            Read carefully to ensure a smooth hackathon experience
          </motion.p>
        </div>

        {/* Guidelines Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {guidelines.map((section, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group relative bg-white/[0.03] border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-8 backdrop-blur-xl hover:border-lime-500/30 transition-all duration-500"
            >
              {/* Subtle Glow Effect on Hover */}
              <div className="absolute inset-0 bg-lime-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl md:rounded-3xl" />

              <div className="relative z-10">
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-lime-500/50 group-hover:bg-lime-500/10 transition-all duration-500">
                    {section.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-black text-white tracking-wide uppercase">
                    {section.title}
                  </h3>
                </div>
                
                {/* Rules List */}
                <ul className="space-y-4">
                  {section.rules.map((rule, idx) => (
                    <li key={idx} className="flex items-start gap-3 group/item">
                      <CheckCircle2 className="w-4 h-4 mt-1 text-lime-500/40 group-hover/item:text-lime-400 shrink-0 transition-colors" />
                      <span className="text-sm md:text-base text-slate-400 group-hover/item:text-slate-200 transition-colors leading-relaxed">
                        {rule}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center p-8 rounded-3xl border border-dashed border-white/10 bg-white/[0.01]"
        >
          <p className="text-slate-500 text-xs md:text-sm font-bold uppercase tracking-widest mb-4">
            Ready to show your talent?
          </p>
          <a 
            href="/register" 
            className="inline-flex items-center gap-2 text-lime-400 font-black text-sm uppercase group hover:gap-4 transition-all"
          >
            Proceed to Registration <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Guidelines;