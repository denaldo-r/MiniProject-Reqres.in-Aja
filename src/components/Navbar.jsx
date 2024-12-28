import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-lg">
      <div className="container flex items-center justify-between px-4 py-3 mx-auto">
        {/* Logo and Toggle Button */}
        <div className="flex items-center space-x-4">
          <h1
            className="text-xl font-bold text-blue-600 cursor-pointer"
            onClick={() => navigate("/")}
          >
            Reqres.in Aja
          </h1>
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-gray-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="items-center hidden space-x-6 md:flex">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Link
            to="/OurUser"
            className="px-4 py-2 text-gray-700 transition duration-300 transform rounded-md hover:text-blue-600 hover:scale-105"
          >
            Our User
          </Link>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="px-5 py-2 text-white transition duration-300 transform rounded-md shadow-lg bg-gradient-to-r from-red-500 to-pink-500 hover:from-pink-500 hover:to-red-500 hover:scale-105"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={handleLogin}
              className="px-5 py-2 text-white transition duration-300 transform rounded-md shadow-lg bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 hover:scale-105"
            >
              Login
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="bg-white shadow-lg md:hidden">
          <div className="px-4 py-3 space-y-2">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Link
              to="/OurUser"
              className="block px-4 py-2 text-gray-700 transition duration-300 transform rounded-md hover:text-blue-600 hover:scale-105"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our User
            </Link>
            {isLoggedIn ? (
              <button
                onClick={() => {
                  handleLogout();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full px-5 py-2 text-white transition duration-300 transform rounded-md shadow-lg bg-gradient-to-r from-red-500 to-pink-500 hover:from-pink-500 hover:to-red-500 hover:scale-105"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => {
                  handleLogin();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full px-5 py-2 text-white transition duration-300 transform rounded-md shadow-lg bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 hover:scale-105"
              >
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
