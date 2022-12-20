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
  background-color: white;
  border-radius: 20px;
  width: 20vw;
  height: 30vw;
  margin: 2vw 1vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.06);
  }
`;

const SubHeading = styled.h3`
  font-size: 25px;
  height: 5vw;
  /* margin: 30px; */
`;

const Image = styled.img`
  /* width: 15vw; */
  height: 10vw;
  /* align-self: center; */
`;

const PTag = styled.p`
  display: inline-block;
  /* margin-left: 0;
  margin-bottom: 0; */
  font-size: 20px;
  margin-top: 4vw;
`;

const Bottom = styled.div`
  justify-self: baseline;
`;

const Wishlist = styled.button`
  /* margin-top: -1.5vw; */
  /* margin-right: 1.5vw; */
  // width: fit-content;
  /* align-self: flex-end; */
  /* justify-self: flex-end; */
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
