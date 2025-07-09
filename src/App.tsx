import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AboutNew from './components/aboutNew';
import Services from './pages/Services';
import Home from './pages/Home';
import Portfolio from './components/Portfolio';
import Designers from './pages/Designers';
import Contact from './components/Contact'; 
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutNew/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/designers" element={<Designers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
