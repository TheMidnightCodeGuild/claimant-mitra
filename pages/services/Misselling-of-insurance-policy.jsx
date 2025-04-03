import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Choose from '../components/Choose';
import Faqs from '../components/Faqs';
import Link from 'next/link';
const MissellingOfInsurancePolicy = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Banner */}
      <div className="relative h-[60vh] lg:h-[80vh] w-full ">
        <Image
          src="/images/bg.png" 
          alt="Insurance Misselling"
          fill
          className="object-cover blur-[4px] "
          priority
        />
        <div className="absolute bg-black/50 inset-0 flex items-center justify-center">
          <div className="text-center text-white  px-4 mt-24">
            <h1 className="text-4xl lg:text-5xl underline  font-semibold uppercase mb-5 tracking-tight ">
              Insurance Misselling Support
            </h1>
            <p className="text-lg lg:text-xl max-w-xl mx-auto font-light leading-relaxed">
              Were you misled about your insurance policy? We help victims of insurance misselling get justice and compensation.
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
              Common Signs of Insurance Misselling
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Insurance misselling occurs when policies are sold through deceptive practices. Here are key warning signs to watch out for:
            </p>
            <ul className="list-none space-y-4 mb-8">
              <li className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300">
                <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Incomplete or misleading information about policy terms
              </li>
              <li className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300">
                <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Hidden fees and charges not disclosed upfront
              </li>
              <li className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300">
                <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Pressure tactics to buy unsuitable policies
              </li>
              <li className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300">
                <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                False promises about returns and benefits
              </li>
              <li className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300">
                <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Lack of proper need assessment and documentation
              </li>
            </ul>
          </div>
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border-b">
            <Image
              src="/images/Insurance-Misselling-Support.png"
              alt="Insurance Misselling Warning Signs"
              fill
              className="object-contain "
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

export default MissellingOfInsurancePolicy;
