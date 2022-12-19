import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import fetchGetOneItem from "../utils/Items/fetchGetOneItem";

export default function WishlistItem({ item }) {
  console.log(item);
  const [wishlistItem, setWishlistItem] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchGetOneItem(item);
      console.log(data);
      setWishlistItem(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (!isLoading) {
    return (
      <Section key={wishlistItem.id}>
        <Link to={`/itemInfo/${wishlistItem.id}`}>
          <SubHeading>
            {wishlistItem.name.charAt(0).toUpperCase() +
              wishlistItem.name.slice(1)}
          </SubHeading>

          <Image src={wishlistItem.image} />
        </Link>
        <PTag>£{wishlistItem.price.toFixed(2)}</PTag>
        <Wishlist id="wishlist">{/* <WishlistIcon item={item} /> */}</Wishlist>
      </Section>
    );
  }
}

// Styling

const Section = styled.section`
  background-color: white;
  border-radius: 20px;
  width: 20vw;
  height: 30vw;
  margin: 2vw 1vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between
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
