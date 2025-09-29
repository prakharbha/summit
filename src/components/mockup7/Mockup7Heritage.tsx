import Image from 'next/image';

const Mockup7Heritage = () => {
  const milestones = [
    {
      year: "1985",
      title: "Company Founded",
      description: "Summit Drilling Company established with a vision to provide exceptional environmental drilling services."
    },
    {
      year: "1990s", 
      title: "Technology Pioneer",
      description: "Early adoption of sonic drilling technology, setting new standards for precision and environmental responsibility."
    },
    {
      year: "2000s",
      title: "Industry Leadership",
      description: "Expanded services to include comprehensive geophysical investigations and environmental remediation."
    },
    {
      year: "2010s",
      title: "Strategic Partnerships",
      description: "Formed key alliances with industry leaders like SAEDACCO, enhancing service capabilities and reach."
    },
    {
      year: "Today",
      title: "Legacy Continues",
      description: "Four decades of excellence, innovation, and unwavering commitment to customer satisfaction."
    }
  ];

  return (
    <section className="py-20 relative" style={{background: 'linear-gradient(135deg, #f4f1e8 0%, #e8dcc0 100%)'}}>
      
      {/* Vintage pattern background */}
      <div className="absolute inset-0 opacity-15" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z'/%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        
        {/* Heritage Header */}
        <div className="text-center mb-16">
          <div className="inline-block border-8 border-amber-900 p-8 bg-white">
            <div className="space-y-4">
              <div className="text-summit-red tracking-[0.3em] text-sm font-bold" style={{fontFamily: 'serif'}}>
                ◊ HERITAGE & LEGACY ◊
              </div>
              <h2 className="text-5xl font-bold text-amber-900 tracking-wider" style={{fontFamily: 'serif'}}>
                FOUR DECADES OF EXCELLENCE
              </h2>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-px bg-amber-900"></div>
                <div className="w-3 h-3 border-2 border-amber-900 rotate-45"></div>
                <div className="w-16 h-px bg-amber-900"></div>
              </div>
              <p className="text-lg text-amber-800 max-w-2xl" style={{fontFamily: 'serif'}}>
                "A journey through time, showcasing Summit's evolution from a local drilling company 
                to an industry-leading environmental services provider."
              </p>
            </div>
          </div>
        </div>

        {/* Heritage Timeline */}
        <div className="relative">
          
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-amber-900 hidden lg:block"></div>

          <div className="space-y-16 lg:space-y-24">
            {milestones.map((milestone, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                
                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2 lg:text-left' : 'lg:text-right'}`}>
                  <div className="border-8 border-amber-900 p-8 bg-white relative">
                    
                    {/* Corner decorations */}
                    <div className="absolute -top-2 -left-2 w-6 h-6 border-t-4 border-l-4 border-amber-900 bg-white"></div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 border-t-4 border-r-4 border-amber-900 bg-white"></div>
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-4 border-l-4 border-amber-900 bg-white"></div>
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4 border-amber-900 bg-white"></div>

                    <div className="space-y-4">
                      <div className="text-4xl font-bold text-summit-red tracking-wider" style={{fontFamily: 'serif'}}>
                        {milestone.year}
                      </div>
                      <h3 className="text-2xl font-bold text-amber-900 tracking-wide" style={{fontFamily: 'serif'}}>
                        {milestone.title}
                      </h3>
                      <p className="text-amber-800 leading-relaxed" style={{fontFamily: 'serif'}}>
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Year Badge */}
                <div className={`flex justify-center ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-br from-summit-red to-summit-red-dark rounded-full flex items-center justify-center border-8 border-amber-900 shadow-2xl">
                      <div className="text-center text-white">
                        <div className="text-lg font-bold" style={{fontFamily: 'serif'}}>
                          {milestone.year}
                        </div>
                      </div>
                    </div>
                    
                    {/* Connecting line to timeline */}
                    <div className="hidden lg:block absolute top-1/2 transform -translate-y-1/2 w-8 h-1 bg-amber-900" 
                         style={{
                           left: index % 2 === 0 ? '100%' : '-2rem',
                         }}>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Heritage Quote */}
        <div className="mt-20 text-center">
          <div className="border-8 border-amber-900 p-12 bg-gradient-to-br from-white to-amber-50 max-w-4xl mx-auto relative">
            
            {/* Decorative quotes */}
            <div className="absolute top-4 left-4 text-6xl text-amber-900/30" style={{fontFamily: 'serif'}}>"</div>
            <div className="absolute bottom-4 right-4 text-6xl text-amber-900/30" style={{fontFamily: 'serif'}}>"</div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-amber-900 tracking-wider" style={{fontFamily: 'serif'}}>
                THE SUMMIT LEGACY
              </h3>
              
              <p className="text-xl text-amber-800 leading-relaxed italic max-w-3xl mx-auto" style={{fontFamily: 'serif'}}>
                "What began as a vision in 1985 has become a testament to the power of dedication, 
                innovation, and unwavering commitment to excellence. Every project we undertake 
                carries forward this proud heritage of superior environmental drilling services."
              </p>

              <div className="text-lg font-semibold text-summit-red" style={{fontFamily: 'serif'}}>
                — Summit Drilling Company Leadership
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mockup7Heritage;
