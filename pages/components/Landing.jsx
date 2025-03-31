import React from "react";
import Link from "next/link";
import Image from "next/image";

const Landing = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/bg2.png"
          alt="Hero background"
          fill
          className="object-cover mt-10"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-left px-4 sm:px-6 lg:px-20 max-w-3xl mt-68 sm:mt-48 md:mt-80">
        <h1 className="text-3xl xs:text-3xl sm:text-4xl md:text-[42px] font-bold text-[#fffff0] mb-4 sm:mb-2 leading-tight uppercase flex flex-col gap-4" id="font1">
          <div>
            <span className="text-[#1AC0D8] bg-white rounded-2xl p-1">Reclaiming</span> Your Rejected
          </div>
          <div>
            <span className="text-[#18BED6] bg-white rounded-2xl p-1">Insurance Claim</span>
          </div>
        </h1>
     

        <p className="text-sm sm:text-base max-w-[450px] text-gray-800 font-semibold mb-6 sm:mb-8 italic">
          Don't let your insurance claim rejection discourage you. Our experts will fight for your rightful claim and get the compensation you deserve.
        </p>
        <div className="space-x-4 ">
          <Link
            href="/components/Register-complaint"
            className="inline-block bg-[#1AC0D8] text-white font-semibold px-6 sm:px-5 py-2.5 sm:py-2.5 text-sm sm:text-base hover:bg-[#15a9bf] transition-colors duration-300 rounded-full border-white border-2 "
          >
            Register Your Complaint
          </Link>
          <Link
            href="/components/Contact-us"
            className="inline-block bg-[#1AC0D8] text-white font-semibold px-6 sm:px-5 py-2.5 sm:py-2.5 text-sm sm:text-base hover:bg-[#15a9bf] transition-colors duration-300 rounded-full border-white border-2"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
