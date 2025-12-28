import { cn } from "../lib/utils";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName
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
        // 1. Reset (Ensure everything is hidden initially)
        await animate("span", { opacity: 0, display: "none" }, { duration: 0 });

        // 2. Type (Animate In) - SLOWER SPEED
        // Changed stagger from 0.1 to 0.2
        await animate(
          "span",
          { display: "inline-block", opacity: 1, width: "fit-content" },
          { duration: 0.3, delay: stagger(0.2), ease: "easeInOut" }
        );
        /*
        // 3. Wait (Pause for 2 seconds)
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // 4. Delete (Animate Out) - SLOWER SPEED
        // Changed stagger from 0.05 to 0.1
        await animate(
          "span",
          { opacity: 0, display: "none" },
          { duration: 0.1, delay: stagger(0.1, { from: "last" }) }
        );

        // 5. Loop
        if (scope.current) {
           runLoop();
        }
           */
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