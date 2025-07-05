// components/PortfolioGrid.tsx
import React, { RefObject } from 'react';
import { Heart, Eye, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  likes: number;
  views: number;
}

interface Props {
  projects: Project[];
  scrollRef: RefObject<HTMLDivElement>;
  scroll: (direction: 'left' | 'right') => void;
}

const PortfolioGrid: React.FC<Props> = ({ projects, scrollRef, scroll }) => {
  return (
    <div className="relative">
      <button onClick={() => scroll('left')} className="absolute -left-2 top-1/2 transform -translate-y-1/2 z-10 bg-[#b59e6f] text-white p-2 rounded-full shadow-md hover:bg-[#a7905c]">
        <ChevronLeft />
      </button>

      <div ref={scrollRef} className="flex space-x-4 overflow-x-auto scroll-smooth pb-2 px-1 scrollbar-hide">
        {projects.map((project, index) => (
          <div
            key={index}
            className="min-w-[320px] bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex-shrink-0 overflow-hidden border border-[#e0d4ba]"
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover rounded-t-3xl"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-[#b59e6f] text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#b59e6f] mb-1">{project.title}</h3>
              <p className="text-sm text-gray-700 mb-3 italic">{project.description}</p>

              <div className="flex items-center justify-between text-sm text-[#b59e6f]">
                <div className="flex space-x-4">
                  <div className="flex items-center space-x-1">
                    <Heart className="w-4 h-4" />
                    <span>{project.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{project.views}</span>
                  </div>
                </div>
                <button className="hover:text-black font-medium underline decoration-dotted">View</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button onClick={() => scroll('right')} className="absolute -right-2 top-1/2 transform -translate-y-1/2 z-10 bg-[#b59e6f] text-white p-2 rounded-full shadow-md hover:bg-[#a7905c]">
        <ChevronRight />
      </button>
    </div>
  );
};

export default PortfolioGrid;
