'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Mockup9Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Sonic Drilling",
      description: "Advanced sonic technology for precise environmental drilling with minimal site impact.",
      features: ["Continuous core sampling", "Low environmental impact", "Faster penetration rates", "Superior sample quality"],
      image: "/images/bg-1.jpg",
      gradient: "from-summit-primary/20 to-summit-primary/10"
    },
    {
      title: "Geophysical Services", 
      description: "Comprehensive subsurface investigation using cutting-edge geophysical techniques.",
      features: ["Utility locating", "Ground penetrating radar", "Seismic analysis", "Electrical resistivity"],
      image: "/images/bg-2.jpg",
      gradient: "from-summit-red/20 to-summit-red/10"
    },
    {
      title: "Environmental Remediation",
      description: "Complete site restoration solutions from assessment through final cleanup.",
      features: ["Site assessment", "Contamination removal", "Groundwater treatment", "Restoration services"],
      image: "/images/bg-3.jpg",
      gradient: "from-summit-accent/20 to-summit-accent/10"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-summit-primary/10 to-summit-red/10 backdrop-blur-lg rounded-full border border-white/30 mb-8">
            <span className="text-sm font-medium text-gray-700">Our Expertise</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-thin text-gray-900 mb-8">
            Environmental
            <span className="block font-light bg-gradient-to-r from-summit-primary to-summit-red bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Delivering precision environmental services through advanced technology 
            and innovative methodologies.
          </p>
        </div>

        {/* Services Navigation */}
        <div className="flex justify-center mb-16">
          <div className="backdrop-blur-xl bg-white/60 rounded-2xl p-2 border border-white/30">
            <div className="flex space-x-1">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setActiveService(index)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeService === index
                      ? 'bg-gradient-to-r from-summit-primary to-summit-red text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                  }`}
                >
                  {service.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Active Service Display */}
        <div className="backdrop-blur-xl bg-white/70 rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Content Side */}
            <div className="p-12 lg:p-16 space-y-8">
              <div className="space-y-6">
                <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${services[activeService].gradient} backdrop-blur-lg rounded-full border border-white/30`}>
                  <div className="w-2 h-2 bg-gradient-to-r from-summit-primary to-summit-red rounded-full mr-3"></div>
                  <span className="text-sm font-medium text-gray-700">Featured Service</span>
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-light text-gray-900">
                  {services[activeService].title}
                </h3>
                
                <p className="text-lg text-gray-600 font-light leading-relaxed">
                  {services[activeService].description}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <h4 className="text-lg font-medium text-gray-900">Key Capabilities</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services[activeService].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-summit-primary to-summit-red rounded-full"></div>
                      <span className="text-gray-700 font-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-6">
                <Link
                  href={`/services/${services[activeService].title.toLowerCase().replace(' ', '-')}`}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-summit-red to-summit-red-dark text-white rounded-2xl hover:shadow-xl hover:shadow-summit-red/25 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="font-medium">Learn More</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Visual Side */}
            <div className="relative h-96 lg:h-auto">
              <div className="absolute inset-0">
                <Image
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  fill
                  className="object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${services[activeService].gradient} backdrop-blur-[1px]`}></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="backdrop-blur-xl bg-white/80 rounded-2xl p-8 border border-white/40 shadow-2xl text-center max-w-xs">
                  <div className="text-2xl mb-4">
                    {activeService === 0 ? '🎯' : activeService === 1 ? '🔬' : '♻️'}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Precision Technology</h4>
                  <p className="text-sm text-gray-600 font-light">
                    Advanced equipment ensuring exceptional results
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="backdrop-blur-xl bg-gradient-to-r from-white/60 to-white/40 rounded-3xl p-12 border border-white/30 shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
              Ready to Begin Your
              <span className="block bg-gradient-to-r from-summit-primary to-summit-red bg-clip-text text-transparent font-normal">
                Environmental Project?
              </span>
            </h3>
            
            <p className="text-lg text-gray-600 font-light mb-8 max-w-2xl mx-auto">
              Connect with our expert team to discuss your specific requirements 
              and discover how Summit can deliver exceptional results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/resources/start-a-project"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-summit-red to-summit-red-dark text-white rounded-2xl hover:shadow-xl hover:shadow-summit-red/25 transition-all duration-300 transform hover:scale-105"
              >
                <span className="font-medium">Start Your Project</span>
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 backdrop-blur-lg bg-white/50 text-gray-700 rounded-2xl border border-white/30 hover:bg-white/70 transition-all duration-300 hover:scale-105"
              >
                <span className="font-medium">Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mockup9Services;
