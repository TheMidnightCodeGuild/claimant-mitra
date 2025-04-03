import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Contactbanner = () => {
  return (
    <section className="bg-[#fafbfc] py-12 sm:py-16 md:py-20 lg:py-2  ">
      <div className="max-w-[90%] lg:max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12 lg:gap-20">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative h-[250px] xs:h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/images/contact.png"
                alt="Contact Us"
                fill
                className="object-contain scale-x-[-1]"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-3xl xs:text-3xl sm:text-4xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Need Help With Your <span className="text-[#1AC0D8]">Insurance Claim</span>?
              </h2>
              
            </div>
            
            <p className="text-gray-600 text-lg sm:text-base leading-relaxed px-4 sm:px-6 lg:px-0">
              Our expert team is ready to assist you with any insurance-related challenges. Get professional support for your claims and policy issues today.
            </p>

            <Link href="/components/Contact-us" className="block">
              <button className="w-full sm:w-auto bg-[#1AC0D8] hover:bg-[#19A7CE] text-white text-base sm:text-lg font-semibold py-3 sm:py-2 px-6 sm:px-5 rounded-full ">
                Contact Us Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactbanner;
