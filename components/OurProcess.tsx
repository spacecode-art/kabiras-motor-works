import React from 'react';

const steps = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>,
    title: 'Consult & Diagnose',
    description: 'We start with a thorough consultation and use modern diagnostic tools to accurately identify the issue.',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-1.125 0-2.062.938-1.976 2.062a48.457 48.457 0 00.544 6.375m0 0a48.401 48.401 0 00.544 6.375c.087 1.125.89 1.976 1.976 1.976h12.001c1.087 0 1.889-.851 1.976-1.976a48.417 48.417 0 00.544-6.375m0 0a48.378 48.378 0 00-.544-6.375m-14.533 0c.087-1.125.938-2.062 2.063-2.062h3.75" /></svg>,
    title: 'Transparent Quote',
    description: 'You receive a clear, itemized quote with no hidden fees. We explain the required work before we start.',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.471-2.471a.563.563 0 01.8 0l1.5 1.5a.563.563 0 010 .8l-2.471 2.471m-2.875 0l-4.5-4.5m0 0l-1.546-1.546a.563.563 0 010-.8l2.471-2.471a.563.563 0 01.8 0l4.5 4.5M11.42 15.17l-4.5-4.5" /></svg>,
    title: 'Expert Repair',
    description: 'Our certified technicians perform the repairs using high-quality parts and industry best practices.',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    title: 'Quality Check & Delivery',
    description: 'We conduct a final quality inspection and road test to ensure everything is perfect before handing back your keys.',
  },
];

const OurProcess: React.FC = () => {
  return (
    <section className="py-20 bg-brand-light-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy">Our Straightforward Process</h2>
          <p className="text-lg mt-2 max-w-2xl mx-auto text-brand-charcoal">
            We keep you informed every step of the way.
          </p>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 hidden lg:block" aria-hidden="true"></div>
           <div className="absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-gray-300 hidden lg:block" aria-hidden="true"></div>
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center border-t-4 border-brand-orange relative z-10">
              <div className="flex justify-center items-center mb-4 text-brand-navy relative">
                 <div className="bg-brand-orange text-white rounded-full h-16 w-16 flex items-center justify-center -mt-14 border-4 border-white">
                    {step.icon}
                 </div>
              </div>
              <h3 className="text-xl font-heading font-bold text-brand-navy mb-2">{step.title}</h3>
              <p className="text-brand-charcoal text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;