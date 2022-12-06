import React from "react";
import { Link } from "react-router-dom";
function SinglePost({ ele }) {
  console.log(ele);
  return (
    <div>
      <Link to={"/post/" + ele.post_id}>
        <div
          className="single-post"
          style={{ backgroundImage: "url(" + ele.post_image + ")" }}
        >
          <div className="post-content">
            <div className="post-description">{ele.post_description}</div>
            <div className="post-date">{ele.date}</div>
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <div className="post-likes">
                <i class="fa-solid fa-heart"></i> 0
              </div>
              <div className="post-comments">
                <i class="fa-solid fa-comment"></i> 0
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default SinglePost;
