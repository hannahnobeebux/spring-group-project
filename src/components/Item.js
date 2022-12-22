import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import fetchGetOneUserWishlist from "../utils/Users/fetchGetOneUserWishlist";
import fetchGetAllItems from "../utils/Items/fetchGetAllItems";
import fetchEditOneWishlist from "../utils/Users/fetchEditOneWishlist";

export default function Item() {
  const [items, setItems] = useState();
  const [wishlist, setWishlist] = useState()
  const [isLoading, setIsLoading] = useState(true);
  let checked = false;
  const userId = localStorage.getItem('user_id')

  useEffect(() => {
    async function fetchAllItems() {
      const data = await fetchGetAllItems();
      const wishList = userId ? (await fetchGetOneUserWishlist(userId)) : [] 
      setWishlist(wishList);
      setItems(data);
      setIsLoading(false);
    }

    fetchAllItems();
  }, []);

  const WishlistIcon = ({ item }) => {
    const [lightMode, setLightMode] = useState(wishlist.includes(item.id));
    if(userId === null)
    {
      return;
    }
    else{
    return (
      <img
        onClick={async () => {
          setLightMode((prevMode) => !prevMode);
          await fetchEditOneWishlist(userId, item.id);
        }}
        src={
          lightMode
            ? "https://www.svgrepo.com/show/159717/heart.svg"
            : "https://www.svgrepo.com/show/25921/heart.svg"
        }
        alt="Wishlist button"
      ></img>
    );
      }
  };

  // When the title on the individual item is clicked, will show the information for that item on another route -> http://localhost3000/itemInfo
  if (!isLoading) {
    return items.map((item) => (
      <Section id={"itemSection"} key={item.id}>
        <Link to={`/itemInfo/${item.id}`}>
          <Content>

          <SubHeading id={"item-title"}>
            {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
          </SubHeading>

          <Image src={item.image} />
          </Content>
        </Link>
        <Bottom>
          <PTag>£{item.price.toFixed(2)}</PTag>
          <Wishlist id="wishlist">
            <WishlistIcon item={item} />
          </Wishlist>
        </Bottom>
      </Section>
    ));
  }
}

const Section = styled.section`
  background-color: White;
  border-radius: 20px;
  width: 20vw;
  height: 23vw;
  margin: 2vw 1vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease-in-out;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    transform: scale(1.06);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  @media(max-width:480px) {
    padding: 10px;
    margin-right: 10px;
    flex-direction: row;
    /* flex-wrap: wrap; */
    width: 50vw;
    height: 30vw;
    
  }

  @media (min-width: 481px) and (max-width:1024px){
    padding: 20px;
   width: 40vw;
   height: 30vw;
   
   flex-direction: row;
  }

  @media (min-width: 1025px) and (max-width: 1999px){
    width: 30vw;
  }
`;

const SubHeading = styled.h3`
  font-size: 2vw;
  // height: 5vw;
  margin-top: 1vw;
  margin-bottom: 0px;
  text-align: center;
 

  @media(max-width: 480px){
    font-size: 3.5vw;
    /* display: block; */
    width: 100%:
    height: 50px;
    margin-top: 0;
    margin-bottom: 5px;
  }

  

  @media (min-width: 1025px) and (max-width: 1999) {
  
  }
`;

const Image = styled.img`
  // width: 15vw;
  max-height: 10vw;
  align-self: center;
  border-radius: 10px;

  @media(max-width: 480px){
    height: 10vw;
    // margin-top: 20px;
  }

  @media (min-width: 481px) and (max-width:1024px){
    height: 10vw;
  }
`;

const PTag = styled.p`
  display: inline-block;
  margin-left: 0; 
  margin-bottom: 20px;
  font-size: 25px;
  font-weight: bold;

  @media(max-width: 480px){
    font-size: 3vw;
    margin-top: 0;
    margin-bottom: 5px;
  }

  @media (min-width: 481px) and (max-width:1024px){
    font-size: 3vw;
    margin-top: 0;
    margin-bottom: 5px;
  }
`;

const Content = styled.div`
display: flex;
flex-direction: column;
height: 100%;
widht: 50%;

@media(max-width: 480px){
  flex-direction: column;
  justify-content: space-around;
}

@media (min-width: 481px) and (max-width:1024px){
flex-direction: column;
justify-content: space-around;
}
`;

const Bottom = styled.div`
  justify-self: baseline;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;

  @media(max-width: 480px){
    flex-direction: column;
 justify-content: space-around;
 padding-right: 1vw;: 0;
  }

  @media (min-width: 481px) and (max-width:1024px){
 flex-direction: column;
 justify-content: space-around;
 padding-right: 1vw;: 0;
  }
`;

const Wishlist = styled.button`
  border-style: none;
  background-color: transparent;
  cursor: pointer;
  width: 40px;
  height: 40px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

