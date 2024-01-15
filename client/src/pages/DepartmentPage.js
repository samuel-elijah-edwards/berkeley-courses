import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
    <div>
      {courses.map((course, key) => (
        <div key={key}>
          <p>Course Code: {course.course_code}</p>
          <p>Course Name: {course.course_name}</p>
          <p>Units: {course.course_units}</p>
          <p>Description: {course.course_desc}</p>
          {/* Add other properties as needed */}
        </div>
      ))}
    </div>
  );
};

export default DepartmentPage;
