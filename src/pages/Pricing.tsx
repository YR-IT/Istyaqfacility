// pages/PricingPage.tsx
import React from 'react';
import PricingCard from '../components/Pricing/PricingCard';
import AddOnCard from '../components/Pricing/AddOnCard';
import FAQBlock from '../components/Pricing/FAQBlock';

const PricingPage = () => {
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

  const faqs = [
    {
      question: "What's included in the service fee?",
      answer: 'All services include concept development, material selection, and detailed implementation guidance.'
    },
    {
      question: 'How long does the process take?',
      answer: 'Interior design typically takes 2–4 weeks, while construction projects vary based on scope.'
    },
    {
      question: 'Do you provide warranty?',
      answer: 'Yes! We provide warranty on all construction work and guarantee satisfaction on design services.'
    },
    {
      question: 'Can I customize the packages?',
      answer: 'Absolutely! We can customize any package to meet your specific requirements and budget.'
    }
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
            No hidden fees, no surprises – just quality work at fair prices.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-amber-900 mb-6 text-center">
            Add-on Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <AddOnCard key={index} addon={addon} />
            ))}
          </div>
        </div>

        <FAQBlock faqs={faqs} />
      </div>
    </section>
  );
};

export default PricingPage;
