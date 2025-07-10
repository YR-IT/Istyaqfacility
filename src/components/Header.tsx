import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-lg bg-[#5f6981]' : 'bg-transparent'
      }`}
      >
      <div className="w-full px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="font-playfair text-white text-2xl lg:text-3xl font-bold">
              Istyaq Facility
            </h1>
            <p className="text-xs text-white font-medium">
              Interior & Construction
            </p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 space-x-12">
          {navItems.map((item) => (
          <Link
          key={item.name}
          to={item.to}
          className="font-playfair text-white text-lg lg:text-xl font-semibold hover:underline transition duration-200"
          >
         {item.name}
         </Link>
         ))}
        </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-white hover:text-yellow-200 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-[#b59e6f] border-t border-yellow-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-left px-3 py-2 text-white hover:text-yellow-200 hover:bg-yellow-100 rounded-md transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-yellow-200 mt-4">
                <button className="w-full bg-white text-[#b59e6f] px-4 py-2 rounded-md hover:bg-yellow-100 transition-colors">
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
