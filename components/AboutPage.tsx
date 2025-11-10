import React from 'react';
import Testimonials from './Testimonials';

interface AboutPageProps {
    onBookServiceClick: () => void;
    imageData: any;
}

const AboutPage: React.FC<AboutPageProps> = ({ onBookServiceClick, imageData }) => {
  if (!imageData) return null;

  return (
    <div>
      {/* Page Header */}
      <section className="relative h-64 bg-cover bg-center text-white flex items-center justify-center" style={{ backgroundImage: `url('${imageData.pages.about[0].url}')` }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center p-4">
          <h1 className="text-4xl md:text-5xl font-heading font-black">About KABIRA'S</h1>
          <p className="text-xl text-gray-200 mt-2">The Driving Force Behind Your Vehicle's Performance</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <img 
                    src={imageData.pages.about[1].url} 
                    alt="The KABIRA'S team working together in the workshop" 
                    className="rounded-lg shadow-2xl w-full h-auto object-cover"
                    loading="lazy"
                    decoding="async"
                    />
                </div>
                <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-4">
                    Our Story
                    </h2>
                    <p className="mb-4 text-lg text-brand-charcoal">
                    Founded on a passion for precision engineering and a commitment to honest work, KABIRA’S began as a small workshop with a big vision: to provide world-class automotive services to the communities of Karatina and Eldoret. We focus on serving the critical transport corridor in western Kenya, supporting individual motorists, transport firms, and agricultural fleets.
                    </p>
                    <p className="text-lg text-brand-charcoal">
                    Over the years, we've grown by investing in two key areas: our people and our technology. We believe in blending time-honored mechanical skills with the latest diagnostic tools to solve any problem, big or small. Our roots are firmly planted in the community, and our reputation is built on every vehicle we successfully get back on the road.
                    </p>
                </div>
            </div>
        </div>
      </section>

       {/* Mission & Vision */}
      <section className="py-20 bg-brand-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
                <div className="p-6">
                    <h3 className="text-2xl font-bold font-heading text-brand-navy mb-2">Our Mission</h3>
                    <p className="text-lg text-brand-charcoal">To provide dependable, professional, and affordable vehicle engineering services that are central to the smooth operation of Kenya's transport ecosystem.</p>
                </div>
                <div className="p-6">
                    <h3 className="text-2xl font-bold font-heading text-brand-navy mb-2">Our Vision</h3>
                    <p className="text-lg text-brand-charcoal">To be the go-to workshop in Uasin Gishu and beyond, renowned for our quality, speed, and the trust we build with every customer and community member.</p>
                </div>
            </div>
        </div>
      </section>
      
      {/* Community & Fleet Role */}
      <section className="py-20 bg-brand-navy text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Community & Fleet Role</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-300">We are more than just a garage. We are partners in keeping Kenya moving. We support individual motorists and critical transport and logistics fleets by reducing vehicle downtime, maintaining road-worthiness, and contributing to youth employment through skills transfer and training programs.</p>
        </div>
      </section>
      
      <Testimonials />
    </div>
  );
};

export default AboutPage;