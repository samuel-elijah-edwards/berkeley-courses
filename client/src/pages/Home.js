import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";

function Home() {
  return (
    <Layout>
      <h1 className="flex justify-center text-3xl mx-2 mb-2">
        Get insights on your courses
      </h1>
    </Layout>
  );
}

export default Home;
