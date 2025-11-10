import React from 'react';

const reasons = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Skilled Technicians & Modern Diagnostics',
    description: 'Expertise across Japanese, German & local vehicle models, ensuring accurate problem-solving.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.12M9 3.75v9.75m0-9.75h6.588a2.25 2.25 0 012.15 1.588l2.35 7.783M9 3.75V9h6.588m0 0v1.5m0-1.5H15M9 12.75H3m6 0h6m6 0h-3m-3 0v6.75m0-6.75h3m3 0h3m-3 0v-6.75m0 6.75h-3" />
      </svg>
    ),
    title: 'Comprehensive Service',
    description: 'We cover everything from engine and transmission to suspension and electrical systems.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402a3.75 3.75 0 00-.623-5.932l-4.04-2.331a3.75 3.75 0 00-5.932.623L2.098 14.598a3.75 3.75 0 000 5.304z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-6.401 6.402a3.75 3.75 0 00.623 5.932l4.04 2.331a3.75 3.75 0 005.932-.623l2.098-5.304a3.75 3.75 0 000-5.304z" />
      </svg>
    ),
    title: 'All-In-One Bodywork',
    description: 'Complete panel-beating, spray-painting, and body repair services all under one roof.',
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-brand-light-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="text-center p-6 opacity-0 animate-fade-in-up" 
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex justify-center items-center mb-4 text-brand-orange">
                {reason.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-brand-navy mb-2">{reason.title}</h3>
              <p className="text-brand-charcoal">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;