import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Choose from '../components/Choose';
import Faqs from '../components/Faqs';
import Link from 'next/link';
const ClaimShortSettled = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Banner */}
      <div className="relative h-[60vh] lg:h-[80vh] w-full ">
        <Image
          src="/images/bg.png" 
          alt="Short Settled Insurance Claim"
          fill
          className="object-cover blur-[4px] "
          priority
        />
        <div className="absolute bg-black/50 inset-0 flex items-center justify-center">
          <div className="text-center text-white  px-4 mt-24">
            <h1 className="text-4xl lg:text-5xl underline  font-semibold uppercase mb-5 tracking-tight ">
              Short Settled Claim Resolution
            </h1>
            <p className="text-lg lg:text-xl max-w-xl mx-auto font-light leading-relaxed">
              Received less than expected on your insurance claim? We help you get the fair settlement amount you deserve.
            </p>
            <Link
            href="/components/Register-complaint"
            className="inline-block bg-[#1AC0D8] text-white font-semibold px-4 xs:px-6 sm:px-5 py-2 xs:py-2.5 sm:py-2.5 text-sm xs:text-sm sm:text-base hover:bg-[#15a9bf] transition-all duration-300 rounded-full border-white border-2 hover:shadow-lg w-56 sm:w-auto mx-auto sm:mx-0 mt-5"
          >
            Register Your Complaint
          </Link>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-20 px-4 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8 leading-tight">
              Common Reasons for Short Settlement
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Insurance claims can be short settled for various reasons. Here are some common factors that lead to reduced claim settlements:
            </p>
            <ul className="list-none space-y-4 mb-8">
              <li className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300">
                <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Incorrect assessment of damages
              </li>
              <li className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300">
                <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Depreciation deductions
              </li>
              <li className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300">
                <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Proportionate deductions
              </li>
              <li className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300">
                <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Policy sub-limits and caps
              </li>
              <li className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300">
                <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Misinterpretation of policy terms
              </li>
            </ul>
          </div>
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border-b">
            <Image
              src="/images/short-settled-claim.png"
              alt="Short Settled Claim Resolution"
              fill
              className="object-contain mx-10"
            />
          </div>
        </div>
      </div>

      <Choose />
      <Faqs />
      <Footer />
    </>
  );
};

export default ClaimShortSettled;
