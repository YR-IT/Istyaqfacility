import React from 'react';
import { MessageCircle, Palette, ShoppingBag, Home } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: 'Tell Us Your Requirements',
      description: 'Share your project details, budget, and vision through our detailed consultation process.',
      image: 'https://images.pexels.com/photos/7078619/pexels-photo-7078619.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      icon: Palette,
      title: 'Design & Planning',
      description: 'Our expert team creates detailed plans, designs, and 3D visualizations for your approval.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      icon: ShoppingBag,
      title: 'Material Selection',
      description: 'Choose from premium quality materials and finishes that match your style and budget.',
      image: 'https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      icon: Home,
      title: 'Execute & Deliver',
      description: 'Our skilled craftsmen bring your vision to life with precision and attention to detail.',
      image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto">
            Our streamlined process ensures quality craftsmanship and timely delivery. 
            From concept to completion in just a few simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-amber-700 text-white rounded-full flex items-center justify-center font-bold text-sm z-10">
                {index + 1}
              </div>
              
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-0 left-full w-full h-0.5 bg-amber-300 transform translate-y-4" />
              )}
              
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                
                <div className="p-6">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors duration-300">
                    <step.icon className="h-6 w-6 text-amber-700" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-amber-900 mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-amber-800 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-amber-100 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-amber-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-amber-800 mb-6">
              Join hundreds of satisfied clients who have transformed their spaces with Istyaq Facility.
            </p>
            <button className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              Start Your Project Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;