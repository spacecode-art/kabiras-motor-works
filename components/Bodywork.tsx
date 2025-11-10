import React from 'react';

interface BodyworkProps {
  imageData: any;
}

const Bodywork: React.FC<BodyworkProps> = ({ imageData }) => {
  if (!imageData) return null;
  
  const bodyworkImages = imageData.components.bodyworkGallery.slice(0, 2);

  const services = [
    'Panel Beating & Body Alignment',
    'Collision Repair',
    'Spray Painting & Refinishing',
    'Structural Integrity Restoration',
  ];

  return (
    <section className="py-20 bg-brand-navy text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Bodywork & Finishing</h2>
            <p className="text-lg mb-6 text-gray-300">
              Our skilled technicians restore your vehicle's appearance and structural integrity to factory standards after a collision or wear.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
              {services.map((service, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-6 h-6 mr-3 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  {service}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {bodyworkImages.map((item, index) => (
              <div 
                key={index}
                className="relative rounded-lg shadow-2xl overflow-hidden cursor-pointer group focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2 focus:ring-offset-brand-navy"
                tabIndex={0}
                aria-label={`View before and after for ${item.title}`}
              >
                <img 
                  src={item.before}
                  alt={`Before - ${item.title}`} 
                  className="w-full h-64 object-cover transition-transform duration-500 transform group-hover:scale-110" 
                  loading="lazy"
                  decoding="async"
                />
                <div 
                  style={{ backgroundImage: `url(${item.after})` }}
                  className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-110"
                  aria-hidden="true"
                ></div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                <div className="absolute top-4 left-4 bg-brand-navy/80 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {item.title}
                </div>
                <div className="absolute bottom-4 right-4 bg-brand-orange/80 text-white px-3 py-1 rounded-full text-sm font-bold transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                  Before
                </div>
                <div className="absolute bottom-4 right-4 bg-brand-orange/80 text-white px-3 py-1 rounded-full text-sm font-bold transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                  After
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bodywork;