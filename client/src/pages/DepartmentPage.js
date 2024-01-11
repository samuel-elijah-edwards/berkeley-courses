import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

function DepartmentPage() {
  const { department } = useParams();

  return (
    <div>
      <Navbar />
      <h2 className="mx-2 mb-4 text-3xl">{department}</h2>
      {/* Add content specific to the department */}
    </div>
  );
}

export default DepartmentPage;
