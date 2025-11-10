import React from 'react';

interface CallToActionProps {
    onBookServiceClick: () => void;
}

const CallToAction: React.FC<CallToActionProps> = ({ onBookServiceClick }) => {
  return (
    <section className="bg-brand-navy text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
            <div className="flex-grow">
                <h2 className="text-2xl md:text-3xl font-heading font-bold">
                    Open daily until 12:00 AM • Call <a href="tel:+254788487711" className="text-brand-orange hover:underline">+254 788 487 711</a> • Karatina, Kenya
                </h2>
            </div>
            <button
                onClick={onBookServiceClick}
                className="bg-brand-orange text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition duration-300 transform hover:scale-105 shadow-xl shrink-0"
            >
                Book Your Service
            </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;