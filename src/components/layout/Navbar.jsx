import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV_LINKS, PORTAL_LINKS, SITE_INFO } from '../../data/mockData';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPortalDropdownOpen, setIsPortalDropdownOpen] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        background: 'linear-gradient(180deg, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.60) 100%)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.25)',
        boxShadow: isScrolled ? '0 8px 32px rgba(0,0,0,0.08)' : 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center min-h-[100px] py-2 md:py-0 md:h-[100px]">
          
          {/* Logo Area */}
          <Link to="/" className="flex items-center gap-2 md:gap-3">
            <div className="relative flex flex-col items-center justify-center w-[85px] h-[85px] md:w-[95px] md:h-[95px] shrink-0 mt-1 md:mt-0">
              <img src="/images/logo.png" alt="Singh Commerce Classes Logo" className="w-[85px] h-[85px] md:w-[95px] md:h-[95px] object-contain" />
            </div>
            <div className="flex flex-col ml-1 md:ml-0">
              <span className="font-playfair text-base sm:text-xl md:text-2xl font-bold text-navy tracking-tight leading-tight">
                {SITE_INFO.name}
              </span>
              <span className="text-[10px] sm:text-[11px] md:text-xs text-gray-mid italic">
                {SITE_INFO.motto}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => 
                  `text-sm font-medium transition-colors duration-200 py-2 border-b-2 ${
                    isActive 
                      ? 'text-brand-orange border-brand-orange' 
                      : 'text-charcoal hover:text-brand-orange border-transparent'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Portal Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsPortalDropdownOpen(true)}
              onMouseLeave={() => setIsPortalDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-charcoal hover:text-brand-orange py-2 transition-colors">
                {user ? (
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-brand-orange-light text-brand-orange rounded-full flex items-center justify-center font-bold text-xs">
                      {user.displayName?.charAt(0) || 'S'}
                    </div>
                    <span>Portal</span>
                  </div>
                ) : (
                  "Student Portal"
                )}
                <svg className={`w-4 h-4 transition-transform ${isPortalDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isPortalDropdownOpen && (
                <div className="absolute top-full right-0 w-56 bg-white shadow-lg rounded-xl border border-gray-100 py-2 mt-1">
                  {PORTAL_LINKS.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="flex items-center justify-between px-4 py-2.5 text-sm text-charcoal hover:bg-bg-primary transition-colors"
                    >
                      {link.name}
                      {!user && (
                        <span className="bg-gray-100 text-gray-500 text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1">
                          🔒 Login
                        </span>
                      )}
                    </Link>
                  ))}
                  {user && (
                    <button
                      onClick={() => logout()}
                      className="w-full text-left px-4 py-2.5 text-sm text-error hover:bg-red-50 transition-colors border-t border-gray-100 mt-1"
                    >
                      Logout
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href={`tel:${SITE_INFO.phoneRaw}`}
              className="border-2 border-brand-orange text-brand-orange px-4 py-2 rounded-lg text-sm font-semibold hover:bg-brand-orange-light transition"
            >
              Call Now
            </a>
            <Link 
              to="/contact"
              className="bg-brand-orange text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-sm hover:bg-brand-orange-dark transition"
            >
              Enquire Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-navy p-2 focus:outline-none"
              aria-label="Open menu"
            >
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-white lg:hidden flex flex-col h-[100dvh] overflow-hidden">
          <div className="flex-none flex justify-between items-center p-6 border-b border-gray-100">
            <span className="font-playfair text-xl font-bold text-navy">Menu</span>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-gray-500 hover:text-navy focus:outline-none bg-gray-50 rounded-full"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto min-h-0 px-6 py-8 flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="shrink-0 text-lg font-medium text-navy pb-4 border-b border-gray-100"
              >
                {link.name}
              </Link>
            ))}
            
            <div className="shrink-0 mt-4">
              <p className="text-xs uppercase tracking-wider font-bold text-gray-400 mb-4">
                {user ? `Portal (${user.displayName || user.name || 'Student'})` : 'Student Portal'}
              </p>
              <div className="flex flex-col gap-4">
                {PORTAL_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2 text-base text-charcoal shrink-0"
                  >
                    {!user && <span className="text-sm">🔒</span>} {link.name}
                  </Link>
                ))}
                {user && (
                  <button
                    onClick={() => {
                      logout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center gap-2 text-base text-error shrink-0 text-left"
                  >
                    Logout
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="flex-none p-6 pb-8 border-t border-gray-100 bg-gray-50 flex flex-col gap-3">
            <Link 
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full bg-brand-orange text-white text-center py-3.5 rounded-lg font-semibold"
            >
              Enquire Now
            </Link>
            <a 
              href={`tel:${SITE_INFO.phoneRaw}`}
              className="w-full border-2 border-brand-orange text-brand-orange text-center py-3.5 rounded-lg font-semibold"
            >
              Call: {SITE_INFO.phone}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
