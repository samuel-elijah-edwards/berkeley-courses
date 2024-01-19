import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";

function Home() {
  return (
    <Layout>
      <h1 className="pb-5  flex justify-center text-3xl mx-2 mb-2">
        Get insights on your courses
      </h1>
      <section className="grid grid-cols-3 pt-12">
        <div className="flex justify-center">
          <div className="col-start-1 border-2 border-white w-80 h-96 flex justify-center rounded-lg animate-customScale shadow-2xl">
            <div className="animate-none text-xl">Look at Course</div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="col-start-1 border-2 border-white w-80 h-96 flex justify-center rounded-lg animate-customScale shadow-2xl">
            <div className="text-xl">Look at Course</div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="col-start-1 border-2 border-white w-80 h-96 flex justify-center rounded-lg animate-customScale shadow-2xl">
            <div className="animate-none text-xl">Look at Course</div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Home;
