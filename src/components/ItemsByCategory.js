import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import fetchGetAllItemsByCategory from "../utils/Items/fetchGetAllItemsByCategory";

export default function ItemsByCategory() {
  const [items, setItems] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { category } = useParams();
  console.log(category);

  useEffect(() => {
    async function fetchItemsByCategory() {
      const data = await fetchGetAllItemsByCategory(category);
      console.log(data);
      setItems(data);
      setIsLoading(false);
    }
    fetchItemsByCategory();
  }, [category]);

  if (!isLoading) {
    return (
      <Container>
        {items.map((item) => (
          <Section key={item.id}>
            <Link to={`/itemInfo/${item.id}`}>
              <SubHeading>
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </SubHeading>
              <PTag>£{item.price.toFixed(2)}</PTag>
              <Image src={item.image} />
            </Link>
            <Wishlist>Add to wishlist</Wishlist>
          </Section>
        ))}
      </Container>
    );
  }
}

// Styling

const Container = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Section = styled.section`
  background-color: orange;
  width: 20vw;
  height: 25vw;
  margin: 2vw 1vw;
  display: flex;
  flex-direction: column;
`;

const SubHeading = styled.h3`
  margin: 10px;
`;

const PTag = styled.p`
  margin-top: 0;
`;

const Image = styled.img`
  width: 15vw;
  height: 15vw;
  align-self: center;
`;

const Wishlist = styled.button`
  margin-top: 1vw;
  width: fit-content;
  align-self: center;
  justify-self: flex-end;
`;
