import { useEffect, useState } from "react";
import styled from "styled-components";
import fetchGetAllItemsByUser from "../utils/Items/fetchGetAllItemsByUser";
import WishlistItem from "./WishlistItem";

export default function UserItems() {
  const [userItems, setUserItems] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const userId = localStorage.getItem('user_id')
      const data = await fetchGetAllItemsByUser(userId);
      console.log(data);
      await setUserItems(data);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  if (!isLoading) {
    return (
      <Container>
        <h1>My Items</h1>
        <Section>
          {userItems?.map((item) => (
            <WishlistItem Item={item.id} />
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
