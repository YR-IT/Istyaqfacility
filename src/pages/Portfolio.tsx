// pages/PortfolioPage.tsx
import React, { useState, useRef } from 'react';
import PortfolioFilters from '../components/Portfolio/PortfolioFilters';
import PortfolioGrid from '../components/Portfolio/PortfolioGrid';
// import './Main.css';

const PortfolioPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const scrollRef = useRef<HTMLDivElement>(null);

  const filters = ['All', 'Living Room', 'Bedroom', 'Kitchen', 'Bathroom', 'Office'];

  const projects = [
    {
      title: 'Modern 4BHK Duplex - Mohali',
      category: 'Living Room',
      description: 'Luxury + functionality',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      likes: 234,
      views: 1520
    },
    {
      title: 'Premium 2BHK Flat - Mohali',
      category: 'Bedroom',
      description: 'Modular kitchen, wardrobes, lighting',
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      likes: 189,
      views: 1203
    },
    {
      title: 'Bank HQ Showroom - Chandigarh',
      category: 'Office',
      description: 'Renovation, repainting, office wall finish',
      image: 'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      likes: 312,
      views: 2104
    },
    {
      title: 'Luxury Master Bathroom',
      category: 'Bathroom',
      description: 'Premium fixtures and elegant design',
      image: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      likes: 156,
      views: 987
    },
    {
      title: 'Luxury Bungalow - Chandigarh',
      category: 'Living Room',
      description: 'Colonial-style renovation with modern upgrades',
      image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      likes: 278,
      views: 1654
    },
    {
      title: 'Modern Kitchen Design',
      category: 'Kitchen',
      description: 'Modular kitchen with premium appliances',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      likes: 201,
      views: 1332
    }
  ];

  const filteredProjects =
    activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-white via-[#f9f6ef] to-[#f4efe2]">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">Our Work Portfolio</h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Explore stunning transformations created by our expert team.
          </p>
        </div>

        <PortfolioFilters
          filters={filters}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        <PortfolioGrid
          projects={filteredProjects}
          scrollRef={scrollRef}
          scroll={scroll}
        />

        <div className="text-center mt-12">
          <button className="bg-[#b59e6f] hover:bg-white hover:text-black text-white px-8 py-3 rounded-full font-semibold border border-[#b59e6f] transition-colors duration-300 shadow-md">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;
