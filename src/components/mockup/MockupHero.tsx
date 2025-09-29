'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MockupHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/images/bg-1.jpg",
      title: "Environmental Drilling Excellence",
      subtitle: "Since 1985",
      description: "Leading the industry with innovative sonic drilling and direct push technologies for complex environmental projects."
    },
    {
      image: "/images/bg-2.jpg", 
      title: "Geophysical Expertise",
      subtitle: "Advanced Solutions",
      description: "Comprehensive subsurface investigation services using cutting-edge geophysical techniques and equipment."
    },
    {
      image: "/images/bg-3.jpg",
      title: "Remediation Services",
      subtitle: "Complete Solutions",
      description: "Full-service environmental remediation from assessment to completion with proven results."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Content */}
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <div className="inline-block bg-summit-red px-6 py-2 rounded-full text-sm font-semibold">
                  {slides[currentSlide].subtitle}
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  {slides[currentSlide].title.split(' ').map((word, idx) => (
                    <span key={idx} className={idx === slides[currentSlide].title.split(' ').length - 1 ? 'text-summit-red' : ''}>
                      {word}{' '}
                    </span>
                  ))}
                </h1>
                <p className="text-xl lg:text-2xl leading-relaxed opacity-90">
                  {slides[currentSlide].description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/resources/start-a-project"
                  className="summit-btn-primary text-center text-lg px-8 py-4"
                >
                  Start Your Project
                </Link>
                <Link
                  href="/services"
                  className="summit-btn-secondary text-center text-lg px-8 py-4"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            {/* Right Side - Key Points */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-summit-primary mb-6">
                Why Choose Summit?
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-summit-red rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">100% Customer Satisfaction</h4>
                    <p className="text-gray-600 text-sm">Every team member takes individual responsibility for your exceptional experience.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-summit-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Advanced Technology</h4>
                    <p className="text-gray-600 text-sm">Industry-leading sonic drilling and geophysical equipment for superior results.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-summit-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Safety First</h4>
                    <p className="text-gray-600 text-sm">Metrics-driven safety approach preventing incidents before they occur.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-summit-red">40+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-summit-red scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MockupHero;
