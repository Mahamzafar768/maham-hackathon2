'use client'
import React, { useState } from "react";
import { 
  FaSearch, 
  FaSlidersH, 
  FaHeart, 
  FaBell, 
  FaCog, 
  FaUserCircle, 
  FaBars, 
  FaTimes 
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white  px-6 py-4 md:px-[90px] md:py-6 flex justify-between items-center relative">
      {/* Logo */}
      <div className="text-blue-600 text-2xl font-bold">MORENT</div>

      {/* Hamburger Icon */}
      <button
        className="text-gray-600 md:hidden"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Desktop Search Bar */}
      <div className="hidden md:flex items-center border rounded-full px-4 py-2 shadow-sm w-1/2">
        <input
          type="text"
          placeholder="Search something here..."
          className="flex-grow outline-none text-gray-600"
        />
        <button className="text-gray-500">
          <FaSearch className="w-5 h-5" />
        </button>
        <button className="text-gray-500 ml-2">
          <FaSlidersH className="w-5 h-5" />
        </button>
      </div>

      {/* Desktop Icons */}
      <div className="hidden md:flex space-x-4 items-center">
        <button className="text-gray-500">
          <FaHeart className="w-5 h-5" />
        </button>
        <button className="text-gray-500 relative">
          <FaBell className="w-5 h-5" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
            1
          </span>
        </button>
        <button className="text-gray-500">
          <FaCog className="w-5 h-5" />
        </button>
        <div>
          <FaUserCircle className="w-8 h-8 text-gray-500" />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md p-4 flex flex-col space-y-4 md:hidden">
          {/* Mobile Search Bar */}
          <div className="flex items-center border rounded-full px-4 py-2 shadow-sm">
            <input
              type="text"
              placeholder="Search something here..."
              className="flex-grow outline-none text-gray-600"
            />
            <button className="text-gray-500">
              <FaSearch className="w-5 h-5" />
            </button>
            <button className="text-gray-500 ml-2">
              <FaSlidersH className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Icons */}
          <div className="flex space-x-4 items-center justify-center">
            <button className="text-gray-500">
              <FaHeart className="w-5 h-5" />
            </button>
            <button className="text-gray-500 relative">
              <FaBell className="w-5 h-5" />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
                1
              </span>
            </button>
            <button className="text-gray-500">
              <FaCog className="w-5 h-5" />
            </button>
            <div>
              <FaUserCircle className="w-8 h-8 text-gray-500" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
