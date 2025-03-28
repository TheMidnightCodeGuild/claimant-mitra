import React from "react";
import Image from "next/image";

const Services = () => {
  const services = [
    {
      title: "Insurance Misselling Support",
      description:
        "We provide comprehensive assistance for cases involving insurance misselling, helping clients understand their rights and navigate the claims process to achieve fair resolution.",
      icon: "/images/Insurance-Misselling-Support.png",
    },
    {
      title: "Claim Rejection Assistance",
      description:
        "Our experts help you challenge unfair claim rejections by thoroughly reviewing your case, gathering evidence, and representing your interests to get your rightful claim approved.",
      icon: "/images/claim-rejection-assistance.png",
    },
    {
      title: "Policy Rejection Resolution",
      description:
        "We assist clients whose insurance policies were unfairly rejected, working to overturn unjust decisions and ensure you receive the coverage you deserve.",
      icon: "/images/policy-rejection-resolution.png",
    },
    {
      title: "Insurance Service Issues",
      description:
        "Our team addresses various service-related problems with insurance providers, from communication gaps to processing delays, ensuring you receive quality service.",
      icon: "/images/insurance-service-issues.png",
    },
    {
      title: "Lapsed Policy Support",
      description:
        "We help clients dealing with lapsed policies understand their options and work towards reinstating coverage or finding alternative solutions to protect their interests.",
      icon: "/images/lapsed-policy-support.png",
    },
    {
      title: "Claim Process Acceleration",
      description:
        "Our specialists work to expedite delayed claim processes, ensuring efficient handling of your case and minimizing unnecessary waiting periods for claim settlement.",
      icon: "/images/claim-process-acceleration.png",
    },
   
  ];

  return (
    <section className="py-8 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="lg:max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Our Services
          </h1>
          <div className=" h-1.5 w-20 sm:w-24 bg-blue-600 rounded-full  mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg md:text-lg text-gray-600  ">
            We provide expert assistance for all your insurance-related challenges and disputes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group h-[250px] sm:h-[280px] [perspective:1000px] flex justify-center">
              <div className="relative h-full w-full rounded-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0 bg-blue-100 rounded-xl border border-gray-800 p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center">
                  <div className="flex flex-col items-center">
                    <div className="relative w-20 h-20 sm:w-48 sm:h-36 mb-4 sm:mb-1 flex items-center justify-center">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 5rem, 16rem"
                      />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 text-center mt-5">
                      {service.title}
                    </h3>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 h-full w-full rounded-xl bg-blue-50 p-4 text-center [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <p className="text-sm sm:text-base text-gray-900 font-medium">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
