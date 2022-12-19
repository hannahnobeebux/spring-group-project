import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import fetchGetAllItems from "../utils/Items/fetchGetAllItems";
import fetchEditOneWishlist from "../utils/Users/fetchEditOneWishlist";
import fetchGetOneUserWishlist from "../utils/Users/fetchGetOneUserWishlist";

async function fetchWishlist(item) {
  return await fetchGetOneUserWishlist(1);
}

async function itemInWishlist(wishlist, item) {
  console.log(wishlist, item.id);
  if (wishlist.includes(item.id)) {
    return true;
  } else {
    return false;
  }
}

export default async function Item() {
  let userWishlist = await fetchWishlist();
  console.log(userWishlist);
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

  const WishlistIcon = async ({ item }) => {
    const [lightMode, setLightMode] = useState(
      itemInWishlist(userWishlist, item)
    );
    return (
      <img
        onClick={async () => {
          setLightMode((prevMode) => !prevMode);
          await fetchEditOneWishlist(1, item.id);
        }}
        src={
          lightMode
            ? "https://www.svgrepo.com/show/159717/heart.svg"
            : "https://www.svgrepo.com/show/25921/heart.svg"
        }
        alt="Wishlist button"
      ></img>
    );
  };

  // When the title on the individual item is clicked, will show the information for that item on another route -> http://localhost3000/itemInfo
  if (!isLoading) {
    return items.map((item) => (
      <Section key={item.id}>
        <Link to={`/itemInfo/${item.id}`}>
          <SubHeading>
            {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
          </SubHeading>

          <Image src={item.image} />
        </Link>
        <PTag>£{item.price.toFixed(2)}</PTag>
        <Wishlist id="wishlist">
          <WishlistIcon item={item} />
        </Wishlist>
      </Section>
    ));
  }
}

const Section = styled.section`
  background-color: white;
  border-radius: 20px;
  width: 20vw;
  height: 30vw;
  margin: 2vw 1vw;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.06);
  }
`;

const SubHeading = styled.h3`
  font-size: 20px;
  margin: 30px;
`;

const PTag = styled.p`
  display: inline-block;
  margin-left: 0;
  margin-bottom: 0;
  font-size: 20px;
  margin-top: 10;
`;

const Image = styled.img`
  width: 12vw;
  height: 12vw;
  align-self: center;
`;

const Wishlist = styled.button`
  margin-top: -1.5vw;
  margin-right: 1.5vw;
  // width: fit-content;
  align-self: flex-end;
  justify-self: flex-end;
  border-style: none;
  // color: White;
  // border-radius: 20px;
  background-color: transparent;
  width: 40px;
  height: 40px;
  // &:hover {
  //   background-color: #e07426;
  // }
`;
