import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import BlogPage from './components/BlogPage';
import ContactPage from './components/ContactPage';
import BodyworkPage from './components/BodyworkPage';
import BookingModal from './components/BookingModal';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [imageData, setImageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    const fetchImageData = async () => {
      try {
        const response = await fetch('./images.json');
        if (!response.ok) {
          throw new Error('Failed to fetch image data');
        }
        const data = await response.json();
        setImageData(data);
      } catch (error) {
        console.error('Error loading images.json:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImageData();
  }, []);

  const navigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };
  
  const openBookingModal = () => setIsBookingModalOpen(true);
  const closeBookingModal = () => setIsBookingModalOpen(false);

  const renderPage = () => {
    if (loading) {
      return (
        <div className="flex justify-center items-center h-screen">
          <div className="text-xl font-semibold">Loading...</div>
        </div>
      );
    }
    
    if (!imageData) {
       return (
        <div className="flex justify-center items-center h-screen">
          <div className="text-xl font-semibold text-red-500">Failed to load application data. Please try again later.</div>
        </div>
      );
    }

    switch (currentPage) {
      case 'about':
        return <AboutPage onBookServiceClick={openBookingModal} imageData={imageData} />;
      case 'services':
        return <ServicesPage imageData={imageData} onBookServiceClick={openBookingModal} />;
      case 'bodywork':
        return <BodyworkPage onBookServiceClick={openBookingModal} imageData={imageData} />;
      case 'blog':
        return <BlogPage imageData={imageData} />;
      case 'contact':
        return <ContactPage imageData={imageData} />;
      case 'home':
      default:
        return <HomePage onBookServiceClick={openBookingModal} imageData={imageData} onNavigate={navigate} />;
    }
  };

  return (
    <div className="bg-white text-brand-charcoal font-sans">
      <Header onBookServiceClick={openBookingModal} onNavigate={navigate} currentPage={currentPage} />
      <main key={currentPage} className="opacity-0 animate-fade-in-up">
        {renderPage()}
      </main>
      <Footer onNavigate={navigate} />
      {isBookingModalOpen && <BookingModal onClose={closeBookingModal} />}
    </div>
  );
};

export default App;