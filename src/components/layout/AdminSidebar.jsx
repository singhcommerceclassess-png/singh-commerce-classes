import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { SITE_INFO } from '../../data/mockData';

const ADMIN_LINKS = [
  { name: 'Dashboard', path: '/admin/dashboard', icon: '📊' },
  { name: 'User Management', path: '/admin/users', icon: '👥' },
  { name: 'Settings', path: '/admin/settings', icon: '⚙️' }
];

const AdminSidebar = ({ mobileOpen, setMobileOpen }) => {
  const { userProfile, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-navy/50 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-100 z-50 transform transition-transform duration-300 ease-in-out lg:translate-x-0 flex flex-col ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <NavLink to="/" className="font-playfair text-xl font-bold text-navy flex flex-col">
            <span>{SITE_INFO.name}</span>
            <span className="text-xs text-brand-orange uppercase tracking-wider font-sans">Admin Panel</span>
          </NavLink>
          <button className="lg:hidden text-gray-500" onClick={() => setMobileOpen(false)}>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-4 flex-1">
          <nav className="space-y-2">
            {ADMIN_LINKS.map(link => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) => 
                  `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition ${
                    isActive 
                      ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/20' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`
                }
              >
                <span className="text-xl">{link.icon}</span>
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center gap-3 px-4 py-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center font-bold text-lg">
              {userProfile?.name?.charAt(0) || 'A'}
            </div>
            <div>
              <p className="text-sm font-bold text-navy line-clamp-1">{userProfile?.name || 'Admin'}</p>
              <p className="text-xs text-gray-500">Administrator</p>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-red-500 font-medium hover:bg-red-50 rounded-xl transition"
          >
            <span>🚪</span>
            Log Out
          </button>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;
