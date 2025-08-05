import React from 'react';
import {
  Target, Award, Users, Lightbulb,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import '../components/stylesheet/Main.css';
import '../components/stylesheet/index.css';
import background from '../assests/Untitled video - Made with Clipchamp.mp4';
import bottomRightImg from '../assests/right1.png';
import leftImg from '../assests/left.jpg';
import slide1 from '../assests/slideShow1.jpg';
import slide2 from '../assests/slideShow2.jpg';
import slide3 from '../assests/slideShow3.jpg';
import slide4 from '../assests/slideShow4.jpg';
import slide5 from '../assests/slideShow5.jpg';
import slide6 from '../assests/slideShow6.jpg';
import slide7 from '../assests/slideShow7.jpg';

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
        {/* Innovation Section */}
        <section className="relative py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">

            {/* Top Left Decorative Image */}
            <img
              src={leftImg}
              alt="Decor Left"
              className="absolute top-1 left-0.5 w-96 opacity-50 z-0"
            />

            {/* Bottom Right Decorative Image */}
            <img
              src={bottomRightImg}
              alt="Decor Right"
              className="absolute bottom-0.5 right-0 w-[500px] opacity-100 z-0"
            />


            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <span className="inline-block bg-gray-900 text-white text-xs px-4 py-1 rounded-full mb-4 tracking-widest uppercase">
                Since 1986
              </span>

              <h2 className="text-4xl md:text-5xl font-extrabold font-serif text-gray-900 leading-tight mb-6">
                We believe innovation is the<br /> key to build a better future<br /> for our people.
              </h2>

              <p className="text-gray-600 text-lg mb-10">
                There is a need for a directing order of activity that, while bringing out the human energies,<br />
                won’t endure them to be squandered.
              </p>

              {/* Tabs Section */}
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { label: 'Commercial', icon: '🏢' },
                  { label: 'Industrial', icon: '🏭' },
                  { label: 'Residential', icon: '🏘️' },
                  { label: 'Corporate', icon: '🏙️' },
                ].map((tab, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-5 py-3 bg-white border border-gray-300 rounded-full shadow hover:shadow-lg transition-transform hover:scale-105 text-sm font-medium text-gray-700"
                  >
                    <span className="text-xl">{tab.icon}</span>
                    {tab.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>




        {/* What We Do */}
        {/* What We Do */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-16">
              <div>
                <span className="uppercase tracking-widest text-sm text-gray-500 font-medium">Latest Services</span>
                <h2 className="text-5xl font-bold font-playfair text-slate-900 mt-3">Discover what we do</h2>
              </div>
              <a
                href="/services"
                className="mt-6 md:mt-0 inline-flex items-center gap-2 border border-black px-6 py-2 rounded-full text-black hover:bg-black hover:text-white transition"
              >
                Take a Look
                <span className="inline-block w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
            </div>

            {/* Services Grid */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
              {[
                {
                  title: 'Interior Design',
                  description: 'Elegant, modern, and functional interiors with 3D visualizations, material selection, and custom concepts.',
                  image: slide1,
                },
                {
                  title: 'Construction',
                  description: 'End-to-end construction solutions from layout planning to full build execution.',
                  image: slide2,
                },
                {
                  title: 'Renovation',
                  description: 'Transform your space with modern upgrades, space optimization, and budget-friendly improvements.',
                  image: slide3,
                },
                {
                  title: 'House Services',
                  description: 'Quick and reliable plumbing, electrical, carpentry, and maintenance services.',
                  image: slide4,
                },
                {
                  title: 'Painting & Decor',
                  description: 'Stylish painting, wall design, and decor planning with premium finishes.',
                  image: slide5,
                },
                {
                  title: 'Modular Kitchen',
                  description: 'Custom-built modular kitchens designed with elegance, storage, and utility.',
                  image: slide6,
                },
              ].map((service, i) => (
                <div
                  key={i}
                  className="rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 bg-white"
                >
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 object-cover rounded-t-3xl"
                    />
                    <div className="absolute bottom-4 right-4 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-white hover:text-black border border-white transition">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-6 text-left">
                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>




        {/*Process*/}
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
            <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-16 text-slate-900 animate-fade-in-up">
              Our Core Values
            </h2>

            <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10">
              {[
                {
                  label: "Innovation",
                  icon: "💡",
                  description:
                    "We continuously push boundaries to bring unique ideas and creative solutions to every space we design.",
                },
                {
                  label: "Quality Craftsmanship",
                  icon: "🛠️",
                  description:
                    "From foundation to finish, our team delivers with precision, care, and a commitment to perfection.",
                },
                {
                  label: "Client-Centric",
                  icon: "🤝",
                  description:
                    "We listen first, act second. Our process revolves around transparency, respect, and building trust.",
                },
                {
                  label: "Sustainability",
                  icon: "🌿",
                  description:
                    "Our designs embrace eco-conscious materials and long-term functionality for a greener tomorrow.",
                },
              ].map((value, i) => (
                <div
                  key={i}
                  className="bg-gray-50 border border-gray-200 p-8 rounded-3xl shadow-sm hover:shadow-lg transition duration-300 hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}
                >
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">{value.label}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>






        {/* Meet the Team */}
        <section className="py- bg-white font-playfair">
          <h2 className="text-5xl md:text-7xl font-bold text-stone-800 mb-20 text-center">
            Meet The Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-20">
            {/* Istyaq Ahmad */}
            <div className="flex flex-col items-center text-center">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Istyaq Ahmad" className="w-40 h-40 rounded-full object-cover mb-6" />
              {/* Replace with image if available */}
              <h3 className="text-4xl font-bold text-gray-800">Istyaq Ahmad</h3>
              <p className="text-3xl text-black opacity-80 font-semibold mb-1">
                Founder & Creative Director
              </p>
              <p className="text-xl font-bold text-stone-500 max-w-md">
                A visionary interior designer with a passion for elegance and functionality.
              </p>
            </div>

            {/* Aman Verma */}
            <div className="flex flex-col items-center text-center">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Istyaq Ahmad" className="w-40 h-40 rounded-full object-cover mb-6" />
              <h3 className="text-4xl font-bold text-gray-800">Aman Verma</h3>
              <p className="text-3xl text-black opacity-80 font-semibold mb-1">

                Co-Founder & Operations Head
              </p>
              <p className="text-xl font-bold text-stone-500 max-w-md">
                Driving excellence through precision and process-driven project delivery.
              </p>
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
