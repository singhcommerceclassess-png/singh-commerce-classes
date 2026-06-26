import { adminDb, adminAuth } from '../_lib/firebase-admin.js';
import authMiddleware from '../_lib/auth-middleware.js';
import adminMiddleware from '../_lib/admin-middleware.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type');

  const decodedToken = await authMiddleware(req, res);
  if (!decodedToken) return;

  if (req.method === 'POST') {
    const isAdmin = await adminMiddleware(req, res, decodedToken);
    if (!isAdmin) return;

    const { uid, disabled } = req.body;
    if (!uid) {
      return res.status(400).json({ error: 'Missing user uid' });
    }

    try {
      // 1. Update Firebase Auth status
      await adminAuth.updateUser(uid, { disabled });
      
      // 2. Update Firestore status
      await adminDb.collection('users').doc(uid).update({
        accountStatus: disabled ? 'disabled' : 'active'
      });
      
      res.status(200).json({ message: `User ${disabled ? 'disabled' : 'enabled'} successfully` });
    } catch (error) {
      console.error('Error updating user status:', error);
      res.status(500).json({ error: 'Failed to update user status' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
