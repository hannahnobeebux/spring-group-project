import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import placeholder from "../images/placeholder-image.png";
// import fetchGetAllItems from "../utils/fetchGetAllItems";

export default function Item() {
  const [items, setItems] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8080/shop/item");
        const data = await response.json();
        if (response.status === 200) {
          setItems(data);
          setIsLoading(false);
        } else {
          if (data.errors !== undefined) {
            alert(data.errors[0].msg);
            return;
          }
          alert(data.message);
        }
      } catch (error) {
        alert(error.message);
      }
    }

    fetchData();
  }, []);

  // When the title on the individual item is clicked, will show the information for that item on another route -> http://localhost3000/itemInfo
  if (!isLoading) {
    return items.map((item) => (
      <Link to = {`/itemInfo/${item.id}`}>
      <Section>
        <SubHeading>{item.name}</SubHeading>
        <PTag>£{item.price.toFixed(2)}</PTag>
        <Image src={item.image} />
        <Wishlist>Add to wishlist</Wishlist>
      </Section>
      </Link>
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
