import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onBookServiceClick: () => void;
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ onBookServiceClick, onNavigate, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Effect to lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { page: 'home', label: 'Home' },
    { page: 'about', label: 'About Us' },
    { page: 'services', label: 'Services' },
    { page: 'bodywork', label: 'Bodywork' },
    { page: 'blog', label: 'Blog' },
    { page: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onNavigate(page);
    setIsMenuOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onNavigate('home');
    setIsMenuOpen(false);
  }

  const NavLink: React.FC<{page: string, label: string}> = ({ page, label }) => (
    <a 
      href="#" 
      onClick={(e) => handleNavClick(page, e)} 
      className={`relative py-2 text-lg transition-colors duration-300 group ${currentPage === page ? 'text-brand-orange' : 'hover:text-brand-orange'}`}
    >
      {label}
      <span className={`absolute bottom-0 left-0 block h-0.5 bg-brand-orange transition-all duration-300 ${currentPage === page ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
    </a>
  );

  return (
    <>
      <header className="bg-brand-navy/90 backdrop-blur-sm text-white sticky top-0 z-40 shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#" onClick={handleLogoClick} className="flex items-center text-xl md:text-2xl font-heading font-bold tracking-wider hover:text-brand-orange transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              KABIRA'S
            </a>
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <NavLink key={link.page} page={link.page} label={link.label} />
              ))}
              <button
                onClick={onBookServiceClick}
                className="bg-brand-orange text-white font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition duration-300 transform hover:scale-105 shadow-md"
              >
                Book Service
              </button>
            </nav>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(true)} aria-label="Open menu">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-50 bg-brand-navy text-white transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
        aria-hidden={!isMenuOpen}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col">
          <div className="flex items-center justify-between h-20">
             <a href="#" onClick={handleLogoClick} className="flex items-center text-xl font-heading font-bold tracking-wider">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              KABIRA'S
            </a>
            <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center flex-grow space-y-8 text-white">
            {navLinks.map((link) => (
              <a 
                key={link.page} 
                href="#" 
                onClick={(e) => handleNavClick(link.page, e)}
                className={`text-3xl font-bold transition duration-300 ${currentPage === link.page ? 'text-brand-orange' : 'hover:text-brand-orange'}`}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                onBookServiceClick();
                setIsMenuOpen(false);
              }}
              className="mt-4 bg-brand-orange text-white font-bold py-3 px-8 rounded-full text-xl hover:bg-opacity-90 transition duration-300 shadow-lg"
            >
              Book Service
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;