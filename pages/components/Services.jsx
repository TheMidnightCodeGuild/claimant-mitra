import React, { useState } from "react";
import Image from "next/image";

const Services = () => {
  const [flippedCards, setFlippedCards] = useState(new Array(6).fill(false));

  const handleCardClick = (index) => {
    const newFlippedCards = [...flippedCards];
    newFlippedCards[index] = !newFlippedCards[index];
    setFlippedCards(newFlippedCards);
  };

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
    <section className="py-8 sm:py-16 md:py-20 lg:py-20 bg-gradient-to-b from-gray-50 to-white border-b mb-20">
      <div className="lg:max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-8 sm:mb-12 md:mb-12">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Our Services
          </h1>
          <div className="h-1.5 w-20 sm:w-24 bg-[#1AC0D8] rounded-full mb-4 sm:mb-6"></div>
          <p className="text-sm xs:text-base sm:text-lg md:text-lg text-gray-600">
            We provide expert assistance for all your insurance-related challenges and disputes.Whether you're dealing with claim rejections, policy disputes, or service-related problems, we are here to help you every step of the way.. 
          </p>
        </div>
        
        <div className="lg:max-w-[1300px] grid grid-cols-3 xs:grid-cols-3 sm:flex mb-10 gap-2 xs:gap-4 sm:justify-center sm:space-x-32">
          {insuranceTypes.map((type, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={type.icon}
                alt={type.title}
                width={40}
                height={40}
                className="mb-1 w-12 h-12 xs:w-16 xs:h-16 sm:w-20 sm:h-20 object-contain"
              />
              <p className="text-[10px] xs:text-xs sm:text-base text-center font-semibold text-gray-700">{type.title}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:max-w-[1300px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              className="group h-[180px] xs:h-[220px] sm:h-[280px] [perspective:1000px] flex justify-center cursor-pointer">
              <div className={`relative h-full w-full rounded-xl transition-all duration-500 [transform-style:preserve-3d] ${flippedCards[index] ? '[transform:rotateY(180deg)]' : ''} sm:group-hover:[transform:rotateY(180deg)]`}>
                {/* Front */}
                <div className="absolute inset-0 bg-blue-100 rounded-xl border border-gray-800 p-2 xs:p-3 sm:p-6 lg:p-8 flex flex-col items-center justify-center">
                  <div className="flex flex-col items-center">
                    <div className="relative w-20 h-20 xs:w-16 xs:h-16 sm:w-48 sm:h-36 mb-2 xs:mb-3 sm:mb-1 flex items-center justify-center">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 4rem, 16rem"
                      />
                    </div>
                    <h3 className="text-base xs:text-base sm:text-xl font-bold text-gray-900 text-center mt-2 xs:mt-3">
                      {service.title}
                    </h3>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 h-full w-full rounded-xl bg-blue-50 p-2 xs:p-3 text-center [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <p className="text-[14px] xs:text-sm sm:text-base text-gray-900 font-medium">
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
