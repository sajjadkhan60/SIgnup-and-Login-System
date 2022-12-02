import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ShowPosts from "../../components/custom_hooks/ShowPosts";
import "./dashboard.page.css";

function Dashboard() {
  const [posts, setPosts] = useState([]);
  const [postsLength, setPostsLength] = useState(null);
  const [userName, setUserName] = useState("____");
  let navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("userEmail") === null) {
      navigate(`/`);
    } else {
      const userEmail = window.localStorage.getItem("userEmail");
      // Fetch User details and posts
      fetch(
        "http://localhost/firegram/load-posts.php?email=" + userEmail + "",
        {
          method: "GET",
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setUserName(data.username);
          if (data.posts.length == 0) {
            setPostsLength(true);
          } else {
            setPosts(data.posts);
            setPostsLength(false);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, []);
  function logout() {
    window.localStorage.removeItem("userEmail");
    navigate(`/`);
  }
  return (
    <div>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h1>{userName}!</h1>
        </div>
        <div className="signuplink">
          <span className="link" onClick={logout}>
            Logout
          </span>
        </div>
      </div>
      <div className="container">
        <h3>My Posts</h3>
        {postsLength ? (
          <div className="no-posts" style={{ color: "black" }}>
            No Posts Found!
          </div>
        ) : (
          <div>
            <ShowPosts posts={posts} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
