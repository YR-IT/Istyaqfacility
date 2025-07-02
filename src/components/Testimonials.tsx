import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Aarav Singh',
      location: 'Lucknow',
      project: '4BHK Mohali',
      rating: 5,
      testimonial: 'The team at Istyaq Facility delivered beyond expectations! Everything was smooth, timely, and premium. Our home looks absolutely stunning.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      designer: 'Rajesh Kumar'
    },
    {
      name: 'Rajesh Kumar',
      location: 'Chandigarh',
      project: 'Piramal Finance Ltd.',
      rating: 5,
      testimonial: 'Showroom design matched our brand image perfectly. Fast and professional! The attention to detail was exceptional.',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      designer: 'Priya Sharma'
    },
    {
      name: 'Dr. Harpal Singh',
      location: 'Chandigarh',
      project: 'Luxury Bungalow',
      rating: 5,
      testimonial: 'Top-quality materials, elegant interiors. Everyone compliments our home! The colonial-style renovation exceeded our expectations.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      designer: 'Amit Singh'
    },
    {
      name: 'Sunita Verma',
      location: 'Mohali',
      project: 'Kitchen Renovation',
      rating: 5,
      testimonial: 'The modular kitchen design is perfect for our family needs. Professional service from start to finish.',
      image: 'https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      designer: 'Neha Gupta'
    },
    {
      name: 'Vikram Malhotra',
      location: 'Panchkula',
      project: 'Office Interior',
      rating: 5,
      testimonial: 'Outstanding work on our office interiors. The team understood our requirements perfectly and delivered on time.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      designer: 'Rajesh Kumar'
    },
    {
      name: 'Meera Joshi',
      location: 'Chandigarh',
      project: 'Bathroom Renovation',
      rating: 5,
      testimonial: 'Beautiful bathroom renovation with premium fixtures. The team was professional and completed work without any hassle.',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      designer: 'Priya Sharma'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what hundreds of satisfied clients 
            have to say about their Istyaq Facility experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-amber-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 group border border-amber-100 relative"
            >
              <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-30 transition-opacity">
                <Quote className="h-12 w-12 text-amber-700" />
              </div>
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-lg font-bold text-amber-900">{testimonial.name}</h4>
                  <p className="text-sm text-amber-700">{testimonial.location}</p>
                  <p className="text-sm text-amber-600 font-medium">{testimonial.project}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>

              <p className="text-amber-800 leading-relaxed italic mb-4">
                "{testimonial.testimonial}"
              </p>

              <div className="text-sm text-amber-700">
                Expert: <span className="font-medium text-amber-600">{testimonial.designer}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-amber-100 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-8 w-8 text-yellow-500 fill-current" />
                ))}
              </div>
              <span className="text-3xl font-bold text-amber-900 ml-4">4.9/5</span>
            </div>
            <p className="text-xl text-amber-800 mb-2">
              Average rating from <span className="font-bold">500+</span> completed projects
            </p>
            <p className="text-amber-700">
              Join hundreds of happy clients who have transformed their spaces with Istyaq Facility
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;