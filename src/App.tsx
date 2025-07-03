// import React, { useState, useEffect } from 'react';
// import LoadingScreen from './components/LoadingScreen';

import Home from '../src/pages/Home';

function App() {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   document.documentElement.style.scrollBehavior = 'smooth';
    
  //   const observerOptions = {
  //     threshold: 0.1,
  //     rootMargin: '0px 0px -50px 0px'
  //   };

  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add('animate-fade-in-up');
  //       }
  //     });
  //   }, observerOptions);

  //   if (!isLoading) {
  //     const sections = document.querySelectorAll('section');
  //     sections.forEach(section => observer.observe(section));
  //   }

  //   return () => observer.disconnect();
  // }, [isLoading]);

  // const handleLoadingComplete = () => {
  //   setIsLoading(false);
  // };

  // if (isLoading) {
  //   return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  // }

  return (
    <div className="min-h-screen bg-white">
      <Home />
    </div>
  );
}

export default App;