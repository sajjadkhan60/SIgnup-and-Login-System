import React, { useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import "./dashboard.page.css";

function Dashboard() {
  let navigate = useNavigate();
  useEffect(()=>{
    if (localStorage.getItem("userEmail") === null) {
      navigate(`/`);
    }else{
      const userEmail  = window.localStorage.getItem("userEmail");
      console.log(userEmail);
    }
    
  },[])
  function logout(){
    window.localStorage.removeItem("userEmail");
    navigate(`/`);
  }
  return (
    <div>
      <div className="container">
        <h1>Welcome Back!</h1>
        <p>This is your dashboard</p>
        <div className="signuplink">
          <span className="link" onClick={logout}>
              Logout
          </span>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
