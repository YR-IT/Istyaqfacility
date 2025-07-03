import React from 'react'
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import Portfolio from '../components/Portfolio';
import Designers from '../components/Designers';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Blog from '../components/Blog';
import Footer from '../components/Footer';
const Home = () => {
  return (
      <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <HowItWorks />
      <Portfolio />
      <Designers />
      <Testimonials />
      <Pricing />
      <Blog />
      <Footer />
    </div>
    
  )
}

export default Home
