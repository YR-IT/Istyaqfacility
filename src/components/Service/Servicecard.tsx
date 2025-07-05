import React from 'react';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ service }: { service: any }) => {
  const Icon = service.icon;

  return (
    <div className="relative group bg-white/80 backdrop-blur-lg shadow-lg border border-[#b59e6f]/30 hover:border-[#b59e6f] rounded-3xl transition-transform duration-500 hover:-translate-y-2 overflow-visible">
      {/* Floating Icon */}
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-16 h-16 bg-[#b59e6f] text-white rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6" />
        </div>
      </div>

      {/* Card Content */}
      <div className="pt-20 pb-8 px-6 flex flex-col items-center text-center">
        <h3 className="text-xl font-semibold text-black mb-2">{service.title}</h3>

        <p className="text-sm text-black mb-4">{service.description}</p>

        <div className="text-base font-bold text-black mb-4">{service.price}</div>

        <ul className="text-sm text-black mb-6 text-left space-y-2 w-full">
          {service.features.map((feature: string, i: number) => (
            <li key={i} className="flex items-start space-x-2">
              <span className="w-2 h-2 mt-2 rounded-full bg-[#b59e6f]" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <button className="relative group/button inline-flex items-center justify-center py-2 px-5 rounded-full bg-[#b59e6f] text-white font-semibold border border-[#b59e6f] hover:bg-white hover:text-black transition-all duration-300 overflow-hidden">
          <span className="relative z-10">Get Started</span>
          <ArrowRight className="w-4 h-4 ml-2 transform transition-transform group-hover/button:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
