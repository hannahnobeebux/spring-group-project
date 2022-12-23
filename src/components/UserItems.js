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
        <SubHeading>My Items</SubHeading>
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

const SubHeading = styled.h1`
  font-family: "Roboto Condensed";
  color: #024249;
  font-weight: bold;
  grid-column-start: 2;
  font-size: 40px;
  text-align: center;
  `;

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
