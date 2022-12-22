import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

//

// Each item can have a review 
// Only one user can add one review for item
// Reviews are 1 to 5

export default function Review (props) {
    const {reviewData} = props;
    console.log(reviewData.reviewText)
    return (<div>
            <p>{reviewData.reviewValue}</p>
            <p>{reviewData.reviewText}</p>
        </div>)
}