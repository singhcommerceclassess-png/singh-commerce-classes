import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AdminSidebar from '../../components/layout/AdminSidebar';
import { SITE_INFO } from '../../data/mockData';
import { adminService } from '../../services/adminService';

const UserManagement = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const data = await adminService.getAllUsers();
      setUsers(data);
    } catch (err) {
      setError('Failed to fetch users. Backend may not be deployed yet.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handlePromote = async (uid) => {
    if (window.confirm('Are you sure you want to promote this user to Admin?')) {
      try {
        await adminService.promoteToAdmin(uid);
        fetchUsers();
      } catch (err) {
        alert('Failed to promote user');
      }
    }
  };

  const handleToggleStatus = async (uid, currentStatus) => {
    const disabled = currentStatus !== 'disabled';
    const action = disabled ? 'disable' : 'enable';
    if (window.confirm(`Are you sure you want to ${action} this user's account?`)) {
      try {
        await adminService.updateUserStatus(uid, disabled);
        fetchUsers();
      } catch (err) {
        alert(`Failed to ${action} user`);
      }
    }
  };

  return (
    <div className="bg-bg-primary min-h-screen">
      <Helmet>
        <title>User Management | {SITE_INFO.name}</title>
      </Helmet>

      <AdminSidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      <main className="lg:ml-64 p-6 md:p-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-navy font-playfair mb-2">User Management</h1>
            <p className="text-gray-500">Manage students and administrators.</p>
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

        {error && (
          <div className="bg-red-50 text-red-500 p-4 rounded-xl mb-6 border border-red-100">
            {error}
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
            <h2 className="font-bold text-navy">All Users</h2>
            <button onClick={fetchUsers} className="text-sm text-brand-orange hover:underline font-medium">Refresh</button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Name / Email</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Role</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Course</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {loading ? (
                  <tr>
                    <td colSpan="5" className="px-6 py-10 text-center text-gray-500">Loading users...</td>
                  </tr>
                ) : users.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="px-6 py-10 text-center text-gray-500">No users found.</td>
                  </tr>
                ) : (
                  users.map(user => (
                    <tr key={user.id} className="hover:bg-gray-50/50 transition">
                      <td className="px-6 py-4">
                        <div className="font-medium text-navy">{user.name}</div>
                        <div className="text-xs text-gray-500">{user.email}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-bold ${
                          user.role === 'admin' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
                        }`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {user.course || '-'}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-bold ${
                          user.accountStatus === 'disabled' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                        }`}>
                          {user.accountStatus || 'active'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm flex gap-3">
                        {user.role !== 'admin' && (
                          <button 
                            onClick={() => handlePromote(user.id)}
                            className="text-brand-orange hover:underline font-medium"
                          >
                            Make Admin
                          </button>
                        )}
                        <button 
                          onClick={() => handleToggleStatus(user.id, user.accountStatus)}
                          className={`${user.accountStatus === 'disabled' ? 'text-green-600' : 'text-red-500'} hover:underline font-medium`}
                        >
                          {user.accountStatus === 'disabled' ? 'Enable' : 'Disable'}
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserManagement;
