"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
  FileSpreadsheet,
  Users,
  User,
  Check,
  ShieldAlert,
  ChevronDown,
  AlertCircle,
  X,
  Lock,
} from "lucide-react";
import SuccessModal from "../components/UI/SuccessModal";
import ErrorModal from "../components/UI/ErrorModal";
import Button from "../components/UI/Button";
import { problemData } from "../data/problemData";

// SET YOUR CLOSE DATE HERE: January 21st, 2026 at 5:00 PM
const REGISTRATION_CLOSE_DATE = new Date(2026, 0, 21, 17, 0, 0);

const fastTransition = { duration: 0.2, ease: "easeOut" };

const inputStyle = (hasError) => `
  w-full bg-[#0B1221] rounded-lg
  px-3 py-2.5 sm:px-4 sm:py-3
  text-xs sm:text-sm md:text-base text-white placeholder:text-slate-600
  outline-none focus:outline-none focus:ring-0
  border-2 transition-colors duration-200
  ${
    hasError
      ? "border-red-500/50 bg-red-500/5"
      : "border-transparent focus:border-lime-500/50"
  }
`;

const CustomDropdown = ({ value, onChange, options, placeholder, error }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`${inputStyle(
          error && !value
        )} flex items-center justify-between text-left relative z-10`}
      >
        <span
          className={`truncate mr-2 ${value ? "text-white" : "text-slate-600"}`}
        >
          {value || placeholder}
        </span>
        <ChevronDown
          size={16}
          className={`text-slate-400 transition-transform duration-200 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={fastTransition}
            className="absolute z-50 mt-1 w-full bg-[#020817] border border-white/10 rounded-xl shadow-2xl max-h-56 overflow-y-auto"
          >
            {options.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
                className="w-full text-left px-4 py-2.5 text-xs sm:text-sm transition-colors hover:bg-lime-500/10 hover:text-lime-400 text-slate-300"
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

const Label = ({ children, required, error }) => (
  <div className="flex items-end justify-between mb-1.5 px-1">
    <label className="text-[10px] sm:text-xs font-bold text-slate-400 tracking-widest uppercase block">
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
    {error && (
      <span className="text-[9px] text-red-400 font-bold uppercase tracking-tighter">
        Required
      </span>
    )}
  </div>
);

const Register = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successData, setSuccessData] = useState(null);
  const [showError, setShowError] = useState(false);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const isClosed = now >= REGISTRATION_CLOSE_DATE;

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbyVAnw8z9uPyMrYlXpjpo1w_60jJRNjl23_XN_PUVwHG03W-j59UiBFO-61t62wdkK-/exec";
  const WHATSAPP_GROUP_LINK =
    "https://chat.whatsapp.com/CaDk6iw1c9O3SPk2bkr6d1";

  const departments = [
    "CSE",
    "IT",
    "CS&DS",
    "ECE",
    "EEE",
    "MECH",
    "AUTO",
    "CIVIL",
  ].sort();
  const years = ["1st Year", "2nd Year", "3rd Year"];
  const problemOptions = problemData.map((p) => `${p.id} - ${p.title}`);

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

  const handleLeaderChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      teamLeader: { ...prev.teamLeader, [name]: value },
    }));
  };

  const handleMemberChange = (index, name, value) => {
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
    const { teamName, problemStatement, pptLink, agreed, teamLeader, members } =
      formData;
    if (!teamName || !problemStatement || !pptLink || !agreed) return false;
    if (
      !teamLeader.name ||
      !teamLeader.email ||
      !teamLeader.phone ||
      !teamLeader.year ||
      !teamLeader.dept ||
      !teamLeader.rollNo
    )
      return false;
    for (let m of members) {
      if (!m.name || !m.rollNo || !m.dept || !m.year) return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isClosed) return; // Block submission if date passed

    if (!validateForm()) {
      setShowError(true);
      setTimeout(() => setShowError(false), 4000);
      return;
    }
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
      console.error("Submission failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-20 px-4 flex justify-center bg-[#020817]/40 relative">
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage: `linear-gradient(#ffffff10 1px, transparent 1px), linear-gradient(90deg, #ffffff10 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={fastTransition}
        className="w-full max-w-5xl relative z-10 mt-10 rounded-3xl border border-white/10 bg-[#020817]/95 backdrop-blur-xl shadow-2xl overflow-hidden"
      >
        <div className="p-6 md:p-8 border-b border-white/5 bg-[#020817]/80 backdrop-blur-md rounded-t-3xl flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">
            SCH '26 <span className="text-lime-400">REGISTRATION</span>
          </h1>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="p-2 bg-white/5 hover:bg-red-500/20 hover:text-red-500 rounded-lg transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-10">
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-2 border-b border-white/5">
              <Users className="w-5 h-5 text-white" />
              <h3 className="text-lg font-bold text-white">Team Details</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label required error={showError && !formData.teamName}>
                  Team Name
                </Label>
                <input
                  placeholder="e.g. GCEE Innovators"
                  className={inputStyle(showError && !formData.teamName)}
                  value={formData.teamName}
                  onChange={(e) =>
                    setFormData({ ...formData, teamName: e.target.value })
                  }
                  disabled={isClosed}
                />
              </div>
              <div>
                <Label required error={showError && !formData.problemStatement}>
                  Problem Statement
                </Label>
                <CustomDropdown
                  value={formData.problemStatement}
                  onChange={(val) =>
                    setFormData({ ...formData, problemStatement: val })
                  }
                  options={problemOptions}
                  placeholder="Select Problem"
                  error={showError}
                  disabled={isClosed}
                />
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
                <Label required error={showError && !formData.teamLeader.name}>
                  Full Name
                </Label>
                <input
                  placeholder="Name"
                  className={inputStyle(showError && !formData.teamLeader.name)}
                  value={formData.teamLeader.name}
                  onChange={(e) => handleLeaderChange("name", e.target.value)}
                  disabled={isClosed}
                />
              </div>
              <div>
                <Label required error={showError && !formData.teamLeader.email}>
                  Email Address
                </Label>
                <input
                  type="email"
                  placeholder="Email"
                  className={inputStyle(showError && !formData.teamLeader.email)}
                  value={formData.teamLeader.email}
                  onChange={(e) => handleLeaderChange("email", e.target.value)}
                  disabled={isClosed}
                />
              </div>
              <div>
                <Label required error={showError && !formData.teamLeader.phone}>
                  Phone Number
                </Label>
                <input
                  type="number"
                  placeholder="Mobile Number"
                  className={`${inputStyle(showError && (!formData.teamLeader.phone || formData.teamLeader.phone.toString().length !== 10))} [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
                  value={formData.teamLeader.phone}
                  onChange={(e) => handleLeaderChange("phone", e.target.value.slice(0, 10))}
                  disabled={isClosed}
                /> 
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <Label required error={showError && !formData.teamLeader.rollNo}>
                    Roll No
                  </Label>
                  <input
                    placeholder="Roll No"
                    className={inputStyle(showError && !formData.teamLeader.rollNo)}
                    value={formData.teamLeader.rollNo}
                    onChange={(e) => handleLeaderChange("rollNo", e.target.value)}
                    disabled={isClosed}
                  />
                </div>
                <div>
                  <Label required error={showError && !formData.teamLeader.year}>
                    Year
                  </Label>
                  <CustomDropdown
                    value={formData.teamLeader.year}
                    onChange={(val) => handleLeaderChange("year", val)}
                    options={years}
                    placeholder="Year"
                    error={showError}
                    disabled={isClosed}
                  />
                </div>
                <div>
                  <Label required error={showError && !formData.teamLeader.dept}>
                    Dept
                  </Label>
                  <CustomDropdown
                    value={formData.teamLeader.dept}
                    onChange={(val) => handleLeaderChange("dept", val)}
                    options={departments}
                    placeholder="Dept"
                    error={showError}
                    disabled={isClosed}
                  />
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
                      disabled={isClosed}
                      className={`flex-1 py-2 text-xs font-bold rounded-md transition-all ${
                        formData.totalMembers === size
                          ? "bg-lime-500 text-black shadow-lg"
                          : "text-slate-500 hover:text-white"
                      } ${isClosed ? "cursor-not-allowed opacity-50" : ""}`}
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
                    className="p-5 rounded-xl border border-white/5 bg-white/[0.02] relative"
                    style={{ zIndex: 10 - index }}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 rounded-full bg-white/10 text-white flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                        Member Details
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div>
                        <Label required error={showError && !member.name}>
                          Name
                        </Label>
                        <input
                          placeholder="Name"
                          className={inputStyle(showError && !member.name)}
                          value={member.name}
                          onChange={(e) =>
                            handleMemberChange(index, "name", e.target.value)
                          }
                          disabled={isClosed}
                        />
                      </div>
                      <div>
                        <Label required error={showError && !member.rollNo}>
                          Roll No
                        </Label>
                        <input
                          placeholder="Roll No"
                          className={inputStyle(showError && !member.rollNo)}
                          value={member.rollNo}
                          onChange={(e) =>
                            handleMemberChange(index, "rollNo", e.target.value)
                          }
                          disabled={isClosed}
                        />
                      </div>
                      <div>
                        <Label required error={showError && !member.year}>
                          Year
                        </Label>
                        <CustomDropdown
                          value={member.year}
                          onChange={(val) =>
                            handleMemberChange(index, "year", val)
                          }
                          options={years}
                          placeholder="Select"
                          error={showError}
                          disabled={isClosed}
                        />
                      </div>
                      <div>
                        <Label required error={showError && !member.dept}>
                          Dept
                        </Label>
                        <CustomDropdown
                          value={member.dept}
                          onChange={(val) =>
                            handleMemberChange(index, "dept", val)
                          }
                          options={departments}
                          placeholder="Select"
                          error={showError}
                          disabled={isClosed}
                        />
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
                <FileSpreadsheet className="w-5 h-5 text-white" />{" "}
                <h3 className="text-lg font-bold text-white">Submission</h3>
              </div>
              <div className="space-y-2">
                <Label required error={showError && !formData.pptLink}>
                  Presentation Link (Google Drive)
                </Label>
                <input
                  name="pptLink"
                  placeholder="Paste your shareable PPT link here..."
                  className={inputStyle(showError && !formData.pptLink)}
                  value={formData.pptLink}
                  onChange={(e) =>
                    setFormData({ ...formData, pptLink: e.target.value })
                  }
                  disabled={isClosed}
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
              <label className="flex items-center gap-3 cursor-pointer group">
                <div
                  onClick={() =>
                    !isClosed && setFormData({ ...formData, agreed: !formData.agreed })
                  }
                  className={`w-5 h-5 shrink-0 rounded border transition-all flex items-center justify-center ${
                    formData.agreed
                      ? "bg-lime-500 border-lime-500"
                      : showError && !formData.agreed
                      ? "border-red-500 bg-red-500/10"
                      : "border-white/20 group-hover:border-lime-400"
                  } ${isClosed ? "cursor-not-allowed opacity-50" : ""}`}
                >
                  {formData.agreed && (
                    <Check size={12} className="text-black stroke-[4px]" />
                  )}
                </div>
                <span className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider leading-relaxed">
                  I have read the Guidelines of SCH '26 and agree to follow all rules.
                  <span className="text-red-500 ml-1">*</span>
                </span>
              </label>
            </div>

            <div className="flex justify-center pt-2">
              {showError && (
                <div className="text-red-400 text-[10px] font-bold uppercase tracking-widest bg-red-500/10 px-4 py-2 rounded-full border border-red-500/20 flex items-center gap-2">
                  <AlertCircle size={14} /> Please fill out all required fields
                </div>
              )}
              {/* THE BUTTON LOGIC CHANGES HERE */}
              <Button
                type="submit"
                isLoading={isSubmitting}
                disabled={isClosed}
                className={isClosed ? "opacity-50 grayscale cursor-not-allowed" : ""}
              >
                {isClosed ? (
                  <span className="flex items-center gap-2">
                    <Lock size={16} /> Registration Closed
                  </span>
                ) : (
                  "Confirm Registration"
                )}
              </Button>
            </div>
            {isClosed && (
              <p className="text-center text-red-400 text-[10px] font-bold uppercase tracking-widest mt-2 animate-pulse">
                The deadline for registration has passed.
              </p>
            )}
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