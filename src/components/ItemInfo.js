import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import fetchGetOneUserWishlist from "../utils/Users/fetchGetOneUserWishlist";
import fetchGetOneItem from "../utils/Items/fetchGetOneItem";
import fetchDeleteOneItem from "../utils/Items/fetchDeleteOneItem";
import fetchEditOneWishlist from "../utils/Users/fetchEditOneWishlist";
import fetchGetUseridByItem from "../utils/Items/fetchGetUseridByItem";
import fetchEditOneItemFromBasket from "../utils/Users/fetchEditOneItemFromBasket";
import fetchGetOneUserBasket from "../utils/Users/fetchGetOneUserBasket";
import fetchGetReviews from "../utils/Items/fetchGetReviews";
import ReviewCreate from "../components/ReviewCreate";
import Review from "../components/Review";
import { Alert } from "react-bootstrap";

export default function ItemInfo() {
  const [item, setItem] = useState();
  const [creator, setCreator] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [wishlist, setWishlist] = useState()
  const [basket, setBasket] = useState([])
  const [userItem, setUserItem] = useState()
  const [userItemFetched, setUserItemFetched] = useState(false);
  const [loggedIn, setLoggedIn] = useState()
  const [reviews, setReviews] = useState()

  const navigate = useNavigate();
  const { id } = useParams();
  let userId = localStorage.getItem("user_id")
  userId = parseInt(userId);


  useEffect(() => {
    setLoggedIn(localStorage.getItem("logged_in"))
    async function fetchOneItem() {
      const data = await fetchGetOneItem(id);
      if(userId){
        const wishList = await fetchGetOneUserWishlist(userId);
        const basket = await fetchGetOneUserBasket(userId)
        setBasket(basket)
        setWishlist(wishList);
      }
      setItem(data);
      setIsLoading(false);
  
    }
  
    async function fetchItemUser() {
      const data = await fetchGetUseridByItem(id);
      if (data == null){
        setUserItem(null);
        setCreator({firstName:"Simplishop",lastName:""})
      } else{
        setUserItem(data)
        fetchUser(data)

      }
      setUserItemFetched(true);
    }

    async function fetchUser(user){
      const response = await fetch(`http://localhost:8080/shop/user/${user}`)
      const data = await response.json();
      setCreator(data);
    }

    fetchItemUser();
    fetchOneItem();

    getReviews();
    
  }, [id]);

  async function handleClick() {

    if(wishlist.includes(item.id))
    {
      console.log("hello");
      await fetchEditOneWishlist(userId,id);
    }
    await fetchDeleteOneItem(id);
    navigate("/");
  }

  const ShoppingIcon = ({ item }) => {
    const [lightMode, setLightMode] = useState(basket.includes(item.id));
    if(userId != localStorage.getItem("user_id"))
    {
      //alert("Not Logged in")
      return;
    }
    else if(item.quantity <= 0)
    {
      alert("Sorry this item is out of stock :(")
    }
    else{
    return (
      <Img
        onClick={async () => {
          setLightMode((prevMode) => !prevMode);
          fetchEditOneItemFromBasket(userId, item.id)
          
        }}
        src={
          lightMode
            ? "https://www.svgrepo.com/show/185957/shopping-cart-remove.svg"
            : "https://www.svgrepo.com/show/185955/shopping-cart-add.svg"
        }
        alt="Shopping button"
      ></Img>
    );
      }
  };


  async function getReviews () {
    const reviewData = await fetchGetReviews(id)
    setReviews(reviewData)
  }
  const Reviews = () => {
    if(!reviews){
      return null
    } else{
    return (
      <section id="reviews">
        {reviews.map((review, index) => {
          return (<Review reviewData={review} key={index} />)
        })}
      </section>
    )
      }
    
  }



  if (!isLoading) {
    return (
      <ItemSection>
        <SubHeading>
          {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
        </SubHeading>
        
        <Image src={item.image} />
        
          
        <InfoSection>
          <SubTitleTag>
            Category:{" "}
            {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
          </SubTitleTag>

          <PTag>??{item.price}</PTag>
          <PTag>Stock: {item.quantity}</PTag>
          <PTag>
            Description: <br></br>
            {item.description}
          </PTag>
          {userId !== userItem ? (
            <>
            <ShoppingIcon item={item} />
            <Link
              id="Seller"
              to={{
                pathname: `/profile/${userItem}`,
              }}
            >
              Seller: {creator?.firstName} {creator?.lastName}
            </Link>
            <ReviewCreate  itemId={id} />
            </>
          ) : (
            <Link
              id="Seller"
              to={{
                pathname: `/userItems`,
              }}
            >
              Seller: {creator?.firstName} {creator?.lastName}
            </Link>
            
          )}
          
          {userId === userItem ? (
            <>
           
          <Link
            id="edit-button"
            to={{
              pathname: `/editItem/${id}`,
              search: `?param1=${item.category}`,
            }}
          >
            <EditButton>Edit item</EditButton>
          </Link>
          

          <EditButton onClick={handleClick}>Delete item</EditButton>
          
          </>
          ) : <>          
          
          <SubTitleTag>Current Reviews</SubTitleTag>
          <Reviews /> 
          </>
          }
        </InfoSection>
      </ItemSection>
    );
  } else{

  }
}

//Styling
// const StyledH2 = styled.h2`
//   color: white; 
//   font-famil
// `

const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #f79071;
  grid-column-start: 3;
  grid-row-start: 2;
  align-items: center;
  width: auto;
  padding: 1vw;
  margin-right: 5vw;
  text-align: center;

  @media(max-width:480px) {
   width: 80vw;
   margin-right: 0;
  }

  @media (min-width: 481px) and (max-width:1000px){
    width: 80vw;
  }

  @media (min-width: 1025px) and (max-width: 1999px){
   
  }
`;

const ItemSection = styled.section`
  display: grid;
  grid-template-rows: repeat(5, 0.1fr);
  grid-template-columns: 1fr 1fr 1fr;

  @media(max-width:480px) {
   display: flex;
   flex-direction: column;
   align-items: center;
  }

  @media (min-width: 481px) and (max-width:1000px){
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 1000px) and (max-width: 1999px){
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const SubHeading = styled.h3`
  font-family: "Roboto Condensed";
  font-style: italic;
  color: #024249;
  font-weight: bold;
  grid-column-start: 2;
  font-size: 40px;
  text-align: center;

  @media(max-width:480px) {
    font-size: 8vw;
  }

  @media (min-width: 481px) and (max-width:1000px){
    // font-size: 8vw;
  }

  // @media (min-width: 1025px) and (max-width: 1999px){
   
  // }
`;

const PTag = styled.p`
  grid-column-start: 1;
  grid-column-end: 4;
  color: white;
  font-family: "Roboto Condensed";
  font-size: 1vw;

  @media(max-width:480px) {
  font-size: 4vw;
  }

  @media (min-width: 481px) and (max-width:1024px){
 
  }

  @media (min-width: 1025px) and (max-width: 1999px){
    
  }
`;

const SubTitleTag = styled.p`
  /* margin-top: 60px; */
  font-size: 1.5vw;
  /* margin-bottom: 10px; */
  grid-column-start: 2;
  grid-column-end: 4;
  font-weight: bold;
  color: white;

  @media(max-width:480px) {
  font-size: 6vw;
  }

  @media (min-width: 481px) and (max-width:1024px){
 
  }

  @media (min-width: 1025px) and (max-width: 1999px){
    
  }
`;

const Image = styled.img`
  grid-row-start: 2;
  grid-row-end: 400;
  grid-column-start: 1;
  grid-column-end: 2;
  width: 20vw;
  /* height: 20vw; */
  margin-left: 2vw;
  align-self: left;

  @media(max-width:480px) {
   width: 30vw;
   margin-bottom: 3vw;
  }

  @media (min-width: 481px) and (max-width:1024px){
 
  }

  @media (min-width: 1025px) and (max-width: 1999px){
    
  }
`;

const EditButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0;
  border-radius: 20px;
  border: none;
  font-size: 20px;
  font-weight: bold;
  width: 8vw;
  padding: 1vw;
  color: white;
  background-color: #ffa372;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e07426;
  }
  
`;


const Img = styled.img`
height: 3vw;

@media(max-width:480px) {
  height: 5vw;
}

@media (min-width: 481px) and (max-width:1024px){

}

@media (min-width: 1025px) and (max-width: 1999px){
  
}
`;