import React from "react";
import SinglePost from "./SinglePost";
function ShowPosts({ posts }) {
  return (
    <div>
      <div className="all-posts">
        {posts.map((ele) => {
          return <SinglePost ele={ele} />;
        })}
      </div>
    </div>
  );
}

export default ShowPosts;
