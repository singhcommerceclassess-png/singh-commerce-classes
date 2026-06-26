import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV_LINKS, SITE_INFO } from '../../data/mockData';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, role, logout } = useAuth();

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

            {/* Login / Dashboard Button */}
            <div className="relative flex items-center">
              {user ? (
                <div className="flex items-center gap-4 ml-4">
                  <Link 
                    to={role === 'admin' ? '/admin/dashboard' : '/portal/dashboard'}
                    className="flex items-center gap-2 text-sm font-medium text-brand-orange hover:text-brand-orange-dark transition-colors"
                  >
                    <div className="w-7 h-7 bg-brand-orange-light text-brand-orange rounded-full flex items-center justify-center font-bold text-xs">
                      {user.displayName?.charAt(0) || user.name?.charAt(0) || 'S'}
                    </div>
                    <span>Dashboard</span>
                  </Link>
                  <button
                    onClick={() => logout()}
                    className="text-sm font-medium text-gray-400 hover:text-error transition-colors"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link 
                  to="/login"
                  className="flex items-center gap-2 text-sm font-bold text-brand-orange hover:text-brand-orange-dark transition-colors py-2 ml-2"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  Login
                </Link>
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
            
            <div className="shrink-0 mt-4 pt-4 border-t border-gray-100">
              {user ? (
                <div className="flex flex-col gap-4">
                  <Link
                    to={role === 'admin' ? '/admin/dashboard' : '/portal/dashboard'}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2 text-lg font-medium text-brand-orange shrink-0"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center gap-2 text-base text-error shrink-0 text-left"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 text-lg font-medium text-brand-orange shrink-0"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  Login / Sign Up
                </Link>
              )}
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
