// Layout.js
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {/* You can include header, footer, or other common elements here */}
      <body class="flex flex-col bg-berkeleyBlue text-yellow-500 min-h-screen">
        <div className="flex-grow">
          {" "}
          {/* Change "bg-blue-500" to your desired color class */}
          {children}
        </div>
      </body>
      <Footer />
      {/* You can include footer or other common elements here */}
    </div>
  );
};

export default Layout;
