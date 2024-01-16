import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";

function Home() {
  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setListOfPosts(response.data);
    });
  }, []);
  return (
    <Layout>
      <h1 className="text-3xl mx-2 mb-2">Home</h1>
      <div className="flex flex-col items-center">
        {listOfPosts.map((value, key) => {
          return (
            <div className="flex flex-col min-w-96 border-4 border-black rounded-md shadow-2xl hover:shadow-lg  hover:scale-105  m-4">
              <div className="py-3 flex justify-center text-xl text-gray-300  bg-blue-800">
                {value.title}
              </div>
              <div className="flex justify-center items-center text-lg min-h-56">
                {value.postText}
              </div>
              <div className="py-2 px-1 bg-yellow-500 italic">
                @{value.username}
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export default Home;
