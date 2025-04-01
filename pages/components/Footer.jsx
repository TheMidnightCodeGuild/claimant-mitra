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
                className="w-auto h-auto rounded-3xl mx-12"
                priority
              />
            </div>
            <div className="space-y-3">
              <p className="text-sm flex items-start gap-2">
                <svg className="w-4 h-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
                <span>2nd floor, Dindayal Complex, B-205 & 206, Nanakheda, Ujjain, Madhya Pradesh 456010</span>
              </p>
              <p className="text-sm flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:9098645524" className="hover:text-[#1AC0D8] transition-colors">9098645524</a>
              </p>
              <p className="text-sm flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:info@claimantmitra.com" className="hover:text-[#1AC0D8] transition-colors">
                 info@claimantmitra.com
                </a>
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2.5">
              <li><Link href="/services/mis-selling" className="text-sm hover:text-[#1AC0D8] transition-colors">Mis-selling of Insurance Policy</Link></li>
              <li><Link href="/services/claim-rejection" className="text-sm hover:text-[#1AC0D8] transition-colors">Claim Rejection</Link></li>
              <li><Link href="/services/delay-claim" className="text-sm hover:text-[#1AC0D8] transition-colors">Delay In Claim Process</Link></li>
              <li><Link href="/services/claim-short-settled" className="text-sm hover:text-[#1AC0D8] transition-colors">Claim Short-settled</Link></li>
              <li><Link href="/services/health-claim" className="text-sm hover:text-[#1AC0D8] transition-colors">Health Claim Reimbursement</Link></li>
              <li><Link href="/services/know-policy" className="text-sm hover:text-[#1AC0D8] transition-colors">Know your policy</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-white text-lg font-semibold mb-4">Quick links</h3>
            <ul className="space-y-2.5">
              <li><Link href="/about" className="text-sm hover:text-[#1AC0D8] transition-colors">About Us</Link></li>
              <li><Link href="/testimonials" className="text-sm hover:text-[#1AC0D8] transition-colors">Testimonial</Link></li>
              <li><Link href="/media" className="text-sm hover:text-[#1AC0D8] transition-colors">Media Coverage</Link></li>
              <li><Link href="/career" className="text-sm hover:text-[#1AC0D8] transition-colors">Career</Link></li>
              <li><Link href="/partnership" className="text-sm hover:text-[#1AC0D8] transition-colors">Partnership</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-[#1AC0D8] transition-colors">Contact us</Link></li>
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
                  Yes, I would like to receive email communications from Claimant Mitra. I can unsubscribe at any time.
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
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm">© {new Date().getFullYear()} Claimant Mitra. All rights reserved.</p>
            <p className="text-base text-gray-400 ">
              Designed and developed by{' '}
              <Link 
                href="https://noxalgo.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#1AC0D8] transition-colors "
              >
                Noxalgo LLP
              </Link>
            </p>
            <div className="flex gap-4">
              <Link href="/privacy-policy" className="text-sm hover:text-[#1AC0D8] transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-service" className="text-sm hover:text-[#1AC0D8] transition-colors">Terms of Service</Link>
            </div>
          </div>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
