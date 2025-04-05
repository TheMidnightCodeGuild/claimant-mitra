import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Blog2 = () => {
  return (
    <>
      <Navbar />
      <div className="w-full max-w-[1300px] mx-auto py-8 sm:py-12 px-4 sm:px-6 mt-20">
        <article className="p-4 sm:p-6 bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="relative h-48 sm:h-56 md:h-64 w-full mb-4 sm:mb-6">
            <Image
              src="/images/bg.png"
              alt="Claim Rejection Analysis"
              fill
              className="object-cover rounded-md sm:rounded-lg"
              priority
            />
          </div>
          <header className="mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2 sm:mb-3">Common Reasons for Claim Rejections</h2>
            <div className="flex items-center text-gray-500">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-xs sm:text-sm">Published on Oct 10, 2023</p>
            </div>
          </header>
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Learn about the most frequent causes of insurance claim rejections and how to avoid them.
              From incomplete documentation to policy exclusions and delayed submissions — uncover what insurance companies look for and how to prepare for a successful claim.
            </p>
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
};

export default Blog2;
