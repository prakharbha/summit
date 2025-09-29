'use client';

import Image from 'next/image';
import Link from 'next/link';

const Mockup8Hero = () => {
  return (
    <section className="relative py-16 bg-white border-b-8 border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Newspaper Header */}
        <div className="text-center mb-12 border-b-4 border-gray-800 pb-8">
          <div className="space-y-4">
            <div className="text-xs tracking-[0.3em] text-gray-600 uppercase">
              Environmental Drilling Excellence • Since 1985 • New Jersey, USA
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-black text-gray-900 leading-none" style={{
              fontFamily: 'serif',
              textShadow: '2px 2px 0px rgba(0,0,0,0.1)'
            }}>
              THE SUMMIT HERALD
            </h1>
            
            <div className="text-lg text-gray-700 font-semibold tracking-wider">
              ESTABLISHED 1985 • VOLUME 40 • ENVIRONMENTAL DRILLING NEWS
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
              <span>NEW JERSEY EDITION</span>
              <span>•</span>
              <span>40 YEARS OF SERVICE</span>
              <span>•</span>
              <span>INDUSTRY LEADER</span>
            </div>
          </div>
        </div>

        {/* Main Story Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Story */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Headline */}
            <div className="border-b-2 border-gray-800 pb-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight" style={{fontFamily: 'serif'}}>
                Summit Drilling Celebrates Four Decades of Environmental Excellence
              </h2>
              <div className="text-lg text-gray-600 mt-2 font-semibold">
                Company Marks 40 Years of Innovation in Sonic Drilling and Remediation Services
              </div>
            </div>

            {/* Story Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              
              {/* Text Content */}
              <div className="space-y-4 text-gray-800 leading-relaxed" style={{fontFamily: 'serif', columnCount: 1}}>
                <p className="text-lg font-semibold">
                  <span className="text-6xl float-left mr-2 leading-none text-summit-red" style={{fontFamily: 'serif'}}>S</span>
                  ince its founding in 1985, Summit Drilling Company has established itself as the premier environmental drilling contractor in the northeastern United States, consistently delivering exceptional results through innovative sonic drilling technology and unwavering commitment to customer satisfaction.
                </p>
                
                <p>
                  The company's journey began with a simple yet powerful vision: to provide environmental drilling services that exceed industry standards while maintaining the highest levels of safety and environmental responsibility. Four decades later, Summit continues to lead the industry through technological innovation and strategic partnerships.
                </p>
                
                <p>
                  "Every member of the Summit team takes individual responsibility for your experience," states the company leadership. This philosophy has guided Summit's growth from a local drilling contractor to a recognized industry leader serving clients across diverse environmental, geotechnical, and remediation projects.
                </p>
              </div>

              {/* Featured Image */}
              <div className="space-y-4">
                <div className="border-2 border-gray-800 p-2 bg-white">
                  <Image
                    src="/images/summit-saedacco.gif"
                    alt="Summit Drilling SAEDACCO Partnership"
                    width={400}
                    height={300}
                    className="w-full h-64 object-contain"
                    unoptimized
                  />
                  <div className="text-center text-sm text-gray-600 mt-2 italic border-t border-gray-300 pt-2">
                    Summit's strategic partnership with SAEDACCO demonstrates the company's commitment to industry collaboration and excellence.
                  </div>
                </div>
              </div>
            </div>

            {/* Continued Story */}
            <div className="border-t-2 border-gray-400 pt-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{fontFamily: 'serif'}}>
                Innovation Meets Tradition
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800" style={{fontFamily: 'serif'}}>
                <div className="space-y-4">
                  <p>
                    Summit's commitment to technological advancement has been evident throughout its history. The company was among the early adopters of sonic drilling technology, recognizing its potential for clean, efficient environmental drilling with minimal site disturbance.
                  </p>
                  <p>
                    Today, Summit's comprehensive services include sonic drilling, direct push drilling, geophysical investigations, environmental remediation, and specialized PFAS services, all delivered with the same dedication to excellence that has defined the company since 1985.
                  </p>
                </div>
                <div className="space-y-4">
                  <p>
                    The company's strategic partnerships, including collaborations with industry leaders like SAEDACCO, have enhanced Summit's capabilities and expanded its reach while maintaining the personal touch and individual responsibility that clients have come to expect.
                  </p>
                  <p>
                    As Summit looks toward the future, the company remains committed to its founding principles while embracing new technologies and methodologies that will ensure continued leadership in environmental drilling and remediation services.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            
            {/* Quick Facts */}
            <div className="border-2 border-gray-800 bg-gray-50 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-400 pb-2" style={{fontFamily: 'serif'}}>
                SUMMIT BY THE NUMBERS
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="font-semibold">Founded:</span>
                  <span className="text-summit-red font-bold">1985</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Years of Service:</span>
                  <span className="text-summit-red font-bold">40</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Headquarters:</span>
                  <span>New Jersey</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Primary Service:</span>
                  <span>Environmental Drilling</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Specialty:</span>
                  <span>Sonic Technology</span>
                </div>
              </div>
            </div>

            {/* Services Box */}
            <div className="border-2 border-gray-800 bg-white p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-400 pb-2" style={{fontFamily: 'serif'}}>
                SERVICES OFFERED
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-summit-red mr-3"></div>
                  <span>Sonic Drilling</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-summit-primary mr-3"></div>
                  <span>Direct Push/Geoprobe</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-summit-red mr-3"></div>
                  <span>Geophysical Services</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-summit-primary mr-3"></div>
                  <span>Environmental Remediation</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-summit-red mr-3"></div>
                  <span>PFAS Services</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-summit-primary mr-3"></div>
                  <span>Geotechnical Drilling</span>
                </li>
              </ul>
            </div>

            {/* Call to Action */}
            <div className="border-4 border-summit-red bg-summit-red text-white p-6 text-center">
              <h3 className="text-xl font-bold mb-4" style={{fontFamily: 'serif'}}>
                START YOUR PROJECT
              </h3>
              <p className="text-sm mb-4">
                Experience four decades of drilling excellence for your next environmental project.
              </p>
              <Link
                href="/resources/start-a-project"
                className="inline-block bg-white text-summit-red px-6 py-3 font-bold text-sm hover:bg-gray-100 transition-colors duration-300"
                style={{fontFamily: 'serif'}}
              >
                GET PROPOSAL
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mockup8Hero;
