import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import fetchAddReview from "../utils/Items/fetchAddReview";


//

// Each item can have a review 
// Only one user can add one review for item
// Reviews are 1 to 5

export default function ReviewCreate(props) {


    const { itemId } = props;
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
        },
    });

    async function onSubmit(data) {
        const userId = localStorage.getItem('user_id')
        if(userId == null) {
            console.log("You are not logged in")
            alert("You must be logged in to post a review")
            return
        }else{
            console.log("You are logged in")
            console.log(itemId)
            await fetchAddReview(itemId, userId, data)
        }
        window.location.reload()
        console.log(userId)
        // const results = await fetchGetSearchItems(data.query);
        // if(results?.length > 0) {
        //     setSearchResults(results)
        // }
        // console.log(results)
        // navigate(`/loggedIn`);
      }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <SubTitleTag>Write a review</SubTitleTag>
                <Input type="number" min="1" max="5" required="true" {...register("reviewValue")} placeholder="1-5" />
                <p>{errors.reviewValue?.message}</p>
                <Input {...register("reviewText")} placeholder="Write your review" />
                <p>{errors.reviewText?.message}</p>
                {/* <Submit type="submit">Submit</Submit> */}
                <Submit type="submit"/>
                {/* <SubmitBtn>Submit</SubmitBtn> */}
            </form>
        </div>
    )
}

// Styling
const SubTitleTag = styled.p`
  /* margin-top: 60px; */
  font-size: 30px;
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

const Input = styled.input`
  width: 20vw;
  height: 2vw;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 16px;
  padding: 3px;
  transition: all 0.3s ease;

  &:focus {
    border-color: #333;
    outline: none;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  }

  @media(max-width:480px) {
    width: 50vw;
    height: 6vw;
    }
  
    @media (min-width: 481px) and (max-width:1024px){
   
    }
  
    @media (min-width: 1025px) and (max-width: 1999px){
      
    }
`;


const Submit = styled.input`
padding: 10px 20px;
/* background: #e6e6e6; */
margin: 1vw;
border-radius: 10px;
border: 1px solid #ccc;
/* color: black; */
font-size: 20px;
position: relative;
overflow: hidden;
/* transition: all 0.3s ease; */

color: white;
background-color: #ffa372;
transition: background-color 0.2s;

border: none; 
font-weight: bold;



&:hover {
  /* background: #ccc; */
  background-color: #e07426;
  /* box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.3);
  transform: translateY(-5px); */
}
`;

const SubmitBtn = styled.button`
  /* display: flex;
  align-items: center;
  justify-content: center; */

  position: relative;
  overflow: hidden; 
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