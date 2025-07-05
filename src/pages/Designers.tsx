// pages/DesignersPage.tsx
import React from 'react';
import DesignerCard from '../components/Designer/DesignerCard';
import JoinTeamCard from '../components/Designer/JoinTeamCard';

const DesignersPage: React.FC = () => {
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
            <DesignerCard key={index} designer={designer} />
          ))}
        </div>

        <JoinTeamCard />
      </div>
    </section>
  );
};

export default DesignersPage;
