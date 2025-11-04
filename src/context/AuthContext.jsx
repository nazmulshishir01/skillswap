import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { auth, googleProvider } from "../firebase/Config";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";

const AuthContext = createContext(null);


export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (ctx === null) {
    throw new Error("useAuth must be used within <AuthProvider>");
  }
  return ctx;
};

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const createUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);
  const signIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);
  const googleLogin = () => signInWithPopup(auth, googleProvider);
  const logOut = () => signOut(auth);
  const updateUserProfile = (profile) =>
    updateProfile(auth.currentUser, profile);
  const resetPassword = (email) => sendPasswordResetEmail(auth, email);

  const value = useMemo(
    () => ({
      user,
      loading,
      createUser,
      signIn,
      googleLogin,
      logOut,
      updateUserProfile,
      resetPassword,
    }),
    [user, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
