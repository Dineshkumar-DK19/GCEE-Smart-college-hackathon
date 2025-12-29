import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileSpreadsheet, Users, User, CheckCircle, AlertCircle, Loader2, Check } from "lucide-react";
import LightRays from "../components/UI/LightRays"; 
import SuccessModal from "../components/UI/SuccessModal"; 
import ErrorModal from "../components/UI/ErrorModal"; // 1. IMPORT NEW COMPONENT

/* -------------------------------------------------------------------------- */
/* REUSABLE INPUTS                                                            */
/* -------------------------------------------------------------------------- */

// 2. REMOVED RED STAR FROM LABEL
const Label = ({ children }) => (
  <label className="text-[10px] sm:text-xs font-bold text-slate-400 tracking-[0.15em] uppercase mb-2 block">
    {children} 
  </label>
);

const Input = ({ error, ...props }) => (
  <div className="relative">
    <input
      {...props}
      className={`
        w-full bg-[#0B1221] border 
        ${error ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-white/60'}
        rounded-lg px-4 
        py-2.5 sm:py-3.5 
        text-sm text-white placeholder:text-slate-600
        focus:outline-none focus:ring-0 transition-colors duration-300
      `}
    />
    {error && <AlertCircle className="absolute right-3 top-2.5 sm:top-3.5 w-4 h-4 text-red-500" />}
  </div>
);

const Select = ({ options, defaultText, error, ...props }) => (
  <div className="relative">
    <select
      {...props}
      className={`
        w-full bg-[#0B1221] border appearance-none
        ${error ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-white/60'}
        rounded-lg px-4 
        py-2.5 sm:py-3.5 
        text-sm text-white 
        focus:outline-none focus:ring-0 transition-colors duration-300
      `}
    >
      <option value="" disabled className="bg-[#020817] text-slate-500">{defaultText}</option>
      {options.map((opt, i) => (
        <option key={i} value={opt.value || opt} className="bg-[#020817] text-white">
          {opt.label || opt}
        </option>
      ))}
    </select>
    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 text-xs">▼</div>
  </div>
);

/* -------------------------------------------------------------------------- */
/* MAIN COMPONENT                                                             */
/* -------------------------------------------------------------------------- */

