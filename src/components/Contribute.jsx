"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, CheckCircle, Loader2, X, ChevronDown, ShieldAlert, Check
} from "lucide-react";
import LightRays from "./UI/LightRays";

/* -------------------------------------------------------------------------- */
/* 1. CUSTOM DROPDOWN (Mobile Optimized)                                      */
/* -------------------------------------------------------------------------- */
const CustomDropdown = ({ value, onChange, options, placeholder }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`
          w-full flex items-center justify-between
          bg-[#0B1221] border rounded-lg
          px-3 py-2.5 sm:px-4 sm:py-3 text-sm text-left
          transition-all duration-300
          ${open ? "border-lime-500/50 ring-1 ring-lime-500/20" : "border-white/10 hover:border-white/30"}
        `}
      >
        <span className={`truncate mr-2 ${value ? "text-white" : "text-slate-600"}`}>
          {value || placeholder}
        </span>
        <ChevronDown
          size={16}
          className={`text-slate-400 transition-transform duration-300 shrink-0 ${open ? "rotate-180" : "rotate-0"}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="
              absolute z-50 mt-1 w-full
              bg-[#020817]/95 backdrop-blur-xl
              border border-white/10 rounded-xl
              shadow-xl
              max-h-56 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent
            "
          >
            {options.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
                className={`
                  w-full text-left px-4 py-2.5 text-xs sm:text-sm
                  transition-colors duration-200 border-b border-white/[0.02] last:border-none
                  hover:bg-lime-500/10 hover:text-lime-400
                  ${value === opt ? "bg-lime-500/20 text-lime-400 font-semibold" : "text-slate-300"}
                `}
              >
                {opt}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* REUSABLE SUB-COMPONENTS                                                    */
/* -------------------------------------------------------------------------- */
const Label = ({ children, helper }) => (
  <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-1.5 px-1 gap-1">
    <label className="text-[10px] sm:text-xs font-bold text-slate-400 tracking-[0.1em] uppercase">
      {children}
    </label>
    {helper && (
      <span className="text-[9px] sm:text-[10px] text-lime-500/80 font-medium italic tracking-wide">
        {helper}
      </span>
    )}
  </div>
);

const CheckboxGroup = ({ label, options, selectedValues, toggleValue }) => (
  <div className="space-y-2">
    <Label>{label}</Label>
    <div className="flex flex-wrap gap-2 sm:gap-3">
      {options.map((opt) => (
        <label key={opt} className="flex items-center gap-2 cursor-pointer group select-none bg-[#0B1221] border border-white/5 rounded-lg px-3 py-2 hover:border-white/20 transition-colors">
          <div
            onClick={() => toggleValue(opt)}
            className={`w-4 h-4 rounded border transition-all flex items-center justify-center shrink-0
              ${selectedValues.includes(opt) ? 'bg-lime-500 border-lime-500' : 'bg-transparent border-white/20'}`}
          >
            {selectedValues.includes(opt) && <Check size={10} className="text-black stroke-[4px]" />}
          </div>
          <span className="text-[10px] sm:text-xs text-slate-300 group-hover:text-white transition-colors">{opt}</span>
        </label>
      ))}
    </div>
  </div>
);

/* -------------------------------------------------------------------------- */
/* MAIN COMPONENT                                                             */
/* -------------------------------------------------------------------------- */
const Contribute = () => {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    dept: "", title: "", background: "", description: "", objective: "",
    features: "", deliverables: "", constraints: "", targetUsers: [],
    appType: "", sensitivity: "Low", priority: "Low",
    coordinatorName: "", coordinatorDesignation: "", coordinatorEmail: "", coordinatorContact: "",
    consent: false
  });

  const departments = ["Admin Office", "Automobile Engineering", "Civil Engineering", "CSE", "CS&DS", "ECE", "EEE", "Estate Management", "Exam Cell", "Information Technology", "Mechanical Engineering", "Sports"].sort();

  useEffect(() => {
    if (showForm) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [showForm]);

  const handleToggleUser = (val) => {
    setFormData(prev => ({
      ...prev,
      targetUsers: prev.targetUsers.includes(val)
        ? prev.targetUsers.filter(i => i !== val)
        : [...prev.targetUsers, val]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyacf7ZXmas-3DJuSWTYmY7Ou5DFH5JRLyl35AriwphHB9YNNCuus2yQIBAmYwYsjDd/exec";
    const submissionData = { ...formData, targetUsers: formData.targetUsers.join(", ") };

    try {
      fetch(SCRIPT_URL, {
        method: 'POST', mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionData)
      });
      setTimeout(() => { setSubmitted(true); setIsSubmitting(false); }, 800);
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
    }
  };

  // Compact input style for mobile
  const inputStyle = `
    w-full bg-[#0B1221] border rounded-lg
    px-3 py-2.5 sm:px-4 sm:py-3
    text-sm text-white placeholder:text-slate-600
    focus:outline-none focus:border-lime-500/40 transition-all border-white/10
  `;

  return (
    <div className=" pt-20 pb-12 px-4 sm:px-6 flex justify-center relative overflow-hidden bg-[#020817]/40">

      {/* Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.15]"
           style={{
             backgroundImage: `linear-gradient(#ffffff10 1px, transparent 1px), linear-gradient(90deg, #ffffff10 1px, transparent 1px)`,
             backgroundSize: '40px 40px'
           }}
      />


      <div className="w-full max-w-5xl relative z-10">
        <AnimatePresence mode="wait">
          {!showForm ? (
            <motion.div
              key="hero" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              className="flex flex-col items-center text-center space-y-6 md:space-y-10 py-10 md:py-16"
            >
              <div className="px-4 py-1.5 rounded-full border border-lime-500/30 bg-lime-500/5 text-lime-400 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em]">
                Faculty & Staff Portal
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-wide leading-[0.95]">
                HAVE A CHALLENGE ?<br />
                <span className="text-lime-400 tracking-wide">CONTRIBUTE NOW.</span>
              </h1>
              <p className="max-w-xl text-slate-400 text-sm sm:text-base leading-relaxed font-medium px-2">
                Submit departmental requirements and problem statements. Our engineering teams will analyze and develop custom software solutions for you.
              </p>
              <button
                onClick={() => setShowForm(true)}
                className="group flex items-center gap-3 md:gap-4 px-8 py-3 md:px-10 md:py-4 bg-white text-black font-black uppercase tracking-widest text-xs sm:text-sm rounded-2xl hover:bg-lime-400 transition-all duration-500 hover:shadow-[0_0_50px_rgba(163,230,53,0.3)] active:scale-95"
              >
                Start Contribution <ArrowRight className="group-hover:translate-x-2 transition-transform text-black w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </motion.div>
          ) : (

            /* --- MODAL WRAPPER --- */
            <div className="fixed inset-0 z-[100] flex items-center justify-center px-3 sm:px-4">
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setShowForm(false)}
                className="absolute inset-0 bg-black/70 backdrop-blur-md"
              />

              <motion.div
                key="form"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
                className="
                  relative w-full max-w-5xl
                  mt-20
                  max-h-[85vh] md:max-h-[90vh]
                  overflow-y-auto
                  bg-[#020817]/95 border border-white/10
                  rounded-2xl md:rounded-3xl
                  shadow-2xl shadow-black/80
                  scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent
                "
              >
                {/* Modal Header */}
                <div className="relative p-4 sm:p-5 md:p-6 border-b border-white/5 flex justify-between items-center bg-[#020817]/80 backdrop-blur-md sticky top-0 z-20">
                  <div className="text-left">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-black text-white tracking-tight uppercase leading-none">
                      Requirement <span className="text-lime-400">Brief</span>
                    </h2>
                    <p className="text-slate-500 text-[10px] sm:text-[11px] tracking-[0.15em] font-bold mt-1 uppercase italic">
                      ID: (To be assigned)
                    </p>
                  </div>
                  <button
                    onClick={() => setShowForm(false)}
                    className="p-2 bg-white/5 hover:bg-red-500/20 hover:text-red-500 rounded-lg sm:rounded-xl transition-all shadow-inner group"
                  >
                    <X className="w-5 h-5 text-slate-400 group-hover:text-red-500 transition-colors"/>
                  </button>
                </div>

                {!submitted ? (
                  /* Reduced Padding for Mobile (p-4) */
                  <form onSubmit={handleSubmit} className="p-4 sm:p-8 space-y-6">

                    {/* Compact Grid Gap (gap-4) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label helper="Department/Section">Department Name</Label>
                        <CustomDropdown
                          value={formData.dept}
                          onChange={(val) => setFormData({...formData, dept: val})}
                          options={departments}
                          placeholder="Select Department"
                        />
                      </div>
                      <div>
                        <Label helper="Professional Title">Problem Title</Label>
                        <input className={inputStyle} placeholder="Name of the problem statement..." onChange={(e)=>setFormData({...formData, title: e.target.value})} required />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <Label helper="Current manual method">Background / Current Process</Label>
                        <textarea className={`${inputStyle} h-24 resize-none`} placeholder="Describe how the task is currently carried out..." onChange={(e)=>setFormData({...formData, background: e.target.value})} required />
                      </div>
                      <div>
                        <Label helper="List the inefficiencies">Problem Description</Label>
                        <textarea className={`${inputStyle} h-24 resize-none`} placeholder="List the issues, challenges, or inefficiencies..." onChange={(e)=>setFormData({...formData, description: e.target.value})} required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label helper="Goal">Objective</Label>
                        <textarea className={`${inputStyle} h-24 resize-none`} placeholder="Clearly state the goal..." onChange={(e)=>setFormData({...formData, objective: e.target.value})} required />
                      </div>
                      <div>
                        <Label helper="Expected modules">Key Features</Label>
                        <textarea className={`${inputStyle} h-24 resize-none`} placeholder="Mention the expected functionality..." onChange={(e)=>setFormData({...formData, features: e.target.value})} required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-2">
                      <CheckboxGroup
                        label="Target Users"
                        options={["Students", "Faculty", "Office Staff", "All"]}
                        selectedValues={formData.targetUsers}
                        toggleValue={handleToggleUser}
                      />
                      <div className="space-y-2">
                        <Label>Application Type</Label>
                        <CustomDropdown
                          value={formData.appType}
                          onChange={(val) => setFormData({...formData, appType: val})}
                          options={["Web", "Mobile", "Desktop", "Any Platform"]}
                          placeholder="Select Platform"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Data Sensitivity</Label>
                        <div className="flex bg-[#0B1221] rounded-lg p-1 border border-white/5">
                          {["Low", "Medium", "High"].map((level) => (
                            <button
                              key={level} type="button"
                              onClick={() => setFormData({ ...formData, sensitivity: level })}
                              className={`flex-1 py-2 text-[10px] sm:text-xs font-bold rounded-md transition-all ${
                                formData.sensitivity === level ? "bg-lime-500 text-black" : "text-slate-500 hover:text-white"
                              }`}
                            >
                              {level}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Priority</Label>
                        <div className="flex bg-[#0B1221] rounded-lg p-1 border border-white/5">
                          {["Low", "Medium", "High"].map((prio) => (
                            <button
                              key={prio} type="button"
                              onClick={() => setFormData({ ...formData, priority: prio })}
                              className={`flex-1 py-2 text-[10px] sm:text-xs font-bold rounded-md transition-all ${
                                formData.priority === prio ? "bg-lime-500 text-black" : "text-slate-500 hover:text-white"
                              }`}
                            >
                              {prio}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label helper="Outputs">Expected Deliverables</Label>
                        <input className={inputStyle} placeholder="Prototype, source code, etc..." onChange={(e)=>setFormData({...formData, deliverables: e.target.value})} />
                      </div>
                      <div>
                        <Label helper="Limitations">Constraints / Assumptions</Label>
                        <input className={inputStyle} placeholder="Mention specific constraints..." onChange={(e)=>setFormData({...formData, constraints: e.target.value})} />
                      </div>
                    </div>

                    <div className="p-4 sm:p-5 rounded-2xl bg-lime-500/[0.03] border border-lime-500/10 space-y-4">
                      <div className="flex items-center gap-2 text-lime-400 uppercase text-[10px] md:text-xs font-black tracking-widest">
                        <ShieldAlert className="w-4 h-4 md:w-5 md:h-5"/> Coordinator Details
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-4">
                          <input className={inputStyle} placeholder="Full Name" onChange={(e)=>setFormData({...formData, coordinatorName: e.target.value})} required />
                          <input className={inputStyle} placeholder="Designation" onChange={(e)=>setFormData({...formData, coordinatorDesignation: e.target.value})} required />
                        </div>
                        <div className="space-y-4">
                          <input className={inputStyle} placeholder="Official Email ID" type="email" onChange={(e)=>setFormData({...formData, coordinatorEmail: e.target.value})} required />
                          <input className={inputStyle} placeholder="Contact Number" type="tel" onChange={(e)=>setFormData({...formData, coordinatorContact: e.target.value})} required />
                        </div>
                      </div>
                      <div className="pt-3 border-t border-white/5">
                        <label className="flex items-start gap-3 cursor-pointer group">
                          <div
                            onClick={() => setFormData(prev => ({...prev, consent: !prev.consent}))}
                            className={`w-5 h-5 shrink-0 rounded border transition-all flex items-center justify-center mt-0.5
                              ${formData.consent ? 'bg-lime-500 border-lime-500' : 'bg-transparent border-white/20 group-hover:border-lime-400'}`}
                          >
                            {formData.consent && <Check size={12} className="text-black stroke-[4px]" />}
                          </div>
                          <span className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider leading-relaxed">
                            I consent for <span className="text-white">Pilot Deployment</span> of the solution within the campus.
                          </span>
                        </label>
                      </div>
                    </div>

                    <div className="text-center pt-2">
                      <button
                        disabled={isSubmitting}
                        className="
                          w-full sm:w-auto
                          px-10 md:px-12
                          py-3 md:py-3.5
                          rounded-xl
                          bg-white text-black font-black uppercase tracking-[0.2em]
                          text-xs sm:text-sm
                          hover:bg-lime-400 transition-all duration-500
                          shadow-lg shadow-lime-500/20 active:scale-[0.98]
                          disabled:opacity-50
                        "
                      >
                        {isSubmitting ? <Loader2 className="animate-spin mx-auto w-5 h-5"/> : "Submit Statement"}
                      </button>
                    </div>
                  </form>
                ) : (
                  <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="py-20 text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-lime-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-lime-400" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white uppercase italic tracking-tighter leading-none">Submission Sent</h3>
                    <p className="text-slate-500 text-xs sm:text-sm mt-2 max-w-xs mx-auto">Your requirement brief has been recorded successfully.</p>
                    <button onClick={()=>setSubmitted(false)} className="mt-8 px-8 py-3 rounded-full border border-white/10 text-xs font-bold text-lime-400 uppercase tracking-widest hover:bg-white/5 transition-all">New Entry</button>
                  </motion.div>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Contribute;