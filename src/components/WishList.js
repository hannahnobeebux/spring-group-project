import { useEffect, useState } from "react";
import styled from "styled-components";
import fetchGetOneUserWishlist from "../utils/Users/fetchGetOneUserWishlist";
import WishlistItem from "./WishlistItem";

export default function WishList() {
  const [userWishlist, setUserWishlist] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const userId = localStorage.getItem('user_id')
      const data = await fetchGetOneUserWishlist(userId);
      await setUserWishlist(data);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  if (!isLoading) {
    return (
      <Container>
        <h1>My Wishlist</h1>
        <Section>
          {userWishlist?.map((item) => (
            <WishlistItem Item={item} />
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
