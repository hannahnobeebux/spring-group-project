import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import checkIfUserIsAuthenticated from "../utils/Users/checkIfUserIsAuthenticated";

export default function LoggedInUser() {
  // Check if user is authenticated
  // If not then redirect to /login
  // If user is logged in then populate data
  useEffect(() => {
    console.log(checkIfUserIsAuthenticated());
  }, []);
  return (
    <Section>
      <h2>My account details:</h2>
      <h3>first name</h3>
      <h3>last name</h3>
      <h3>email</h3>
      <h3>password</h3>
      <LogoutBtn>Edit details</LogoutBtn>
      <LogoutBtn>Log out</LogoutBtn>
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
