import React, { useState, useEffect } from 'react';
import slide1 from '../../assests/slideShow1.jpg';
import slide2 from '../../assests/slideShow2.jpg';
import slide3 from '../../assests/slideShow3.jpg';
import slide4 from '../../assests/slideShow4.jpg';
import slide5 from '../../assests/slideShow5.jpg';
import slide6 from '../../assests/slideShow6.jpg';
import slide7 from '../../assests/slideShow7.jpg';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../stylesheet/Main.css';
const slideImages = [slide1, slide2, slide3, slide4, slide5, slide6, slide7];

const services = [
  {
    title: 'Interior Design',
    description: 'Elegant, modern, and functional interiors with 3D visualizations, material selection, and custom concepts.',
    image: slide1,
  },
  {
    title: 'Construction',
    description: 'End-to-end construction solutions from layout planning to full build execution.',
    image: slide2,
  },
  {
    title: 'Renovation',
    description: 'Transform your space with modern upgrades, space optimization, and budget-friendly improvements.',
    image: slide3,
  },
  {
    title: 'House Services',
    description: 'Quick and reliable plumbing, electrical, carpentry, and maintenance services.',
    image: slide4,
  },
  {
    title: 'Painting & Decor',
    description: 'Stylish painting, wall design, and decor planning with premium finishes.',
    image: slide5,
    
  },
  {
    title: 'Modular Kitchen',
    description: 'Custom-built modular kitchens designed with elegance, storage, and utility.',
    image: slide6,
   
  },
];

const ServicesPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white">
      {/* Slideshow */}
      <div className="h-screen w-full relative flex items-center justify-center overflow-hidden relative">
        {slideImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 z-20 text-center px-4">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-playfair mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-lg sm:text-xl text-white max-w-2xl"
          > <p className="text-3xl font-playfair">
            Your ideas, our design. Your comfort, our goal.
            </p>
          </motion.p>
        </div>
      </div>

      {/* Service Highlights */}
      <div className="py-20 px-4 sm:px-8 lg:px-20">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          const controls = useAnimation();
          const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

          useEffect(() => {
            if (inView) {
              controls.start({ opacity: 1, y: 0 });
            }
          }, [controls, inView]);

          return (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 100 }}
              animate={controls}
              transition={{ duration: 1, ease: 'easeOut' }}
              className={`flex flex-col lg:flex-row items-center mb-24 gap-10 ${
                !isEven ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <motion.div
                className="w-full lg:w-1/2 overflow-hidden rounded-3xl shadow-lg group"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </motion.div>

              {/* Content */}
              <motion.div
                className="w-full lg:w-1/2 text-stone-500 lg:px-20 text-center lg:text-left"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h2 className="text-4xl md:text-5xl font-semibold mb-4 font-playfair">
                  {service.title}
                </h2>
                <p className="text-lg text-black  leading-relaxed">{service.description}</p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesPage;
