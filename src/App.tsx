import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AboutNew from './pages/aboutnew';
import Services from './pages/Services';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact'; 
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutNew />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
