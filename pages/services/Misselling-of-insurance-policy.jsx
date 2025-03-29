import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Choose from '../components/Choose';
import Faqs from '../components/Faqs';

const MissellingOfInsurancePolicy = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Banner */}
      <div className="relative h-[60vh] lg:h-[80vh] w-full">
        <Image
          src="/images/contactbanner.png" 
          alt="Insurance Misselling"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight">
              Insurance Policy Misselling Claims
            </h1>
            <p className="text-lg lg:text-2xl max-w-3xl mx-auto font-light leading-relaxed">
              Were you misled about your insurance policy? We help victims of insurance misselling get justice and compensation.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-20 px-4 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8 leading-tight">
              Understanding Insurance Misselling
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Insurance misselling occurs when you are sold an insurance policy based on incorrect, incomplete or misleading information. This can include:
            </p>
            <ul className="list-none space-y-4 mb-8">
              <li className="flex items-center text-gray-600">
                <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Not disclosing important policy terms and conditions
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Misrepresenting policy benefits and returns
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Selling unsuitable policies without considering your needs
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Making false promises about policy performance
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Hiding or understating policy risks and limitations
              </li>
            </ul>
            <a 
              href="/contact-us"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors duration-300 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Expert Help
              <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          <div className="relative h-[400px] lg:h-[600px] w-full ">
            <Image
              src="/images/Insurance-Misselling-Support.png"
              alt="Insurance Consultation"
              fill
              className="object-cover"
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
