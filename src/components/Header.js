import React from "react";
import styled from "styled-components";
import { ReactSVG } from "react-svg";
import accountIcon from "../images/account.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <HeaderContainer>
      <Img src="https://www.svgrepo.com/show/185961/shopping-basket.svg"></Img>
      <Title>
        <HeaderOne href={"http://localhost:3000"}>SimpliShop</HeaderOne>
      </Title>
      <Login>
        <Link to={"/loggedIn"}>
          <Button>
            <ReactSVG src={accountIcon} />
          </Button>
        </Link>
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

const HeaderOne = styled.a`
  font-size: 5vw;
  margin: 10px;
  color: #ffa372;
  font-weight: bold;
  font-size: 100px
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

const Button = styled.button`
  background-color: white;
  border: none;
  border-radius: 50px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.2);
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
