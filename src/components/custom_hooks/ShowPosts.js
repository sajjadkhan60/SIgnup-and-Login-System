import React, { useEffect, useState } from "react";
function ShowPosts({ posts }) {
  const [postsCheck, setPostsCheck] = useState(false);
  useEffect(() => {
    console.log(posts.length);
    if (posts.length === 0) {
      setPostsCheck(false);
    } else {
      setPostsCheck(true);
    }
  }, []);

  return (
    <div className="row">
      {postsCheck ? (
        <div>
          {posts.map((ele) => {
            return ele.post_description;
          })}
        </div>
      ) : (
        <div className="no-posts" style={{ color: "black" }}>
          No Posts Found!
        </div>
      )}
    </div>
  );
}

export default ShowPosts;
