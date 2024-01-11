import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center">
        {/* Logo */}
        <div className="mr-4">Logo</div>
      </div>

      {/* Navbar Menu */}
      <nav className="space-x-4">
        <Link to="/" className="text-gray-600 hover:text-black">
          Home
        </Link>
        <Link to="/courses" className="text-gray-600 hover:text-black">
          Courses
        </Link>
        <Link to="/about" className="text-gray-600 hover:text-black">
          About
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
