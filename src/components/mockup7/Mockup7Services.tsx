import Image from 'next/image';
import Link from 'next/link';

const Mockup7Services = () => {
  const services = [
    {
      title: "ENVIRONMENTAL DRILLING",
      subtitle: "Since 1985",
      description: "Four decades of precision sonic drilling for environmental projects, setting industry standards for safety and accuracy.",
      heritage: "Our founding service that established Summit's reputation for excellence in environmental drilling."
    },
    {
      title: "GEOPHYSICAL SERVICES", 
      subtitle: "Advanced Investigation",
      description: "Comprehensive subsurface analysis using cutting-edge technology combined with decades of field experience.",
      heritage: "Expanded in the 1990s to provide complete subsurface characterization services."
    },
    {
      title: "REMEDIATION SOLUTIONS",
      subtitle: "Complete Restoration", 
      description: "Full-service environmental cleanup from assessment through restoration, backed by proven methodologies.",
      heritage: "Added in the 2000s to offer comprehensive environmental restoration services."
    }
  ];

  return (
    <section className="py-20 relative" style={{background: 'linear-gradient(135deg, #f8f5f0 0%, #f0e6d2 100%)'}}>
      
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Services Header */}
        <div className="text-center mb-16">
          <div className="inline-block border-8 border-amber-900 p-8 bg-white">
            <div className="space-y-4">
              <div className="text-summit-red tracking-[0.3em] text-sm font-bold" style={{fontFamily: 'serif'}}>
                ◊ SERVICES WITH HERITAGE ◊
              </div>
              <h2 className="text-5xl font-bold text-amber-900 tracking-wider" style={{fontFamily: 'serif'}}>
                FOUR DECADES OF EXPERTISE
              </h2>
              <p className="text-lg text-amber-800 max-w-2xl" style={{fontFamily: 'serif'}}>
                "Each service reflects our commitment to excellence and decades of accumulated expertise."
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="border-8 border-amber-900 bg-white p-8 h-full relative hover:bg-amber-50 transition-all duration-300">
                
                {/* Vintage certificate corners */}
                <div className="absolute top-2 left-2 w-6 h-6 border-t-4 border-l-4 border-amber-900"></div>
                <div className="absolute top-2 right-2 w-6 h-6 border-t-4 border-r-4 border-amber-900"></div>
                <div className="absolute bottom-2 left-2 w-6 h-6 border-b-4 border-l-4 border-amber-900"></div>
                <div className="absolute bottom-2 right-2 w-6 h-6 border-b-4 border-r-4 border-amber-900"></div>

                <div className="relative z-10 text-center space-y-6">
                  <div className="space-y-2">
                    <div className="text-summit-red text-sm tracking-[0.15em] font-semibold" style={{fontFamily: 'serif'}}>
                      {service.subtitle}
                    </div>
                    <h3 className="text-2xl font-bold text-amber-900 tracking-wider" style={{fontFamily: 'serif'}}>
                      {service.title}
                    </h3>
                  </div>

                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-12 h-px bg-amber-900"></div>
                    <div className="w-2 h-2 bg-amber-900 rotate-45"></div>
                    <div className="w-12 h-px bg-amber-900"></div>
                  </div>

                  <p className="text-amber-800 leading-relaxed" style={{fontFamily: 'serif'}}>
                    {service.description}
                  </p>

                  <div className="bg-amber-900/5 p-4 border-l-4 border-amber-900">
                    <p className="text-sm text-amber-700 italic" style={{fontFamily: 'serif'}}>
                      {service.heritage}
                    </p>
                  </div>

                  <Link
                    href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-block bg-summit-red text-white px-6 py-3 font-semibold tracking-wider border-2 border-summit-red hover:bg-transparent hover:text-summit-red transition-all duration-300"
                    style={{fontFamily: 'serif'}}
                  >
                    EXPLORE SERVICE
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Heritage CTA */}
        <div className="text-center">
          <div className="border-8 border-amber-900 p-12 bg-gradient-to-br from-white to-amber-50 max-w-4xl mx-auto relative">
            
            <div className="absolute top-4 left-4 text-4xl text-amber-900/30">⚜</div>
            <div className="absolute bottom-4 right-4 text-4xl text-amber-900/30">⚜</div>

            <div className="space-y-8">
              <h3 className="text-4xl font-bold text-amber-900 tracking-wider" style={{fontFamily: 'serif'}}>
                EXPERIENCE THE HERITAGE
              </h3>
              
              <p className="text-xl text-amber-800 leading-relaxed max-w-3xl mx-auto" style={{fontFamily: 'serif'}}>
                "When your project demands the highest standards of environmental drilling and remediation, 
                trust in the company that has built its reputation on four decades of unwavering excellence 
                and proven results."
              </p>

              <Link
                href="/resources/start-a-project"
                className="inline-block bg-summit-red text-white px-12 py-4 text-xl font-bold tracking-wider border-4 border-summit-red hover:bg-transparent hover:text-summit-red transition-all duration-300"
                style={{fontFamily: 'serif'}}
              >
                START YOUR HERITAGE PROJECT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mockup7Services;
