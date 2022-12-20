import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import fetchGetOneUserWishlist from "../utils/Users/fetchGetOneUserWishlist";
import fetchGetOneItem from "../utils/Items/fetchGetOneItem";
import fetchDeleteOneItem from "../utils/Items/fetchDeleteOneItem";
import fetchEditOneWishlist from "../utils/Users/fetchEditOneWishlist";

export default function ItemInfo() {
  const [item, setItem] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [wishlist, setWishlist] = useState()

  const navigate = useNavigate();
  const { id } = useParams();

  const userId = localStorage.getItem("user_id")


  useEffect(() => {
    async function fetchOneItem() {
      const data = await fetchGetOneItem(id);
      const wishList = await fetchGetOneUserWishlist(1)
      setWishlist(wishList);
      setItem(data);
      setIsLoading(false);
    }
    fetchOneItem();
  }, [id]);

  async function handleClick() {
    if(wishlist.includes(item.id))
    {
      await fetchEditOneWishlist(userId,id);
    }
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

//Styling
const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #f79071;
  grid-column-start: 3;
  grid-row-start: 2;
  align-items: center;
  width: auto;
  padding: 1vw;
  margin-right: 5vw;
  text-align: center;
`;

const ItemSection = styled.section`
  display: grid;
  grid-template-rows: repeat(5, 0.1fr);
  grid-template-columns: 1fr 1fr 1fr;
`;

const SubHeading = styled.h3`
  font-family: "Roboto Condensed";
  font-style: italic;
  color: #024249;
  font-weight: bold;
  grid-column-start: 2;
  font-size: 40px;
  text-align: center;
`;

const PTag = styled.p`
  grid-column-start: 1;
  grid-column-end: 4;
  color: white;
  font-family: "Roboto Condensed";
  font-size: 1vw;
`;

const SubTitleTag = styled.p`
  margin-top: 60px;
  font-size: 30px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0;
  border-radius: 20px;
  border: none;
  font-size: 20px;
  font-weight: bold;
  width: 8vw;
  padding: 1vw;
  color: white;
  background-color: #ffa372;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e07426;
  }
`;


