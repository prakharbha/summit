'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Mockup9Team = () => {
  const [currentMember, setCurrentMember] = useState(0);
  const [imageErrors, setImageErrors] = useState<{[key: number]: boolean}>({});

  const teamMembers = [
    {
      id: 1,
      name: "Joseph C. Negro",
      title: "Vice President of Remediation",
      responsibility: "Leading remediation services expansion",
      image: "/images/joseph-negro.png",
      expertise: "Environmental restoration and remediation strategy"
    },
    {
      id: 2,
      name: "Dermot P. Dillon", 
      title: "Vice President, Major Accounts",
      responsibility: "Managing strategic client relationships",
      image: "/images/dermot-dillon.png",
      expertise: "Strategic partnerships and client success"
    },
    {
      id: 3,
      name: "Matthew Vetter",
      title: "Chief Operating Officer", 
      responsibility: "Overseeing daily operations",
      image: "/images/matt-vetter.png",
      expertise: "Operational excellence and process optimization"
    },
    {
      id: 4,
      name: "Ron Bucca",
      title: "Chief Executive Officer",
      responsibility: "Strategic leadership and vision",
      image: "/images/ron-bucca.png",
      expertise: "Strategic vision and company leadership"
    },
    {
      id: 5,
      name: "Lauren DiVello",
      title: "VP Sales & Business Development",
      responsibility: "Driving growth and partnerships", 
      image: "/images/lauren-divello.png",
      expertise: "Business development and market expansion"
    },
    {
      id: 6,
      name: "Joel Bernstein",
      title: "Senior Vice President",
      responsibility: "Executive leadership and strategy",
      image: "/images/joel-bernstein.png",
      expertise: "Executive strategy and organizational development"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMember((prev) => (prev + 1) % teamMembers.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [teamMembers.length]);

  return (
    <section className="py-32 relative overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-summit-primary/5 via-transparent to-summit-red/5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-summit-primary/10 to-summit-red/10 backdrop-blur-lg rounded-full border border-white/30 mb-8">
            <span className="text-sm font-medium text-gray-700">Leadership Excellence</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-thin text-gray-900 mb-8">
            Expert
            <span className="block font-light bg-gradient-to-r from-summit-primary to-summit-red bg-clip-text text-transparent">
              Leadership
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Our experienced leadership team brings decades of expertise in environmental 
            drilling, geophysics, and remediation services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Team Member Showcase */}
          <div className="relative">
            
            {/* Main Profile Card */}
            <div className="backdrop-blur-xl bg-white/70 rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
              
              {/* Profile Image Area */}
              <div className="relative h-96 bg-gradient-to-br from-summit-primary/20 to-summit-red/20">
                {teamMembers.map((member, index) => (
                  <div
                    key={member.id}
                    className={`absolute inset-0 transition-all duration-700 ${
                      index === currentMember ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    {imageErrors[member.id] ? (
                      <div className="w-full h-full bg-gradient-to-br from-summit-primary/30 to-summit-red/30 flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-lg">
                            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                            </svg>
                          </div>
                          <p className="font-medium">{member.name}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="relative w-full h-full">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-top"
                          onError={(e) => {
                            console.error('Failed to load image:', member.image);
                            setImageErrors(prev => ({ ...prev, [member.id]: true }));
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Floating Role Badge */}
                <div className="absolute top-6 left-6">
                  <div className="backdrop-blur-xl bg-white/80 rounded-xl px-4 py-2 border border-white/40">
                    <span className="text-sm font-medium text-gray-700">Leadership Team</span>
                  </div>
                </div>
              </div>

              {/* Profile Info */}
              <div className="p-8 space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-light text-gray-900">
                    {teamMembers[currentMember].name}
                  </h3>
                  <p className="text-lg font-medium bg-gradient-to-r from-summit-primary to-summit-red bg-clip-text text-transparent">
                    {teamMembers[currentMember].title}
                  </p>
                  <p className="text-gray-600 font-light">
                    {teamMembers[currentMember].expertise}
                  </p>
                </div>

                {/* LinkedIn Connection */}
                <div className="pt-4 border-t border-gray-200">
                  <Link 
                    href="https://www.linkedin.com/company/summit-drilling" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-gray-600 hover:text-summit-primary transition-colors duration-300"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    Connect on LinkedIn
                  </Link>
                </div>
              </div>
            </div>

            {/* Navigation Indicators */}
            <div className="flex justify-center mt-8 space-x-3">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentMember(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentMember
                      ? 'bg-gradient-to-r from-summit-primary to-summit-red scale-125'
                      : 'bg-white/60 border border-gray-300 hover:bg-gray-200'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Leadership Philosophy */}
          <div className="space-y-8">
            
            {/* Main Philosophy Card */}
            <div className="backdrop-blur-xl bg-white/70 rounded-3xl border border-white/20 shadow-2xl p-10">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-summit-red/10 to-summit-primary/10 backdrop-blur-lg rounded-full border border-white/30">
                    <span className="text-sm font-medium text-gray-700">Our Philosophy</span>
                  </div>
                  
                  <h3 className="text-3xl font-light text-gray-900">
                    Individual Responsibility for
                    <span className="block bg-gradient-to-r from-summit-primary to-summit-red bg-clip-text text-transparent font-normal">
                      Excellence
                    </span>
                  </h3>
                  
                  <p className="text-lg text-gray-600 font-light leading-relaxed">
                    Every member of the Summit team takes individual responsibility for delivering 
                    an exceptional customer experience. This principle guides every decision and 
                    drives our commitment to excellence.
                  </p>
                </div>

                {/* Core Values */}
                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-gray-900">Core Values</h4>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { icon: "🎯", title: "Customer Focus", desc: "Exceptional experiences as our primary objective" },
                      { icon: "🛡️", title: "Safety Excellence", desc: "Metrics-driven safety approach in all operations" },
                      { icon: "🌱", title: "Environmental Stewardship", desc: "Responsible practices protecting our environment" },
                      { icon: "⚡", title: "Innovation", desc: "Continuous improvement through technology and process" }
                    ].map((value, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 backdrop-blur-lg bg-white/40 rounded-2xl border border-white/30">
                        <div className="text-2xl">{value.icon}</div>
                        <div>
                          <h5 className="font-medium text-gray-900 mb-1">{value.title}</h5>
                          <p className="text-sm text-gray-600 font-light">{value.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="backdrop-blur-xl bg-gradient-to-r from-summit-primary/20 to-summit-red/20 rounded-3xl border border-white/30 shadow-xl p-8 text-center">
              <h4 className="text-xl font-light text-gray-900 mb-4">
                Ready to Work with Our Team?
              </h4>
              <p className="text-gray-600 font-light mb-6">
                Connect with our leadership to discuss your project requirements.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-summit-red to-summit-red-dark text-white rounded-2xl hover:shadow-xl hover:shadow-summit-red/25 transition-all duration-300 transform hover:scale-105"
              >
                <span className="font-medium">Contact Leadership</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mockup9Team;
