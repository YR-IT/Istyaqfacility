import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, User, Search, Heart, ShoppingBag } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { 
      name: 'Services', 
      href: '#services',
      dropdown: ['Interior Design', 'Construction', 'Renovation', 'House Services']
    },
    { name: 'How It Works', href: '#how-it-works' },
    { 
      name: 'Portfolio', 
      href: '#portfolio',
      dropdown: ['Living Rooms', 'Bedrooms', 'Kitchens', 'Bathrooms', 'Offices']
    },
    { name: 'Designers', href: '#designers' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Blog', href: '#blog' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-amber-50 shadow-lg' : 'bg-amber-50/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl lg:text-3xl font-bold text-amber-900">
              Istyaq Facility
            </h1>
            <p className="text-xs text-amber-700 font-medium">Interior & Construction</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => item.dropdown ? setActiveDropdown(activeDropdown === item.name ? null : item.name) : scrollToSection(item.href)}
                  className="flex items-center space-x-1 text-amber-800 hover:text-amber-600 font-medium transition-colors duration-200 py-2"
                >
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown className="h-4 w-4" />}
                </button>
                
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-amber-100 py-2 z-50">
                    {item.dropdown.map((subItem) => (
                      <button
                        key={subItem}
                        className="block w-full text-left px-4 py-2 text-amber-800 hover:text-amber-600 hover:bg-amber-50 transition-colors"
                      >
                        {subItem}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="p-2 text-amber-800 hover:text-amber-600 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 text-amber-800 hover:text-amber-600 transition-colors">
              <Heart className="h-5 w-5" />
            </button>
            <button className="p-2 text-amber-800 hover:text-amber-600 transition-colors">
              <ShoppingBag className="h-5 w-5" />
            </button>
            <button className="flex items-center space-x-2 text-amber-800 hover:text-amber-600 transition-colors">
              <User className="h-5 w-5" />
              <span className="text-sm font-medium">Sign In</span>
            </button>
            <button className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-amber-800 hover:text-amber-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-amber-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-amber-800 hover:text-amber-600 hover:bg-amber-50 rounded-md transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 border-t border-amber-200 mt-4">
                <button className="w-full bg-amber-700 text-white px-4 py-2 rounded-md hover:bg-amber-800 transition-colors">
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