import React from "react";
import { Phone } from "lucide-react";

const contacts = [
  {

    name: "Muhammed Umer S",
    phone: "+91 94458 86230",
  },
  {

    name: "Harsini V",
    phone: "+91 93634 52517",
  },
  {

    name: "Vignesh V",
    phone: "+91 80154 91593",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="bg-[#020817]/70 py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white/80">
            Contact Us
          </h2>
          <p className="mt-3 text-slate-400 text-sm md:text-base">
            For queries related to Smart College Hackathon ' 26
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contacts.map((c, index) => (
           <div
  key={index}
  className={`
    bg-slate-900/40
    border
    border-slate-700/60
    rounded-2xl
    p-6
    transition
    flex flex-col
    items-center
    justify-center
    ${index === 2 ? "md:col-span-2 md:w-1/2 md:mx-auto" : ""}
  `}
>

              {/* Profile Circle */}
              <div className="w-14 h-14 rounded-full bg-blue-500/15 flex items-center justify-center mb-4">
                <span className="text-2xl font-semibold text-blue-400">
                  {c.name.charAt(0)}
                </span>
              </div>

              {/* Role */}
                <p className="text-white font-semibold text-lg mb-1">
                {c.name}
              </p>


              {/* Phone */}
              <a
                href={`tel:${c.phone}`}
                className="flex items-center gap-2 text-slate-400 text-sm hover:text-blue-400 transition"
              >
                <Phone className="w-4 h-4" />
                {c.phone}
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Contact;
