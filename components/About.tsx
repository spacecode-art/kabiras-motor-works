import React from 'react';

interface AboutProps {
  imageData: any;
}

const About: React.FC<AboutProps> = ({ imageData }) => {
  if (!imageData) return null;
  
  return (
    <section className="py-20 bg-brand-light-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-4">
              Trusted Automotive Repair & Maintenance
            </h2>
            <p className="mb-4 text-lg text-brand-charcoal">
              KABIRA’S Motor Vehicle Engineering & Mechanics is a trusted automotive repair and maintenance workshop serving Karatina and Eldoret, Kenya. The business specializes in full mechanical diagnostics, vehicle engineering, and fleet maintenance.
            </p>
            <p className="mb-6 text-lg text-brand-charcoal">
              With expert technicians and modern diagnostic tools, we deliver high-quality, affordable repairs that keep vehicles safe, efficient, and roadworthy.
            </p>
            <div className="bg-brand-navy text-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold font-heading mb-2">Our Mission</h3>
                <p className="text-base text-gray-300">To provide dependable, professional, and community-centered automotive engineering services that keep Kenya’s transport systems running smoothly.</p>
            </div>
          </div>
          <div>
            <img 
              src={imageData.components.about[0].url}
              alt="The team of expert mechanics at KABIRA'S workshop" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;