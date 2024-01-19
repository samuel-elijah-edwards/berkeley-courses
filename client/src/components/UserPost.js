import React from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa"; // Import the trash can icon

function UserPost(props) {
  const handleDelete = async () => {
    try {
      // Fetch the ID from props
      const ratingId = props.ratingId;

      // Make a delete request using Axios with the ratingId as a parameter
      await axios.delete(`http://localhost:3001/ratings/${ratingId}`);
      console.log("Post deleted successfully");

      // Invoke the onDelete callback provided as a prop
      props.onDelete(ratingId);
    } catch (error) {
      console.error("Error deleting post:", error);
      // Handle errors if needed
    }
  };

  return (
    <div className="flex flex-col m-4 p-2 border-2 rounded-md hover:scale-105 transition-transform">
      <span className="flex justify-between text-xl items-center">
        <p>{props.postTitle}</p>
        <div className="flex items-center">
          <p className="mr-2 text-center">{props.userRating}/10</p>
          <button
            onClick={handleDelete}
            className="text-red-500 hover:underline flex items-center"
          >
            <FaTrash /> {/* Render the trash can icon */}
          </button>
        </div>
      </span>
      <span>
        <p>{props.postBody}</p>
      </span>
      <br />
      <span className="grid grid-cols-2 mt-auto text-sm italic">
        <p className="col-start-1">votes</p>
        <p className="flex justify-end col-start-2">
          {props.user} ({props.semester})
        </p>
      </span>
    </div>
  );
}

export default UserPost;
