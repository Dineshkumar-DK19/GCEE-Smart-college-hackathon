"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, ChevronDown } from "lucide-react";

/* ---------- Reusable Animated Dropdown ---------- */
const AnimatedDropdown = ({ value, setValue, options, placeholder }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        className="
          w-full flex items-center justify-between
          rounded-lg px-4 py-3
          bg-[#020817]
          border border-white/10
          text-sm text-slate-300
          focus:outline-none
        "
      >
        <span className={value ? "text-slate-300" : "text-slate-500"}>
          {value || placeholder}
        </span>
        <ChevronDown
          size={18}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="
              absolute z-50 mt-2 w-full
              rounded-xl border border-white/10
              bg-[#020817]
              shadow-xl
              max-h-56 overflow-y-auto
              scrollbar-hide
            "
          >
            {options.map((opt, i) => (
              <motion.button
                key={opt}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                onClick={() => {
                  setValue(opt);
                  setOpen(false);
                }}
                className="
                  w-full text-left px-4 py-2.5
                  text-sm text-slate-400
                  hover:bg-white/5 hover:text-white
                  transition
                "
              >
                {opt}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ---------- Main Component ---------- */
const Contribute = () => {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    dept: "",
    requirement: "",
    title: "",
    theme: "",
    description: "",
  });

  const departments = [
    "Admin Office",
    "Automobile Engineering",
    "Civil Engineering",
    "Computer Science and Data Science Engineering",
    "Computer Science and Engineering",
    "Electrical and Electronics Engineering",
    "Electronics and Communication Engineering",
    "Estate Management",
    "Exam Cell",
    "First Year Departments",
    "Hostel Office",
    "Information Technology",
    "Library",
    "Mechanical Engineering",
    "Sports",
  ];

  const requirements = ["Website", "Mobile App", "Web & App"];

  const inputStyle = `
    w-full rounded-lg
    bg-[#020817]
    border border-white/10
    px-4 py-3
    text-sm text-white
    placeholder:text-slate-500
    focus:outline-none
  `;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setOpen(false);
      }, 1500);
    }, 1000);
  };

  return (
    <section className="bg-[#020817]/70 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <h2 className="text-xl md:text-3xl font-bold text-white/80 text-center mb-10">
          {" "}
          Contribute a Problem Statement{" "}
        </h2>{" "}
        <p className="text-xs sm:text-sm md:text-lg text-slate-400 leading-relaxed">
          {" "}
          Smart College Hackathon invites faculty members and administrative
          staff to contribute real-world problem statements from their
          respective departments.{" "}
        </p>{" "}
        <p className="text-xs sm:text-sm md:text-lg text-slate-400 leading-relaxed">
          {" "}
          These problem statements help students work on practical challenges
          and build technology-driven solutions that can be implemented within
          the college ecosystem.{" "}
        </p>
        <button
          onClick={() => setOpen(true)}
          className="
            px-8 py-4 rounded-xl
            bg-gradient-to-r from-blue-600 to-indigo-600
            text-white font-semibold
            hover:scale-[1.02] transition
          "
        >
          ➕ Add Problem Statement
        </button>
      </div>

      {/* ---------- MODAL ---------- */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="
                relative w-full max-w-xl
                bg-[#020817]
                border border-white/10
                rounded-2xl
                p-6 md:p-8
                max-h-[90vh] overflow-y-auto scrollbar-hide
              "
            >
              {/* Header */}
              <div className="sticky top-0 bg-[#020817] pb-4 mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white/80">
                  Staff Contribution
                </h3>
                <button onClick={() => setOpen(false)}>
                  <X className="text-slate-400 hover:text-white" size={20} />
                </button>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    className={inputStyle}
                    placeholder="Staff Name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />

                  <input
                    className={inputStyle}
                    placeholder="Contact Number"
                    inputMode="numeric"
                    maxLength={10}
                    required
                    value={formData.contact}
                    onChange={(e) => {
                      const v = e.target.value.replace(/\D/g, "");
                      if (v.length <= 10)
                        setFormData({ ...formData, contact: v });
                    }}
                  />

                  <AnimatedDropdown
                    value={formData.dept}
                    setValue={(v) => setFormData({ ...formData, dept: v })}
                    options={departments}
                    placeholder="Select Department"
                  />

                  <AnimatedDropdown
                    value={formData.requirement}
                    setValue={(v) =>
                      setFormData({ ...formData, requirement: v })
                    }
                    options={requirements}
                    placeholder="Project Requirement"
                  />

                  <input
                    className={inputStyle}
                    placeholder="Problem Title"
                    required
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                  />

                  <input
                    className={inputStyle}
                    placeholder="Theme"
                    required
                    value={formData.theme}
                    onChange={(e) =>
                      setFormData({ ...formData, theme: e.target.value })
                    }
                  />

                  <textarea
                    className={`${inputStyle} h-28 resize-none`}
                    placeholder="Describe the problem clearly"
                    required
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        description: e.target.value,
                      })
                    }
                  />

                  <button
                    disabled={isSubmitting}
                    className="
                      w-full py-3 rounded-xl
                      bg-gradient-to-r from-blue-600 to-indigo-600
                      text-white font-bold
                    "
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </form>
              ) : (
                <motion.div
                  className="flex items-center justify-center h-48"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 180 }}
                >
                  <CheckCircle className="w-20 h-20 text-emerald-500" />
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contribute;
