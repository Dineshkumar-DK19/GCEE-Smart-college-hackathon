"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, ChevronDown, ShieldAlert, Check } from "lucide-react";
import Button from "./UI/Button";
import ContributionSuccessModal from "./UI/ContributionSuccessModal";


const inputStyle = `
  w-full bg-[#0B1221] border rounded-lg
  px-3 py-2.5 sm:px-4 sm:py-3
  text-sm text-white placeholder:text-slate-600
  focus:outline-none focus:ring-0 focus:border-lime-500/50
  transition-colors duration-300 border-white/10
`;

const CustomDropdown = ({ value, onChange, options, placeholder }) => {
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
        className={`${inputStyle} flex items-center justify-between text-left`}
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
            transition={{ duration: 0.15 }}
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

// 1. NAVIGATION & UNMOUNT CLEANUP
// This ensures that if you click "Home" or any navbar link,
// the form is hidden and the body scroll is restored.
useEffect(() => {
  const handleClose = () => {
    setShowForm(false);
    document.body.style.overflow = "";
    document.body.style.height = "";
    document.body.style.touchAction = "";
  };

  // Listen for browser back/forward and URL changes
  window.addEventListener("popstate", handleClose);

  // Also cleanup if the user clicks a link that unmounts this component
  return () => {
    window.removeEventListener("popstate", handleClose);
    handleClose(); // Run the cleanup
  };
}, []);

// 2. SCROLL LOCK STATE SYNC
// This strictly manages the "frozen" background effect based on showForm state.
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

  const departments = [
    "Admin Office",
    "Automobile Engineering",
    "Civil Engineering",
    "CSE",
    "CS&DS",
    "ECE",
    "EEE",
    "Estate Management",
    "Exam Cell",
    "Information Technology",
    "Mechanical Engineering",
    "Sports",
  ].sort();

  const handleToggleUser = (val) => {
    setFormData((prev) => ({
      ...prev,
      targetUsers: prev.targetUsers.includes(val)
        ? prev.targetUsers.filter((i) => i !== val)
        : [...prev.targetUsers, val],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      setSubmitted(true);
    } catch (err) {
      alert("Submission failed");
    } finally {
      setIsSubmitting(false);
    }
  };


  const resetForm = () => {
    setSubmitted(false);
    setFormData(initialData); // 2. Clear all input fields
    // setShowForm(false);      // 3. REMOVED: Keep the form open
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
        <AnimatePresence mode="wait">
          {!showForm ? (
            <motion.div
              key="hero"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              className="flex flex-col items-center text-center space-y-6 md:space-y-10 py-10 md:py-16"
            >
              <div className="px-4 py-1.5 rounded-full border border-lime-500/30 bg-lime-500/5 text-lime-400 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em]">
                Faculty & Staff Portal
              </div>
              <h1 className="text-4xl sm:text-4xl md:text-5xl font-black text-white tracking-wide leading-[0.95]">
                HAVE A CHALLENGE ?<br />
                <span className="text-lime-400 tracking-wide">
                  CONTRIBUTE NOW.
                </span>
              </h1>
              <p className="max-w-xl text-slate-400 text-xs sm:text-sm md:text-lg leading-relaxed font-medium px-2">
                Submit departmental requirements and problem statements. Our
                engineering teams will analyze and develop custom software
                solutions for you.
              </p>
              <div className="w-full sm:w-auto px-10">
                <Button onClick={() => setShowForm(true)}>
                  Start Contribution <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          ) : (
            <div className="fixed inset-0 z-[100] flex items-center justify-center px-3 sm:px-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowForm(false)}
                className="absolute inset-0 bg-black/70 backdrop-blur-md"
              />

              <motion.div
                key="form"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-5xl mt-20 max-h-[85vh] md:max-h-[90vh] overflow-y-auto bg-[#020817]/95 border border-white/10 rounded-2xl md:rounded-3xl shadow-2xl shadow-black/80"
              >
                <div className="relative p-4 sm:p-5 md:p-6 border-b border-white/5 flex justify-between items-center bg-[#020817]/80 backdrop-blur-md sticky top-0 z-20">
                  <div className="text-left">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-black text-white tracking-tight uppercase leading-none">
                      Requirement <span className="text-lime-400">Brief</span>
                    </h2>
                  </div>
                  <button
                    onClick={() => setShowForm(false)}
                    className="p-2 bg-white/5 hover:bg-red-500/20 hover:text-red-500 rounded-lg sm:rounded-xl transition-all shadow-inner group"
                  >
                    <X className="w-5 h-5 text-slate-400 group-hover:text-red-500 transition-colors" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="p-4 sm:p-8 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label helper="Department/Section">Department Name</Label>
                      <CustomDropdown
                        value={formData.dept}
                        onChange={(val) =>
                          setFormData({ ...formData, dept: val })
                        }
                        options={departments}
                        placeholder="Select Department"
                      />
                    </div>
                    <div>
                      <Label helper="Professional Title">Problem Title</Label>
                      <input
                        className={inputStyle}
                        value={formData.title}
                        placeholder="Name of the problem statement..."
                        onChange={(e) =>
                          setFormData({ ...formData, title: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label helper="Current manual method">
                        Background / Current Process
                      </Label>
                      <textarea
                        className={`${inputStyle} h-24 resize-none`}
                        value={formData.background}
                        placeholder="Describe how the task is currently carried out..."
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            background: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                    <div>
                      <Label helper="List the inefficiencies">
                        Problem Description
                      </Label>
                      <textarea
                        className={`${inputStyle} h-24 resize-none`}
                        value={formData.description}
                        placeholder="List the issues, challenges, or inefficiencies..."
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            description: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label helper="Goal">Objective</Label>
                      <textarea
                        className={`${inputStyle} h-24 resize-none`}
                        value={formData.objective}
                        placeholder="Clearly state the goal..."
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            objective: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                    <div>
                      <Label helper="Expected modules">Key Features</Label>
                      <textarea
                        className={`${inputStyle} h-24 resize-none`}
                        value={formData.features}
                        placeholder="Mention the expected functionality..."
                        onChange={(e) =>
                          setFormData({ ...formData, features: e.target.value })
                        }
                        required
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
                        options={["Web", "Mobile", "Desktop", "Any Platform"]}
                        placeholder="Select Platform"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Data Sensitivity</Label>
                      <div className="flex bg-[#0B1221] rounded-lg p-1 border border-white/5">
                        {["Low", "Medium", "High"].map((level) => (
                          <button
                            key={level}
                            type="button"
                            onClick={() =>
                              setFormData({ ...formData, sensitivity: level })
                            }
                            className={`flex-1 py-2 text-[10px] sm:text-xs font-bold rounded-md transition-all ${
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
                    <div className="space-y-2">
                      <Label>Priority</Label>
                      <div className="flex bg-[#0B1221] rounded-lg p-1 border border-white/5">
                        {["Low", "Medium", "High"].map((prio) => (
                          <button
                            key={prio}
                            type="button"
                            onClick={() =>
                              setFormData({ ...formData, priority: prio })
                            }
                            className={`flex-1 py-2 text-[10px] sm:text-xs font-bold rounded-md transition-all ${
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label helper="Outputs">Expected Deliverables</Label>
                      <input
                        className={inputStyle}
                        value={formData.deliverables}
                        placeholder="Prototype, source code, etc..."
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            deliverables: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <Label helper="Limitations">
                        Constraints / Assumptions
                      </Label>
                      <input
                        className={inputStyle}
                        value={formData.constraints}
                        placeholder="Mention specific constraints..."
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            constraints: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="p-4 sm:p-5 rounded-2xl bg-lime-500/[0.03] border border-lime-500/10 space-y-4">
                    <div className="flex items-center gap-2 text-lime-400 uppercase text-[10px] md:text-xs font-black tracking-widest">
                      <ShieldAlert className="w-4 h-4 md:w-5 md:h-5" />{" "}
                      Coordinator Details
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-4">
                        <input
                          className={inputStyle}
                          value={formData.coordinatorName}
                          placeholder="Full Name"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              coordinatorName: e.target.value,
                            })
                          }
                          required
                        />
                        <input
                          className={inputStyle}
                          value={formData.coordinatorDesignation}
                          placeholder="Designation"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              coordinatorDesignation: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                      <div className="space-y-4">
                        <input
                          className={inputStyle}
                          value={formData.coordinatorEmail}
                          placeholder="Official Email ID"
                          type="email"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              coordinatorEmail: e.target.value,
                            })
                          }
                          required
                        />
                        <input
                          className={inputStyle}
                          value={formData.coordinatorContact}
                          placeholder="Contact Number"
                          type="tel"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              coordinatorContact: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                    </div>
                    <div className="pt-3 border-t border-white/5">
                      <label className="flex items-start gap-3 cursor-pointer group">
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
                              : "bg-transparent border-white/20 group-hover:border-lime-400"
                          }`}
                        >
                          {formData.consent && (
                            <Check
                              size={12}
                              className="text-black stroke-[4px]"
                            />
                          )}
                        </div>
                        <span className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider leading-relaxed">
                          I consent for{" "}
                          <span className="text-white">Pilot Deployment</span>{" "}
                          of the solution within the campus.
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="text-center pt-2">
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
            <ContributionSuccessModal data={formData} onClose={resetForm} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Contribute;
