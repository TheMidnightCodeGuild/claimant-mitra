import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section className="text-gray-600 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="lg:max-w-[1400px] mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="relative mb-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-gray-800 font-lora">
                About Claimant Mitra
              </h1>
              <div className="h-1.5 w-24 bg-[#1AC0D8] rounded-full mt-4 mx-auto lg:mx-0"></div>
            </div>
            
            <p className="mb-6 sm:mb-8 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
              We are a dedicated team of insurance claims specialists committed to helping individuals and businesses navigate the complex world of insurance claims. Our expertise spans across various insurance types, from health and life insurance to property and vehicle coverage.
            </p>
            
            <p className="mb-8 sm:mb-10 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
              With our proven track record of successful claim settlements and policy recoveries, we ensure that our clients receive the maximum benefits they deserve. Our professional approach, combined with deep industry knowledge, makes us your trusted partner in insurance claim resolution.
            </p>
            
            <div className="flex justify-center lg:justify-start w-full">
              <a 
                className="inline-flex items-center text-white bg-[#1AC0D8] hover:bg-[#15a9bf] transition-colors py-2.5 sm:py-3 px-6 sm:px-8 text-sm sm:text-base md:text-lg font-medium rounded-full shadow-lg hover:shadow-xl"
                href="/Contactus"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-[520px] mx-auto mt-8 lg:mt-0">
            <div className="relative rounded-2xl">
              <Image
                src="/images/about.png"
                alt="Insurance Claims Assistance"
                width={600}
                height={400}
                className="object-cover object-center w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px]"
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
