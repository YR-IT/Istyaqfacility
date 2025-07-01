import React, { useEffect, useState } from 'react';
import { Menu, X, Building2 } from 'lucide-react';
import anime from 'animejs';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    anime({
      targets: '.header-item',
      translateY: [-20, 0],
      opacity: [0, 1],
      duration: 800,
      delay: anime.stagger(100),
      easing: 'easeOutQuart'
    });
  }, []);

  const menuItems = ['Home', 'Services', 'About', 'Projects', 'Contact'];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-wood-200' 
        : 'bg-wood-50/95 backdrop-blur-sm border-b border-wood-200 shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3 header-item group cursor-pointer">
            <div className="bg-wood-700 p-2 rounded-lg group-hover:bg-wood-800 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold text-wood-800 group-hover:text-wood-900 transition-colors">Istyaq</span>
              <p className="text-sm text-wood-600 leading-tight">Facility Interior & Constructs</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="header-item text-wood-700 hover:text-wood-900 font-medium transition-all duration-300 relative group py-2 px-1"
                onMouseEnter={(e) => {
                  anime({
                    targets: e.currentTarget.querySelector('.nav-underline'),
                    width: '100%',
                    duration: 300,
                    easing: 'easeOutQuart'
                  });
                }}
                onMouseLeave={(e) => {
                  anime({
                    targets: e.currentTarget.querySelector('.nav-underline'),
                    width: '0%',
                    duration: 300,
                    easing: 'easeOutQuart'
                  });
                }}
              >
                {item}
                <span className="nav-underline absolute -bottom-1 left-0 w-0 h-0.5 bg-wood-700 transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-wood-700 hover:text-wood-900 transition-all duration-300 hover:bg-wood-100 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="border-t border-wood-200 py-4">
            {menuItems.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-3 px-4 text-wood-700 hover:text-wood-900 hover:bg-wood-100 font-medium transition-all duration-300 rounded-lg mx-2 mb-1"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;