import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-summit-primary text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-summit-red">Summit Drilling</h3>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Phone: </strong>
                <Link 
                  href="tel:+18002426648" 
                  className="hover:text-summit-red transition-colors duration-200"
                >
                  800-242-6648
                </Link>
              </p>
              <p><strong>Fax: </strong>732-356-1009</p>
              <p className="leading-relaxed">
                81 Chimney Rock Road<br />
                Bridgewater, NJ 08807
              </p>
            </div>
            
            <div className="mt-6">
              <Link 
                href="https://www.linkedin.com/company/summit-drilling" 
                target="_blank"
                className="inline-flex items-center text-summit-red hover:text-white transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Follow us on LinkedIn
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-summit-red">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/sonic-drilling" className="hover:text-summit-red transition-colors duration-200">
                  Sonic Drilling
                </Link>
              </li>
              <li>
                <Link href="/services/direct-push" className="hover:text-summit-red transition-colors duration-200">
                  Direct Push
                </Link>
              </li>
              <li>
                <Link href="/services/geophysical-services" className="hover:text-summit-red transition-colors duration-200">
                  Geophysical Services
                </Link>
              </li>
              <li>
                <Link href="/services/remediation" className="hover:text-summit-red transition-colors duration-200">
                  Remediation
                </Link>
              </li>
              <li>
                <Link href="/services/pfas" className="hover:text-summit-red transition-colors duration-200">
                  PFAS Services
                </Link>
              </li>
              <li>
                <Link href="/services/geotechnical" className="hover:text-summit-red transition-colors duration-200">
                  Geotechnical
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-summit-red">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about/company-history" className="hover:text-summit-red transition-colors duration-200">
                  Company History
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-summit-red transition-colors duration-200">
                  Company News
                </Link>
              </li>
              <li>
                <Link href="/about/customer-list" className="hover:text-summit-red transition-colors duration-200">
                  Customer List
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-summit-red transition-colors duration-200">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/safety" className="hover:text-summit-red transition-colors duration-200">
                  Safety
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-summit-red transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-summit-red">Resources</h4>
            <ul className="space-y-2 text-sm mb-6">
              <li>
                <Link href="/resources/start-a-project" className="hover:text-summit-red transition-colors duration-200">
                  Start a Project
                </Link>
              </li>
              <li>
                <Link href="/resources/project-mark-out" className="hover:text-summit-red transition-colors duration-200">
                  Project Mark Out Form
                </Link>
              </li>
              <li>
                <Link href="/services/equipment-roster" className="hover:text-summit-red transition-colors duration-200">
                  Equipment Roster
                </Link>
              </li>
              <li>
                <Link href="/safety/safety-meetings" className="hover:text-summit-red transition-colors duration-200">
                  Safety Meetings
                </Link>
              </li>
            </ul>

            {/* Quick Contact */}
            <div className="bg-summit-secondary p-4 rounded-lg">
              <h5 className="font-semibold mb-2 text-summit-red">Get Started Today</h5>
              <p className="text-xs mb-3 opacity-90">
                Ready to begin your project? Contact our expert team.
              </p>
              <Link 
                href="/resources/start-a-project"
                className="inline-block bg-summit-red hover:bg-summit-red-dark text-white font-semibold py-2 px-4 rounded text-sm transition-colors duration-200"
              >
                Start Project
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Affiliations Bar */}
      <div className="py-6" style={{backgroundColor: '#40b3de'}}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center space-x-8">
            <Image
              src="https://summitdrilling.com/wp-content/themes/asenka/img/Golden-Shovel.png"
              alt="Golden Shovel"
              width={60}
              height={40}
              className="hover:scale-110 transition-all duration-300 filter brightness-0 invert"
            />
            <Image
              src="https://summitdrilling.com/wp-content/themes/asenka/img/TWIC.png"
              alt="TWIC"
              width={60}
              height={40}
              className="hover:scale-110 transition-all duration-300 filter brightness-0 invert"
            />
            <Image
              src="https://summitdrilling.com/wp-content/themes/asenka/img/Avetta.png"
              alt="Avetta"
              width={60}
              height={40}
              className="hover:scale-110 transition-all duration-300 filter brightness-0 invert"
            />
            <Image
              src="https://summitdrilling.com/wp-content/themes/asenka/img/EBC.png"
              alt="EBC"
              width={60}
              height={40}
              className="hover:scale-110 transition-all duration-300 filter brightness-0 invert"
            />
            <Image
              src="https://summitdrilling.com/wp-content/themes/asenka/img/ISN.png"
              alt="ISN"
              width={60}
              height={40}
              className="hover:scale-110 transition-all duration-300 filter brightness-0 invert"
            />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-summit-secondary py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm opacity-75">
            &copy; 2025 Summit Drilling Company. All rights reserved. | 
            <Link href="/privacy" className="hover:text-summit-red transition-colors duration-200 ml-1">
              Privacy Policy
            </Link> | 
            <Link href="/terms" className="hover:text-summit-red transition-colors duration-200 ml-1">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
