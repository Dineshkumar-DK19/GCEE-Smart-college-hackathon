import React from 'react';

const About = () => {
  const extraInfo = [
    {
      title: "Our Vision",
      desc: "To empower student innovators by providing a platform where creative ideas transform into impactful technological solutions.",
      icon: "✨"
    },
    {
      title: "Eligibility",
      desc: "Open to all engineering students across all departments. We welcome solo innovators and teams of up to 4 members.",
      icon: "🛡️"
    },
    {
      title: "The Perks",
      desc: "Winners receive cash prizes and swags. All participants get certificates, mentorship, and a chance to network.",
      icon: "🏆"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
      {/* Top Section: Title & Stats */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            About the Hackathon
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Welcome to the flagship Hackathon of <span className="text-blue-400 font-semibold">Government College of Engineering, Erode</span>. 
            A 24-hour journey where students push boundaries, collaborate, and build the future.
          </p>
          
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
            <p className="text-slate-400">
              To foster technical excellence and real-world problem-solving among the next generation of engineers.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Hours", value: "8+" },
            { label: "Participants", value: "120+" },
            { label: "Prizes", value: "₹6K+" },
            { label: "Innovation", value: "100%" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl bg-white/5 border border-white/5 flex flex-col items-center justify-center group hover:scale-105 transition-all duration-500"
            >
              <span className="text-3xl font-bold text-blue-400 group-hover:text-emerald-400 transition-colors">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-widest text-slate-500 mt-2">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section: Vision, Eligibility, Perks */}
      <div className="grid md:grid-cols-3 gap-6">
        {extraInfo.map((item, index) => (
          <div 
            key={index}
            className="p-8 rounded-3xl bg-gradient-to-b from-white/10 to-transparent border border-white/10 backdrop-blur-md hover:border-blue-500/40 transition-all duration-700 group"
          >
            <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;