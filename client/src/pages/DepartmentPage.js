import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Layout from "../components/Layout";

const DepartmentPage = () => {
  const { departmentCode } = useParams();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/departments/${departmentCode}`)
      .then((response) => {
        setCourses(response.data.courses); // Update this line
      });
  }, []);

  console.log(courses);

  return (
    <Layout>
      <h1 className="text-3xl mx-2 mb-2">{departmentCode}</h1>
      {courses.map((course, key) => (
        <div key={key}>
          <Link to={`${course.course_code}`}>
            <div className="my-4 mx-2 p-2 border rounded-lg border-gray-900 hover:scale-105 transition-transform shadow-lg hover:shadow-md">
              <p>Course Code: {course.course_code}</p>
              <p>Course Name: {course.course_name}</p>
              <p>Units: {course.course_units}</p>
              <p>Description: {course.course_desc}</p>
              {/* Add other properties as needed */}
            </div>
          </Link>
        </div>
      ))}
    </Layout>
  );
};

export default DepartmentPage;
