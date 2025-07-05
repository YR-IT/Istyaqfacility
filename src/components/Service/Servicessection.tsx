import React from 'react';
import { Palette, Hammer, Wrench, Home, ArrowRight } from 'lucide-react';
import ServiceCard from './Servicecard';
// import './Main.css';

const ServicesSection = () => {
  const services = [
    {
      icon: Palette,
      title: 'Interior Design',
      description: 'Elegant, modern, and functional interiors. Kitchens, living rooms, lighting, and more.',
      price: 'From ₹50,000',
      features: ['3D Visualizations', 'Material Selection', 'Project Management', 'Custom Concepts'],
      popular: true,
    },
    {
      icon: Hammer,
      title: 'Construction',
      description: 'From layout to completion — residential, commercial, and custom builds.',
      price: 'From ₹1,500/sq ft',
      features: ['Timely Delivery', 'Expert Supervision', 'Quality Materials', 'Full Project Handling'],
    },
    {
      icon: Wrench,
      title: 'Renovation',
      description: 'Stylish, budget-friendly upgrades for kitchens, bathrooms, and entire homes.',
      price: 'From ₹25,000',
      features: ['Modern Upgrades', 'Space Optimization', 'Minimal Disruption', 'Cost-Effective'],
    },
    {
      icon: Home,
      title: 'House Services',
      description: 'Fast plumbing, electrical, painting, carpentry, and maintenance.',
      price: 'From ₹500',
      features: ['Emergency Repairs', 'Skilled Technicians', 'Maintenance Plans', 'Quick Scheduling'],
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-white to-[#fdfaf3] relative z-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-black mb-4 font-playfair">Our Services</h2>
        <p className="text-lg text-black max-w-2xl mx-auto mb-16">
          "Tailored to your dreams. Designed for your lifestyle. Built with precision."
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20">
          <p className="text-black mb-4">Not sure which service fits you best?</p>
          <button className="px-8 py-3 bg-[#b59e6f] text-white hover:bg-white hover:text-black border border-[#b59e6f] rounded-full font-semibold transition-colors duration-300 mb-8">
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
