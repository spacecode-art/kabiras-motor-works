import React, { useState } from 'react';

interface BookingModalProps {
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicle: '',
    service: '',
    date: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
      body: encode({ "form-name": "booking-modal", ...formData })
    })
      .then(() => setStatus('success'))
      .catch(error => {
          setStatus('error');
          console.error(error);
      });
  };


  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto relative" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800" aria-label="Close booking modal">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        <div className="p-8">
          {status === 'success' ? (
              <div className="text-center py-10">
                <div className="flex justify-center items-center mx-auto bg-green-100 rounded-full h-16 w-16">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-2xl font-bold font-heading text-brand-navy mt-6 mb-2">Request Sent!</h3>
                <p className="text-brand-charcoal">Thank you for your booking request. We will contact you shortly to confirm your appointment.</p>
                 <button onClick={onClose} className="mt-6 bg-brand-orange text-white font-bold py-2 px-8 rounded-full hover:bg-opacity-90 transition duration-300">
                    Close
                </button>
              </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold font-heading text-brand-navy mb-6">Book a Service Appointment</h2>
              {status === 'error' && <p className="mb-4 text-red-600 bg-red-100 p-3 rounded-md">Something went wrong. Please try again.</p>}
              <form name="booking-modal" data-netlify="true" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="booking-modal" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="modal-name" className="block text-brand-charcoal font-bold mb-2">Full Name</label>
                    <input type="text" id="modal-name" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange" required />
                  </div>
                  <div>
                    <label htmlFor="modal-phone" className="block text-brand-charcoal font-bold mb-2">Phone Number</label>
                    <input type="tel" id="modal-phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange" required />
                  </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="modal-vehicle" className="block text-brand-charcoal font-bold mb-2">Vehicle Make & Model</label>
                    <input type="text" id="modal-vehicle" name="vehicle" value={formData.vehicle} onChange={handleChange} placeholder="e.g., Toyota Hilux" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="modal-service" className="block text-brand-charcoal font-bold mb-2">Desired Service</label>
                    <select id="modal-service" name="service" value={formData.service} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange" required>
                        <option value="">-- Please select a service --</option>
                        <option>Engine Diagnostics</option>
                        <option>Brake Repair</option>
                        <option>Transmission Service</option>
                        <option>Preventive Maintenance</option>
                        <option>Bodywork / Painting</option>
                        <option>Other</option>
                    </select>
                </div>
                <div className="mb-6">
                    <label htmlFor="modal-date" className="block text-brand-charcoal font-bold mb-2">Preferred Date</label>
                    <input type="date" id="modal-date" name="date" value={formData.date} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange" required />
                </div>
                <div className="flex justify-end gap-4">
                  <button type="button" onClick={onClose} className="bg-gray-200 text-brand-charcoal font-bold py-2 px-6 rounded-md hover:bg-gray-300 transition duration-300">
                    Cancel
                  </button>
                  <button type="submit" disabled={status === 'submitting'} className="bg-brand-orange text-white font-bold py-2 px-6 rounded-md hover:bg-opacity-90 transition duration-300 disabled:bg-opacity-50 disabled:cursor-not-allowed flex items-center justify-center">
                    {status === 'submitting' && <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>}
                    {status === 'submitting' ? 'Submitting...' : 'Submit Request'}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;