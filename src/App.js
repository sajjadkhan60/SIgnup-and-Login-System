import "./App.css";
import LoginPage from "./pages/login_page/login.page";
import { Routes, Route } from "react-router-dom";
import SignupPage from "./pages/signup_page/signup.page";
import { useState } from "react";
import Dashboard from "./pages/dashboard_page/dashboard.page";

function App() {
  const [registerd, setRegisterd] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <LoginPage registerd={registerd} setRegisterd={setRegisterd} setUserEmail={setUserEmail} />
          }
        />
        <Route
          path="/signup"
          element={<SignupPage setRegisterd={setRegisterd} />}
        />
        <Route path="/dashboard" element={<Dashboard userEmail={userEmail} />} />
      </Routes>
    </div>
  );
}

export default App;
