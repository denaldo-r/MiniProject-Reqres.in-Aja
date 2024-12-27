import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold text-blue-600">Reqres.in Aja</h1>
          <Link to="/HomeScreen"></Link>
        </div>
        <div className="hidden space-x-6 md:flex">
          {/* Home Button */}
          <div className="flex items-center space-x-4">
            <Link
              to="/HomeScreen"
              className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            ></Link>
          </div>
          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="px-5 py-2 text-white bg-gradient-to-r from-red-500 to-pink-500 rounded-md shadow-lg hover:from-pink-500 hover:to-red-500 transition-all duration-300 transform hover:scale-105"
          >
            Logout
          </button>
        </div>
        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="block md:hidden text-2xl"
        >
          ☰
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          {/* Home Button */}
          <Link
            to="/users"
            className="block px-4 py-2 text-lg font-medium text-gray-700 hover:bg-gray-200 hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            Home
          </Link>
          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="block w-full px-4 py-2 text-lg font-medium text-white bg-gradient-to-r from-red-500 to-pink-500 hover:from-pink-500 hover:to-red-500 transition-all duration-300 transform hover:scale-105"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
