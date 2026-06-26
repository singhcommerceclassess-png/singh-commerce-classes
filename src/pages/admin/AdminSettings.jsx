import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import AdminSidebar from '../../components/layout/AdminSidebar';
import { SITE_INFO } from '../../data/mockData';

const AdminSettings = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="bg-bg-primary min-h-screen">
      <Helmet>
        <title>Settings | {SITE_INFO.name}</title>
      </Helmet>

      <AdminSidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      <main className="lg:ml-64 p-6 md:p-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-navy font-playfair mb-2">Platform Settings</h1>
            <p className="text-gray-500">Configure global platform options.</p>
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

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center max-w-2xl mx-auto mt-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                ⚙️
            </div>
            <h2 className="text-xl font-bold text-navy mb-2">Settings Coming Soon</h2>
            <p className="text-gray-500">The global settings configuration panel is currently under development and will be available in a future update.</p>
        </div>
      </main>
    </div>
  );
};

export default AdminSettings;
