
const Mockup10Services = () => {
  const services = [
    {
      title: "Sonic Drilling",
      description: "Advanced sonic technology for precise environmental drilling with minimal site disturbance.",
      icon: "🎯",
      features: ["Continuous core sampling", "Low environmental impact", "Superior sample quality"],
      gradient: "from-summit-primary/20 to-summit-primary/10"
    },
    {
      title: "Geophysical Services",
      description: "Comprehensive subsurface investigation using cutting-edge geophysical techniques.",
      icon: "🔬", 
      features: ["Utility locating", "Ground penetrating radar", "Seismic analysis"],
      gradient: "from-summit-red/20 to-summit-red/10"
    },
    {
      title: "Environmental Remediation",
      description: "Complete site restoration solutions from assessment through final cleanup.",
      icon: "♻️",
      features: ["Site assessment", "Contamination removal", "Restoration services"],
      gradient: "from-summit-accent/20 to-summit-accent/10"
    }
  ];

  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="backdrop-blur-xl bg-white/60 rounded-2xl p-4 border border-white/30 inline-block mb-8">
            <span className="text-sm font-medium text-gray-700">Our Expertise</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-extralight text-gray-900 mb-8 leading-tight">
            Advanced
            <span className="block font-light bg-gradient-to-r from-summit-primary to-summit-red bg-clip-text text-transparent">
              Environmental Solutions
            </span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="backdrop-blur-xl bg-white/50 rounded-3xl border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 h-full">
                
                {/* Header */}
                <div className={`bg-gradient-to-br ${service.gradient} rounded-t-3xl p-8 text-center`}>
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-light text-gray-900 mb-4">{service.title}</h3>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  <p className="text-gray-600 font-light leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-summit-primary to-summit-red rounded-full"></div>
                        <span className="text-sm text-gray-700 font-light">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="pt-4">
                    <button
                      className="inline-flex items-center text-summit-red hover:text-summit-red-dark font-medium transition-colors duration-300"
                    >
                      <span>Learn More</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="backdrop-blur-xl bg-white/60 rounded-3xl border border-white/30 shadow-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
              Ready to Start Your
              <span className="block bg-gradient-to-r from-summit-primary to-summit-red bg-clip-text text-transparent font-normal">
                Environmental Project?
              </span>
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="backdrop-blur-xl bg-gradient-to-r from-summit-red/90 to-summit-red-dark/90 text-white rounded-2xl px-8 py-4 border border-white/30 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </button>
              
              <button
                className="backdrop-blur-xl bg-white/50 text-gray-700 rounded-2xl px-8 py-4 border border-white/40 hover:bg-white/70 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mockup10Services;
