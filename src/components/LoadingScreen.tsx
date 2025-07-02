import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const drillRef = useRef<HTMLDivElement>(null);
  const wallRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress counter
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 40);

    const timeline = anime.timeline({
      easing: 'easeOutExpo',
      complete: () => {
        setTimeout(onLoadingComplete, 800);
      }
    });

    // Initial setup
    anime.set('.drill-container', {
      translateX: -200,
      opacity: 0
    });

    anime.set('.wall-section', {
      scaleX: 0,
      opacity: 0
    });

    anime.set('.crack-line', {
      scaleX: 0,
      opacity: 0
    });

    anime.set('.debris-particle', {
      scale: 0,
      opacity: 0
    });

    anime.set('.logo-main', {
      translateY: 100,
      opacity: 0,
      scale: 0.8
    });

    anime.set('.logo-sub', {
      translateY: 50,
      opacity: 0
    });

    anime.set('.progress-bar', {
      width: '0%'
    });

    // Logo entrance with shine effect
    timeline.add({
      targets: '.logo-main',
      translateY: 0,
      opacity: 1,
      scale: 1,
      duration: 1200,
      easing: 'easeOutBack'
    });

    timeline.add({
      targets: '.logo-sub',
      translateY: 0,
      opacity: 1,
      duration: 800,
      easing: 'easeOutQuart'
    }, '-=600');

    // Wall appearance
    timeline.add({
      targets: '.wall-section',
      scaleX: 1,
      opacity: 1,
      duration: 1000,
      easing: 'easeOutQuart'
    }, '-=400');

    // Drill entrance
    timeline.add({
      targets: '.drill-container',
      translateX: 0,
      opacity: 1,
      duration: 1500,
      easing: 'easeOutQuart'
    }, '-=500');

    // Drilling action
    timeline.add({
      targets: '.drill-bit',
      rotate: '1440deg',
      duration: 2000,
      easing: 'easeInOutQuart'
    }, '-=800');

    // Wall cracking sequence
    timeline.add({
      targets: '.crack-line',
      scaleX: 1,
      opacity: 1,
      duration: 600,
      delay: anime.stagger(150),
      easing: 'easeOutBack'
    }, '-=1200');

    // Debris explosion
    timeline.add({
      targets: '.debris-particle',
      scale: [0, 2, 0],
      opacity: [0, 1, 0],
      translateX: () => anime.random(-150, 150),
      translateY: () => anime.random(-150, 150),
      rotate: () => anime.random(0, 360),
      duration: 2000,
      delay: anime.stagger(80),
      easing: 'easeOutQuart'
    }, '-=1000');

    // Progress bar animation
    timeline.add({
      targets: '.progress-bar',
      width: '100%',
      duration: 3000,
      easing: 'easeInOutQuart'
    }, '-=3000');

    // Continuous drill rotation
    anime({
      targets: '.drill-bit',
      rotate: '+=360deg',
      duration: 800,
      loop: true,
      easing: 'linear',
      delay: 2500
    });

    // Shimmer effects
    anime({
      targets: '.shimmer-1',
      translateX: ['-100%', '300%'],
      duration: 2500,
      loop: true,
      easing: 'easeInOutQuart'
    });

    anime({
      targets: '.shimmer-2',
      translateX: ['-100%', '200%'],
      duration: 3000,
      loop: true,
      easing: 'easeInOutQuart',
      delay: 500
    });

    // Floating particles animation
    anime({
      targets: '.float-particle',
      translateY: [0, -20, 0],
      scale: [1, 1.2, 1],
      opacity: [0.3, 1, 0.3],
      duration: 3000,
      loop: true,
      delay: anime.stagger(200),
      easing: 'easeInOutSine'
    });

    return () => {
      clearInterval(progressInterval);
    };
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="float-particle absolute w-1 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
        
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-blue-900/20 to-slate-900/40" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Logo section */}
        <div ref={logoRef} className="mb-16">
          <div className="logo-main relative overflow-hidden">
            <h1 className="text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 mb-4 relative">
              <span className="relative z-10">Istyaq Facility</span>
              <div className="shimmer-1 absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12" />
              <div className="shimmer-2 absolute inset-0 bg-gradient-to-r from-transparent via-yellow-300/30 to-transparent transform -skew-x-12" />
            </h1>
          </div>
          <div className="logo-sub text-3xl font-semibold text-blue-300 relative overflow-hidden">
            <span className="relative z-10">Interior & Constructs</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/20 to-transparent transform translate-x-full animate-pulse" />
          </div>
        </div>

        {/* Drilling animation */}
        <div className="relative w-full max-w-lg h-64 mx-auto mb-16">
          {/* Wall */}
          <div ref={wallRef} className="wall-section absolute inset-0 bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 rounded-2xl shadow-2xl border border-gray-500 origin-left">
            {/* Wall texture */}
            <div className="absolute inset-2 bg-gradient-to-br from-gray-500/30 to-gray-800/30 rounded-xl" />
            
            {/* Crack lines */}
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="crack-line absolute bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 origin-left shadow-lg"
                style={{
                  top: `${35 + i * 8}%`,
                  left: '50%',
                  width: `${30 + i * 15}px`,
                  height: '3px',
                  transform: `rotate(${(i - 3) * 12}deg)`,
                  boxShadow: '0 0 10px rgba(251, 191, 36, 0.6)'
                }}
              />
            ))}
          </div>

          {/* Drill */}
          <div ref={drillRef} className="drill-container absolute left-0 top-1/2 transform -translate-y-1/2 z-20">
            <div className="relative">
              {/* Drill body */}
              <div className="w-40 h-12 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 rounded-r-full relative shadow-xl border border-gray-400">
                {/* Drill details */}
                <div className="absolute inset-y-2 left-3 right-12 bg-gradient-to-r from-yellow-500 via-orange-600 to-red-500 rounded shadow-inner" />
                <div className="absolute top-1/2 left-6 transform -translate-y-1/2 w-3 h-3 bg-red-600 rounded-full animate-pulse shadow-lg" />
                <div className="absolute top-1/2 left-12 transform -translate-y-1/2 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                
                {/* Drill bit */}
                <div className="drill-bit absolute right-0 top-1/2 transform -translate-y-1/2 w-16 h-8 bg-gradient-to-r from-gray-600 to-gray-800 origin-center">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-12 border-l-gray-700 border-t-6 border-t-transparent border-b-6 border-b-transparent" />
                  <div className="absolute inset-1 bg-gradient-to-r from-gray-500 to-gray-700 rounded" />
                </div>
              </div>
              
              {/* Drill glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-r-full blur-sm animate-pulse" />
            </div>
          </div>

          {/* Debris particles */}
          <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
            {[...Array(25)].map((_, i) => (
              <div
                key={i}
                className="debris-particle absolute rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                  width: `${Math.random() * 8 + 4}px`,
                  height: `${Math.random() * 8 + 4}px`,
                  backgroundColor: ['#fbbf24', '#f97316', '#ef4444', '#94a3b8'][Math.floor(Math.random() * 4)]
                }}
              />
            ))}
          </div>

          {/* Impact glow */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-radial from-yellow-400/40 via-orange-500/20 to-transparent rounded-full animate-pulse" />
        </div>

        {/* Loading text */}
        <div className="mb-8">
          <div className="text-3xl font-bold text-white mb-2 relative overflow-hidden">
            <span className="relative z-10">Crafting Your Vision</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform translate-x-full animate-pulse" />
          </div>
          <div className="text-xl text-blue-300 flex items-center justify-center">
            <span>Building Excellence</span>
            <span className="ml-2 text-yellow-400">
              {[...Array(3)].map((_, i) => (
                <span
                  key={i}
                  className="inline-block animate-bounce text-2xl"
                  style={{ animationDelay: `${i * 0.3}s` }}
                >
                  ⚡
                </span>
              ))}
            </span>
          </div>
        </div>

        {/* Progress section */}
        <div className="w-full max-w-md mx-auto">
          {/* Progress bar */}
          <div ref={progressRef} className="w-full h-3 bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm border border-gray-600 mb-4">
            <div className="progress-bar h-full bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 rounded-full relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse" />
              <div className="absolute right-0 top-0 w-8 h-full bg-gradient-to-l from-white/60 to-transparent rounded-r-full" />
            </div>
          </div>
          
          {/* Progress text */}
          <div className="flex justify-between items-center text-sm">
            <span className="text-blue-300 font-medium">Loading...</span>
            <span className="text-yellow-400 font-bold text-lg">{progress}%</span>
          </div>
        </div>
      </div>

      {/* Ambient lighting effects */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-5 w-24 h-24 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
    </div>
  );
};

export default LoadingScreen;