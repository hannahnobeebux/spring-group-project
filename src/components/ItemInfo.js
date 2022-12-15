import React, { useEffect, useState, useParams } from "react";
import styled from "styled-components";
import placeholder from '../images/placeholder-image.png'

export default function ItemInfo() {
    
    useEffect(() => {
        async function getItem() {
            try {
                // getting item with id = 1
                const response = await fetch("http://localhost:8080/shop/item/:id")
                const data = await response.json();

            } catch (error) {
           
            }
        } getItem()
    }, [])
    return (
        <section>
            <SubHeading>Name</SubHeading>
            <PTag>category</PTag>
            <Image src= {placeholder} />
            <PTag>price</PTag>
            <PTag>quantity</PTag>
            <PTag>description</PTag>
        </section>
    )

}

// Styling

const SubHeading = styled.h3`
  margin: 10px;
`;

const PTag = styled.p`
  margin-top: 0;
`;

const Image = styled.img`
  width: 15vw;
  height: 15vw;
  align-self: center;
`;