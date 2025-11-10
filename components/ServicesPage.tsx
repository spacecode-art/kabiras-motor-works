import React from 'react';
import Services from './Services';
import Bodywork from './Bodywork';
import CallToAction from './CallToAction';

interface ServicesPageProps {
  imageData: any;
  onBookServiceClick: () => void;
}

const FleetServices: React.FC = () => {
    return (
        <section className="py-20 bg-brand-light-gray">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy">Fleet & Transport Operator Services</h2>
                    <p className="text-lg mt-2 max-w-3xl mx-auto text-brand-charcoal">
                        We provide specialized, scheduled servicing for commercial fleets, transport operators, and agricultural vehicles. Our priority is to minimize your downtime and keep your vehicles road-legal and running efficiently, ensuring your business never stops moving.
                    </p>
                </div>
            </div>
        </section>
    );
};


const ServicesPage: React.FC<ServicesPageProps> = ({ imageData, onBookServiceClick }) => {
  if (!imageData) return null;

  return (
    <div className="animate-fade-in-up">
      {/* Page Header */}
      <section className="relative h-64 bg-cover bg-center text-white flex items-center justify-center" style={{ backgroundImage: `url('${imageData.pages.services[0].url}')` }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center p-4">
          <h1 className="text-4xl md:text-5xl font-heading font-black">Our Services</h1>
          <p className="text-xl text-gray-200 mt-2">Comprehensive Solutions for Every Vehicle</p>
        </div>
      </section>

      {/* Re-using the detailed services and bodywork components */}
      <Services imageData={imageData} />
      <Bodywork imageData={imageData} />
      <FleetServices />

      <CallToAction onBookServiceClick={onBookServiceClick} />
      
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;