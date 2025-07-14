import React, { useState, useEffect } from 'react';
import {Award,Lightbulb,Users,Target,Palette,Hammer,Wrench,Home,LucideIcon,} from 'lucide-react';
import { Link } from 'react-router-dom';
import slide1 from '../../assests/slideShow1.jpg';
import slide2 from '../../assests/slideShow2.jpg';
import slide3 from '../../assests/slideShow3.jpg';
import slide4 from '../../assests/slideShow4.jpg';
import slide5 from '../../assests/slideShow5.jpg';
import slide6 from '../../assests/slideShow6.jpg';
import slide7 from '../../assests/slideShow7.jpg';
import ServiceCard from '../Service/Servicecard';

const slideImages = [slide1, slide2, slide3, slide4, slide5, slide6, slide7];

interface ValueItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const values: ValueItem[] = [
  {
    icon: Award,
    title: 'Quality',
    description: 'We never compromise on the quality of materials and craftsmanship',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Bringing modern design concepts and latest construction techniques',
  },
  {
    icon: Users,
    title: 'Client Satisfaction',
    description: 'Your satisfaction is our top priority in every project we undertake',
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'Striving for perfection in every detail of our work',
  },
];

const services = [
  {
    icon: Palette,
    title: 'Interior Design',
    description: 'Elegant, modern, and functional interiors. Kitchens, living rooms, lighting, and more.',
    features: ['3D Visualizations', 'Material Selection', 'Project Management', 'Custom Concepts'],
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
    description: 'Fast plumbing, electrical, painting, carpentry, decoration and maintenance.',
    features: ['Emergency Repairs', 'Skilled Technicians', 'Maintenance Plans', 'Quick Scheduling'],
  },
];

const AboutSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? slideImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slideImages.length);
  };

  return (
    <div>
      {/* ABOUT SECTION */}
      <section id="about" className="pt-10 pb-10 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-white mb-4">
              See Us in Action
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6 text-center lg:text-left">
              <h3 className="font-playfair text-2xl md:text-3xl font-bold text-white mb-4">
                "Building Dreams, Crafting Spaces"
              </h3>
              <p className="text-base text-white leading-relaxed">
                Istyaq Facility Interior & Constructs is a professional construction & interior
                design company offering end-to-end solutions for residential and commercial spaces.
                We transform your vision into reality with our expertise, dedication, and attention
                to detail. With years of experience in the industry, we have built a reputation for
                delivering exceptional results that exceed our clients' expectations.
              </p>
            </div>

            <div className="rounded-xl shadow-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                alt="Interior Preview"
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center"
              >
                <div className="w-16 h-16 border-2 border-[#0e345a] rounded-full flex items-center justify-center mx-auto mb-4 bg-[#0e345a] hover:bg-[#0b2647] transition-colors">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-800">{value.title}</h4>
                <p className="text-gray-600 mt-2">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLIDESHOW SECTION */}
      <section id="how-it-works" className="bg-slate-800 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-white mb-8">
              Creating Beautiful Spaces for Everyone
            </h2>
          </div>

          <div className="relative w-[90%] mx-auto h-[300px] sm:h-[400px] md:h-[580px] rounded-xl overflow-hidden shadow-xl mb-16">
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
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-black  sm:p-3 rounded-full text-xl font-bold shadow-md z-20"
            >
              &#8592;
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-black p-2 sm:p-3 rounded-full text-xl font-bold shadow-md z-20"
            >
              &#8594;
            </button>
          </div>

          </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="bg-slate-800 relative z-10">
  <div className="max-w-7xl mx-auto text-center ">
    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-playfair mb-16">
      Our Services
    </h2>

    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </div>

    <div className="mt-20">
      <p className="text-white mb-4">Not sure which service fits you best?</p>
      <div className="text-center">
        <Link to="/Contact">
          <button className="px-8 py-3 rounded-lg font-semibold text-black bg-white hover:bg-[#dcddde] transition mb-10">
            Start Your Project Today
          </button>
        </Link>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default AboutSection;
