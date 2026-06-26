import { doc, getDoc, setDoc, updateDoc, serverTimestamp, getDocs, collection, query, limit } from 'firebase/firestore';
import { db } from '../lib/firebase';

const USERS_COLLECTION = 'users';

export const userService = {
  // Check if this is the first user ever registering
  isFirstUser: async () => {
    try {
      const q = query(collection(db, USERS_COLLECTION), limit(1));
      const snapshot = await getDocs(q);
      return snapshot.empty;
    } catch (error) {
      console.error("Error checking first user:", error);
      return false; // Fail safe
    }
  },

  // Create a new user profile
  createUserProfile: async (uid, data) => {
    try {
      const userRef = doc(db, USERS_COLLECTION, uid);
      
      // Determine if this is the first user to assign admin role
      const isFirst = await userService.isFirstUser();
      const role = isFirst ? 'admin' : 'student';

      const profileData = {
        uid,
        email: data.email,
        name: data.name,
        phone: data.phone || '',
        role: role,
        course: data.course || '',
        accountStatus: 'active',
        createdAt: serverTimestamp(),
        lastLogin: serverTimestamp(),
      };

      await setDoc(userRef, profileData);
      return profileData;
    } catch (error) {
      console.error("Error creating user profile:", error);
      throw error;
    }
  },

  // Get user profile by UID
  getUserProfile: async (uid) => {
    try {
      const userRef = doc(db, USERS_COLLECTION, uid);
      const userSnap = await getDoc(userRef);
      
      if (userSnap.exists()) {
        return userSnap.data();
      }
      return null;
    } catch (error) {
      console.error("Error getting user profile:", error);
      return null;
    }
  },

  // Update last login timestamp
  updateLastLogin: async (uid) => {
    try {
      const userRef = doc(db, USERS_COLLECTION, uid);
      await updateDoc(userRef, {
        lastLogin: serverTimestamp()
      });
    } catch (error) {
      console.error("Error updating last login:", error);
    }
  }
};
