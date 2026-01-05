import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileSpreadsheet, Users, User, Check, ShieldAlert } from "lucide-react";
import SuccessModal from "../components/UI/SuccessModal";
import ErrorModal from "../components/UI/ErrorModal";
import Button from "../components/UI/Button";
import { problemData } from "../data/problemData";

const inputStyle = `
  w-full bg-[#0B1221] border rounded-lg
  px-3 py-2.5 sm:px-4 sm:py-3
  text-sm text-white placeholder:text-slate-600
  focus:outline-none focus:ring-0 focus:border-lime-500/50
  transition-colors duration-300 border-white/10
`;

const Label = ({ children }) => (
  <label className="text-[10px] sm:text-xs font-bold text-slate-400 tracking-[0.1em] uppercase mb-1.5 block">
    {children}
  </label>
);

const Register = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successData, setSuccessData] = useState(null);
  const [showError, setShowError] = useState(false);

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbyVAnw8z9uPyMrYlXpjpo1w_60jJRNjl23_XN_PUVwHG03W-j59UiBFO-61t62wdkK-/exec";
  const WHATSAPP_GROUP_LINK =
    "https://chat.whatsapp.com/GEN0hzyt2EM731AzmfUfjW";

  const departments = [
    "CSE",
    "IT",
    "CS&DS",
    "ECE",
    "EEE",
    "MECH",
    "AUTO",
    "CIVIL",
  ];
  const years = ["1st Year", "2nd Year", "3rd Year", "4th Year"];

  const problemOptions = problemData.map((p) => ({ id: p.id, title: p.title }));

  const INITIAL_STATE = {
    teamName: "",
    problemStatement: "",
    teamLeader: {
      name: "",
      email: "",
      phone: "",
      rollNo: "",
      year: "",
      dept: "",
    },
    totalMembers: "3",
    members: [
      { name: "", rollNo: "", year: "", dept: "" },
      { name: "", rollNo: "", year: "", dept: "" },
    ],
    pptLink: "",
    agreed: false,
  };

  const [formData, setFormData] = useState(INITIAL_STATE);

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

  const handleTotalMembersChange = (countStr) => {
    const count = parseInt(countStr);
    const neededMembers = count - 1;
    const currentMembers = formData.members;
    const newMembers = Array(neededMembers)
      .fill(null)
      .map(
        (_, i) =>
          currentMembers[i] || { name: "", rollNo: "", year: "", dept: "" }
      );
    setFormData((prev) => ({
      ...prev,
      totalMembers: countStr,
      members: newMembers,
    }));
  };

  const validateForm = () => {
    if (
      !formData.teamName ||
      !formData.problemStatement ||
      !formData.pptLink ||
      !formData.agreed
    )
      return false;
    if (
      !formData.teamLeader.name ||
      !formData.teamLeader.email ||
      !formData.teamLeader.phone
    )
      return false;
    for (let m of formData.members) {
      if (!m.name || !m.rollNo || !m.dept) return false;
    }
    return true;
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
      data.append(`Member ${i + 1} Name`, m.name);
      data.append(`Member ${i + 1} Roll`, m.rollNo);
      data.append(`Member ${i + 1} Year`, m.year);
      data.append(`Member ${i + 1} Dept`, m.dept);
    });

    try {
      await fetch(SCRIPT_URL, { method: "POST", body: data, mode: "no-cors" });
      setSuccessData(formData);
    } catch (error) {
      alert("Submission failed. Check connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      submitToGoogleSheets();
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-20 px-4 sm:px-6 flex justify-center relative overflow-hidden bg-[#020817]/40">
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage: `linear-gradient(#ffffff10 1px, transparent 1px), linear-gradient(90deg, #ffffff10 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-5xl relative z-10 mt-10 rounded-3xl border border-white/10 bg-[#020817]/95 backdrop-blur-xl shadow-2xl shadow-black/80 overflow-hidden"
      >
        <div className="relative p-6 md:p-8 border-b border-white/5 flex justify-between items-center bg-[#020817]/80 backdrop-blur-md">
          <div>
            <h1 className="text-xl md:text-2xl font-black text-white tracking-tight uppercase leading-none">
              SCH '26 <span className="text-lime-400">REGISTRATION</span>
            </h1>
            <p className="text-slate-500 text-[10px] md:text-xs tracking-[0.15em] font-bold mt-1 uppercase italic">
              Join the Innovation Wave
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-10">
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-2 border-b border-white/5">
              <Users className="w-5 h-5 text-white" />
              <h3 className="text-lg font-bold text-white">Team Details</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label>Team Name</Label>
                <input
                  placeholder="e.g. GCEE Innovators"
                  className={inputStyle}
                  value={formData.teamName}
                  onChange={(e) =>
                    setFormData({ ...formData, teamName: e.target.value })
                  }
                />
              </div>
              <div>
                <Label>Problem Statement</Label>
                <div className="relative">
                  <select
                    className={`${inputStyle} appearance-none`}
                    value={formData.problemStatement}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        problemStatement: e.target.value,
                      })
                    }
                  >
                    <option
                      value=""
                      disabled
                      className="bg-[#020817] text-slate-500"
                    >
                      Select Statement
                    </option>
                    {problemOptions.map((opt) => (
                      <option
                        key={opt.id}
                        value={opt.id}
                        className="bg-[#020817] text-white"
                      >
                        {opt.id} - {opt.title}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 text-xs">
                    ▼
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-2 border-b border-white/5">
              <User className="w-5 h-5 text-white" />
              <h3 className="text-lg font-bold text-white">Team Leader</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label>Full Name</Label>
                <input
                  name="name"
                  placeholder="Alice S"
                  className={inputStyle}
                  value={formData.teamLeader.name}
                  onChange={handleLeaderChange}
                />
              </div>
              <div>
                <Label>Email Address</Label>
                <input
                  name="email"
                  type="email"
                  placeholder="Alice@gmail.com"
                  className={inputStyle}
                  value={formData.teamLeader.email}
                  onChange={handleLeaderChange}
                />
              </div>
              <div>
                <Label>Phone Number</Label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="98765 43210"
                  className={inputStyle}
                  value={formData.teamLeader.phone}
                  onChange={handleLeaderChange}
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <Label>Roll No</Label>
                  <input
                    name="rollNo"
                    placeholder="23CSE01"
                    className={inputStyle}
                    value={formData.teamLeader.rollNo}
                    onChange={handleLeaderChange}
                  />
                </div>
                <div>
                  <Label>Year</Label>
                  <div className="relative">
                    <select
                      name="year"
                      className={`${inputStyle} appearance-none px-2`}
                      value={formData.teamLeader.year}
                      onChange={handleLeaderChange}
                    >
                      <option value="" disabled>
                        Year
                      </option>
                      {years.map((y) => (
                        <option key={y} value={y} className="bg-[#020817]">
                          {y}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <Label>Dept</Label>
                  <div className="relative">
                    <select
                      name="dept"
                      className={`${inputStyle} appearance-none px-2`}
                      value={formData.teamLeader.dept}
                      onChange={handleLeaderChange}
                    >
                      <option value="" disabled>
                        Dept
                      </option>
                      {departments.map((d) => (
                        <option key={d} value={d} className="bg-[#020817]">
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex flex-wrap items-end justify-between gap-4 pb-2 border-b border-white/5">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-white" />
                <h3 className="text-lg font-bold text-white">Team Members</h3>
              </div>

              <div className="w-full md:w-48">
                <Label>Total Size (Inc. Leader)</Label>
                <div className="flex bg-[#0B1221] rounded-lg p-1 border border-white/10 w-full">
                  {["3", "4", "5"].map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => handleTotalMembersChange(size)}
                      className={`
                        flex-1 py-2 text-xs font-bold rounded-md transition-all
                        ${
                          formData.totalMembers === size
                            ? "bg-lime-500 text-black shadow-lg"
                            : "text-slate-500 hover:text-white hover:bg-white/5"
                        }
                      `}
                    >
                      {size}
                    </button>
                  ))}
                </div>
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
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Member Details
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="md:col-span-1">
                        <Label>Name</Label>
                        <input
                          name="name"
                          placeholder="Name"
                          className={inputStyle}
                          value={member.name}
                          onChange={(e) => handleMemberChange(index, e)}
                        />
                      </div>
                      <div>
                        <Label>Roll No</Label>
                        <input
                          name="rollNo"
                          placeholder="Roll No"
                          className={inputStyle}
                          value={member.rollNo}
                          onChange={(e) => handleMemberChange(index, e)}
                        />
                      </div>
                      <div>
                        <Label>Year</Label>
                        <div className="relative">
                          <select
                            name="year"
                            className={`${inputStyle} appearance-none`}
                            value={member.year}
                            onChange={(e) => handleMemberChange(index, e)}
                          >
                            <option value="" disabled>
                              Select
                            </option>
                            {years.map((y) => (
                              <option
                                key={y}
                                value={y}
                                className="bg-[#020817]"
                              >
                                {y}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div>
                        <Label>Dept</Label>
                        <div className="relative">
                          <select
                            name="dept"
                            className={`${inputStyle} appearance-none`}
                            value={member.dept}
                            onChange={(e) => handleMemberChange(index, e)}
                          >
                            <option value="" disabled>
                              Select
                            </option>
                            {departments.map((d) => (
                              <option
                                key={d}
                                value={d}
                                className="bg-[#020817]"
                              >
                                {d}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
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
                <input
                  name="pptLink"
                  placeholder="Paste your shareable PPT link here..."
                  className={inputStyle}
                  value={formData.pptLink}
                  onChange={(e) =>
                    setFormData({ ...formData, pptLink: e.target.value })
                  }
                />
                <p className="text-[10px] text-slate-500 mt-2">
                  * Ensure the link has{" "}
                  <span className="text-white font-bold">
                    "Anyone with the link"
                  </span>{" "}
                  access.
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-lime-500/[0.03] border border-lime-500/10">
              <div className="flex items-center gap-2 text-lime-400 uppercase text-[10px] md:text-xs font-black tracking-widest mb-3">
                <ShieldAlert className="w-4 h-4 md:w-5 md:h-5" /> Declaration
              </div>
              <label className="flex items-start gap-3 cursor-pointer group">
                <div
                  onClick={() =>
                    setFormData({ ...formData, agreed: !formData.agreed })
                  }
                  className={`
                    w-5 h-5 shrink-0 rounded border transition-all flex items-center justify-center mt-0.5
                    ${
                      formData.agreed
                        ? "bg-lime-500 border-lime-500"
                        : "bg-transparent border-white/20 group-hover:border-lime-400"
                    }
                  `}
                >
                  {formData.agreed && (
                    <Check size={12} className="text-black stroke-[4px]" />
                  )}
                </div>
                <span className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider leading-relaxed">
                  I have read the{" "}
                  <span className="text-white hover:text-lime-400 transition-colors">
                    Guidelines
                  </span>{" "}
                  of SCH '26 and agree to follow all rules.
                </span>
              </label>
            </div>

            <div className="flex justify-center pt-2">
              <Button type="submit" isLoading={isSubmitting}>
                Confirm Registration
              </Button>
            </div>
          </div>
        </form>
      </motion.div>

      <AnimatePresence>
        {successData && (
          <SuccessModal
            data={successData}
            whatsappLink={WHATSAPP_GROUP_LINK}
            onClose={() => {
              setSuccessData(null);
              setFormData(INITIAL_STATE);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showError && <ErrorModal onClose={() => setShowError(false)} />}
      </AnimatePresence>
    </div>
  );
};

export default Register;