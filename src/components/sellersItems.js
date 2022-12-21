import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import fetchGetAllItemsByUser from "../utils/Items/fetchGetAllItemsByUser";
import WishlistItem from "./WishlistItem";

export default function SellersItems() {
  const [sellersItems, setSellersItems] = useState();
  const [sellerName, setSellersName] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { sellerId } = useParams()

  useEffect(() => {
    async function fetchData() {
      console.log(sellerId);
      const userId = localStorage.getItem('user_id')
      const data = await fetchGetAllItemsByUser(sellerId);
      const userName = await(await fetch(`http://localhost:8080/shop/user/${sellerId}`)).json();
      setSellersItems(data);
      setSellersName(userName);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  if (!isLoading) {
    return (
      <Container>
        <h1>{sellerName.firstName} {sellerName.lastName}'s Items</h1>
        <Section>
          {sellersItems?.map((item) => (
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
