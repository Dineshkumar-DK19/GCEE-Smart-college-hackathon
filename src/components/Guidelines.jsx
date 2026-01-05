import React from "react";
import { motion } from "framer-motion"; 
import { Users, ClipboardCheck, Cpu, ShieldAlert, Download } from "lucide-react";  

const Guidelines = () => {
  const guidelines = [
    {
      title: "Team & Eligibility",
      icon: <Users className="w-6 h-6 text-white" />, 
      rules: [
        "Teams must consist of 3 to 5 members.",
        "Interdisciplinary teams (any department or year) are highly encouraged.",
        "Each student is permitted to participate in only one team.",
        "Top 25 teams will be selected based on uniqueness and innovation." 
      ]
    },
    {
      title: "Requirements",
      icon: <ClipboardCheck className="w-6 h-6 text-white" />,
      rules: [
        "A valid College ID card is mandatory for all participants.",
        "Participants must bring their own laptops and chargers.",
        "All team members must remain at their allotted workspace during reviews.",
        "Attendance at the first review is mandatory."
      ]
    },
    {
      title: "Technical Guidelines",
      icon: <Cpu className="w-6 h-6 text-white" />,
      rules: [
        "Participants may use any programming language or framework.",
        "Strict adherence to deadlines is required.",
        "All presentations must use the official PPT format provided."
      ]
    },
    {
      title: "Code of Conduct",
      icon: <ShieldAlert className="w-6 h-6 text-white" />,
      rules: [
        "Plagiarism will result in immediate disqualification.",
        "Maintain professional behavior throughout the event.",
        "The decisions made by the judging panel are final.",
        "Organizers are not responsible for loss of personal belongings."
      ]
    }
  ];

  return (
    <section className="bg-[#020817]/70 py-16 px-6 font-sans relative z-0">
      <div className="max-w-6xl mx-auto space-y-10">
        <h2 className="text-2xl md:text-4xl font-bold text-white text-center tracking-wide mb-6">
          Guidelines
        </h2>

        {/* FIXED: Lowered z-index to z-0 so it stays behind modals */}
        <div className="flex justify-center relative z-0 mb-10">
          <motion.a
            href="/SCH_2026_Template.pptx"
            download="SCH_2026_Template.pptx"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-4 px-8 py-4 bg-lime-500 hover:bg-lime-400 text-slate-900 font-black uppercase tracking-widest text-sm rounded-xl shadow-[0_0_20px_rgba(132,204,22,0.3)] cursor-pointer"
          >
            <div className="p-2 bg-black/10 rounded-lg group-hover:bg-black/20 transition-colors">
              <Download className="w-5 h-5 stroke-[3px]" />
            </div>
            <div className="text-left leading-none">
              <span className="block text-[10px] font-bold opacity-60 mb-1">OFFICIAL PPT FORMAT</span>
              <span>Download Template</span>
            </div>
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {guidelines.map((section, index) => (
            <div key={index} className="bg-slate-900/40 border border-white/5 rounded-2xl p-6 hover:bg-slate-900/60 transition-colors duration-300"> 
              <div className="flex items-center gap-4 mb-5 border-b border-white/5 pb-4">
                <div className="p-2.5 bg-white/5 rounded-lg text-lime-400">
                  {section.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white tracking-wide">{section.title}</h3>
              </div>
              <ul className="space-y-3 list-disc list-inside text-slate-400">
                {section.rules.map((rule, idx) => (
                  <li key={idx} className="text-xs sm:text-sm md:text-lg leading-relaxed pl-1 marker:text-white/50">{rule}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guidelines;