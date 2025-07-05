import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';
import './Main.css';
import Footer from './Footer';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Hello! I'm interested in your services.%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0A%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/919646703020?text=${whatsappMessage}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white via-[#f9f6ef] to-[#f4efe2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-4 font-playfair mt-8">Let's Connect</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto ParaFont">
            Ready to transform your space? We're just a message away.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#3d2f1f] mb-6">Get In Touch</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We'd love to hear about your project. Contact us for a free consultation
                and let's discuss how we can bring your vision to life.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#f2eadd] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-[#b59e6f]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Phone</h4>
                  <a href="tel:+919646703020" className="text-gray-600 hover:text-[#b59e6f] transition-colors">
                    +91 9646703020
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#f2eadd] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-[#b59e6f]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Email</h4>
                  <a href="mailto:istyaqfacility@gmail.com" className="text-gray-600 hover:text-[#b59e6f] transition-colors">
                    istyaqfacility@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#f2eadd] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-[#b59e6f]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Address</h4>
                  <p className="text-gray-600">
                    709/2 B.D.C Colony, Sector 26<br />
                    Chandigarh, 160026
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#f2eadd] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-[#b59e6f]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Business Hours</h4>
                  <p className="text-gray-600">
                    Monday - Saturday: 9:00 AM - 7:00 PM<br />
                    Sunday: 10:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 flex space-x-4">
              <a
                href="https://wa.me/919646703020"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Chat on WhatsApp</span>
              </a>

              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" className="text-[#b59e6f] hover:text-[#3d2f1f]">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="https://instagram.com" target="_blank" className="text-[#b59e6f] hover:text-[#3d2f1f]">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com" target="_blank" className="text-[#b59e6f] hover:text-[#3d2f1f]">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-[#3d2f1f] mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b59e6f]" />
              <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} placeholder="Email Address" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b59e6f]" />
              <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b59e6f]" />
              <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} placeholder="Tell us about your project..." className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b59e6f] resize-none" />
              <button type="submit" className="w-full bg-[#b59e6f] hover:bg-[#a88c5a] text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2">
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Find Us Here</h3>
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.1234567890123!2d76.7794179!3d30.7333148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQ0JzAwLjAiTiA3NsKwNDYnNDYuMCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Istyaq Facility Location"
            />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
