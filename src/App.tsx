import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AboutNew from './components/aboutNew';
import Services from './components/Service/Servicecard';
import Home from './pages/Home';
import Portfolio from './components/Portfolio';
import Designers from './components/Designers';
import PricingCard from './components/Pricing/PricingCard';
import AddOnCard from './components/Pricing/AddOnCard';
import FAQBlock from './components/Pricing/FAQBlock';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutNew />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/designers" element={<Designers />} />
        <Route path="/pricing" element={<PricingCard />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
