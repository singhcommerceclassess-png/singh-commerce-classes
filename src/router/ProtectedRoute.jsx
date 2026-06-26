import React from 'react';
import { Navigate, Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { SITE_INFO } from '../data/mockData';

export const LoginPromptWall = () => {
  return (
    <div className="min-h-[80vh] bg-bg-primary flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 max-w-md w-full text-center">
        <div className="w-16 h-16 bg-brand-orange-light text-brand-orange rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
          🔒
        </div>
        <h2 className="font-playfair text-2xl font-bold text-navy mb-2">Restricted Access</h2>
        <p className="text-gray-500 mb-8">This section is for enrolled students only. Please login to access your learning portal.</p>
        
        <div className="flex flex-col gap-3">
          <Link 
            to="/login"
            className="w-full bg-brand-orange text-white py-3 rounded-xl font-medium hover:bg-orange-600 transition shadow-lg shadow-brand-orange/30"
          >
            Login Now
          </Link>
          <Link 
            to="/register"
            className="w-full bg-gray-50 text-charcoal py-3 rounded-xl font-medium hover:bg-gray-100 transition"
          >
            New Student? Register
          </Link>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100">
          <p className="text-sm text-gray-500">
            Need help? Call us at <br/>
            <a href={`tel:${SITE_INFO.phone.replace(/[^0-9]/g, '')}`} className="font-bold text-navy hover:text-brand-orange transition">
              {SITE_INFO.phone}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) return <div className="min-h-[80vh] flex items-center justify-center">Loading...</div>;
  if (!user) return <LoginPromptWall />;
  
  return children;
};

export const AdminRoute = ({ children }) => {
  const { user, role, loading } = useAuth();
  
  if (loading) return <div className="min-h-[80vh] flex items-center justify-center">Loading...</div>;
  
  if (!user) return <Navigate to="/login" replace />;
  
  if (role !== 'admin') {
    // If they are a student trying to access admin pages, kick them to student dashboard
    return <Navigate to="/portal/dashboard" replace />;
  }
  
  return children;
};

export default ProtectedRoute;
