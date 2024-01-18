import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import { Link, useParams } from "react-router-dom";
import UserPost from "../components/UserPost";

function CoursePage() {
  const { course_code, departmentCode } = useParams();
  const [ratingsData, setRatingsData] = useState([]);

  useEffect(() => {
    // Fetch data with Axios
    axios
      .get("http://localhost:3001/ratings", {
        params: {
          course_code: course_code, // Pass the course code as a parameter
        },
      })
      .then((response) => {
        // Set the fetched data to state
        setRatingsData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching ratings data:", error);
      });
  }, [course_code]);

  return (
    <Layout>
      <section className="grid grid-cols-2">
        {ratingsData.map((rating, index) => (
          <UserPost
            key={index}
            postTitle={rating.postTitle}
            postBody={rating.postBody}
            user={rating.user}
            userRating={rating.rating}
          />
        ))}
      </section>
    </Layout>
  );
}

export default CoursePage;
