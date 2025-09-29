'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Mockup7Team = () => {
  const [currentMember, setCurrentMember] = useState(0);
  const [imageErrors, setImageErrors] = useState<{[key: number]: boolean}>({});

  const teamMembers = [
    {
      id: 1,
      name: "Joseph C. Negro",
      title: "Vice President of Remediation",
      responsibility: "Leading remediation services expansion",
      image: "/images/joseph-negro.png",
      heritage: "Bringing decades of environmental expertise to Summit's growing remediation division."
    },
    {
      id: 2,
      name: "Dermot P. Dillon", 
      title: "Vice President, Major Accounts",
      responsibility: "Managing strategic client relationships",
      image: "/images/dermot-dillon.png",
      heritage: "Fostering long-term partnerships that have defined Summit's reputation for excellence."
    },
    {
      id: 3,
      name: "Matthew Vetter",
      title: "Chief Operating Officer", 
      responsibility: "Overseeing daily operations",
      image: "/images/matt-vetter.png",
      heritage: "Ensuring operational excellence that upholds Summit's four-decade tradition of quality."
    },
    {
      id: 4,
      name: "Ron Bucca",
      title: "Chief Executive Officer",
      responsibility: "Strategic leadership and vision",
      image: "/images/ron-bucca.png",
      heritage: "Guiding Summit's continued growth while preserving the values established since 1985."
    },
    {
      id: 5,
      name: "Lauren DiVello",
      title: "VP Sales & Business Development",
      responsibility: "Driving growth and partnerships", 
      image: "/images/lauren-divello.png",
      heritage: "Expanding Summit's reach while maintaining the personal touch that clients have trusted for decades."
    },
    {
      id: 6,
      name: "Joel Bernstein",
      title: "Senior Vice President",
      responsibility: "Executive leadership and strategy",
      image: "/images/joel-bernstein.png",
      heritage: "Bridging Summit's rich history with innovative strategies for future success."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMember((prev) => (prev + 1) % teamMembers.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [teamMembers.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-amber-900 via-amber-800 to-summit-primary text-white relative overflow-hidden">
      
      {/* Vintage pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M0 0h100v100H0V0zm25 25v50h50V25H25zm25 45a20 20 0 1 1 0-40 20 20 0 0 1 0 40z'/%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        
        {/* Team Header */}
        <div className="text-center mb-16">
          <div className="inline-block border-8 border-amber-200 p-8 bg-amber-900/90">
            <div className="space-y-4">
              <div className="text-summit-red tracking-[0.3em] text-sm font-bold" style={{fontFamily: 'serif'}}>
                ◊ LEADERSHIP HERITAGE ◊
              </div>
              <h2 className="text-5xl font-bold text-amber-50 tracking-wider" style={{fontFamily: 'serif'}}>
                STEWARDS OF TRADITION
              </h2>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-px bg-amber-200"></div>
                <div className="w-3 h-3 border-2 border-amber-200 rotate-45"></div>
                <div className="w-16 h-px bg-amber-200"></div>
              </div>
              <p className="text-lg text-amber-200 max-w-2xl" style={{fontFamily: 'serif'}}>
                "Each leader carries forward Summit's legacy of excellence, ensuring our heritage guides every decision."
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Team Member Portrait */}
          <div className="text-center">
            <div className="relative inline-block">
              <div className="w-96 h-[32rem] lg:w-[28rem] lg:h-[36rem] mx-auto relative overflow-hidden bg-gray-100 border-8 border-amber-200">
                {teamMembers.map((member, index) => (
                  <div
                    key={member.id}
                    className={`absolute inset-0 transition-all duration-1000 transform ${
                      index === currentMember
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-105'
                    }`}
                  >
                    {imageErrors[member.id] ? (
                      <div className="w-full h-full bg-gradient-to-br from-amber-900 to-amber-800 flex items-center justify-center">
                        <div className="text-center text-amber-200">
                          <div className="w-16 h-16 bg-amber-200/20 rounded-full flex items-center justify-center mx-auto mb-2">
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
                        className="w-full h-full object-cover object-top sepia"
                        style={{filter: 'sepia(20%) brightness(1.1)'}}
                        onError={(e) => {
                          console.error('Failed to load image:', member.image);
                          setImageErrors(prev => ({ ...prev, [member.id]: true }));
                        }}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 via-transparent to-transparent" />
                    
                    {/* Vintage photo label */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-amber-50">
                      <div className="bg-amber-900/90 p-4 border-4 border-amber-200">
                        <h3 className="text-xl font-bold mb-1" style={{fontFamily: 'serif'}}>{member.name}</h3>
                        <p className="text-sm opacity-90 mb-2" style={{fontFamily: 'serif'}}>{member.title}</p>
                        <p className="text-sm font-semibold text-summit-red" style={{fontFamily: 'serif'}}>
                          {member.responsibility}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Vintage photo mounting corners */}
                <div className="absolute -top-3 -left-3 w-6 h-6 bg-amber-200 transform rotate-45"></div>
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-amber-200 transform rotate-45"></div>
                <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-amber-200 transform rotate-45"></div>
                <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-amber-200 transform rotate-45"></div>
              </div>
              
              {/* Team Member Indicators */}
              <div className="flex justify-center mt-8 space-x-3">
                {teamMembers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentMember(index)}
                    className={`w-4 h-4 border-2 border-amber-200 transition-all duration-300 ${
                      index === currentMember
                        ? 'bg-summit-red scale-125'
                        : 'bg-transparent hover:bg-amber-200'
                    }`}
                    style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Heritage Story */}
          <div className="space-y-8">
            <div className="border-8 border-amber-200 p-8 bg-amber-900/90">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-amber-50 tracking-wider" style={{fontFamily: 'serif'}}>
                  LEADERSHIP WITH HERITAGE
                </h3>
                
                <p className="text-lg text-amber-200 leading-relaxed" style={{fontFamily: 'serif'}}>
                  {teamMembers[currentMember].heritage}
                </p>
                
                <div className="border-t-2 border-amber-200 pt-6">
                  <h4 className="text-xl font-bold text-summit-red mb-4" style={{fontFamily: 'serif'}}>
                    Our Founding Principles
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-summit-red rotate-45 mr-4"></div>
                      <span className="text-amber-200" style={{fontFamily: 'serif'}}>
                        Individual responsibility for exceptional experiences
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-summit-red rotate-45 mr-4"></div>
                      <span className="text-amber-200" style={{fontFamily: 'serif'}}>
                        Unwavering commitment to safety excellence
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-summit-red rotate-45 mr-4"></div>
                      <span className="text-amber-200" style={{fontFamily: 'serif'}}>
                        Continuous innovation with traditional values
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-summit-red rotate-45 mr-4"></div>
                      <span className="text-amber-200" style={{fontFamily: 'serif'}}>
                        Environmental stewardship and responsibility
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Heritage */}
            <div className="text-center">
              <Link
                href="/contact"
                className="inline-block bg-summit-red text-white px-10 py-4 text-lg font-bold tracking-wider border-4 border-amber-200 hover:bg-transparent hover:text-amber-200 transition-all duration-300"
                style={{fontFamily: 'serif'}}
              >
                CONNECT WITH OUR TEAM
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mockup7Team;
