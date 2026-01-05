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
          08:00 AM
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
          <Users className="w-4 h-4 md:w-6 md:h-6 text-lime-400 shrink-0" />

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
          Teams come together at the venue to kick off the Smart Campus
          Hackathon, setting the tone for collaboration and innovation
          throughout the day.
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
          08:15 AM
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
          <Users className="w-4 h-4 md:w-6 md:h-6 text-lime-400 shrink-0" />

          <h3
            className="
                text-sm md:text-4xl lg:text-3xl
                 font-bold
                 text-white/90
                 tracking-wide
              "
          >
            Hackathon Starts
          </h3>
        </div>

        {/* Description */}

        <p
          className="
  text-white/70
  text-xs leading-snug
  md:text-base lg:text-lg"
        >
          Teams come together at the venue to kick off the Smart Campus
          Hackathon, setting the tone for collaboration and innovation
          throughout the day.
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
          9:00 AM
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
          <ClipboardCheck className="w-4 h-4 md:w-6 md:h-6 text-lime-400 shrink-0" />

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
          Participants present their initial progress, and proposed solutions
          are reviewed by the mentors and evaluators.
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
          11:00 AM
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
          <Utensils className="w-4 h-4 md:w-6 md:h-6 text-lime-400 shrink-0" />

          <h3
            className="
                text-sm md:text-4xl lg:text-3xl
                 font-bold
                 text-white/90
                 tracking-wide
              "
          >
            Refreshment Time
          </h3>
        </div>

        {/* Description */}

        <p
          className="
  text-white/70
  text-xs leading-snug
  md:text-base lg:text-lg"
        >
         Participants take a quick break to recharge with morning snacks. It is a brief interval to refresh before heading into the Second project review.
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
          <ClipboardCheck className="w-4 h-4 md:w-6 md:h-6 text-lime-400 shrink-0" />

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
          Participants present their enhanced work while mentors and evaluators
          review developments and guide the next steps.
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
          <Utensils className="w-4 h-4 md:w-6 md:h-6 text-lime-400 shrink-0" />

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
          Participants take a break to refresh, recharge, and prepare for the
          next phase of the hackathon.
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
          1:30 PM
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
           <Users className="w-4 h-4 md:w-6 md:h-6 text-lime-400 shrink-0" />


          <h3
            className="
                text-sm md:text-4xl lg:text-3xl
                 font-bold
                 text-white/90
                 tracking-wide
              "
          >
            Your Innovation Continues...
          </h3>
        </div>

        {/* Description */}

        <p
          className="
           text-white/70
            text-xs leading-snug
             md:text-base lg:text-lg"
        >
         Participants should assemble after the lunch break at 1:30 PM to continue their innovation and development.
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
          4:00 PM
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
          <Utensils className="w-4 h-4 md:w-6 md:h-6 text-lime-400 shrink-0" />

          <h3
            className="
                text-sm md:text-4xl lg:text-3xl
                 font-bold
                 text-white/90
                 tracking-wide
              "
          >
            Refreshment Time
          </h3>
        </div>

        {/* Description */}

        <p
          className="
  text-white/70
  text-xs leading-snug
  md:text-base lg:text-lg"
        >
         Participants take a brief interval to recharge with snacks and drinks. It’s a moment to step away from screens and gather energy for the final project sprint.
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
          05:00 PM
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
          <Award className="w-4 h-4 md:w-6 md:h-6 text-lime-400 shrink-0" />

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
          Participants present their finalized solutions, which are evaluated by
          mentors and the review panel.
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
          7:30 PM
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
            <Award className="w-4 h-4 md:w-6 md:h-6 text-lime-400 shrink-0" />

          <h3
            className="
                text-sm md:text-4xl lg:text-3xl
                 font-bold
                 text-white/90
                 tracking-wide
              "
          >
            End of SCH
          </h3>
        </div>

        {/* Description */}

        <p
          className="
  text-white/70
  text-xs leading-snug
  md:text-base lg:text-lg"
        >
         The coding phase officially concludes. Teams submit their final projects and  marking the end of an intensive journey of innovation.
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
          <Trophy className="w-4 h-4 md:w-6 md:h-6 text-lime-400 shrink-0" />

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
          The top teams are announced and celebrated for their innovative
          solutions and hard work throughout the hackathon.
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
