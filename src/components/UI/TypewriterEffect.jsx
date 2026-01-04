import { cn } from "../lib/utils";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

export const TypewriterEffect = ({
  words,
  className,

}) => {
  // Split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

useEffect(() => {
    if (isInView) {
      const runAnimation = async () => {
        // 1. RESET (Instant)
        await animate(
          "span",
          { opacity: 0, display: "none" },
          { duration: 0 }
        );

        // 2. TYPE IN (One time only)
        await animate(
          "span",
          { display: "inline-block", opacity: 1 },
          {
            duration: 0.45,
            delay: stagger(0.18),
            ease: "easeOut",
          }
        );

        // No loop or deletion logic here
      };

      runAnimation();
    }
  }, [isInView, animate]); // Removed 'scope' from deps to prevent unnecessary triggers

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <motion.span
                  initial={{}}
                  key={`char-${index}`}
                  className={cn(
                    "opacity-0 hidden",
                    word.className
                  )}
                >
                  {char}
                </motion.span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div
      className={cn(
        "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
        className
      )}
    >
      {renderWords()}
      {/* Cursor code removed per request */}
    </div>
  );
};