"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, ArrowRight, CheckCircle, Loader2, X, ChevronDown, ShieldAlert, Check, FileText 
} from "lucide-react";
import LightRays from "./UI/LightRays"; 

/* ---------- Reusable Sub-Components ---------- */
const Label = ({ children, helper }) => (
  <div className="flex items-center justify-between mb-2 px-1">
    <label className="text-[10px] sm:text-xs font-bold text-slate-400 tracking-[0.15em] uppercase">
      {children}
    </label>
    {helper && (
      <span className="text-[9px] text-lime-500/80 font-medium italic hidden md:block tracking-wide">
        {helper}
      </span>
    )}
  </div>
);

const CheckboxGroup = ({ label, options, selectedValues, toggleValue }) => (
  <div className="space-y-3">
    <Label>{label}</Label>
    <div className="flex flex-wrap gap-4">
      {options.map((opt) => (
        <label key={opt} className="flex items-center gap-2 cursor-pointer group">
          <div 
            onClick={() => toggleValue(opt)}
            className={`w-5 h-5 rounded border transition-all flex items-center justify-center
              ${selectedValues.includes(opt) ? 'bg-lime-500 border-lime-500' : 'bg-[#0B1221] border-white/20 group-hover:border-white/40'}`}
          >
            {selectedValues.includes(opt) && <Check size={12} className="text-black stroke-[4px]" />}
          </div>
          <span className="text-xs text-slate-400 group-hover:text-white transition-colors">{opt}</span>
        </label>
      ))}
    </div>
  </div>
);

