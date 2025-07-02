import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Aarav Singh',
      location: 'Lucknow',
      project: '4BHK Mohali',
      rating: 5,
      testimonial: 'The team at Istyaq Facility delivered beyond expectations! Everything was smooth, timely, and premium. Our new home is exactly what we dreamed of.',
      avatar: 'AS'
    },
    {
      name: 'Rajesh Kumar',
      location: 'Chandigarh',
      project: 'Piramal Finance Ltd.',
      rating: 5,
      testimonial: 'Showroom design matched our brand image perfectly. Fast and professional! The attention to detail and understanding of commercial requirements was exceptional.',
      avatar: 'RK'
    },
    {
      name: 'Dr. Harpal Singh',
      location: 'Chandigarh',
      project: 'Residential Interior',
      rating: 5,
      testimonial: 'Top-quality materials, elegant interiors. Everyone compliments our home! The team\'s professionalism and dedication to quality is remarkable.',
      avatar: 'HS'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Client Testimonials
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            What our satisfied clients say about their experience with us
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300 group border border-gray-100 relative"
            >
              <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-30 transition-opacity">
                <Quote className="h-12 w-12 text-blue-600" />
              </div>
              
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                  <p className="text-sm text-blue-600 font-medium">{testimonial.project}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.testimonial}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Join our growing list of satisfied clients
          </p>
          <a
            href="https://wa.me/919646703020"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
          >
            <span>Start Your Project Today</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;