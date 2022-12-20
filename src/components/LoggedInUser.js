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

  async function logout() {
    logOutCurrentUser()
    return navigate('/')

  }
  useEffect(() => {
    fetchAuthenticated()
  }, []);
  return (
    <Section>
      <h2>My account details:</h2>
      <h3>{firstName}</h3>
      <h3>{lastName}</h3>
      <h3>{email}</h3>
      <LogoutBtn>Edit details</LogoutBtn>
      <LogoutBtn onClick={logout}>Log out</LogoutBtn>
    </Section>
  );
}

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
