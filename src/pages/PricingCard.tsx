// components/PricingCard.tsx
import React from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';

interface PricingPlan {
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  cta: string;
}

const PricingCard: React.FC<{ plan: PricingPlan }> = ({ plan }) => {
  return (
    <div
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
        <h3 className="text-2xl font-bold text-amber-900 mb-2">{plan.name}</h3>

        <div className="mb-4">
          <span className="text-4xl font-bold text-amber-900">₹{plan.price.toLocaleString()}</span>
          <span className="text-amber-700 ml-2">/ {plan.period}</span>
        </div>

        <p className="text-amber-800 mb-6 leading-relaxed">{plan.description}</p>

        <ul className="space-y-4 mb-8">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              <Check className="h-5 w-5 text-amber-600 mt-0.5" />
              <span className="text-amber-800">{feature}</span>
            </li>
          ))}
        </ul>

        <button
          className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
            plan.popular ? 'bg-amber-700 hover:bg-amber-800 text-white' : 'bg-amber-100 hover:bg-amber-200 text-amber-900'
          }`}
        >
          <span>{plan.cta}</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
