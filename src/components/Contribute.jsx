import React, { useState } from 'react';

const Contribute = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    dept: 'Admin Office',
    title: '',
    requirement: 'Website',
    theme: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Departments sorted in Alphabetical Order
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
    "Sports"
  ].sort();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxvahYIkAB2oX8AZJ-MFU8toDvDo1_19XV4-CW6g-klk_IokdfV8sy_ags3KkIRjZo04g/exec";
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(formData),
      });
      
      setSubmitted(true);
      setIsSubmitting(false);
      setFormData({ name: '', contact: '', dept: 'Admin Office', title: '', requirement: 'Website', theme: '', description: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      alert("Submission failed.");
      setIsSubmitting(false);
    }
  };

  const inputStyle = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all focus:ring-1 focus:ring-blue-500 placeholder:text-slate-600 text-sm md:text-base";

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-12 animate-in fade-in duration-500">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400">
          Staff Contribution Portal
        </h2>
        <p className="text-slate-400 mt-3 font-medium text-sm md:text-base tracking-wide">
          Assigning unique <span className="text-blue-400">SCH IDs</span> for college-wide problems.
        </p>
      </div>

      <div className="relative">
        <form onSubmit={handleSubmit} className={`space-y-6 bg-slate-900/40 p-6 md:p-10 rounded-3xl border border-white/10 backdrop-blur-xl shadow-2xl transition-all duration-300 ${isSubmitting ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
          
          {/* Row 1: Name & Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-slate-400 mb-2 text-[10px] font-bold uppercase tracking-widest">Staff Name</label>
              <input type="text" required className={inputStyle} placeholder="Enter Full Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
            </div>
            <div className="flex flex-col">
              <label className="text-slate-400 mb-2 text-[10px] font-bold uppercase tracking-widest">Contact Number</label>
              <input type="tel" required className={inputStyle} placeholder="e.g. 9876543210" value={formData.contact} onChange={(e) => setFormData({...formData, contact: e.target.value})} />
            </div>
          </div>

          {/* Row 2: Dept & Requirement */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-slate-400 mb-2 text-[10px] font-bold uppercase tracking-widest">Department</label>
              <select className={inputStyle} value={formData.dept} onChange={(e) => setFormData({...formData, dept: e.target.value})}>
                {departments.map(dept => <option key={dept} value={dept} className="bg-slate-900">{dept}</option>)}
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-slate-400 mb-2 text-[10px] font-bold uppercase tracking-widest">Project Requirement</label>
              <select className={inputStyle} value={formData.requirement} onChange={(e) => setFormData({...formData, requirement: e.target.value})}>
                <option value="Website" className="bg-slate-900">Website</option>
                <option value="Mobile App" className="bg-slate-900">Mobile App</option>
                <option value="Web & App" className="bg-slate-900">Both (Web & App)</option>
              </select>
            </div>
          </div>

          {/* Row 3: Title & Theme */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-slate-400 mb-2 text-[10px] font-bold uppercase tracking-widest">Problem Title</label>
              <input type="text" required className={inputStyle} placeholder="Short title" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} />
            </div>
            <div className="flex flex-col">
              <label className="text-slate-400 mb-2 text-[10px] font-bold uppercase tracking-widest">Theme</label>
              <input type="text" required className={inputStyle} placeholder="e.g. Automation" value={formData.theme} onChange={(e) => setFormData({...formData, theme: e.target.value})} />
            </div>
          </div>

          {/* Row 4: Description */}
          <div className="flex flex-col">
            <label className="text-slate-400 mb-2 text-[10px] font-bold uppercase tracking-widest">Detailed Description</label>
            <textarea required className={`${inputStyle} h-32 resize-none`} placeholder="Explain the pain points or features required..." value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} />
          </div>

          <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-4 rounded-xl transition-all shadow-xl active:scale-95 uppercase tracking-widest text-sm">
            {isSubmitting ? "Uploading to Cloud..." : "Submit Problem Statement"}
          </button>
        </form>

        {submitted && (
          <div className="absolute inset-0 flex items-center justify-center rounded-3xl bg-slate-950/90 backdrop-blur-md border border-emerald-500/50 animate-in fade-in zoom-in duration-300 p-6">
            <div className="text-center">
              <div className="text-6xl mb-4">✨</div>
              <h3 className="text-2xl font-bold text-white uppercase tracking-tighter">Entry Recorded</h3>
              <p className="text-emerald-400 mt-2 font-medium">Your problem has been submitted successfully.</p>
              <button onClick={() => setSubmitted(false)} className="mt-8 px-6 py-2 border border-white/20 rounded-full text-xs text-slate-400 hover:text-white transition-colors">Submit Another</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contribute;