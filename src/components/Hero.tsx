import React from 'react';
import { ArrowRight, MessageCircle, Phone, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(30, 64, 175, 0.7)), url('https://images.pexels.com/photos/276508/pexels-photo-276508.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="animate-fade-in-up">
          <div className="relative mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-6 leading-tight relative overflow-hidden">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 glow-text shine-effect">
                Istyaq Facility
              </span>
              <span className="block text-3xl md:text-4xl lg:text-6xl text-blue-200 font-medium mt-4 shine-effect">
                Interior & Constructs
              </span>
            </h1>
            
            {/* Floating sparkles */}
            <div className="absolute top-0 left-1/4 animate-bounce">
              <Sparkles className="h-8 w-8 text-yellow-400 animate-pulse" />
            </div>
            <div className="absolute top-1/3 right-1/4 animate-bounce" style={{ animationDelay: '1s' }}>
              <Sparkles className="h-6 w-6 text-orange-400 animate-pulse" />
            </div>
            <div className="absolute bottom-1/4 left-1/3 animate-bounce" style={{ animationDelay: '2s' }}>
              <Sparkles className="h-7 w-7 text-yellow-300 animate-pulse" />
            </div>
          </div>
          
          <p className="text-xl md:text-2xl lg:text-4xl mb-8 font-light max-w-4xl mx-auto leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
            Delivering quality craftsmanship and modern design to turn your vision into reality
          </p>
          
          <p className="text-lg md:text-xl mb-12 text-blue-100 max-w-3xl mx-auto shine-effect">
            Professional construction & interior design company offering end-to-end solutions 
            for residential and commercial spaces
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <button
              onClick={scrollToContact}
              className="group bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 hover:from-yellow-500 hover:via-orange-600 hover:to-yellow-700 text-black px-10 py-5 rounded-xl text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-3 pulse-glow btn-primary"
            >
              <span>Get a Quote</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a
              href="https://wa.me/919646703020"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-5 rounded-xl text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-3 pulse-glow btn-primary"
            >
              <MessageCircle className="h-6 w-6" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          <div className="flex justify-center">
            <a href="tel:+919646703020" className="flex items-center space-x-3 text-blue-200 hover:text-yellow-400 transition-colors group">
              <Phone className="h-6 w-6 group-hover:animate-pulse" />
              <span className="text-xl font-medium">+91 9646703020</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center pulse-glow">
          <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Ambient glow effects */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-yellow-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-10 w-24 h-24 bg-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default Hero;