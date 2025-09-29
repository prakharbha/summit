'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const services = {
    geophysics: [
      { name: 'Geophysical Services', href: '/services/geophysical-services' },
      { name: 'Utility Locating', href: '/services/utility-locating' },
      { name: 'UST & Septic Detection', href: '/services/ust-septic-detection' },
      { name: 'Borehole/Downhole Geophysics', href: '/services/borehole-geophysics' },
      { name: 'Electrical Resistivity', href: '/services/electrical-resistivity' },
      { name: 'Seismic Refraction', href: '/services/seismic-refraction' },
    ],
    drilling: [
      { name: 'Sonic Drilling', href: '/services/sonic-drilling' },
      { name: 'Direct Push/Geoprobe', href: '/services/direct-push' },
      { name: 'Injection Services', href: '/services/injection-services' },
      { name: 'Equipment Roster', href: '/services/equipment-roster' },
      { name: 'Drilling Techniques', href: '/services/drilling-techniques' },
      { name: 'Support Services', href: '/services/support-services' },
    ],
    industries: [
      { name: 'Environmental', href: '/services/environmental' },
      { name: 'PFAS', href: '/services/pfas' },
      { name: 'Geotechnical', href: '/services/geotechnical' },
      { name: 'Cathodic Protection', href: '/services/cathodic-protection' },
      { name: 'Barge/Over Water', href: '/services/barge-over-water' },
      { name: 'Aggregate', href: '/services/aggregate' },
    ],
    remediation: [
      { name: 'Remediation Services', href: '/services/remediation' },
      { name: 'Soil Excavation', href: '/services/soil-excavation' },
      { name: 'Remediation Systems', href: '/services/remediation-systems' },
      { name: 'UST/AST Removal', href: '/services/ust-ast-removal' },
      { name: 'Landfill Services', href: '/services/landfill-services' },
      { name: 'Shoreline Stabilization', href: '/services/shoreline-stabilization' },
      { name: 'Demolition', href: '/services/demolition' },
    ],
  };

  const MegaMenu = () => (
    <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-sm shadow-2xl border-t-4 border-summit-red z-50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold text-summit-red-dark mb-4 italic">Geophysics</h3>
            <ul className="space-y-2">
              {services.geophysics.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-summit-text-light hover:text-summit-primary transition-colors duration-200 font-bold italic"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-summit-red-dark mb-4 italic">Drilling</h3>
            <ul className="space-y-2 mb-6">
              {services.drilling.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-summit-text-light hover:text-summit-primary transition-colors duration-200 font-bold italic"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="text-lg font-bold text-summit-red-dark mb-4 italic">Drilling Industries</h3>
            <ul className="space-y-2">
              {services.industries.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-summit-text-light hover:text-summit-primary transition-colors duration-200 font-bold italic"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-summit-red-dark mb-4 italic">Remediation</h3>
            <ul className="space-y-2">
              {services.remediation.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-summit-text-light hover:text-summit-primary transition-colors duration-200 font-bold italic"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-summit-primary to-summit-accent p-6 rounded-xl text-white">
            <h3 className="text-xl font-bold mb-3">Ready to Start?</h3>
            <p className="mb-4 text-sm opacity-90">Get a fast, accurate and competitive proposal from our veteran project managers.</p>
            <Link 
              href="/resources/start-a-project"
              className="inline-block bg-summit-red hover:bg-summit-red-dark text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 text-sm"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <header className="relative">
      {/* Main Navigation */}
      <nav className="relative shadow-lg z-40 border-b-4 border-summit-red">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/greybar-home.jpg"
            alt="Header Background"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Light overlay for text visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-summit-primary/20 via-summit-secondary/15 to-summit-primary/20" />
        </div>
        
        {/* Navigation Content */}
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-24 lg:h-28">
            {/* Left Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="relative">
                <button
                  className="text-white hover:text-summit-red transition-colors duration-200 font-semibold"
                  onMouseEnter={() => setActiveDropdown('services')}
                >
                  Services
                </button>
              </div>
              
              <div className="relative group">
                <button className="text-white hover:text-summit-red transition-colors duration-200 font-semibold flex items-center">
                  Safety
                  <ChevronDownIcon className="h-4 w-4 ml-1" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-summit-secondary rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link href="/safety/experience-safety" className="block px-4 py-2 text-white hover:bg-summit-accent transition-colors">
                    Experience Safety
                  </Link>
                  <Link href="/safety/health-safety-programs" className="block px-4 py-2 text-white hover:bg-summit-accent transition-colors">
                    H&S Programs
                  </Link>
                  <Link href="/safety/safety-meetings" className="block px-4 py-2 text-white hover:bg-summit-accent transition-colors">
                    Safety Meetings
                  </Link>
                </div>
              </div>
              
              <div className="relative group">
                <button className="text-white hover:text-summit-red transition-colors duration-200 font-semibold flex items-center">
                  About Us
                  <ChevronDownIcon className="h-4 w-4 ml-1" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-summit-secondary rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link href="/about/company-news" className="block px-4 py-2 text-white hover:bg-summit-accent transition-colors">
                    Company News
                  </Link>
                  <Link href="/about/company-history" className="block px-4 py-2 text-white hover:bg-summit-accent transition-colors">
                    Company History
                  </Link>
                  <Link href="/about/customer-list" className="block px-4 py-2 text-white hover:bg-summit-accent transition-colors">
                    Customer List
                  </Link>
                </div>
              </div>
            </div>

            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
                  <Image
                    src="/images/summit-logo-blue.png"
                    alt="Summit Drilling"
                    width={300}
                    height={120}
                    className="h-16 w-auto lg:h-20"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Right Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="relative group">
                <button className="text-white hover:text-summit-red transition-colors duration-200 font-semibold flex items-center">
                  Resources
                  <ChevronDownIcon className="h-4 w-4 ml-1" />
                </button>
                <div className="absolute top-full right-0 mt-2 w-48 bg-summit-secondary rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link href="/resources/start-a-project" className="block px-4 py-2 text-white hover:bg-summit-accent transition-colors">
                    Start a Project
                  </Link>
                  <Link href="/resources/project-mark-out" className="block px-4 py-2 text-white hover:bg-summit-accent transition-colors">
                    Project Mark Out Form
                  </Link>
                </div>
              </div>
              
              <Link href="/careers" className="text-white hover:text-summit-red transition-colors duration-200 font-semibold">
                Careers
              </Link>
              
              <div className="relative group">
                <button className="text-white hover:text-summit-red transition-colors duration-200 font-semibold flex items-center">
                  Mockups
                  <ChevronDownIcon className="h-4 w-4 ml-1" />
                </button>
                <div className="absolute top-full right-0 mt-2 w-48 bg-summit-secondary rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link href="/" className="block px-4 py-2 text-white hover:bg-summit-accent transition-colors">
                    Current Design
                  </Link>
                  <Link href="/mockup" className="block px-4 py-2 text-white hover:bg-summit-accent transition-colors">
                    Alternative Mockup
                  </Link>
                  <Link href="/original" className="block px-4 py-2 text-white hover:bg-summit-accent transition-colors">
                    Original Website
                  </Link>
                </div>
              </div>
              
              <Link href="/contact" className="bg-summit-red hover:bg-summit-red-dark text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Contact
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-summit-red transition-colors duration-200"
              >
                {isMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
        </div>

        {/* Mega Menu */}
        {activeDropdown === 'services' && (
          <div 
            onMouseLeave={() => setActiveDropdown(null)}
            onMouseEnter={() => setActiveDropdown('services')}
          >
            <MegaMenu />
          </div>
        )}
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-summit-primary border-t border-summit-secondary">
          <div className="px-4 py-2 space-y-1">
            <Link href="/services" className="block px-3 py-2 text-white hover:bg-summit-secondary rounded-md transition-colors">
              Services
            </Link>
            <Link href="/safety" className="block px-3 py-2 text-white hover:bg-summit-secondary rounded-md transition-colors">
              Safety
            </Link>
            <Link href="/about" className="block px-3 py-2 text-white hover:bg-summit-secondary rounded-md transition-colors">
              About Us
            </Link>
            <Link href="/resources" className="block px-3 py-2 text-white hover:bg-summit-secondary rounded-md transition-colors">
              Resources
            </Link>
            <Link href="/careers" className="block px-3 py-2 text-white hover:bg-summit-secondary rounded-md transition-colors">
              Careers
            </Link>
            <Link href="/contact" className="block px-3 py-2 bg-summit-red hover:bg-summit-red-dark text-white rounded-md transition-colors font-semibold">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
