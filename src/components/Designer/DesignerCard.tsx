// components/DesignerCard.tsx
import React from 'react';
import { Star, MapPin, Award, MessageCircle } from 'lucide-react';

interface Designer {
  name: string;
  specialty: string;
  location: string;
  rating: number;
  reviews: number;
  projects: number;
  image: string;
  badges: string[];
  bio: string;
}

const DesignerCard: React.FC<{ designer: Designer }> = ({ designer }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
      <div className="relative">
        <img
          src={designer.image}
          alt={designer.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 space-y-2">
          {designer.badges.map((badge, i) => (
            <span
              key={i}
              className="block bg-amber-700 text-white px-2 py-1 rounded-full text-xs font-medium"
            >
              {badge}
            </span>
          ))}
        </div>
        <div className="absolute top-4 right-4 bg-white rounded-lg px-2 py-1 flex items-center space-x-1">
          <Star className="h-4 w-4 text-yellow-500 fill-current" />
          <span className="text-sm font-semibold text-amber-900">{designer.rating}</span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-amber-900 mb-1">{designer.name}</h3>
        <p className="text-amber-700 font-medium mb-2">{designer.specialty}</p>

        <div className="flex items-center text-amber-800 text-sm mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{designer.location}</span>
        </div>

        <p className="text-amber-800 text-sm mb-4 leading-relaxed">{designer.bio}</p>

        <div className="flex items-center justify-between text-sm text-amber-700 mb-4">
          <div className="flex items-center space-x-1">
            <Award className="h-4 w-4" />
            <span>{designer.projects} projects</span>
          </div>
          <div>{designer.reviews} reviews</div>
        </div>

        <button className="w-full bg-amber-700 hover:bg-amber-800 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center space-x-2">
          <MessageCircle className="h-4 w-4" />
          <span>Contact Expert</span>
        </button>
      </div>
    </div>
  );
};

export default DesignerCard;
