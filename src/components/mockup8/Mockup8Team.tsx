'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const Mockup8Team = () => {
  const [currentMember, setCurrentMember] = useState(0);
  const [imageErrors, setImageErrors] = useState<{[key: number]: boolean}>({});

  const teamMembers = [
    {
      id: 1,
      name: "Joseph C. Negro",
      title: "Vice President of Remediation",
      responsibility: "Leading remediation services expansion",
      image: "/images/joseph-negro.png",
      quote: "Four decades of environmental expertise drives our remediation excellence."
    },
    {
      id: 2,
      name: "Dermot P. Dillon", 
      title: "Vice President, Major Accounts",
      responsibility: "Managing strategic client relationships",
      image: "/images/dermot-dillon.png",
      quote: "Long-term partnerships built on trust and exceptional service delivery."
    },
    {
      id: 3,
      name: "Matthew Vetter",
      title: "Chief Operating Officer", 
      responsibility: "Overseeing daily operations",
      image: "/images/matt-vetter.png",
      quote: "Operational excellence ensuring every project meets Summit's high standards."
    },
    {
      id: 4,
      name: "Ron Bucca",
      title: "Chief Executive Officer",
      responsibility: "Strategic leadership and vision",
      image: "/images/ron-bucca.png",
      quote: "Guiding Summit's growth while preserving our founding principles since 1985."
    },
    {
      id: 5,
      name: "Lauren DiVello",
      title: "VP Sales & Business Development",
      responsibility: "Driving growth and partnerships", 
      image: "/images/lauren-divello.png",
      quote: "Expanding Summit's reach while maintaining our personal service approach."
    },
    {
      id: 6,
      name: "Joel Bernstein",
      title: "Senior Vice President",
      responsibility: "Executive leadership and strategy",
      image: "/images/joel-bernstein.png",
      quote: "Bridging Summit's rich heritage with innovative strategies for the future."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMember((prev) => (prev + 1) % teamMembers.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [teamMembers.length]);

  return (
    <section className="py-12 bg-gray-50 border-b-4 border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Newspaper-style header */}
        <div className="text-center mb-8 border-b-2 border-gray-800 pb-4">
          <h2 className="text-3xl font-bold text-gray-900" style={{fontFamily: 'serif'}}>
            EXECUTIVE PROFILES
          </h2>
          <div className="text-sm text-gray-600 mt-2">
            Meet the leadership team steering Summit's continued success
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Featured Executive */}
          <div className="space-y-6">
            
            {/* Profile Card */}
            <div className="border-4 border-gray-800 bg-white">
              
              {/* Header */}
              <div className="bg-gray-800 text-white p-4">
                <h3 className="text-lg font-bold" style={{fontFamily: 'serif'}}>
                  FEATURED EXECUTIVE
                </h3>
              </div>

              <div className="p-6 space-y-4">
                
                {/* Portrait */}
                <div className="relative w-48 h-64 mx-auto bg-gray-200 border-2 border-gray-800">
                  {teamMembers.map((member, index) => (
                    <div
                      key={member.id}
                      className={`absolute inset-0 transition-all duration-700 ${
                        index === currentMember ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      {imageErrors[member.id] ? (
                        <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                          <div className="text-center text-gray-600">
                            <div className="w-12 h-12 bg-gray-400 rounded-full mx-auto mb-2"></div>
                            <p className="text-xs font-semibold">{member.name}</p>
                          </div>
                        </div>
                      ) : (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-top grayscale"
                          onError={(e) => {
                            console.error('Failed to load image:', member.image);
                            setImageErrors(prev => ({ ...prev, [member.id]: true }));
                          }}
                        />
                      )}
                    </div>
                  ))}
                  
                  {/* Photo caption */}
                  <div className="absolute -bottom-2 left-0 right-0 bg-white border-2 border-gray-800 p-2 text-center">
                    <div className="text-xs font-bold text-gray-900">
                      {teamMembers[currentMember].name}
                    </div>
                  </div>
                </div>

                {/* Profile Info */}
                <div className="text-center space-y-3">
                  <h4 className="text-xl font-bold text-gray-900" style={{fontFamily: 'serif'}}>
                    {teamMembers[currentMember].name}
                  </h4>
                  <div className="text-summit-red font-semibold">
                    {teamMembers[currentMember].title}
                  </div>
                  <div className="text-sm text-gray-600">
                    {teamMembers[currentMember].responsibility}
                  </div>
                </div>

                {/* Quote */}
                <div className="border-l-4 border-gray-800 pl-4 bg-gray-50 p-4">
                  <p className="text-gray-800 italic" style={{fontFamily: 'serif'}}>
                    "{teamMembers[currentMember].quote}"
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-2">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentMember(index)}
                  className={`w-3 h-3 border-2 border-gray-800 transition-all duration-300 ${
                    index === currentMember ? 'bg-summit-red' : 'bg-white hover:bg-gray-200'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Leadership Philosophy */}
          <div className="space-y-6">
            
            {/* Philosophy Box */}
            <div className="border-4 border-gray-800 bg-white">
              <div className="bg-summit-red text-white p-4">
                <h3 className="text-lg font-bold" style={{fontFamily: 'serif'}}>
                  LEADERSHIP PHILOSOPHY
                </h3>
              </div>

              <div className="p-6 space-y-4">
                <h4 className="text-xl font-bold text-gray-900" style={{fontFamily: 'serif'}}>
                  Individual Responsibility for Excellence
                </h4>
                
                <p className="text-gray-700 leading-relaxed" style={{fontFamily: 'serif'}}>
                  Since 1985, Summit's leadership philosophy has remained constant: every team member 
                  takes individual responsibility for delivering an exceptional customer experience. 
                  This principle guides every decision and drives our commitment to excellence.
                </p>

                <div className="border-t border-gray-300 pt-4">
                  <h5 className="font-bold text-gray-900 mb-3">Core Leadership Values:</h5>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-summit-red mr-3"></div>
                      <span>Customer satisfaction as primary objective</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-summit-primary mr-3"></div>
                      <span>Safety-first approach in all operations</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-summit-red mr-3"></div>
                      <span>Continuous improvement and innovation</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-summit-primary mr-3"></div>
                      <span>Environmental stewardship and responsibility</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Company Stats */}
            <div className="border-4 border-gray-800 bg-white">
              <div className="bg-summit-primary text-white p-4">
                <h3 className="text-lg font-bold" style={{fontFamily: 'serif'}}>
                  LEADERSHIP EXPERIENCE
                </h3>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="border-2 border-gray-300 p-4">
                    <div className="text-2xl font-bold text-summit-red">6</div>
                    <div className="text-xs text-gray-600">Executive Leaders</div>
                  </div>
                  <div className="border-2 border-gray-300 p-4">
                    <div className="text-2xl font-bold text-summit-primary">150+</div>
                    <div className="text-xs text-gray-600">Combined Years Experience</div>
                  </div>
                  <div className="border-2 border-gray-300 p-4">
                    <div className="text-2xl font-bold text-summit-red">40</div>
                    <div className="text-xs text-gray-600">Years Company Heritage</div>
                  </div>
                  <div className="border-2 border-gray-300 p-4">
                    <div className="text-2xl font-bold text-summit-primary">100%</div>
                    <div className="text-xs text-gray-600">Customer Satisfaction Goal</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mockup8Team;
