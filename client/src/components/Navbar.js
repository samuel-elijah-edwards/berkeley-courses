import React from "react";

function Navbar() {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center">
        {/* Logo */}
        <div className="mr-4">Logo</div>
      </div>

      {/* Navbar Menu */}
      <nav className="space-x-4">
        <a href="#" className="text-gray-600 hover:text-black">
          Home
        </a>
        <a href="#" className="text-gray-600 hover:text-black">
          Courses
        </a>
        <a href="#" className="text-gray-600 hover:text-black">
          About
        </a>
      </nav>
    </div>
  );
}

export default Navbar;
