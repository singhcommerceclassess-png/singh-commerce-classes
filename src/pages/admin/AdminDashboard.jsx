import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import AdminSidebar from '../../components/layout/AdminSidebar';
import { SITE_INFO } from '../../data/mockData';

const AdminDashboard = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="bg-bg-primary min-h-screen">
      <Helmet>
        <title>Admin Dashboard | {SITE_INFO.name}</title>
      </Helmet>

      <AdminSidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      <main className="lg:ml-64 p-6 md:p-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-navy font-playfair mb-2">System Overview</h1>
            <p className="text-gray-500">Welcome to the admin control panel.</p>
          </div>
          <button 
            className="lg:hidden text-gray-500 bg-white p-2 rounded-lg shadow-sm border border-gray-100"
            onClick={() => setMobileOpen(true)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-navy">Total Students</h3>
              <span className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center text-xl">👥</span>
            </div>
            <p className="text-3xl font-bold text-brand-orange">--</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-navy">Active Courses</h3>
              <span className="w-10 h-10 rounded-full bg-green-50 text-green-500 flex items-center justify-center text-xl">📚</span>
            </div>
            <p className="text-3xl font-bold text-brand-orange">4</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-navy">New Signups (This Week)</h3>
              <span className="w-10 h-10 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center text-xl">📈</span>
            </div>
            <p className="text-3xl font-bold text-brand-orange">--</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
