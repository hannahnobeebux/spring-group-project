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
      else{
        alert('Email is already taken!')
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
        
      <StyledLabel>First Name: </StyledLabel>
      <br />
        <Input
        type="text"
        required={true}
          value={firstNameInput}
          onChange={(e) => setFirstNameInput(e.target.value)}
        ></Input>
        <br />
        <StyledLabel>Last Name: </StyledLabel>
        <br />
        <Input
        type="text"
        required={true}
          value={lastNameInput}
          onChange={(e) => setLastNameInput(e.target.value)}
        ></Input>
        <br />
        <StyledLabel>Email Address: </StyledLabel>
        <br />
        <Input
        type="email"
        required={true}
          value={usernameInput}
          onChange={(e) => setUsernameInput(e.target.value)}
        ></Input>
        <br />
        <StyledLabel>Password: </StyledLabel>
        <br />
        <Input
          type="password"
        required={true}
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
        ></Input>
        <br />
        <Submit type="submit">Register</Submit>
      </form>
      <RegisterLink href="/login">Have an account? Log in here!</RegisterLink>
</div>
)
}

// styling 

const StyledLabel = styled.label`
  font-weight: bold; 
  margin-right: 5px; 

`

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

  @media(max-width:480px) {
   height: 5vw;
   width: 50vw;
  }

  @media (min-width: 481px) and (max-width:1024px){
 
  }

  @media (min-width: 1025px) and (max-width: 1999px){
   
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
`;const RegisterLink = styled.a`
color: #0000EE; 
font-weight: bold; 
`