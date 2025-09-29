import Image from 'next/image';
import Link from 'next/link';

const MockupServices = () => {
  const services = [
    {
      icon: "/images/health-safety.png",
      title: "Sonic Drilling",
      description: "Advanced sonic drilling technology for clean, efficient, and precise environmental drilling projects.",
      features: ["Low impact drilling", "Continuous core samples", "Faster penetration", "Minimal disturbance"],
      color: "from-summit-primary to-summit-secondary"
    },
    {
      icon: "/images/start-project.png", 
      title: "Geophysical Services",
      description: "Comprehensive subsurface investigation using state-of-the-art geophysical techniques.",
      features: ["Utility locating", "Ground penetrating radar", "Seismic refraction", "Electrical resistivity"],
      color: "from-summit-red to-summit-red-dark"
    },
    {
      icon: "/images/our-fleet.png",
      title: "Remediation",
      description: "Complete environmental remediation services from assessment to site closure.",
      features: ["Soil excavation", "Groundwater treatment", "UST removal", "Site restoration"],
      color: "from-summit-accent to-summit-primary"
    }
  ];

  const additionalServices = [
    "Direct Push/Geoprobe",
    "Injection Services", 
    "Cathodic Protection",
    "Barge/Over Water",
    "PFAS Services",
    "Aggregate Services",
    "Demolition",
    "Shoreline Stabilization"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-summit-primary mb-6">
            Our <span className="text-summit-red">Services</span>
          </h2>
          <div className="w-32 h-1 bg-summit-red mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive environmental solutions delivered with expertise and innovation
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="summit-card overflow-hidden h-full">
                {/* Service Header */}
                <div className={`bg-gradient-to-br ${service.color} p-8 text-white relative overflow-hidden`}>
                  <div className="relative z-10 text-center">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={80}
                      height={80}
                      className="mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                    />
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>
                </div>

                {/* Service Content */}
                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-summit-red rounded-full mr-3"></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/services/${service.title.toLowerCase().replace(' ', '-')}`}
                    className="inline-flex items-center text-summit-red hover:text-summit-red-dark font-semibold group-hover:translate-x-1 transition-all duration-300"
                  >
                    Learn More
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services Grid */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-summit-primary mb-8 text-center">
            Additional Specialized Services
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {additionalServices.map((service, index) => (
              <Link
                key={index}
                href={`/services/${service.toLowerCase().replace(/[\s/]/g, '-')}`}
                className="group p-4 rounded-lg hover:bg-summit-primary hover:text-white transition-all duration-300 text-center border border-gray-200 hover:border-summit-primary"
              >
                <div className="text-sm font-medium group-hover:font-semibold">
                  {service}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Featured Equipment */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-summit-primary to-summit-secondary rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
              <div className="p-12 text-white">
                <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                  Industry-Leading <span className="text-summit-red">Equipment</span>
                </h3>
                <p className="text-lg mb-8 opacity-90">
                  Our modern fleet of drilling rigs and specialized equipment ensures efficient, 
                  safe operations for projects of any scale or complexity.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <div className="text-3xl font-bold text-summit-red">50+</div>
                    <div className="text-sm opacity-80">Drilling Rigs</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-summit-red">100%</div>
                    <div className="text-sm opacity-80">Maintained Fleet</div>
                  </div>
                </div>
                <Link
                  href="/services/equipment-roster"
                  className="summit-btn-primary inline-flex items-center"
                >
                  View Our Fleet
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className="relative h-96 lg:h-auto">
                <Image
                  src="/images/rigs.jpg"
                  alt="Summit Drilling Equipment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MockupServices;
