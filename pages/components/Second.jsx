import React from 'react';
import CountUp from 'react-countup';

const Second = () => {
  return (
    <div className="bg-gradient-to-r from-[#0B2447] to-[#19A7CE] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Our Impact in Numbers</h1>
          <div className="h-1 w-24 bg-white/30 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          
          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-4xl font-bold text-white mb-2">
              <CountUp end={800} suffix="+" duration={2.5} />
            </h2>
            <p className="text-white/80">Total Complaints</p>
          </div>

          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-4xl font-bold text-white mb-2">
              <CountUp end={600} suffix="+" duration={2.5} />
            </h2>
            <p className="text-white/80">Happy Customers</p>
          </div>

          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-4xl font-bold text-white mb-2">
              <CountUp end={200} suffix="+" duration={2.5} />
            </h2>
            <p className="text-white/80">Hospital Complaints</p>
          </div>

          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-4xl font-bold text-white mb-2">
              <CountUp end={200} suffix="+" duration={2.5} />
            </h2>
            <p className="text-white/80">Advisor Network</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Second;
