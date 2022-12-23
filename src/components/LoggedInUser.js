import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logOutCurrentUser from "../utils/Users/logOutCurrentUser";

import checkIfUserIsAuthenticated from "../utils/Users/checkIfUserIsAuthenticated";

export default function LoggedInUser() {
  // Check if user is authenticated
  // If not then redirect to /login
  // If user is logged in then populate data
  const navigate = useNavigate();

  const userId = localStorage.getItem("user_id");

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")

  async function fetchAuthenticated() {
    const isAuthenticated = await checkIfUserIsAuthenticated();
    if(isAuthenticated == null) {
      return navigate('/login')
    }
    const userData = isAuthenticated;
    setFirstName(userData.firstName)
    setLastName(userData.lastName)
    setEmail(userData.emailAddress)
  }

  async function editDetails() {
    navigate(`/editUser`)
  }
  async function editEmail() {
    navigate(`/user/email`)
  }
  async function editPassword() {
    navigate(`/user/password`)
  }

  async function logout() {
    logOutCurrentUser()
    window.location.reload(false)
    return navigate('/')
  }
  useEffect(() => {
    fetchAuthenticated()  
  }, []);

  return (
    <Section>
      <br/>
      <StyledH2>My account details:</StyledH2>
      <StyledH3>Welcome <i><strong>{firstName} {lastName}</strong></i>! </StyledH3>
      {/* <StyledH3>{lastName}</StyledH3> */}
      <StyledH3>Your email: <strong>{email}</strong></StyledH3>
      <div>
      <Submit onClick={editDetails}>Edit details</Submit>
      <Submit onClick={editEmail}>Edit email</Submit>
      <Submit onClick={editPassword}>Edit password</Submit>
      <Submit onClick={logout}>Log out</Submit>
      </div>
    </Section>
  );
}

//Styl
const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

const LogoutBtn = styled.button`
  align-content: center;
  border-style: none;
  width: 8vw;
  margin-bottom: 1vw;
  padding: 1vw;

  align-self: center;
  color: White;
  border-radius: 20px;
  background-color: #ffa372;

  &:hover {
    background-color: #e07426;
  }
`;

const StyledH3 = styled.h3`
  font-family: "Montserrat", sans-serif;
  /* font-style: italic; */
  font-size: 25px;

`

const StyledH2 = styled.h2`
  font-family: "Montserrat";
  color: #17481E;
  font-size: 25px;
`

const Submit = styled.button`
font-family: "Montserrat";
padding: 10px 20px;
width: 8vw;
/* background: #e6e6e6; */
background-color: #ffa372;
margin: 1vw;
border-radius: 10px;
border: 1px solid #FF7800;
color: white;
font-weight: bold;
font-size: 1.2vw;
position: relative;
overflow: hidden;
transition: all 0.3s ease;
align-self: center;
&:hover {
  /* background: #ccc; */
  background-color: #FF7956;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.3);
  transform: translateY(-5px);
}

@media(max-width:480px) {
 font-size: 3vw;
 width: 18vw;
  padding: 2vw;
}

@media (min-width: 481px) and (max-width:1024px){
 
}

@media (min-width: 1025px) and (max-width: 1999px){
  
}
`;