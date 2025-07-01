import React, { useEffect, useState } from 'react';
import { ArrowRight, Phone, Award, Play } from 'lucide-react';
import anime from 'animejs';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Animate hero content
    anime.timeline()
      .add({
        targets: '.hero-title',
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutQuart'
      })
      .add({
        targets: '.hero-subtitle',
        translateY: [30, 0],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutQuart'
      }, '-=600')
      .add({
        targets: '.hero-buttons',
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 600,
        easing: 'easeOutQuart'
      }, '-=400')
      .add({
        targets: '.hero-stats',
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutQuart'
      }, '-=800');

    // Floating animation for background elements
    anime({
      targets: '.floating-element',
      translateY: [-15, 15],
      duration: 3000,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine',
      delay: anime.stagger(500)
    });

    // Parallax effect for background elements
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-element');
      
      parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    anime({
      targets: button.querySelector('.button-ripple'),
      scale: [0, 1],
      opacity: [0.5, 0],
      duration: 600,
      easing: 'easeOutQuart'
    });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-cream-50 via-wood-50 to-wood-100 overflow-hidden pt-20">
      {/* Interactive Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23926543' fill-opacity='0.3'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Interactive Floating Background Elements */}
      <div 
        className="floating-element parallax-element absolute top-32 left-10 w-32 h-32 bg-wood-200/20 rounded-full blur-xl transition-all duration-1000"
        style={{
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
        }}
      ></div>
      <div 
        className="floating-element parallax-element absolute top-40 right-16 w-24 h-24 bg-cream-300/30 rounded-full blur-lg transition-all duration-700"
        style={{
          transform: `translate(${mousePosition.x * -0.008}px, ${mousePosition.y * 0.008}px)`
        }}
      ></div>
      <div 
        className="floating-element parallax-element absolute bottom-32 left-20 w-40 h-40 bg-wood-300/15 rounded-full blur-2xl transition-all duration-1200"
        style={{
          transform: `translate(${mousePosition.x * 0.005}px, ${mousePosition.y * -0.005}px)`
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold text-wood-900 leading-tight mb-6">
              Building Dreams,
              <span className="text-wood-600 block relative">
                Crafting Spaces
                <div className="absolute -inset-2 bg-gradient-to-r from-wood-200/50 to-cream-200/50 rounded-lg -z-10 blur-sm"></div>
              </span>
            </h1>
            
            <p className="hero-subtitle text-xl md:text-2xl text-wood-700 mb-8 leading-relaxed max-w-3xl mx-auto">
              Transform your vision into reality with our expert construction, interior design, and facility management services. 
              Where quality meets innovation.
            </p>

            <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button 
                className="group relative overflow-hidden bg-wood-700 hover:bg-wood-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
                onMouseEnter={handleButtonHover}
              >
                <div className="button-ripple absolute inset-0 bg-white/20 rounded-full scale-0"></div>
                <span className="relative z-10">Start Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </button>
              
              <button 
                className="group relative overflow-hidden border-2 border-wood-600 text-wood-700 hover:bg-wood-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center space-x-2"
                onMouseEnter={handleButtonHover}
              >
                <div className="button-ripple absolute inset-0 bg-wood-600/20 rounded-full scale-0"></div>
                <Phone className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Get Free Quote</span>
              </button>
            </div>
          </div>

          {/* Interactive Stats Section */}
          <div className="hero-stats grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: "500+", label: "Projects Completed", icon: Award },
              { number: "15+", label: "Years Experience", icon: Award },
              { number: "100%", label: "Client Satisfaction", icon: Award }
            ].map((stat, index) => (
              <div 
                key={index}
                className="group bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-wood-100 hover:bg-white/80 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 cursor-pointer"
                onMouseEnter={(e) => {
                  anime({
                    targets: e.currentTarget.querySelector('.stat-icon'),
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                    duration: 800,
                    easing: 'easeOutElastic(1, .8)'
                  });
                }}
              >
                <div className="flex items-center justify-center mb-3">
                  <stat.icon className="stat-icon w-8 h-8 text-wood-600 group-hover:text-wood-700 transition-colors" />
                </div>
                <h3 className="text-3xl font-bold text-wood-800 mb-2 group-hover:text-wood-900 transition-colors">{stat.number}</h3>
                <p className="text-wood-600 font-medium group-hover:text-wood-700 transition-colors">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;