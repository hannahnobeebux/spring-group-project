import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import fetchGetAllItemsByUser from "../utils/Items/fetchGetAllItemsByUser";
import fetchgetAllUnknownItems from "../utils/Items/fetchGetAllUnknownItems";
import SingleItem from "./SingleItem";
import WishlistItem from "./WishlistItem";

export default function SellersItems() {
  const [sellersItems, setSellersItems] = useState();
  const [sellerName, setSellersName] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { sellerId } = useParams()
  let data;
  let userName;
  useEffect(() => {
    async function fetchData() {
      const userId = localStorage.getItem('user_id')

      if(sellerId !== "null"){
        data = await fetchGetAllItemsByUser(sellerId);
        userName = await(await fetch(`http://localhost:8080/shop/user/${sellerId}`)).json();
      } else {
        data = await fetchgetAllUnknownItems()
        userName = {firstName:"Simplishop",lastName:""};
        console.log(data,userName);
      }

      setSellersItems(data);
      setSellersName(userName);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  if (!isLoading) {
    return (
      <>
      <Container>
        <SubHeading>{sellerName.firstName} {sellerName.lastName}'s Items</SubHeading>
      </Container>
      <Container>
        {sellersItems.map((item) => {
           return ( <p><SingleItem item={item}/></p>)
        })}
        {/* Display search results here */}
      </Container>
      </>
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
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;


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
