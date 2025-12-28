import { AnimatedTimeline } from "../components/UI/AnimatedTimeline";
import { FileText } from "lucide-react";

const timelineData = [
  {
    title: (
      /* Added md:items-end and specific mobile spacing */
      <div className="flex flex-col justify-center items-start md:items-end pr-4 md:pr-0">
        <span
          className="
        text-3xl md:text-5xl
        font-bold
        text-white/90
        whitespace-nowrap
        mb-2 md:mb-0
      "
        >
          08:30 AM
        </span>
      </div>
    ),
    content: (
      <div
        className="
      relative
      bg-slate-900/40
      /* Mobile: p-4 (more space for text), Desktop: p-6 */
      p-4 md:p-6
      rounded-lg
      /* Adds gap between timeline line and card on mobile */
       md:ml-0
    "
      >
        {/* Heading with Matching Icon */}
        <div className="flex items-start gap-3 mb-2 md:mb-3">
          {/* Icon: Smaller on mobile (w-5), larger on desktop (w-6) */}
          <FileText className="w-5 h-5 md:w-6 md:h-6 text-white shrink-0 mt-1" />
          <h3
            className="
    text-sm md:text-4xl lg:text-3xl
    font-bold
    text-white/90
    leading-tight
"
          >
            Problem Statements Open
          </h3>
        </div>

        {/* Description */}

        <p
          className="
  text-white/70
  text-xs leading-snug
  md:text-base lg:text-lg
"
        >
          Join us as participants gather to mark the beginning of GUSTO '25,
          fostering a spirit of unity and excitement for the day ahead.
        </p>
      </div>
    ),
  },
];

const Timeline = () => {
  return (
    <section id="timeline" className="layout-box ">
      <AnimatedTimeline data={timelineData} />
    </section>
  );
};

export default Timeline;
