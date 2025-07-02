import React from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Design Consultation',
      price: 49,
      period: 'one-time',
      description: 'Perfect for getting expert advice and direction for your project',
      features: [
        '60-minute video consultation',
        'Design advice & recommendations',
        'Project roadmap & timeline',
        'Resource & vendor suggestions',
        'Follow-up email summary'
      ],
      popular: false,
      cta: 'Book Consultation'
    },
    {
      name: 'E-Design',
      price: 149,
      period: 'per room',
      description: 'design service with professional guidance for DIY implementation',
      features: [
        'Custom design concept',
        'Digital mood board',
        'Detailed shopping list',
        'Layout & floor plan',
        '2 revision rounds',
        'Implementation guide',
        'Designer support via email'
      ],
      popular: true,
      cta: 'Start E-Design'
    },
    {
      name: 'Full Design',
      price: 299,
      period: 'per room',
      description: 'Complete design service with 3D renderings and unlimited support',
      features: [
        'Everything in E-Design',
        '3D photorealistic renderings',
        'Unlimited revisions',
        'Priority designer support',
        'Video calls with designer',
        'Styling & accessory selection',
        'Project management support',
        '30-day post-completion support'
      ],
      popular: false,
      cta: 'Get Full Design'
    }
  ];

  const addOns = [
    { name: '3D Rendering', price: 99, description: 'Photorealistic visualization of your space' },
    { name: 'Additional Revision', price: 49, description: 'Extra design revision round' },
    { name: 'Shopping Service', price: 199, description: 'We handle all purchasing and delivery' },
    { name: 'Installation Coordination', price: 299, description: 'Professional installation management' }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the service level that fits your needs and budget. 
            No hidden fees, no surprises - just beautiful design at fair prices.
          </p>
        </div>

        {/* Main Pricing Plans */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                plan.popular ? 'border-2 border-emerald-500 scale-105' : 'border border-gray-200'
              } overflow-hidden`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-emerald-500 text-white text-center py-3 text-sm font-semibold">
                  <Star className="h-4 w-4 inline mr-1" />
                  Most Popular
                </div>
              )}
              
              <div className={`p-8 ${plan.popular ? 'pt-16' : ''}`}>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                  <span className="text-gray-600 ml-2">/ {plan.period}</span>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {plan.description}
                </p>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                  plan.popular 
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}>
                  <span>{plan.cta}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add-on Services */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Add-on Services
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors duration-300">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {addon.name}
                </h4>
                <div className="text-2xl font-bold text-emerald-600 mb-2">
                  ${addon.price}
                </div>
                <p className="text-sm text-gray-600">
                  {addon.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 mb-2">What's included in the design fee?</h4>
              <p className="text-gray-600 text-sm">All design services include concept development, product selection, and detailed implementation guidance.</p>
            </div>
            
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 mb-2">How long does the process take?</h4>
              <p className="text-gray-600 text-sm">E-Design typically takes 7-10 days, while Full Design takes 10-14 days from project start.</p>
            </div>
            
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 mb-2">Can I work with a specific designer?</h4>
              <p className="text-gray-600 text-sm">Yes! You can request to work with a specific designer based on their portfolio and style.</p>
            </div>
            
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 mb-2">What if I'm not satisfied?</h4>
              <p className="text-gray-600 text-sm">We offer unlimited revisions on Full Design packages and guarantee your satisfaction.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;