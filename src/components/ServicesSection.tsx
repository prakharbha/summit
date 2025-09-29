'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheckIcon, DocumentTextIcon, TruckIcon } from '@heroicons/react/24/outline';

interface ServiceCategory {
  title: string;
  description: string;
  services: {
    name: string;
    href: string;
  }[];
}

const serviceCategories: ServiceCategory[] = [
  {
    title: "Geophysics",
    description: "Advanced subsurface investigation techniques",
    services: [
      { name: "Geophysical Services", href: "/services/geophysical-services" },
      { name: "Utility Locating", href: "/services/utility-locating" },
      { name: "UST & Septic Detection", href: "/services/ust-septic-detection" },
      { name: "Borehole/Downhole Geophysics", href: "/services/borehole-geophysics" },
      { name: "Electrical Resistivity", href: "/services/electrical-resistivity" },
      { name: "Seismic Refraction", href: "/services/seismic-refraction" },
    ]
  },
  {
    title: "Drilling",
    description: "Comprehensive drilling solutions for every project",
    services: [
      { name: "Sonic Drilling", href: "/services/sonic-drilling" },
      { name: "Direct Push/Geoprobe", href: "/services/direct-push" },
      { name: "Injection Services", href: "/services/injection-services" },
      { name: "Equipment Roster", href: "/services/equipment-roster" },
      { name: "Drilling Techniques", href: "/services/drilling-techniques" },
      { name: "Support Services", href: "/services/support-services" },
    ]
  },
  {
    title: "Drilling Industries",
    description: "Specialized drilling for diverse industries",
    services: [
      { name: "Environmental", href: "/services/environmental" },
      { name: "PFAS", href: "/services/pfas" },
      { name: "Geotechnical", href: "/services/geotechnical" },
      { name: "Cathodic Protection", href: "/services/cathodic-protection" },
      { name: "Barge/Over Water", href: "/services/barge-over-water" },
      { name: "Aggregate", href: "/services/aggregate" },
    ]
  },
  {
    title: "Remediation",
    description: "Complete environmental remediation services",
    services: [
      { name: "Remediation Services", href: "/services/remediation" },
      { name: "Soil Excavation", href: "/services/soil-excavation" },
      { name: "Remediation Systems", href: "/services/remediation-systems" },
      { name: "UST/AST Removal", href: "/services/ust-ast-removal" },
      { name: "Landfill Services", href: "/services/landfill-services" },
      { name: "Shoreline Stabilization", href: "/services/shoreline-stabilization" },
      { name: "Demolition", href: "/services/demolition" },
    ]
  },
];

const featuredServices = [
  {
    title: "Health & Safety",
    description: "Our metrics-driven and behavior-based approach to health & safety prevents incidents by anticipating and reducing risks before they occur.",
    image: "/images/health-safety.png",
    href: "/safety/health-safety-programs",
    color: "from-summit-primary to-summit-secondary"
  },
  {
    title: "Start a Project",
    description: "Get a fast, accurate and competitive proposal. Access a veteran project manager. Use our simple online proposal form to easily upload your scope of work.",
    image: "/images/start-project.png",
    href: "/resources/start-a-project",
    color: "from-summit-red to-summit-red-dark"
  },
  {
    title: "Our Fleet",
    description: "Leverage the industry's best equipped and proactively maintained fleet. Summit Drilling continually invests in the growth and care of it's equipment ensuring success in the field.",
    image: "/images/our-fleet.png",
    href: "/services/equipment-roster",
    color: "from-summit-accent to-summit-primary"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="absolute inset-0 subtle-gradient-overlay"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Section Header with Red Accent */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-summit-primary mb-6">
            Our <span className="text-summit-red">Services</span>
          </h2>
          <div className="w-32 h-1 bg-summit-red mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive drilling, geophysical, and remediation solutions backed by decades of expertise 
            and cutting-edge technology for complex environmental projects.
          </p>
        </div>

        {/* Main Service Categories */}
        <div className="mb-20">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceCategories.map((category, index) => (
                <div key={index} className="card-gradient rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-white/50">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-summit-primary mb-3 border-b-2 border-summit-red pb-2">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {category.description}
                    </p>
                  </div>
                  
                  <ul className="space-y-3">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex}>
                        <Link 
                          href={service.href}
                          className="group flex items-center text-gray-700 hover:text-summit-red transition-colors duration-200 text-sm py-1"
                        >
                          <div className="w-2 h-2 bg-summit-red rounded-full mr-3 group-hover:bg-summit-red-dark transition-colors duration-200"></div>
                          <span className="font-medium group-hover:font-semibold">{service.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link 
                href="/services"
                className="summit-btn-primary inline-flex items-center text-lg px-8 py-4"
              >
                View Complete Service Directory
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Why Choose Summit */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-summit-primary mb-4">
              Why Choose <span className="text-summit-red">Summit</span>
            </h2>
            <p className="text-lg text-gray-600">
              Exceptional service backed by industry-leading expertise and commitment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {featuredServices.map((service, index) => (
              <Link 
                href={service.href}
                key={index}
                className="group summit-card overflow-hidden block hover:shadow-2xl"
              >
                <div className={`h-64 bg-gradient-to-br ${service.color} p-6 flex items-center justify-center relative overflow-hidden`}>
                  <div className="relative z-10">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={120}
                      height={120}
                      className="group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg"
                      priority={index < 3}
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  
                  {/* Decorative background pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-summit-primary mb-4 group-hover:text-summit-red transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center text-summit-red font-semibold group-hover:text-summit-red-dark transition-colors duration-300">
                    Learn More
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>

        {/* Sonic Drilling Spotlight */}
        <div className="mt-16">
          <div className="summit-card overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src="/images/rigs.jpg"
                  alt="Sonic Drilling Equipment"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-summit-primary/80 to-transparent" />
              </div>
              
              <div className="p-8 lg:p-12 flex items-center">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-summit-primary mb-4">
                    Sonic Drilling
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Sonic drilling is a safe, clean and a low-impact environmental drilling technique. 
                    Roto Sonic Boreholes are drilled, cored and cased by rotating and vibrating the rod, 
                    core barrel and casing at resonant sonic frequencies.
                  </p>
                  <Link 
                    href="/services/sonic-drilling"
                    className="summit-btn-secondary inline-flex items-center"
                  >
                    Read the full story
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
