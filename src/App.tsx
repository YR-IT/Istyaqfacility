import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AboutNew from './components/aboutNew';
import Services from './components/Services';
import Home from './components/home';
import Portfolio from './components/Portfolio';
import Designers from './components/Designers';
import Pricing from './components/Pricing';
import Blog from './components/Blog';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutNew />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/Designers" element={<Designers />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
