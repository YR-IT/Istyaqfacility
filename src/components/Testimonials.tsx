import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Jennifer Martinez',
      location: 'Austin, TX',
      project: 'Living Room Redesign',
      rating: 5,
      testimonial: 'Working with Decorilla was amazing! My designer understood exactly what I wanted and delivered beyond my expectations. The whole process was smooth and professional.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      designer: 'Sarah Johnson'
    },
    {
      name: 'Robert Chen',
      location: 'San Francisco, CA',
      project: 'Home Office Design',
      rating: 5,
      testimonial: 'The e-design service was perfect for my needs. I got professional guidance at an affordable price, and the results speak for themselves. Highly recommended!',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      designer: 'Michael Chen'
    },
    {
      name: 'Lisa Thompson',
      location: 'Miami, FL',
      project: 'Master Bedroom',
      rating: 5,
      testimonial: 'I love my new bedroom! The designer created a space that feels like a luxury hotel. The attention to detail and quality of service was exceptional.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      designer: 'Emma Wilson'
    },
    {
      name: 'Mark Rodriguez',
      location: 'Denver, CO',
      project: 'Kitchen Renovation',
      rating: 5,
      testimonial: 'The full design service was worth every penny. From concept to completion, my designer guided me through everything. My kitchen is now the heart of our home.',
      image: 'https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      designer: 'David Park'
    },
    {
      name: 'Amanda Foster',
      location: 'Boston, MA',
      project: 'Apartment Styling',
      rating: 5,
      testimonial: 'As a first-time homeowner, I was overwhelmed by design choices. Decorilla made it easy and fun. My apartment now reflects my personality perfectly.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      designer: 'Sarah Johnson'
    },
    {
      name: 'James Wilson',
      location: 'Portland, OR',
      project: 'Living Room & Dining',
      rating: 5,
      testimonial: 'The 3D renderings helped me visualize everything before purchasing. The shopping list was detailed and within budget. Couldn\'t be happier with the results!',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      designer: 'Michael Chen'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what thousands of satisfied clients 
            have to say about their Decorilla experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 group border border-gray-100 relative"
            >
              <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-30 transition-opacity">
                <Quote className="h-12 w-12 text-emerald-600" />
              </div>
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                  <p className="text-sm text-emerald-600 font-medium">{testimonial.project}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed italic mb-4">
                "{testimonial.testimonial}"
              </p>

              <div className="text-sm text-gray-500">
                Designer: <span className="font-medium text-emerald-600">{testimonial.designer}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-emerald-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-8 w-8 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-3xl font-bold text-gray-900 ml-4">4.9/5</span>
            </div>
            <p className="text-xl text-gray-700 mb-2">
              Average rating from <span className="font-bold">50,000+</span> completed projects
            </p>
            <p className="text-gray-600">
              Join thousands of happy clients who have transformed their spaces with Decorilla
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;