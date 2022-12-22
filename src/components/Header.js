import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { ReactSVG } from "react-svg";
import accountIcon from "../images/account.svg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import checkIfUserIsAuthenticated from "../utils/Users/checkIfUserIsAuthenticated";

// FOR MEDIA QUERIES 
import { Device } from './Device';

export default function Header() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [basket, setBasket] = useState("")
  async function fetchAuthenticated() {
  const isAuthenticated = await checkIfUserIsAuthenticated();
  
  if (isAuthenticated == null) {
    setBasket('Login')
    setEmail('Login')
  } else {
    const userData = isAuthenticated;
    setEmail(userData.emailAddress)
    setBasket('/basket')
  }
}
useEffect(() => {
  //location.reload()
  fetchAuthenticated()
    window.addEventListener("storage",(e) => {
      console.log("Storage changed 2")
      fetchAuthenticated()
   });
}, []);
  return (
    <HeaderContainer>
      <a  href="/"><Img src="https://www.svgrepo.com/show/185961/shopping-basket.svg"></Img></a>
      <Title>
        <HeaderOne href={"http://localhost:3000"} id={"simplishop-header"}>SimpliShop</HeaderOne>
      </Title>
      <Container>
        <UserDetails>
        <Link to={"/loggedIn"}>
          <Button>
            <ReactSVG src={accountIcon} className="user-svg"/>
          </Button>
        </Link>
        <Link to={"/loggedIn"}>
        <UserEmail id={"a-tag-email"}> {email}</UserEmail>
        </Link>
        </UserDetails>
        <UserBasket>

        <a href={basket}><Trolley src="https://www.svgrepo.com/show/185956/shopping-cart-cart.svg"></Trolley></a>
        </UserBasket>
      </Container>
    </HeaderContainer>
  );
}

// Styling

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  height: 15vh;

  /* PHONES */
  @media(max-width: 480px){
    background-color: white;
    height: 10vw;
    /* margin-bottom: 10px; */
  }

  /* TABLETS */
  @media (min-width: 481px) and (max-width:1024px){
    background-color: white;
    /* margin-bottom: 10px; */
    height: 7vw;
}

@media (min-width: 1025px) and (max-width: 1999) {
  height: 5vw;
}
`;

const HeaderOne = styled.a`
  /* font-size: 5vw; */
  margin: 10px;
  color: #ffa372;
  font-weight: bold;
  font-size: 50vw;
  &:hover {
    color: #ffa372;
  }


`;

const Title = styled.div`
  top: 0.20vw;
  width: 100%;
  text-align: center;
  position: absolute;
  z-index: 1;
`;

const Container = styled.div`
  position: relative;
  top: 2vw;
  left: 75vw;
  z-index: 2;
  height: 6vw;
  display: flex;
  flex-direction: row;
  width: 12vw;
  justify-content: space-between;
  align-content: center;
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const UserBasket = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
`;

const Button = styled.button`
  background-color: transparent;
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
  top: -0.10vw;
`;

const Trolley = styled.img`
margin-left: 0px;
height: 3vw;
`;

