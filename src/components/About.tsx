import React, { useEffect, useState } from 'react';
import { Users, Award, Target, Shield, TrendingUp, Clock } from 'lucide-react';
import anime from 'animejs';

const About: React.FC = () => {
  const [activeValue, setActiveValue] = useState<number | null>(null);
  const [counters, setCounters] = useState({ projects: 0, years: 0, satisfaction: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime.timeline()
              .add({
                targets: '.about-content',
                translateX: [-50, 0],
                opacity: [0, 1],
                duration: 1000,
                easing: 'easeOutQuart'
              })
              .add({
                targets: '.about-image',
                translateX: [50, 0],
                opacity: [0, 1],
                duration: 1000,
                easing: 'easeOutQuart'
              }, '-=800')
              .add({
                targets: '.value-card',
                scale: [0.8, 1],
                opacity: [0, 1],
                duration: 600,
                delay: anime.stagger(150),
                easing: 'easeOutQuart'
              }, '-=400');

            // Animate counters
            anime({
              targets: counters,
              projects: 500,
              years: 15,
              satisfaction: 100,
              duration: 2000,
              easing: 'easeOutQuart',
              update: () => setCounters({ ...counters })
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Quality Excellence",
      description: "Uncompromising commitment to superior craftsmanship and materials.",
      color: "from-wood-500 to-wood-600"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Skilled professionals with years of industry experience.",
      color: "from-cream-500 to-wood-500"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Timely Delivery",
      description: "Projects completed on schedule without compromising quality.",
      color: "from-wood-600 to-wood-700"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Trust & Reliability",
      description: "Building lasting relationships through transparency and integrity.",
      color: "from-wood-400 to-wood-600"
    }
  ];

  const handleValueHover = (index: number, isEntering: boolean) => {
    setActiveValue(isEntering ? index : null);
    
    if (isEntering) {
      anime({
        targets: `.value-card-${index}`,
        scale: [1, 1.05],
        duration: 300,
        easing: 'easeOutQuart'
      });
      
      anime({
        targets: `.value-card-${index} .value-icon`,
        rotate: [0, 360],
        scale: [1, 1.2],
        duration: 600,
        easing: 'easeOutElastic(1, .8)'
      });
    } else {
      anime({
        targets: `.value-card-${index}`,
        scale: [1.05, 1],
        duration: 300,
        easing: 'easeOutQuart'
      });
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-cream-50 relative overflow-hidden">
      {/* Interactive Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-wood-200/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-cream-300/15 rounded-full blur-2xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Content */}
          <div className="about-content">
            <h2 className="text-4xl lg:text-5xl font-bold text-wood-900 mb-6">
              About Istyaq Facility Interior & Constructs
            </h2>
            
            <p className="text-lg text-wood-700 leading-relaxed mb-6">
              With over 15 years of excellence in the construction and interior design industry, 
              Istyaq Facility Interior & Constructs has established itself as a trusted partner 
              for clients seeking quality, innovation, and reliability.
            </p>

            <p className="text-lg text-wood-700 leading-relaxed mb-8">
              Our comprehensive approach combines traditional craftsmanship with modern 
              construction techniques, ensuring every project exceeds expectations. From 
              residential homes to commercial complexes, we bring your vision to life with 
              precision and care.
            </p>

            {/* Interactive Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-white/60 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group">
                <div className="text-2xl font-bold text-wood-800 group-hover:text-wood-900 transition-colors">
                  {Math.round(counters.projects)}+
                </div>
                <div className="text-sm text-wood-600">Projects</div>
              </div>
              <div className="text-center p-4 bg-white/60 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group">
                <div className="text-2xl font-bold text-wood-800 group-hover:text-wood-900 transition-colors">
                  {Math.round(counters.years)}+
                </div>
                <div className="text-sm text-wood-600">Years</div>
              </div>
              <div className="text-center p-4 bg-white/60 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group">
                <div className="text-2xl font-bold text-wood-800 group-hover:text-wood-900 transition-colors">
                  {Math.round(counters.satisfaction)}%
                </div>
                <div className="text-sm text-wood-600">Satisfaction</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              {['Licensed & Insured', 'ISO Certified', '24/7 Support'].map((badge, index) => (
                <div 
                  key={badge}
                  className="bg-wood-100 px-4 py-2 rounded-full hover:bg-wood-200 transition-all duration-300 cursor-pointer transform hover:scale-105"
                >
                  <span className="text-wood-800 font-medium">{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Image */}
          <div className="about-image">
            <div className="relative h-96 lg:h-[500px] bg-gradient-to-br from-wood-200 to-wood-300 rounded-3xl shadow-2xl overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-wood-400/20 to-wood-600/20 group-hover:from-wood-400/30 group-hover:to-wood-600/30 transition-all duration-500"></div>
              
              {/* Floating Elements */}
              <div className="absolute top-8 left-8 w-24 h-24 bg-wood-500/30 rounded-full blur-xl group-hover:scale-110 transition-transform duration-700"></div>
              <div className="absolute bottom-8 right-8 w-32 h-32 bg-cream-400/40 rounded-full blur-xl group-hover:scale-110 transition-transform duration-700 delay-200"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-wood-600/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-1000"></div>
              
              <div className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <div className="text-center text-wood-800">
                  <div className="w-20 h-20 mx-auto mb-4 bg-wood-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-wood-700 group-hover:scale-110 transition-all duration-300">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-wood-900 transition-colors">Expert Team</h3>
                  <p className="text-wood-600 group-hover:text-wood-700 transition-colors">Professional craftsmen at work</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-wood-900 mb-4">Our Core Values</h3>
          <p className="text-lg text-wood-700 max-w-2xl mx-auto">
            The principles that guide everything we do and define our commitment to excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className={`value-card value-card-${index} bg-white p-6 rounded-xl shadow-lg border border-wood-100 text-center cursor-pointer transition-all duration-300 relative overflow-hidden`}
              onMouseEnter={() => handleValueHover(index, true)}
              onMouseLeave={() => handleValueHover(index, false)}
            >
              {/* Animated Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className={`value-icon w-12 h-12 bg-gradient-to-br ${value.color} rounded-lg flex items-center justify-center text-white mx-auto mb-4 relative z-10`}>
                {value.icon}
              </div>
              <h4 className="text-lg font-bold text-wood-900 mb-2 relative z-10">{value.title}</h4>
              <p className="text-wood-700 text-sm leading-relaxed relative z-10">{value.description}</p>
              
              {/* Hover Effect Indicator */}
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${value.color} transform scale-x-0 transition-transform duration-300 ${activeValue === index ? 'scale-x-100' : ''}`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;