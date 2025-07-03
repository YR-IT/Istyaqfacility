import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="relative">
      <Header />

      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center text-white relative"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-playfair font-semibold leading-tight mb-6">
            Get a Designer <br /> Space You'll Love
          </h1>
          <button className="bg-[#B99E5C] hover:bg-[#a8904d] text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md transition">
            START MY TRANSFORMATION
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