const Register = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successData, setSuccessData] = useState(null); 
  const [showError, setShowError] = useState(false); 
  
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyVAnw8z9uPyMrYlXpjpo1w_60jJRNjl23_XN_PUVwHG03W-j59UiBFO-61t62wdkK-/exec"; 
  const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/GEN0hzyt2EM731AzmfUfjW";

  const problemStatements = [
    { id: "PS01", title: "Smart Campus Energy Management" },
    { id: "PS02", title: "AI-Driven Attendance System" },
    { id: "PS03", title: "Blockchain for Certificate Verification" },
    { id: "PS04", title: "Waste Management Optimization" },
    { id: "PS05", title: "Open Innovation" },
  ];

  const departments = ["CSE", "IT", "CS&DS", "ECE", "EEE", "MECH", "AUTO", "CIVIL"];
  const years = ["1st Year", "2nd Year", "3rd Year", "4th Year"];

  const INITIAL_STATE = {
    teamName: "",
    problemStatement: "",
    teamLeader: { name: "", email: "", phone: "", rollNo: "", year: "", dept: "" },
    totalMembers: "3", 
    members: [
      { name: "", rollNo: "", year: "", dept: "" }, 
      { name: "", rollNo: "", year: "", dept: "" }, 
    ],
    pptLink: "", 
    agreed: false,
  };

  const [formData, setFormData] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState({});

  const handleLeaderChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      teamLeader: { ...prev.teamLeader, [name]: value },
    }));
  };

  const handleMemberChange = (index, e) => {
    const { name, value } = e.target;
    const updatedMembers = [...formData.members];
    updatedMembers[index] = { ...updatedMembers[index], [name]: value };
    setFormData((prev) => ({ ...prev, members: updatedMembers }));
  };

  const handleTotalMembersChange = (e) => {
    const count = parseInt(e.target.value);
    const neededMembers = count - 1; 
    const currentMembers = formData.members;
    const newMembers = Array(neededMembers).fill(null).map((_, i) => 
      currentMembers[i] || { name: "", rollNo: "", year: "", dept: "" }
    );
    setFormData((prev) => ({
      ...prev,
      totalMembers: e.target.value,
      members: newMembers,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.teamName) newErrors.teamName = "Required";
    if (!formData.problemStatement) newErrors.problemStatement = "Required";
    
    if (!formData.teamLeader.name) newErrors.leaderName = "Required";
    if (!formData.teamLeader.email) newErrors.leaderEmail = "Required";
    if (!formData.teamLeader.phone) newErrors.leaderPhone = "Required";
    if (!formData.teamLeader.rollNo) newErrors.leaderRoll = "Required";
    if (!formData.teamLeader.year) newErrors.leaderYear = "Required";
    if (!formData.teamLeader.dept) newErrors.leaderDept = "Required";

    formData.members.forEach((m, i) => {
      if (!m.name) newErrors[`member${i}Name`] = "Required";
      if (!m.rollNo) newErrors[`member${i}Roll`] = "Required";
      if (!m.year) newErrors[`member${i}Year`] = "Required";
      if (!m.dept) newErrors[`member${i}Dept`] = "Required";
    });

    if (!formData.pptLink) newErrors.pptLink = "Required";
    if (!formData.agreed) newErrors.agreed = "Required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitToGoogleSheets = async () => {
    setIsSubmitting(true);
    
    const data = new FormData();
    data.append("Team Name", formData.teamName);
    data.append("Problem Statement", formData.problemStatement);
    data.append("PPT Link", formData.pptLink); 
    
    data.append("Leader Name", formData.teamLeader.name);
    data.append("Leader Email", formData.teamLeader.email);
    data.append("Leader Phone", formData.teamLeader.phone);
    data.append("Leader Roll", formData.teamLeader.rollNo);
    data.append("Leader Year", formData.teamLeader.year); 
    data.append("Leader Dept", formData.teamLeader.dept);
    data.append("Total Members", formData.totalMembers);

    formData.members.forEach((m, i) => {
      data.append(`Member ${i+1} Name`, m.name);
      data.append(`Member ${i+1} Roll`, m.rollNo);
      data.append(`Member ${i+1} Year`, m.year); 
      data.append(`Member ${i+1} Dept`, m.dept);
    });

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        body: data,
        mode: "no-cors",
      });
      setSuccessData(formData);
    } catch (error) {
      console.error("Error!", error.message);
      alert("Submission failed. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      submitToGoogleSheets();
    } else {
      setShowError(true); // 3. TRIGGER SEPARATE COMPONENT
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 flex justify-center relative overflow-hidden">
      
      <div className="fixed inset-0 w-full h-full pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-[30vw] h-[30vw] bg-white/5 blur-[100px] rounded-full" />
        <div className="absolute bottom-[10%] right-[20%] w-[20vw] h-[20vw] bg-white/5 blur-[100px] rounded-full" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="
          w-full max-w-5xl relative z-10
          rounded-3xl border border-white/10
          bg-slate-950/40 backdrop-blur-xl
          shadow-[0_0_50px_-10px_rgba(0,0,0,0.5)]
          overflow-hidden
        "
      >
        <div className="relative p-8 md:p-10 border-b border-white/5 text-center">
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <LightRays raysColor="#ffffff" raysSpeed={0.2} />
          </div>
          <h1 className="text-2xl md:text-4xl font-black text-white tracking-tight mb-2 drop-shadow-sm relative z-10">
            SCH '26 <span className="text-white/70">REGISTRATION</span>
          </h1>
          <p className="text-slate-400 text-xs md:text-sm uppercase tracking-widest font-medium relative z-10">
            Join the Innovation Wave
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 md:p-10 space-y-10">
          
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-2 border-b border-white/5">
              <Users className="w-5 h-5 text-white" />
              <h3 className="text-lg font-bold text-white">Team Details</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label>Team Name</Label>
                <Input placeholder="e.g. GCEE Innovators" value={formData.teamName} onChange={(e) => setFormData({...formData, teamName: e.target.value})} error={errors.teamName} />
              </div>
              <div>
                <Label>Problem Statement</Label>
                <Select defaultText="Select Statement" value={formData.problemStatement} onChange={(e) => setFormData({...formData, problemStatement: e.target.value})} options={problemStatements.map(ps => ({ value: ps.id, label: `${ps.id} - ${ps.title}` }))} error={errors.problemStatement} />
              </div>
            </div>
          </div>

          {/* LEADER INFO */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-2 border-b border-white/5">
              <User className="w-5 h-5 text-white" />
              <h3 className="text-lg font-bold text-white">Team Leader</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div><Label>Full Name</Label><Input name="name" placeholder="Alice S" value={formData.teamLeader.name} onChange={handleLeaderChange} error={errors.leaderName} /></div>
              <div><Label>Email Address</Label><Input name="email" type="email" placeholder="Alice@gmail.com" value={formData.teamLeader.email} onChange={handleLeaderChange} error={errors.leaderEmail} /></div>
              <div><Label>Phone Number</Label><Input name="phone" type="tel" placeholder="98765 43210" value={formData.teamLeader.phone} onChange={handleLeaderChange} error={errors.leaderPhone} /></div>
              
              <div className="grid grid-cols-3 gap-4">
                <div><Label>Roll No</Label><Input name="rollNo" placeholder="23CSE01" value={formData.teamLeader.rollNo} onChange={handleLeaderChange} error={errors.leaderRoll} /></div>
                <div><Label>Year</Label><Select name="year" defaultText="Year" value={formData.teamLeader.year} onChange={handleLeaderChange} options={years} error={errors.leaderYear} /></div>
                <div><Label>Dept</Label><Select name="dept" defaultText="Dept" value={formData.teamLeader.dept} onChange={handleLeaderChange} options={departments} error={errors.leaderDept} /></div>
              </div>
            </div>
          </div>

          {/* MEMBERS INFO */}
          <div className="space-y-6">
            <div className="flex flex-wrap items-end justify-between gap-4 pb-2 border-b border-white/5">
              <div className="flex items-center gap-3"><Users className="w-5 h-5 text-white" /><h3 className="text-lg font-bold text-white">Team Members</h3></div>
              <div className="w-full md:w-48"><Label>Total Size (Inc. Leader)</Label><Select value={formData.totalMembers} onChange={handleTotalMembersChange} options={['3', '4', '5']} defaultText="Select Size" /></div>
            </div>
            <div className="space-y-4">
              <AnimatePresence>
                {formData.members.map((member, index) => (
                  <motion.div key={index} initial={{ opacity: 0, height: 0, y: -10 }} animate={{ opacity: 1, height: "auto", y: 0 }} exit={{ opacity: 0, height: 0, y: -10 }} className="p-5 rounded-xl border border-white/5 bg-white/[0.02]">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 rounded-full bg-white/10 text-white flex items-center justify-center text-xs font-bold">{index + 1}</div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Member Details</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="md:col-span-1"><Label>Name</Label><Input name="name" placeholder="Name" value={member.name} onChange={(e) => handleMemberChange(index, e)} error={errors[`member${index}Name`]} /></div>
                      <div><Label>Roll No</Label><Input name="rollNo" placeholder="Roll No" value={member.rollNo} onChange={(e) => handleMemberChange(index, e)} error={errors[`member${index}Roll`]} /></div>
                      <div><Label>Year</Label><Select name="year" defaultText="Year" value={member.year} onChange={(e) => handleMemberChange(index, e)} options={years} error={errors[`member${index}Year`]} /></div>
                      <div><Label>Dept</Label><Select name="dept" defaultText="Dept" value={member.dept} onChange={(e) => handleMemberChange(index, e)} options={departments} error={errors[`member${index}Dept`]} /></div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <FileSpreadsheet className="w-5 h-5 text-white" />
                <h3 className="text-lg font-bold text-white">Submission</h3>
              </div>
              <div className="space-y-2">
                <Label>Presentation Link (Google Drive)</Label>
                <Input name="pptLink" placeholder="Paste your shareable PPT link here..." value={formData.pptLink} onChange={(e) => setFormData({...formData, pptLink: e.target.value})} error={errors.pptLink} />
                 <p className="text-xs text-slate-500 mt-2">* Ensure the link has <span className="text-white font-bold">"Anyone with the link"</span> access. <br/> * PPT should be in the <span className="text-white font-bold">specified format</span>.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-slate-900/50 rounded-lg border border-white/5">
              <div className="relative flex items-center">
                <input type="checkbox" id="agree" checked={formData.agreed} onChange={(e) => setFormData({...formData, agreed: e.target.checked})} className="peer relative appearance-none w-5 h-5 border border-white/30 rounded bg-transparent checked:bg-lime-500 checked:border-lime-500 transition-all cursor-pointer z-10" />
                <Check size={14} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-black pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity z-20 font-bold" />
              </div>
              <label htmlFor="agree" className="text-sm text-slate-400 cursor-pointer select-none leading-relaxed">
                I have read the <span className="text-white font-bold">Guidelines</span> of SCH '26 and agree to follow all rules.
                {errors.agreed && <span className="text-red-500 block text-xs mt-1">* This is required</span>}
              </label>
            </div>

            <div className="flex flex-col gap-4">
              <button type="submit" disabled={isSubmitting} className="w-full py-4 rounded-xl relative group overflow-hidden border border-white/50 text-white font-black text-lg uppercase tracking-[0.15em] hover:bg-white/10 hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300">
                {isSubmitting ? <span className="flex items-center justify-center gap-2"><Loader2 className="animate-spin w-5 h-5" /> Submitting...</span> : <span className="relative z-10">Confirm Registration</span>}
              </button>
            </div>
          </div>
        </form>
      </motion.div>

      {/* SUCCESS MODAL */}
      <AnimatePresence>
        {successData && (
          <SuccessModal 
            data={successData} 
            whatsappLink={WHATSAPP_GROUP_LINK}
            onClose={() => {
              setSuccessData(null);
              setFormData(INITIAL_STATE); 
              window.scrollTo({ top: 0, behavior: 'smooth' }); 
            }} 
          />
        )}
      </AnimatePresence>

      {/* ERROR MODAL */}
      <AnimatePresence>
        {showError && (
          <ErrorModal onClose={() => setShowError(false)} />
        )}
      </AnimatePresence>

    </div>
  );
};

export default Register;