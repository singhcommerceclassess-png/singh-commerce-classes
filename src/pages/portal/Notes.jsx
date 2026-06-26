import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../hooks/useAuth';
import { LoginPromptWall } from '../../router/ProtectedRoute';
import { NOTES } from '../../data/mockData';

const Notes = () => {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');

  if (!user) {
    return <LoginPromptWall />;
  }

  const handleDownload = (noteName) => {
    alert(`Downloading ${noteName}...`);
  };

  return (
    <main className="bg-bg-primary min-h-screen pt-20">
      <Helmet>
        <title>Notes Library | Singh Commerce Classes Student Portal</title>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 flex-shrink-0 hidden md:block">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-28">
            <h3 className="font-bold text-navy text-lg mb-6 border-b border-gray-100 pb-4">Filters</h3>
            
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">By Subject</h4>
              <div className="space-y-2">
                {['Accountancy', 'Economics', 'Business Studies', 'Statistics'].map(sub => (
                  <label key={sub} className="flex items-center gap-2 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-brand-orange focus:ring-brand-orange accent-brand-orange cursor-pointer" />
                    <span className="text-sm text-charcoal group-hover:text-brand-orange transition">{sub}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">By Type</h4>
              <div className="space-y-2">
                {['PDF Notes', 'Practice Questions', 'Previous Year Papers'].map(type => (
                  <label key={type} className="flex items-center gap-2 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-brand-orange focus:ring-brand-orange accent-brand-orange cursor-pointer" />
                    <span className="text-sm text-charcoal group-hover:text-brand-orange transition">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">By Class</h4>
              <div className="space-y-2">
                {['Class XI', 'Class XII', 'B.Com', 'B.B.A.'].map(cls => (
                  <label key={cls} className="flex items-center gap-2 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-brand-orange focus:ring-brand-orange accent-brand-orange cursor-pointer" />
                    <span className="text-sm text-charcoal group-hover:text-brand-orange transition">{cls}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Main Area */}
        <div className="flex-1 min-w-0">
          <div className="mb-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <h1 className="font-playfair text-3xl font-bold text-navy">Notes Library</h1>
            <div className="relative w-full sm:w-72">
              <input 
                type="text" 
                placeholder="Search notes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border border-gray-200 rounded-lg pl-10 pr-4 py-2.5 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none bg-white text-sm shadow-sm"
              />
              <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {NOTES.filter(n => n.title.toLowerCase().includes(searchTerm.toLowerCase())).map((note) => (
              <div key={note.id} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col h-full hover:-translate-y-1 transition-transform">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-red-50 text-red-500">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" /></svg>
                  </div>
                  <span className="bg-blue-50 text-blue-700 border border-blue-100 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                    {note.subject}
                  </span>
                </div>
                
                <h4 className="font-bold text-navy text-sm mb-2 line-clamp-2">{note.title}</h4>
                <p className="text-xs text-gray-500 mb-4 flex-grow line-clamp-2">{note.description}</p>
                
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                  <span className="text-[11px] text-gray-400 font-medium">Added: {note.date}</span>
                  <button 
                    onClick={() => handleDownload(note.title)}
                    className="bg-brand-orange text-white text-xs font-bold px-3 py-1.5 rounded hover:bg-brand-orange-dark transition"
                  >
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </main>
  );
};

export default Notes;
