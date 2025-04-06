import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

const Navbar = () => {
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [insuranceDropdown, setInsuranceDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const mobileNavRef = useRef(null);

  useEffect(() => {
    if (mobileMenuOpen) {
      // Animate mobile nav in from right
      gsap.fromTo(mobileNavRef.current,
        {
          x: "100%",
          opacity: 0
        },
        {
          x: "0%", 
          opacity: 1,
          duration: 0.5,
          ease: "power3.out"
        }
      );
    } else {
      // Animate mobile nav out to right
      gsap.to(mobileNavRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "power3.in"
      });
    }
  }, [mobileMenuOpen]);

  return (
    <nav className="bg-white py-2 fixed top-0 w-full z-50 border-b border-black/10">
      <div className="lg:max-w-[1450px] px-5 sm:px-0 mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo on left side */}
          <Link href="/" className="flex items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="Insurance Samadhan"
              width={130}
              height={45}
              className="sm:w-auto sm:h-auto "
              priority
            />
          </Link>

          {/* Right side navigation */}
          <div className="hidden md:flex items-center gap-6 text-black font-montserrat text-[15px] font-medium">
            <Link
              href="/"
              className="relative rounded-full py-1 transition-colors group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#1AC0D8] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>

            {/* Services Dropdown */}
            <div className="relative inline-flex text-gray-800">
              <button
                type="button"
                className="relative flex items-center gap-2 rounded-full py-1"
                onMouseEnter={() => setServicesDropdown(true)}
                onMouseLeave={() => setServicesDropdown(false)}
              >
                Services
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#1AC0D8] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                <svg
                  className={`w-2.5 h-2.5 transform transition-transform duration-200 ${
                    servicesDropdown ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </button>
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 transition-all duration-200 min-w-[15rem] bg-white shadow-lg rounded-lg p-2 ${
                  servicesDropdown
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
                onMouseEnter={() => setServicesDropdown(true)}
                onMouseLeave={() => setServicesDropdown(false)}
              >
                <Link
                  href="/services/Misselling-of-insurance-policy"
                  className="relative block py-2 px-4 hover:bg-[#1AC0D8] hover:text-white rounded-lg text-gray-900 font-medium text-sm transition-colors"
                >
                  Mis-selling of Insurance Policy
                </Link>
                <Link
                  href="/services/Claim-rejection"
                  className="relative block py-2 px-4 hover:bg-[#1AC0D8] hover:text-white rounded-lg text-gray-900 font-medium text-sm transition-colors"
                >
                  Claim Rejection
                </Link>
                <Link
                  href="/services/Delay-in-claimprocess"
                  className="relative block py-2 px-4 hover:bg-[#1AC0D8] hover:text-white rounded-lg text-gray-900 font-medium text-sm transition-colors"
                >
                  Delay In Claim Process
                </Link>
                <Link
                  href="/services/Claim-shortsettled"
                  className="relative block py-2 px-4 hover:bg-[#1AC0D8] hover:text-white rounded-lg text-gray-900 font-medium text-sm transition-colors"
                >
                  Claim Short-settled
                </Link>
                <Link
                  href="/services/Health-Claim-Reimbursment"
                  className="relative block py-2 px-4 hover:bg-[#1AC0D8] hover:text-white rounded-lg text-gray-900 font-medium text-sm transition-colors"
                >
                  Health Claim Reimbursement
                </Link>
                <Link
                  href="/services/Know-your-policy"
                  className="relative block py-2 px-4 hover:bg-[#1AC0D8] hover:text-white rounded-lg text-gray-900 font-medium text-sm transition-colors"
                >
                  Know your policy
                </Link>
              </div>
            </div>

            <Link
              href="https://partner.claimantmitra.com/join/partner"
              className="relative rounded-full py-1 transition-colors group"
            >
              Partnership
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#1AC0D8] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>

            <Link
              href="/components/Blogs"
              className="relative rounded-full py-1 transition-colors group"
            >
              Blogs
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#1AC0D8] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>
            <Link
              href="/components/Contact-us"
              className="relative rounded-full py-1 transition-colors group"
            >
              Contact-us
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#1AC0D8] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>

            <Link
              href="https://partner.claimantmitra.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block px-4 py-2 font-medium group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-[#1AC0D8]"></span>
              <span className="relative text-black group-hover:text-white">
                Partner Login
              </span>
            </Link>
            <Link
              href="/components/Register-complaint"
              className="relative inline-block  border-2 px-4 py-3 font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-lg hover:shadow-xl overflow-hidden group"
            >
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-80 group-hover:h-80 opacity-10"></span>
              <span className="relative flex items-center">
                Register a complaint
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          ref={mobileNavRef}
          className="fixed md:hidden top-0 right-0 w-full h-screen bg-white z-50"
          style={{
            transform: "translateX(100%)",
            opacity: 0
          }}
        >
          <div className="flex justify-between items-center px-4 py-2 border-b">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <Image
                src="/images/logo.png"
                alt="Insurance Samadhan"
                width={140}
                height={35}
                priority
              />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="overflow-y-auto h-[calc(100vh-80px)] pb-20 text-sm">
            <div className="flex flex-col p-4 space-y-4">
              <Link
                href="/"
                className="px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              <div >
                <button
                  onClick={() => setServicesDropdown(!servicesDropdown)}
                  className="flex items-center justify-between w-full px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-lg"
                >
                  <span>Services</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${
                      servicesDropdown ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                
                <div className={`mt-2 space-y-2 ${servicesDropdown ? "block" : "hidden"}`}>
                  <Link
                    href="/services/Misselling-of-insurance-policy"
                    className="block px-6 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Mis-selling of Insurance Policy
                  </Link>
                  <Link
                    href="/services/Claim-rejection"
                    className="block px-6 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Claim Rejection
                  </Link>
                  <Link
                    href="/services/Delay-in-claimprocess"
                    className="block px-6 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Delay In Claim Process
                  </Link>
                  <Link
                    href="/services/Claim-shortsettled"
                    className="block px-6 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Claim Short-settled
                  </Link>
                  <Link
                    href="/services/Health-Claim-Reimbursment"
                    className="block px-6 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Health Claim Reimbursement
                  </Link>
                  <Link
                    href="/services/Know-your-policy"
                    className="block px-6 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Know your policy
                  </Link>
                </div>
              </div>

              <Link
                href="https://partner.claimantmitra.com/join/partner"
                className="px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Partnership
              </Link>

              <Link
                href="/components/Blogs"
                className="px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blogs
              </Link>

              <Link
                href="/components/Contact-us"
                className="px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact-us
              </Link>

              <div className="border-t border-gray-200 pt-4 space-y-4">
                <Link
                  href="https://partner.claimantmitra.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-4 py-3 text-center font-medium text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Partner Login
                </Link>

                <Link
                  href="/components/Register-complaint"
                  className="block w-full px-4 py-3 text-center font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Register a complaint
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
