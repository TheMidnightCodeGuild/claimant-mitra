import React, { useState } from "react";
import Marquee from "react-fast-marquee";

const Banner2 = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="overflow-hidden">
      <Marquee
        gradient={false}
        speed={40}
        className="bg-[#FF4B4B] py-3 sm:py-4 md:py-5"
        pauseOnHover={true}
        paused={isPaused}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex mx-4 sm:mx-6 md:mx-8">
          <span className="text-white text-sm sm:text-base md:text-lg font-medium whitespace-nowrap">
            Claimant Mitra is in no way associated with IRDAI or the Insurance Ombudsman. We are a private organization that understands customer complaints and provides them with proper guidance.
          </span>
        </div>
      </Marquee>
    </div>
  );
};

export default Banner2;
