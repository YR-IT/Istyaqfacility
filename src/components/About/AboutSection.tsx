import React, { useState, useEffect } from 'react';
import {
  Award, Lightbulb, Users, Target, Palette, Hammer, Wrench, Home, LucideIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import slide1 from '../../assests/slideShow1.jpg';
import slide2 from '../../assests/slideShow2.jpg';
import slide3 from '../../assests/slideShow3.jpg';
import slide4 from '../../assests/slideShow4.jpg';
import slide5 from '../../assests/slideShow5.jpg';
import slide6 from '../../assests/slideShow6.jpg';
import slide7 from '../../assests/slideShow7.jpg';
import ServiceCard from '../Service/Servicecard';

const slideImages = [slide1, slide2, slide3, slide4, slide5, slide6, slide7];

interface ValueItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const values: ValueItem[] = [
  {
    icon: Award,
    title: 'Quality',
    description: 'We never compromise on the quality of materials and craftsmanship',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Bringing modern design concepts and latest construction techniques',
  },
  {
    icon: Users,
    title: 'Client Satisfaction',
    description: 'Your satisfaction is our top priority in every project we undertake',
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'Striving for perfection in every detail of our work',
  },
];

const services = [
  {
    icon: Palette,
    title: 'Interior Design',
    description: 'Elegant, modern, and functional interiors. Kitchens, living rooms, lighting, and more.',
    features: ['3D Visualizations', 'Material Selection', 'Project Management', 'Custom Concepts'],
  },
  {
    icon: Hammer,
    title: 'Construction',
    description: 'From layout to completion — residential, commercial, and custom builds.',
    features: ['Timely Delivery', 'Expert Supervision', 'Quality Materials', 'Full Project Handling'],
  },
  {
    icon: Wrench,
    title: 'Renovation',
    description: 'Stylish, budget-friendly upgrades for kitchens, bathrooms, and entire homes.',
    features: ['Modern Upgrades', 'Space Optimization', 'Minimal Disruption', 'Cost-Effective'],
  },
  {
    icon: Home,
    title: 'House Services',
    description: 'Fast plumbing, electrical, painting, carpentry, decoration and maintenance.',
    features: ['Emergency Repairs', 'Skilled Technicians', 'Maintenance Plans', 'Quick Scheduling'],
  },
];

const AboutSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? slideImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slideImages.length);
  };

  return (
<div className="bg-white text-slate-900 font-sans">

  {/* Hero Section */}
  <section className="relative h-[70vh] flex items-center justify-center bg-center bg-cover" style={{ backgroundImage: "url('/your-interior-image.jpg')" }}>
    <div className="absolute inset-0 bg-black/40" />
    <div className="relative z-10 text-center text-white px-4">
      <h1 className="text-5xl font-bold font-playfair">About Us</h1>
      <p className="mt-4 text-lg">Crafting Timeless Interiors & Functional Spaces</p>
      <a href="/projects" className="mt-6 inline-block bg-white text-slate-900 px-6 py-2 rounded hover:bg-gray-100 font-medium">View Our Work</a>
    </div>
  </section>

  {/* Our Story */}
  <section className="py-16 px-6 bg-white">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-4xl font-bold font-playfair mb-6">Our Story</h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        Founded with a vision to transform everyday spaces into elegant masterpieces, Istyaq Facility combines creativity with functionality.
        <br /><br />
        What began as a passion project has evolved into a full-service design firm built on trust, transparency, and timeless aesthetics.
      </p>
    </div>
  </section>

  {/* What We Do */}
  <section className="py-20 px-6 bg-gray-50">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold font-playfair mb-10">What We Do</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {[
          "Residential Interiors",
          "Commercial Interiors",
          "Renovation & Remodeling",
          "Modular Kitchens",
          "Construction Services",
          "Turnkey Solutions"
        ].map((service, i) => (
          <div key={i} className="bg-white border border-gray-200 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">{service}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Core Values */}
  <section className="py-20 px-6 bg-white">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold font-playfair mb-12">Our Core Values</h2>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
        {["Innovation", "Quality Craftsmanship", "Client-Centric", "Sustainability"].map((value, i) => (
          <div key={i} className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold">{value}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Why Choose Us */}
  <section className="py-20 px-6 bg-gray-50">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-4xl font-bold font-playfair mb-10">Why Choose Us</h2>
      <div className="grid md:grid-cols-2 gap-8 text-left">
        {[
          "Award-winning designs tailored to your needs",
          "Experienced professionals who care about quality",
          "End-to-end project execution from design to delivery",
          "Transparent pricing with no hidden surprises"
        ].map((reason, i) => (
          <div key={i} className="flex items-start gap-4">
            <div className="text-green-600 text-xl mt-1">✔️</div>
            <p className="text-gray-700">{reason}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Meet the Team */}
  <section className="py-20 px-6 bg-white">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-4xl font-bold font-playfair mb-10">Meet the Team</h2>
      <div className="grid sm:grid-cols-2 gap-10">
        <div className="border border-gray-200 p-6 rounded-lg shadow hover:shadow-md transition">
          <img src="/istyaq.jpg" alt="Istyaq" className="w-32 h-32 mx-auto rounded-full object-cover mb-4" />
          <h3 className="text-xl font-semibold">Istyaq Ahmad</h3>
          <p className="text-gray-500">Founder & Creative Director</p>
          <p className="text-sm text-gray-600 mt-3">A visionary interior designer with a passion for elegance and functionality.</p>
        </div>
        {/* More team cards if needed */}
      </div>
    </div>
  </section>

  {/* Milestones */}
  <section className="py-20 px-6 bg-gray-50">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold font-playfair mb-10">Milestones</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-3xl font-bold text-blue-600">2018</h3>
          <p className="text-gray-700">Founded</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-blue-600">120+</h3>
          <p className="text-gray-700">Projects Completed</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-blue-600">15+</h3>
          <p className="text-gray-700">Team Members</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-blue-600">10+</h3>
          <p className="text-gray-700">Awards & Recognitions</p>
        </div>
      </div>
    </div>
  </section>

  {/* Testimonials */}
  <section className="py-20 px-6 bg-white">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-4xl font-bold font-playfair mb-12">Client Testimonials</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            name: "Amit Sharma",
            feedback: "Istyaq Facility turned my house into a dream home. Professional, punctual, and deeply creative!"
          },
          {
            name: "Sonal Rajput",
            feedback: "From design to delivery, everything was top-notch. Highly recommend!"
          }
        ].map((review, i) => (
          <div key={i} className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm">
            <p className="italic text-gray-700 mb-4">“{review.feedback}”</p>
            <h4 className="text-lg font-semibold">{review.name}</h4>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* CTA */}
  <section className="py-16 px-6 bg-gray-100 text-center">
    <h2 className="text-3xl font-bold font-playfair mb-4">Let’s Build Your Dream Space</h2>
    <p className="text-gray-700 mb-6">Reach out today to schedule a consultation or explore our work.</p>
    <a href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition">Schedule a Consultation</a>
  </section>

  {/* Contact Snippet */}
  <section className="py-10 px-6 bg-white text-center">
    <div className="max-w-xl mx-auto">
      <h3 className="text-xl font-semibold mb-2">Get In Touch</h3>
      <p>Email: <a href="mailto:info@istyaqfacility.com" className="text-blue-600 underline">info@istyaqfacility.com</a></p>
      <p>Phone: <a href="tel:+919876543210" className="text-blue-600 underline">+91 98765 43210</a></p>
      <div className="mt-4 flex justify-center gap-4">
        <a href="#" className="text-blue-600 hover:underline">Instagram</a>
        <a href="#" className="text-blue-600 hover:underline">LinkedIn</a>
      </div>
    </div>
  </section>

</div>


  );
};

export default AboutSection;
