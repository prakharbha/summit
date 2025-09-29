'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Mockup6Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageErrors, setImageErrors] = useState<{[key: number]: boolean}>({});
  
  const teamMembers = [
    {
      id: 1,
      name: "Joseph C. Negro",
      title: "Vice President of Remediation",
      responsibility: "Leading remediation services expansion",
      image: "/images/joseph-negro.png"
    },
    {
      id: 2,
      name: "Dermot P. Dillon", 
      title: "Vice President, Major Accounts",
      responsibility: "Managing strategic client relationships",
      image: "/images/dermot-dillon.png"
    },
    {
      id: 3,
      name: "Matthew Vetter",
      title: "Chief Operating Officer", 
      responsibility: "Overseeing daily operations",
      image: "/images/matt-vetter.png"
    },
    {
      id: 4,
      name: "Ron Bucca",
      title: "Chief Executive Officer",
      responsibility: "Strategic leadership and vision",
      image: "/images/ron-bucca.png"
    },
    {
      id: 5,
      name: "Lauren DiVello",
      title: "VP Sales & Business Development",
      responsibility: "Driving growth and partnerships", 
      image: "/images/lauren-divello.png"
    },
    {
      id: 6,
      name: "Joel Bernstein",
      title: "Senior Vice President",
      responsibility: "Executive leadership and strategy",
      image: "/images/joel-bernstein.png"
    }
  ];
  
  const slides = [
    { title: "Environmental", subtitle: "Drilling Excellence" },
    { title: "Geophysical", subtitle: "Investigation" },
    { title: "Site", subtitle: "Remediation" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [teamMembers.length]);

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
                  {slides[currentSlide % slides.length].title}
                </span>
                <span className="block font-bold text-summit-red">
                  {slides[currentSlide % slides.length].subtitle}
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

            {/* Team Member Indicators */}
            <div className="flex space-x-2 pt-4">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-summit-red scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Team Member Slider */}
        <div className="relative overflow-hidden bg-gradient-to-br from-summit-primary to-summit-secondary">
          <div className="h-full flex items-center justify-center p-8">
            <div className="relative">
              <div className="w-80 h-[30rem] lg:w-96 lg:h-[36rem] relative overflow-hidden rounded-2xl shadow-2xl bg-gray-100">
                {teamMembers.map((member, index) => (
                  <div
                    key={member.id}
                    className={`absolute inset-0 transition-all duration-700 transform ${
                      index === currentSlide
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-105'
                    }`}
                  >
                    {imageErrors[member.id] ? (
                      <div className="w-full h-full bg-gradient-to-br from-summit-primary to-summit-secondary flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                            </svg>
                          </div>
                          <p className="text-sm font-semibold">{member.name}</p>
                        </div>
                      </div>
                    ) : (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
                        onError={(e) => {
                          console.error('Failed to load image:', member.image);
                          setImageErrors(prev => ({ ...prev, [member.id]: true }));
                        }}
                        onLoad={() => {
                          console.log('Successfully loaded image:', member.image);
                        }}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-sm opacity-90 mb-2">{member.title}</p>
                      <p className="text-sm font-semibold text-summit-red">
                        {member.responsibility}
                      </p>
                      <Link href="https://www.linkedin.com/company/summit-drilling" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block">
                        <Image src="/images/linkedin-white.png" alt="LinkedIn" width={24} height={24} />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Team Member Carousel Indicators */}
              <div className="flex justify-center mt-8 space-x-3">
                {teamMembers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-summit-red scale-125'
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Leadership Text Overlay */}
          <div className="absolute top-8 left-8 right-8">
            <div className="text-center text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                Meet Our <span className="text-summit-red">Leadership</span>
              </h3>
              <p className="text-sm opacity-90">
                Individual responsibility for your experience
              </p>
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
