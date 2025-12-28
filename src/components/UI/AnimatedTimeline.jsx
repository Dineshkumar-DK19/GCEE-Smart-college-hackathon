import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const AnimatedTimeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.getBoundingClientRect().height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 10%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="w-full bg-[#020817]/80 text-white font-sans"
    >
      {/* Header Section */}
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8">
        <h2 className="text-3xl md:text-5xl font-semibold mb-4">
          Hackathon Timeline
        </h2>
        <p className="text-white/70 max-w-md">
          Key milestones of the Smart College Hackathon.
        </p>
      </div>

      {/* TIMELINE WRAPPER */}
      {/* mx-2 (8px margin) creates a tight fit on mobile */}
      <div className="max-w-7xl mx-2  md:mx-auto md:px-8">
        <div ref={ref} className="relative pb-20">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex justify-start pt-10 md:pt-40 md:gap-10"
            >
              {/* LEFT COLUMN: Dot & Desktop Title */}
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                {/* Timeline Dot: Moved to left-2 (8px) */}
                <div className="h-10 absolute left-2 md:left-3 w-10 rounded-full bg-[#020817]   flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-white/10 border border-neutral-600 dark:border-neutral-700 p-2" />
                </div>

                {/* Desktop Title */}
                <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-white/50">
                  {item.title}
                </h3>
              </div>

              {/* RIGHT COLUMN: Content */}
              {/* CHANGED: pl-16 (was 20) reduces left gap. pr-2 (was 4) reduces right gap. */}
              <div className="relative pl-16 pr-2 md:pl-4 w-full">
                {/* Mobile Title */}
                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-white/50">
                  {item.title}
                </h3>

                {/* Content */}
                <div className="text-white/80">
                  {item.content}
                </div>
              </div>
            </div>
          ))}

          {/* VERTICAL LINE */}
          {/* CHANGED: Line moved to left-7 (28px) to align with new dot position */}
          <div
            style={{ height }}
            className="absolute left-7 md:left-8 top-0 w-[2px] bg-gradient-to-b from-transparent via-white/20 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute top-0 inset-x-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};