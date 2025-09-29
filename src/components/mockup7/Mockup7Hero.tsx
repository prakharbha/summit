'use client';

import Image from 'next/image';
import Link from 'next/link';

const Mockup7Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden" style={{
      background: 'radial-gradient(circle at top right, #8B4513 0%, #A0522D 25%, #CD853F 50%, #DEB887 75%, #F5DEB3 100%)'
    }}>
      
      {/* Vintage paper texture overlay */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-opacity='0.15'%3E%3Cpath fill='%23000' d='M0 0h100v100H0V0zm10 10h80v80H10V10z'/%3E%3Cpath fill='%23000' d='M20 20h60v60H20V20zm15 15h30v30H35V35z'/%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="min-h-screen flex items-center">
          
          {/* Ornate vintage frame */}
          <div className="w-full">
            <div className="border-8 border-amber-900 p-16 bg-gradient-to-br from-amber-50/95 to-orange-50/95 backdrop-blur-sm relative" style={{
              boxShadow: 'inset 0 0 0 8px #92400e, inset 0 0 0 12px #D2691E, 0 0 80px rgba(0,0,0,0.4)'
            }}>
              
              {/* Decorative corner flourishes */}
              <div className="absolute -top-8 -left-8 w-16 h-16 text-6xl text-amber-900">❦</div>
              <div className="absolute -top-8 -right-8 w-16 h-16 text-6xl text-amber-900">❦</div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 text-6xl text-amber-900">❦</div>
              <div className="absolute -bottom-8 -right-8 w-16 h-16 text-6xl text-amber-900">❦</div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                {/* Left Side - Heritage Content */}
                <div className="space-y-12">
                  
                  {/* Vintage header */}
                  <div className="text-center space-y-6">
                    <div className="inline-block border-4 border-amber-900 px-8 py-2 bg-amber-900 text-amber-50">
                      <div className="text-sm tracking-[0.3em] font-bold" style={{fontFamily: 'serif'}}>
                        ESTABLISHED
                      </div>
                    </div>
                    
                    <h1 className="text-6xl lg:text-8xl font-bold text-amber-900 leading-tight tracking-wider" style={{
                      fontFamily: 'serif',
                      textShadow: '4px 4px 0px rgba(0,0,0,0.2)'
                    }}>
                      1985
                    </h1>
                    
                    <div className="space-y-4">
                      <h2 className="text-4xl lg:text-5xl font-bold text-summit-primary" style={{fontFamily: 'serif'}}>
                        SUMMIT DRILLING
                      </h2>
                      <div className="text-2xl font-semibold text-summit-red tracking-[0.2em]" style={{fontFamily: 'serif'}}>
                        COMPANY
                      </div>
                    </div>
                  </div>

                  {/* Decorative divider */}
                  <div className="flex items-center justify-center space-x-6 py-4">
                    <div className="w-24 h-px bg-amber-900"></div>
                    <div className="w-4 h-4 border-2 border-amber-900 rotate-45 bg-amber-900"></div>
                    <div className="w-24 h-px bg-amber-900"></div>
                  </div>

                  {/* Heritage story */}
                  <div className="space-y-6 text-center">
                    <p className="text-2xl text-amber-900 leading-relaxed font-medium" style={{fontFamily: 'serif'}}>
                      "Four decades of unwavering commitment to environmental drilling excellence. 
                      From humble beginnings to industry leadership, Summit Drilling has built 
                      a legacy of trust, precision, and innovation."
                    </p>
                    
                    <div className="bg-amber-900/10 p-6 border-l-4 border-amber-900">
                      <p className="text-lg text-amber-800 italic" style={{fontFamily: 'serif'}}>
                        "Where tradition meets technology, and every project reflects 
                        four decades of accumulated expertise and dedication to excellence."
                      </p>
                    </div>
                  </div>

                  {/* Vintage services banner */}
                  <div className="text-center">
                    <div className="bg-summit-red text-white py-4 px-8 transform -skew-x-3">
                      <div className="text-lg tracking-[0.2em] font-bold" style={{fontFamily: 'serif'}}>
                        ★ ENVIRONMENTAL DRILLING • GEOPHYSICS • REMEDIATION ★
                      </div>
                    </div>
                  </div>

                  {/* Heritage buttons */}
                  <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
                    <Link
                      href="/resources/start-a-project"
                      className="bg-summit-red text-white px-10 py-4 text-lg font-bold tracking-wider border-4 border-summit-red hover:bg-transparent hover:text-summit-red transition-all duration-300 text-center"
                      style={{fontFamily: 'serif'}}
                    >
                      REQUEST CONSULTATION
                    </Link>
                    <Link
                      href="/about/company-history"
                      className="bg-transparent text-amber-900 px-10 py-4 text-lg font-bold tracking-wider border-4 border-amber-900 hover:bg-amber-900 hover:text-amber-50 transition-all duration-300 text-center"
                      style={{fontFamily: 'serif'}}
                    >
                      OUR HERITAGE
                    </Link>
                  </div>
                </div>

                {/* Right Side - SAEDACCO GIF */}
                <div className="relative">
                  <div className="border-8 border-amber-900 relative bg-white">
                    <Image
                      src="/images/summit-saedacco.gif"
                      alt="Summit Drilling SAEDACCO Partnership"
                      width={600}
                      height={500}
                      className="w-full h-96 lg:h-[500px] object-contain"
                      unoptimized
                      priority
                    />
                    
                    {/* Vintage photo mounting corners */}
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-amber-900 transform rotate-45"></div>
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-amber-900 transform rotate-45"></div>
                    <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-amber-900 transform rotate-45"></div>
                    <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-amber-900 transform rotate-45"></div>
                  </div>

                  {/* Heritage badge */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-summit-red text-white px-8 py-3 text-center border-4 border-amber-900">
                    <div className="text-lg font-bold tracking-[0.1em]" style={{fontFamily: 'serif'}}>
                      TRUSTED PARTNERSHIPS
                    </div>
                    <div className="text-sm opacity-90">Since 1985</div>
                  </div>
                </div>
              </div>

              {/* Heritage seal */}
              <div className="absolute top-8 right-8">
                <div className="w-24 h-24 bg-summit-red rounded-full flex items-center justify-center border-4 border-amber-900">
                  <div className="text-center text-white">
                    <div className="text-lg font-bold">40</div>
                    <div className="text-xs">YEARS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vintage corner decorations */}
      <div className="absolute top-16 left-16 text-8xl text-amber-900/20">⚜</div>
      <div className="absolute top-16 right-16 text-8xl text-amber-900/20">⚜</div>
      <div className="absolute bottom-16 left-16 text-8xl text-amber-900/20">⚜</div>
      <div className="absolute bottom-16 right-16 text-8xl text-amber-900/20">⚜</div>
    </section>
  );
};

export default Mockup7Hero;
