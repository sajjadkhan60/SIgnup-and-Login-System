import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddPost from "../../components/custom_hooks/AddPost";
import ShowPosts from "../../components/custom_hooks/ShowPosts";
import profile from "../../pages/dashboard_page/profile123.png";
import "./dashboard.page.css";

function Dashboard() {
  const [posts, setPosts] = useState([]);
  const [menu, showHideMenu] = useState(false);
  const [popup, showHidePopup] = useState(false);
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
          console.log(data);
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
  function menuToggle() {
    if (menu == true) {
      showHideMenu(false);
    } else {
      showHideMenu(true);
    }
  }
  function togglePopup(e) {
    console.log(e.target.className);
    if (popup == true) {
      showHidePopup(false);
    } else {
      showHidePopup(true);
    }
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
          <h1>FireGram!</h1>
        </div>
        <div className="add-post" onClick={togglePopup}>
          <i class="fa-regular fa-square-plus"></i>
        </div>

        <div className="top-menu">
          <div
            className={"user " + (menu && "user-active")}
            onClick={menuToggle}
          >
            <img src={profile} />
            <h1>{userName}</h1>
            {menu && (
              <div className="menu1">
                <div className="menu-item">Profile</div>
                <div className="menu-item" onClick={logout}>
                  Logout
                </div>
              </div>
            )}
          </div>
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
      {popup && <AddPost togglePopup={togglePopup} />}
    </div>
  );
}

export default Dashboard;
