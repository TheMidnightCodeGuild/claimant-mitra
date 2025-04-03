import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Choose = () => {
  return (
    <>
 
      <div 
        className="bg-white bg-cover bg-center bg-fixed mt-20 rounded-3xl"
        style={{backgroundImage: "url('/images/choosebg.png')"}}
      >
        {/* Approach */}
        <div className="lg:max-w-[1000px] px-4 xl:px-0 py-10 lg:pt-12 lg:pb-20 mx-auto">
          {/* Title */}
          <div className="max-w-3xl mx-auto justify-center items-center text-center mb-10 lg:mb-14">
            <h2 className="text-gray-800 font-bold lg:text-4xl text-3xl mb-5">Our <span className="text-blue-600 underline">Hassle-Free Process</span></h2>
            <p className="mt-1 text-gray-800">We take pride in our process, and we want to share it with you. Discover the steps we take to ensure that our service meets the highest quality standards.</p>
          </div>
          {/* End Title */}

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
            <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
              <Image width={1000} height={1000} className="w-full object-cover shadow-lg rounded-xl" src="/images/work.png" alt="Our Process" />
            </div>
            {/* End Col */}

            {/* Timeline */}
            <div>
              {/* Heading */}
              <div className="mb-4">
                <h3 className="text-xl font-bold uppercase text-gray-900">
                  -------------------Steps -------------------
                </h3>
              </div>
              {/* End Heading */}

              {/* Item */}
              <div className="flex gap-x-5 ms-1">
                {/* Icon */}
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-gray-600">
                  <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex flex-shrink-0 justify-center items-center size-8 bg-blue-600 text-white font-semibold text-xs uppercase rounded-full">
                      1
                    </span>
                  </div>
                </div>
                {/* End Icon */}

                {/* Right Content */}
                <div className="grow pt-0.5 pb-8">
                  <p className="text-sm lg:text-base text-gray-800">
                    <span className="text-gray-900 font-semibold">Reach out to us:</span>
                    <span className='text-gray-900'> Kindly fill out the form with your name, email, and contact number.</span>
                  </p>
                </div>
                {/* End Right Content */}
              </div>
              {/* End Item */}

              {/* Item */}
              <div className="flex gap-x-5 ms-1">
                {/* Icon */}
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-gray-600">
                  <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex flex-shrink-0 justify-center items-center size-8 bg-blue-600 text-white font-semibold text-xs uppercase rounded-full">
                      2
                    </span>
                  </div>
                </div>
                {/* End Icon */}

                {/* Right Content */}
                <div className="grow pt-0.5 pb-8">
                  <p className="text-sm lg:text-base text-gray-900">
                    <span className="text-gray-900 font-semibold">Share case documents:</span>
                    We hear you out and ask you to share copies of case related documents with us.
                  </p>
                </div>
                {/* End Right Content */}
              </div>
              {/* End Item */}

              {/* Item */}
              <div className="flex gap-x-5 ms-1">
                {/* Icon */}
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-gray-600">
                  <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex flex-shrink-0 justify-center items-center size-8 bg-blue-600 text-white font-semibold text-xs uppercase rounded-full">
                      3
                    </span>
                  </div>
                </div>
                {/* End Icon */}

                {/* Right Content */}
                <div className="grow pt-0.5 pb-8">
                  <p className="text-sm md:text-base text-gray-900">
                    <span className="text-gray-900 font-semibold">Case Acceptance:</span>
                    We will proceed with your insurance complaint after thoroughly reviewing your case particulars and insurance paperwork.
                  </p>
                </div>
                {/* End Right Content */}
              </div>
              {/* End Item */}

              {/* Item */}
              <div className="flex gap-x-5 ms-1">
                {/* Icon */}
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-gray-600">
                  <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex flex-shrink-0 justify-center items-center size-8 bg-blue-600 text-white font-semibold text-xs uppercase rounded-full">
                      4
                    </span>
                  </div>
                </div>
                {/* End Icon */}

                {/* Right Content */}
                <div className="grow pt-0.5 pb-8">
                  <p className="text-sm md:text-base text-gray-900">
                    <span className="text-gray-900 font-semibold">Registration:</span>
                    There is no registration fee or any upfront charges; you only pay after you get your claim.
                  </p>
                </div>
                {/* End Right Content */}
              </div>
              {/* End Item */}

              {/* Item */}
              <div className="flex gap-x-5 ms-1">
                {/* Icon */}
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-gray-600">
                  <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex flex-shrink-0 justify-center items-center size-8 bg-blue-600 text-white font-semibold text-xs uppercase rounded-full">
                      5
                    </span>
                  </div>
                </div>
                {/* End Icon */}

                {/* Right Content */}
                <div className="grow pt-0.5 pb-8">
                  <p className="text-sm md:text-base text-gray-900">
                    <span className="text-gray-900 font-semibold">Complaint Resolution:</span>
                    Upon successful resolution of your insurance complaint, we charge a success fee of 20%.
                  </p>
                </div>
                {/* End Right Content */}
              </div>
              {/* End Item */}

              <Link className="group inline-flex items-center gap-x-2 py-2.5 px-4 bg-blue-600 font-medium text-sm text-white rounded-full hover:bg-blue-700 focus:outline-none" href="/components/Contact-us">
                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:delay-100 transition" d="M14.05 2a9 9 0 0 1 8 7.94"></path><path className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition" d="M14.05 6A5 5 0 0 1 18 10"></path></svg>
                Contact now
              </Link>
            </div>
            {/* End Timeline */}
          </div>
          {/* End Grid */}
        </div>
      </div>
 
    </>
  )
}

export default Choose
