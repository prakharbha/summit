import Image from 'next/image';
import Link from 'next/link';

const Mockup2About = () => {
  const values = [
    {
      title: "Excellence",
      description: "Delivering exceptional results through meticulous attention to detail and innovative solutions."
    },
    {
      title: "Safety", 
      description: "Implementing comprehensive safety protocols to protect our team and your environment."
    },
    {
      title: "Innovation",
      description: "Utilizing cutting-edge technology and methods to achieve superior outcomes."
    },
    {
      title: "Reliability",
      description: "Building lasting partnerships through consistent performance and dependable service."
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="w-16 h-1 bg-summit-red"></div>
              <h2 className="text-5xl lg:text-6xl font-light text-gray-900">
                About <span className="font-bold text-summit-red">Summit</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Since 1985, Summit Drilling has established itself as a leader in environmental drilling, 
                geophysical services, and remediation. Our commitment to excellence drives every project, 
                ensuring exceptional outcomes for our clients.
              </p>
              
              <p>
                We combine decades of experience with innovative technology to tackle complex environmental 
                challenges. Our team's expertise and dedication have made us the trusted choice for 
                organizations across diverse industries.
              </p>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <Link
                href="/about/company-history"
                className="text-summit-primary border-b border-summit-primary hover:border-summit-red hover:text-summit-red transition-all duration-300 font-medium"
              >
                Our History
              </Link>
              <Link
                href="/contact"
                className="bg-summit-red text-white px-8 py-3 font-medium hover:bg-summit-red-dark transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] overflow-hidden">
              <Image
                src="/images/rigs.jpg"
                alt="Summit Drilling Equipment"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-summit-primary text-white p-6">
              <div className="text-center">
                <div className="text-2xl font-bold">Since 1985</div>
                <div className="text-sm opacity-90">Trusted Excellence</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="space-y-20">
          
          {/* Header */}
          <div className="text-center space-y-6">
            <div className="w-16 h-1 bg-summit-red mx-auto"></div>
            <h3 className="text-4xl lg:text-5xl font-light text-gray-900">
              Our <span className="font-bold text-summit-red">Values</span>
            </h3>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {values.map((value, index) => (
              <div key={index} className="space-y-6">
                <div className="space-y-4">
                  <div className="w-8 h-1 bg-summit-red"></div>
                  <h4 className="text-2xl font-light text-gray-900">{value.title}</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-32 py-20 bg-gray-50 -mx-4 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h3 className="text-4xl lg:text-5xl font-light text-gray-900">
              Experience the <span className="font-bold text-summit-red">Summit difference</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Partner with us for your next environmental drilling, geophysical, or remediation project.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/resources/start-a-project"
                className="bg-summit-red text-white px-10 py-4 text-lg font-medium hover:bg-summit-red-dark transition-all duration-300"
              >
                Start Your Project
              </Link>
              <Link
                href="/services"
                className="text-summit-primary border-b border-summit-primary hover:border-summit-red hover:text-summit-red transition-all duration-300 text-lg font-medium"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mockup2About;
