import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderContainer>
      <Img src="https://www.svgrepo.com/show/185961/shopping-basket.svg"></Img>
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
  background-color: white;
  height: 15vh;
`;

const HeaderOne = styled.h1`
  font-size: 5vw;
  margin: 10px;
  color: #ffa372;
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
  left: 75vw;
  z-index: 2;
  height: 6vw;
`;

const LogoutBtn = styled.button`
  align-content: center;
  border-style: none;
  width: 70px;
  height: 30px;
  grid-column: 3;
  grid-row: 2;

  align-self: start;
  justify-self: center;
  color: White;
  border-radius: 20px;
  background-color: #ffa372;

  &:hover {
    background-color: #e07426;
  }
`;

const UserEmail = styled.p`
  align-self: end;
  justify-self: center;
`;

const Img = styled.img`
  z-index: 2;
  align-self: flex-start;
  justify-self: flex-start;
  height: 8vw;
  position: relative;
  left: 2vw;
  top: 0.05vw;
`;
