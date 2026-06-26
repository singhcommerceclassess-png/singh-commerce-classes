import { adminAuth } from './firebase-admin.js';

export default async function authMiddleware(req, res) {
  // Support CORS for local development
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return null; // Signals to stop processing
  }

  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Unauthorized: No token provided' });
    return null;
  }

  const token = authHeader.split('Bearer ')[1];
  try {
    const decodedToken = await adminAuth.verifyIdToken(token);
    return decodedToken; // Return the user info so the handler can use it
  } catch (error) {
    console.error('Auth middleware error:', error);
    res.status(401).json({ error: 'Unauthorized: Invalid token' });
    return null;
  }
}
