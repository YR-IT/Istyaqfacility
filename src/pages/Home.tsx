import React from "react";
import { Link } from "react-router-dom";
import backgroundVideo from "../assests/7578554-uhd_3840_2160_30fps.mp4";
import magazine from "../assests/magazine.jpg";
import "../components/stylesheet/Main.css";
import DesignGallery from "../components/DesignGallery";
import background from "../assests/background_footer.jpg";
import template from "../assests/image.png";
import {
  Users,
  Palette,
  Clock,
  DollarSign,
  Gem,
} from "lucide-react";

// ✅ Feature Cards Data
const features = [
  {
    icon: <Users size={32} className="text-stone-700" />,
    title: "Expert Designers",
    desc: "Our experienced team brings your dream space to life with creativity and precision.",
  },
  {
    icon: <Palette size={32} className="text-stone-700" />,
    title: "Tailored Interiors",
    desc: "Each design is customized to reflect your personality and lifestyle needs.",
  },
  {
    icon: <Clock size={32} className="text-stone-700" />,
    title: "On-Time Delivery",
    desc: "We ensure timely project completion without compromising on quality.",
  },
  {
    icon: <DollarSign size={32} className="text-stone-700" />,
    title: "Affordable Pricing",
    desc: "Get premium design services at budget-friendly rates.",
  },
  {
    icon: <Gem size={32} className="text-stone-700" />,
    title: "Premium Materials",
    desc: "We use only high-quality and durable materials in every project.",
  },
];

// ✅ Why Choose Us Component
const WhyChooseUs = () => (
  <section className="bg-white px-4 md:px-20 py-10">
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 font-playfair text-stone-700">
      Why Choose Us
    </h2>

    <div className="overflow-x-auto whitespace-nowrap hide-scrollbar">
      <div className="flex gap-6 animate-scrollX">
        {features.map((item, index) => (
          <div
            key={index}
            className="min-w-[300px] max-w-xs bg-stone-100 p-6 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 flex-shrink-0 h-[240px] flex flex-col justify-start"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-stone-800 mb-2">{item.title}</h3>
            <p className="text-stone-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>

    <style>{`
      .animate-scrollX {
        animation: scrollX 40s linear infinite;
      }
      @keyframes scrollX {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .hide-scrollbar::-webkit-scrollbar {
        display: none;
      }
      .hide-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `}</style>
  </section>
);

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
          <h1 className="text-6xl sm:text-6xl font-playfair font-semibold leading-tight mb-6">
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

      <WhyChooseUs />

      {/* PROCESS SECTION */}
      <section className="py-24 px-0 bg-white font-playfair">
        <h2 className="text-5xl md:text-7xl font-bold text-stone-800 mb-20 text-center">
          Interior Design Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 w-full">
          {[
            {
              number: "01",
              title: "We Visit You At Home",
              desc: "We will arrange a visit to discuss your requirements in detail.",
              image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
            },
            {
              number: "02",
              title: "Preliminary Computer Designs",
              desc: "",
              image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
            },
            {
              number: "03",
              title: "Begin The Detailed Design Process",
              desc: "",
              image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
            },
            {
              number: "04",
              title: "Project Execution",
              desc: "",
              image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
            },
          ].map((step, idx) => (
            <div key={idx} className="relative group h-[600px] w-full overflow-hidden cursor-pointer transition-all duration-700">
              <div className="absolute inset-0 bg-stone-600 transition-all duration-700 ease-in-out group-hover:opacity-0 z-10"></div>
              <img
                src={step.image}
                alt={step.title}
                className="absolute inset-0 w-full h-full object-cover opacity-0 transform transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:rotate-[-2deg] group-hover:scale-110 z-0"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-700 z-0"></div>
              <div className="relative z-20 flex flex-col justify-end h-full p-8 text-white">
                <div className="text-[5rem] md:text-[6rem] font-bold text-white/30 mb-4 leading-none">{step.number}</div>
                <h3 className="text-2xl font-semibold">{step.title}</h3>
                {step.desc && <p className="text-sm text-gray-200 max-w-[250px] mt-2">{step.desc}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONSULTATION SECTION */}
      <section>
        <div className="relative">
          <img src={template} className="w-100" alt="Template" />
          <Link to="/contact">
            <button className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-stone-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-black transition flex items-center gap-2 mb-48 ml-40">
              BOOK APPOINTMENT <span className="text-xl">→</span>
            </button>
          </Link>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-snug font-playfair">
              Creative solutions <br />
              By Professional <br />
              Interior designers
            </h2>
            <p className="text-gray-600 mb-6">
              Your space is an expression of who you are, and its design should match your lifestyle. Whether you have
              traditional tastes or desire a modern feel, we can design your dream space to suit any purpose.{" "}
              <span className="text-black font-medium">We provide the best interior design in Gurgaon.</span>
            </p>
            <div className="flex items-center mb-6 ">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2703/2703925.png"
                alt="Icon"
                className="w-12 h-12 mb-9"
              />
              <div>
                <h3 className="text-2xl font-bold text-black mt-12">100+</h3>
                <p className="text-gray-600 text-sm">Custom Spaces Designed</p>
                <Link to="/portfolio">
                  <button className="bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-black transition flex items-center ml-32 mt-12">
                    SEE MORE <span className="text-xl">→</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-24 px-4 md:px-20 text-white"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
        <div className="relative z-10 text-center mb-12">
          <h2 className="text-white text-5xl font-bold font-playfair">What Our Clients Say</h2>
        </div>
        <div className="relative z-10 overflow-hidden">
          <div className="flex w-max animate-marquee gap-8">
            {[...Array(2)].flatMap(() =>
              [
                {
                  name: "Amrita Chauhan",
                  review: "Our new arts center designed by Anshul Architects has become a landmark in the city...",
                },
                {
                  name: "Sumita Saini",
                  review: "Absolutely loved the home design. Their ideas were innovative and they listened carefully.",
                },
                {
                  name: "Prince Kumar",
                  review: "From concept to completion, their ability to manage the project efficiently...",
                },
                {
                  name: "Neha Sharma",
                  review: "Exceptional creativity and professionalism. They transformed our vision into reality.",
                },
                {
                  name: "Rohit Khanna",
                  review: "Their team was efficient, creative, and communicative. Highly recommended!",
                },
              ].map((client, index) => (
                <div
                  key={index + client.name}
                  className="min-w-[320px] max-w-sm bg-white bg-opacity-20 backdrop-blur-md text-white rounded-xl p-6 shadow-lg flex-shrink-0"
                >
                  <h3 className="text-2xl font-semibold mb-2">{client.name}</h3>
                  <div className="text-yellow-400 mb-4 text-xl">★★★★★</div>
                  <p className="text-md leading-relaxed font-light">“{client.review}”</p>
                </div>
              ))
            )}
          </div>
        </div>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 40s linear infinite;
          }
        `}</style>
      </section>
    </div>
  );
};

export default Home;
