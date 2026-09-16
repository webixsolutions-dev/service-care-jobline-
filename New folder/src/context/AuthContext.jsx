import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

const DEFAULT_USER = {
  id: "usr_12345",
  name: "Alex Rivera",
  email: "alex.rivera@example.com",
  role: "seeker", // 'seeker' | 'employer'
  avatar: null,
};

export function AuthProvider({ children }) {
  // Default to signed-in job seeker for seamless previewing & development
  const [currentUser, setCurrentUser] = useState(DEFAULT_USER);

  function login(email, role = "seeker") {
    const user = {
      id: `usr_${Date.now()}`,
      name: email.split("@")[0].replace(".", " "),
      email,
      role,
      avatar: null,
    };
    setCurrentUser(user);
    return user;
  }

  function logout() {
    setCurrentUser(null);
  }

  const value = {
    currentUser,
    isAuthenticated: !!currentUser,
    login,
    logout,
    role: currentUser?.role || null,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
