import React, { useEffect, useState } from "react";
import CountUp from 'react-countup';
import gsap from 'gsap';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if loader has been shown before
    if (sessionStorage.getItem('loaderShown')) {
      setIsLoading(false);
      return;
    }

    // Add slight delay before fading out
    const timer = setTimeout(() => {
      setProgress(100);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleCountUpComplete = () => {
    setProgress(100);
    
    // Animate loader sliding up
    gsap.to(".loading", {
      duration: 1,
      y: "-100%",
      ease: "power3.inOut",
      onComplete: () => {
        setIsLoading(false);
        sessionStorage.setItem('loaderShown', 'true');
      }
    });
  };

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center loading">
      <div className="relative w-[100px] h-[100px]">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            className="opacity-20"
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#1AC0D8"
            strokeWidth="6"
          />
          <circle
            className="transition-[stroke-dasharray] duration-100 ease-linear"
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#1AC0D8"
            strokeWidth="6"
            strokeDasharray={`${2 * Math.PI * 40 * progress/100} ${2 * Math.PI * 40}`}
            transform="rotate(-90 50 50)"
          />
        </svg>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-[#1AC0D8]">
          <CountUp
            end={100}
            duration={2.5}
            suffix="%"
            onEnd={handleCountUpComplete}
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
