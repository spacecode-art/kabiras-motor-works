
import React from 'react';

interface BookingModalProps {
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        <div className="p-8">
          <h2 className="text-2xl font-bold font-heading text-brand-navy mb-6">Book a Service Appointment</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="modal-name" className="block text-brand-charcoal font-bold mb-2">Full Name</label>
                <input type="text" id="modal-name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange" required />
              </div>
              <div>
                <label htmlFor="modal-phone" className="block text-brand-charcoal font-bold mb-2">Phone Number</label>
                <input type="tel" id="modal-phone" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange" required />
              </div>
            </div>
            <div className="mb-4">
                <label htmlFor="modal-vehicle" className="block text-brand-charcoal font-bold mb-2">Vehicle Make & Model</label>
                <input type="text" id="modal-vehicle" placeholder="e.g., Toyota Hilux" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange" required />
            </div>
            <div className="mb-4">
                <label htmlFor="modal-service" className="block text-brand-charcoal font-bold mb-2">Desired Service</label>
                <select id="modal-service" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange" required>
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
                <input type="date" id="modal-date" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange" required />
            </div>
            <div className="flex justify-end gap-4">
              <button type="button" onClick={onClose} className="bg-gray-200 text-brand-charcoal font-bold py-2 px-6 rounded-md hover:bg-gray-300 transition duration-300">
                Cancel
              </button>
              <button type="submit" className="bg-brand-orange text-white font-bold py-2 px-6 rounded-md hover:bg-opacity-90 transition duration-300">
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;