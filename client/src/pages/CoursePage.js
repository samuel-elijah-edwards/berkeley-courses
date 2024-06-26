import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import { Link, useParams } from "react-router-dom";
import UserPost from "../components/UserPost";

function CoursePage() {
  const { course_code, departmentCode } = useParams();
  const [ratingsData, setRatingsData] = useState([]);
  const [averageRating, setAverageRating] = useState(null);

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

        // Calculate average rating
        const totalRatings = response.data.length;
        const sumRatings = response.data.reduce(
          (sum, rating) => sum + rating.rating,
          0
        );
        const average =
          totalRatings > 0 ? (sumRatings / totalRatings) * 2 : null; // Multiply by 2 to make it out of 10
        setAverageRating(average);
      })
      .catch((error) => {
        console.error("Error fetching ratings data:", error);
      });
  }, [course_code]);

  const handleDelete = (deletedRatingId) => {
    // Update state to remove the deleted rating
    setRatingsData((prevData) =>
      prevData.filter((rating) => rating.id !== deletedRatingId)
    );
  };

  return (
    <Layout>
      <Link
        to="rating"
        className="w-1/4 text-lg flex justify-center border-2 rounded-lg m-2 p-1 hover:scale-105 transition"
      >
        <div>Leave a rating</div>
      </Link>

      <section className="grid grid-cols-2 mx-2">
        {ratingsData.length > 0 ? (
          ratingsData.map((rating) => (
            <UserPost
              key={rating.id}
              ratingId={rating.id}
              postTitle={rating.postTitle}
              postBody={rating.postBody}
              user={rating.user}
              userRating={rating.rating}
              onDelete={handleDelete}
              semester={rating.semester}
            />
          ))
        ) : (
          <div className="flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-metallicGold">
            No posts yet :( Be the first!
          </div>
        )}
      </section>

      {averageRating !== null && (
        <div className="mt-4 text-xl text-metallicGold">
          Average Rating: {(averageRating / 2).toFixed(1)}/10
        </div>
      )}
    </Layout>
  );
}

export default CoursePage;
