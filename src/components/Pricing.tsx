import React from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Design Consultation',
      price: 2000,
      period: 'one-time',
      description: 'Perfect for getting expert advice and direction for your project',
      features: [
        '60-minute consultation',
        'Design advice & recommendations',
        'Project roadmap & timeline',
        'Material suggestions',
        'Follow-up support'
      ],
      popular: false,
      cta: 'Book Consultation'
    },
    {
      name: 'Interior Design',
      price: 50000,
      period: 'per room',
      description: 'Complete interior design service with 3D visualizations',
      features: [
        'Custom design concept',
        '3D renderings',
        'Detailed material list',
        'Layout & floor plan',
        'Unlimited revisions',
        'Implementation guide',
        'Project management'
      ],
      popular: true,
      cta: 'Start Design'
    },
    {
      name: 'Full Construction',
      price: 1500,
      period: 'per sq ft',
      description: 'Complete construction service from foundation to finishing',
      features: [
        'Complete construction',
        'Quality materials',
        'Expert supervision',
        'Timely delivery',
        'Warranty included',
        'Regular updates',
        'Post-completion support'
      ],
      popular: false,
      cta: 'Get Quote'
    }
  ];

  const addOns = [
    { name: '3D Walkthrough', price: 15000, description: 'Virtual tour of your designed space' },
    { name: 'Premium Materials', price: 25000, description: 'Upgrade to luxury finishes' },
    { name: 'Smart Home Setup', price: 50000, description: 'Complete home automation' },
    { name: 'Vastu Consultation', price: 5000, description: 'Traditional Vastu guidance' }
  ];

  return (
    <section id="pricing" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-900 mb-6">
            Transparent Pricing
          </h2>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto">
            Choose the service level that fits your needs and budget. 
            No hidden fees, no surprises - just quality work at fair prices.
          </p>
        </div>

        {/* Main Pricing Plans */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                plan.popular ? 'border-2 border-amber-600 scale-105' : 'border border-amber-200'
              } overflow-hidden`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-amber-600 text-white text-center py-3 text-sm font-semibold">
                  <Star className="h-4 w-4 inline mr-1" />
                  Most Popular
                </div>
              )}
              
              <div className={`p-8 ${plan.popular ? 'pt-16' : ''}`}>
                <h3 className="text-2xl font-bold text-amber-900 mb-2">
                  {plan.name}
                </h3>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold text-amber-900">₹{plan.price.toLocaleString()}</span>
                  <span className="text-amber-700 ml-2">/ {plan.period}</span>
                </div>
                
                <p className="text-amber-800 mb-6 leading-relaxed">
                  {plan.description}
                </p>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-amber-800">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                  plan.popular 
                    ? 'bg-amber-700 hover:bg-amber-800 text-white' 
                    : 'bg-amber-100 hover:bg-amber-200 text-amber-900'
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
          <h3 className="text-2xl font-bold text-amber-900 mb-6 text-center">
            Add-on Services
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="text-center p-6 bg-amber-50 rounded-xl hover:bg-amber-100 transition-colors duration-300">
                <h4 className="text-lg font-semibold text-amber-900 mb-2">
                  {addon.name}
                </h4>
                <div className="text-2xl font-bold text-amber-700 mb-2">
                  ₹{addon.price.toLocaleString()}
                </div>
                <p className="text-sm text-amber-800">
                  {addon.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-amber-900 mb-8">
            Frequently Asked Questions
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-left">
              <h4 className="font-semibold text-amber-900 mb-2">What's included in the service fee?</h4>
              <p className="text-amber-800 text-sm">All services include concept development, material selection, and detailed implementation guidance.</p>
            </div>
            
            <div className="text-left">
              <h4 className="font-semibold text-amber-900 mb-2">How long does the process take?</h4>
              <p className="text-amber-800 text-sm">Interior design typically takes 2-4 weeks, while construction projects vary based on scope.</p>
            </div>
            
            <div className="text-left">
              <h4 className="font-semibold text-amber-900 mb-2">Do you provide warranty?</h4>
              <p className="text-amber-800 text-sm">Yes! We provide warranty on all construction work and guarantee satisfaction on design services.</p>
            </div>
            
            <div className="text-left">
              <h4 className="font-semibold text-amber-900 mb-2">Can I customize the packages?</h4>
              <p className="text-amber-800 text-sm">Absolutely! We can customize any package to meet your specific requirements and budget.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;