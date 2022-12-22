import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import fetchGetOneItem from "../utils/Items/fetchGetOneItem";

export default function WishlistItem({ Item }) {
  const [wishlistItem, setWishlistItem] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const data = await fetchGetOneItem(Item);
      setWishlistItem(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (!isLoading) {
    return (
      <Section key={wishlistItem.id}>
        <Link to={`/itemInfo/${wishlistItem.id}`}>
          <SubHeading id={"item-title"}>
            {wishlistItem.name.charAt(0).toUpperCase() +
              wishlistItem.name.slice(1)}
          </SubHeading>

          <Image src={wishlistItem.image} />
        </Link>
        <PTag>£{wishlistItem.price.toFixed(2)}</PTag>
        <Wishlist id="wishlist">{/* <WishlistIcon item={item} /> */}</Wishlist>
      </Section>
    );
  }
}


// Styling
const Section = styled.section`
  background-color: white;
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
  font-size: 28px;
  height: 5vw;
  margin-top: 30px;
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
  height: 10vw;
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

const Bottom = styled.div`
  justify-self: baseline;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
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

