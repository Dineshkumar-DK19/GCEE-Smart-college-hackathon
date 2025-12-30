"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as XLSX from 'xlsx';
import { Upload, FileSpreadsheet, Users, User, CheckCircle, AlertCircle, ChevronDown, Check } from "lucide-react";

/* -------------------------------------------------------------------------- */
/* 1. CUSTOM DROPDOWN (Matches Contribute.jsx style but supports objects)     */
/* -------------------------------------------------------------------------- */
const CustomDropdown = ({ value, onChange, options, placeholder, error }) => {
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
          ${error ? 'border-red-500/50' : (open ? "border-lime-500/50 ring-1 ring-lime-500/20" : "border-white/10 hover:border-white/30")}
        `}
      >
        <span className={`truncate mr-2 ${value ? "text-white" : "text-slate-500"}`}>
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
              bg-[#0B1221] border border-white/10 rounded-xl
              shadow-xl
              max-h-56 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent
            "
          >
            {options.map((opt, i) => {
              const label = typeof opt === 'object' ? opt.label : opt;
              const val = typeof opt === 'object' ? opt.value : opt;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => { onChange(val); setOpen(false); }}
                  className={`
                    w-full text-left px-4 py-2.5 text-xs sm:text-sm
                    transition-colors border-b border-white/[0.05] last:border-none
                    hover:bg-lime-500/10 hover:text-lime-400
                    ${value === val ? "bg-lime-500/10 text-lime-400 font-medium" : "text-slate-300"}
                  `}
                >
                  {label}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* REUSABLE STYLES                                                            */
/* -------------------------------------------------------------------------- */
const Label = ({ children }) => (
  <label className="text-[10px] sm:text-xs font-bold text-slate-400 tracking-[0.1em] uppercase mb-1.5 block">
    {children} <span className="text-red-500">*</span>
  </label>
);

// Compact Input: Reduced vertical padding (py-2.5) for mobile
const inputStyle = `
  w-full bg-[#0B1221] border border-white/10 rounded-lg
  px-3 py-2.5 sm:px-4 sm:py-3
  text-sm text-white placeholder:text-slate-600
  focus:outline-none focus:border-lime-500/50 focus:ring-1 focus:ring-lime-500/20
  transition-all duration-300
`;

const Register = () => {
  const [formData, setFormData] = useState({
    teamName: "",
    problemStatement: "",
    teamLeader: { name: "", email: "", phone: "", rollNo: "", dept: "" },
    totalMembers: "3",
    members: [
      { name: "", rollNo: "", dept: "" },
      { name: "", rollNo: "", dept: "" },
    ],
    pptFile: null,
    agreed: false,
  });

  const [errors, setErrors] = useState({});

  const problemStatements = [
    { value: "PS01 - Smart Campus Energy", label: "PS01 - Smart Campus Energy" },
    { value: "PS02 - AI Attendance", label: "PS02 - AI Attendance" },
    { value: "PS03 - Blockchain Certs", label: "PS03 - Blockchain Certs" },
    { value: "PS04 - Waste Management", label: "PS04 - Waste Management" },
    { value: "PS05 - Open Innovation", label: "PS05 - Open Innovation" },
  ];

  const departments = ["CSE", "IT", "CS&DS", "ECE", "EEE", "MECH", "AUTO", "CIVIL"];

  /* --- Handlers (Same logic as before) --- */
  const handleLeaderChange = (field, value) => {
    setFormData((prev) => ({ ...prev, teamLeader: { ...prev.teamLeader, [field]: value }}));
  };
  const handleMemberChange = (index, field, value) => {
    const updated = [...formData.members]; updated[index] = { ...updated[index], [field]: value };
    setFormData((prev) => ({ ...prev, members: updated }));
  };
  const handleTotalMembersChange = (val) => {
    const count = parseInt(val);
    const current = formData.members;
    const newMems = Array(count - 1).fill(null).map((_, i) => current[i] || { name: "", rollNo: "", dept: "" });
    setFormData((prev) => ({ ...prev, totalMembers: val, members: newMems }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.teamName) newErrors.teamName = "Required";
    if (!formData.problemStatement) newErrors.problemStatement = "Required";
    if (!formData.teamLeader.name) newErrors.leaderName = "Required";
    if (!formData.teamLeader.email) newErrors.leaderEmail = "Required";
    if (!formData.teamLeader.phone) newErrors.leaderPhone = "Required";
    if (!formData.teamLeader.rollNo) newErrors.leaderRoll = "Required";
    if (!formData.teamLeader.dept) newErrors.leaderDept = "Required";
    formData.members.forEach((m, i) => {
      if (!m.name) newErrors[`member${i}Name`] = "Required";
      if (!m.rollNo) newErrors[`member${i}Roll`] = "Required";
      if (!m.dept) newErrors[`member${i}Dept`] = "Required";
    });
    if (!formData.pptFile) newErrors.pptFile = "Required";
    if (!formData.agreed) newErrors.agreed = "Required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const saveToExcel = () => {
    const flatData = {
      "Team": formData.teamName, "PS": formData.problemStatement,
      "Leader": formData.teamLeader.name, "Email": formData.teamLeader.email,
      "Phone": formData.teamLeader.phone, "Roll": formData.teamLeader.rollNo, "Dept": formData.teamLeader.dept
    };
    formData.members.forEach((m, i) => {
      flatData[`Mem${i+1}`] = m.name; flatData[`Mem${i+1}Roll`] = m.rollNo; flatData[`Mem${i+1}Dept`] = m.dept;
    });
    const ws = XLSX.utils.json_to_sheet([flatData]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Reg");
    XLSX.writeFile(wb, `${formData.teamName}_Reg.xlsx`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      saveToExcel();
      alert("Success! Downloading Excel...");
      window.open("https://chat.whatsapp.com/GEN0hzyt2EM731AzmfUfjW", "_blank");
    } else {
      alert("Please check all fields.");
    }
  };

  return (
    // Reduced padding-top from pt-28 to pt-20 on mobile
    <div className="min-h-screen pt-20 pb-12 px-3 sm:px-6 flex justify-center relative bg-[#020817] overflow-x-hidden">

      {/* Background FX */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] bg-white/5 blur-[80px] rounded-full" />
        <div className="absolute bottom-[10%] right-[20%] w-[30vw] h-[30vw] bg-white/5 blur-[80px] rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="
          w-full max-w-4xl relative z-10
          rounded-2xl border border-white/10
          bg-slate-950/50 backdrop-blur-xl
          shadow-2xl overflow-hidden
        "
      >
        <div className="p-6 md:p-8 text-center border-b border-white/5">
          <h1 className="text-2xl md:text-4xl font-black text-white tracking-tighter mb-1">
            SCH '26 REGISTRATION
          </h1>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
            Join the Innovation Wave
          </p>
        </div>

        {/* Reduced padding inside form form p-6 to p-4 on mobile */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-8 space-y-8">

          {/* TEAM INFO */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-lime-400 uppercase tracking-widest flex items-center gap-2">
              <Users size={16}/> Team Info
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Team Name</Label>
                <input
                  className={`${inputStyle} ${errors.teamName ? "border-red-500/50" : "border-white/10"}`}
                  placeholder="e.g. Code Warriors"
                  value={formData.teamName} onChange={(e) => setFormData({...formData, teamName: e.target.value})}
                />
              </div>
              <div>
                <Label>Problem Statement</Label>
                <CustomDropdown
                  value={formData.problemStatement}
                  onChange={(val) => setFormData({...formData, problemStatement: val})}
                  options={problemStatements}
                  placeholder="Select PS"
                  error={errors.problemStatement}
                />
              </div>
            </div>
          </div>

          {/* LEADER INFO */}
          <div className="space-y-4">
             <h3 className="text-sm font-bold text-lime-400 uppercase tracking-widest flex items-center gap-2">
              <User size={16}/> Leader Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                 <Label>Full Name</Label>
                 <input className={`${inputStyle} ${errors.leaderName ? "border-red-500" : ""}`} placeholder="Name" value={formData.teamLeader.name} onChange={(e) => handleLeaderChange('name', e.target.value)} />
              </div>
              <div>
                 <Label>Email</Label>
                 <input className={`${inputStyle} ${errors.leaderEmail ? "border-red-500" : ""}`} type="email" placeholder="Email" value={formData.teamLeader.email} onChange={(e) => handleLeaderChange('email', e.target.value)} />
              </div>
              <div>
                 <Label>Phone</Label>
                 <input className={`${inputStyle} ${errors.leaderPhone ? "border-red-500" : ""}`} type="tel" placeholder="Phone" value={formData.teamLeader.phone} onChange={(e) => handleLeaderChange('phone', e.target.value)} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                 <div>
                    <Label>Roll No</Label>
                    <input className={`${inputStyle} ${errors.leaderRoll ? "border-red-500" : ""}`} placeholder="Roll No" value={formData.teamLeader.rollNo} onChange={(e) => handleLeaderChange('rollNo', e.target.value)} />
                 </div>
                 <div>
                    <Label>Dept</Label>
                    <CustomDropdown value={formData.teamLeader.dept} onChange={(val) => handleLeaderChange('dept', val)} options={departments} placeholder="Dept" error={errors.leaderDept} />
                 </div>
              </div>
            </div>
          </div>

          {/* MEMBERS */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-lime-400 uppercase tracking-widest flex items-center gap-2">
                <Users size={16}/> Members
              </h3>
              <div className="w-24">
                <CustomDropdown value={formData.totalMembers} onChange={handleTotalMembersChange} options={['3', '4', '5']} placeholder="Size" />
              </div>
            </div>

            <div className="space-y-3">
              <AnimatePresence>
                {formData.members.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="p-3 sm:p-4 rounded-xl border border-white/5 bg-white/[0.02]"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-5 h-5 rounded bg-white/10 text-white flex items-center justify-center text-[10px] font-bold">{index + 1}</div>
                      <span className="text-[10px] font-bold text-slate-500 uppercase">Member</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <input className={`${inputStyle} ${errors[`member${index}Name`] ? "border-red-500" : ""}`} placeholder="Name" value={member.name} onChange={(e) => handleMemberChange(index, 'name', e.target.value)} />
                      <input className={`${inputStyle} ${errors[`member${index}Roll`] ? "border-red-500" : ""}`} placeholder="Roll No" value={member.rollNo} onChange={(e) => handleMemberChange(index, 'rollNo', e.target.value)} />
                      <CustomDropdown value={member.dept} onChange={(val) => handleMemberChange(index, 'dept', val)} options={departments} placeholder="Dept" error={errors[`member${index}Dept`]} />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* SUBMIT */}
          <div className="pt-4 border-t border-white/10 space-y-6">
            <div className={`
              border-2 border-dashed rounded-xl p-6 text-center transition-colors
              ${errors.pptFile ? 'border-red-500/40 bg-red-500/5' : 'border-white/10 hover:border-white/20'}
            `}>
              <input type="file" accept=".ppt,.pptx,.pdf" onChange={(e) => setFormData({...formData, pptFile: e.target.files[0]})} className="hidden" id="ppt-upload"/>
              <label htmlFor="ppt-upload" className="cursor-pointer block">
                <Upload className="w-6 h-6 mx-auto mb-2 text-slate-400" />
                <p className="text-xs text-slate-300 font-medium">
                  {formData.pptFile ? formData.pptFile.name : "Upload Presentation (PPT/PDF)"}
                </p>
              </label>
            </div>

            <div className="flex items-start gap-3">
               <div onClick={() => setFormData({...formData, agreed: !formData.agreed})} className={`mt-0.5 w-5 h-5 rounded border flex items-center justify-center cursor-pointer ${formData.agreed ? 'bg-lime-500 border-lime-500' : 'border-white/30'}`}>
                  {formData.agreed && <Check size={12} className="text-black" />}
               </div>
               <p className="text-xs text-slate-400 leading-relaxed">
                 I agree to the <span className="text-white font-bold">Guidelines</span>.
                 {errors.agreed && <span className="text-red-500 block"> * Required</span>}
               </p>
            </div>

            <button type="submit" className="w-full py-3.5 rounded-xl bg-white text-black font-black uppercase tracking-widest hover:bg-lime-400 transition-colors shadow-lg">
              Confirm Registration
            </button>
          </div>

        </form>
      </motion.div>
    </div>
  );
};

export default Register;