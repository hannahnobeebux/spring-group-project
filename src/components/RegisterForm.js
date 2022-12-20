import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
          WishList: []
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
        <input
        type="text"
        required={true}
          value={firstNameInput}
          onChange={(e) => setFirstNameInput(e.target.value)}
        ></input>
        <p>Last Name</p>
        <input
        type="text"
        required={true}
          value={lastNameInput}
          onChange={(e) => setLastNameInput(e.target.value)}
        ></input>
        <p>Email Address</p>
        <input
        type="email"
        required={true}
          value={usernameInput}
          onChange={(e) => setUsernameInput(e.target.value)}
        ></input>
        <p>Password</p>
        <input
          type="password"
        required={true}
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
        ></input>
        
        <button type="submit">Login</button>
      </form>
</div>
)
}
