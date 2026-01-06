"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  X,
  ChevronDown,
  ShieldAlert,
  Check,
  AlertCircle,
  Lock,
} from "lucide-react";
import { useLocation } from "react-router-dom";
import Button from "./UI/Button";
import ContributionSuccessModal from "./UI/ContributionSuccessModal";

// SET YOUR CLOSE DATE HERE: Year, Month (0=Jan), Day, Hour, Minute
// Example: January 20th, 2026 at 9:00 AM
const CLOSE_DATE = new Date(2026, 0, 10, 17, 0, 0);

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

const CustomDropdown = ({
  value,
  onChange,
  options,
  placeholder,
  required,
  error,
}) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target))
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
          className={`text-slate-400 transition-transform duration-300 shrink-0 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="absolute z-50 mt-1 w-full bg-[#020817]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-xl max-h-56 overflow-y-auto"
          >
            {options.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
                className="w-full text-left px-4 py-2.5 text-xs sm:text-sm transition-colors duration-200 border-b border-white/[0.02] hover:bg-lime-500/10 hover:text-lime-400 text-slate-300"
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

const Label = ({ children, helper, required, error }) => (
  <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-1.5 px-1 gap-1">
    <label className="text-[10px] sm:text-xs font-bold text-slate-400 tracking-[0.1em] uppercase">
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
    {error && (
      <span className="text-[9px] text-red-400 font-bold animate-pulse">
        Required
      </span>
    )}
    {!error && helper && (
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
        <label
          key={opt}
          className="flex items-center gap-2 cursor-pointer group select-none bg-[#0B1221] border border-white/5 rounded-lg px-3 py-2 hover:border-white/20 transition-colors"
        >
          <div
            onClick={() => toggleValue(opt)}
            className={`w-4 h-4 rounded border transition-all flex items-center justify-center shrink-0 ${
              selectedValues.includes(opt)
                ? "bg-lime-500 border-lime-500"
                : "bg-transparent border-white/20"
            }`}
          >
            {selectedValues.includes(opt) && (
              <Check size={10} className="text-black stroke-[4px]" />
            )}
          </div>
          <span className="text-[10px] sm:text-xs text-slate-300 group-hover:text-white transition-colors">
            {opt}
          </span>
        </label>
      ))}
    </div>
  </div>
);

const Contribute = () => {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showError, setShowError] = useState(false);
  const [now, setNow] = useState(new Date());
  const location = useLocation();

  // Update time periodically
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const isClosed = now >= CLOSE_DATE;

  // LOCK BACKGROUND SCROLL WHEN FORM IS OPEN
  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.height = "";
      document.body.style.touchAction = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.height = "";
      document.body.style.touchAction = "";
    };
  }, [showForm]);

  const initialData = {
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
    consent: false,
  };
  const [formData, setFormData] = useState(initialData);

  // 1. GLOBAL INTERACTION & NAVIGATION CLEANUP
  useEffect(() => {
    const handleClose = () => {
      setShowForm(false);
      document.body.style.overflow = "";
      document.body.style.height = "";
      document.body.style.touchAction = "";
    };

    const handleNavbarClick = (e) => {
      if (e.target.closest("header") || e.target.closest("nav")) {
        handleClose();
      }
    };

    handleClose();

    window.addEventListener("click", handleNavbarClick);
    window.addEventListener("popstate", handleClose);
    window.addEventListener("hashchange", handleClose);

    return () => {
      window.removeEventListener("click", handleNavbarClick);
      window.removeEventListener("popstate", handleClose);
      window.removeEventListener("hashchange", handleClose);
      handleClose();
    };
  }, [location.pathname, location.key]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requiredFields = [
      formData.coordinatorName,
      formData.coordinatorDesignation,
      formData.coordinatorEmail,
      formData.coordinatorContact,
      formData.dept,
      formData.title,
      formData.consent,
    ];

    if (requiredFields.some((field) => !field)) {
      setShowError(true);
      setTimeout(() => setShowError(false), 4000);
      return;
    }

    setIsSubmitting(true);
    const SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbyacf7ZXmas-3DJuSWTYmY7Ou5DFH5JRLyl35AriwphHB9YNNCuus2yQIBAmYwYsjDd/exec";

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          targetUsers: formData.targetUsers.join(", "),
        }),
      });
      setShowForm(false);
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const departments = [
    "AUTO",
    "Civil",
    "CSE",
    "CS&DS",
    "ECE",
    "EEE",
    "IT",
    "MECH",
    "Accounts Office",
    "Admin Office",
    "Estate Management",
    "Exam Cell",
    "First Year",
    "Hostel Office",
    "Library",
    "Physical Education Department",
  ];

  const resetForm = () => {
    setSubmitted(false);
    setFormData(initialData);
  };

  const handleToggleUser = (val) => {
    setFormData({
      ...formData,
      targetUsers: formData.targetUsers.includes(val)
        ? formData.targetUsers.filter((i) => i !== val)
        : [...formData.targetUsers, val],
    });
  };

  return (
    <div className="pt-20 pb-12 px-4 sm:px-6 flex justify-center relative overflow-hidden bg-[#020817]/40">
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage: `linear-gradient(#ffffff10 1px, transparent 1px), linear-gradient(90deg, #ffffff10 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="w-full max-w-5xl relative z-10">
        <AnimatePresence>
          {!showForm ? (
            <motion.div
              key="hero"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex flex-col items-center text-center space-y-6 md:space-y-10 py-10 md:py-16"
            >
              <div className="px-4 py-1.5 rounded-full border border-lime-500/30 bg-lime-500/5 text-lime-400 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]">
                Faculty & Staff Portal
              </div>
              <h1 className="text-sm sm:text-xl md:text-3xl lg:text-4xl font-black text-white tracking-wide">
                HAVE A CHALLENGE ? <br />
                <span className="text-lime-400">CONTRIBUTE NOW.</span>
              </h1>
              <p className="max-w-xl text-[10px] sm:text-xs md:text-sm text-slate-400 font-medium">
                Submit departmental requirements and problem statements. Our
                engineering teams will develop software solutions for you.
              </p>

              {/* CONDITIONAL BUTTON/LOCKED UI */}
              {!isClosed ? (
                <Button onClick={() => setShowForm(true)} className="px-6 py-3">
                  Start Contribution 
                </Button>
              ) : (
                <div className="mt-8 p-6 bg-[#0B1221]/40 border border-white/5 rounded-3xl backdrop-blur-xl max-w-md w-full mx-auto">
                  <div className="inline-flex p-3 rounded-full bg-lime-500/10 mb-4 border border-lime-500/20">
                    <Lock className="w-8 h-8 text-lime-400" />
                  </div>
                  <h2 className="text-xl font-bold text-white mb-2">
                    Submissions Closed on
                  </h2>

                    <span className="text-lime-400 font-bold">
                      January 10th at 5:00 PM
                    </span>


                </div>
              )}
            </motion.div>
          ) : (
            <div className="fixed inset-0 z-[150] flex items-center justify-center px-3 sm:px-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowForm(false)}
                className="absolute inset-0 bg-black/80 backdrop-blur-xl"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-5xl mt-20 max-h-[85vh] overflow-y-auto bg-[#020817] border border-white/10 rounded-2xl shadow-2xl"
              >
                <div className="relative p-4 sm:p-6 border-b border-white/5 flex justify-between items-center bg-[#020817]/80 backdrop-blur-md sticky top-0 z-20">
                  <h2 className="text-lg sm:text-2xl font-black text-white uppercase">
                    Requirement <span className="text-lime-400">Brief</span>
                  </h2>
                  <button
                    onClick={() => setShowForm(false)}
                    className="p-2 bg-white/5 hover:bg-red-500/20 hover:text-red-500 rounded-lg transition-all"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="p-4 sm:p-8 space-y-6"
                  noValidate
                >
                  <div
                    className={`p-4 sm:p-5 rounded-2xl bg-lime-500/[0.03] border transition-colors ${
                      showError &&
                      (!formData.coordinatorName || !formData.coordinatorEmail)
                        ? "border-red-500/40"
                        : "border-lime-500/10"
                    } space-y-4`}
                  >
                    <div className="flex items-center gap-2 text-lime-400 uppercase text-[10px] font-black tracking-widest">
                      <ShieldAlert className="w-4 h-4" /> Coordinator Details{" "}
                      <span className="text-red-500">*</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-4">
                        <input
                          className={inputStyle(
                            showError && !formData.coordinatorName
                          )}
                          value={formData.coordinatorName}
                          placeholder="Full Name"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              coordinatorName: e.target.value,
                            })
                          }
                        />
                        <input
                          className={inputStyle(
                            showError && !formData.coordinatorDesignation
                          )}
                          value={formData.coordinatorDesignation}
                          placeholder="Designation"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              coordinatorDesignation: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="space-y-4">
                        <input
                          className={inputStyle(
                            showError && !formData.coordinatorEmail
                          )}
                          value={formData.coordinatorEmail}
                          placeholder="Official Email ID"
                          type="email"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              coordinatorEmail: e.target.value,
                            })
                          }
                        />
                        <input
                          className={inputStyle(
                            showError && !formData.coordinatorContact
                          )}
                          value={formData.coordinatorContact}
                          placeholder="Contact Number"
                          type="tel"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              coordinatorContact: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label required error={showError && !formData.dept}>
                        Department Name
                      </Label>
                      <CustomDropdown
                        value={formData.dept}
                        onChange={(val) =>
                          setFormData({ ...formData, dept: val })
                        }
                        options={departments}
                        placeholder="Select Department"
                        error={showError}
                      />
                    </div>
                    <div>
                      <Label required error={showError && !formData.title}>
                        Problem Title
                      </Label>
                      <input
                        className={inputStyle(showError && !formData.title)}
                        value={formData.title}
                        placeholder="Name of problem..."
                        onChange={(e) =>
                          setFormData({ ...formData, title: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label helper="Current manual method">
                        Background / Current Process
                      </Label>
                      <textarea
                        className={`${inputStyle()} h-24 resize-none`}
                        value={formData.background}
                        placeholder="Describe the process..."
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            background: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <Label helper="List the inefficiencies">
                        Problem Description
                      </Label>
                      <textarea
                        className={`${inputStyle()} h-24 resize-none`}
                        value={formData.description}
                        placeholder="List issues..."
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            description: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <Label helper="Goals">Objective</Label>
                      <textarea
                        className={`${inputStyle()} h-24 resize-none`}
                        value={formData.objective}
                        placeholder="State the goal..."
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            objective: e.target.value,
                          })
                        }
                      />
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
                        onChange={(val) =>
                          setFormData({ ...formData, appType: val })
                        }
                        options={["Web", "Mobile", "Desktop", "Any"]}
                        placeholder="Select Type"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Sensitivity</Label>
                      <div className="flex bg-[#0B1221] rounded-lg p-1 border border-white/5">
                        {["Low", "Med", "High"].map((l) => (
                          <button
                            key={l}
                            type="button"
                            onClick={() =>
                              setFormData({ ...formData, sensitivity: l })
                            }
                            className={`flex-1 py-2 text-[10px] font-bold rounded-md transition-all ${
                              formData.sensitivity === l
                                ? "bg-lime-500 text-black"
                                : "text-slate-500"
                            }`}
                          >
                            {l}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Priority</Label>
                      <div className="flex bg-[#0B1221] rounded-lg p-1 border border-white/5">
                        {["Low", "Med", "High"].map((p) => (
                          <button
                            key={p}
                            type="button"
                            onClick={() =>
                              setFormData({ ...formData, priority: p })
                            }
                            className={`flex-1 py-2 text-[10px] font-bold rounded-md transition-all ${
                              formData.priority === p
                                ? "bg-lime-500 text-black"
                                : "text-slate-500"
                            }`}
                          >
                            {p}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/5 relative">
                    <label className="flex items-center align-center gap-3 cursor-pointer group">
                      <div
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            consent: !prev.consent,
                          }))
                        }
                        className={`w-5 h-5 shrink-0 rounded border transition-all flex items-center justify-center mt-0.5 ${
                          formData.consent
                            ? "bg-lime-500 border-lime-500"
                            : showError && !formData.consent
                            ? "border-red-500 bg-red-500/10"
                            : "border-white/20 group-hover:border-lime-400"
                        }`}
                      >
                        {formData.consent && (
                          <Check
                            size={12}
                            className="text-black stroke-[4px]"
                          />
                        )}
                      </div>
                      <span className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider">
                        I consent for{" "}
                        <span className="text-white">Pilot Deployment</span>{" "}
                        within the campus.{" "}
                        <span className="text-red-500">*</span>
                      </span>
                    </label>

                    <AnimatePresence>
                      {showError && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute -top-12 left-0 right-0 flex justify-center"
                        >
                          <div className="bg-red-500/10 border border-red-500/50 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 text-red-400 text-[10px] font-bold uppercase tracking-tighter shadow-xl">
                            <AlertCircle size={14} /> Please fill out all
                            required fields to proceed
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="flex justify-center pt-2 ">
                    <Button type="submit" isLoading={isSubmitting}>
                      Submit Statement
                    </Button>
                  </div>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {submitted && (
            <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
              <ContributionSuccessModal data={formData} onClose={resetForm} />
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Contribute;