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
     const runLoop = async () => {
  /* 1️⃣ RESET — instant clear (no animation feel) */
  await animate(
    "span",
    { opacity: 0, display: "none" },
    { duration: 0 }
  );

  /* 2️⃣ TYPE IN — confident, readable, hype */
  await animate(
    "span",
    { display: "inline-block", opacity: 1 },
    {
      duration: 0.45,              // smooth fade-in per word/letter
      delay: stagger(0.18),         // 🔥 hackathon typing speed
      ease: "easeOut",
    }
  );

  /* 3️⃣ HOLD — let it breathe (crowd reads it) */
  await new Promise((resolve) => setTimeout(resolve, 3500));
  // 👆 sweet spot: not boring, not rushed

  /* 4️⃣ DELETE — faster than typing (feels powerful) */
  await animate(
    "span",
    { opacity: 0 },
    {
      duration: 0.15,
      delay: stagger(0.12, { from: "last" }), // reverse wipe
      ease: "easeIn",
    }
  );

  /* 5️⃣ LOOP */
  if (scope.current) {
    runLoop();
  }
};


      runLoop();
    }
  }, [isInView, animate, scope]);

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