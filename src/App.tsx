import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import Services from './pages/Services';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Designers from './pages/Designers';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/Designers" element={<Designers />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
