import React from 'react';
import { Palette, Wrench, Home, Hammer } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'Interior Designing',
      description: 'Transform your space with elegant, modern, and functional interiors. Modular kitchens, living room design, lighting, and more.',
      features: ['Modular Kitchens', 'Living Room Design', 'Bedroom Interiors', 'Lighting Solutions', 'Custom Furniture', 'Color Consultation']
    },
    {
      icon: Wrench,
      title: 'Renovation',
      description: 'Give your old space a fresh new look. Kitchen, bathroom, or full home — we specialize in stylish and affordable makeovers.',
      features: ['Kitchen Renovation', 'Bathroom Remodeling', 'Full Home Makeover', 'Floor Upgrades', 'Wall Treatments', 'Space Optimization']
    },
    {
      icon: Home,
      title: 'House Services',
      description: 'Quick plumbing, electrical, painting, carpentry, and home maintenance services at your doorstep.',
      features: ['Plumbing Services', 'Electrical Work', 'Painting Services', 'Carpentry', 'Home Maintenance', 'Emergency Repairs']
    },
    {
      icon: Hammer,
      title: 'Construction',
      description: 'Full-scale construction services from layout planning to completion — residential, commercial, and custom builds.',
      features: ['Residential Construction', 'Commercial Projects', 'Custom Builds', 'Layout Planning', 'Project Management', 'Quality Assurance']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions for all your construction and interior design needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300 group border border-gray-100"
            >
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/919646703020"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
          >
            <span>Discuss Your Project</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;