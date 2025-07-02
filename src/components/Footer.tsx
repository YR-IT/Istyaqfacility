import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Interior Designing',
    'Construction',
    'Renovation',
    'House Services',
    'Commercial Projects',
    'Residential Projects'
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Istyaq Facility</h3>
            <p className="text-sm text-blue-200 mb-4 font-medium">Interior & Constructs</p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Delivering quality craftsmanship and modern design to turn your vision into reality. 
              Your trusted partner for construction and interior design solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <a href="tel:+919646703020" className="text-gray-300 hover:text-white transition-colors">
                  +91 9646703020
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <a href="mailto:istyaqfacility@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  istyaqfacility@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  709/2 B.D.C Colony, Sector 26<br />
                  Chandigarh, 160026
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-12">
          <div className="bg-gray-700 rounded-lg p-6 mb-8 text-center">
            <h4 className="text-lg font-semibold mb-4">Thank You for Visiting Us!</h4>
            <p className="text-gray-300 mb-4">
              Before you leave, we'd love to know how you discovered Istyaq Facility Interior & Constructs.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-gray-600 px-3 py-1 rounded-full text-sm">Google Search</span>
              <span className="bg-gray-600 px-3 py-1 rounded-full text-sm">Social Media</span>
              <span className="bg-gray-600 px-3 py-1 rounded-full text-sm">Word of Mouth</span>
              <span className="bg-gray-600 px-3 py-1 rounded-full text-sm">Online Directory</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Istyaq Facility Interior & Constructs. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Designed with ❤️ for quality construction & interior design
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;