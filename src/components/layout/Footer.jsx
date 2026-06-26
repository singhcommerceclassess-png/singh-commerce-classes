import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_INFO, NAV_LINKS, PORTAL_LINKS, FOOTER_COURSE_LINKS } from '../../data/mockData';

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1 - Brand */}
          <div className="flex flex-col gap-4">
            <div>
              <div className="relative inline-flex flex-col items-center md:items-start mb-0 mt-6 md:mt-0">
                <img src="/images/logo.png" alt={`${SITE_INFO.name} Logo`} className="w-[120px] h-[120px] md:w-[140px] md:h-[140px] object-contain md:ml-4" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-white mb-1 -mt-6 md:-mt-2 relative z-10">{SITE_INFO.name}</h3>
              <p className="italic text-gray-400 text-sm">{SITE_INFO.motto}</p>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mt-2 max-w-xs">
              {SITE_INFO.address}
            </p>
            <div className="flex flex-col gap-3 mt-2">
              <a href={`tel:${SITE_INFO.phoneRaw}`} className="flex items-center gap-3 text-gray-300 hover:text-brand-orange transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {SITE_INFO.phone}
              </a>
              <a href={SITE_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-whatsapp transition-colors">
                <svg className="w-5 h-5 text-whatsapp" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.14.561 4.234 1.626 6.082L.21 23.79l5.805-1.522a11.96 11.96 0 006.016 1.616h.005c6.645 0 12.031-5.384 12.031-12.032C24.067 5.385 18.681 0 12.031 0zm0 21.872h-.004a9.922 9.922 0 01-5.056-1.378l-.362-.215-3.76.985.998-3.666-.236-.375a9.92 9.92 0 01-1.517-5.35c0-5.485 4.463-9.948 9.95-9.948 5.486 0 9.949 4.463 9.949 9.948 0 5.485-4.463 9.95-9.949 9.95zm5.45-7.447c-.298-.15-1.771-.875-2.045-.975-.274-.1-.473-.15-.672.15-.199.298-.772.975-.946 1.174-.174.199-.348.224-.646.074-.298-.15-1.264-.466-2.408-1.488-.89-.794-1.492-1.775-1.666-2.073-.174-.298-.018-.46.131-.61.134-.135.298-.348.447-.522.15-.174.199-.298.298-.498.1-.199.05-.373-.024-.522-.074-.15-.672-1.62-.921-2.217-.243-.585-.49-.505-.672-.514-.174-.01-.373-.01-.572-.01-.199 0-.522.074-.796.373-.274.298-1.045 1.02-1.045 2.488s1.07 2.886 1.22 3.085c.15.199 2.102 3.208 5.093 4.498.712.308 1.268.492 1.7.63.714.227 1.365.195 1.88.118.575-.086 1.771-.723 2.02-1.423.248-.699.248-1.298.174-1.423-.074-.124-.274-.199-.572-.348z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-300 hover:text-brand-orange text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Student Portal */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Student Portal</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link to="/login" className="text-gray-300 hover:text-brand-orange text-sm transition-colors">Login</Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-300 hover:text-brand-orange text-sm transition-colors">Register</Link>
              </li>
              {PORTAL_LINKS.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-300 hover:text-brand-orange text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Courses */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Our Courses</h4>
            <ul className="flex flex-col gap-3">
              {FOOTER_COURSE_LINKS.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-300 hover:text-brand-orange text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} {SITE_INFO.name}. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm text-center md:text-right">
            Made with <span className="text-red-500">❤️</span> for students of Delhi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
