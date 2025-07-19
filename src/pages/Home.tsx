import React from 'react';
import { Link } from 'react-router-dom';
import backgroundVideo from '../assests/7578554-uhd_3840_2160_30fps.mp4';
import magazine from '../assests/magazine.jpg';
import '../components/stylesheet/Main.css';

const Home = () => {
  return (
    <div className="relative">
      {/* HERO SECTION */}
      <section className="h-screen w-full relative flex items-center justify-center text-white overflow-hidden">
        <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover z-0">
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-playfair font-semibold leading-tight mb-6">
            Get a Designer <br /> Space You'll Love
          </h1>
          <div className="flex flex-col sm:flex-row sm:gap-3">
            <Link to="/Portfolio">
              <button className="bg-transparent hover:bg-[#222938] text-white border border-white px-8 py-3 rounded-lg text-sm sm:text-lg font-semibold shadow-md transition mb-2 sm:mb-0">
                VIEW OUR PROJECTS
              </button>
            </Link>
            <Link to="/contact">
              <button className="bg-transparent hover:bg-[#222938] text-white border border-white px-8 py-3 rounded-lg text-sm sm:text-lg font-semibold shadow-md transition">
                GET IN TOUCH
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CONSULTATION SECTION */}
      <section className="bg-gray-100 py-20 px-6 md:px-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Free Luxury Design Consultation</h2>
          <p className="text-gray-600 mb-6">
            Your design is an expression of who you are, and its design should match your lifestyle. Whether you have traditional tastes or desire a modern feel, we can design your dream space to suit any purpose.
          </p>
          <Link to="/contact">
            <button className="bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-black transition flex items-center gap-2">
              BOOK APPOINTMENT <span className="text-xl">→</span>
            </button>
          </Link>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative overflow-hidden rounded-xl shadow-xl group">
            <img
              src={magazine}
              alt="Magazine Mockup"
              className="max-w-full h-auto transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition" />
          </div>
        </div>
      </section>

      {/* IMAGE GALLERY SECTION */}
      <section className="bg-grey-100 py-16 px-4 md:px-20">
        <h2 className="text-5xl md:text-5xl font-bold text-gray-800 text-center mb-10 font-playfair">
          See Our Stunning <p className="mt-4">Transformations</p>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
              title: 'Luxury Living Room',
            },
            {
              url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
              title: 'Elegant Office Space',
            },
            {
              url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
              title: 'Contemporary Kitchen',
            },
            {
              url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
              title: 'Modern Workspace',
            },
            {
              url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
              title: 'Creative Studio Design',
            },
            {
              url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
              title: 'Elegant Hallway',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <h3 className="text-white text-xl font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section className="bg-white py-20 px-6 md:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="grid grid-cols-2 gap-4 w-full lg:w-1/2">
            {['1', '2', '3'].map((_, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-xl shadow-lg ${i === 2 ? 'col-span-2' : ''}`}
              >
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                  alt={`Design ${i + 1}`}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition" />
              </div>
            ))}
          </div>
          <div className="w-full lg:w-1/2">
            <p className="font-semibold uppercase mb-2 tracking-wide">About Us</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-snug">
              Creative solutions <br />
              By Professional <br />
              Interior designers
            </h2>
            <p className="text-gray-600 mb-6">
              Your space is an expression of who you are, and its design should match your lifestyle.
              Whether you have traditional tastes or desire a modern feel, we can design your dream space
              to suit any purpose. <span className="text-black font-medium">We provide the best interior design in Gurgaon.</span>
            </p>
            <div className="flex items-center gap-4 mt-6">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2703/2703925.png"
                alt="Icon"
                className="w-12 h-12"
              />
              <div>
                <h3 className="text-2xl font-bold text-black">100+</h3>
                <p className="text-gray-600 text-sm">Custom Spaces Designed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT TESTIMONIAL SECTION */}
      <section className="bg-grey-100 py-16 px-4 md:px-20 text-white">
        <h2 className="text-black text-5xl md:text-5xl font-bold text-center mb-6 font-playfair">What Our Clients Say</h2>
        <h2 className="text-black text-3xl md:text-4xl font-bold text-center mb-10">
          Discover the experiences of those who trusted us
        </h2>

        <div className="relative overflow-hidden">
          <div className="flex gap-6 whitespace-nowrap animate-slide px-2">
            {[
              {
                name: 'Prince Kumar',
                review:
                  'From concept to completion, ability to manage the project efficiently and address every detail ensured that everything ran smoothly.',
              },
              {
                name: 'Jai Jindal',
                review:
                  'Designs are not only aesthetically pleasing but also highly functional. Her dedication and passion were evident throughout our renovation project.',
              },
              {
                name: 'Neha Sharma',
                review:
                  'Exceptional creativity and professionalism. They transformed our vision into a stunning reality beyond expectations.',
              },
              {
                name: 'Rohit Khanna',
                review:
                  'Their team was efficient, creative, and communicative. Highly recommended for modern, functional design.',
              },
            ].map((client, index) => (
              <div
                key={index}
                className="min-w-[250px] bg-slate-800 p-6 rounded-xl transition duration-200 flex-shrink-0"
              >
                <p className="italic mb-4">“{client.review}”</p>
                <div className="text-yellow-400 mb-2">★★★★★</div>
                <h4 className="font-semibold">{client.name}</h4>
                <p className="text-gray-400 text-sm">VALUED CLIENT</p>
              </div>
            ))}
          </div>
        </div>

        {/* Slide animation keyframes */}
        <style>
          {`
            @keyframes slide {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-slide {
              animation: slide 30s linear infinite;
            }
          `}
        </style>
      </section>
    </div>
  );
};

export default Home;
