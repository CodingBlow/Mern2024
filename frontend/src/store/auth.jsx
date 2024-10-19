import { createContext, useContext, useEffect, useState } from "react";

// Create the Auth Context
export const AuthContext = createContext();

// AuthProvider Component
export const AuthProvider = ({ children }) => {
  // State to hold the token
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [user, setUser] = useState("");

  // Store token in local storage and update the state
  const storeTokenInLS = (serverToken) => {
    setToken(serverToken); // Update token in state
    localStorage.setItem("token", serverToken); // Store token in local storage
  };

  // Logout function to clear token from local storage and state
  const LogoutUser = () => {
    setToken(null); // Clear token from state
    localStorage.removeItem("token"); // Remove token from local storage
  };

  // Authentication - Currently logged in user
  const userAuthentication = async () => {
    try {
      const response = await fetch("https://mern2024-ten.vercel.app/auth/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.userData);

        setUser(data.userData);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider value={{ token, storeTokenInLS, LogoutUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook to use Auth Context
export const useAuth = () => {
  return useContext(AuthContext);
};
