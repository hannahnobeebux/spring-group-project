import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import fetchGetOneItem from "../utils/Items/fetchGetOneItem";
import fetchDeleteOneItem from "../utils/Items/fetchDeleteOneItem";

export default function ItemInfo() {
  const [item, setItem] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    async function fetchOneItem() {
      const data = await fetchGetOneItem(id);
      setItem(data);
      setIsLoading(false);
    }
    fetchOneItem();
  }, [id]);

  async function handleClick() {
    await fetchDeleteOneItem(id);
    navigate("/");
  }

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

          <EditButton onClick={handleClick}>Delete item</EditButton>
        </InfoSection>
      </ItemSection>
    );
  }
}

// Styling

const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #f79071;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  /* grid-row-end: 400; */
  /* margin-left: 2vw; */
  text-align: center;
  align-items: center;
  /* padding-left: 400px; */
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
  font-family: "Roboto Condensed";
  font-style: italic;
  color: #024249;
  font-weight: bold;
  grid-column-start: 2;
  grid-column-end: 3;
  /* margin: 20px; */
  font-size: 40px;
  text-align: center;
`;

const PTag = styled.p`
  /* margin-right: 400px; */
  grid-column-start: 1;
  grid-column-end: 4;
  /* overflow-wrap: break-word; */
  color: white;
  font-family: "Roboto Condensed";
  font-size: 1vw;
`;

const SubTitleTag = styled.p`
  margin-top: 60px;
  font-size: 30px;
  /* margin-right: 400px; */
  margin-bottom: 10px;
  grid-column-start: 2;
  grid-column-end: 4;
  font-weight: bold;
  color: white;
`;

const Image = styled.img`
  grid-row-start: 2;
  grid-row-end: 400;
  grid-column-start: 1;
  grid-column-end: 2;
  width: 25vw;
  /* height: 20vw; */
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
  margin-top: 15px;
  display: flex;

  border-color: green;
  border-width: 40px;
  border-style: solid;
  font-weight: bold;
  font-size: 20px;

  align-content: center;
  justify-content: center;
  border-style: none;
  width: 8vw;
  margin-bottom: 1vw;
  padding: 1vw;

  color: White;
  border-radius: 20px;
  background-color: #ffa372;

  &:hover {
    background-color: #e07426;
  }
`;
