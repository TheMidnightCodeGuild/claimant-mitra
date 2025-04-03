import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

const faqData = [
  {
    question: "What are some common examples of insurance mis-selling?",
    answer: "Common examples include selling policies without full disclosure, misrepresenting benefits, or recommending unsuitable products for the customer's needs."
  },
  {
    question: "Why do insurance companies reject claims?", 
    answer: "Claims may be rejected due to policy exclusions, non-disclosure of information, lapsed premiums, or filing after the claim deadline."
  },
  {
    question: "Can an insurance claim be delayed due to pre-existing conditions?",
    answer: "Yes, insurance claims can be delayed if pre-existing conditions were not properly disclosed during policy purchase. The insurer may need additional time to investigate and verify medical history."
  },
  {
    question: "Can a short-settled claim be re-submitted for payment?",
    answer: "Yes, if you believe your claim was short-settled, you can request a review and re-submit with additional documentation supporting your claim amount."
  },
  {
    question: "What is a success fee?",
    answer: "A success fee is a percentage of the recovered amount that we charge only after successfully resolving your case. This fee is discussed and agreed upon upfront."
  },
  {
    question: "How long will it take to resolve my insurance-related problem?",
    answer: "Resolution time depends on case complexity and insurer response, typically 30-90 days. We work to expedite the process while ensuring thorough handling."
  },
  {
    question: "Do I have to meet anyone during the resolution of my case?",
    answer: "Most cases can be handled remotely through phone, email and our online portal. In-person meetings are optional and scheduled only if needed."
  },
  {
    question: "What is the pre and post hospitalization claim?",
    answer: "Pre and post hospitalization claims cover medical expenses incurred before and after hospitalization. The coverage period varies by policy, typically 30-60 days pre and 60-90 days post hospitalization."
  },
  {
    question: "Does smoking affect insurance plans?",
    answer: "Yes, smoking status affects insurance premiums and coverage. Smokers generally pay higher premiums due to increased health risks. Non-disclosure of smoking habits can lead to claim rejection."
  },
  {
    question: "Is there a waiting period before filing a claim under a health insurance policy?",
    answer: "Yes, most health insurance policies have waiting periods: 30 days for general claims, 2-4 years for pre-existing conditions, and specific waiting periods for certain treatments/procedures."
  }
];

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        gsap.to(contentRef.current, {
          height: 'auto',
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out'
        });
        gsap.to(arrowRef.current, {
          rotation: 180,
          duration: 0.4,
          ease: 'power2.out'
        });
      } else {
        gsap.to(contentRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.5,
          ease: 'power2.out'
        });
        gsap.to(arrowRef.current, {
          rotation: 0,
          duration: 0.4,
          ease: 'power2.out'
        });
      }
    }
  }, [isOpen]);

  return (
    <div 
      className="border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer overflow-hidden"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="w-full px-6 py-5 flex justify-between items-center text-left bg-white hover:bg-gray-50 transition-colors duration-300">
        <span className="text-gray-900 font-semibold text-sm sm:text-base md:text-lg pr-4">{question}</span>
        <span ref={arrowRef} className="text-[#1AC0D8]">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
          </svg>
        </span>
      </div>
      <div 
        ref={contentRef}
        className="h-0 opacity-0"
      >
        <div className="px-6 py-5 bg-gray-50 text-gray-600 text-sm sm:text-base border-t border-gray-100">
          {answer}
        </div>
      </div>
    </div>
  );
};

const Faqs = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 md:py-10">
      <div className="lg:max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="h-1.5 w-24 bg-[#1AC0D8] rounded-full mx-auto"></div>
        </div>
        <div className="lg:max-w-[1300px] mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <FaqItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
