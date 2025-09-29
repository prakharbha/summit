'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Mockup2Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* Clean geometric background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-summit-primary/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-gradient-to-tr from-summit-red/5 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-screen">
          
          {/* Left Content - Minimal Typography */}
          <div className={`lg:col-span-6 space-y-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            
            {/* Subtitle */}
            <div className="space-y-2">
              <div className="w-16 h-1 bg-summit-red"></div>
              <p className="text-summit-primary font-medium tracking-wider text-sm uppercase">
                Since 1985
              </p>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-light text-gray-900 leading-tight">
                Environmental
                <span className="block font-bold text-summit-red">Excellence</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Summit's comprehensive approach to environmental drilling, geophysical services, 
                and remediation delivers results that exceed expectations.
              </p>
            </div>

            {/* Minimal CTA */}
            <div className="flex items-center space-x-8">
              <Link
                href="/resources/start-a-project"
                className="bg-summit-red text-white px-8 py-4 text-lg font-medium hover:bg-summit-red-dark transition-all duration-300 border-none"
              >
                Start Project
              </Link>
              <Link
                href="/services"
                className="text-summit-primary border-b-2 border-summit-primary hover:border-summit-red hover:text-summit-red transition-all duration-300 text-lg font-medium"
              >
                Our Services
              </Link>
            </div>

            {/* Key Points - Clean List */}
            <div className="space-y-4 pt-8">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-summit-primary"></div>
                <span className="text-gray-700">Customer satisfaction guaranteed</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-summit-red"></div>
                <span className="text-gray-700">Advanced sonic drilling technology</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-summit-accent"></div>
                <span className="text-gray-700">Comprehensive safety protocols</span>
              </div>
            </div>
          </div>

          {/* Right Content - Summit SAEDACCO GIF */}
          <div className={`lg:col-span-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Main GIF */}
              <div className="relative h-96 lg:h-[600px] rounded-none overflow-hidden bg-white">
                <Image
                  src="/images/summit-saedacco.gif"
                  alt="Summit Drilling SAEDACCO Partnership"
                  fill
                  className="object-contain"
                  priority
                  unoptimized
                />
              </div>

              {/* Floating Info Card */}
              <div className="absolute -bottom-8 -left-8 bg-white p-8 shadow-2xl border-l-4 border-summit-red">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-summit-primary rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">SAEDACCO Partnership</h3>
                      <p className="text-gray-600 text-sm">Strategic alliance for excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2">
          <div className="w-8 h-1 bg-summit-red"></div>
          <div className="w-4 h-1 bg-gray-300"></div>
          <div className="w-4 h-1 bg-gray-300"></div>
        </div>
      </div>
    </section>
  );
};

export default Mockup2Hero;
