import React from "react";
import "./post.css";
function Post() {
  var url_string = window.location;
  var url = new URL(url_string);
  var p_id = url.searchParams.get("p_id");
  console.log(p_id);
  return (
    <div>
      <div className="container">
        <h1>This is the post details page</h1>
      </div>
    </div>
  );
}

export default Post;
