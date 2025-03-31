import React, { useState } from "react";
import Marquee from "react-fast-marquee";

const Banner = () => {
  const [isPaused, setIsPaused] = useState(false);
  const promises = [
    {
      title: "Expert Claims Assistance",
      description: "Professional help with insurance claim settlements",
    },
    {
      title: "Quick Resolution", 
      description: "Fast and efficient complaint handling process",
    },
    {
      title: "24/7 Support",
      description: "Round the clock assistance for all insurance matters",
    },
    {
      title: "Policy Analysis",
      description: "Detailed evaluation of your insurance policies",
    },
    {
      title: "Maximum Recovery", 
      description: "Ensuring you get the best possible claim settlement",
    },
    {
      title: "Trusted Experience",
      description: "Years of expertise in insurance claim resolution",
    },
  ];

  return (
    <div>
      <Marquee
        gradient={false}
        speed={40}
        className="bg-[#1AC0D8] py-3 sm:py-4 md:py-5 mb-2"
        pauseOnHover={true}
        paused={isPaused}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex space-x-8 sm:space-x-12 md:space-x-16 mx-4 sm:mx-6 md:mx-8">
          {promises.map((promise, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-white text-sm sm:text-base md:text-lg font-bold whitespace-nowrap">
                {promise.title}
              </span>
              <span className="text-white/80 text-xs sm:text-sm mt-0.5 sm:mt-1 whitespace-nowrap">
                {promise.description}
              </span>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Banner;
