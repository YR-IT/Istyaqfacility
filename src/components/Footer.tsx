import React, { useState } from 'react';
import { Building2, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import anime from 'animejs';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [hoveredSocial, setHoveredSocial] = useState<number | null>(null);

  const scrollToTop = () => {
    anime({
      targets: 'html, body',
      scrollTop: 0,
      duration: 1000,
      easing: 'easeOutQuart'
    });
  };

  const handleSocialHover = (index: number, isEntering: boolean) => {
    setHoveredSocial(isEntering ? index : null);
    
    if (isEntering) {
      anime({
        targets: `.social-icon-${index}`,
        scale: [1, 1.2],
        rotate: [0, 360],
        duration: 400,
        easing: 'easeOutElastic(1, .8)'
      });
    }
  };

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:bg-blue-600" },
    { icon: Twitter, href: "#", color: "hover:bg-blue-400" },
    { icon: Instagram, href: "#", color: "hover:bg-pink-600" },
    { icon: Linkedin, href: "#", color: "hover:bg-blue-700" }
  ];

  return (
    <footer className="bg-gradient-to-br from-wood-900 to-wood-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6 group cursor-pointer">
              <div className="bg-wood-600 p-2 rounded-lg group-hover:bg-wood-500 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold group-hover:text-cream-100 transition-colors">Istyaq</span>
                <p className="text-wood-300 text-sm">Facility Interior & Constructs</p>
              </div>
            </div>
            
            <p className="text-wood-300 leading-relaxed mb-6 max-w-md hover:text-wood-200 transition-colors duration-300">
              Transforming spaces with quality construction, innovative interior design, 
              and comprehensive facility management services. Your trusted partner in 
              building excellence.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className={`social-icon-${index} w-10 h-10 bg-wood-700 rounded-lg flex items-center justify-center ${social.color} transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl`}
                  onMouseEnter={() => handleSocialHover(index, true)}
                  onMouseLeave={() => handleSocialHover(index, false)}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-cream-100">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Services', 'About', 'Projects', 'Contact'].map((link, index) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-wood-300 hover:text-white transition-all duration-300 relative group inline-block"
                    onMouseEnter={(e) => {
                      anime({
                        targets: e.currentTarget,
                        translateX: [0, 5],
                        duration: 200,
                        easing: 'easeOutQuart'
                      });
                    }}
                    onMouseLeave={(e) => {
                      anime({
                        targets: e.currentTarget,
                        translateX: [5, 0],
                        duration: 200,
                        easing: 'easeOutQuart'
                      });
                    }}
                  >
                    {link}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cream-300 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-cream-100">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 group cursor-pointer">
                <Phone className="w-5 h-5 text-wood-400 group-hover:text-cream-300 transition-colors" />
                <span className="text-wood-300 group-hover:text-white transition-colors">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3 group cursor-pointer">
                <Mail className="w-5 h-5 text-wood-400 group-hover:text-cream-300 transition-colors" />
                <span className="text-wood-300 group-hover:text-white transition-colors">info@istyaqfacility.com</span>
              </li>
              <li className="flex items-start space-x-3 group cursor-pointer">
                <MapPin className="w-5 h-5 text-wood-400 mt-1 group-hover:text-cream-300 transition-colors" />
                <span className="text-wood-300 group-hover:text-white transition-colors">
                  123 Construction Plaza<br />Business District, City - 500001
                </span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-wood-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-wood-400 text-sm hover:text-wood-300 transition-colors">
            © {currentYear} Istyaq Facility Interior & Constructs. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-wood-400 hover:text-white text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-wood-400 hover:text-white text-sm transition-colors duration-300">
              Terms of Service
            </a>
            
            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="bg-wood-600 hover:bg-wood-500 p-2 rounded-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl group"
            >
              <ArrowUp className="w-4 h-4 group-hover:animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;