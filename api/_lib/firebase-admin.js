import admin from 'firebase-admin';

if (!admin.apps.length) {
  try {
    // We expect FIREBASE_SERVICE_ACCOUNT_KEY to be a JSON string of the service account
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
    
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
  } catch (error) {
    console.error('Firebase admin initialization error:', error);
  }
}

export const adminAuth = admin.auth();
export const adminDb = admin.firestore();
