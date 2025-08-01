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

      <div className="bg-white text-slate-900 font-sans">


        {/* Our Story */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

            {/* Image */}
            <div className="w-full overflow-hidden rounded-lg shadow-lg transform transition duration-700 hover:scale-105 animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" // replace with your actual image path
                alt="Our Story - Interior"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="text-center md:text-left animate-fade-in-up delay-200">
              <h2 className="text-4xl md:text-5xl font-bold font-playfair text-stone-500 mb-6 leading-tight">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed tracking-wide">
                <span className="font-medium text-slate-800">Founded with a vision</span> to transform everyday spaces into elegant masterpieces, <span className="font-semibold">Istyaq Facility</span> has always been about more than just interiors — it's about enriching lives through design.
                <br /><br />
                What began as a passion project has evolved into a <span className="text-blue-600 font-medium">full-service design firm</span> rooted in trust, transparency, and timeless aesthetics. Every project we take on is a reflection of our <span className="italic">commitment to beauty, functionality, and client satisfaction</span>.
              </p>
            </div>
          </div>
        </section>


{/* What We Do */}
<section className="py-20 px-6 bg-white">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-12 text-slate-900 animate-fade-in-up">
      What We Do
    </h2>

    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
      {[
        {
          title: "Residential Interiors",
          icon: "🏡",
          description: "Transforming houses into homes with cozy and elegant interiors.",
         image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",



        },
        {
          title: "Commercial Interiors",
          icon: "🏢",
          description: "Modern and functional spaces designed for productivity.",
         image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
        },
        {
          title: "Renovation & Remodeling",
          icon: "🔧",
          description: "Reimagining spaces with creative upgrades and makeovers.",
         image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
        },
        {
          title: "Modular Kitchens",
          icon: "🍽️",
          description: "Stylish and efficient modular kitchen designs tailored for you.",
         image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
        },
        {
          title: "Construction Services",
          icon: "🚧",
          description: "End-to-end construction with precision and durability.",
         image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
        },
        {
          title: "Turnkey Solutions",
          icon: "🗝️",
          description: "From planning to execution — we deliver ready-to-use spaces.",
         image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
        }
      ].map((service, i) => (
        <div
          key={i}
          className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
          style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'both' }}
        >
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <div className="text-3xl mb-2">{service.icon}</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
          <p className="text-gray-600 text-sm">{service.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>



        <section className="bg-white py-20 px-6">
          <div className="inline-flex items-center justify-center px-5 py-2 bg-gray-100 rounded-full text-gray-600 text-sm font-semibold uppercase tracking-wide mb-4 shadow-sm">
            The Process
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-16 leading-tight">
            Meet our studio in <br /> numbers:
          </h2>

          <div className="relative border-t border-gray-300">
            <div className="flex justify-between items-start text-center relative">

              {[
                {
                  year: "2005",
                  title: "London Creative Competition",
                  desc: "Award-winning debut that marked our entry into the world of visionary interior design.",
                },
                {
                  year: "2012",
                  title: "Building Center of Gloucester",
                  desc: "Redefined commercial space with functional elegance and timeless design.",


                },
                {
                  year: "2015",
                  title: "Global Kitchen and Bath",
                  desc: "Transformed everyday spaces into luxurious and intuitive experiences.",
                },
                {
                  year: "2020",
                  title: "Euro-plus Design of Wayland",
                  desc: "Blended European aesthetics with modern comfort for contemporary living.",
                },
              ].map((item, index) => (
                <div key={index} className="w-1/4 px-4 relative">
                  {/* Dot inside Circle */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>

                  {/* Year */}
                  <p className="text-gray-400 text-2xl mt-12">{item.year}</p>

                  {/* Title and Description */}
                  <div className="mt-6 text-left">
                    <h4 className="text-2xl font-semibold text-gray-900 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-lg mt-3 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 flex items-center gap-6">
            <span className="px-4 py-2 bg-black text-white text-base font-bold rounded-full">
              Hurry
            </span>
            <p className="text-gray-800 text-lg">
              Let&apos;s make something great together.{" "}
              <a href="/contact" className="text-black underline font-semiboldld">Got a project in mind?</a>
            </p>
          </div>
        </section>

        <section className="overflow-hidden bg-white py-6">
          <div className="whitespace-nowrap animate-marquee text-black text-4xl sm:text-6xl font-semibold tracking-wide font-sans">
            <span className="mx-10">Elevate Your Living Space 🛋️</span>
            <span className="mx-10">Minimalist Luxury Interiors ✨</span>
            <span className="mx-10">Design that Speaks Style 🎨</span>
            <span className="mx-10">Tailored Elegance for Every Home 🏡</span>
          </div>
        </section>


        {/* Core Values */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-12 text-slate-900 animate-fade-in-up">
              Our Core Values
            </h2>

            <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
              {[
                { label: "Innovation", icon: "💡" },
                { label: "Quality Craftsmanship", icon: "🛠️" },
                { label: "Client-Centric", icon: "🤝" },
                { label: "Sustainability", icon: "🌿" },
              ].map((value, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'both' }}
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800">{value.label}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>




        {/* Meet the Team */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold font-playfair mb-12">Meet the Team</h2>
            <div className="grid sm:grid-cols-2 gap-10">

              {/* Founder */}
              <div className="border border-gray-200 p-6 rounded-lg shadow hover:shadow-lg transition">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Istyaq Ahmad"
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold">Istyaq Ahmad</h3>
                <p className="text-gray-500">Founder & Creative Director</p>
                <p className="text-sm text-gray-600 mt-3">
                  A visionary interior designer with a passion for elegance and functionality.
                </p>
              </div>

              {/* Co-Founder */}
              <div className="border border-gray-200 p-6 rounded-lg shadow hover:shadow-lg transition">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Co-Founder"
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold">Aman Verma</h3>
                <p className="text-gray-500">Co-Founder & Operations Head</p>
                <p className="text-sm text-gray-600 mt-3">
                  Driving excellence through precision and process-driven project delivery.
                </p>
              </div>

            </div>
          </div>
        </section>


        {/* Milestones */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold font-playfair mb-12">Milestones</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">

              {/* Founded */}
              <div className="transition duration-300 transform hover:scale-105 bg-white p-6 rounded-xl shadow">
                <h3 className="text-3xl font-bold text-blue-600 mb-2">2018</h3>
                <p className="text-gray-700">Founded</p>
              </div>

              {/* Projects */}
              <div className="transition duration-300 transform hover:scale-105 bg-white p-6 rounded-xl shadow">
                <h3 className="text-3xl font-bold text-blue-600 mb-2">120+</h3>
                <p className="text-gray-700">Projects Completed</p>
              </div>

              {/* Team */}
              <div className="transition duration-300 transform hover:scale-105 bg-white p-6 rounded-xl shadow">
                <h3 className="text-3xl font-bold text-blue-600 mb-2">15+</h3>
                <p className="text-gray-700">Team Members</p>
              </div>

              {/* Awards */}
              <div className="transition duration-300 transform hover:scale-105 bg-white p-6 rounded-xl shadow">
                <h3 className="text-3xl font-bold text-blue-600 mb-2">10+</h3>
                <p className="text-gray-700">Awards & Recognitions</p>
              </div>

            </div>
          </div>
        </section>




        {/* CTA */}
        <section className="py-16 px-6 bg-gray-100 text-center">
          <h2 className="text-3xl font-bold font-playfair mb-4">Let’s Build Your Dream Space</h2>
          <p className="text-gray-700 mb-6">Reach out today to schedule a consultation or explore our work.</p>
          <a href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition">Schedule a Consultation</a>
        </section>


      </div>

    </>
  );
};

export default AboutAndHow;
