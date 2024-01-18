import React, { useState } from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";

function Rating() {
  const { course_code, departmentCode } = useParams();
  const [formData, setFormData] = useState({
    semester: "",
    title: "",
    rating: 0,
    postBody: "",
    anonymous: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to submit the form data
    console.log("Form data submitted:", formData);
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto mt-8 p-4 bg-berkeleyBlue shadow-2xl border-2 border-metallicGold border-opacity-30  rounded-lg">
        <h2 className="text-2xl font-bold mb-4">
          Leave a Rating for {course_code}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="semester"
              className="block text-sm font-medium text-metallicGold"
            >
              Semester:
            </label>
            <select
              id="semester"
              name="semester"
              value={formData.semester}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full text-black"
            >
              <option value="" disabled selected>
                Select Semester
              </option>
              <option value="Spring">Spring</option>
              <option value="Summer">Summer</option>
              <option value="Fall">Fall</option>
              {/* Add more semester options as needed */}
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-metallicGold"
            >
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full text-black"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="rating"
              className="block text-sm font-medium text-metallicGold"
            >
              Rating:
            </label>
            <input
              type="number"
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full text-black"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="postBody"
              className="block text-sm font-medium text-metallicGold"
            >
              Post Body:
            </label>
            <textarea
              id="postBody"
              name="postBody"
              value={formData.postBody}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full text-black"
            />
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                id="anonymous"
                name="anonymous"
                checked={formData.anonymous}
                onChange={handleInputChange}
                className="mr-2"
              />
              <span className="text-sm font-medium text-metallicGold">
                Anonymous
              </span>
            </label>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Post
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default Rating;