/* ---------- Main Component ---------- */
const Contribute = () => {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    dept: "", 
    title: "", 
    background: "", 
    description: "", 
    objective: "",
    features: "", 
    deliverables: "", 
    constraints: "",
    targetUsers: [], 
    appType: "", 
    sensitivity: "Low", 
    priority: "Low",
    coordinatorName: "", 
    coordinatorDesignation: "", 
    coordinatorEmail: "", 
    coordinatorContact: "", 
    consent: false
  });

  const departments = ["Admin Office", "Automobile Engineering", "Civil Engineering", "CSE", "CS&DS", "ECE", "EEE", "Estate Management", "Exam Cell", "Information Technology", "Mechanical Engineering", "Sports"].sort();

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

    const submissionData = {
      ...formData,
      targetUsers: formData.targetUsers.join(", ")
    };

    try {
      // We don't "await" the response strictly because 'no-cors' 
      // doesn't return a readable status anyway.
      fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionData)
      });

      // Jump straight to success state
      setTimeout(() => {
        setSubmitted(true);
        setIsSubmitting(false);
      }, 800); // Small delay for "feel"
      
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
    }
  };
  const inputStyle = "w-full bg-[#0B1221] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-700 focus:border-lime-500/40 outline-none transition-all";

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 flex justify-center relative overflow-hidden bg-[#020817]">
      
      {/* Background Grid Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.15]" 
           style={{ 
             backgroundImage: `linear-gradient(#ffffff10 1px, transparent 1px), linear-gradient(90deg, #ffffff10 1px, transparent 1px)`, 
             backgroundSize: '40px 40px' 
           }} 
      />
      
      <div className="absolute top-0 left-0 right-0 bottom-0 z-0 pointer-events-none">
        <LightRays raysOrigin="top-left" raysColor="rgba(163,230,53,0.15)" raysSpeed={0.5} />
        <LightRays raysOrigin="top-right" raysColor="rgba(255,255,255,0.05)" raysSpeed={0.8} />
      </div>

      <div className="w-full max-w-5xl relative z-10">
        <AnimatePresence mode="wait">
          {!showForm ? (
            <motion.div 
              key="hero" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              className="flex flex-col items-center text-center space-y-10 py-16"
            >
              <div className="px-4 py-1 rounded-full border border-lime-500/30 bg-lime-500/5 text-lime-400 text-[10px] font-bold uppercase tracking-[0.3em]">
                Faculty & Staff Portal
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-[0.9]">
                HAVE A CHALLENGE?<br />
                <span className="text-lime-400">CONTRIBUTE NOW.</span>
              </h1>
              <p className="max-w-xl text-slate-400 text-sm md:text-base leading-relaxed font-medium">
                Submit departmental requirements and problem statements. Our engineering teams will analyze and develop custom software solutions for you.
              </p>
              <button 
                onClick={() => setShowForm(true)}
                className="group flex items-center gap-4 px-10 py-4 bg-white text-black font-black uppercase tracking-widest rounded-2xl hover:bg-lime-400 transition-all duration-500 hover:shadow-[0_0_50px_rgba(163,230,53,0.3)] active:scale-95"
              >
                Start Contribution <ArrowRight className="group-hover:translate-x-2 transition-transform text-black" />
              </button>
            </motion.div>
          ) : (
            <motion.div 
              key="form" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
              className="rounded-[2.5rem] border border-white/10 bg-slate-950/60 backdrop-blur-2xl shadow-2xl overflow-hidden"
            >
              <div className="relative p-8 md:p-12 border-b border-white/5 flex justify-between items-center bg-gradient-to-r from-white/[0.02] to-transparent">
                <div className="text-left">
                  <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight uppercase leading-none">
                    Requirement <span className="text-lime-400">Brief</span>
                  </h2>
                  <p className="text-slate-500 text-[10px] tracking-[0.2em] font-bold mt-2 uppercase italic">ID: (To be assigned by committee)</p>
                </div>
                <button onClick={() => setShowForm(false)} className="p-3 bg-white/5 hover:bg-red-500/20 hover:text-red-500 rounded-2xl transition-all shadow-inner"><X size={20}/></button>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <Label helper="Department/Section">Department Name</Label>
                      <select className={inputStyle} onChange={(e)=>setFormData({...formData, dept: e.target.value})} required>
                        <option value="" className="bg-[#020817]">Select Department</option>
                        {departments.map(d => <option key={d} value={d} className="bg-[#020817]">{d}</option>)}
                      </select>
                    </div>
                    <div>
                      <Label helper="Professional Title">Problem Title</Label>
                      <input className={inputStyle} placeholder="Name of the problem statement..." onChange={(e)=>setFormData({...formData, title: e.target.value})} required />
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <Label helper="Current manual method">Background / Current Process</Label>
                      <textarea className={`${inputStyle} h-28 resize-none`} placeholder="Describe how the task is currently carried out..." onChange={(e)=>setFormData({...formData, background: e.target.value})} required />
                    </div>
                    <div>
                      <Label helper="List the inefficiencies">Problem Description</Label>
                      <textarea className={`${inputStyle} h-28 resize-none`} placeholder="List the issues, challenges, or inefficiencies..." onChange={(e)=>setFormData({...formData, description: e.target.value})} required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <Label helper="Goal">Objective</Label>
                      <textarea className={`${inputStyle} h-24 resize-none`} placeholder="Clearly state the goal..." onChange={(e)=>setFormData({...formData, objective: e.target.value})} required />
                    </div>
                    <div>
                      <Label helper="Expected modules">Key Features</Label>
                      <textarea className={`${inputStyle} h-24 resize-none`} placeholder="Mention the expected functionality..." onChange={(e)=>setFormData({...formData, features: e.target.value})} required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-4">
                    <CheckboxGroup 
                      label="Target Users" 
                      options={["Students", "Faculty", "Office Staff", "All"]} 
                      selectedValues={formData.targetUsers} 
                      toggleValue={handleToggleUser}
                    />
                    
                    <div className="space-y-3">
                      <Label>Application Type</Label>
                      <select className={inputStyle} onChange={(e)=>setFormData({...formData, appType: e.target.value})}>
                        <option value="" className="bg-[#020817]">Select Platform</option>
                        {["Web", "Mobile", "Desktop", "Any Platform"].map(opt => <option key={opt} value={opt} className="bg-[#020817]">{opt}</option>)}
                      </select>
                    </div>

                    <div className="space-y-3">
                      <Label>Data Sensitivity</Label>
                      <div className="flex bg-[#0B1221] rounded-xl p-1 border border-white/5">
                        {["Low", "Medium", "High"].map((level) => (
                          <button
                            key={level}
                            type="button"
                            onClick={() => setFormData({ ...formData, sensitivity: level })}
                            className={`flex-1 py-2 text-[10px] font-bold rounded-lg transition-all ${
                              formData.sensitivity === level 
                                ? "bg-lime-500 text-black" 
                                : "text-slate-500 hover:text-white"
                            }`}
                          >
                            {level}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label>Priority</Label>
                      <div className="flex bg-[#0B1221] rounded-xl p-1 border border-white/5">
                        {["Low", "Medium", "High"].map((prio) => (
                          <button
                            key={prio}
                            type="button"
                            onClick={() => setFormData({ ...formData, priority: prio })}
                            className={`flex-1 py-2 text-[10px] font-bold rounded-lg transition-all ${
                              formData.priority === prio 
                                ? "bg-lime-500 text-black" 
                                : "text-slate-500 hover:text-white"
                            }`}
                          >
                            {prio}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <Label helper="Outputs">Expected Deliverables</Label>
                      <input className={inputStyle} placeholder="Prototype, source code, etc..." onChange={(e)=>setFormData({...formData, deliverables: e.target.value})} />
                    </div>
                    <div>
                      <Label helper="Limitations">Constraints / Assumptions</Label>
                      <input className={inputStyle} placeholder="Mention specific constraints..." onChange={(e)=>setFormData({...formData, constraints: e.target.value})} />
                    </div>
                  </div>

                  <div className="p-8 rounded-[2rem] bg-lime-500/[0.03] border border-lime-500/10 space-y-8">
                    <div className="flex items-center gap-2 text-lime-400 uppercase text-[10px] font-black tracking-widest"><ShieldAlert size={16}/> Coordinator Details</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <input className={inputStyle} placeholder="Full Name" onChange={(e)=>setFormData({...formData, coordinatorName: e.target.value})} required />
                        <input className={inputStyle} placeholder="Designation" onChange={(e)=>setFormData({...formData, coordinatorDesignation: e.target.value})} required />
                      </div>
                      <div className="space-y-4">
                        <input className={inputStyle} placeholder="Official Email ID" type="email" onChange={(e)=>setFormData({...formData, coordinatorEmail: e.target.value})} required />
                        <input className={inputStyle} placeholder="Contact Number" type="tel" onChange={(e)=>setFormData({...formData, coordinatorContact: e.target.value})} required />
                      </div>
                    </div>
                    <div className="pt-4 border-t border-white/5">
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <div 
                          onClick={() => setFormData(prev => ({...prev, consent: !prev.consent}))}
                          className={`w-6 h-6 rounded-lg border transition-all flex items-center justify-center
                            ${formData.consent ? 'bg-lime-500 border-lime-500' : 'bg-transparent border-white/20 group-hover:border-lime-400'}`}
                        >
                          {formData.consent && <Check size={14} className="text-black stroke-[4px]" />}
                        </div>
                        <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                          I consent for <span className="text-white">Pilot Deployment</span> of the solution.
                        </span>
                      </label>
                    </div>
                  </div>

                  <button 
                    disabled={isSubmitting}
                    className="w-full py-6 rounded-2xl bg-white text-black font-black uppercase tracking-[0.3em] hover:bg-lime-400 transition-all duration-500 shadow-2xl shadow-lime-500/20 active:scale-[0.98] disabled:opacity-50"
                  >
                    {isSubmitting ? <Loader2 className="animate-spin mx-auto"/> : "Submit Statement"}
                  </button>
                </form>
              ) : (
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="py-24 text-center">
                  <div className="w-20 h-20 bg-lime-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} className="text-lime-400" />
                  </div>
                  <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter leading-none">Submission Sent</h3>
                  <p className="text-slate-500 text-sm mt-2 max-w-xs mx-auto">Your requirement brief has been recorded successfully.</p>
                  <button onClick={()=>setSubmitted(false)} className="mt-10 px-8 py-3 rounded-full border border-white/10 text-xs font-bold text-lime-400 uppercase tracking-widest hover:bg-white/5 transition-all">New Entry</button>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Contribute;