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
      <section>
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
      </section>
    );
  }
}

// Styling

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
