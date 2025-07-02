import React from 'react';
import { Palette, Hammer, Wrench, Home, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'Interior Design',
      description: 'Transform your space with elegant, modern, and functional interiors. Modular kitchens, living room design, lighting, and more.',
      price: 'Starting at ₹50,000',
      features: ['Custom design concepts', '3D visualizations', 'Material selection', 'Project management'],
      popular: true
    },
    {
      icon: Hammer,
      title: 'Construction',
      description: 'Full-scale construction services from layout planning to completion — residential, commercial, and custom builds.',
      price: 'Starting at ₹1,500/sq ft',
      features: ['Complete construction', 'Quality materials', 'Timely delivery', 'Expert supervision'],
      popular: false
    },
    {
      icon: Wrench,
      title: 'Renovation',
      description: 'Give your old space a fresh new look. Kitchen, bathroom, or full home — we specialize in stylish and affordable makeovers.',
      price: 'Starting at ₹25,000',
      features: ['Space optimization', 'Modern upgrades', 'Cost-effective solutions', 'Minimal disruption'],
      popular: false
    },
    {
      icon: Home,
      title: 'House Services',
      description: 'Quick plumbing, electrical, painting, carpentry, and home maintenance services at your doorstep.',
      price: 'Starting at ₹500',
      features: ['Emergency repairs', 'Regular maintenance', 'Skilled technicians', 'Quality assurance'],
      popular: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto">
            Choose the perfect service for your project. From complete construction to quick repairs, 
            we have solutions for every need and budget.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${
                service.popular ? 'border-amber-500' : 'border-amber-100'
              } overflow-hidden group`}
            >
              {service.popular && (
                <div className="absolute top-0 left-0 right-0 bg-amber-600 text-white text-center py-2 text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className={`p-8 ${service.popular ? 'pt-12' : ''}`}>
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${
                  service.popular ? 'bg-amber-100' : 'bg-amber-50'
                }`}>
                  <service.icon className={`h-8 w-8 ${
                    service.popular ? 'text-amber-700' : 'text-amber-600'
                  }`} />
                </div>
                
                <h3 className="text-xl font-bold text-amber-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-amber-800 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className={`text-2xl font-bold mb-6 ${
                  service.popular ? 'text-amber-700' : 'text-amber-900'
                }`}>
                  {service.price}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${
                        service.popular ? 'bg-amber-600' : 'bg-amber-500'
                      }`} />
                      <span className="text-sm text-amber-800">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group ${
                  service.popular 
                    ? 'bg-amber-700 hover:bg-amber-800 text-white' 
                    : 'bg-amber-100 hover:bg-amber-200 text-amber-900'
                }`}>
                  <span>Get Started</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-amber-800 mb-6">
            Not sure which service is right for you?
          </p>
          <button className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;