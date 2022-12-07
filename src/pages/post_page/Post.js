import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CustomInput from "../../components/custom_input/custom_input.component";
import profile from "../../pages/dashboard_page/profile123.png";
import "./post.css";
function Post() {
  const [post, setPost] = useState([]);
  const [postsLength, setPostsLength] = useState(null);
  const [userName, setUserName] = useState("____");
  var { p_id } = useParams();
  useEffect(() => {
    // Fetch User details and posts
    fetch(
      "http://localhost/firegram/load-specific-post.php?post_id=" + p_id + "",
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.number == 1) {
          setPost(data.post);
          setUserName(data.username);
        } else {
          setPostsLength(true);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return (
    <div>
      <div className="container">
        {postsLength ? (
          <div className="no-posts" style={{ color: "black" }}>
            This post does not exist!
          </div>
        ) : (
          <div className="main-post-container">
            <div className="post-picture">
              <img src={post.post_image} />
            </div>
            <div className="post-details">
              <div className="user-details">
                <div className="img">
                  <img src={profile} />
                </div>
                <div className="name">
                  <h1>{userName}</h1>
                  <p>{post.date}</p>
                </div>
              </div>
              <div className="post-description">
                <p>{post.post_description}</p>
              </div>
              <div className="comments">
                <h3>Comments</h3>
                <div className="no-comments">No comments yet!</div>
                <div className="comments-area"></div>
              </div>
              <div className="details-bottom">
                <div className="likes-comments-number">
                  <div className="post-likes">
                    <i class="fa-solid fa-heart"></i> 0
                  </div>
                  <div className="post-comments">
                    <i class="fa-solid fa-comment"></i> 0
                  </div>
                </div>
                <div className="add-comment">
                  <div className="input">
                    <form>
                      <CustomInput
                        type={"text"}
                        name={"comment"}
                        placeholder={"Add Comment.."}
                        style={{
                          borderRadius: "3px",
                          fontSize: "12px",
                          marginBottom: "0px",
                        }}
                      />
                    </form>
                  </div>
                  <button className="postcomment">Post</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Post;
