import React from "react";
function SinglePost({ ele }) {
  console.log(ele);
  return (
    <div>
      <div className="single-post">
        <div className="post-img">
          <img src={ele.post_image} />
        </div>
        <div className="post-description">{ele.post_description}</div>
        <div className="post-date">{ele.date}</div>
      </div>
    </div>
  );
}

export default SinglePost;
