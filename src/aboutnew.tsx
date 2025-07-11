import React from 'react';
import {
  Target,
  Award,
  Users,
  Lightbulb,
  Pencil,
  Ruler,
  Hammer,
  LucideIcon,
} from 'lucide-react';
import './components/Main.css';
import './components/index.css';
import background from '../assests/Untitled video - Made with Clipchamp.mp4';
import './components/Main.css'
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

  const steps: StepItem[] = [
    {
      icon: <Pencil className="w-6 h-6" />,
      title: 'Consultation',
      description: 'We begin by understanding your needs and vision to create a personalized plan.',
    },
    {
      icon: <Ruler className="w-6 h-6" />,
      title: 'Design & Planning',
      description: 'Our experts design and plan every detail with precision and style.',
    },
    {
      icon: <Hammer className="w-6 h-6" />,
      title: 'Execution & Delivery',
      description: 'We bring your vision to life with quality craftsmanship and timely delivery.',
    },
  ];

  return (
    <>
    
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
          <h3 className="text-6xl font-playfair font-bold mb-4">
            See Us in Action
          </h3>
          <p className="text-3xl max-w-5xl leading-relaxed font-playfair">
            Turning ideas into beautiful realities
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="mt-8 pt-20 pb-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-playfair md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 mt-8">
              About Istyaq Facility
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-8">
            <div className="space-y-6">
              <h3 className="font-playfair text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
                "Building Dreams, Crafting Spaces"
              </h3>
              <p className="text-base text-gray-600 leading-relaxed text-center">
                Istyaq Facility Interior & Constructs is a professional construction & interior
                design company offering end-to-end solutions for residential and commercial spaces.
                We transform your vision into reality with our expertise, dedication, and attention
                to detail. With years of experience in the industry, we have built a reputation for
                delivering exceptional results that exceed our clients' expectations. From concept
                to completion, we ensure every project reflects our commitment to quality and
                innovation.
              </p>
            </div>

            <div className="rounded-xl shadow-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                alt="Interior Preview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center group "
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

      {/* HOW IT WORKS SECTION */}
      <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold mb-6 font-playfair relative inline-block
              after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] 
              after:w-full after:bg-black after:scale-x-0 hover:after:scale-x-100 
              after:transition-transform after:duration-300 after:origin-left"
            >
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our simple, three-step process ensures a smooth and satisfying experience from start
              to finish.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white border border-[#0e345a] rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group "
              >
                <div className="p-8 text-center">
                  <div className="w-12 h-12 border border-[#0e345a] rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 mx-auto bg-[#0e345a] hover:bg-[#0b2647] text-white ">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#0e345a] mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA BUTTON */}
          <div className="text-center mt-16">
            <button className="px-8 py-3 rounded-lg font-semibold text-white bg-[#0e345a] hover:bg-[#0b2647] transition-colors mb-32">
              Start Your Project Today
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      
    </>
  );
};

export default AboutAndHow;
