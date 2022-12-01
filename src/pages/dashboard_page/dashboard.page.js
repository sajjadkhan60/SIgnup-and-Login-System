import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.page.css";

function Dashboard() {
  const [posts, setPosts] = useState("Loading...");
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
          if (data.posts == "none") {
            setPosts(false);
          } else {
            setPosts(data.posts);
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
        {posts ? (
          <showPosts posts={posts} />
        ) : (
          <div className="no-posts">No posts to show!</div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
