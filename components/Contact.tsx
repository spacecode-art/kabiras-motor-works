import React, { useState } from 'react';

interface ContactProps {
  imageData: any;
}

const Contact: React.FC<ContactProps> = ({ imageData }) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  if (!imageData) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Fake delay for demonstration
    await new Promise(resolve => setTimeout(resolve, 1500));
    setStatus('success');
  };

  return (
    <section className="py-20 bg-brand-light-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy">Get In Touch</h2>
          <p className="text-lg mt-2 max-w-2xl mx-auto text-brand-charcoal">
            Ready for a service or have a question? We're here to help.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
           <div className="bg-white p-8 rounded-lg shadow-lg">
            {status === 'success' ? (
              <div className="text-center py-10">
                <div className="flex justify-center items-center mx-auto bg-green-100 rounded-full h-16 w-16">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-2xl font-bold font-heading text-brand-navy mt-6 mb-2">Message Sent Successfully!</h3>
                <p className="text-brand-charcoal">Thank you for contacting us. We will get back to you shortly.</p>
              </div>
            ) : (
                <>
                <h3 className="text-2xl font-bold font-heading text-brand-navy mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="relative">
                            <label htmlFor="name" className="block text-brand-charcoal font-bold mb-2 sr-only">Full Name</label>
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="w-5 h-5 text-brand-grey" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                            </div>
                            <input type="text" id="name" name="name" placeholder="Full Name" className="w-full pl-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition" required />
                        </div>
                        <div className="relative">
                            <label htmlFor="email" className="block text-brand-charcoal font-bold mb-2 sr-only">Email Address</label>
                             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="w-5 h-5 text-brand-grey" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            </div>
                            <input type="email" id="email" name="email" placeholder="Email Address" className="w-full pl-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition" required />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="inquiry-type" className="block text-brand-charcoal font-bold mb-2 sr-only">Inquiry Type</label>
                        <select id="inquiry-type" name="inquiry-type" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition" required>
                            <option>Service Inquiry</option>
                            <option>Booking Request</option>
                            <option>Fleet Management Question</option>
                            <option>General Feedback</option>
                        </select>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-brand-charcoal font-bold mb-2 sr-only">Message</label>
                        <textarea id="message" name="message" rows={5} placeholder="Your message..." className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition" required></textarea>
                    </div>
                    <button 
                        type="submit" 
                        disabled={status === 'submitting'}
                        className="w-full bg-brand-orange text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition duration-300 disabled:bg-opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                        {status === 'submitting' && <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>}
                        {status === 'submitting' ? 'Submitting...' : 'Submit Message'}
                    </button>
                </form>
                </>
            )}
          </div>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold font-heading text-brand-navy mb-4">Contact Details</h3>
              <p className="flex items-center mb-3 text-lg text-brand-charcoal"><strong className="w-24">Phone:</strong> <a href="tel:+254788487711" className="text-brand-orange hover:underline">+254 788 487 711</a></p>
              <p className="flex items-start mb-3 text-lg text-brand-charcoal"><strong className="w-24 shrink-0">Location:</strong> <span>Karatina, Kenya (operations in Eldoret)</span></p>
              <p className="flex items-center text-lg text-brand-charcoal"><strong className="w-24">Hours:</strong> <span>Open daily until 12:00 AM</span></p>
            </div>
            <a href="https://www.google.com/maps/search/?api=1&query=Karatina,Kenya" target="_blank" rel="noopener noreferrer" className="block rounded-lg shadow-lg overflow-hidden group">
                <img src={imageData.pages.contact[1].url} alt="A scenic road in Kenya, representing the location" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;