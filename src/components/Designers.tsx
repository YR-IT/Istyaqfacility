import React from 'react';
import { Star, MapPin, Award, MessageCircle } from 'lucide-react';

const Designers = () => {
  const designers = [
    {
      name: 'Rajesh Kumar',
      specialty: 'Modern & Contemporary',
      location: 'Chandigarh',
      rating: 4.9,
      reviews: 127,
      projects: 89,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      badges: ['Top Rated', 'Fast Response'],
      bio: 'Specializing in modern designs that blend functionality with aesthetics.'
    },
    {
      name: 'Priya Sharma',
      specialty: 'Traditional & Luxury',
      location: 'Mohali',
      rating: 4.8,
      reviews: 203,
      projects: 156,
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      badges: ['Award Winner', 'Premium'],
      bio: 'Creating sophisticated spaces with attention to detail and luxury finishes.'
    },
    {
      name: 'Amit Singh',
      specialty: 'Minimalist & Eco-Friendly',
      location: 'Panchkula',
      rating: 4.9,
      reviews: 94,
      projects: 67,
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      badges: ['Rising Star', 'Eco-Friendly'],
      bio: 'Bringing warmth and comfort to homes with sustainable design practices.'
    },
    {
      name: 'Neha Gupta',
      specialty: 'Industrial & Urban',
      location: 'Chandigarh',
      rating: 4.7,
      reviews: 156,
      projects: 112,
      image: 'https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      badges: ['Innovative', 'Tech-Savvy'],
      bio: 'Transforming urban spaces with bold, industrial-inspired designs.'
    }
  ];

  const palette = {
    background: 'bg-[#f4efe2]',
    card: 'bg-white',
    accent: 'text-[#b59e6f]',
    button: 'bg-[#b59e6f] hover:bg-[#a88c5a]',
    badge: 'bg-[#e5d9bf] text-[#3d2f1f]',
    text: 'text-gray-800'
  };

  return (
    <section id="designers" className={`py-20 ${palette.background}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#3d2f1f] mb-4 font-playfair">Our Design Experts</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Masters of timeless elegance. Meet the visionaries who transform ideas into beautiful realities.
          </p>
        </div>

        {/* Grid of Designers */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {designers.map((designer, index) => (
            <div
              key={index}
              className={`${palette.card} rounded-2xl border border-[#e0d4ba] shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 group`}
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={designer.image}
                  alt={designer.name}
                  className="w-full h-64 object-cover rounded-t-2xl group-hover:scale-105 transition duration-300"
                />

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-lg shadow flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-400" />
                  <span className="text-sm font-semibold text-[#3d2f1f]">{designer.rating}</span>
                </div>

                {/* Badges */}
                <div className="absolute top-4 left-4 space-y-1">
                  {designer.badges.map((badge, badgeIndex) => (
                    <span
                      key={badgeIndex}
                      className={`block ${palette.badge} px-2 py-1 rounded-full text-xs font-semibold shadow`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Details */}
              <div className="p-5">
                <h3 className={`text-xl font-bold ${palette.accent} mb-1`}>{designer.name}</h3>
                <p className="text-sm text-gray-600 font-medium mb-1">{designer.specialty}</p>

                <div className="flex items-center text-sm text-gray-700 mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{designer.location}</span>
                </div>

                <p className="text-sm text-gray-700 italic mb-4 leading-relaxed">
                  {designer.bio}
                </p>

                <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-1">
                    <Award className="w-4 h-4" />
                    <span>{designer.projects} projects</span>
                  </div>
                  <span>{designer.reviews} reviews</span>
                </div>

                {/* Button */}
                <button className={`w-full py-2 rounded-full font-medium text-white ${palette.button} transition duration-300 flex items-center justify-center space-x-2`}>
                  <MessageCircle className="w-4 h-4" />
                  <span>Contact Expert</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Join CTA */}
        <div className="text-center mt-20">
          <div className="bg-[#f2eadd] rounded-2xl p-10 max-w-4xl mx-auto shadow-md">
            <h3 className="text-2xl font-bold text-[#3d2f1f] mb-4">Want to Join Our Creative Team?</h3>
            <p className="text-gray-700 mb-6">
              We’re always looking for passionate professionals who believe in shaping timeless design experiences.
            </p>
            <button className="px-8 py-3 bg-[#b59e6f] hover:bg-[#a88c5a] text-white rounded-full font-semibold transition duration-300">
              Join Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Designers;
