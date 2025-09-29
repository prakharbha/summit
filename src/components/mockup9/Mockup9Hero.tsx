'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Mockup9Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      
      {/* Dynamic Background with Parallax */}
      <div className="fixed inset-0 -z-10">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-summit-primary/20 via-white to-summit-red/10"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, rgba(30, 64, 175, 0.1) 0%, transparent 50%), 
                             radial-gradient(circle at 80% 70%, rgba(220, 38, 38, 0.1) 0%, transparent 50%)`,
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />
      </div>

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 py-20 w-full">
          
          {/* Main Content Container with Glass Effect */}
          <div className="backdrop-blur-xl bg-white/70 rounded-3xl border border-white/20 shadow-2xl p-12 lg:p-20">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Content */}
              <div className="space-y-10">
                
                {/* Badge */}
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-summit-primary/10 to-summit-red/10 backdrop-blur-lg rounded-full border border-white/30">
                  <div className="w-2 h-2 bg-summit-red rounded-full mr-3 animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Environmental Drilling Excellence</span>
                </div>

                {/* Main Heading */}
                <div className="space-y-6">
                  <h1 className="text-5xl lg:text-7xl font-thin text-gray-900 leading-tight tracking-tight">
                    Precision
                    <span className="block font-light bg-gradient-to-r from-summit-primary to-summit-red bg-clip-text text-transparent">
                      Environmental
                    </span>
                    <span className="block font-extralight text-gray-600">
                      Solutions
                    </span>
                  </h1>
                  
                  <p className="text-xl text-gray-600 leading-relaxed font-light max-w-lg">
                    Summit Drilling combines advanced technology with environmental stewardship 
                    to deliver exceptional results in sonic drilling, geophysical services, and remediation.
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { icon: "🎯", title: "Precision Technology", desc: "Advanced sonic drilling systems" },
                    { icon: "🌱", title: "Environmental Focus", desc: "Sustainable drilling practices" },
                    { icon: "🔬", title: "Geophysical Expertise", desc: "Comprehensive subsurface analysis" },
                    { icon: "♻️", title: "Remediation Solutions", desc: "Complete site restoration" }
                  ].map((feature, index) => (
                    <div key={index} className="group">
                      <div className="backdrop-blur-lg bg-white/40 rounded-2xl p-6 border border-white/30 hover:bg-white/60 transition-all duration-300 hover:scale-105">
                        <div className="text-2xl mb-3">{feature.icon}</div>
                        <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-sm text-gray-600 font-light">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Link
                    href="/resources/start-a-project"
                    className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-summit-red to-summit-red-dark text-white rounded-2xl hover:shadow-2xl hover:shadow-summit-red/25 transition-all duration-300 transform hover:scale-105 backdrop-blur-lg"
                  >
                    <span className="font-medium">Start Your Project</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center px-8 py-4 backdrop-blur-lg bg-white/50 text-gray-700 rounded-2xl border border-white/30 hover:bg-white/70 transition-all duration-300 hover:scale-105"
                  >
                    <span className="font-medium">Explore Services</span>
                  </Link>
                </div>
              </div>

              {/* Right Visual */}
              <div className="relative">
                
                {/* Main Glass Card */}
                <div className="relative backdrop-blur-2xl bg-gradient-to-br from-white/40 to-white/20 rounded-3xl p-8 border border-white/30 shadow-2xl">
                  
                  {/* Logo Section */}
                  <div className="text-center mb-8">
                    <div className="inline-block backdrop-blur-lg bg-white/60 rounded-2xl p-6 border border-white/40">
                      <Image
                        src="/images/summit-logo-blue.png"
                        alt="Summit Drilling"
                        width={200}
                        height={80}
                        className="h-16 w-auto"
                        priority
                      />
                    </div>
                  </div>

                  {/* Service Highlights */}
                  <div className="space-y-4">
                    {[
                      { service: "Sonic Drilling", description: "Advanced precision technology" },
                      { service: "Geophysical Services", description: "Comprehensive site analysis" },
                      { service: "Environmental Remediation", description: "Complete restoration solutions" }
                    ].map((item, index) => (
                      <div key={index} className="backdrop-blur-lg bg-white/30 rounded-2xl p-4 border border-white/20">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium text-gray-900">{item.service}</h4>
                            <p className="text-sm text-gray-600 font-light">{item.description}</p>
                          </div>
                          <div className="w-3 h-3 bg-gradient-to-r from-summit-primary to-summit-red rounded-full"></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-summit-red/30 to-summit-primary/30 rounded-full backdrop-blur-lg border border-white/30"></div>
                  <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-summit-primary/30 to-summit-red/30 rounded-full backdrop-blur-lg border border-white/30"></div>
                </div>

                {/* Floating Action Card */}
                <div className="absolute -bottom-8 -right-8 backdrop-blur-xl bg-white/80 rounded-2xl p-6 border border-white/40 shadow-2xl">
                  <div className="text-center">
                    <div className="text-sm text-gray-600 font-light mb-2">Since</div>
                    <div className="text-3xl font-light bg-gradient-to-r from-summit-primary to-summit-red bg-clip-text text-transparent">
                      1985
                    </div>
                    <div className="text-xs text-gray-500 font-light">Trusted Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-20">
        <div className="flex flex-col space-y-3">
          {['Services', 'Team', 'Contact'].map((section, index) => (
            <button
              key={index}
              className="w-3 h-3 rounded-full backdrop-blur-lg bg-white/40 border border-white/60 hover:bg-summit-red/60 transition-all duration-300"
              title={section}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mockup9Hero;
