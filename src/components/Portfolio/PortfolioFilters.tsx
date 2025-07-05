// components/PortfolioFilters.tsx
import React from 'react';

interface Props {
  filters: string[];
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

const PortfolioFilters: React.FC<Props> = ({ filters, activeFilter, setActiveFilter }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
            activeFilter === filter
              ? 'bg-[#b59e6f] text-white shadow-lg scale-105'
              : 'bg-[#f2eadd] text-black hover:bg-[#e5d9bf]'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default PortfolioFilters;
