import React, { useEffect, useState } from 'react';
import { Home, Building, Wrench, Palette, Hammer, Settings, ArrowRight } from 'lucide-react';
import anime from 'animejs';

const Services: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: '.service-card',
              translateY: [40, 0],
              opacity: [0, 1],
              duration: 800,
              delay: anime.stagger(200),
              easing: 'easeOutQuart'
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      observer.observe(servicesSection);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Construction Services",
      description: "Complete construction solutions from foundation to finishing, ensuring quality and durability in every project.",
      features: ["Residential Construction", "Commercial Buildings", "Project Management"],
      color: "from-wood-500 to-wood-600"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Interior Design",
      description: "Transform your spaces with our creative interior design solutions that blend functionality with aesthetics.",
      features: ["Space Planning", "Custom Furniture", "Lighting Design"],
      color: "from-cream-500 to-wood-500"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Facility Management",
      description: "Comprehensive facility management services to maintain and optimize your property investments.",
      features: ["Maintenance Services", "Security Systems", "Asset Management"],
      color: "from-wood-600 to-wood-700"
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Renovation & Remodeling",
      description: "Give your existing spaces a fresh new look with our expert renovation and remodeling services.",
      features: ["Kitchen Remodeling", "Bathroom Renovation", "Office Makeovers"],
      color: "from-cream-600 to-wood-600"
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Custom Carpentry",
      description: "Handcrafted wooden solutions including furniture, cabinets, and architectural woodwork.",
      features: ["Custom Cabinets", "Wooden Flooring", "Built-in Storage"],
      color: "from-wood-500 to-wood-700"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Maintenance & Repair",
      description: "Reliable maintenance and repair services to keep your property in perfect condition.",
      features: ["Emergency Repairs", "Preventive Maintenance", "HVAC Services"],
      color: "from-wood-400 to-wood-600"
    }
  ];

  const handleCardHover = (index: number, isEntering: boolean) => {
    setHoveredCard(isEntering ? index : null);
    
    if (isEntering) {
      anime({
        targets: `.service-card-${index} .service-icon`,
        scale: [1, 1.2],
        rotate: [0, 10],
        duration: 300,
        easing: 'easeOutQuart'
      });
      
      anime({
        targets: `.service-card-${index} .feature-item`,
        translateX: [0, 10],
        opacity: [0.7, 1],
        duration: 400,
        delay: anime.stagger(50),
        easing: 'easeOutQuart'
      });
    } else {
      anime({
        targets: `.service-card-${index} .service-icon`,
        scale: [1.2, 1],
        rotate: [10, 0],
        duration: 300,
        easing: 'easeOutQuart'
      });
      
      anime({
        targets: `.service-card-${index} .feature-item`,
        translateX: [10, 0],
        opacity: [1, 0.7],
        duration: 300,
        easing: 'easeOutQuart'
      });
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-wood-50 to-cream-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23926543' fill-opacity='0.2'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-wood-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-wood-700 max-w-3xl mx-auto leading-relaxed">
            From concept to completion, we offer comprehensive construction and interior design services 
            to bring your vision to life with exceptional quality and craftsmanship.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card service-card-${index} bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-wood-100 group cursor-pointer relative overflow-hidden`}
              onMouseEnter={() => handleCardHover(index, true)}
              onMouseLeave={() => handleCardHover(index, false)}
              style={{
                transform: hoveredCard === index ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
              }}
            >
              {/* Animated Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Floating Particles Effect */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-wood-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-bounce"></div>
              <div className="absolute top-8 right-8 w-1 h-1 bg-cream-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 group-hover:animate-pulse"></div>
              
              <div className={`service-icon w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-white mb-6 relative z-10 transition-all duration-300`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-wood-900 mb-4 group-hover:text-wood-800 transition-colors relative z-10">
                {service.title}
              </h3>
              
              <p className="text-wood-700 leading-relaxed mb-6 group-hover:text-wood-600 transition-colors relative z-10">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6 relative z-10">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="feature-item flex items-center text-wood-600 text-sm transition-all duration-300">
                    <div className="w-2 h-2 bg-wood-400 rounded-full mr-3 group-hover:bg-wood-500 transition-colors"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Interactive CTA */}
              <div className="flex items-center text-wood-600 group-hover:text-wood-700 font-medium text-sm transition-all duration-300 relative z-10">
                <span className="mr-2">Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-wood-200 rounded-2xl transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Interactive CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-wood-600 to-wood-700 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer group">
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:scale-105 transition-transform">
              Ready to Start Your Project?
            </h3>
            <p className="text-wood-100 mb-6 max-w-2xl mx-auto">
              Get a free consultation and discover how we can transform your space with our expert services.
            </p>
            <button className="bg-white text-wood-700 px-8 py-3 rounded-lg font-semibold hover:bg-cream-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;