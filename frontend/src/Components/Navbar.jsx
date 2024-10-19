import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { token, LogoutUser } = useAuth();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setIsAuthenticated(!!storedToken);
  }, [token]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    LogoutUser();
    navigate('/login');
  };

  

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <Link to="/">
            <img
              src="/api/placeholder/200/100"
              alt="Company Logo"
              className="h-10 w-auto"
            />
          </Link>
        </div>
        {/* Hamburger Icon for Mobile */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full lg:flex lg:items-center lg:w-auto`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-8 lg:ml-6 space-y-2 lg:space-y-0 lg:items-center">
            <li>
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-600 px-3 py-2"
              >
                About
              </Link>
            </li>
            <li>
              <Link to="/service">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          {/* Register, Login, or Logout Buttons */}
          <div className="flex flex-col lg:flex-row lg:space-x-4 mt-4 lg:mt-0 lg:ml-6 space-y-2 lg:space-y-0">
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition duration-300 w-full lg:w-auto"
              >
                Logout
              </button>
            ) : (
              <>
                <Link to="/register">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 w-full lg:w-auto">
                    Register
                  </button>
                </Link>
                <Link to="/login">
                  <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300 w-full lg:w-auto">
                    Login
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;