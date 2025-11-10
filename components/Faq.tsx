import React, { useState } from 'react';

const faqData = [
  {
    question: 'Do you service imported Japanese & German cars?',
    answer: 'Yes, absolutely. Our technicians are trained and equipped with modern diagnostic tools to service a wide range of vehicles, including popular Japanese models like Toyota and Nissan, and German brands like Mercedes-Benz and BMW.',
  },
  {
    question: 'How long does a typical service take?',
    answer: 'It depends on the service required. A basic diagnostic check or routine maintenance can often be completed on the same day. For more complex repairs or bodywork, we will provide a clear time estimate after our initial inspection.',
  },
  {
    question: 'Are genuine spares used for repairs?',
    answer: 'We prioritize using high-quality, reliable parts for all our repairs. We can source original manufacturer (genuine) parts or high-quality aftermarket equivalents, and we will always discuss the options with you to fit your budget and needs.',
  },
  {
    question: 'Do you offer services for commercial fleets?',
    answer: 'Yes, fleet maintenance is one of our core services. We work with transport firms and agricultural operators to create scheduled maintenance plans that minimize downtime and keep your vehicles compliant and on the road.',
  }
];

const FaqItem: React.FC<{ item: typeof faqData[0]; isOpen: boolean; onClick: () => void; }> = ({ item, isOpen, onClick }) => {
    return (
        <div className="border-b">
            <button
                onClick={onClick}
                className="w-full text-left py-4 px-6 flex justify-between items-center hover:bg-brand-light-gray focus:outline-none"
            >
                <span className="text-lg font-semibold text-brand-navy">{item.question}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </span>
            </button>
            {isOpen && (
                <div className="p-6 bg-brand-light-gray transition-all duration-500 ease-in-out">
                    <p className="text-brand-charcoal text-base">{item.answer}</p>
                </div>
            )}
        </div>
    )
}

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy">Frequently Asked Questions</h2>
        </div>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          {faqData.map((item, index) => (
            <FaqItem 
                key={index}
                item={item}
                isOpen={openIndex === index}
                onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;