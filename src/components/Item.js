import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import fetchGetOneUserWishlist from "../utils/Users/fetchGetOneUserWishlist";
import fetchGetAllItems from "../utils/Items/fetchGetAllItems";
import fetchEditOneWishlist from "../utils/Users/fetchEditOneWishlist";

export default function Item() {
  const [items, setItems] = useState();
  const [wishlist, setWishlist] = useState()
  const [isLoading, setIsLoading] = useState(true);
  let checked = false;
  const userId = localStorage.getItem('user_id')

  useEffect(() => {
    async function fetchAllItems() {
      const data = await fetchGetAllItems();
      const wishList = userId ? (await fetchGetOneUserWishlist(userId)) : [] 
      setWishlist(wishList);
      setItems(data);
      setIsLoading(false);
    }

    fetchAllItems();
  }, []);

  const WishlistIcon = ({ item }) => {
    const [lightMode, setLightMode] = useState(wishlist.includes(item.id));
    if(userId === null)
    {
      return;
    }
    else{
    return (
      <img
        onClick={async () => {
          setLightMode((prevMode) => !prevMode);
          await fetchEditOneWishlist(userId, item.id);
        }}
        src={
          lightMode
            ? "https://www.svgrepo.com/show/159717/heart.svg"
            : "https://www.svgrepo.com/show/25921/heart.svg"
        }
        alt="Wishlist button"
      ></img>
    );
      }
  };

  // When the title on the individual item is clicked, will show the information for that item on another route -> http://localhost3000/itemInfo
  if (!isLoading) {
    return items.map((item) => (
      <Section key={item.id}>
        <Link to={`/itemInfo/${item.id}`}>
          <SubHeading id={"item-title"}>
            {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
          </SubHeading>

          <Image src={item.image} />
        </Link>
        <Bottom>
          <PTag>£{item.price.toFixed(2)}</PTag>
          <Wishlist id="wishlist">
            <WishlistIcon item={item} />
          </Wishlist>
        </Bottom>
      </Section>
    ));
  }
}

const Section = styled.section`
  background-color: White;
  border-radius: 20px;
  width: 20vw;
  height: 23vw;
  margin: 2vw 1vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease-in-out;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    transform: scale(1.06);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const SubHeading = styled.h3`
  font-size: 28px;
  height: 5vw;
  margin-top: 30px;
  margin-bottom: 0px;
  text-align: center;
`;

const Image = styled.img`
  // width: 15vw;
  height: 10vw;
  align-self: center;
  border-radius: 10px;
`;

const PTag = styled.p`
  display: inline-block;
  margin-left: 0; 
  margin-bottom: 20px;
  font-size: 25px;
  font-weight: bold;
`;

const Bottom = styled.div`
  justify-self: baseline;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;

const Wishlist = styled.button`
  border-style: none;
  background-color: transparent;
  cursor: pointer;
  width: 40px;
  height: 40px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

