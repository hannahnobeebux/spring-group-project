import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "../App.css";
import fetchGetAllItems from "../utils/Items/fetchGetAllItems";

export default function NavBar() {
  const [categories, setCategories] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const catArray = [];

  useEffect(() => {
    async function fetchCategories() {
      const data = await fetchGetAllItems();
      await data.map((item) => catArray.push(item.category));
      await setCategories([...new Set(catArray)]);
      setIsLoading(false);
    }

    fetchCategories();
  }, []);

  if (!isLoading) {
    return (
      <Nav>
        <nav>
          {categories.map((category) => {
            return (
              <ATag href={`/${category}`} key={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </ATag>
            );
          })}
        </nav>
      </Nav>
    );
  }
}

// Styling

const Nav = styled.div`
  padding: 1vw;
  margin: 0;
  background-color: #61dafb;
`;

const ATag = styled.a`
  padding: 0.5vw;
`;
