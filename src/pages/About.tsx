// pages/About.tsx
import React from 'react';
import AboutSection from '../components/About/AboutSection';
import HowItWorksSection from '../components/About/HowItWorksSection';
// import Footer from '../components/Footer';

const About: React.FC = () => {
  return (
    <>
      <AboutSection />
      <HowItWorksSection />
      {/* <Footer /> */}
    </>
  );
};

export default About;
