import Image from 'next/image';
import Link from 'next/link';

const MockupAbout = () => {
  const values = [
    {
      icon: "👥",
      title: "Client-Centric Approach", 
      description: "Your experience is our priority, from initial consultation to project completion."
    },
    {
      icon: "🛡️",
      title: "Safety Excellence",
      description: "Metrics-driven and behavior-based safety programs preventing incidents before they occur."
    },
    {
      icon: "⚡",
      title: "Innovation Leadership",
      description: "Continuously investing in cutting-edge technology and industry-leading techniques."
    },
    {
      icon: "🌱",
      title: "Environmental Stewardship",
      description: "Committed to sustainable practices and environmental protection in all our operations."
    }
  ];

  const certifications = [
    "ISO 9001:2015 Quality Management",
    "OSHA 30-Hour Construction Safety",
    "EPA Certified Remediation",
    "DOT Hazmat Transportation",
    "NACE Cathodic Protection",
    "ASTM Standards Compliance"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* About Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-summit-primary mb-6">
              About <span className="text-summit-red">Summit Drilling</span>
            </h2>
            <div className="w-32 h-1 bg-summit-red mb-8"></div>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Since 1985, Summit Drilling has been delivering <strong className="text-summit-primary">exceptional experiences</strong> 
                in environmental drilling, geophysical services, and remediation. Our unique customer promise drives 
                everything we do - ensuring 100% customer satisfaction through individual responsibility and collective excellence.
              </p>
              
              <p>
                With over four decades of experience, we've built our reputation on safety, innovation, and results. 
                Our team of experts combines deep industry knowledge with cutting-edge technology to tackle the most 
                complex environmental challenges.
              </p>
              
              <p className="text-summit-red font-semibold">
                "Every member of the Summit team takes individual responsibility for your experience."
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/about/company-history" className="summit-btn-primary text-center">
                Our History
              </Link>
              <Link href="/contact" className="summit-btn-secondary text-center">
                Work With Us
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/bg-1.jpg"
                alt="Summit Drilling Operations"
                width={600}
                height={400}
                className="object-cover w-full h-96"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <div className="text-2xl font-bold">40+ Years</div>
                <div className="text-sm opacity-90">of Excellence in Environmental Services</div>
              </div>
            </div>
            
            {/* Floating stats */}
            <div className="absolute -bottom-6 -right-6 bg-summit-red text-white p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold">1000+</div>
                <div className="text-sm">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-summit-primary mb-4">
              Our Core <span className="text-summit-red">Values</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision and drive our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="summit-card p-8 h-full hover:shadow-2xl">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold text-summit-primary mb-4">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Standards */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-summit-primary mb-6">
                Certifications & <span className="text-summit-red">Standards</span>
              </h3>
              <p className="text-lg text-gray-700 mb-8">
                Our commitment to excellence is reflected in our industry certifications 
                and adherence to the highest standards of quality and safety.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-summit-red rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl text-center shadow-lg">
                <div className="text-3xl font-bold text-summit-red mb-2">40+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center shadow-lg">
                <div className="text-3xl font-bold text-summit-primary mb-2">6</div>
                <div className="text-sm text-gray-600">Executive Leaders</div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center shadow-lg">
                <div className="text-3xl font-bold text-summit-accent mb-2">50+</div>
                <div className="text-sm text-gray-600">Fleet Vehicles</div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center shadow-lg">
                <div className="text-3xl font-bold text-summit-red mb-2">24/7</div>
                <div className="text-sm text-gray-600">Safety Focus</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-summit-primary to-summit-secondary rounded-2xl p-12 text-white">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Experience the Summit Difference?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who trust Summit for their environmental drilling, 
              geophysical, and remediation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/resources/start-a-project" className="summit-btn-primary bg-summit-red hover:bg-summit-red-dark text-lg px-8 py-4">
                Start Your Project
              </Link>
              <Link href="/contact" className="summit-btn-secondary bg-white text-summit-primary hover:bg-gray-100 text-lg px-8 py-4">
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MockupAbout;
