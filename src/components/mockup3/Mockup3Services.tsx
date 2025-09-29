import Image from 'next/image';
import Link from 'next/link';

const Mockup3Services = () => {
  const services = [
    {
      title: "SONIC DRILLING",
      subtitle: "Advanced Technology",
      description: "Precision sonic drilling techniques for environmental projects requiring the highest standards of accuracy and minimal site disturbance."
    },
    {
      title: "GEOPHYSICAL SERVICES", 
      subtitle: "Subsurface Investigation",
      description: "Comprehensive geophysical analysis using time-tested methods combined with modern equipment for reliable subsurface mapping."
    },
    {
      title: "ENVIRONMENTAL REMEDIATION",
      subtitle: "Complete Solutions", 
      description: "Full-service environmental cleanup from initial assessment through final restoration, delivered with meticulous attention to detail."
    }
  ];

  return (
    <section className="py-20 relative" style={{background: 'linear-gradient(135deg, #e8dcc0 0%, #d4c5a0 100%)'}}>
      
      {/* Vintage pattern background */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill-opacity='0.1'%3E%3Cpath fill='%23000' d='M30 30l15-15h-10l-5 5-5-5H15l15 15zm0 0l-15 15h10l5-5 5 5h10L30 30z'/%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        
        {/* Vintage Header */}
        <div className="text-center mb-16">
          <div className="inline-block border-8 border-amber-800 p-8 bg-amber-50">
            <div className="space-y-4">
              <div className="text-amber-800 tracking-[0.2em] text-sm font-semibold">
                ◊ PROFESSIONAL SERVICES ◊
              </div>
              <h2 className="text-5xl font-bold text-amber-900 tracking-wider" style={{fontFamily: 'serif'}}>
                OUR EXPERTISE
              </h2>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-px bg-amber-800"></div>
                <div className="w-2 h-2 border border-amber-800 rotate-45"></div>
                <div className="w-12 h-px bg-amber-800"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Cards - Vintage Style */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="border-4 border-amber-800 bg-amber-50 p-8 h-full relative overflow-hidden hover:bg-white transition-all duration-300">
                
                {/* Vintage corner decorations */}
                <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-amber-800"></div>
                <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-amber-800"></div>
                <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-amber-800"></div>
                <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-amber-800"></div>

                <div className="relative z-10 text-center space-y-6">
                  <div className="space-y-2">
                    <div className="text-summit-red text-sm tracking-[0.15em] font-semibold">
                      {service.subtitle}
                    </div>
                    <h3 className="text-2xl font-bold text-amber-900 tracking-wider" style={{fontFamily: 'serif'}}>
                      {service.title}
                    </h3>
                  </div>

                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-8 h-px bg-amber-800"></div>
                    <div className="w-1.5 h-1.5 bg-amber-800 rotate-45"></div>
                    <div className="w-8 h-px bg-amber-800"></div>
                  </div>

                  <p className="text-amber-800 leading-relaxed" style={{fontFamily: 'serif'}}>
                    {service.description}
                  </p>

                  <Link
                    href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-block bg-summit-red text-white px-6 py-2 font-semibold tracking-wider border-2 border-summit-red hover:bg-transparent hover:text-summit-red transition-all duration-300"
                    style={{fontFamily: 'serif'}}
                  >
                    LEARN MORE
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Vintage Equipment Showcase */}
        <div className="border-8 border-amber-800 bg-amber-50 p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="text-summit-red tracking-[0.2em] text-sm font-semibold">
                  ◊ EQUIPMENT FLEET ◊
                </div>
                <h3 className="text-4xl font-bold text-amber-900 tracking-wider" style={{fontFamily: 'serif'}}>
                  INDUSTRY-LEADING MACHINERY
                </h3>
              </div>

              <p className="text-amber-800 text-lg leading-relaxed" style={{fontFamily: 'serif'}}>
                "Our fleet represents the finest in drilling technology - meticulously maintained 
                equipment that ensures precision, reliability, and safety on every project. 
                From sonic drilling rigs to specialized geophysical instruments, 
                each piece of machinery embodies our commitment to excellence."
              </p>

              <Link
                href="/services/equipment-roster"
                className="inline-block bg-amber-800 text-amber-50 px-8 py-3 font-bold tracking-wider border-2 border-amber-800 hover:bg-transparent hover:text-amber-800 transition-all duration-300"
                style={{fontFamily: 'serif'}}
              >
                VIEW EQUIPMENT
              </Link>
            </div>

            <div className="relative">
              <div className="border-4 border-amber-800">
                <Image
                  src="/images/rigs.jpg"
                  alt="Vintage Drilling Equipment"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover sepia"
                />
              </div>
              
              {/* Vintage photo corner tabs */}
              <div className="absolute -top-2 -left-2 w-8 h-8 bg-amber-800 transform rotate-45"></div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-800 transform rotate-45"></div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-amber-800 transform rotate-45"></div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-amber-800 transform rotate-45"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mockup3Services;
