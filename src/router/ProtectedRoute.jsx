import React from 'react';
import { Navigate, Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { SITE_INFO } from '../data/mockData';

export const LoginPromptWall = () => {
  return (
    <div className="min-h-[80vh] bg-bg-primary flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 max-w-md w-full text-center">
        <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        
        <h2 className="font-playfair text-2xl font-bold text-navy mb-3">
          This section is for enrolled students
        </h2>
        <p className="text-charcoal text-sm leading-relaxed mb-8">
          Please login to access your dashboard, notes, video lectures, and assignments.
        </p>
        
        <div className="flex flex-col gap-4">
          <Link 
            to="/login"
            className="w-full bg-brand-orange text-white rounded-lg px-8 py-3.5 font-semibold hover:bg-brand-orange-dark transition"
          >
            Login Now
          </Link>
          <div className="flex justify-center gap-2 text-sm">
            <span className="text-gray-mid">Don't have an account?</span>
            <Link to="/register" className="text-brand-orange font-medium hover:underline">
              Register
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100">
          <p className="text-xs text-gray-mid">Need help?</p>
          <a href={`tel:${SITE_INFO.phoneRaw}`} className="text-sm font-medium text-navy hover:text-brand-orange mt-1 block">
            Call us: {SITE_INFO.phone}
          </a>
        </div>
      </div>
    </div>
  );
};

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-bg-primary">Loading...</div>;
  }

  if (!user) {
    return <LoginPromptWall />;
  }

  return children;
};

export default ProtectedRoute;
