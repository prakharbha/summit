'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Mockup10Team = () => {
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
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="backdrop-blur-xl bg-white/60 rounded-2xl p-4 border border-white/30 inline-block mb-8">
            <span className="text-sm font-medium text-gray-700">Leadership Excellence</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-extralight text-gray-900 mb-8 leading-tight">
            Expert
            <span className="block font-light bg-gradient-to-r from-summit-primary to-summit-red bg-clip-text text-transparent">
              Leadership Team
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Team Member Display */}
          <div className="relative">
            <div className="backdrop-blur-xl bg-white/60 rounded-3xl border border-white/30 shadow-2xl overflow-hidden">
              
              {/* Image Area */}
              <div className="relative h-96 bg-gradient-to-br from-summit-primary/10 to-summit-red/10">
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
                          <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-lg">
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
              </div>

              {/* Member Info */}
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-light text-gray-900">
                  {teamMembers[currentMember].name}
                </h3>
                <p className="text-lg bg-gradient-to-r from-summit-primary to-summit-red bg-clip-text text-transparent font-medium">
                  {teamMembers[currentMember].title}
                </p>
                <p className="text-gray-600 font-light">
                  {teamMembers[currentMember].expertise}
                </p>
              </div>
            </div>

            {/* Navigation */}
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

          {/* Leadership Content */}
          <div className="space-y-8">
            <div className="backdrop-blur-xl bg-white/60 rounded-3xl border border-white/30 shadow-xl p-10">
              <h3 className="text-3xl font-light text-gray-900 mb-6">
                Individual Responsibility for
                <span className="block bg-gradient-to-r from-summit-primary to-summit-red bg-clip-text text-transparent font-normal">
                  Excellence
                </span>
              </h3>
              
              <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
                Every member of the Summit team takes individual responsibility for delivering 
                an exceptional customer experience. This principle guides every decision and 
                drives our commitment to excellence.
              </p>

              {/* Values */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: "🎯", title: "Customer Focus" },
                  { icon: "🛡️", title: "Safety Excellence" },
                  { icon: "🌱", title: "Environmental Stewardship" },
                  { icon: "⚡", title: "Innovation" }
                ].map((value, index) => (
                  <div key={index} className="backdrop-blur-lg bg-white/40 rounded-2xl p-4 border border-white/30">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{value.icon}</span>
                      <span className="font-medium text-gray-900">{value.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="backdrop-blur-xl bg-gradient-to-r from-summit-primary/20 to-summit-red/20 rounded-3xl border border-white/30 p-8 text-center">
              <h4 className="text-xl font-light text-gray-900 mb-4">
                Connect with Our Leadership
              </h4>
              <Link
                href="/contact"
                className="inline-flex items-center backdrop-blur-xl bg-gradient-to-r from-summit-red/90 to-summit-red-dark/90 text-white rounded-2xl px-8 py-4 border border-white/30 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Contact Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mockup10Team;
