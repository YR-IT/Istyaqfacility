import React from 'react';
import { ExternalLink, MapPin } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Modern 4BHK Duplex',
      location: 'Mohali',
      category: 'Residential',
      description: 'Luxury + functionality combined in this stunning duplex design featuring contemporary interiors and premium finishes.',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Modular Kitchen', 'Premium Lighting', 'Custom Wardrobes', 'Luxury Bathrooms']
    },
    {
      title: 'Premium 2BHK Flat',
      location: 'Mohali',
      category: 'Interior Design',
      description: 'Complete interior transformation with modular kitchen, custom wardrobes, and sophisticated lighting design.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Space Optimization', 'Modern Interiors', 'Smart Storage', 'Elegant Design']
    },
    {
      title: 'Bank HQ Showroom',
      location: 'Chandigarh',
      category: 'Commercial',
      description: 'Professional renovation including repainting, office wall finishes, and modern showroom design for corporate branding.',
      image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Corporate Design', 'Professional Finish', 'Brand Integration', 'Modern Layout']
    },
    {
      title: 'Luxury Bungalow',
      location: 'Chandigarh',
      category: 'Renovation',
      description: 'Colonial-style renovation with modern upgrades, blending traditional charm with contemporary functionality.',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Heritage Restoration', 'Modern Amenities', 'Landscape Design', 'Premium Materials']
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Our Work
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing our commitment to excellence through completed projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 flex items-center space-x-1">
                    <MapPin className="h-4 w-4 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">{project.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors group">
                  <span>View Details</span>
                  <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Ready to start your dream project?
          </p>
          <a
            href="https://wa.me/919646703020"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
          >
            <span>Let's Discuss Your Vision</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;