import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

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
        console.log(data);
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
                <h2>Write a review</h2>
                <Input type="number" min="1" max="5" required="true" {...register("reviewValue")} placeholder="1-5" />
                <p>{errors.reviewValue?.message}</p>
                <Input {...register("reviewText")} placeholder="Write your review" />
                <p>{errors.reviewText?.message}</p>
                <Submit type="submit" />
            </form>
        </div>
    )
}

// Styling
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
`;


const Submit = styled.input`
padding: 10px 20px;
background: #e6e6e6;
margin: 1vw;
border-radius: 10px;
border: 1px solid #ccc;
color: black;
font-size: 20px;
position: relative;
overflow: hidden;
transition: all 0.3s ease;

&:hover {
  background: #ccc;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.3);
  transform: translateY(-5px);
}
`;