import { useEffect, useState } from "react";
import styled from "styled-components";
import fetchGetOneUserWishlist from "../utils/Users/fetchGetOneUserWishlist";
import WishlistItem from "./WishlistItem";

export default function WishList() {
  const [userWishlist, setUserWishlist] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchGetOneUserWishlist(1);
      await setUserWishlist(data);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  if (!isLoading) {
    console.log(userWishlist);
    return (
      <Container>
        <h1>My Wishlist</h1>
        <Section>
          {userWishlist.map((item) => (
            <WishlistItem item={item} />
          ))}
        </Section>
      </Container>
    );
  }
}

// Styling

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const Section = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
