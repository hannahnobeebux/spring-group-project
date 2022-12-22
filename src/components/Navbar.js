import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "../App.css";
import fetchGetAllItems from "../utils/Items/fetchGetAllItems";
import checkIfUserIsAuthenticated from "../utils/Users/checkIfUserIsAuthenticated";
import {Dropdown, DropdownButton} from 'react-bootstrap';
import { set } from "react-hook-form";

// FOR MEDIA QUERIES 
import { Device } from './Device';


export default function NavBar() {
  const [wishlist, setWishlist] = useState("")
  const [userItems, setUserItems] = useState("")
  const [addItems, setAddItems] = useState("")
  const [showMenu, setShowMenu] = useState();
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
      setWishlist('/login')
      setUserItems('/login')
      setAddItems('/login')
    } else {
      setWishlist('/wishlist')
      setUserItems('/userItems')
      setAddItems('/addItem')
    }
  }
  useEffect(() => {
    fetchAuthenticated()
    window.addEventListener("storage",(e) => {
      console.log("Storage changed")
      fetchAuthenticated()
   });
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
      <Nav>
        <ATag href={"/"} id={"a-tag-4"}>Home</ATag>
        <ATag href={"/search"} id={"a-tag-5"}>Search</ATag>
        <DropdownButton id="dropdown-basic-button" title="Categories" onClick={() => setShowMenu(!showMenu)} >
        {showMenu && catArray.map((category) => {
          return (
            <Dropdown.Item href={`/${category}`} key={category} id="dropdown-item">
              {category}
            </Dropdown.Item>
          );
        })}
        </DropdownButton>
        </Nav>
      <Nav>
        <ATag href={userItems} id={"a-tag-1"}>Your Items</ATag>
        <ATag href={addItems} id={"a-tag-2"} >Add new item</ATag>
        <ATag href={wishlist} id={"a-tag-3"} >View wishlist</ATag>
      </Nav>
    </Nav>
  );
}
// }

// Styling

const Nav = styled.div`
  margin: 0;
  /* background-color: #61dafb; */
  background-color:#66806A ;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 480px){
    flex-direction: row; 
    flex-wrap: wrap;
    max-width: 100%;
    margin-left:0;
    /* TESTING */
    /* background-color: red; */
    /* margin-top: 30px; */
   justify-content: center;
  }

  @media (min-width: 481px) and (max-width:1024px){
    flex-direction: row; 
    flex-wrap: wrap;
    max-width: 100%;
    margin-left:0;
    /* TESTING */
    /* background-color: red; */

    /* margin-top: 30px; */
    justify-content: center;

  }

  @media (min-width: 0px) and (max-width: 479px){
    flex-direction: row; 
    flex-wrap: wrap;
    max-width: 100%;
    margin-left:0;
    /* TESTING */
    /* background-color: red; */

    /* margin-top: 30px; */
  }
`;

const ATag = styled.a`
  padding: 10px 20px;
  background-color: #ffa372;
  margin: 1vw;
  border-radius: 10px;
  border: 1px solid #FF7800;
  color: white;
  font-weight: bold;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    background: #FF7956;
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.3);
    transform: translateY(-3px);
  }


`;






