import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderContainer>
      <Title>
        <HeaderOne>SimpliShop</HeaderOne>
      </Title>
      <Login>
        <LogoutBtn>Log Out</LogoutBtn>
        <UserEmail>example@example.com</UserEmail>
      </Login>
    </HeaderContainer>
  );
}

// Styling

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: aquamarine;
  height: 15vh;
`;

const HeaderOne = styled.h1`
  font-size: 5vw;
  margin: 10px;
  color: red;
`;

const Title = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  z-index: 1;
`;

const Login = styled.div`
  position: relative;
  top: 2vw;
  left: 85vw;
  z-index: 2;
`;

const LogoutBtn = styled.button`
  align-content: center;

  width: 70px;
  height: 30px;
  grid-column: 3;
  grid-row: 2;

  align-self: start;
  justify-self: center;

  background-color: green;
`;

const UserEmail = styled.p`
  grid-area: 1 / 3;

  align-self: end;
  justify-self: center;
`;
