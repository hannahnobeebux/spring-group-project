import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "../App.css";
import fetchGetAllItems from "../utils/Items/fetchGetAllItems";
import checkIfUserIsAuthenticated from "../utils/Users/checkIfUserIsAuthenticated";
import { Dropdown, DropdownButton } from 'react-bootstrap';

export default function NavBar() {
  const [email, setEmail] = useState("")
  // const [categories, setCategories] = useState();
  // const [isLoading, setIsLoading] = useState(true);

  const catArray = [
    "Baby",
    "Books",
    "Fashion",
    "Garden",
    "Home",
    "Toys",
    "Technology",
  ];

  async function fetchAuthenticated() {
    const isAuthenticated = await checkIfUserIsAuthenticated();
    
    if (isAuthenticated == null) {
      setEmail('/login')
    } else {
      setEmail('/wishlist')
    }
  }
  useEffect(() => {
    fetchAuthenticated()
  }, []);

  // useEffect(() => {
  //   async function fetchCategories() {
  //     const data = await fetchGetAllItems();
  //     await data.map((item) => catArray.push(item.category));
  //     await setCategories([...new Set(catArray)]);
  //     setIsLoading(false);
  //   }

  //   fetchCategories();
  // }, []);

  // if (!isLoading) {
  return (
    <Nav>
      <nav>
        <ATag href={"/"}>Home</ATag>
        <ATag href={"/search"}>Search</ATag>
      </nav>
      <DropdownButton id="dropdown-menu" title="Categories">
      {catArray.map((category) => {
          return (

            <Dropdown.Item href={`/${category}`} key={category}>
              {category}
            </Dropdown.Item>
          );
        })}
      </DropdownButton>
       <Categorynav>
         {catArray.map((category) => {
          return (
            <ATag href={`/${category}`} key={category}>
              {category}
              {/* {category.charAt(0).toUpperCase() + category.slice(1)} */}
            </ATag>
          );
        })}
      </Categorynav>
      <nav>
        <ATag href={"/userItems"}>Your Items</ATag>
        <ATag href={"/addItem"}>Add new item</ATag>
        <ATag href={email}>View wishlist</ATag>
      </nav>
    </Nav>
  );
}
// }

// Styling

const Nav = styled.div`
  padding: 1vw;
  margin-: 0;
  background-color: #61dafb;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Categorynav = styled.div`
  margin-left: 10vw;
`;

const ATag = styled.a`
  padding: 10px 20px;
  background: #e6e6e6;
  margin: 1vw;
  border-radius: 10px;
  border: 1px solid #ccc;
  color: black;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    background: #ccc;
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.3);
    transform: translateY(-3px);
  }
`;




