import React, { useState } from 'react';
import ServiceDetailModal from './ServiceDetailModal';

const originalFeaturedServicesData = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.108 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.27.96-.12 1.45l-.773.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.93l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527a1.125 1.125 0 01-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.272.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.93l.15-.893z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    ),
    title: 'Engine Diagnostics',
    description: 'Advanced troubleshooting to pinpoint and fix engine issues efficiently.',
    details: {
        summary: "Our engine diagnostic service is the first step to a healthy vehicle. Using state-of-the-art computer scanning technology, we accurately pinpoint issues within your engine's complex systems, from ignition and fuel injection to exhaust and emission controls.",
        points: [
            { title: 'Check Engine Light Analysis', description: 'We connect directly to your vehicle\'s onboard computer to decode error codes and identify the root cause of the warning light.' },
            { title: 'Performance Evaluation', description: 'We test for common issues like misfires, poor acceleration, rough idling, and unusual noises to ensure your engine runs smoothly.' },
            { title: 'Fuel & Emission System Check', description: 'We verify that your engine is receiving the correct air/fuel mixture for optimal efficiency and is meeting emission standards.' },
        ]
    }
  },
  {
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>
    ),
    title: 'Transmission Repair',
    description: 'Smooth gear shifts and longevity with our expert transmission care.',
    details: {
        summary: "A smooth transmission is key to your vehicle's performance. We service both automatic and manual transmissions, addressing issues like slipping gears, delayed engagement, and unusual noises to prevent costly future repairs.",
        points: [
            { title: 'Fluid Flush & Replacement', description: 'We replace old, degraded fluid with high-quality transmission fluid to ensure proper lubrication, cooling, and hydraulic pressure.' },
            { title: 'Filter & Gasket Change', description: 'We install new filters and gaskets to keep contaminants out of your transmission system and prevent leaks.' },
            { title: 'Linkage & Solenoid Inspection', description: 'We check and adjust all physical and electronic connections to ensure responsive, accurate gear shifting.' },
        ]
    }
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path d="M9.813 15.904L9 15.188l-.813.716-3.46-3.982L9 6l4.273 5.122-3.46 4.782z" /><path d="M12 21.019v-5.23l3.46-4.782L12 6l-4.273 5.122L12 15.789v5.23z" /><path d="M14.187 15.904L15 15.188l.813.716 3.46-3.982L15 6l-4.273 5.122 3.46 4.782z" /><path d="M12 3c-1.2 0-2.3.4-3.2 1.1L12 8l3.2-3.9C14.3 3.4 13.2 3 12 3z" /></svg>
    ),
    title: 'Bodywork & Refinishing',
    description: 'Restoring your vehicle\'s appearance and structural integrity to factory standards.',
     details: {
        summary: 'From minor dents to major collision repair, our bodywork specialists restore your vehicle\'s appearance and structural integrity. We use precision tools for panel beating and alignment, followed by a flawless, color-matched paint job in our professional spray booth.',
        points: [
            { title: 'Collision Repair & Panel Beating', description: 'We expertly repair and replace damaged panels, ensuring a perfect fit and finish.' },
            { title: 'Spray Painting & Color Matching', description: 'Using advanced technology, we perfectly match your vehicle\'s original color for a seamless repair.' },
            { title: 'Structural Alignment', description: 'We ensure your vehicle\'s frame is aligned to manufacturer specifications for safety and performance.' },
        ]
    }
  },
];

interface FeaturedServicesProps {
    onBookServiceClick: () => void;
    imageData: any;
}

const FeaturedServices: React.FC<FeaturedServicesProps> = ({ onBookServiceClick, imageData }) => {
    const [selectedService, setSelectedService] = useState(null);

    if (!imageData) return null;

    const featuredServicesData = originalFeaturedServicesData.map(service => {
        const serviceImage = imageData.components.serviceModals.find(s => s.service.includes(service.title));
        return {
            ...service,
            details: {
                ...service.details,
                image: serviceImage ? serviceImage.url : '',
            }
        };
    });

  return (
    <>
        <section className="py-20 bg-brand-navy text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Featured Services</h2>
            <p className="text-lg mt-2 max-w-2xl mx-auto text-gray-300">
                A glimpse into our comprehensive auto care solutions.
            </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServicesData.map((service, index) => (
                <div 
                    key={index} 
                    className="bg-brand-charcoal/50 p-8 rounded-lg text-center transition-all duration-300 transform hover:-translate-y-2 cursor-pointer hover:shadow-xl hover:shadow-brand-orange/20"
                    onClick={() => setSelectedService(service)}
                >
                <div className="flex justify-center items-center mb-4 text-brand-orange">
                    {service.icon}
                </div>
                <h3 className="text-xl font-heading font-bold mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
                </div>
            ))}
            </div>
            <div className="text-center mt-12">
                 <button
                    onClick={onBookServiceClick}
                    className="bg-brand-orange text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition duration-300 transform hover:scale-105 shadow-md"
                >
                    View All Services
                </button>
            </div>
        </div>
        </section>
        {selectedService && <ServiceDetailModal service={selectedService} onClose={() => setSelectedService(null)} />}
    </>
  );
};

export default FeaturedServices;