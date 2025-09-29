'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Mockup6Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { image: "/images/bg-1.jpg", title: "Environmental", subtitle: "Drilling Excellence" },
    { image: "/images/bg-2.jpg", title: "Geophysical", subtitle: "Investigation" },
    { image: "/images/bg-3.jpg", title: "Site", subtitle: "Remediation" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative h-screen overflow-hidden bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
        
        {/* Left Side - Content */}
        <div className="relative z-10 flex items-center justify-center bg-white p-12">
          <div className="max-w-xl space-y-12">
            
            {/* Logo/Brand */}
            <div className="space-y-4">
              <div className="w-20 h-1 bg-summit-red"></div>
              <div className="text-summit-primary text-sm font-semibold tracking-[0.2em] uppercase">
                Since 1985
              </div>
            </div>

            {/* Dynamic Content */}
            <div className="space-y-8">
              <h1 className="text-6xl lg:text-7xl font-thin text-gray-900 leading-tight">
                <span className="block font-light">
                  {slides[currentSlide].title}
                </span>
                <span className="block font-bold text-summit-red">
                  {slides[currentSlide].subtitle}
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                Summit Drilling combines four decades of experience with innovative technology 
                to deliver exceptional results in environmental drilling, geophysical services, 
                and remediation projects.
              </p>
            </div>

            {/* Services List */}
            <div className="space-y-4">
              {[
                'Sonic Drilling Technology',
                'Comprehensive Geophysical Services', 
                'Environmental Remediation',
                'PFAS Specialized Services'
              ].map((service, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className="w-3 h-3 border border-summit-primary group-hover:bg-summit-red transition-colors duration-300"></div>
                  <span className="text-gray-700 group-hover:text-summit-red transition-colors duration-300 font-medium">
                    {service}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/resources/start-a-project"
                className="bg-summit-red text-white px-8 py-4 text-lg font-medium hover:bg-summit-red-dark transition-all duration-300 flex items-center justify-center"
              >
                Start Project
              </Link>
              <Link
                href="/services"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 text-lg font-medium hover:border-summit-primary hover:text-summit-primary transition-all duration-300 flex items-center justify-center"
              >
                View Services
              </Link>
            </div>

            {/* Slide Indicators */}
            <div className="flex space-x-3 pt-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-12 h-1 transition-all duration-300 ${
                    index === currentSlide ? 'bg-summit-red' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="relative overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ${
                index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/10 to-black/30"></div>
              
              {/* Geometric overlay */}
              <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-32 h-32 bg-summit-red/20 transform rotate-45 -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-summit-primary/20 transform rotate-45 translate-y-12 -translate-x-12"></div>
              </div>
            </div>
          ))}

          {/* Floating info card */}
          <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-sm p-6 shadow-2xl max-w-xs">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-summit-primary rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Proven Excellence</div>
                  <div className="text-sm text-gray-600">Exceptional customer satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern accent line */}
      <div className="absolute left-0 top-1/2 w-1 h-32 bg-gradient-to-b from-summit-red to-summit-primary transform -translate-y-1/2"></div>
    </section>
  );
};

export default Mockup6Hero;
