import React from 'react';
import { Palette, Monitor, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'Full Interior Design',
      description: 'Complete room makeovers with personalized design concepts, furniture selection, and styling.',
      price: 'Starting at $299',
      features: ['Custom mood boards', '3D renderings', 'Shopping lists', 'Unlimited revisions'],
      popular: true
    },
    {
      icon: Monitor,
      title: 'E-Design',
      description: 'Online design service perfect for DIY enthusiasts who want professional guidance.',
      price: 'Starting at $149',
      features: ['Digital design board', 'Product recommendations', 'Layout plans', '2 revision rounds'],
      popular: false
    },
    {
      icon: Sparkles,
      title: 'Styling Service',
      description: 'Perfect finishing touches with accessories, art, and decor to complete your space.',
      price: 'Starting at $99',
      features: ['Accessory selection', 'Art curation', 'Styling guide', 'Shopping assistance'],
      popular: false
    },
    {
      icon: MessageCircle,
      title: 'Design Consultation',
      description: 'One-on-one consultation with expert designers to discuss your project needs.',
      price: 'Starting at $49',
      features: ['60-minute call', 'Design advice', 'Project roadmap', 'Resource recommendations'],
      popular: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Design Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect service for your project. From full room makeovers to quick consultations, 
            we have options for every budget and timeline.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${
                service.popular ? 'border-emerald-500' : 'border-gray-100'
              } overflow-hidden group`}
            >
              {service.popular && (
                <div className="absolute top-0 left-0 right-0 bg-emerald-500 text-white text-center py-2 text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className={`p-8 ${service.popular ? 'pt-12' : ''}`}>
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${
                  service.popular ? 'bg-emerald-100' : 'bg-gray-100'
                }`}>
                  <service.icon className={`h-8 w-8 ${
                    service.popular ? 'text-emerald-600' : 'text-gray-600'
                  }`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className={`text-2xl font-bold mb-6 ${
                  service.popular ? 'text-emerald-600' : 'text-gray-900'
                }`}>
                  {service.price}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${
                        service.popular ? 'bg-emerald-500' : 'bg-gray-400'
                      }`} />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group ${
                  service.popular 
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}>
                  <span>Get Started</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Not sure which service is right for you?
          </p>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
            Take Our Quiz
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;