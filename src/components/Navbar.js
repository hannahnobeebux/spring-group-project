import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "../App.css";
import fetchGetAllItems from "../utils/Items/fetchGetAllItems";

export default function NavBar() {
  // const [categories, setCategories] = useState();
  // const [isLoading, setIsLoading] = useState(true);

  const catArray = [
    "Baby",
    "Books",
    "Entertainment",
    "Fashion",
    "Home",
    "Toys",
    "Technology",
  ];

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
      </nav>
      <nav>
        {catArray.map((category) => {
          return (
            <ATag href={`/${category}`} key={category}>
              {category}
              {/* {category.charAt(0).toUpperCase() + category.slice(1)} */}
            </ATag>
          );
        })}
      </nav>
      <nav>
        <ATag href={"/addItem"}>Add new item</ATag>
        <ATag href={"/wishlist"}>View wishlist</ATag>
      </nav>
    </Nav>
  );
}
// }

// Styling

const Nav = styled.div`
  padding: 1vw;
  margin: 0;
  background-color: #61dafb;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ATag = styled.a`
  padding: 0.5vw;
  background-color: lightgrey;
  margin: 0.5vw;
  /* padding: 1vw; */
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.06);
  }
`;
