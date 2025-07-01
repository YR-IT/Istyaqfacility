import React, { useEffect } from 'react';
import { Palette, Zap, Shield, Heart } from 'lucide-react';
import anime from 'animejs';

const Features: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: '.feature-card',
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

    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      observer.observe(featuresSection);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Beautiful Design",
      description: "Carefully crafted interfaces that blend aesthetic beauty with functional design principles."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Optimized performance ensuring your users enjoy smooth, responsive experiences every time."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security measures protecting your data with industry-leading protocols."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Made with Care",
      description: "Every pixel placed with intention, every interaction designed to delight and inspire."
    }
  ];

  return (
    <section id="features" className="py-20 bg-wood-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-wood-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-wood-700 max-w-3xl mx-auto leading-relaxed">
            We combine traditional craftsmanship values with modern technology 
            to deliver exceptional digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-wood-100 group hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-wood-500 to-wood-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold text-wood-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-wood-700 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;