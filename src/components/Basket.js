import { useEffect, useState } from "react";
import styled from "styled-components";
import fetchGetOneUserBasket from "../utils/Users/fetchGetOneUserBasket";
import fetchResetUserBasket from "../utils/Users/fetchResetUserBasket";
import fetchReduceItemQuantity from "../utils/Items/fetchReduceItemQuantity";
import fetchGetOneItem from "../utils/Items/fetchGetOneItem";
import WishlistItem from "./WishlistItem";

export default function Basket() {
  const [userShopping, setUserShopping] = useState();
  const [basketItems, setBasketItems] = useState();
  const [isLoading, setIsLoading] = useState(true);
  let userIdTest = localStorage.getItem("user_id")
  userIdTest = parseInt(userIdTest);

  const [totalCost, setTotalCost] = useState(0.00);


  
  useEffect(() => {
    const calculateTotalCost = async (data) => {
        setUserShopping(data);
        let total = 0.00;
        for (let itemId of data) {
          const item = await fetchGetOneItem(itemId);
          total += item.price;
        }
        setTotalCost(total);
    };


    async function fetchData() {
      const userId = localStorage.getItem('user_id')
      const data = await fetchGetOneUserBasket(userId);
      setBasketItems(data)

      if(data){
        calculateTotalCost(data);
      } 
    }
      setIsLoading(false);
    fetchData();
  }, []);

const userBasketreset = async () =>
{
  if(basketItems.length === 0 || basketItems === null)
  {
    alert('You need to add items before you can buy them')
  }
  else{
    for(let itemId of basketItems)
    {
      
      const item = await fetchGetOneItem(itemId);
      if(item.quantity <= 0){
        alert(item.name + " is out of stock :(")
      }
      else{
        await fetchReduceItemQuantity(itemId)
      }
      
    }
    await fetchResetUserBasket(userIdTest)
    window.location.reload(false)
  }
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
font-size: 1.2vw;
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