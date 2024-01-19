import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";

function Rating() {
  const navigate = useNavigate();
  const { course_code, departmentCode } = useParams();
  const [formData, setFormData] = useState({
    semester: "",
    title: "",
    rating: "",
    postBody: "",
    anonymous: false,
  });
  const [terms, setTerms] = useState([]);
  const [charCount, setCharCount] = useState(0);
  const maxCharLimit = 500;

  useEffect(() => {
    axios
      .get(`http://localhost:3001/departments/${departmentCode}/${course_code}`)
      .then((response) => {
        const course_desc = response.data.course.course_desc;

        const termRegex = /(Spring|Summer|Fall)\s(\d{4})/g;
        let matches;
        const extractedTerms = [];

        while ((matches = termRegex.exec(course_desc)) !== null) {
          const termObject = {
            term: matches[0],
            date: new Date(
              matches[2],
              matches[1] === "Spring" ? 2 : matches[1] === "Summer" ? 5 : 8,
              1
            ),
          };
          extractedTerms.push(termObject);
        }

        // Sort terms array by date in descending order
        const sortedTerms = extractedTerms.sort((a, b) => b.date - a.date);

        // Remove duplicates and set the unique terms to state
        setTerms(sortedTerms);
      })
      .catch((error) => {
        console.error("Error fetching course description:", error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "rating") {
      // Validate that the rating is an integer between 0 and 10
      const intValue = parseInt(value, 10);
      if (isNaN(intValue) || intValue < 0 || intValue > 10) {
        // Display an error or handle invalid input (you can customize this part)
        alert("Please select a valid rating between 0 and 10.");
        return;
      }
    }

    if (name === "postBody") {
      // Update character count for postBody
      setCharCount(value.length);

      // Check if character limit is reached
      if (value.length > maxCharLimit) {
        // Truncate the input value to the character limit
        setFormData((prevData) => ({
          ...prevData,
          [name]: value.substring(0, maxCharLimit),
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.semester ||
      !formData.title ||
      !formData.rating ||
      !formData.postBody
    ) {
      alert("Please fill out all fields before submitting.");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:3001/ratings",
        {
          user: formData.anonymous ? "Anonymous" : "s_edwards",
          course_code: course_code,
          postTitle: formData.title,
          postBody: formData.postBody,
          rating: formData.rating,
          semester: formData.semester,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Form data submitted:", formData);

      // Redirect to the new URL after successful submission
      navigate(`/departments/${departmentCode}/${course_code}`);
    } catch (error) {
      console.error("Error submitting form data:", error);
      // Handle errors if needed
    }
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
              <option value="" disabled>
                Select Semester
              </option>
              {terms.map((term) => (
                <option key={term.term} value={term.term}>
                  {term.term}
                </option>
              ))}
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
            <select
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full text-black"
            >
              <option value="" disabled>
                Select Rating
              </option>
              {[...Array(11).keys()].map((rating) => (
                <option key={rating} value={rating}>
                  {rating}
                </option>
              ))}
            </select>
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
              maxLength={maxCharLimit}
            />
            <div className="text-sm text-right text-metallicGold">
              {charCount}/{maxCharLimit} characters
            </div>
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
