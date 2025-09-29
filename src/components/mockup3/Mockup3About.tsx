import Image from 'next/image';
import Link from 'next/link';

const Mockup3About = () => {
  return (
    <section className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Main About Section */}
        <div className="border-8 border-amber-800 p-12 bg-white relative mb-16">
          
          {/* Ornamental corners */}
          <div className="absolute -top-4 -left-4 w-8 h-8 border-t-4 border-l-4 border-amber-800 bg-amber-50"></div>
          <div className="absolute -top-4 -right-4 w-8 h-8 border-t-4 border-r-4 border-amber-800 bg-amber-50"></div>
          <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-4 border-l-4 border-amber-800 bg-amber-50"></div>
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-4 border-r-4 border-amber-800 bg-amber-50"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="text-summit-red tracking-[0.2em] text-sm font-semibold">
                  ◊ HERITAGE & EXCELLENCE ◊
                </div>
                <h2 className="text-5xl font-bold text-amber-900 tracking-wider leading-tight" style={{fontFamily: 'serif'}}>
                  A LEGACY OF
                  <span className="block text-summit-red">CRAFTSMANSHIP</span>
                </h2>
              </div>

              <div className="space-y-6 text-amber-800 leading-relaxed" style={{fontFamily: 'serif'}}>
                <p className="text-lg">
                  "Since our founding in 1985, Summit Drilling Company has stood as a beacon 
                  of reliability in the environmental services industry. Our heritage is built 
                  upon the fundamental principles of honest work, precision craftsmanship, 
                  and unwavering dedication to our clients' success."
                </p>
                
                <p className="text-lg">
                  "Through four decades of service, we have cultivated expertise that spans 
                  the breadth of environmental drilling, geophysical investigation, and 
                  remediation. Each project we undertake carries forward this tradition 
                  of excellence."
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  href="/about/company-history"
                  className="bg-amber-800 text-amber-50 px-8 py-3 font-bold tracking-wider border-2 border-amber-800 hover:bg-transparent hover:text-amber-800 transition-all duration-300 text-center"
                  style={{fontFamily: 'serif'}}
                >
                  OUR HISTORY
                </Link>
                <Link
                  href="/contact"
                  className="bg-summit-red text-white px-8 py-3 font-bold tracking-wider border-2 border-summit-red hover:bg-transparent hover:text-summit-red transition-all duration-300 text-center"
                  style={{fontFamily: 'serif'}}
                >
                  CONTACT US
                </Link>
              </div>
            </div>

            {/* Vintage Photo */}
            <div className="relative">
              <div className="border-8 border-amber-800 relative">
                <Image
                  src="/images/bg-1.jpg"
                  alt="Summit Drilling Heritage"
                  width={500}
                  height={400}
                  className="w-full h-96 object-cover sepia"
                />
                
                {/* Vintage photo mounting corners */}
                <div className="absolute -top-3 -left-3 w-6 h-6 bg-amber-800 transform rotate-45"></div>
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-amber-800 transform rotate-45"></div>
                <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-amber-800 transform rotate-45"></div>
                <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-amber-800 transform rotate-45"></div>
              </div>

              {/* Vintage label */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-amber-800 text-amber-50 px-6 py-2 text-center">
                <div className="text-sm tracking-[0.1em] font-semibold" style={{fontFamily: 'serif'}}>
                  EST. 1985
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values in Vintage Certificate Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "INTEGRITY", desc: "Honest dealings in every transaction" },
            { title: "EXCELLENCE", desc: "Superior results through skilled craftsmanship" }, 
            { title: "SAFETY", desc: "Protecting people and environment" },
            { title: "SERVICE", desc: "Dedicated to client satisfaction" }
          ].map((value, index) => (
            <div key={index} className="border-4 border-amber-800 bg-white p-6 text-center relative">
              
              {/* Certificate-style corners */}
              <div className="absolute top-1 left-1 w-4 h-4 border-t-2 border-l-2 border-amber-800"></div>
              <div className="absolute top-1 right-1 w-4 h-4 border-t-2 border-r-2 border-amber-800"></div>
              <div className="absolute bottom-1 left-1 w-4 h-4 border-b-2 border-l-2 border-amber-800"></div>
              <div className="absolute bottom-1 right-1 w-4 h-4 border-b-2 border-r-2 border-amber-800"></div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-amber-900 tracking-wider" style={{fontFamily: 'serif'}}>
                  {value.title}
                </h3>
                <div className="w-8 h-px bg-amber-800 mx-auto"></div>
                <p className="text-amber-800 text-sm leading-relaxed" style={{fontFamily: 'serif'}}>
                  {value.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA in Vintage Proclamation Style */}
        <div className="mt-16 text-center">
          <div className="border-8 border-amber-800 bg-white p-12 max-w-4xl mx-auto relative">
            
            {/* Decorative flourishes */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-2xl text-amber-800">❦</div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-2xl text-amber-800">❦</div>

            <div className="space-y-8">
              <h3 className="text-4xl font-bold text-amber-900 tracking-wider" style={{fontFamily: 'serif'}}>
                PARTNER WITH TRADITION
              </h3>
              
              <p className="text-xl text-amber-800 leading-relaxed max-w-2xl mx-auto" style={{fontFamily: 'serif'}}>
                "When your project demands the highest standards of environmental drilling and remediation, 
                trust in the company that has built its reputation on four decades of unwavering excellence."
              </p>

              <Link
                href="/resources/start-a-project"
                className="inline-block bg-summit-red text-white px-12 py-4 text-xl font-bold tracking-wider border-4 border-summit-red hover:bg-transparent hover:text-summit-red transition-all duration-300"
                style={{fontFamily: 'serif'}}
              >
                BEGIN YOUR PROJECT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mockup3About;
