import React from 'react';
import {Target,Award, Users,Lightbulb,Pencil,Ruler,Hammer, LucideIcon} from 'lucide-react';
import './Main.css';
import './index.css';
import Footer from './Footer';

interface ValueItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface StepItem {
  icon: JSX.Element;
  title: string;
  description: string;
}

const AboutAndHow: React.FC = () => {
  const values: ValueItem[] = [
    {
      icon: Award,
      title: 'Quality',
      description: 'We never compromise on the quality of materials and craftsmanship'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Bringing modern design concepts and latest construction techniques'
    },
    {
      icon: Users,
      title: 'Client Satisfaction',
      description: 'Your satisfaction is our top priority in every project we undertake'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Striving for perfection in every detail of our work'
    }
  ];

  const steps: StepItem[] = [
    {
      icon: <Pencil className="w-6 h-6" />,
      title: 'Consultation',
      description: 'We begin by understanding your needs and vision to create a personalized plan.'
    },
    {
      icon: <Ruler className="w-6 h-6" />,
      title: 'Design & Planning',
      description: 'Our experts design and plan every detail with precision and style.'
    },
    {
      icon: <Hammer className="w-6 h-6" />,
      title: 'Execution & Delivery',
      description: 'We bring your vision to life with quality craftsmanship and timely delivery.'
    }
  ];

  return (
    <>
      {/* ABOUT SECTION */}
      <section id="about" className="mt-8 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className=" text-3xl font-playfair md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 hover:underline">
              About Istyaq Facility
            </h2>
            <div className="w-24 h-1 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-8">
            <div className="space-y-6">
              <h3 className="underline font-playfair text-2xl md:text-3xl font-bold text-gray-800 mb-6">
               " Building Dreams, Crafting Spaces"
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Istyaq Facility Interior & Constructs is a professional construction & interior design
                company offering end-to-end solutions for residential and commercial spaces. We transform
                your vision into reality with our expertise, dedication, and attention to detail.
                With years of experience in the industry, we have built a reputation for delivering
                exceptional results that exceed our clients' expectations. From concept to completion,
                we ensure every project reflects our commitment to quality and innovation.
              </p>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="About Istyaq Facility"
                className="rounded-lg shadow-xl w-full transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center group"
              >
                <div className="button-gold-border button-gold-border:hover .border-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                  <value.icon className="h-8 w-8 transition-colors duration-300" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 maintheme font-playfair mt-0 hover:underline">
              How It Works
            </h2>
            <p className="text-xl maintheme max-w-2xl mx-auto">
              Our simple, three-step process ensures a smooth and satisfying experience from start to finish.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white border border-gold rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                <div className="p-8 text-center">
                  <div className="w-12 h-12 border border-gold text-black rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors duration-300 mx-auto">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold maintheme mb-2">{step.title}</h3>
                  <p className="maintheme">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="button-gold-border px-8 py-3 rounded-lg font-semibold mb-32">
              Start Your Project Today
            </button>
          </div>
        </div>
      </section>

      {/* Footer at the end */}
      <Footer />
    </>
  );
};

export default AboutAndHow;
