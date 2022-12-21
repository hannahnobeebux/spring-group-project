import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
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
    // Send data

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
        <p>Email Address</p>
        <Input
          value={usernameInput}
          onChange={(e) => setUsernameInput(e.target.value)}
        ></Input>
        <p>Password</p>
        <Input
          type="password"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
        ></Input>
        <Submit type="submit">Login</Submit>
      </form>
      <a href="/register">Don't have an account, register here!</a>

</div>
)
}

const Input = styled.input`
  width: 20vw;
  height: 2vw;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 16px;
  padding: 3px;
  transition: all 0.3s ease;

  &:focus {
    border-color: #333;
    outline: none;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  }
`;

const Submit = styled.button`
padding: 10px 20px;
background: #e6e6e6;
margin: 1vw;
border-radius: 10px;
border: 1px solid #ccc;
color: black;
font-size: 16 px;
position: relative;
overflow: hidden;
transition: all 0.3s ease;

&:hover {
  background: #ccc;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.3);
  transform: translateY(-5px);
}
`;