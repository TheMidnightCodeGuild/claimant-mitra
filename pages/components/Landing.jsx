import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Landing = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/landingbg.png"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-left px-4 sm:px-6 lg:px-20 max-w-4xl mt-32 sm:mt-48 md:mt-72">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-2 leading-tight">
          Reclaiming <span className="text-white">Funds</span> from a{' '}
          <span className="text-white">Lapsed Policy</span>
        </h1>
        <p className="text-base sm:text-lg max-w-lg text-gray-800 font-semibold mb-6 sm:mb-8 italic">
          Recover your lost funds from a lapsed policy, ensuring your money doesn't go to waste.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#1AC0D8] text-white font-semibold px-6 sm:px-5 py-2.5 sm:py-2.5 text-sm sm:text-base hover:bg-[#15a9bf] transition-colors duration-300 rounded-full"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Landing;
