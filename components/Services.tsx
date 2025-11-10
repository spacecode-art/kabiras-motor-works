import React, { useState } from 'react';
import ServiceDetailModal from './ServiceDetailModal';

const originalServicesData = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.108 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.27.96-.12 1.45l-.773.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.93l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527a1.125 1.125 0 01-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.272.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.93l.15-.893z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    ),
    title: 'Engine Diagnostics & Repairs',
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
    title: 'Transmission & Gearbox Servicing',
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
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="5" cy="12" r="3"/><circle cx="19" cy="12" r="3"/><path d="M5 15h14"/><path d="M19 9a7 7 0 0 0-14 0"/></svg>
    ),
    title: 'Brake System Repairs',
    description: 'Complete brake inspection, repair, and replacement for your safety.',
    details: {
        summary: 'Your safety is our top priority. Our comprehensive brake service covers everything from the brake pedal to the hydraulic fluid, ensuring your vehicle has the stopping power it needs in any situation.',
        points: [
            { title: 'Pad & Rotor Replacement', description: 'We replace worn brake pads and resurface or replace brake rotors to eliminate squealing and ensure a firm grip.' },
            { title: 'Brake Fluid Flush', description: 'We remove old, contaminated fluid and replace it with fresh fluid to prevent corrosion and maintain hydraulic performance.' },
            { title: 'Caliper & Hose Inspection', description: 'We inspect calipers for sticking or leaks and check brake lines for cracks or brittleness, ensuring the entire system is reliable.' },
        ]
    }
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" /></svg>
    ),
    title: 'Electrical & Wiring',
    description: 'Solving complex electrical problems from battery to headlights.',
    details: {
        summary: "Modern vehicles rely on complex electrical systems. Our technicians are skilled at diagnosing and repairing electrical issues, from simple fuse replacements to complex wiring problems affecting your car's computer, lights, and accessories.",
        points: [
            { title: 'Battery & Alternator Testing', description: 'We test your battery, starter, and alternator to ensure your vehicle starts reliably and maintains a charge.' },
            { title: 'Wiring Harness Repair', description: 'We locate and repair shorts, open circuits, and faulty connections in your vehicle\'s wiring.' },
            { title: 'Component Troubleshooting', description: 'We diagnose issues with power windows, lights, dashboard indicators, and other electronic accessories.' },
        ]
    }
  },
  {
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5-1.5-.5M5.625 7.5l3 1M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21" /></svg>
    ),
    title: 'Suspension & Steering',
    description: 'Restore ride comfort and handling with precise alignment and repairs.',
    details: {
        summary: "Your vehicle's suspension and steering systems are crucial for a safe, comfortable ride. We handle everything from wheel alignments to shock and strut replacement, ensuring your car handles properly on Kenya's diverse roads.",
        points: [
            { title: 'Wheel Alignment', description: 'Using precision equipment, we adjust your wheel angles to manufacturer specifications to prevent uneven tire wear and improve handling.' },
            { title: 'Shock & Strut Replacement', description: 'We replace worn shocks and struts to restore ride comfort and maintain stability and control.' },
            { title: 'Component Inspection', description: 'We inspect all steering and suspension components, including ball joints, tie rods, and bushings, for wear and tear.' },
        ]
    }
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 016.375 7.5h1.5a3.375 3.375 0 013.375 3.375v1.875m0 0a3.375 3.375 0 003.375 3.375h1.5a3.375 3.375 0 003.375-3.375v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5A3.375 3.375 0 0011.25 12v1.875m-3.75 0h3.75" /></svg>
    ),
    title: 'Fleet Management',
    description: 'Reliable maintenance and support services for commercial and agricultural fleets.',
     details: {
        summary: 'We provide comprehensive fleet maintenance services to keep your business vehicles reliable and on the road. We understand that vehicle downtime costs you money, so we prioritize fast, efficient service for our commercial and agricultural clients.',
        points: [
            { title: 'Scheduled Preventive Maintenance', description: 'We create custom maintenance schedules for your fleet to prevent breakdowns and extend vehicle life.' },
            { title: 'Priority Service & Repairs', description: 'Fleet customers receive priority booking and rapid turnaround times to minimize operational disruptions.' },
            { title: 'Detailed Service Records', description: 'We maintain meticulous records for each vehicle, helping you track maintenance history and manage your assets effectively.' },
        ]
    }
  },
];

interface ServicesProps {
    imageData: any;
}

const Services: React.FC<ServicesProps> = ({ imageData }) => {
    const [selectedService, setSelectedService] = useState(null);

    if (!imageData) return null;

    const servicesData = originalServicesData.map((service, index) => {
        const serviceImage = imageData.components.serviceModals[index];
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
        <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy">Our Core Services</h2>
            <p className="text-lg mt-2 max-w-2xl mx-auto text-brand-charcoal">
                From routine maintenance to complex repairs, we've got you covered. Click a service to learn more.
            </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
                <div 
                    key={index} 
                    className="bg-brand-light-gray p-8 rounded-lg shadow-md text-center transition-all duration-300 transform hover:-translate-y-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2 hover:shadow-xl hover:shadow-brand-orange/20"
                    onClick={() => setSelectedService(service)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedService(service); }}
                    aria-label={`Learn more about ${service.title}`}
                >
                <div className="flex justify-center items-center mb-4 text-brand-orange">
                    {service.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-brand-navy mb-2">{service.title}</h3>
                <p className="text-brand-charcoal">{service.description}</p>
                </div>
            ))}
            </div>
        </div>
        </section>
        {selectedService && <ServiceDetailModal service={selectedService} onClose={() => setSelectedService(null)} />}
    </>
  );
};

export default Services;