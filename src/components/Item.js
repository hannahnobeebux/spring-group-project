import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import fetchGetAllItems from "../utils/Items/fetchGetAllItems";

export default function Item() {
  const [items, setItems] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchAllItems() {
      const data = await fetchGetAllItems();
      setItems(data);
      setIsLoading(false);
    }

    fetchAllItems();
  }, []);

  // When the title on the individual item is clicked, will show the information for that item on another route -> http://localhost3000/itemInfo
  if (!isLoading) {
    return items.map((item) => (
      <Section key={item.id}>
        <Link to={`/itemInfo/${item.id}`}>
          <SubHeading>
            {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
          </SubHeading>
          <PTag>£{item.price.toFixed(2)}</PTag>
          <Image src={item.image} />
        </Link>
        <Wishlist>Add to wishlist</Wishlist>
      </Section>
    ));
  }
}

// Styling

const Section = styled.section`
  background-color: orange;
  width: 20vw;
  height: 25vw;
  margin: 2vw 1vw;
  display: flex;
  flex-direction: column;
`;

const SubHeading = styled.h3`
  margin: 10px;
`;

const PTag = styled.p`
  margin-top: 0;
`;

const Image = styled.img`
  width: 15vw;
  height: 15vw;
  align-self: center;
`;

const Wishlist = styled.button`
  margin-top: 1vw;
  width: fit-content;
  align-self: center;
  justify-self: flex-end;
`;
