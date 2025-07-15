import React from 'react';
import {
  Target, Award, Users, Lightbulb,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import '../components/stylesheet/Main.css';
import '../components/stylesheet/index.css';
import background from '../assests/Untitled video - Made with Clipchamp.mp4';

interface ValueItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

const AboutAndHow: React.FC = () => {
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

  return (
    <>
      {/* Hero Video Section */}
      <section className="w-full relative h-[600px] lg:h-[730px] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={background} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black/40 z-10" />

        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h3 className="text-3xl sm:text-5xl lg:text-6xl font-playfair font-bold mb-4">
            About Istyaq Facility
          </h3>
          <p className="text-lg sm:text-2xl lg:text-3xl max-w-3xl leading-relaxed font-playfair">
            Turning ideas into beautiful realities
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="pt-0 pb-10 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-playfair md:text-4xl lg:text-5xl font-bold text-white mb-2 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 mt-12">
              See Us in Action
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-8">
            {/* Text */}
            <div className="space-y-6 order-2 lg:order-1 text-center lg:text-left">
              <h3 className="font-playfair text-2xl md:text-3xl font-bold text-white mb-6">
                "Building Dreams, Crafting Spaces"
              </h3>
              <p className="text-base text-white leading-relaxed">
                Istyaq Facility Interior & Constructs is a professional construction & interior
                design company offering end-to-end solutions for residential and commercial spaces.
                We transform your vision into reality with our expertise, dedication, and attention
                to detail. With years of experience in the industry, we have built a reputation for
                delivering exceptional results that exceed our clients' expectations. From concept
                to completion, we ensure every project reflects our commitment to quality and
                innovation.
              </p>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                alt="Interior Preview"
                className="rounded-xl w-full h-auto object-cover shadow-xl"
              />
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center group"
              >
                <div className="w-16 h-16 border-2 border-[#0e345a] rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300 bg-[#0e345a] hover:bg-[#0b2647]">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section id="how-it-works" className="bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 font-playfair relative inline-block text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-black after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
              Founders
            </h2>

            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                alt="Founder 1"
                className="rounded-xl w-full md:w-1/2 h-auto object-cover transform transition-transform duration-500 hover:scale-105"
              />
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                alt="Founder 2"
                className="rounded-xl w-full md:w-1/2 h-auto object-cover transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-10 mb-20">
            <Link to="/Contact">
              <button className="px-6 py-3 text-base sm:text-lg rounded-lg font-semibold text-black bg-white hover:bg-[#dcddde] transition-colors">
                Start Your Project Today
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutAndHow;
