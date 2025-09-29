import Image from 'next/image';
import Link from 'next/link';

const Mockup8News = () => {
  const newsStories = [
    {
      headline: "Summit Expands Remediation Division",
      subhead: "Joseph C. Negro Joins as Vice President",
      content: "Summit Drilling announces the expansion of its remediation services division with the addition of industry veteran Joseph C. Negro as Vice President of Remediation.",
      category: "COMPANY NEWS"
    },
    {
      headline: "Sonic Technology Breakthrough",
      subhead: "New Equipment Enhances Drilling Precision",
      content: "Latest sonic drilling equipment acquisition allows Summit to achieve unprecedented precision in environmental drilling projects across the Northeast.",
      category: "TECHNOLOGY"
    },
    {
      headline: "Environmental Safety Record",
      subhead: "40 Years Without Major Incident", 
      content: "Summit's commitment to safety excellence continues with four decades of operations maintaining an exemplary environmental safety record.",
      category: "SAFETY"
    }
  ];

  return (
    <section className="py-12 bg-white border-b-4 border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-8 border-b-2 border-gray-800 pb-4">
          <h2 className="text-3xl font-bold text-gray-900" style={{fontFamily: 'serif'}}>
            INDUSTRY NEWS & UPDATES
          </h2>
          <div className="text-sm text-gray-600 mt-2">
            Latest developments in environmental drilling and company announcements
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsStories.map((story, index) => (
            <div key={index} className="border-2 border-gray-800 bg-white">
              
              {/* News Header */}
              <div className="bg-gray-800 text-white p-3">
                <div className="text-xs font-bold tracking-wider">
                  {story.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight" style={{fontFamily: 'serif'}}>
                  {story.headline}
                </h3>
                
                <h4 className="text-lg text-summit-red font-semibold mb-4" style={{fontFamily: 'serif'}}>
                  {story.subhead}
                </h4>
                
                <p className="text-gray-700 leading-relaxed text-sm mb-4" style={{fontFamily: 'serif'}}>
                  {story.content}
                </p>
                
                <Link
                  href="/news"
                  className="text-summit-primary font-semibold text-sm hover:text-summit-red transition-colors duration-300"
                  style={{fontFamily: 'serif'}}
                >
                  Read Full Story →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-gray-100 border-2 border-gray-800 p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{fontFamily: 'serif'}}>
                SUBSCRIBE TO SUMMIT UPDATES
              </h3>
              <p className="text-gray-700 mb-4" style={{fontFamily: 'serif'}}>
                Stay informed about the latest developments in environmental drilling, 
                company news, and industry insights from Summit's four decades of experience.
              </p>
            </div>

            <div className="text-center lg:text-right">
              <Link
                href="/news"
                className="inline-block bg-summit-red text-white px-8 py-3 font-bold hover:bg-summit-red-dark transition-colors duration-300"
                style={{fontFamily: 'serif'}}
              >
                VIEW ALL NEWS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mockup8News;
