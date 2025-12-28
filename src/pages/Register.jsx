import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as XLSX from 'xlsx'; 
import { Upload, FileSpreadsheet, Users, User, CheckCircle, AlertCircle } from "lucide-react";

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
    { id: "PS01", title: "Smart Campus Energy Management" },
    { id: "PS02", title: "AI-Driven Attendance System" },
    { id: "PS03", title: "Blockchain for Certificate Verification" },
    { id: "PS04", title: "Waste Management Optimization" },
    { id: "PS05", title: "Open Innovation" },
  ];

  const departments = ["CSE", "IT", "CS&DS", "ECE", "EEE", "MECH", "AUTO", "CIVIL"];

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
      currentMembers[i] || { name: "", rollNo: "", dept: "" }
    );

    setFormData((prev) => ({
      ...prev,
      totalMembers: e.target.value,
      members: newMembers,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.teamName) newErrors.teamName = "Team Name is required";
    if (!formData.problemStatement) newErrors.problemStatement = "Select a problem statement";
    
    if (!formData.teamLeader.name) newErrors.leaderName = "Leader Name required";
    if (!formData.teamLeader.email) newErrors.leaderEmail = "Email required";
    if (!formData.teamLeader.phone) newErrors.leaderPhone = "Phone required";
    if (!formData.teamLeader.rollNo) newErrors.leaderRoll = "Roll No required";
    if (!formData.teamLeader.dept) newErrors.leaderDept = "Dept required";

    formData.members.forEach((m, i) => {
      if (!m.name) newErrors[`member${i}Name`] = "Name required";
      if (!m.rollNo) newErrors[`member${i}Roll`] = "Roll No required";
      if (!m.dept) newErrors[`member${i}Dept`] = "Dept required";
    });

    if (!formData.pptFile) newErrors.pptFile = "PPT file is required";
    if (!formData.agreed) newErrors.agreed = "You must agree to the guidelines";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const saveToExcel = () => {
    const flatData = {
      "Team Name": formData.teamName,
      "Problem Statement": formData.problemStatement,
      "Leader Name": formData.teamLeader.name,
      "Leader Email": formData.teamLeader.email,
      "Leader Phone": formData.teamLeader.phone,
      "Leader RollNo": formData.teamLeader.rollNo,
      "Leader Dept": formData.teamLeader.dept,
      "Total Members": formData.totalMembers,
    };

    formData.members.forEach((m, i) => {
      flatData[`Member ${i+1} Name`] = m.name;
      flatData[`Member ${i+1} RollNo`] = m.rollNo;
      flatData[`Member ${i+1} Dept`] = m.dept;
    });

    const worksheet = XLSX.utils.json_to_sheet([flatData]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Registration");
    XLSX.writeFile(workbook, `${formData.teamName}_Registration.xlsx`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      saveToExcel();
      alert("Registration Successful! Excel file downloaded.");
      window.open("https://chat.whatsapp.com/GEN0hzyt2EM731AzmfUfjW", "_blank");
    } else {
      alert("Please fill all required fields marked with *");
    }
  };

  const Label = ({ children }) => (
    <label className="text-[10px] sm:text-xs font-bold text-slate-400 tracking-[0.15em] uppercase mb-1.5 block">
      {children} <span className="text-red-500">*</span>
    </label>
  );

  const Input = ({ error, ...props }) => (
    <div className="relative">
      <input
        {...props}
        className={`
          w-full bg-slate-900/50 border 
          ${error ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-white/40'}
          rounded-lg px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600
          focus:outline-none focus:ring-1 focus:ring-white/20 transition-all duration-300
        `}
      />
      {error && <AlertCircle className="absolute right-3 top-3 w-4 h-4 text-red-500" />}
    </div>
  );

  const Select = ({ options, defaultText, error, ...props }) => (
    <div className="relative">
      <select
        {...props}
        className={`
          w-full bg-slate-900/50 border appearance-none
          ${error ? 'border-red-500/50' : 'border-white/10 focus:border-white/40'}
          rounded-lg px-4 py-3 text-sm text-slate-200 
          focus:outline-none focus:ring-1 focus:ring-white/20 transition-all duration-300
        `}
      >
        <option value="" disabled className="bg-slate-900">{defaultText}</option>
        {options.map((opt, i) => (
          <option key={i} value={opt.value || opt} className="bg-slate-900">
            {opt.label || opt}
          </option>
        ))}
      </select>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 text-xs">▼</div>
    </div>
  );

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 flex justify-center relative overflow-hidden">
      
      {/* Background Ambience */}
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
        {/* Header Section - REMOVED LIGHTRAYS */}
        <div className="relative p-8 md:p-10 border-b border-white/5 text-center">
          <h1 className="text-2xl md:text-4xl font-black text-white tracking-tight mb-2 drop-shadow-sm">
            SCH '26 REGISTRATION
          </h1>
          <p className="text-slate-400 text-xs md:text-sm uppercase tracking-widest font-medium">
            Join the Innovation Wave
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 md:p-10 space-y-10">
          
          {/* 1. Team Information */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-2 border-b border-white/5">
              <Users className="w-5 h-5 text-white" />
              <h3 className="text-lg font-bold text-white">Team Details</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label>Team Name</Label>
                <Input 
                  placeholder="e.g. Cyber Punkz" 
                  value={formData.teamName}
                  onChange={(e) => setFormData({...formData, teamName: e.target.value})}
                  error={errors.teamName}
                />
              </div>
              <div>
                <Label>Problem Statement</Label>
                <Select 
                  defaultText="Select Statement"
                  value={formData.problemStatement}
                  onChange={(e) => setFormData({...formData, problemStatement: e.target.value})}
                  options={problemStatements.map(ps => ({ value: ps.id, label: `${ps.id} - ${ps.title}` }))}
                  error={errors.problemStatement}
                />
              </div>
            </div>
          </div>

          {/* 2. Team Leader */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-2 border-b border-white/5">
              <User className="w-5 h-5 text-white" />
              <h3 className="text-lg font-bold text-white">Team Leader</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label>Full Name</Label>
                <Input 
                  name="name" placeholder="John Doe"
                  value={formData.teamLeader.name} onChange={handleLeaderChange}
                  error={errors.leaderName}
                />
              </div>
              <div>
                <Label>Email Address</Label>
                <Input 
                  name="email" type="email" placeholder="john@college.edu"
                  value={formData.teamLeader.email} onChange={handleLeaderChange}
                  error={errors.leaderEmail}
                />
              </div>
              <div>
                <Label>Phone Number</Label>
                <Input 
                  name="phone" type="tel" placeholder="+91 98765 43210"
                  value={formData.teamLeader.phone} onChange={handleLeaderChange}
                  error={errors.leaderPhone}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Roll No</Label>
                  <Input 
                    name="rollNo" placeholder="22CSR001"
                    value={formData.teamLeader.rollNo} onChange={handleLeaderChange}
                    error={errors.leaderRoll}
                  />
                </div>
                <div>
                  <Label>Dept</Label>
                  <Select 
                    name="dept" defaultText="Select"
                    value={formData.teamLeader.dept} onChange={handleLeaderChange}
                    options={departments}
                    error={errors.leaderDept}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 3. Team Members */}
          <div className="space-y-6">
            <div className="flex flex-wrap items-end justify-between gap-4 pb-2 border-b border-white/5">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-white" />
                <h3 className="text-lg font-bold text-white">Team Members</h3>
              </div>
              <div className="w-40">
                <Label>Total Size (Inc. Leader)</Label>
                <Select 
                  value={formData.totalMembers}
                  onChange={handleTotalMembersChange}
                  options={['3', '4', '5']}
                  defaultText="Size"
                />
              </div>
            </div>

            <div className="space-y-4">
              <AnimatePresence>
                {formData.members.map((member, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, height: 0, y: -10 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -10 }}
                    className="p-5 rounded-xl border border-white/5 bg-white/[0.02]"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 rounded-full bg-white/10 text-white flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Member Details</span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label>Name</Label>
                        <Input 
                          name="name" placeholder="Name"
                          value={member.name} onChange={(e) => handleMemberChange(index, e)}
                          error={errors[`member${index}Name`]}
                        />
                      </div>
                      <div>
                        <Label>Roll No</Label>
                        <Input 
                          name="rollNo" placeholder="Roll No"
                          value={member.rollNo} onChange={(e) => handleMemberChange(index, e)}
                          error={errors[`member${index}Roll`]}
                        />
                      </div>
                      <div>
                        <Label>Department</Label>
                        <Select 
                          name="dept" defaultText="Select Dept"
                          value={member.dept} onChange={(e) => handleMemberChange(index, e)}
                          options={departments}
                          error={errors[`member${index}Dept`]}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* 4. Documents & Submit */}
          <div className="pt-6 border-t border-white/10 space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <FileSpreadsheet className="w-5 h-5 text-white" />
                <h3 className="text-lg font-bold text-white">Submission</h3>
              </div>
              
              <div className={`
                relative group border-2 border-dashed rounded-xl p-8 transition-all
                ${errors.pptFile ? 'border-red-500/30 bg-red-500/5' : 'border-white/10 hover:border-white/30 hover:bg-white/5'}
              `}>
                <input 
                  type="file" 
                  accept=".ppt,.pptx,.pdf"
                  onChange={(e) => setFormData({...formData, pptFile: e.target.files[0]})}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="flex flex-col items-center justify-center text-center">
                  <Upload className={`w-8 h-8 mb-3 ${formData.pptFile ? 'text-white' : 'text-slate-500'}`} />
                  <p className="text-sm font-medium text-slate-300">
                    {formData.pptFile ? formData.pptFile.name : "Click to upload PPT / PDF"}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">Max file size 10MB</p>
                </div>
              </div>
              {errors.pptFile && <p className="text-red-500 text-xs mt-2 text-center">{errors.pptFile}</p>}
            </div>

            <div className="flex items-start gap-3 p-4 bg-slate-900/50 rounded-lg border border-white/5">
              <div className="relative flex items-center">
                <input 
                  type="checkbox" 
                  id="agree"
                  checked={formData.agreed}
                  onChange={(e) => setFormData({...formData, agreed: e.target.checked})}
                  className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-white/20 checked:border-white checked:bg-white transition-all"
                />
                <CheckCircle className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 text-black opacity-0 peer-checked:opacity-100 transition-opacity" />
              </div>
              <label htmlFor="agree" className="text-sm text-slate-400 cursor-pointer select-none leading-relaxed">
                I have read the <span className="text-white font-bold">Guidelines</span> of SCH '26 and agree to follow all rules.
                {errors.agreed && <span className="text-red-500 block text-xs mt-1">* This is required</span>}
              </label>
            </div>

            <div className="flex flex-col gap-4">
              <button 
                type="submit"
                className="
                  w-full py-4 rounded-xl relative group overflow-hidden
                  border border-white/50 text-white
                  font-black text-lg uppercase tracking-[0.15em]
                  hover:bg-white/10 hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]
                  transition-all duration-300
                "
              >
                <span className="relative z-10">Confirm Registration</span>
              </button>

              <a 
                href="https://chat.whatsapp.com/GEN0hzyt2EM731AzmfUfjW" 
                target="_blank" 
                rel="noreferrer"
                className="text-center text-xs text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-colors uppercase tracking-widest cursor-pointer"
              >
                Join WhatsApp group by clicking here
              </a>
            </div>
          </div>

        </form>
      </motion.div>
    </div>
  );
};

export default Register;