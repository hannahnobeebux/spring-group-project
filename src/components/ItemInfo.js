import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import fetchGetOneItem from "../utils/Items/fetchGetOneItem";

export default function ItemInfo() {
  const [item, setItem] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    async function fetchOneItem() {
      const data = await fetchGetOneItem(id);
      setItem(data);
      setIsLoading(false);
    }
    fetchOneItem();
  }, [id]);

  if (!isLoading) {
    return (
      <ItemSection>
        <SubHeading>
          {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
        </SubHeading>
        <PTag>
          Category:{" "}
          {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
        </PTag>
        <Image src={item.image} />
        <PTag>£{item.price}</PTag>
        <PTag>Quantity: {item.quantity}</PTag>
        <PTag>
          Description: <br></br>
          {item.description}
        </PTag>
      </ItemSection>
    );
  }
}

// Styling

const ItemSection = styled.section`
  display: grid;
  grid-template-rows: 0.5fr 0.1fr 0.1fr 0.1fr 0.1fr;
  grid-template-columns: 1fr 1fr;
`;

const SubHeading = styled.h3`
  grid-column-start: 0;
  grid-column-end: 1;
  margin: 20px;
  font-size: 40px;
`;

const PTag = styled.p`
  margin-top: 60px;
  margin-right: 400px;
  grid-column-start: 3;
  grid-column-end: 4;
`;

const Image = styled.img`
  grid-row-start: 2;
  grid-row-end: 400;
  grid-column-start: 0;
  grid-column-end: 1;
  width: 30vw;
  height: 30vw;
  margin-left: 2vw;
  align-self: left;
`;
