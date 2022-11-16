import React from "react";
import { Link } from "react-router-dom";
import "./dashboard.page.css";

function Dashboard() {
  return (
    <div>
      <div className="container">
        <h1>Welcome back!</h1>
        <p>This is your dashboard</p>
        <div className="signuplink">
          <span>
            <Link to="/" className="link">
              {" "}
              Logout
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
