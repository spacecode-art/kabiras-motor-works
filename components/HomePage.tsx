import React from 'react';
import Hero from './Hero';
import WhyChooseUs from './WhyChooseUs';
import Testimonials from './Testimonials';
import FeaturedServices from './FeaturedServices';
import CallToAction from './CallToAction';

interface HomePageProps {
  onBookServiceClick: () => void;
  imageData: any;
  onNavigate: (page: string) => void;
}

const QuickIntro: React.FC = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-4">Your Trusted 4.7★ Auto Workshop</h2>
            <p className="text-lg max-w-3xl mx-auto text-brand-charcoal">
                KABIRA'S is the go-to destination for trusted service for both individual motorists and commercial fleets. From advanced diagnostics to complete rebuilds, we guarantee quality craftsmanship and a fast turnaround to get you back on the road safely.
            </p>
        </div>
    </section>
);


const HomePage: React.FC<HomePageProps> = ({ onBookServiceClick, imageData, onNavigate }) => {
  return (
    <>
      <Hero onBookServiceClick={onBookServiceClick} imageData={imageData} />
      <QuickIntro />
      <WhyChooseUs />
      <FeaturedServices onBookServiceClick={() => onNavigate('services')} imageData={imageData} />
      <Testimonials limit={2} />
      <CallToAction onBookServiceClick={onBookServiceClick} />
    </>
  );
};

export default HomePage;