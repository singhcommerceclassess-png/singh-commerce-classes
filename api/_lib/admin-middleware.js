import { adminDb } from './firebase-admin.js';

export default async function adminMiddleware(req, res, decodedToken) {
  if (!decodedToken) return false;

  try {
    const userDoc = await adminDb.collection('users').doc(decodedToken.uid).get();
    
    if (!userDoc.exists) {
      res.status(403).json({ error: 'Forbidden: User profile not found' });
      return false;
    }

    const userData = userDoc.data();
    if (userData.role !== 'admin') {
      res.status(403).json({ error: 'Forbidden: Admin access required' });
      return false;
    }

    return true; // Authorized
  } catch (error) {
    console.error('Admin middleware error:', error);
    res.status(500).json({ error: 'Internal server error checking permissions' });
    return false;
  }
}
