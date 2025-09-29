'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Mockup10Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Interactive Background Elements */}
      <div 
        className="absolute w-64 h-64 bg-gradient-to-r from-summit-primary/30 to-summit-red/30 rounded-full blur-3xl transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x * 0.02,
          top: mousePosition.y * 0.02,
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
        
        {/* Main Hero Container */}
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Central Glass Morphism Card */}
          <div className="relative">
            
            {/* Main Glass Container */}
            <div className="backdrop-blur-3xl bg-gradient-to-br from-white/40 via-white/30 to-white/20 rounded-[3rem] border border-white/20 shadow-2xl shadow-black/10 p-16 lg:p-24">
              
              {/* Floating Elements */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-summit-primary/40 to-summit-red/40 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-tr from-summit-red/30 to-summit-accent/30 rounded-full blur-2xl"></div>
              
              <div className="relative z-10 text-center space-y-12">
                
                {/* Logo Section */}
                <div className="space-y-8">
                  <div className="inline-block">
                    <div className="backdrop-blur-2xl bg-white/60 rounded-3xl p-8 border border-white/40 shadow-xl">
                      <Image
                        src="/images/summit-logo-blue.png"
                        alt="Summit Drilling"
                        width={250}
                        height={100}
                        className="h-20 w-auto"
                        priority
                      />
                    </div>
                  </div>
                  
                  {/* Tagline */}
                  <div className="backdrop-blur-lg bg-white/30 rounded-full px-8 py-4 border border-white/40 inline-block">
                    <span className="text-lg font-light text-gray-700">Environmental Drilling Excellence</span>
                  </div>
                </div>

                {/* Main Heading */}
                <div className="space-y-8">
                  <h1 className="text-6xl lg:text-8xl font-extralight text-gray-900 leading-tight tracking-tight">
                    Precision
                    <span className="block font-thin bg-gradient-to-r from-summit-primary via-summit-red to-summit-accent bg-clip-text text-transparent">
                      Technology
                    </span>
                    <span className="block text-5xl lg:text-6xl font-light text-gray-600">
                      Environmental Solutions
                    </span>
                  </h1>
                  
                  <p className="text-xl lg:text-2xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto">
                    Advanced sonic drilling, comprehensive geophysical services, and complete 
                    environmental remediation delivered through cutting-edge technology and 
                    uncompromising commitment to excellence.
                  </p>
                </div>

                {/* Service Pills */}
                <div className="flex flex-wrap justify-center gap-4">
                  {[
                    { name: "Sonic Drilling", icon: "🎯" },
                    { name: "Geophysical Services", icon: "🔬" },
                    { name: "Environmental Remediation", icon: "♻️" },
                    { name: "PFAS Services", icon: "🌊" }
                  ].map((service, index) => (
                    <div key={index} className="backdrop-blur-xl bg-white/40 rounded-full px-6 py-3 border border-white/30 hover:bg-white/60 transition-all duration-300 group cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <span className="text-lg group-hover:scale-110 transition-transform duration-300">{service.icon}</span>
                        <span className="text-gray-700 font-medium">{service.name}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
                  <Link
                    href="/resources/start-a-project"
                    className="group backdrop-blur-xl bg-gradient-to-r from-summit-red/90 to-summit-red-dark/90 text-white rounded-2xl px-12 py-5 border border-white/30 hover:shadow-2xl hover:shadow-summit-red/30 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-lg font-medium">Start Your Project</span>
                      <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </Link>
                  
                  <Link
                    href="/services"
                    className="group backdrop-blur-xl bg-white/50 text-gray-700 rounded-2xl px-12 py-5 border border-white/40 hover:bg-white/70 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-lg font-medium">Explore Services</span>
                      <svg className="w-6 h-6 group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </Link>
                </div>

                {/* Since Badge */}
                <div className="pt-8">
                  <div className="inline-block backdrop-blur-xl bg-white/50 rounded-2xl px-8 py-4 border border-white/40">
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="text-sm text-gray-600 font-light">Established</div>
                        <div className="text-3xl font-light bg-gradient-to-r from-summit-primary to-summit-red bg-clip-text text-transparent">1985</div>
                      </div>
                      <div className="w-px h-12 bg-gray-300"></div>
                      <div className="text-center">
                        <div className="text-sm text-gray-600 font-light">Excellence</div>
                        <div className="text-3xl font-light bg-gradient-to-r from-summit-red to-summit-accent bg-clip-text text-transparent">Since</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Action Cards */}
            <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 hidden xl:block">
              <div className="backdrop-blur-xl bg-white/60 rounded-2xl p-6 border border-white/40 shadow-xl max-w-xs">
                <div className="text-center space-y-3">
                  <div className="text-3xl">🏆</div>
                  <h4 className="font-semibold text-gray-900">Industry Leader</h4>
                  <p className="text-sm text-gray-600 font-light">Trusted by leading environmental firms</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-16 top-1/3 transform -translate-y-1/2 hidden xl:block">
              <div className="backdrop-blur-xl bg-white/60 rounded-2xl p-6 border border-white/40 shadow-xl max-w-xs">
                <div className="text-center space-y-3">
                  <div className="text-3xl">🌿</div>
                  <h4 className="font-semibold text-gray-900">Eco-Friendly</h4>
                  <p className="text-sm text-gray-600 font-light">Sustainable drilling practices</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-8 bottom-8 hidden xl:block">
              <div className="backdrop-blur-xl bg-white/60 rounded-2xl p-6 border border-white/40 shadow-xl max-w-xs">
                <div className="text-center space-y-3">
                  <div className="text-3xl">⚡</div>
                  <h4 className="font-semibold text-gray-900">Advanced Technology</h4>
                  <p className="text-sm text-gray-600 font-light">Cutting-edge sonic drilling equipment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="backdrop-blur-xl bg-white/40 rounded-full p-3 border border-white/30 animate-bounce">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Mockup10Hero;
