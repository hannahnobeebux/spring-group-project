import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import checkIfUserIsAuthenticated from "../utils/Users/checkIfUserIsAuthenticated";
export default function LoginForm() {
  // Create form
  // Make post request to auth server with email and password
  // Get token from server
  // Save token in local storage
  //
  const navigate = useNavigate();
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  async function onFormSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          emailAddress: `${usernameInput}`,
          password: `${passwordInput}`,
        }),
      });
      if (response.status === 200) {
        const { accessToken, tokenType } = await response.json();
        console.log(accessToken);
        console.log(tokenType);
        localStorage.setItem("access_token", accessToken);
        localStorage.setItem("token_type", tokenType);
        navigate("/loggedIn");
        return;
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  }
  return (
    <div>
      <h1>Login Form!</h1>
      <form onSubmit={onFormSubmit}>
        <p>Username</p>
        <input
          value={usernameInput}
          onChange={(e) => setUsernameInput(e.target.value)}
        ></input>
        <p>Password</p>
        <input
          type="password"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
        ></input>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
