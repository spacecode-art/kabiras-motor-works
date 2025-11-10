import React from 'react';

// A generic type, as the specific service structure is defined in Services.tsx
interface Service {
  // Fix: Use React.ReactElement instead of JSX.Element to resolve the "Cannot find namespace 'JSX'" error.
  // Fix: Specify that the icon can accept a className prop to resolve the cloneElement error.
  icon: React.ReactElement<{ className?: string }>;
  title: string;
  details: {
    image: string;
    summary: string;
    points: { title: string; description: string }[];
  };
}

interface ServiceDetailModalProps {
  service: Service;
  onClose: () => void;
}

const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-10 bg-white/50 rounded-full p-1">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        
        <div>
            <img src={service.details.image} alt={service.title} className="w-full h-64 object-cover rounded-t-lg" />
            <div className="p-8">
                <div className="flex items-center mb-4">
                    <span className="text-brand-orange mr-4">{React.cloneElement(service.icon, {className: "h-10 w-10"})}</span>
                    <h2 className="text-3xl font-bold font-heading text-brand-navy">{service.title}</h2>
                </div>
                <p className="text-lg text-brand-charcoal mb-6">{service.details.summary}</p>
                
                <div className="space-y-4">
                    {service.details.points.map((point, index) => (
                        <div key={index} className="bg-brand-light-gray p-4 rounded-lg border-l-4 border-brand-orange">
                            <h4 className="font-bold text-brand-navy text-lg">{point.title}</h4>
                            <p className="text-brand-charcoal">{point.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <button onClick={onClose} className="bg-brand-orange text-white font-bold py-2 px-8 rounded-full hover:bg-opacity-90 transition duration-300">
                        Close
                    </button>
                </div>
            </div>
        </div>
      </div>
       <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ServiceDetailModal;