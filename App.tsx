import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import BlogPage from './components/BlogPage';
import ContactPage from './components/ContactPage';
import BodyworkPage from './components/BodyworkPage';
import imageData from './images.json';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const navigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    // The imageData is now imported directly, so no loading or error checks are needed.
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