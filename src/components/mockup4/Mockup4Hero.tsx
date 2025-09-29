'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Mockup4Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gray-900">
      
      {/* Dynamic background with parallax */}
      <div className="absolute inset-0">
        <Image
          src="/images/bg-2.jpg"
          alt="Modern Dark Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-summit-primary/20"></div>
        
        {/* Animated grid overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, #60A5FA 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="min-h-screen flex items-center">
          <div className="w-full">
            
            {/* Modern Dark Hero */}
            <div className="text-center space-y-12">
              
              {/* Glowing accent */}
              <div className="inline-block">
                <div className="bg-gradient-to-r from-summit-red to-summit-red-dark text-white px-6 py-2 text-sm font-semibold tracking-widest uppercase">
                  Environmental Innovation
                </div>
              </div>

              {/* Main heading with glow effect */}
              <div className="space-y-6">
                <h1 className="text-7xl lg:text-9xl font-black text-white leading-none tracking-tighter">
                  <span className="block" style={{
                    background: 'linear-gradient(45deg, #ffffff, #60A5FA, #EF4444)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    filter: 'drop-shadow(0 0 20px rgba(96, 165, 250, 0.5))'
                  }}>
                    SUMMIT
                  </span>
                  <span className="block text-summit-red" style={{
                    filter: 'drop-shadow(0 0 20px rgba(239, 68, 68, 0.5))'
                  }}>
                    DRILLING
                  </span>
                </h1>
              </div>

              {/* Modern description */}
              <div className="max-w-4xl mx-auto space-y-8">
                <p className="text-2xl lg:text-3xl text-gray-300 leading-relaxed font-light">
                  Revolutionizing environmental drilling with cutting-edge technology, 
                  precision engineering, and uncompromising commitment to excellence.
                </p>
                
                {/* Tech-style stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 hover:border-summit-red transition-all duration-300">
                    <div className="text-3xl font-bold text-summit-red mb-2">1985</div>
                    <div className="text-gray-400 text-sm uppercase tracking-wider">ESTABLISHED</div>
                  </div>
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 hover:border-summit-primary transition-all duration-300">
                    <div className="text-3xl font-bold text-summit-primary mb-2">SONIC</div>
                    <div className="text-gray-400 text-sm uppercase tracking-wider">TECHNOLOGY</div>
                  </div>
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 hover:border-summit-accent transition-all duration-300">
                    <div className="text-3xl font-bold text-summit-accent mb-2">24/7</div>
                    <div className="text-gray-400 text-sm uppercase tracking-wider">OPERATIONS</div>
                  </div>
                </div>
              </div>

              {/* Modern CTA buttons */}
              <div className="flex flex-col lg:flex-row gap-6 justify-center items-center pt-12">
                <Link
                  href="/resources/start-a-project"
                  className="group bg-gradient-to-r from-summit-red to-summit-red-dark text-white px-12 py-5 text-lg font-bold uppercase tracking-wider hover:shadow-2xl hover:shadow-summit-red/30 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center">
                    Initialize Project
                    <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
                
                <Link
                  href="/services"
                  className="group bg-transparent text-white border-2 border-gray-600 px-12 py-5 text-lg font-bold uppercase tracking-wider hover:border-summit-primary hover:text-summit-primary hover:shadow-lg hover:shadow-summit-primary/20 transition-all duration-300"
                >
                  <span className="flex items-center">
                    Explore Systems
                    <svg className="w-5 h-5 ml-3 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                </Link>
              </div>

              {/* Animated service tags */}
              <div className="pt-16">
                <div className="flex flex-wrap justify-center gap-4">
                  {['SONIC DRILLING', 'GEOPHYSICS', 'REMEDIATION', 'CATHODIC PROTECTION', 'PFAS SERVICES'].map((service, index) => (
                    <div
                      key={index}
                      className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 text-gray-300 px-4 py-2 text-sm font-medium uppercase tracking-wider hover:border-summit-red hover:text-white transition-all duration-300"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                        animation: 'fadeInUp 0.6s ease-out forwards'
                      }}
                    >
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-summit-primary rounded-full opacity-50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </section>
  );
};

export default Mockup4Hero;
