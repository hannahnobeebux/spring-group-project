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
     return data
  }



export default function Review (props) {
    console.log(props)
    const {reviewData} = props;
    const user = fetchUser(reviewData.id)
    console.log(user)
    return (<div>
            <StyledText>Rating: {reviewData.reviewValue}</StyledText>
            <StyledDescription>{reviewData.reviewText}</StyledDescription>
            <StyledDescription>{user.firstName}</StyledDescription>
            <StyledDescription>{user.lastName}</StyledDescription>
            
        </div>)
}

// Styling 

const StyledText = styled.p`
    font-size: 25px;
    color: white;
    font-style: italic; 
    font-weight: bold;
`

const StyledDescription = styled.p`
    font-size: 20px; 
    color: white; 
`