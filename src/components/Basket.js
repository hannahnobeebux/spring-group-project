import { useEffect, useState } from "react";
import styled from "styled-components";
import fetchGetOneUserBasket from "../utils/Users/fetchGetOneUserBasket";
import fetchResetUserBasket from "../utils/Users/fetchResetUserBasket";
import fetchGetOneItem from "../utils/Items/fetchGetOneItem";
import WishlistItem from "./WishlistItem";

export default function Basket() {
  const [userShopping, setUserShopping] = useState();
  const [isLoading, setIsLoading] = useState(true);
  //const [userShoppingId, setUserShoppingId] = useState();
  let userIdTest = localStorage.getItem("user_id")
  userIdTest = parseInt(userIdTest);

  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const userId = localStorage.getItem('user_id')
      //await setUserShoppingId(userId);
      const data = await fetchGetOneUserBasket(userId);
      console.log(data)
      await setUserShopping(data);

      const calculateTotalCost = async () => {
        if (userShopping) {
          let total = 0;
          for (const itemId of userShopping) {
            const item = await fetchGetOneItem(itemId);
            total += Number(item.price);
          }
          setTotalCost(total);
        }
      };

      calculateTotalCost();
      setIsLoading(false);
    }
    fetchData();
  }, []);

const userBasketreset = async () =>
{
    await fetchResetUserBasket(userIdTest)
    window.location.reload(false)
}
  if (!isLoading) {
    return (
      <Container>
        <h1>My Basket</h1>
        <Section>
          {userShopping?.map((item) => (
            <WishlistItem Item={item} />
          ))}
        </Section>
        <h2>Total: £{totalCost}</h2>
        <Submit onClick={async () => {
          userBasketreset()
        }}>One Click Buy!</Submit>
      </Container>
    );
  }
}

// Styling

const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Section = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
const Submit = styled.button`
font-family: "Montserrat";
padding: 10px 20px;
width: 8vw;
background-color: #ffa372;
margin: 1vw;
border-radius: 10px;
border: 1px solid #FF7800;
color: white;
font-weight: bold;
font-size: 20px;
position: relative;
overflow: hidden;
transition: all 0.3s ease;
align-self: center;
&:hover {
  /* background: #ccc; */
  background-color: #FF7956;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.3);
  transform: translateY(-5px);
}
`;