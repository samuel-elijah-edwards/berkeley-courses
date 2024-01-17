import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-metallicGold flex items-center justify-between p-4">
      <div className="flex items-center">
        {/* Logo */}
        <div className="mr-4">Course Insights</div>
      </div>

      {/* Navbar Menu */}
      <nav className="space-x-4">
        <Link to="/" className="text-gray-600 hover:text-black">
          Home
        </Link>
        <Link to="/departments" className="text-gray-600 hover:text-black">
          Departments
        </Link>
        <Link to="/about" className="text-gray-600 hover:text-black">
          About
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
