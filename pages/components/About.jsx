import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section className="text-gray-600 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="lg:max-w-[1400px] mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="relative mb-4 sm:mb-6">
              <h1 className="text-3xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                About Claimant Mitra
              </h1>
              <div className="h-1 sm:h-1.5 w-16 sm:w-24 bg-[#1AC0D8] rounded-full mt-2 sm:mt-4 mx-auto lg:mx-0 mb-2"></div>
            </div>
            
            <p className="mb-4 sm:mb-6 text-sm xs:text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed px-2 sm:px-0">
              <span className="lg:hidden">We help you get your insurance claims settled quickly and efficiently. Our expert team handles all types of insurance cases.</span>
              <span className="hidden lg:inline">We are a dedicated team of insurance claims specialists committed to helping individuals and businesses navigate the complex world of insurance claims. Our expertise spans across various insurance types, from health and life insurance to property and vehicle coverage.</span>
            </p>
            
            <p className="mb-0 sm:mb-8 text-sm xs:text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed px-2 sm:px-0">
              <span className="lg:hidden">Trust us to be your partner in getting the maximum benefits you deserve from your insurance claims.</span>
              <span className="hidden lg:inline">With our proven track record of successful claim settlements and policy recoveries, we ensure that our clients receive the maximum benefits they deserve. Our professional approach, combined with deep industry knowledge, makes us your trusted partner in insurance claim resolution.</span>
            </p>
          </div>

          {/* Image */}
          <div className="w-full lg:w-[520px] mx-auto mt-0 sm:mt-8 lg:mt-0">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden h-[300px] xs:h-[350px] sm:h-[400px] md:h-[450px] lg:h-[450px]">
              <Image
                src="/images/about.png"
                alt="Insurance Claims Assistance"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
