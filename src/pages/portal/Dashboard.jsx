import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { LoginPromptWall } from '../../router/ProtectedRoute';
import { DASHBOARD_STATS, RECENT_ACTIVITY } from '../../data/mockData';
import { DashboardSkeleton } from '../../components/skeletons/Skeletons';

const Dashboard = () => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!user) {
    return <LoginPromptWall />;
  }

  return (
    <main className="bg-bg-primary min-h-screen pt-20">
      <Helmet>
        <title>Dashboard | Singh Commerce Classes Student Portal</title>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row gap-8">
        
        {/* Left Sidebar */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-28">
            <div className="text-center pb-6 border-b border-gray-100 mb-6">
              <div className="w-20 h-20 bg-brand-orange-light text-brand-orange rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                {user?.name?.charAt(0) || 'S'}
              </div>
              <h3 className="font-bold text-navy text-lg">{user?.name || 'Student Name'}</h3>
              <p className="text-xs text-gray-500 font-medium">Class XII Commerce</p>
            </div>

            <nav className="space-y-2">
              <Link to="/portal/dashboard" className="flex items-center gap-3 px-4 py-3 bg-brand-orange-light text-brand-orange rounded-xl font-semibold transition">
                <span>📊</span> Dashboard
              </Link>
              <Link to="/portal/notes" className="flex items-center gap-3 px-4 py-3 text-charcoal hover:bg-gray-50 rounded-xl font-medium transition">
                <span>📄</span> Notes Library
              </Link>
              <Link to="/portal/classes" className="flex items-center gap-3 px-4 py-3 text-charcoal hover:bg-gray-50 rounded-xl font-medium transition">
                <span>🎬</span> Online Classes
              </Link>
              <button className="w-full flex items-center gap-3 px-4 py-3 text-charcoal hover:bg-gray-50 rounded-xl font-medium transition text-left mt-8 text-error">
                <span>🚪</span> Logout
              </button>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <div className="mb-8">
            <h1 className="font-playfair text-3xl font-bold text-navy">Good Morning, Student! 👋</h1>
            <p className="text-gray-500 mt-2">Here is what's happening with your courses today.</p>
          </div>

          {isLoading ? (
            <DashboardSkeleton />
          ) : (
            <div className="space-y-8">
              {/* Stats Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {DASHBOARD_STATS.map((stat, i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center gap-4">
                    <div className="w-12 h-12 bg-bg-section-alt rounded-xl flex items-center justify-center text-2xl">
                      {stat.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                      <p className="font-playfair text-2xl font-bold text-navy">{stat.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Access */}
              <div>
                <h3 className="font-bold text-navy text-lg mb-4">Quick Access</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Link to="/portal/notes" className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:border-brand-orange transition group flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">📄</span>
                      <span className="font-semibold text-navy">Notes Library</span>
                    </div>
                    <span className="text-gray-300 group-hover:text-brand-orange transition">→</span>
                  </Link>
                  <Link to="/portal/classes" className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:border-brand-orange transition group flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🎬</span>
                      <span className="font-semibold text-navy">Video Classes</span>
                    </div>
                    <span className="text-gray-300 group-hover:text-brand-orange transition">→</span>
                  </Link>
                  <Link to="#" className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:border-brand-orange transition group flex items-center justify-between opacity-70">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">📝</span>
                      <span className="font-semibold text-navy">Assignments</span>
                    </div>
                    <span className="text-gray-300 group-hover:text-brand-orange transition">→</span>
                  </Link>
                </div>
              </div>

              {/* Recent Activity */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-navy text-lg">Recent Activity</h3>
                  <button className="text-sm font-medium text-brand-orange hover:underline">View All</button>
                </div>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-gray-50 border-b border-gray-100">
                          <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Subject</th>
                          <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Item</th>
                          <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Date</th>
                          <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {RECENT_ACTIVITY.map((item, idx) => (
                          <tr key={idx} className="hover:bg-gray-50/50 transition">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="text-sm font-semibold text-navy">{item.subject}</span>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                <span className="text-lg">{item.type === 'PDF Note' ? '📄' : '🎬'}</span>
                                <span className="text-sm text-charcoal">{item.name}</span>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {item.date}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-bold ${
                                item.status === 'New' ? 'bg-green-100 text-green-700' : 
                                item.status === 'Viewed' ? 'bg-gray-100 text-gray-600' : 
                                'bg-blue-100 text-blue-700'
                              }`}>
                                {item.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
