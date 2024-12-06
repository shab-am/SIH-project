import React, { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('nav');
      const heroSection = document.querySelector('#hero-section');
      
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition > heroBottom - 100) {
          navbar.style.opacity = '0';
          navbar.style.pointerEvents = 'none';
        } else {
          navbar.style.opacity = '1';
          navbar.style.pointerEvents = 'auto';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      id="hero-section"
      className="min-h-screen bg-center bg-no-repeat bg-cover object-contain flex items-center justify-center"
      style={{ backgroundImage: "url('/assets/images/homebg.png')" }}
    >
      <div className="flex items-center justify-center mt-[2.5rem] gap-8">
        <div className="relative flex flex-col items-start justify-start max-w-2xl ml-3 mt-[-3rem]">
          <h1 className="text-4xl font-bold mb-4 text-zinc-300">AsteroMiner AI</h1>
          <h2 className="text-6xl font-semibold mb-4 bg-gradient-to-r pb-3 from-zinc-300 via-purple-500 to-purple-400 text-transparent bg-clip-text">
            Pioneering the Future of Space Mining with AI
          </h2>
          <p className="text-lg mt-2 mb-8 text-zinc-300">
            Transform asteroid exploration into profitable mining ventures with advanced AI-powered analysis and recommendations
          </p>
          <div className="absolute flex gap-5 bottom-[-5rem] text-zinc-300">
            <div className="py-2 px-3 border-2 rounded-[30px] w-[220px]" style={{ borderImage: 'linear-gradient(to right, #ff7e5f, #feb47b) 1' }}>
              Mining depletes resources and damages Earth.
            </div>
            <div className="py-2 px-3 border-2 rounded w-[220px]" style={{ borderImage: 'linear-gradient(to right, #6a11cb, #2575fc) 1' }}>
              AsteroMiner AI pinpoints asteroid minerals.
            </div>
            <div className="py-2 px-3 border-2 rounded w-[220px]" style={{ borderImage: 'linear-gradient(to right, #43cea2, #185a9d) 1' }}>
              Asteroid mining preserves Earth and unlocks wealth.
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">  
          <img src="/assets/images/psyche1.jpg" alt="hero-image" className="w-[550px] h-[550px] object-contain" />
        </div>
      </div>
    </div>
  )
}

export default Hero;