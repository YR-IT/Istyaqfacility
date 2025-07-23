import React from "react";
import { Link } from "react-router-dom";
import backgroundVideo from "../assests/7578554-uhd_3840_2160_30fps.mp4";
import magazine from "../assests/magazine.jpg";
import "../components/stylesheet/Main.css";
import DesignGallery from "../components/DesignGallery"; // 

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
          <h1 className="text-4xl Smd:text-6xl font-playfair font-semibold leading-tight mb-6">
            Get a Designer <br /> Space You'll Love
          </h1>
          <div className="flex flex-col sm:flex-row sm:gap-3">
            <Link to="/Portfolio">
              <button className="bg-transparent hover:bg-[#fbfafa76] text-white border border-white px-8 py-3 rounded-lg text-sm sm:text-lg font-semibold shadow-md transition mb-2 sm:mb-0">
                VIEW OUR PROJECTS
              </button>
            </Link>
            <Link to="/contact">
              <button className="bg-transparent hover:bg-[#fbfafa76] text-white border border-white px-8 py-3 rounded-lg text-sm sm:text-lg font-semibold shadow-md transition">
                GET IN TOUCH
              </button>
            </Link>
          </div>
        </div>
      </section>
      <DesignGallery />

      {/* Process Section*/}
      <section className="bg-white py-24 px-6 md:px-20 text-center">
  {/* Top Label */}
  <div className="mb-4 inline-block bg-stone-200 text-stone-600 px-4 py-1 rounded-full text-sm font-medium tracking-wider">
    THE PROCESS
  </div>

  {/* Main Heading */}
  <h2 className="text-4xl md:text-6xl font-bold text-stone-800 mb-20">
    Interior Design Process
  </h2>

  {/* Process Steps */}
  <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto space-y-12 md:space-y-0 md:space-x-6">
    {[
      {
        title: "Space Planning",
        desc: "We analyze and organize your space for optimal functionality.",
        icon: "https://cdn-icons-png.flaticon.com/512/2730/2730426.png",
      },
      {
        title: "Home Staging",
        desc: "We curate furnishings and layout to enhance appeal.",
        icon: "https://cdn-icons-png.flaticon.com/512/2893/2893949.png",
      },
      {
        title: "Interior Design",
        desc: "We craft unique themes and aesthetics for your space.",
        icon: "https://cdn-icons-png.flaticon.com/512/8759/8759874.png",
      },
      {
        title: "Remodeling Services",
        desc: "We execute complete transformations of your interiors.",
        icon: "https://cdn-icons-png.flaticon.com/512/2658/2658950.png",
      },
    ].map((step, index, arr) => (
      <div key={index} className="flex flex-col items-center text-center w-full relative">
        {/* Dashed line after (except last) */}
        {index < arr.length - 1 && (
          <div className="hidden md:block absolute right-[-50%] top-12 w-full border-t border-dashed border-gray-400 z-0"></div>
        )}

        <div className="relative z-10 group">
          <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center shadow-md mb-4 transition-all duration-300 group-hover:bg-blue-600 group-hover:scale-110">
            <img
              src={step.icon}
              alt={step.title}
              className="w-12 h-12 transition-all duration-300 group-hover:scale-110 group-hover:filter group-hover:brightness-0 group-hover:invert"
            />
          </div>
          <span className="text-sm text-gray-400 font-medium absolute -top-2 -right-2">
            0{index + 1}
          </span>
        </div>

        <h3 className="text-lg font-semibold text-stone-800">{step.title}</h3>
        <p className="text-gray-500 text-sm mt-2 px-2 max-w-[200px]">{step.desc}</p>
      </div>
    ))}
  </div>
</section>




      {/* CONSULTATION SECTION */}
      <section className="py-20 px-6 md:px-20 flex flex-col lg:flex-row items-center justify-between gap-12 bg-white">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-5xl text-stone-500 mb-4 font-playfair font-semibold">
            FREE LUXURY DESIGN CONSULTATION
          </h2>
          <p className="text-black mb-6 text-lg">
            Your design is an expression of who you are, and it should reflect your personality and lifestyle. Whether you love classic, traditional interiors or prefer a sleek, modern look, we create custom designs that bring your vision to life. Our expert team specializes in interior design, home makeovers, and space planning to make every corner both beautiful and functional.
          </p>
          <Link to="/contact">
            <button className="bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-black transition flex items-center gap-2 ml-32">
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

      {/* ABOUT US SECTION */}
      <section className="bg-white py-20 px-6 md:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="grid grid-cols-2 gap-4 w-full lg:w-1/2">
            {["1", "2", "3"].map((_, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-xl shadow-lg ${i === 2 ? "col-span-2" : ""}`}
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
              Your space is an expression of who you are, and its design should match your lifestyle. Whether you have traditional tastes or desire a modern feel, we can design your dream space to suit any purpose.{" "}
              <span className="text-black font-medium">We provide the best interior design in Gurgaon.</span>
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
        <h2 className="text-black text-5xl md:text-5xl font-bold text-center mb-6 font-playfair">
          What Our Clients Say
        </h2>
        <h2 className="text-black text-3xl md:text-4xl font-bold text-center mb-10">
          Discover the experiences of those who trusted us
        </h2>

        <div className="relative overflow-hidden">
          <div className="flex gap-6 whitespace-nowrap animate-slide px-2">
            {[
              {
                name: "Prince Kumar",
                review: "From concept to completion, ability to manage the project efficiently and address every detail ensured that everything ran smoothly.",
              },
              {
                name: "Jai Jindal",
                review: "Designs are not only aesthetically pleasing but also highly functional. Her dedication and passion were evident throughout our renovation project.",
              },
              {
                name: "Neha Sharma",
                review: "Exceptional creativity and professionalism. They transformed our vision into a stunning reality beyond expectations.",
              },
              {
                name: "Rohit Khanna",
                review: "Their team was efficient, creative, and communicative. Highly recommended for modern, functional design.",
              },
            ].map((client, index) => (
              <div key={index} className="min-w-[250px] bg-slate-800 p-6 rounded-xl transition duration-200 flex-shrink-0">
                <p className="italic mb-4">“{client.review}”</p>
                <div className="text-yellow-400 mb-2">★★★★★</div>
                <h4 className="font-semibold">{client.name}</h4>
                <p className="text-gray-400 text-sm">VALUED CLIENT</p>
              </div>
            ))}
          </div>
        </div>

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
