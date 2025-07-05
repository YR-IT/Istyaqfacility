import React from 'react';
import { Palette, Hammer, Wrench, Home, ArrowRight } from 'lucide-react';
import Footer from './Footer';
import './Main.css';
const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'Interior Design',
      description: 'Elegant, modern, and functional interiors. Kitchens, living rooms, lighting, and more.',
      features: ['3D Visualizations', 'Material Selection', 'Project Management', 'Custom Concepts'],
      popular: true,
    },
    {
      icon: Hammer,
      title: 'Construction',
      description: 'From layout to completion — residential, commercial, and custom builds.',
      features: ['Timely Delivery', 'Expert Supervision', 'Quality Materials', 'Full Project Handling'],
    },
    {
      icon: Wrench,
      title: 'Renovation',
      description: 'Stylish, budget-friendly upgrades for kitchens, bathrooms, and entire homes.',
      features: ['Modern Upgrades', 'Space Optimization', 'Minimal Disruption', 'Cost-Effective'],
    },
    {
      icon: Home,
      title: 'House Services',
      description: 'Fast plumbing, electrical, painting, carpentry, and maintenance.',
      features: ['Emergency Repairs', 'Skilled Technicians', 'Maintenance Plans', 'Quick Scheduling'],
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-white to-[#fdfaf3] relative z-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-black mb-4 font-playfair">Our Services</h2>
        <p className="text-lg text-black max-w-2xl mx-auto mb-16">
          "Tailored to your dreams. Designed for your lifestyle. Built with precision.""
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-white/80 backdrop-blur-lg shadow-lg border border-[#b59e6f]/30 hover:border-[#b59e6f] rounded-3xl transition-transform duration-500 hover:-translate-y-2 overflow-visible"
            >
              {/* Floating Icon */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-16 h-16 bg-[#b59e6f] text-white rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6" />
                </div>
              </div>

              {/* Card Content */}
              <div className="pt-20 pb-8 px-6 flex flex-col items-center text-center">
                <h3 className="text-xl font-semibold text-black mb-2">{service.title}</h3>

                <p className="text-sm text-black mb-4">{service.description}</p>

                <div className="text-base font-bold text-black mb-4">{service.price}</div>

                <ul className="text-sm text-black mb-6 text-left space-y-2 w-full">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="w-2 h-2 mt-2 rounded-full bg-[#b59e6f]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="relative group/button inline-flex items-center justify-center py-2 px-5 rounded-full bg-[#b59e6f] text-white font-semibold border border-[#b59e6f] hover:bg-white hover:text-black transition-all duration-300 overflow-hidden">
                  <span className="relative z-10">Get Started</span>
                  <ArrowRight className="w-4 h-4 ml-2 transform transition-transform group-hover/button:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Call-to-Action */}
        <div className="mt-20">
          <p className="text-black mb-4">Not sure which service fits you best?</p>
          <button className="px-8 py-3 bg-[#b59e6f] text-white hover:bg-white hover:text-black border border-[#b59e6f] rounded-full font-semibold transition-colors duration-300 mb-8">
            Get Free Consultation
          </button>
        </div>
      </div>
      <Footer />
    </section>
    
  );
};

export default Services;
