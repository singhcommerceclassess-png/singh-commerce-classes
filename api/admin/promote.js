import { adminDb } from '../_lib/firebase-admin.js';
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

    const { uid } = req.body;
    if (!uid) {
      return res.status(400).json({ error: 'Missing user uid' });
    }

    try {
      await adminDb.collection('users').doc(uid).update({
        role: 'admin'
      });
      res.status(200).json({ message: 'User promoted to admin successfully' });
    } catch (error) {
      console.error('Error promoting user:', error);
      res.status(500).json({ error: 'Failed to promote user' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
