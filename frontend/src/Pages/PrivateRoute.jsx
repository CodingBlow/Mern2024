import { Navigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const PrivateRoute = ({ children }) => {
  const { token } = useAuth(); // Check if the token exists

  // If the token doesn't exist, redirect to login page
  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
