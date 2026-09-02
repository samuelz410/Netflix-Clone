import React, { useState } from "react";
import logo from "../assets/images/netflix-image1.svg";
import { FiSearch } from "react-icons/fi";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

function Header({ searchQuery, setSearchQuery }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="header-container fixed top-0 w-full h-16 px-4 py-2 z-50 flex items-center justify-between bg-black/90 text-white">
      
      {/* Left: Hamburger (Mobile) + Logo + Nav Links (Desktop) */}
      <div className="flex items-center space-x-4">
        {/* Mobile Menu Icon (Hidden on Desktop) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>

        <img src={logo} className="w-20 h-auto" alt="Netflix logo" />

        {/* Desktop Navigation Links (Hidden on Mobile) */}
        <ul className="hidden md:flex items-center space-x-4 text-xs md:text-sm text-gray-300">
          <li> <Link to="/" className="hover:text-white">Home</Link></li>
          <li><Link to="/tv-shows"  className="hover:text-white">Tv show</Link></li>
          <li><Link to="/movies"  className="hover:text-white">Movies</Link></li>
          <li><Link to="/latest" className="hover:text-white">Latest</Link></li>
          <li><a href="#" className="hover:text-white">My list</a></li>
          <li><a href="#" className="hover:text-white">Browse by language</a></li>
        </ul>
      </div>

      {/* Right: Working Search Bar & Bell Icon */}
      <div className="flex items-center space-y-3 ">
        <div className="flex items-center bg-black/50 border border-gray-600 rounded px-2 py-1">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent text-white text-xs md:text-sm outline-none w-24 sm:w-40"
          />
          
        
        </div>
      </div>

      {/* Mobile Menu Dropdown (Only shows when menu icon is clicked) */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black/95 border-b border-gray-800 p-4 md:hidden ">
          <ul className="flex flex-col space-y-3 text-sm text-gray-300">
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/tv-shows" onClick={() => setIsMenuOpen(false)}>Tv show</Link></li>
            <li><Link to="/movies" onClick={() => setIsMenuOpen(false)}>Movies</Link></li>
            <li><Link to="/latest" onClick={() => setIsMobileMenuOpen(false)}>Latest</Link></li>
            <li><a href="#" onClick={() => setIsMenuOpen(false)}>My list</a></li>
            <li><a href="#" onClick={() => setIsMenuOpen(false)}>Browse by language</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;