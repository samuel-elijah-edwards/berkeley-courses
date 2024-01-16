import React from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";

function CoursePage() {
  const { course_code } = useParams();

  return (
    <Layout>
      <h1 className="mx-2 mb-2 text-3xl">{course_code}</h1>
    </Layout>
  );
}

export default CoursePage;
