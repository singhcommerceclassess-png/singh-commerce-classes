import { adminDb } from '../_lib/firebase-admin.js';
import authMiddleware from '../_lib/auth-middleware.js';
import adminMiddleware from '../_lib/admin-middleware.js';

export default async function handler(req, res) {
  // CORS setup
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type');

  const decodedToken = await authMiddleware(req, res);
  if (!decodedToken) return;

  if (req.method === 'GET') {
    const isAdmin = await adminMiddleware(req, res, decodedToken);
    if (!isAdmin) return;

    try {
      const usersSnapshot = await adminDb.collection('users')
        .orderBy('createdAt', 'desc')
        .get();
        
      const users = [];
      usersSnapshot.forEach(doc => {
        users.push({ id: doc.id, ...doc.data() });
      });

      res.status(200).json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Failed to fetch users' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
