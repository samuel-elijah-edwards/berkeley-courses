import React from "react";

function UserPost(props) {
  return (
    <div className="flex flex-col m-4 p-2 border-2 rounded-md hover:scale-105 transition-transform">
      <span className="grid grid-cols-2 text-xl">
        <p className="col-start-1">{props.postTitle}</p>
        <p className="col-start-2 text-end">{props.userRating}/10</p>
      </span>
      <span>
        <p>{props.postBody}</p>
      </span>
      <br />
      <span className="grid grid-cols-2 mt-auto text-sm italic">
        <p className="col-start-1">votes</p>
        <p className="flex justify-end col-start-2">{props.user}</p>
      </span>
    </div>
  );
}

export default UserPost;
