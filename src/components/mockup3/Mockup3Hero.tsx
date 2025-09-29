'use client';

import Image from 'next/image';
import Link from 'next/link';

const Mockup3Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden" style={{background: 'linear-gradient(135deg, #f4f1e8 0%, #e8dcc0 100%)'}}>
      
      {/* Vintage paper texture overlay */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-opacity='0.1'%3E%3Cpolygon fill='%23000' points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      {/* Background Image with Sepia */}
      <div className="absolute inset-0">
        <Image
          src="/images/greybar-home.jpg"
          alt="Vintage Industrial Background"
          fill
          className="object-cover opacity-30 sepia"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/40 to-amber-800/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="min-h-screen flex items-center">
          
          {/* Vintage Frame */}
          <div className="w-full max-w-5xl mx-auto">
            <div className="border-8 border-amber-800 p-12 bg-amber-50/90 backdrop-blur-sm" style={{
              boxShadow: 'inset 0 0 0 4px #92400e, 0 0 40px rgba(0,0,0,0.3)'
            }}>
              
              {/* Ornamental corners */}
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-12 h-12 border-t-4 border-l-4 border-amber-800"></div>
                <div className="absolute -top-6 -right-6 w-12 h-12 border-t-4 border-r-4 border-amber-800"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 border-b-4 border-l-4 border-amber-800"></div>
                <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-4 border-r-4 border-amber-800"></div>

                <div className="text-center space-y-8">
                  
                  {/* Vintage Typography */}
                  <div className="space-y-4">
                    <div className="text-amber-800 text-lg tracking-[0.2em] font-semibold">
                      ◊ ESTABLISHED 1985 ◊
                    </div>
                    <h1 className="text-6xl lg:text-8xl font-bold text-amber-900 leading-tight tracking-wider" style={{
                      fontFamily: 'serif',
                      textShadow: '3px 3px 0px rgba(0,0,0,0.1)'
                    }}>
                      SUMMIT
                      <span className="block text-summit-red" style={{fontFamily: 'serif'}}>DRILLING</span>
                    </h1>
                    <div className="text-amber-800 text-xl tracking-[0.1em] font-medium">
                      COMPANY
                    </div>
                  </div>

                  {/* Vintage Divider */}
                  <div className="flex items-center justify-center space-x-4 py-6">
                    <div className="w-16 h-px bg-amber-800"></div>
                    <div className="w-3 h-3 border-2 border-amber-800 rotate-45"></div>
                    <div className="w-16 h-px bg-amber-800"></div>
                  </div>

                  {/* Vintage Description */}
                  <div className="max-w-3xl mx-auto space-y-6">
                    <p className="text-2xl text-amber-900 leading-relaxed font-medium" style={{fontFamily: 'serif'}}>
                      "Four decades of unwavering commitment to environmental excellence. 
                      From the heartland of America, we bring precision, integrity, and craftsmanship 
                      to every drilling and remediation project."
                    </p>
                  </div>

                  {/* Vintage Services Banner */}
                  <div className="py-8">
                    <div className="bg-amber-800 text-amber-50 py-4 px-8 inline-block">
                      <div className="text-lg tracking-[0.15em] font-semibold">
                        ★ SONIC DRILLING • GEOPHYSICS • REMEDIATION ★
                      </div>
                    </div>
                  </div>

                  {/* Vintage Buttons */}
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6">
                    <Link
                      href="/resources/start-a-project"
                      className="bg-summit-red text-white px-10 py-4 text-lg font-bold tracking-wider border-4 border-summit-red hover:bg-transparent hover:text-summit-red transition-all duration-300"
                      style={{fontFamily: 'serif'}}
                    >
                      REQUEST PROPOSAL
                    </Link>
                    <Link
                      href="/services"
                      className="bg-transparent text-amber-800 px-10 py-4 text-lg font-bold tracking-wider border-4 border-amber-800 hover:bg-amber-800 hover:text-amber-50 transition-all duration-300"
                      style={{fontFamily: 'serif'}}
                    >
                      VIEW SERVICES
                    </Link>
                  </div>

                  {/* Vintage Badge */}
                  <div className="pt-8">
                    <div className="inline-block bg-amber-800 text-amber-50 p-4 border-4 border-amber-900" style={{
                      clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)'
                    }}>
                      <div className="text-center">
                        <div className="text-sm tracking-[0.1em]">SATISFACTION</div>
                        <div className="text-lg font-bold">GUARANTEED</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vintage corner flourishes */}
      <div className="absolute top-8 left-8 text-6xl text-amber-800/30">❦</div>
      <div className="absolute top-8 right-8 text-6xl text-amber-800/30">❦</div>
      <div className="absolute bottom-8 left-8 text-6xl text-amber-800/30">❦</div>
      <div className="absolute bottom-8 right-8 text-6xl text-amber-800/30">❦</div>
    </section>
  );
};

export default Mockup3Hero;
