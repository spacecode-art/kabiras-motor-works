import React, { useState } from 'react';
import Testimonials from './Testimonials';

interface BodyworkPageProps {
    onBookServiceClick: () => void;
    imageData: any;
}

const BodyworkPage: React.FC<BodyworkPageProps> = ({ onBookServiceClick, imageData }) => {
  if (!imageData) return null;
  
  const bodyworkImages = imageData.components.bodyworkGallery;

  return (
    <div>
      {/* Page Header */}
      <section className="relative h-64 bg-cover bg-center text-white flex items-center justify-center" style={{ backgroundImage: `url('${imageData.pages.bodywork[0].url}')` }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center p-4">
          <h1 className="text-4xl md:text-5xl font-heading font-black">Bodywork & Refinishing Portfolio</h1>
          <p className="text-xl text-gray-200 mt-2">Restoring Your Vehicle's Beauty and Integrity</p>
        </div>
      </section>

      {/* Gallery Slider Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy">Before & After Gallery</h2>
                <p className="text-lg mt-2 max-w-2xl mx-auto text-brand-charcoal">Hover over or tap an image to see the transformation.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {bodyworkImages.map((item, index) => (
                <div 
                    key={index}
                    className="relative rounded-lg shadow-2xl overflow-hidden cursor-pointer group h-80 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2"
                    tabIndex={0}
                    aria-label={`View before and after for ${item.title}`}
                >
                    <img 
                        src={item.before} 
                        alt={`Before - ${item.title}`} 
                        className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
                        loading="lazy"
                        decoding="async" 
                    />
                    <div 
                        style={{ backgroundImage: `url(${item.after})` }}
                        className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-110"
                        aria-hidden="true"
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-all duration-300"></div>
                    <div className="absolute top-4 left-4 bg-brand-navy/80 text-white px-3 py-1 rounded-full text-sm font-bold transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                        Before
                    </div>
                    <div className="absolute top-4 left-4 bg-brand-navy/80 text-white px-3 py-1 rounded-full text-sm font-bold transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                        After
                    </div>
                    <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold font-heading">{item.title}</h3>
                </div>
                ))}
            </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-brand-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-4">
                        Our Restoration Process
                    </h2>
                    <p className="mb-4 text-lg text-brand-charcoal">
                        From initial inspection to the final polish, we follow a meticulous process to restore your vehicle’s structure and aesthetics. Our process includes a detailed damage assessment, precise panel straightening and alignment, expert color matching using modern technology, and a flawless paint application in our professional spray booth for a factory-quality finish.
                    </p>
                </div>
                <div>
                    <img 
                    src={imageData.pages.bodywork[1].url} 
                    alt="A mechanic carefully inspecting a car's bodywork" 
                    className="rounded-lg shadow-2xl w-full h-auto object-cover"
                    loading="lazy"
                    decoding="async"
                    />
                </div>
            </div>
        </div>
      </section>
      
      {/* Why Quality Matters */}
      <section className="py-20 bg-brand-navy text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Why Quality Matters</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-300">
                Proper bodywork is about more than just looks. Correct structural alignment is critical for your safety on the road, ensuring your vehicle behaves predictably. A high-quality cosmetic finish not only restores your pride of ownership but also protects your investment by maintaining its resale value.
            </p>
             <button
                onClick={onBookServiceClick}
                className="mt-8 bg-brand-orange text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition duration-300 transform hover:scale-105 shadow-xl"
            >
                Schedule Bodywork Service
            </button>
        </div>
      </section>

      <Testimonials limit={2} />
    </div>
  );
};

export default BodyworkPage;