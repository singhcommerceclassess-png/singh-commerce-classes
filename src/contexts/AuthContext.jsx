import React, { createContext, useState, useEffect } from 'react';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged, 
  updateProfile,
  sendPasswordResetEmail
} from 'firebase/auth';
import { auth } from '../lib/firebase';
import { userService } from '../services/userService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  // Subscribe to auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      
      if (currentUser) {
        try {
          // Fetch their Firestore profile
          let profile = await userService.getUserProfile(currentUser.uid);
          
          // Fallback migration: If they have a Firebase Auth account but no Firestore profile,
          // create a basic student profile for them.
          if (!profile) {
            console.warn("User authenticated but no profile found. Migrating to basic student profile.");
            profile = await userService.createUserProfile(currentUser.uid, {
              email: currentUser.email,
              name: currentUser.displayName || 'Student',
              phone: '',
              course: ''
            });
          } else {
            // Update last login
            await userService.updateLastLogin(currentUser.uid);
          }
          
          setUserProfile(profile);
        } catch (error) {
          console.error("Failed to fetch user profile", error);
        }
      } else {
        setUserProfile(null);
      }
      
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const signup = async (email, password, name, phone, course) => {
    // 1. Create Firebase Auth user
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
    // 2. Update Auth display name
    await updateProfile(userCredential.user, {
      displayName: name
    });
    
    // 3. Create Firestore profile (this auto-assigns admin if it's the first user)
    const profile = await userService.createUserProfile(userCredential.user.uid, {
      email,
      name,
      phone,
      course
    });
    
    // Force local state update so redirects happen instantly
    setUser({ ...userCredential.user, displayName: name });
    setUserProfile(profile);
    
    return { user: userCredential.user, profile };
  };

  const login = async (email, password) => {
    const cred = await signInWithEmailAndPassword(auth, email, password);
    // Profile fetch is handled by onAuthStateChanged, but we could fetch it here too if needed
    return cred;
  };

  const logout = () => {
    return signOut(auth);
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const value = {
    user,
    userProfile,
    role: userProfile?.role || null, // Convenience property
    loading,
    signup,
    login,
    logout,
    resetPassword
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
