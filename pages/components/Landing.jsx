import React from "react";
import Link from "next/link";
import Image from "next/image";

const Landing = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/bg.png"
          alt="Hero background"
          fill
          className="object-cover mt-10 blur-xs"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-20 max-w-4xl mt-36 sm:mt-48 md:mt-44">
        <h1 className="text-3xl xs:text-3xl sm:text-4xl md:text-[52px] font-bold text-[#fffff0] mb-2 sm:mb-2 uppercase flex flex-col items-center gap-2 sm:gap-4" id="font1">
          <div className="sm:mb-0  mb-1">
            <span className="text-[#1AC0D8] underline">Reclaiming</span>{" "}
            <span className="sm:inline block mt-5 sm:mt-0">Your Rejected</span>
          </div>
          <div className="mb-2 sm:mb-5">
            <span className="text-[#18BED6] underline">Insurance Claim</span>
          </div>
        </h1>
        <p className="text-sm sm:text-base max-w-[550px] text-gray-100 font-semibold mb-6 sm:mb-8 italic mx-auto leading-relaxed px-2">
          ✨ Our expert team helps you fight claim rejections and get the compensation you deserve! ✨
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/components/Register-complaint"
            className="inline-block bg-[#1AC0D8] text-white font-semibold px-4 xs:px-6 sm:px-5 py-2 xs:py-2.5 sm:py-2.5 text-sm xs:text-sm sm:text-base hover:bg-[#15a9bf] transition-all duration-300 rounded-full border-white border-2 hover:shadow-lg w-56 sm:w-auto mx-auto sm:mx-0"
          >
            Register Your Complaint
          </Link>
          <Link
            href="/components/Contact-us"
            className="inline-block bg-[#1AC0D8] text-white font-semibold px-4 xs:px-6 sm:px-5 py-2 xs:py-2.5 sm:py-2.5 text-sm xs:text-sm sm:text-base hover:bg-[#15a9bf] transition-all duration-300 rounded-full border-white border-2 hover:shadow-lg w-36 sm:w-auto mx-auto sm:mx-0"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
