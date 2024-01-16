import React from "react";
import Layout from "../components/Layout";
import { Link, useParams } from "react-router-dom";
import UserPost from "../components/UserPost";

function CoursePage() {
  const { course_code, departmentCode } = useParams();
  console.log(departmentCode);

  return (
    <Layout>
      <div className="flex">
        <Link to={`/departments/${departmentCode}`}>
          <p>Back to</p>
          <p>{departmentCode} courses</p>
        </Link>
        <h1 className="mx-2 mb-2 text-3xl">{course_code}</h1>
      </div>
      <div className="p-2 m-4 w-32 flex justify-center text-5xl border rounded-full">
        6/10
      </div>
      <section className="grid grid-cols-2">
        <UserPost
          postTitle="Awesome Course!"
          postBody="This was one of my favorite classes."
          user="Anonymous"
          userRating="9/10"
        />
        <UserPost
          postTitle="Awesome Course!"
          postBody="This was one of my favorite classes.This was one of my favorite classes.This was one of my favorite classes.This was one of my favorite classes."
          user="Anonymous"
          userRating="9/10"
        />
        <UserPost
          postTitle="Awesome Course!"
          postBody="This was one of my favorite classes."
          user="Anonymous"
          userRating="9/10"
        />
        <UserPost
          postTitle="Awesome Course!"
          postBody="This was one of my favorite classes."
          user="Anonymous"
          userRating="9/10"
        />
        <UserPost
          postTitle="Awesome Course!"
          postBody="This was one of my favorite classes."
          user="Anonymous"
          userRating="9/10"
        />
        <UserPost
          postTitle="Awesome Course!"
          postBody="This was one of my favorite classes.This was one of my favorite classes.This was one of my favorite classes.This was one of my favorite classes."
          user="Anonymous"
          userRating="9/10"
        />
        <UserPost
          postTitle="Awesome Course!"
          postBody="This was one of my favorite classes."
          user="Anonymous"
          userRating="9/10"
        />
        <UserPost
          postTitle="Awesome Course!"
          postBody="This was one of my favorite classes."
          user="Anonymous"
          userRating="9/10"
        />
        <UserPost
          postTitle="Awesome Course!"
          postBody="This was one of my favorite classes."
          user="Anonymous"
          userRating="9/10"
        />
        <UserPost
          postTitle="Awesome Course!"
          postBody="This was one of my favorite classes.This was one of my favorite classes.This was one of my favorite classes.This was one of my favorite classes."
          user="Anonymous"
          userRating="9/10"
        />
        <UserPost
          postTitle="Awesome Course!"
          postBody="This was one of my favorite classes."
          user="Anonymous"
          userRating="9/10"
        />
        <UserPost
          postTitle="Awesome Course!"
          postBody="This was one of my favorite classes."
          user="Anonymous"
          userRating="9/10"
        />
      </section>
    </Layout>
  );
}

export default CoursePage;
