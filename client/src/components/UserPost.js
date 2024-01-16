import React from "react";

function UserPost(props) {
  return (
    <div className="flex flex-col m-4 p-2 border-2 rounded-md hover:scale-105 transition-transform">
      <span className="grid grid-cols-2 text-xl">
        <p className="col-start-1">{props.postTitle}</p>
        <p className="col-start-2 text-end">{props.userRating}</p>
      </span>
      <span>
        <p>{props.postBody}</p>
      </span>
      <span className="flex mt-auto text-sm italic justify-end">
        {props.user}
      </span>
    </div>
  );
}

export default UserPost;
