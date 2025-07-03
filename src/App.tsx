import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Home from './components/home';
import Portfolio from './components/Portfolio';
import HowItWorks from './components/HowItWorks';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        {/* Add other routes similarly */}
      </Routes>
    </>
  );
}

export default App;
