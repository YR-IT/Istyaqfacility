import React, { useState, useRef } from 'react';
import { ExternalLink, Heart, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import './Main.css';
const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const scrollRef = useRef(null);

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

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
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

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-[#b59e6f] text-white shadow-lg scale-105'
                  : 'bg-[#f2eadd] text-black hover:bg-[#e5d9bf]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Scroll Arrows */}
        <div className="relative">
          <button onClick={() => scroll('left')} className="absolute -left-2 top-1/2 transform -translate-y-1/2 z-10 bg-[#b59e6f] text-white p-2 rounded-full shadow-md hover:bg-[#a7905c]">
            <ChevronLeft />
          </button>

          <div
            ref={scrollRef}
            className="flex space-x-4 overflow-x-auto scroll-smooth pb-2 px-1 scrollbar-hide"
          >
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="min-w-[320px] bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex-shrink-0 overflow-hidden border border-[#e0d4ba]"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover rounded-t-3xl"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#b59e6f] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-bold text-[#b59e6f] mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-700 mb-3 italic">{project.description}</p>

                  <div className="flex items-center justify-between text-sm text-[#b59e6f]">
                    <div className="flex space-x-4">
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{project.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{project.views}</span>
                      </div>
                    </div>
                    <button className="hover:text-black font-medium underline decoration-dotted">View</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button onClick={() => scroll('right')} className="absolute -right-2 top-1/2 transform -translate-y-1/2 z-10 bg-[#b59e6f] text-white p-2 rounded-full shadow-md hover:bg-[#a7905c]">
            <ChevronRight />
          </button>
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#b59e6f] hover:bg-white hover:text-black text-white px-8 py-3 rounded-full font-semibold border border-[#b59e6f] transition-colors duration-300 shadow-md">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
