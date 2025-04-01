import React from 'react';
import Image from 'next/image';

const Why = () => {
  return (
    <div className="bg-blue-100 py-8 sm:py-16 rounded-2xl sm:rounded-full border border-gray-400 ">
      <div className="lg:max-w-[1200px] mx-auto px-4 ">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Why Choose <span className="text-blue-600">Us?</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            We pride ourselves on delivering exceptional service and results for our clients. Here's what sets us apart from the rest.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Card 1 */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#17BED4]">
            <div className="w-10 h-10 sm:w-16 sm:h-12 flex items-center justify-center mb-3 sm:mb-4">
            <Image src="/images/Expertise&Experience.png" alt="Expertise & Experience"  width={50} height={50} />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Expertise & Experience</h3>
            <p className="text-sm sm:text-base text-gray-600">
              Our team brings years of specialized experience in insurance claim recovery and policy management.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#17BED4]">
          <div className="w-10 h-10 sm:w-16 sm:h-12 flex items-center justify-center mb-3 sm:mb-4">
            <Image src="/images/Quickresolution.png" alt="Expertise & Experience"  width={50} height={50} />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Quick Resolution</h3>
            <p className="text-sm sm:text-base text-gray-600">
              We work efficiently to resolve your claims, ensuring you get your funds back as quickly as possible.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#17BED4]">
          <div className="w-10 h-10 sm:w-16 sm:h-12 flex items-center justify-center mb-3 sm:mb-4">
            <Image src="/images/Dedicatedsupport.png" alt="Expertise & Experience"  width={50} height={50} />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Dedicated Support</h3>
            <p className="text-sm sm:text-base text-gray-600">
              Our customer support team is always available to answer your questions and guide you through the process.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#17BED4]">
          <div className="w-10 h-10 sm:w-16 sm:h-12 flex items-center justify-center mb-3 sm:mb-4">
            <Image src="/images/secure.png" alt="Expertise & Experience"  width={50} height={50} />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">100% Secure Process</h3>
            <p className="text-sm sm:text-base text-gray-600">
              Your information is handled with the utmost security and confidentiality throughout the process.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#17BED4]">
          <div className="w-10 h-10 sm:w-16 sm:h-12 flex items-center justify-center mb-3 sm:mb-4">
            <Image src="/images/hidden.png" alt="Expertise & Experience"  width={50} height={50} />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">No Hidden Fees</h3>
            <p className="text-sm sm:text-base text-gray-600">
              We maintain complete transparency in our pricing with no surprise charges or hidden fees.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#17BED4]">
          <div className="w-10 h-10 sm:w-16 sm:h-12 flex items-center justify-center mb-3 sm:mb-4">
            <Image src="/images/success.png" alt="Expertise & Experience"  width={50} height={50} />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">High Success Rate</h3>
            <p className="text-sm sm:text-base text-gray-600">
              We have successfully helped thousands of clients recover their funds with our proven approach.
            </p>
          </div>
        </div>

   
      </div>
    </div>
  );
};

export default Why;
