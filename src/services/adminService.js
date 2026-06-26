import api from './api';

export const adminService = {
  // Get all users
  getAllUsers: async () => {
    const response = await api.get('/users');
    return response.data;
  },

  // Promote a user to admin
  promoteToAdmin: async (uid) => {
    const response = await api.post('/admin/promote', { uid });
    return response.data;
  },

  // Disable or enable a user account
  updateUserStatus: async (uid, disabled) => {
    const response = await api.post('/admin/disable', { uid, disabled });
    return response.data;
  }
};
