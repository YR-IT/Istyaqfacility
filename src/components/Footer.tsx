import React from 'react';
import './stylesheet/Main.css';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Our Team', href: '#designers' },
  ];

  const services = [
    'Interior Design',
    'Construction',
    'Renovation',
    'House Services',
    'Vastu Consultation',
    'Project Management',
  ];

  const support = [
    'Help Center',
    'Design Process',
    'Payment Options',
    'Warranty Policy',
    'Terms of Service',
    'Privacy Policy',
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer bg-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="font-playfair text-3xl font-bold mb-2">Istyaq Facility</h3>
            <p className="mb-4">Interior & Construction Services</p>
            <p className="mb-6 text-justify">
              Professional construction and interior design company offering end-to-end solutions
              for residential and commercial spaces. Quality craftsmanship and modern design to turn your vision into reality.
            </p>

            <div className="mb-6">
              <div className="icon-text">
                <Mail size={18} />
                <a href="mailto:istyaqfacility@gmail.com">istyaqfacility@gmail.com</a>
              </div>
              <div className="icon-text">
                <Phone size={18} />
                <a href="tel:+919646703020">+91 9646703020</a>
              </div>
              <div className="icon-text">
                <MapPin size={18} />
                <span>
                  709/2 B.D.C Colony, Sector 26<br />
                  Chandigarh, 160026
                </span>
              </div>
            </div>

            <div className="social-icons">
              <a href="#"><Facebook size={18} /></a>
              <a href="#"><Instagram size={18} /></a>
              <a href="#"><Twitter size={18} /></a>
              <a href="#"><Linkedin size={18} /></a>
              <a href="#"><Youtube size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button onClick={() => scrollToSection(link.href)} className="hover:text-gray-100 cursor-pointer bg-transparent border-none p-0">
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className=" font-playfair text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a href="#">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {support.map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© 2024 Istyaq Facility Interior & Constructs. All rights reserved.</p>
          <div className="flex mt-4 md:mt-0">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
