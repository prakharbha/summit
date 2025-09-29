'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  href: string;
  date: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Summit Drilling Welcomes Joseph C. Negro to Lead the Expansion of Remediation Services Division",
    excerpt: "Summit Drilling is proud to announce the addition of Joseph C. Negro as Vice President of our...",
    image: "/images/joseph-negro-crop.jpg",
    href: "/news/joseph-c-negro-joins-summit",
    date: "May 2025"
  },
  {
    id: 2,
    title: "Dermot Dillon Appointed to NGWA Board of Directors",
    excerpt: "Summit Drilling is proud to announce that Dermot Dillon, our Vice President of Major Accounts, has been...",
    image: "/images/derm-instructing.jpg",
    href: "/news/dermot-dillon-ngwa-board",
    date: "February 2025"
  },
  {
    id: 3,
    title: "Summit Drilling Welcomes South Atlantic Environmental Drilling and Construction Co. (SAEDACCO) to the Team",
    excerpt: "The Addition Extends Summit's Environmental Services and Expands its Investigative and Remediation Contracting Capabilities Throughout the Southeastern...",
    image: "/images/saedacco-announcement.gif",
    href: "/news/saedacco-acquisition",
    date: "May 2023"
  },
  {
    id: 4,
    title: "Summit Drilling Acquires Subsurface Environmental Technologies and Hill Environmental Group Strengthening Its Turn-Key Solutions",
    excerpt: "Summit Drilling, the leading environmental drilling contractor on the East Coast, announced the acquisition of Subsurface Environmental...",
    image: "/images/summit-services-announcement.gif",
    href: "/news/subsurface-hill-acquisition",
    date: "January 2023"
  }
];

const NewsSection = () => {
  const [currentNews, setCurrentNews] = useState(0);

  return (
    <section className="py-16 bg-white relative">
      <div className="absolute inset-0 section-gradient"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Main Content Area */}
          <div className="lg:col-span-2 lg:order-1">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-summit-primary mb-4">
                Leading <span className="text-summit-red">Environmental</span> Drilling
              </h2>
              <div className="w-32 h-1 bg-summit-red mx-auto mb-6"></div>
              <div className="text-sm font-semibold text-summit-red uppercase tracking-wider">
                An Exceptional Experience Since 1985
              </div>
            </div>

            <div className="summit-card p-8 card-gradient border border-white/50">
              <div className="text-lg leading-relaxed space-y-6 text-gray-700">
                <p className="text-xl font-semibold text-summit-primary">
                  Summit's ability to manage a diverse range of complex projects safely, 
                  efficiently and with excellent results is characterized by their unique 
                  customer promise – <span className="text-summit-red">An Exceptional Experience.</span>
                </p>
                
                <p>
                  Maintaining 100% customer satisfaction is a primary goal at Summit and one 
                  that is taken seriously. Every member of the Summit team takes individual 
                  responsibility for your experience.
                </p>
                
                <p>
                  Collectively, this commitment promotes a culture of continuous improvement, 
                  customer care and teamwork that sets Summit apart in the environmental 
                  drilling industry.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 pt-8 border-t border-gray-200">
                  <div>
                    <h4 className="font-bold text-summit-primary mb-2">Our Commitment</h4>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• 100% Customer Satisfaction</li>
                      <li>• Safety-First Approach</li>
                      <li>• Environmental Responsibility</li>
                      <li>• Continuous Improvement</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-summit-primary mb-2">Our Services</h4>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Sonic & Direct Push Drilling</li>
                      <li>• Geophysical Investigations</li>
                      <li>• Environmental Remediation</li>
                      <li>• PFAS & Geotechnical Services</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* News Carousel */}
          <div className="lg:col-span-1 lg:order-2">
            <div className="sticky top-8">
              <h2 className="text-2xl font-bold text-summit-primary mb-6">
                Company News
              </h2>
              
              <div className="summit-card overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={newsItems[currentNews].image}
                    alt={newsItems[currentNews].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 right-4 bg-summit-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {newsItems[currentNews].date}
                  </div>
                </div>
                
                <div className="p-6">
                  <Link href={newsItems[currentNews].href}>
                    <h3 className="text-lg font-bold text-summit-primary hover:text-summit-red transition-colors duration-200 mb-3 line-clamp-2">
                      {newsItems[currentNews].title}
                    </h3>
                  </Link>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {newsItems[currentNews].excerpt}
                  </p>
                  
                  <Link 
                    href={newsItems[currentNews].href}
                    className="text-summit-red font-semibold hover:text-summit-red-dark transition-colors duration-200 inline-flex items-center"
                  >
                    Read the full story
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* News Navigation */}
              <div className="flex justify-center mt-4 space-x-2">
                {newsItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentNews(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentNews 
                        ? 'bg-summit-red scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <div className="mt-6">
                <Link 
                  href="/news"
                  className="w-full summit-btn-secondary text-center block"
                >
                  View All News
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar - Technology Focus */}
          <div className="lg:col-span-1 lg:order-3">
            <div className="sticky top-8">
              <h3 className="text-2xl font-bold text-summit-primary mb-6">
                Our Technology
              </h3>
              
              <div className="summit-card overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/rigs.jpg"
                    alt="Summit Drilling Technology"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-summit-primary/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="font-bold text-lg mb-1">Advanced Equipment</h4>
                    <p className="text-sm opacity-90">State-of-the-art drilling technology</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-summit-red rounded-full"></div>
                      <span className="text-sm text-gray-600">Sonic Drilling Systems</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-summit-red rounded-full"></div>
                      <span className="text-sm text-gray-600">Direct Push Technology</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-summit-red rounded-full"></div>
                      <span className="text-sm text-gray-600">Geophysical Equipment</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-summit-red rounded-full"></div>
                      <span className="text-sm text-gray-600">Remediation Systems</span>
                    </div>
                  </div>
                  
                  <Link 
                    href="/services/equipment-roster"
                    className="mt-6 w-full summit-btn-primary text-center block"
                  >
                    View Our Fleet
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
