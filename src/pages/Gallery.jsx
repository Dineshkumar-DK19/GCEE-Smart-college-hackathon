import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

// Gallery Images (FINAL & CLEAN)
const galleryImages = [
  // 🔹 HOD with Organizers (FIRST)

  // 🔹 Organizing Team
  {
    id: "organizers",
    src: "/PIC/Organizers.jpeg",
    title: "The Organizing Team",
    desc: "The brains behind SCH 2026.",
  },

  // 🔹 Winning Teams 1–10
  ...Array.from({ length: 10 }, (_, i) => ({
    id: `team${i + 1}`,
    src: `/PIC/Team${i + 1}.jpeg`,
    title: `Winning Team ${i + 1}`,
    desc: "Outstanding performance in the hackathon.",
  })),

  // 🔹 Hall Pictures (4 UNIQUE images)
  {
    id: "hall-1",
    src: "/PIC/Seminar.jpeg",
    title: "Idea Exchange Zone",
    desc: "A hall buzzing with ideas, discussions, and innovation at SCH 2026.",
  },
  {
    id: "hall-2",
    src: "/PIC/CC1.jpeg",
    title: "Problem Solving Arena",
    desc: "Teams deep in thought, shaping smart solutions during SCH 2026.",
  },
  {
    id: "hall-3",
    src: "/PIC/CC2.jpeg",

    title: "Innovation Lab",
    desc: "Focused minds and collaborative energy driving SCH 2026 forward.",
  },
  {
    id: "hall-4",
    src: "/PIC/CSE101.jpeg",
    title: "Collaboration Hub",
    desc: "Creativity and teamwork coming together inside SCH 2026.",
  },

  {
    id: "hod-organizers",
    src: "/PIC/Overall.jpeg",
    title: "Under the Leadership of Our HOD",
    desc: "Guided by leadership, powered by teamwork — the minds behind SCH 2026.",
  },
];

const Gallery = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-24 min-h-screen px-6 pb-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate("/")}
            className="p-2 rounded-full bg-white/5 text-slate-300 hover:text-lime-400 hover:bg-white/10 transition-all"
          >
            <ArrowLeft />
          </button>
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Hall of <span className="text-lime-400">Fame</span>
          </h1>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:border-lime-500/50 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-[#020817]">
                <h3 className="text-xl font-bold text-lime-400">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className="max-w-7xl mx-auto my-8 px-4 md:px-8 lg:px-10 mb-8 md:mb-12">
    <div className="flex flex-col items-center justify-center text-center">
      <p className="text-sm sm:text-lg md:text-xl font-semibold tracking-wide text-lime-400/90 uppercase">
        CSE <span className="text-white">2023-2027</span>
      </p>
      {/* Optional decorative underline to match your theme */}
      <div className="h-px w-24 md:w-32 bg-gradient-to-r from-transparent via-lime-500/50 to-transparent mt-2" />
    </div>
  </div>
    </section>
  );
};

export default Gallery;
