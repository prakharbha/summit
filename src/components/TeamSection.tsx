'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface TeamMember {
  id: number;
  name: string;
  title: string;
  image: string;
  responsibility: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Joseph C. Negro",
    title: "Vice President of Remediation",
    image: "/images/joseph-negro.png",
    responsibility: "I'm responsible for your experience"
  },
  {
    id: 2,
    name: "Dermot P. Dillon",
    title: "Vice President, Major Accounts",
    image: "/images/dermot-dillon.png",
    responsibility: "I'm responsible for your experience"
  },
  {
    id: 3,
    name: "Matthew Vetter",
    title: "Chief Operating Officer",
    image: "/images/matt-vetter.png",
    responsibility: "I'm responsible for your experience"
  },
  {
    id: 4,
    name: "Ron Bucca",
    title: "Chief Executive Officer",
    image: "/images/ron-bucca.png",
    responsibility: "I'm responsible for your experience"
  },
  {
    id: 5,
    name: "Lauren DiVello",
    title: "VP Sales & Business Development",
    image: "/images/lauren-divello.png",
    responsibility: "I'm responsible for your experience"
  },
  {
    id: 6,
    name: "Joel Bernstein",
    title: "Senior Vice President",
    image: "/images/joel-bernstein.png",
    responsibility: "I'm responsible for your experience"
  }
];

const TeamSection = () => {
  const [currentMember, setCurrentMember] = useState(0);
  const [imageErrors, setImageErrors] = useState<{[key: number]: boolean}>({});

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMember((prev) => (prev + 1) % teamMembers.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-gradient-to-br from-summit-primary via-summit-secondary to-summit-accent text-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Meet Our Leadership Team
          </h2>
          <div className="w-24 h-1 bg-summit-red mx-auto mb-4"></div>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Every member of the Summit team takes individual responsibility for your experience. 
            Our leadership is committed to delivering exceptional results on every project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Team Member Showcase */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block">
              <div className="w-96 h-[32rem] lg:w-[28rem] lg:h-[36rem] mx-auto lg:mx-0 relative overflow-hidden rounded-2xl shadow-2xl bg-gray-100">
                {teamMembers.map((member, index) => (
                  <div
                    key={member.id}
                    className={`absolute inset-0 transition-all duration-700 transform ${
                      index === currentMember 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-105'
                    }`}
                  >
                    {imageErrors[member.id] ? (
                      <div className="w-full h-full bg-gradient-to-br from-summit-red to-summit-red-dark flex items-center justify-center">
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
                    </div>
                  </div>
                ))}
              </div>
              
              {/* LinkedIn Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-full shadow-lg">
                <Link 
                  href="https://www.linkedin.com/company/summit-drilling" 
                  target="_blank"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Team Member Indicators */}
            <div className="flex justify-center lg:justify-start mt-6 space-x-2">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentMember(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentMember 
                      ? 'bg-summit-red scale-125' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Leadership Values */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl lg:text-3xl font-bold text-summit-red">
                Leadership That Delivers
              </h3>
              
              <p className="text-base lg:text-lg leading-relaxed">
                Our experienced leadership team brings decades of expertise in environmental 
                drilling, geophysics, and remediation. Each leader is committed to maintaining 
                Summit's reputation for excellence and innovation.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-3">
              <h4 className="text-xl font-bold text-summit-red">Our Values</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-summit-red rounded-full mr-3"></div>
                  <span>Individual responsibility for your experience</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-summit-red rounded-full mr-3"></div>
                  <span>Commitment to continuous improvement</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-summit-red rounded-full mr-3"></div>
                  <span>Safety-first approach on every project</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-summit-red rounded-full mr-3"></div>
                  <span>Environmental stewardship and responsibility</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
