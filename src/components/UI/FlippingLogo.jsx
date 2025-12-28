import React, { useState, useEffect, useRef } from 'react';

const FlippingLogo = ({ frontImage, backImage, altText = "Logo" }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isInteractionEnabled, setIsInteractionEnabled] = useState(false);
  const hasAnimatedRef = useRef(false); // Tracks if initial animation finished

  // 1. THE "ATTRACT MODE" SEQUENCE
  useEffect(() => {
    // Prevent double-firing in React Strict Mode
    if (hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;

    const runSequence = async () => {
      // Step 1: Wait 1s before starting (let page load)
      await new Promise(r => setTimeout(r, 1000));
      setIsFlipped(true); // Flip to Hackathon Logo

      // Step 2: Hold the Hackathon Logo for 2.5s (increased for readability)
      await new Promise(r => setTimeout(r, 2500));
      setIsFlipped(false); // Flip back to College Logo

      // Step 3: Wait for the flip back to finish (0.8s), then enable hover
      await new Promise(r => setTimeout(r, 800));
      setIsInteractionEnabled(true); 
    };

    runSequence();
  }, []);

  const handleMouseEnter = () => {
    if (isInteractionEnabled) setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    if (isInteractionEnabled) setIsFlipped(false);
  };

  const sizeClasses = "w-[110px] sm:w-[140px] md:w-[170px] lg:w-[190px] h-auto";

  return (
    <div 
      className={`relative cursor-pointer [perspective:1000px] ${sizeClasses} z-10`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ aspectRatio: '1/1' }} 
    >
      <div
        className={`
          relative w-full h-full 
          transition-transform duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)]
          [transform-style:preserve-3d]
          ${isFlipped ? '[transform:rotateY(180deg)]' : '[transform:rotateY(0deg)]'}
        `}
      >
        {/* FRONT FACE (College/Banner Logo) */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] flex items-center justify-center">
          <img
            src={frontImage}
            alt={`${altText} Front`}
            className="w-full h-auto object-contain drop-shadow-lg"
            fetchPriority="high"
          />
        </div>

        {/* BACK FACE (Hackathon Logo) */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center justify-center">
          <img
            src={backImage}
            alt={`${altText} Back`}
            className="w-full h-auto object-contain drop-shadow-[0_0_15px_rgba(163,230,53,0.6)]" 
          />
        </div>
      </div>
    </div>
  );
};

export default FlippingLogo;