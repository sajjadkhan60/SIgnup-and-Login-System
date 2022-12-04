import React from "react";
function SinglePost({ ele }) {
  console.log(ele);
  return (
    <div>
      <div
        className="single-post"
        style={{ backgroundImage: "url(" + ele.post_image + ")" }}
      >
        <div className="post-content">
          <div className="post-description">{ele.post_description}</div>
          <div className="post-date">{ele.date}</div>
          <div className="post-likes">
            <i class="fa-solid fa-heart"></i> 18
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePost;
