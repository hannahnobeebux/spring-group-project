import React, { useEffect, useState } from "react";
import styled from "styled-components";
import fetchGetOneUserByReview from "../utils/Users/fetchGetOneUserByReview"
import { useNavigate } from "react-router-dom";

//

// Each item can have a review 
// Only one user can add one review for item
// Reviews are 1 to 5

async function fetchUser(reviewId){
    const data = await fetchGetOneUserByReview(reviewId)
    const response = await fetch(`http://localhost:8080/shop/user/${data}`)
     return response
  }



export default function Review (props) {
    const [userName , setUserName] = useState()
    const {reviewData} = props;

    async function fetchUser(reviewId){  
        const response = await fetchGetOneUserByReview(reviewId)
        let data = await fetch(`http://localhost:8080/shop/user/${response}`)
        data = await data.json();
        return data
    }

    useEffect(() => {
        console.log("hello");
        const user = fetchUser(reviewData.id)
        console.log(user);
        setUserName(user);
      }, []);


    return (<div>
            <StyledText>Rating: {reviewData.reviewValue}</StyledText>
            <StyledDescription>{reviewData.reviewText}</StyledDescription>
            <StyledDescription>{userName.firstName}</StyledDescription>
            <StyledDescription>{userName.lastName}</StyledDescription>
            
        </div>)
}

// Styling 

const StyledText = styled.p`
    font-size: 25px;
    color: white;
    font-style: italic; 
    font-weight: bold;

    @media(max-width:480px) {
        font-size: 5vw;
        }
      
        @media (min-width: 481px) and (max-width:1024px){
       
        }
      
        @media (min-width: 1025px) and (max-width: 1999px){
          
        }
`

const StyledDescription = styled.p`
    font-size: 20px; 
    color: white; 

    @media(max-width:480px) {
        font-size: 4vw;
        }
      
        @media (min-width: 481px) and (max-width:1024px){
       
        }
      
        @media (min-width: 1025px) and (max-width: 1999px){
          
        }
`