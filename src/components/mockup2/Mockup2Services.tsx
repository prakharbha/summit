import Image from 'next/image';
import Link from 'next/link';

const Mockup2Services = () => {
  const services = [
    {
      title: "Sonic Drilling",
      description: "Advanced sonic technology for precise, clean environmental drilling with minimal site disturbance.",
      image: "/images/bg-1.jpg",
      features: ["Precise core sampling", "Minimal environmental impact", "Faster penetration rates"]
    },
    {
      title: "Geophysical Services", 
      description: "Comprehensive subsurface investigation using cutting-edge geophysical techniques.",
      image: "/images/bg-2.jpg",
      features: ["Utility locating", "Ground penetrating radar", "Seismic analysis"]
    },
    {
      title: "Environmental Remediation",
      description: "Complete remediation solutions from assessment through site closure.",
      image: "/images/bg-3.jpg", 
      features: ["Site assessment", "Contamination removal", "Restoration services"]
    }
  ];

  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Minimal Header */}
        <div className="mb-20">
          <div className="w-16 h-1 bg-summit-red mb-8"></div>
          <h2 className="text-5xl lg:text-6xl font-light text-gray-900">
            Our <span className="font-bold text-summit-red">Services</span>
          </h2>
          <p className="text-xl text-gray-600 mt-8 max-w-2xl">
            Delivering comprehensive environmental solutions with precision and expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-32">
          {services.map((service, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative h-96 lg:h-[500px] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-summit-primary/20"></div>
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="space-y-6">
                  <div className="w-12 h-1 bg-summit-red"></div>
                  <h3 className="text-4xl font-light text-gray-900">
                    {service.title.split(' ').map((word, idx) => (
                      <span key={idx} className={idx === service.title.split(' ').length - 1 ? 'font-bold text-summit-red' : ''}>
                        {word}{' '}
                      </span>
                    ))}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-4">
                      <div className="w-1.5 h-1.5 bg-summit-primary"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={`/services/${service.title.toLowerCase().replace(' ', '-')}`}
                  className="inline-block text-summit-primary border-b border-summit-primary hover:border-summit-red hover:text-summit-red transition-all duration-300 font-medium"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-32 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h3 className="text-3xl font-light text-gray-900">
              Ready to start your <span className="font-bold text-summit-red">project?</span>
            </h3>
            <p className="text-lg text-gray-600">
              Contact our team to discuss your environmental drilling and remediation needs.
            </p>
            <Link
              href="/resources/start-a-project"
              className="inline-block bg-summit-red text-white px-8 py-4 text-lg font-medium hover:bg-summit-red-dark transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mockup2Services;
