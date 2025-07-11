import React, { useState, useEffect } from 'react';
import { Palette, Hammer, Wrench, Home } from 'lucide-react';
import ServiceCard from './Servicecard';
import '../Main.css';
import slide1 from '../../../assests/slideShow1.jpg';
import slide2 from '../../../assests/slideShow2.jpg';
import slide3 from '../../../assests/slideShow3.jpg';

const ServicesSection = () => {
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

  const slideImages = [slide1, slide2, slide3];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="services" className="bg-gradient-to-br from-white to-[#fdfaf3] relative z-10">

      {/* Full Width Slideshow */}
      <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden relative">
        {/* Slide Images */}
        {slideImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          />
        ))}

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 z-20 text-center px-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-playfair mb-4">
            Our Services
          </h2>
          <p className="text-lg sm:text-xl text-white max-w-2xl">
            "Tailored to your dreams. Designed for your lifestyle. Built with precision"
          </p>
        </div>
      </div>

      {/* Services Cards & CTA */}
      <div className="max-w-7xl mx-auto px-4 text-center py-24">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        <div className="mt-20">
          <p className="text-black mb-4">Not sure which service fits you best?</p>
          <button className="px-8 py-3 bg-[#b59e6f] text-white border-[#b59e6f] rounded-full font-semibold transition-colors duration-300 mb-8">
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
