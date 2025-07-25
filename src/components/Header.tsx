import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Phone } from 'lucide-react';


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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${isScrolled ? 'shadow-lg bg-[#fdf7f2]' : 'bg-transparent'
        }`}
    >
      <div className="w-full px-6 lg:px-10 h-16">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className={`font-playfair text-2xl lg:text-3xl font-bold transition-colors duration-200 ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              Istyaq Facility
            </h1>
            <p className={`text-xs font-medium transition-colors duration-200 ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
              Interior & Construction
            </p>
          </div>


          {/* Desktop Navigation */}
          <nav className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className={`font-playfair text-lg lg:text-xl font-semibold hover:underline transition duration-200 ${isScrolled ? 'text-gray-900' : 'text-white'
                  }`}
              >
                {item.name}
              </Link>
            ))}

          </nav>

          {/* Right-side Contact Info - Desktop Only */}
          <div className="hidden lg:flex items-center space-x-6 ml-auto">
            {/* Phone Icon and Number */}
            <div className="flex items-center space-x-2 mr-4 group transition-all duration-300">
              <span
                className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${isScrolled ? 'bg-black text-white' : 'bg-white text-black'
                  } group-hover:scale-105 group-hover:rotate-6`}
              >
                <Phone className="h-4 w-4" />
              </span>
              <span
                className={`text-sm font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-white'
                  } group-hover:underline`}
              >
                +91 9646703020
              </span>
            </div>



            {/* Contact Us Button */}
            <Link
              to="/contact"
              className={`group px-5 py-2 pr-3 rounded-full flex items-center gap-2 font-semibold transition duration-300 ${isScrolled
                ? 'bg-black text-white hover:bg-gray-800'
                : 'bg-white text-black hover:bg-gray-200'
                }`}
            >
              <span>Contact Us</span>

              <span
                className={`w-7 h-7 flex items-center justify-center rounded-full transition-all duration-300 transform group-hover:translate-x-1 ${isScrolled ? 'bg-white text-black' : 'bg-black text-white'
                  }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </Link>


          </div>


          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-white hover:text-slate-800 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-gray-900 border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-left px-3 py-2 text-white hover:text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-500 mt-4">
                <button className="w-full bg-white text-gray-800 hover:text-gray-100 px-4 py-2 rounded-md hover:bg-gray-500 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
