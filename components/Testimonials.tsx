import React from 'react';

const testimonials = [
  {
    quote: 'Absolutely the best service in Karatina. My truck was fixed faster than I expected and the price was very fair. Highly recommend KABIRA\'S!',
    name: 'John K.',
    title: 'Truck Driver',
    rating: 5,
  },
  {
    quote: 'The team handled my fleet maintenance with professionalism. They keep my business moving, and I trust them completely with all our vehicles.',
    name: 'Mary W.',
    title: 'Transport Firm Owner',
    rating: 5,
  },
  {
    quote: 'Excellent bodywork after a minor accident. The spray painting job was flawless - my car looks brand new. Thank you!',
    name: 'David O.',
    title: 'Car Owner',
    rating: 4,
  },
  {
    quote: 'I bring my entire agricultural fleet here. They are reliable, fast, and understand the needs of a business owner. Top-notch service.',
    name: 'Samuel N.',
    title: 'Farm Manager',
    rating: 5,
  },
];

interface TestimonialsProps {
  limit?: number;
}


const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    return (
        <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            ))}
        </div>
    );
};

const Testimonials: React.FC<TestimonialsProps> = ({ limit }) => {
  const displayedTestimonials = limit ? testimonials.slice(0, limit) : testimonials;
  return (
    <section className="py-20 bg-brand-navy text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 opacity-0 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">What Our Customers Say</h2>
          <p className="text-lg mt-2 max-w-2xl mx-auto text-gray-300">
            Our 4.7 ⭐ rating speaks for itself.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {displayedTestimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-brand-charcoal/50 p-8 rounded-lg shadow-lg flex flex-col opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <StarRating rating={testimonial.rating} />
              <p className="text-gray-200 mt-4 flex-grow">"{testimonial.quote}"</p>
              <div className="mt-6">
                <p className="font-bold font-heading text-lg">{testimonial.name}</p>
                <p className="text-brand-orange">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;