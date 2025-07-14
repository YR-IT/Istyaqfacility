import React from 'react';
import {Link} from 'react-router-dom';
import AboutNew from '../pages/About';
import backgroundVideo from '../assests/7578554-uhd_3840_2160_30fps.mp4';

const Home = () => {
  return (
    <div className="relative">
      <section className="h-screen w-full relative flex items-center justify-center text-white overflow-hidden">
       <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover z-0">
            <source src={backgroundVideo} type="video/mp4" />
            </video>
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-playfair font-semibold leading-tight mb-6 ">
            Get a Designer <br /> Space You'll Love
          </h1>
          <Link to ="/Portfolio">
          <button className="bg-[#0e345a] hover:bg-[#0b2647] text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md transition mr-4">
            VIEW OUR PROJECTS
          </button></Link>
          <Link to ="/contact">
          <button className="bg-[#0e345a] hover:bg-[#0b2647] text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md transition">
            GET IN TOUCH
          </button></Link>
        </div>
      </section>

      {/* About Section */}
      <AboutNew />

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
