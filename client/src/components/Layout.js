// Layout.js
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col bg-berkeleyBlue text-yellow-500 min-h-screen">
      <Navbar />
      {/* You can include header, footer, or other common elements here */}
      <div className="flex-grow m-2">
        {/* Change "bg-blue-500" to your desired color class */}
        {children}
      </div>
      <Footer />
      {/* You can include footer or other common elements here */}
    </div>
  );
};

export default Layout;
