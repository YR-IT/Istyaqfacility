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

  return (
    <section id="designers" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-900 mb-6">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto">
            Work with experienced professionals who understand your vision 
            and bring years of expertise to every project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {designers.map((designer, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={designer.image}
                  alt={designer.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 space-y-2">
                  {designer.badges.map((badge, badgeIndex) => (
                    <span
                      key={badgeIndex}
                      className="block bg-amber-700 text-white px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 bg-white rounded-lg px-2 py-1 flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold text-amber-900">{designer.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-1">
                  {designer.name}
                </h3>
                
                <p className="text-amber-700 font-medium mb-2">
                  {designer.specialty}
                </p>
                
                <div className="flex items-center text-amber-800 text-sm mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{designer.location}</span>
                </div>
                
                <p className="text-amber-800 text-sm mb-4 leading-relaxed">
                  {designer.bio}
                </p>
                
                <div className="flex items-center justify-between text-sm text-amber-700 mb-4">
                  <div className="flex items-center space-x-1">
                    <Award className="h-4 w-4" />
                    <span>{designer.projects} projects</span>
                  </div>
                  <div>
                    {designer.reviews} reviews
                  </div>
                </div>
                
                <button className="w-full bg-amber-700 hover:bg-amber-800 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center space-x-2">
                  <MessageCircle className="h-4 w-4" />
                  <span>Contact Expert</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-amber-100 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-amber-900 mb-4">
              Want to Join Our Expert Team?
            </h3>
            <p className="text-amber-800 mb-6">
              We're always looking for talented professionals to join our team and help clients create beautiful spaces.
            </p>
            <button className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              Join Our Team
            </button>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Designers;