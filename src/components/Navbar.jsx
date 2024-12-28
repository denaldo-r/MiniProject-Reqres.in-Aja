import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in based on the presence of a token in localStorage
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.clear(); // Clear all stored data (e.g., token)
    setIsLoggedIn(false); // Update the state
    navigate("/"); // Redirect to the home page
  };

  const handleLogin = () => {
    navigate("/login"); // Redirect to the login page
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-lg">
      <div className="container flex items-center justify-between px-4 py-3 mx-auto">
        <div className="flex items-center space-x-4">
          <h1
            className="text-xl font-bold text-blue-600 cursor-pointer"
            onClick={() => navigate("/")}
          >
            Reqres.in Aja
          </h1>
          <Link
            to="/OurUser"
            className="text-lg font-medium text-gray-700 transition-all duration-300 transform hover:text-blue-600 hover:scale-105"
          >
            Our User
          </Link>
        </div>
        <div className="hidden space-x-6 md:flex">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="px-5 py-2 text-white transition-all duration-300 transform rounded-md shadow-lg bg-gradient-to-r from-red-500 to-pink-500 hover:from-pink-500 hover:to-red-500 hover:scale-105"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={handleLogin}
              className="px-5 py-2 text-white transition-all duration-300 transform rounded-md shadow-lg bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 hover:scale-105"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
