import React, { useState } from 'react';
import { ExternalLink, Heart, Eye } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
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

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-900 mb-6">
            Our Work Portfolio
          </h2>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto">
            Explore stunning transformations created by our expert team. 
            Get inspired for your own space.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-amber-700 text-white shadow-lg'
                  : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-amber-900 hover:bg-amber-100 transition-colors">
                      <Eye className="h-5 w-5" />
                    </button>
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-amber-900 hover:bg-amber-100 transition-colors">
                      <ExternalLink className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-2 group-hover:text-amber-700 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-amber-800 mb-4">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-amber-700">
                    <div className="flex items-center space-x-1">
                      <Heart className="h-4 w-4" />
                      <span>{project.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{project.views}</span>
                    </div>
                  </div>
                  
                  <button className="text-amber-700 hover:text-amber-800 font-medium text-sm transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;