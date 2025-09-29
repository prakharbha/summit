'use client';

import Image from 'next/image';
import Link from 'next/link';

const Mockup5Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden" style={{
      background: 'radial-gradient(circle at center, #fbbf24 0%, #f59e0b 50%, #d97706 100%)'
    }}>
      
      {/* Retro patterns */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z' opacity='0.5'/%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      {/* Background image with retro filter */}
      <div className="absolute inset-0">
        <Image
          src="/images/greybar-home.jpg"
          alt="Retro Background"
          fill
          className="object-cover opacity-30"
          style={{filter: 'sepia(100%) hue-rotate(30deg) saturate(150%)'}}
          priority
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="min-h-screen flex items-center justify-center">
          
          {/* Retro-futuristic design */}
          <div className="text-center max-w-5xl">
            
            {/* Retro badge */}
            <div className="inline-block mb-12">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 text-yellow-100 px-8 py-3 transform -skew-x-12 font-bold text-lg tracking-wider">
                EST. 1985 • ENVIRONMENTAL SPECIALISTS
              </div>
            </div>

            {/* Main retro heading */}
            <div className="space-y-8 mb-16">
              <h1 className="text-8xl lg:text-9xl font-black leading-none" style={{
                background: 'linear-gradient(45deg, #dc2626, #ea580c, #facc15)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontFamily: 'Impact, Arial Black, sans-serif',
                textShadow: '4px 4px 0px rgba(0,0,0,0.3)',
                letterSpacing: '-0.02em'
              }}>
                SUMMIT
                <span className="block text-summit-red" style={{
                  textShadow: '4px 4px 0px rgba(0,0,0,0.3)'
                }}>
                  DRILLING
                </span>
              </h1>
              
              <div className="text-2xl lg:text-3xl font-bold text-orange-900 tracking-wider uppercase">
                Retro Power • Modern Results
              </div>
            </div>

            {/* Retro services showcase */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                { title: 'SONIC DRILLING', icon: '⚡', color: 'from-red-500 to-orange-500' },
                { title: 'GEOPHYSICS', icon: '🔬', color: 'from-orange-500 to-yellow-500' },
                { title: 'REMEDIATION', icon: '🌱', color: 'from-yellow-500 to-green-500' }
              ].map((service, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${service.color} p-8 transform -skew-y-1 hover:skew-y-0 transition-transform duration-300 shadow-2xl border-4 border-orange-800`}
                >
                  <div className="text-center text-white">
                    <div className="text-5xl mb-4">{service.icon}</div>
                    <div className="text-xl font-bold tracking-wider">
                      {service.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Retro description */}
            <div className="bg-orange-800/90 text-yellow-100 p-8 mb-12 transform skew-x-1 max-w-4xl mx-auto">
              <p className="text-xl lg:text-2xl font-semibold leading-relaxed">
                "Four decades of drilling excellence meets cutting-edge technology. 
                From the golden age of environmental services to today's advanced solutions, 
                Summit Drilling delivers results with that classic touch of reliability."
              </p>
            </div>

            {/* Retro buttons */}
            <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
              <Link
                href="/resources/start-a-project"
                className="group bg-gradient-to-r from-red-600 to-red-700 text-yellow-100 px-12 py-5 text-xl font-black uppercase tracking-wider transform -skew-x-6 hover:skew-x-0 transition-all duration-300 shadow-2xl border-4 border-red-800"
                style={{fontFamily: 'Impact, Arial Black, sans-serif'}}
              >
                <span className="flex items-center">
                  FIRE UP PROJECT
                  <span className="ml-3 text-2xl group-hover:animate-bounce">🚀</span>
                </span>
              </Link>
              
              <Link
                href="/services"
                className="group bg-gradient-to-r from-orange-600 to-orange-700 text-yellow-100 px-12 py-5 text-xl font-black uppercase tracking-wider transform skew-x-6 hover:-skew-x-0 transition-all duration-300 shadow-2xl border-4 border-orange-800"
                style={{fontFamily: 'Impact, Arial Black, sans-serif'}}
              >
                <span className="flex items-center">
                  VIEW ARSENAL
                  <span className="ml-3 text-2xl group-hover:animate-spin">⚙️</span>
                </span>
              </Link>
            </div>

            {/* Retro tagline */}
            <div className="mt-16">
              <div className="inline-block bg-yellow-400 text-orange-900 px-8 py-3 font-black text-lg tracking-widest uppercase transform rotate-1">
                Satisfaction Guaranteed • Old School Values • New School Tech
              </div>
            </div>

            {/* Vintage sunburst decoration */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-10 pointer-events-none" style={{
              background: 'radial-gradient(circle, transparent 30%, rgba(251, 191, 36, 0.3) 31%, rgba(251, 191, 36, 0.3) 32%, transparent 33%), conic-gradient(from 0deg, #fbbf24, #f59e0b, #d97706, #b45309, #92400e, #fbbf24)',
              borderRadius: '50%'
            }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mockup5Hero;
