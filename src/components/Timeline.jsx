import { AnimatedTimeline } from "../components/UI/AnimatedTimeline";
import {
  Users,
  ClipboardCheck,
  ClipboardList,
  Utensils,
  Award,
  Trophy,
} from "lucide-react";

const timelineData = [
      {
    title: (
      /* Added md:items-end and specific mobile spacing */
      <div className="flex flex-col justify-center items-start md:items-end pr-4 md:pr-0">
        <span
          className="
        text-2xl md:text-5xl
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
        <div className="flex items-center gap-3 mb-2 md:mb-3">
          {/* Icon: Smaller on mobile (w-5), larger on desktop (w-6) */}
         <Users className="w-4 h-4 md:w-6 md:h-6 text-white/80 shrink-0" />

          <h3
            className="
                text-sm md:text-4xl lg:text-3xl
                 font-bold
                 text-white/90
                 tracking-wide
              "
          >
           Team Check-in
          </h3>
        </div>

        {/* Description */}

        <p
          className="
  text-white/70
  text-xs leading-snug
  md:text-base lg:text-lg"
        >
          Teams come together at the venue to kick off the Smart College Hackathon, setting the tone for collaboration and innovation throughout the day.
        </p>
      </div>
    ),
  },
  {
    title: (
      /* Added md:items-end and specific mobile spacing */
      <div className="flex flex-col justify-center items-start md:items-end pr-4 md:pr-0">
        <span
          className="
        text-2xl md:text-5xl
        font-bold
        text-white/90
        whitespace-nowrap
        mb-2 md:mb-0
      "
        >
          10:00 AM
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
        <div className="flex items-center gap-3 mb-2 md:mb-3">
          {/* Icon: Smaller on mobile (w-5), larger on desktop (w-6) */}
          <ClipboardCheck className="w-4 h-4 md:w-6 md:h-6 text-white/80 shrink-0" />

          <h3
            className="
                text-sm md:text-4xl lg:text-3xl
                 font-bold
                 text-white/90
                 tracking-wide
              "
          >
           First Review
          </h3>
        </div>

        {/* Description */}

        <p
          className="
  text-white/70
  text-xs leading-snug
  md:text-base lg:text-lg"
        >
         Participants present their initial progress, and proposed solutions are reviewed by the mentors and evaluators.
        </p>
      </div>
    ),
  },
    {
    title: (
      /* Added md:items-end and specific mobile spacing */
      <div className="flex flex-col justify-center items-start md:items-end pr-4 md:pr-0">
        <span
          className="
        text-2xl md:text-5xl
        font-bold
        text-white/90
        whitespace-nowrap
        mb-2 md:mb-0
      "
        >
          12:00 PM
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
        <div className="flex items-center gap-3 mb-2 md:mb-3">
          {/* Icon: Smaller on mobile (w-5), larger on desktop (w-6) */}
       <ClipboardCheck className="w-4 h-4 md:w-6 md:h-6 text-white/80 shrink-0" />

          <h3
            className="
                text-sm md:text-4xl lg:text-3xl
                 font-bold
                 text-white/90
                 tracking-wide
              "
          >
            Second Review
          </h3>
        </div>

        {/* Description */}

        <p
          className="
  text-white/70
  text-xs leading-snug
  md:text-base lg:text-lg"
        >
          Participants present their enhanced work while mentors and evaluators review developments and guide the next steps.
        </p>
      </div>
    ),
  },

    {
    title: (
      /* Added md:items-end and specific mobile spacing */
      <div className="flex flex-col justify-center items-start md:items-end pr-4 md:pr-0">
        <span
          className="
        text-2xl md:text-5xl
        font-bold
        text-white/90
        whitespace-nowrap
        mb-2 md:mb-0
      "
        >
          12:30 PM
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
        <div className="flex items-center gap-3 mb-2 md:mb-3">
          {/* Icon: Smaller on mobile (w-5), larger on desktop (w-6) */}
        <Utensils className="w-4 h-4 md:w-6 md:h-6 text-white/80 shrink-0" />

          <h3
            className="
                text-sm md:text-4xl lg:text-3xl
                 font-bold
                 text-white/90
                 tracking-wide
              "
          >
            Lunch Break
          </h3>
        </div>

        {/* Description */}

        <p
          className="
  text-white/70
  text-xs leading-snug
  md:text-base lg:text-lg"
        >
          Participants take a break to refresh, recharge, and prepare for the next phase of the hackathon.
        </p>
      </div>
    ),
  },
    {
    title: (
      /* Added md:items-end and specific mobile spacing */
      <div className="flex flex-col justify-center items-start md:items-end pr-4 md:pr-0">
        <span
          className="
        text-2xl md:text-5xl
        font-bold
        text-white/90
        whitespace-nowrap
        mb-2 md:mb-0
      "
        >
          03:00 PM
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
        <div className="flex items-center gap-3 mb-2 md:mb-3">
          {/* Icon: Smaller on mobile (w-5), larger on desktop (w-6) */}
      <Award className="w-4 h-4 md:w-6 md:h-6 text-white/80 shrink-0" />

          <h3
            className="
                text-sm md:text-4xl lg:text-3xl
                 font-bold
                 text-white/90
                 tracking-wide
              "
          >
           Final Review
          </h3>
        </div>

        {/* Description */}

        <p
          className="
  text-white/70
  text-xs leading-snug
  md:text-base lg:text-lg"
        >
          Participants present their finalized solutions, which are evaluated by mentors and the review panel.
        </p>
      </div>
    ),
  },
      {
    title: (
      /* Added md:items-end and specific mobile spacing */
      <div className="flex flex-col justify-center items-start md:items-end pr-4 md:pr-0">
        <span
          className="
        text-2xl md:text-5xl
        font-bold
        text-white/90
        whitespace-nowrap
        mb-2 md:mb-0
      "
        >
          Next Day
        </span>
      </div>
    ),
    content: (
      <div
        className="
      relative
      bg-slate-900/40
      p-4 md:p-6
      rounded-lg
       md:ml-0
    "
      >
        {/* Heading with Matching Icon */}
        <div className="flex items-center gap-3 mb-2 md:mb-3">
          {/* Icon: Smaller on mobile (w-5), larger on desktop (w-6) */}
         <Trophy className="w-4 h-4 md:w-6 md:h-6 text-white/80 shrink-0" />

          <h3
            className="
                text-sm md:text-4xl lg:text-3xl
                 font-bold
                 text-white/90
                 tracking-wide
              "
          >
           Winner Announcement
          </h3>
        </div>

        {/* Description */}

        <p
          className="
  text-white/70
  text-xs leading-snug
  md:text-base lg:text-lg"
        >
          The top teams are announced and celebrated for their innovative solutions and hard work throughout the hackathon.
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
