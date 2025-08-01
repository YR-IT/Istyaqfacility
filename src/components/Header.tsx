import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Services', to: '/services' },
    { name: 'Portfolio', to: '/portfolio' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${isScrolled ? 'shadow-lg bg-[#fdf7f2]' : 'bg-transparent'}`}>
<div className="w-full px-6 lg:px-10 py-4">
  <div className="flex flex-wrap items-center justify-between gap-y-4">

          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className={`font-playfair text-2xl lg:text-3xl font-bold transition-colors duration-200 ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              Istyaq Facility
            </h1>
            <p className={`text-xs font-medium transition-colors duration-200 ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
              Interior & Construction
            </p>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex flex-1 justify-center space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className={`font-playfair text-lg lg:text-xl font-semibold hover:underline transition duration-200 ${isScrolled ? 'text-gray-900' : 'text-white'}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Button (Desktop) */}
          <div className="hidden sm:flex items-center space-x-4 ml-auto">
            <div className="flex flex-wrap items-center justify-between h-auto py-4 gap-y-3">
              <span className={`w-8 h-8 flex items-center justify-center rounded-full ${isScrolled ? 'bg-black text-white' : 'bg-white text-black'} group-hover:scale-105`}>
                <Phone className="h-4 w-4" />
              </span>
              <span className={`text-sm font-medium ${isScrolled ? 'text-gray-900' : 'text-white'} group-hover:underline`}>
                +91 9646703020
              </span>
            </div>

            <Link
              to="/contact"
              className={`group px-5 py-2 pr-3 rounded-full flex items-center gap-2 font-semibold ${isScrolled ? 'bg-black text-white hover:bg-gray-800' : 'bg-white text-black hover:bg-gray-200'}`}
            >
              <span>Contact Us</span>
              <span className={`w-7 h-7 flex items-center justify-center rounded-full transform group-hover:translate-x-1 ${isScrolled ? 'bg-white text-black' : 'bg-black text-white'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
<button
  className={`lg:hidden p-2 rounded-md transition-colors ${
    isScrolled ? 'text-black' : 'text-white'
  }`}
  onClick={() => setIsMenuOpen(!isMenuOpen)}
>
  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
</button>

        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden w-full bg-white shadow-md px-4 py-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              onClick={() => setIsMenuOpen(false)}
              className="block text-base font-semibold text-gray-800 hover:text-black transition"
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-gray-200">
            <div className="flex items-center space-x-3 mb-4">
              <Phone className="text-gray-700" size={18} />
              <span className="text-sm font-medium text-gray-800">+91 9646703020</span>
            </div>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full bg-black text-white text-center py-2 rounded-md font-semibold hover:bg-gray-800 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
