import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="text-center sm:text-left">
            <div className="mb-4 flex justify-center sm:justify-start">
              <Image 
                src="/images/logo.png"
                alt="Insurance Samadhan"
                width={160}
                height={45}
                className="w-auto h-auto"
                priority
              />
            </div>
            <div className="space-y-3">
              <p className="text-sm flex items-start gap-2">
                <svg className="w-4 h-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
                <span>A-31, 2nd floor, Infratine Tower, Sector 3, Noida - 201301</span>
              </p>
              <p className="text-sm flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:95136-31312" className="hover:text-[#1AC0D8] transition-colors">95136-31312</a>
              </p>
              <p className="text-sm flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:corporate@insurancesamadhan.com" className="hover:text-[#1AC0D8] transition-colors">
                  corporate@insurancesamadhan.com
                </a>
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2.5">
              <li><Link href="/services/mis-selling" className="text-sm hover:text-[#1AC0D8] transition-colors inline-block">Mis-selling of Insurance Policy</Link></li>
              <li><Link href="/services/claim-rejection" className="text-sm hover:text-[#1AC0D8] transition-colors inline-block">Claim Rejection</Link></li>
              <li><Link href="/services/delay-claim" className="text-sm hover:text-[#1AC0D8] transition-colors inline-block">Delay In Claim Process</Link></li>
              <li><Link href="/services/claim-short-settled" className="text-sm hover:text-[#1AC0D8] transition-colors inline-block">Claim Short-settled</Link></li>
              <li><Link href="/services/health-claim" className="text-sm hover:text-[#1AC0D8] transition-colors inline-block">Health Claim Reimbursement</Link></li>
              <li><Link href="/services/know-policy" className="text-sm hover:text-[#1AC0D8] transition-colors inline-block">Know your policy</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-white text-lg font-semibold mb-4">Quick links</h3>
            <ul className="space-y-2.5">
              <li><Link href="/about" className="text-sm hover:text-[#1AC0D8] transition-colors inline-block">About Us</Link></li>
              <li><Link href="/testimonials" className="text-sm hover:text-[#1AC0D8] transition-colors inline-block">Testimonial</Link></li>
              <li><Link href="/media" className="text-sm hover:text-[#1AC0D8] transition-colors inline-block">Media Coverage</Link></li>
              <li><Link href="/career" className="text-sm hover:text-[#1AC0D8] transition-colors inline-block">Career</Link></li>
              <li><Link href="/partnership" className="text-sm hover:text-[#1AC0D8] transition-colors inline-block">Partnership</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-[#1AC0D8] transition-colors inline-block">Contact us</Link></li>
            </ul>
          </div>

          {/* Newsletter/Social Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-white text-lg font-semibold mb-4">Newsletter</h3>
            <form className="mb-6">
              <div className="mb-3">
                <input 
                  type="email" 
                  placeholder="Email Id*"
                  className="w-full px-4 py-2.5 bg-gray-800 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#1AC0D8] transition-all"
                  required
                />
              </div>
              <div className="flex items-start gap-2">
                <input 
                  type="checkbox" 
                  id="newsletter-consent"
                  className="mt-1"
                  required 
                />
                <label htmlFor="newsletter-consent" className="text-xs">
                  Yes, I would like to receive email communications from Insurance Samadhan. I can unsubscribe at any time.
                </label>
              </div>
              <button 
                type="submit"
                className="mt-4 w-full bg-[#1AC0D8] text-white py-2 rounded hover:bg-[#15a8bd] transition-colors"
              >
                Subscribe
              </button>
            </form>
            <div className="flex justify-center sm:justify-start gap-4">
              <a href="#" className="text-gray-300 hover:text-[#1AC0D8] transition-colors" aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-[#1AC0D8] transition-colors" aria-label="Instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-[#1AC0D8] transition-colors" aria-label="YouTube">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-[#1AC0D8] transition-colors" aria-label="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-[#1AC0D8] transition-colors" aria-label="Twitter">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-[#1AC0D8] transition-colors" aria-label="Quora">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.738 18.701c-.831-1.635-1.805-3.287-3.708-3.287h-.376V12.39c.792 0 1.355-.592 1.385-2.664h3.75v9.674h-1.051v-.699zm4.77-3.287c-.881 0-1.841.208-2.246.452l-.436-.867c.792-.5 2.133-.867 3.306-.867h.148c2.179 0 3.604 1.088 3.604 2.781v.576c0 2.014-1.667 3.266-3.586 3.266-2.087 0-3.708-1.268-3.708-3.266v-.576c0-1.041.524-1.936 1.385-2.475-1.667-.624-2.505-1.833-2.505-3.379V9.71c0-2.273 1.841-3.758 4.373-3.758 2.532 0 4.373 1.485 4.373 3.758v.349c0 2.179-1.841 3.655-4.373 3.655h-.148c-.257 0-.495-.019-.733-.038.119.33.178.699.178 1.107v.576c0 1.247.91 2.049 2.323 2.049 1.138 0 2.186-.529 2.186-1.529v-.037h1.4v.037c0 1.672-1.629 2.929-3.542 2.929zM14.895 9.71v.349c0 1.46 1.178 2.441 2.973 2.441h.148c1.795 0 2.973-.981 2.973-2.441V9.71c0-1.46-1.178-2.441-2.973-2.441-1.795 0-2.973.981-2.973 2.441z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm">© 2025 Claimant Mitra. All right reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy-policy" className="text-sm hover:text-[#1AC0D8] transition-colors">Privacy policy</Link>
              <Link href="/terms-of-service" className="text-sm hover:text-[#1AC0D8] transition-colors">Terms of service</Link>
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-50 ">Designed and developed by <a href="https://noxalgo.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#1AC0D8] transition-colors">Noxalgo</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
