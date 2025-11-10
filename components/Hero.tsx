import React from 'react';

interface HeroProps {
  onBookServiceClick: () => void;
  imageData: any;
}

const Hero: React.FC<HeroProps> = ({ onBookServiceClick, imageData }) => {
  if (!imageData) return null;

  return (
    <section 
      className="relative h-[80vh] min-h-[500px] bg-cover bg-center text-white flex items-center justify-center"
      style={{ backgroundImage: `url('${imageData.pages.home[0].url}')` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-black/30"></div>
      <div className="relative z-10 text-center p-4">
        <h1 className="text-4xl md:text-6xl font-heading font-black mb-4 tracking-tight leading-tight">
          Reliable Engineering. Expert Mechanics.
          <br />
          <span className="text-3xl md:text-5xl font-heading font-bold text-gray-200">Keeping Kenya Moving.</span>
        </h1>
        <p className="text-lg md:text-xl font-sans font-semibold text-gray-100 mb-8 max-w-3xl mx-auto">
            KABIRA’S Motor Vehicle Engineering & Mechanics – Karatina & Eldoret.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={onBookServiceClick}
            className="bg-brand-orange text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition duration-300 transform hover:scale-105 shadow-xl"
          >
            Book Your Service
          </button>
          <a
            href="tel:+254788487711"
            className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-white hover:text-brand-navy transition duration-300 transform hover:scale-105 shadow-xl"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;