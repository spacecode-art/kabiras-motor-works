import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import BlogPage from './components/BlogPage';
import ContactPage from './components/ContactPage';
import BodyworkPage from './components/BodyworkPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [imageData, setImageData] = useState(null);
  const [loading, setLoading] = useState(true);

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
        return <AboutPage onBookServiceClick={() => navigate('contact')} imageData={imageData} />;
      case 'services':
        return <ServicesPage imageData={imageData} onBookServiceClick={() => navigate('contact')} />;
      case 'bodywork':
        return <BodyworkPage onBookServiceClick={() => navigate('contact')} imageData={imageData} />;
      case 'blog':
        return <BlogPage imageData={imageData} />;
      case 'contact':
        return <ContactPage imageData={imageData} />;
      case 'home':
      default:
        return <HomePage onBookServiceClick={() => navigate('contact')} imageData={imageData} onNavigate={navigate} />;
    }
  };

  return (
    <div className="bg-white text-brand-charcoal font-sans">
      <Header onBookServiceClick={() => navigate('contact')} onNavigate={navigate} currentPage={currentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
};

export default App;