import React, { useState } from 'react';
import Faq from './Faq';

interface ContactPageProps {
  imageData: any;
}

const ContactPage: React.FC<ContactPageProps> = ({ imageData }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicle: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  if (!imageData) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const encode = (data: { [key: string]: string }) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact-page", ...formData })
    })
      .then(() => setStatus('success'))
      .catch(error => {
          setStatus('error');
          console.error(error);
      });
  };

  return (
    <div>
      {/* Page Header */}
      <section className="relative h-64 bg-cover bg-center text-white flex items-center justify-center" style={{ backgroundImage: `url('${imageData.pages.contact[0].url}')` }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center p-4">
          <h1 className="text-4xl md:text-5xl font-heading font-black">Contact & Booking</h1>
          <p className="text-xl text-gray-200 mt-2">We're Ready to Help You Get Back on the Road</p>
        </div>
      </section>

      {/* Contact & Booking Section */}
      <section className="py-20 bg-brand-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="bg-white p-8 rounded-lg shadow-lg">
             {status === 'success' ? (
                <div className="text-center py-10">
                    <div className="flex justify-center items-center mx-auto bg-green-100 rounded-full h-16 w-16">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <h3 className="text-2xl font-bold font-heading text-brand-navy mt-6 mb-2">Booking Request Sent!</h3>
                    <p className="text-brand-charcoal">Thank you for your request. We will review the details and contact you shortly to confirm your appointment.</p>
                </div>
             ) : (
                <>
                <h3 className="text-2xl font-bold font-heading text-brand-navy mb-6">Schedule Your Service</h3>
                 {status === 'error' && <p className="mb-4 text-red-600 bg-red-100 p-3 rounded-md">Something went wrong. Please try again or call us directly.</p>}
                <form name="contact-page" data-netlify="true" onSubmit={handleSubmit}>
                    <input type="hidden" name="form-name" value="contact-page" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="relative">
                            <label htmlFor="name" className="sr-only">Full Name</label>
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                               <svg className="w-5 h-5 text-brand-grey" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                            </div>
                            <input type="text" id="name" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="w-full pl-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition" required />
                        </div>
                        <div className="relative">
                            <label htmlFor="phone" className="sr-only">Phone</label>
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="w-5 h-5 text-brand-grey" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            </div>
                            <input type="tel" id="phone" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full pl-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition" required />
                        </div>
                    </div>
                    <div className="mb-4 relative">
                        <label htmlFor="vehicle" className="sr-only">Vehicle Make/Model</label>
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="w-5 h-5 text-brand-grey" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                        </div>
                        <input type="text" id="vehicle" name="vehicle" placeholder="e.g. Toyota Hilux" value={formData.vehicle} onChange={handleChange} className="w-full pl-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="service" className="sr-only">Service Required</label>
                        <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition" required>
                            <option value="">-- Select Service --</option>
                            <option>General Service Inquiry</option>
                            <option>Engine Diagnostics</option>
                            <option>Transmission & Gearbox</option>
                            <option>Brake System Repair</option>
                            <option>Suspension & Steering</option>
                            <option>Panel Beating / Collision Repair</option>
                            <option>Spray-Painting & Refinishing</option>
                            <option>Preventive Maintenance</option>
                        </select>
                    </div>
                     <div className="mb-6">
                        <label htmlFor="message" className="sr-only">Message</label>
                        <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition" placeholder="Provide any additional details..."></textarea>
                    </div>
                    <button 
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full bg-brand-orange text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition duration-300 disabled:bg-opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                         {status === 'submitting' && <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>}
                        {status === 'submitting' ? 'Submitting...' : 'Submit Booking Request'}
                    </button>
                </form>
                </>
             )}
            </div>
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold font-heading text-brand-navy mb-4">Contact Details</h3>
                <p className="flex items-start mb-3 text-lg text-brand-charcoal"><strong className="w-28 shrink-0">Address:</strong> <span>Karatina, Kenya (with operations in Eldoret, Uasin Gishu County)</span></p>
                <p className="flex items-center mb-3 text-lg text-brand-charcoal"><strong className="w-28">Phone:</strong> <a href="tel:+254788487711" className="text-brand-orange hover:underline">+254 788 487 711</a></p>
                <p className="flex items-center text-lg text-brand-charcoal"><strong className="w-28">Hours:</strong> <span>Open daily until 12:00 AM</span></p>
              </div>
              <div className="rounded-lg shadow-lg overflow-hidden h-64">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6649778235713!2d37.12586881525945!3d-0.4815468354728551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMjgnNTMuNiJTIDM3wrAwNyc0MS4xIkU!5e0!3m2!1sen!2sus!4v1721325655110!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map showing KABIRA'S location in Karatina, Kenya"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Faq />
    </div>
  );
};

export default ContactPage;