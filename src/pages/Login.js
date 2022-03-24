import "./Login.css";

import Box from "../components/Box";
import { Link } from "react-router-dom";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Login() {
  const [username, updateUsername] = useState("");
  const [password, updatePassword] = useState("");

  const history = useHistory();

  const dispatch = useDispatch();

  function usernameChanged(event) {
    updateUsername(event.target.value);
  }

  function passwordChanged(event) {
    updatePassword(event.target.value);
  }

  function login() {
    const customer = { username: username, password: password };
    const json = JSON.stringify(customer);
    fetch("https://teamnathanielrevatureproject2.azurewebsites.net/login", {
      method: "post",
      body: json,
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch({ type: "login", user: data });
        history.push("/home");
      });
  }

  return (
    <div className="container vh-100">
      <div className='row d-flex align-items-center'>
        <div className="mt-5">
          <label>Username:</label>
          <input type="text" value={username} onChange={usernameChanged} />
        </div>
        <div className='mt-1'>
          <label>Password:</label>
          <input type="password" value={password} onChange={passwordChanged} />
        </div>
        <div onClick={login} className='mt-5'>
          <Box className='login-button'>Login</Box>
        </div>
        <div className='mt-5'>
          Not a customer <Link to="/register">Click Here</Link>.
        </div>
      </div>
    </div>
  );
}

export default Login;
