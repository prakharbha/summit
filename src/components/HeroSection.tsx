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

const backgroundImages = [
  "/images/bg-2.jpg",
  "/images/bg-1.jpg",
  "/images/bg-3.jpg"
];

const HeroSection = () => {
  const [currentMember, setCurrentMember] = useState(0);
  const [currentBackground, setCurrentBackground] = useState(0);
  const [imageErrors, setImageErrors] = useState<{[key: number]: boolean}>({});

  useEffect(() => {
    const memberInterval = setInterval(() => {
      setCurrentMember((prev) => (prev + 1) % teamMembers.length);
    }, 4000);

    const backgroundInterval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);

    return () => {
      clearInterval(memberInterval);
      clearInterval(backgroundInterval);
    };
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1500 ${
              index === currentBackground ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt="Summit Drilling Background"
              fill
              className="object-cover scale-105"
              priority={index === 0}
            />
            {/* Lighter overlay to show more of the background */}
            <div className="absolute inset-0 bg-gradient-to-r from-summit-primary/50 to-summit-primary/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 min-h-[70vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center text-white">
            
            {/* Main Hero Content */}
            <div className="max-w-4xl mx-auto space-y-8">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-shadow">
                An Exceptional
                <span className="block text-summit-red drop-shadow-2xl">Experience</span>
              </h1>
              
              <div className="text-xl lg:text-2xl leading-relaxed space-y-6 max-w-3xl mx-auto">
                <p className="font-semibold text-shadow bg-black/20 backdrop-blur-sm rounded-lg p-6">
                  Summit's ability to manage a diverse range of complex projects safely, 
                  efficiently and with excellent results is characterized by their unique 
                  customer promise.
                </p>
                
                <p className="text-lg bg-black/10 backdrop-blur-sm rounded-lg p-4">
                  Maintaining 100% customer satisfaction is a primary goal at Summit and one 
                  that is taken seriously. Every member of the Summit team takes individual 
                  responsibility for your experience.
                </p>
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 pt-8 justify-center">
                <Link 
                  href="/resources/start-a-project"
                  className="bg-summit-red hover:bg-summit-red-dark text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg border-2 border-summit-red hover:border-summit-red-dark"
                >
                  Start a Project
                </Link>
                
                <Link 
                  href="/services"
                  className="bg-white/15 hover:bg-white/25 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 backdrop-blur-sm border-2 border-white/30 hover:border-white/50 text-lg"
                >
                  View Our Services
                </Link>
              </div>

            </div>
            
            {/* Background Carousel Indicators */}
            <div className="flex justify-center mt-12 space-x-3">
              {backgroundImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentBackground(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentBackground 
                      ? 'bg-summit-red scale-125' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gray Bar Section */}
      <div className="relative z-20 h-16 bg-summit-gray-bar">
        <Image
          src="/images/greybar-home.jpg"
          alt="Summit Drilling Equipment"
          fill
          className="object-cover object-center"
        />
      </div>
    </section>
  );
};

export default HeroSection;
