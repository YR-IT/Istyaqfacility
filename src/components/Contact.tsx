import React, { useEffect, useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import anime from 'animejs';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime.timeline()
              .add({
                targets: '.contact-info',
                translateY: [40, 0],
                opacity: [0, 1],
                duration: 800,
                easing: 'easeOutQuart'
              })
              .add({
                targets: '.contact-form',
                translateY: [40, 0],
                opacity: [0, 1],
                duration: 800,
                easing: 'easeOutQuart'
              }, '-=600')
              .add({
                targets: '.contact-item',
                scale: [0.8, 1],
                opacity: [0, 1],
                duration: 600,
                delay: anime.stagger(100),
                easing: 'easeOutQuart'
              }, '-=400');
          }
        });
      },
      { threshold: 0.1 }
    );

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      observer.observe(contactSection);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleInputFocus = (fieldName: string) => {
    setFocusedField(fieldName);
    anime({
      targets: `.form-field-${fieldName}`,
      scale: [1, 1.02],
      duration: 200,
      easing: 'easeOutQuart'
    });
  };

  const handleInputBlur = (fieldName: string) => {
    setFocusedField(null);
    anime({
      targets: `.form-field-${fieldName}`,
      scale: [1.02, 1],
      duration: 200,
      easing: 'easeOutQuart'
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Success animation
    anime({
      targets: '.submit-button',
      scale: [1, 1.1, 1],
      duration: 600,
      easing: 'easeOutElastic(1, .8)'
    });
    
    setIsSubmitting(false);
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+91 98765 43210", "+91 87654 32109"],
      subtext: "Call us anytime",
      color: "from-wood-500 to-wood-600"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["info@istyaqfacility.com", "projects@istyaqfacility.com"],
      subtext: "Get quick response",
      color: "from-cream-500 to-wood-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: ["123 Construction Plaza", "Business District, City - 500001"],
      subtext: "Visit our office",
      color: "from-wood-600 to-wood-700"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      details: ["Monday - Saturday: 9:00 AM - 7:00 PM", "Sunday: 10:00 AM - 5:00 PM"],
      subtext: "We're here to help",
      color: "from-wood-400 to-wood-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-wood-50 to-cream-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23926543' fill-opacity='0.2'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v-40c11.046 0 20 8.954 20 20z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-wood-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-wood-700 max-w-3xl mx-auto leading-relaxed">
            Ready to start your project? Contact us today for a free consultation and 
            discover how we can transform your space.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="contact-info">
            <h3 className="text-2xl font-bold text-wood-900 mb-8">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className="contact-item flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm border border-wood-100 hover:shadow-md hover:border-wood-200 transition-all duration-300 cursor-pointer group"
                  onMouseEnter={(e) => {
                    anime({
                      targets: e.currentTarget,
                      scale: [1, 1.02],
                      duration: 200,
                      easing: 'easeOutQuart'
                    });
                  }}
                  onMouseLeave={(e) => {
                    anime({
                      targets: e.currentTarget,
                      scale: [1.02, 1],
                      duration: 200,
                      easing: 'easeOutQuart'
                    });
                  }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-lg flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-wood-900 mb-1 group-hover:text-wood-800 transition-colors">{info.title}</h4>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-wood-700 mb-1 group-hover:text-wood-600 transition-colors">{detail}</p>
                    ))}
                    <p className="text-wood-500 text-sm group-hover:text-wood-400 transition-colors">{info.subtext}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-wood-600 to-wood-700 p-6 rounded-2xl text-white hover:from-wood-700 hover:to-wood-800 transition-all duration-500 transform hover:-translate-y-1 hover:shadow-xl cursor-pointer group">
              <h4 className="text-xl font-bold mb-2 group-hover:scale-105 transition-transform">Free Consultation</h4>
              <p className="mb-4 opacity-90 group-hover:opacity-100 transition-opacity">
                Schedule a free consultation to discuss your project requirements and get expert advice.
              </p>
              <button className="bg-white text-wood-700 px-6 py-2 rounded-lg font-semibold hover:bg-cream-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Book Now
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-wood-100 hover:shadow-xl transition-all duration-500">
              <h3 className="text-2xl font-bold text-wood-900 mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className={`form-field-name transition-all duration-200`}>
                    <label className="block text-wood-700 font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => handleInputFocus('name')}
                      onBlur={() => handleInputBlur('name')}
                      className="w-full px-4 py-3 border border-wood-200 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-transparent transition-all duration-300 hover:border-wood-300"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className={`form-field-email transition-all duration-200`}>
                    <label className="block text-wood-700 font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => handleInputFocus('email')}
                      onBlur={() => handleInputBlur('email')}
                      className="w-full px-4 py-3 border border-wood-200 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-transparent transition-all duration-300 hover:border-wood-300"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className={`form-field-phone transition-all duration-200`}>
                    <label className="block text-wood-700 font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onFocus={() => handleInputFocus('phone')}
                      onBlur={() => handleInputBlur('phone')}
                      className="w-full px-4 py-3 border border-wood-200 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-transparent transition-all duration-300 hover:border-wood-300"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div className={`form-field-service transition-all duration-200`}>
                    <label className="block text-wood-700 font-medium mb-2">Service Interest</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      onFocus={() => handleInputFocus('service')}
                      onBlur={() => handleInputBlur('service')}
                      className="w-full px-4 py-3 border border-wood-200 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-transparent transition-all duration-300 hover:border-wood-300"
                    >
                      <option value="">Select a service</option>
                      <option value="construction">Construction</option>
                      <option value="interior">Interior Design</option>
                      <option value="facility">Facility Management</option>
                      <option value="renovation">Renovation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className={`form-field-message transition-all duration-200`}>
                  <label className="block text-wood-700 font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => handleInputFocus('message')}
                    onBlur={() => handleInputBlur('message')}
                    rows={4}
                    className="w-full px-4 py-3 border border-wood-200 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-transparent transition-all duration-300 resize-none hover:border-wood-300"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="submit-button w-full bg-wood-700 hover:bg-wood-800 disabled:bg-wood-400 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:transform-none disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;