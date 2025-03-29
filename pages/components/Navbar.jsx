import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [insuranceDropdown, setInsuranceDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white py-2 fixed top-0 w-full z-50 border-b border-black/10">
      <div className="lg:max-w-[1450px] px-5 sm:px-0 mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo on left side */}
          <Link href="/" className="flex items-center justify-center">
            <Image
              className="w-36 md:w-48 h-auto"
              src="/images/logo.png"
              alt="logo"
              width={60}
              height={60}
              quality={100}
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

            <Link
              href="#About"
              className="relative rounded-full py-1 transition-colors group"
            >
              About Us
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
                  href="/services/claim-rejection"
                  className="relative block py-2 px-4 hover:bg-[#1AC0D8] hover:text-white rounded-lg text-gray-900 font-medium text-sm transition-colors"
                >
                  Claim Rejection
                </Link>
                <Link
                  href="/services/delay-claim"
                  className="relative block py-2 px-4 hover:bg-[#1AC0D8] hover:text-white rounded-lg text-gray-900 font-medium text-sm transition-colors"
                >
                  Delay In Claim Process
                </Link>
                <Link
                  href="/services/claim-short"
                  className="relative block py-2 px-4 hover:bg-[#1AC0D8] hover:text-white rounded-lg text-gray-900 font-medium text-sm transition-colors"
                >
                  Claim Short-settled
                </Link>
                <Link
                  href="/services/health-claim"
                  className="relative block py-2 px-4 hover:bg-[#1AC0D8] hover:text-white rounded-lg text-gray-900 font-medium text-sm transition-colors"
                >
                  Health Claim Reimbursement
                </Link>
                <Link
                  href="/services/know-policy"
                  className="relative block py-2 px-4 hover:bg-[#1AC0D8] hover:text-white rounded-lg text-gray-900 font-medium text-sm transition-colors"
                >
                  Know your policy
                </Link>
              </div>
            </div>

            {/* Insurance Complaints Dropdown */}
            <div className="relative inline-flex text-gray-800">
              <button
                type="button"
                className="relative flex items-center gap-2 rounded-full py-1"
                onMouseEnter={() => setInsuranceDropdown(true)}
                onMouseLeave={() => setInsuranceDropdown(false)}
              >
                Insurance Complaints
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#1AC0D8] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                <svg
                  className={`w-2.5 h-2.5 transform transition-transform duration-200 ${
                    insuranceDropdown ? "rotate-180" : ""
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
                  insuranceDropdown
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
                onMouseEnter={() => setInsuranceDropdown(true)}
                onMouseLeave={() => setInsuranceDropdown(false)}
              >
                <Link
                  href="/insurance/life-insurance"
                  className="relative block py-2 px-4 hover:bg-[#1AC0D8] hover:text-white rounded-lg text-gray-900 font-medium text-sm transition-colors"
                >
                  Life Insurance
                </Link>
                <Link
                  href="/insurance/health-insurance"
                  className="relative block py-2 px-4 hover:bg-[#1AC0D8] hover:text-white rounded-lg text-gray-900 font-medium text-sm transition-colors"
                >
                  Health Insurance
                </Link>
                <Link
                  href="/insurance/motor-insurance"
                  className="relative block py-2 px-4 hover:bg-[#1AC0D8] hover:text-white rounded-lg text-gray-900 font-medium text-sm transition-colors"
                >
                  Motor Insurance
                </Link>
                <Link
                  href="/insurance/travel-insurance"
                  className="relative block py-2 px-4 hover:bg-[#1AC0D8] hover:text-white rounded-lg text-gray-900 font-medium text-sm transition-colors"
                >
                  Travel Insurance
                </Link>
                <Link
                  href="/insurance/property-insurance"
                  className="relative block py-2 px-4 hover:bg-[#1AC0D8] hover:text-white rounded-lg text-gray-900 font-medium text-sm transition-colors"
                >
                  Property Insurance
                </Link>
                <Link
                  href="/insurance/marine-insurance"
                  className="relative block py-2 px-4 hover:bg-[#1AC0D8] hover:text-white rounded-lg text-gray-900 font-medium text-sm transition-colors"
                >
                  Marine Insurance
                </Link>
              </div>
            </div>

            <Link
              href="/partnership"
              className="relative rounded-full py-1 transition-colors group"
            >
              Partnership
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#1AC0D8] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>

            <Link
              href="/blogs"
              className="relative rounded-full py-1 transition-colors group"
            >
              Blogs
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#1AC0D8] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>

            <Link
              href="/components/Register-complaint"
              className="relative inline-block border-black border-2 px-4 py-3 font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-lg hover:shadow-xl overflow-hidden group"
            >
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-80 group-hover:h-80 opacity-10"></span>
              <span className="relative flex items-center">
                Register a complaint
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            <Link
              href="/login"
              className="relative inline-block px-4 py-2 font-medium group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-[#1AC0D8]"></span>
              <span className="relative text-black group-hover:text-white">
                Login
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
          className={`fixed md:hidden top-0 right-0 w-full h-screen bg-white transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } overflow-y-auto`}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <Link href="/" className="flex items-center">
              <Image
                className="w-16 h-auto"
                src="/images/logo.png"
                alt="logo"
                width={60}
                height={60}
                priority
              />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100"
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

          <div className="p-4">
            <div className="space-y-3">
              <Link
                href="/"
                className="block px-4 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-4 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>

              {/* Mobile Services Dropdown */}
              <div className="space-y-1">
                <button
                  onClick={() => setServicesDropdown(!servicesDropdown)}
                  className="flex items-center justify-between w-full px-4 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 rounded-lg"
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
                <div
                  className={`${
                    servicesDropdown ? "block" : "hidden"
                  } pl-4 space-y-2`}
                >
                  <Link
                    href="/services/mis-selling"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Mis-selling of Insurance Policy
                  </Link>
                  <Link
                    href="/services/claim-rejection"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Claim Rejection
                  </Link>
                  <Link
                    href="/services/delay-claim"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Delay In Claim Process
                  </Link>
                  <Link
                    href="/services/claim-short"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Claim Short-settled
                  </Link>
                  <Link
                    href="/services/health-claim"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Health Claim Reimbursement
                  </Link>
                  <Link
                    href="/services/know-policy"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Know your policy
                  </Link>
                </div>
              </div>

              {/* Mobile Insurance Complaints Dropdown */}
              <div className="space-y-1">
                <button
                  onClick={() => setInsuranceDropdown(!insuranceDropdown)}
                  className="flex items-center justify-between w-full px-4 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 rounded-lg"
                >
                  <span>Insurance Complaints</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${
                      insuranceDropdown ? "rotate-180" : ""
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
                <div
                  className={`${
                    insuranceDropdown ? "block" : "hidden"
                  } pl-4 space-y-2`}
                >
                  <Link
                    href="/insurance/life-insurance"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Life Insurance
                  </Link>
                  <Link
                    href="/insurance/health-insurance"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Health Insurance
                  </Link>
                  <Link
                    href="/insurance/motor-insurance"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Motor Insurance
                  </Link>
                  <Link
                    href="/insurance/travel-insurance"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Travel Insurance
                  </Link>
                  <Link
                    href="/insurance/property-insurance"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Property Insurance
                  </Link>
                  <Link
                    href="/insurance/marine-insurance"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Marine Insurance
                  </Link>
                </div>
              </div>

              <Link
                href="/partnership"
                className="block px-4 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Partnership
              </Link>

              <Link
                href="/blogs"
                className="block px-4 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blogs
              </Link>

              <div className="pt-4 space-y-3">
                <Link
                  href="/contact"
                  className="block w-full px-4 py-3 text-center font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow hover:shadow-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Register a complaint
                </Link>
                <Link
                  href="/login"
                  className="block w-full px-4 py-3 text-center font-medium text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
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
