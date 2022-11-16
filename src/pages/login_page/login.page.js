import React, { useState } from "react";
import CustomInput from "../../components/custom_input/custom_input.component";
import "./login.page.css";
import CustomButton from "../../components/custom_button/custom_button.component";
import { Link, useNavigate } from "react-router-dom";
import { auth_User } from "../../assets/database/users";

const initialState = {
  email: "",
  password: "",
};

function LoginPage({ registerd, setRegisterd }) {
  const [state, setState] = useState(initialState);
  const [error, setError] = useState(false);
  const [auth, setAuth] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false);

  const { email, password } = state;
  let navigate = useNavigate();
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const authUser = async () => {
    setRegisterd(false);
    setAuth(true);
    setError(false);
    const check = await auth_User(JSON.stringify(state));
    if (!check) {
      setError(true);
      setAuth(false);
      console.log("User not found!!!");
    } else {
      setLoginStatus(true);
      console.log("User found!!!");
      setAuth(false);
      setTimeout(() => {
        navigate(`/dashboard`);
      }, 3000);
    }
  };
  console.log(registerd);
  return (
    <div>
      <div className="login_page">
        <div className="login_form_container">
          <h3>Login Form</h3>
          {error && (
            <div className="error">
              Email or password is incorrect. <br /> Please try again. Thank
              you!
            </div>
          )}
          {registerd && (
            <div className="registerationsuccess">
              Hello {registerd}, You are successfully registered.
            </div>
          )}
          {loginStatus && (
            <div className="registerationsuccess">
              Login Success <br />
              Redirecting you to dashboard ...
            </div>
          )}
          <CustomInput
            title={"Email"}
            type={"text"}
            name={"email"}
            value={email}
            onChange={handleChange}
          />
          <CustomInput
            title={"Password"}
            type={"password"}
            name={"password"}
            value={password}
            onChange={handleChange}
          />
          {auth ? (
            <CustomButton name={"Please wait ..."} className={"disabled"} />
          ) : (
            <CustomButton
              name={"Login"}
              className={"custom_button"}
              onClick={authUser}
            />
          )}
          <div className="signuplink">
            Not a member?{" "}
            <span>
              <Link to="/signup">Signup now</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
