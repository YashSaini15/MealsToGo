import React, { useState, createContext } from "react";
import { loginRequest } from "./authentication.service";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../../firebaseConfig";

export const AuthenticationContext = createContext();

const errorMessages = {
  "auth/invalid-email": "Please enter a valid email address.",
  "auth/missing-password": "Please enter password.",
  "auth/invalid-credential": "The credentials are not valid. Please try again.",
  "auth/weak-password": "Password should be at least 6 characters long.",
  "auth/user-not-found": "No account found with this email.",
};

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  onAuthStateChanged(auth, (usr) => {
    if (usr) {
      setUser(usr);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        const errorMessage =
          errorMessages[e.code] ||
          "An unexpected error occurred. Please try again.";
        setError(errorMessage);
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        const errorMessage =
          errorMessages[e.code] ||
          "An unexpected error occurred. Please try again.";
        setError(errorMessage);
      });
  };

  const onLogout = () => {
    setUser(null);
    signOut(auth).then(() => {
      setUser(null);
      setError(null);
    });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
