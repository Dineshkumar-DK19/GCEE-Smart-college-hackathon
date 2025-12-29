import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const AnimatedTimeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const updateHeight = () => {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    };

    updateHeight();

    // Recalculate height if window resizes
    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(ref.current);

    return () => resizeObserver.disconnect();
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress,  [0, 0.08, 0.92, 1],
    [0, 1, 1, 0]);

  return (
    <div
      className="w-full bg-[#020817]/70 font-sans md:px-10"
      ref={containerRef}
    >
      {/* Header Section */}
      <div className="max-w-7xl mx-auto py-12 md:py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-xl md:text-4xl mb-4 text-white max-w-4xl font-semibold">
          Hackathon Timings
        </h2>
        <p className="text-neutral-300 text-xs md:text-sm max-w-sm">
          A detailed timeline of the Smart College Hackathon events and activities.
        </p>
      </div>

      {/* TIMELINE WRAPPER */}
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            {/* LEFT COLUMN (Sticky Title + Dot)

            */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              {/* The Dot */}
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-[#020817] flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-500 border border-neutral-500 p-2" />
              </div>

              {/* Desktop Title */}
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            {/* RIGHT COLUMN (Content) */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              {/* Mobile Title */}
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500">
                {item.title}
              </h3>

              {/* Content Body */}
              <div className="text-neutral-300">
                {item.content}
              </div>
            </div>
          </div>
        ))}

        {/* --- VERTICAL LINES --- */}

        {/* 1. STATIC BACKGROUND LINE
           - The mask-image handles the fade at the top (0%) and bottom (100%)
           - 'black 90%, transparent 100%' creates the bottom blur effect you asked for
        */}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        />

        {/* 2. ANIMATED PROGRESS LINE */}
       <motion.div
          style={{
            height: heightTransform,
            opacity: opacityTransform,
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 rounded-full"
        >
        </motion.div>
      </div>
    </div>
  );
};