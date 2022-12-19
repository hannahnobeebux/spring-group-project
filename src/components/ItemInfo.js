import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
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
        <Image src={item.image} />
        <InfoSection>
          <SubTitleTag>
            Category:{" "}
            {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
          </SubTitleTag>

          <PTag>£{item.price}</PTag>
          <PTag>Quantity: {item.quantity}</PTag>
          <PTag>
            Description: <br></br>
            {item.description}
          </PTag>
          <Link
            id="edit-button"
            to={{
              pathname: `/editItem/${id}`,
              search: `?param1=${item.category}`,
            }}
          >
            <EditButton>Edit item</EditButton>
          </Link>
        </InfoSection>
      </ItemSection>
    );
  }
}

// Styling

const InfoSection = styled.section`
  background-color: #3f8b92;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  /* grid-row-end: 400; */
  margin-left: 2vw;
  text-align: center;
  align-items: center;
  padding-left: 400px;
  width: auto;
  padding-bottom: 1vw;
  padding-top: 0;
`;

const ItemSection = styled.section`
  /* display: flex; */
  display: grid;
  grid-template-rows: 0.5fr 0.1fr 0.1fr 0.1fr 0.1fr;
  grid-template-columns: 1fr 1fr 1fr;
`;

const SubHeading = styled.h3`
  grid-column-start: 0;
  grid-column-end: 1;
  /* margin: 20px; */
  font-size: 40px;
  text-align: center;
`;

const PTag = styled.p`
  margin-top: 60px;
  margin-right: 400px;
  grid-column-start: 1;
  grid-column-end: 4;
  /* overflow-wrap: break-word; */
`;

const SubTitleTag = styled.p`
  margin-top: 60px;
  margin-right: 400px;
  margin-bottom: 10px;
  grid-column-start: 1;
  grid-column-end: 4;
  font-weight: bold;
`;

const Image = styled.img`
  grid-row-start: 2;
  grid-row-end: 400;
  grid-column-start: 0;
  grid-column-end: 1;
  width: 20vw;
  height: 20vw;
  margin-left: 2vw;
  align-self: left;
`;

const EditButton = styled.button`
  /* padding: 10px; */
  /* grid-row-start: 6;
  grid-row-end: 400;
  grid-column-start: 1;
  grid-column-end: 1; */
  /* grid-column: 1;
  grid-row-start: 6;
  grid-row-end: 400; */
  display: flex;
  margin-left: 1vw;
  text-align: center;
  border-color: orange;

  align-content: center;
  border-style: none;
  width: 8vw;
  margin-bottom: 1vw;
  padding: 1vw;

  align-self: center;
  color: White;
  border-radius: 20px;
  background-color: #ffa372;

  &:hover {
    background-color: #e07426;
  }
`;
