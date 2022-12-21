import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
export default function RegisterForm() {
  // Create form
  // Make post request to auth server with email and password
  // Get token from server
  // Save token in local storage
  //
  const navigate = useNavigate();
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");

  async function onFormSubmit(e) {
    e.preventDefault();
    // Send data

    try {
      const response = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          emailAddress: `${usernameInput}`,
          password: `${passwordInput}`,
          firstName: `${firstNameInput}`,
          lastName: `${lastNameInput}`,
          wishList: []
        }),
      });
      if (response.status === 200) {
        const { accessToken, tokenType } = await response.json();
        navigate("/login");
        return;
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  }
  return (
    <div>
      <h1>Register Form!</h1>
      <form onSubmit={onFormSubmit}>
        
      <p>First Name</p>
        <Input
        type="text"
        required={true}
          value={firstNameInput}
          onChange={(e) => setFirstNameInput(e.target.value)}
        ></Input>
        <p>Last Name</p>
        <Input
        type="text"
        required={true}
          value={lastNameInput}
          onChange={(e) => setLastNameInput(e.target.value)}
        ></Input>
        <p>Email Address</p>
        <Input
        type="email"
        required={true}
          value={usernameInput}
          onChange={(e) => setUsernameInput(e.target.value)}
        ></Input>
        <p>Password</p>
        <Input
          type="password"
        required={true}
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
        ></Input>
        
        <Submit type="submit">Register</Submit>
      </form>
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