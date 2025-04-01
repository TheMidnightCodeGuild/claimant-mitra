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

  const insuranceTypes = [
    { title: "Life Insurance", icon: "/images/life-insurance.png" },
    { title: "General Insurance", icon: "/images/general-insurance.png" },
    { title: "Health Insurance", icon: "/images/health-insurance.png" },
    { title: "Term Insurance", icon: "/images/term-insurance.png" },
    { title: "Travel Insurance", icon: "/images/travel-insurance.png" },
    { title: "Motor Insurance", icon: "/images/motor-insurance.png" },
  ];

  return (
    <section className="py-8 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white  ">
      <div className="lg:max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Our Services
          </h1>
          <div className="h-1.5 w-20 sm:w-24 bg-[#1AC0D8] rounded-full mb-4 sm:mb-6"></div>
          <p className="text-sm xs:text-base sm:text-lg md:text-lg text-gray-600">
            We provide expert assistance for all your insurance-related challenges and disputes.Whether you're dealing with claim rejections, policy disputes, or service-related problems, we are here to help you every step of the way.. 
          </p>
        </div>
        
        <div className="lg:max-w-[1300px] grid grid-cols-2 xs:grid-cols-3 sm:flex mb-10 gap-4 xs:gap-6 sm:justify-center sm:space-x-32 ">
          {insuranceTypes.map((type, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={type.icon}
                alt={type.title}
                width={40}
                height={40}
                className="mb-2 w-8 h-8 xs:w-10 xs:h-10 sm:w-full sm:h-full object-cover"
              />
              <p className="text-xs xs:text-sm sm:text-base text-center font-semibold text-gray-700">{type.title}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:max-w-[1300px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 ">
          {services.map((service, index) => (
            <div
              key={index}
              className="group h-[220px] xs:h-[250px] sm:h-[280px] [perspective:1000px] flex justify-center">
              <div className="relative h-full w-full rounded-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0 bg-blue-100 rounded-xl border border-gray-800 p-3 xs:p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center">
                  <div className="flex flex-col items-center">
                    <div className="relative w-16 h-16 xs:w-20 xs:h-20 sm:w-48 sm:h-36 mb-3 xs:mb-4 sm:mb-1 flex items-center justify-center">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 5rem, 16rem"
                      />
                    </div>
                    <h3 className="text-base xs:text-lg sm:text-xl font-bold text-gray-900 text-center mt-3 xs:mt-5">
                      {service.title}
                    </h3>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 h-full w-full rounded-xl bg-blue-50 p-3 xs:p-4 text-center [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <p className="text-xs xs:text-sm sm:text-base text-gray-900 font-medium">
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
