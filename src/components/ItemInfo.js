import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import fetchGetOneItem from "../utils/Items/fetchGetOneItem";
import Footer from "./Footer";


export default function ItemInfo() {
  const [item, setItem] = useState()
  const [isLoading, setIsLoading] = useState(true);

  const {id} = useParams()

    useEffect(() => {
        async function fetchOneItem() {
            const data = await fetchGetOneItem(id)
            setItem(data)
            setIsLoading(false)
    }
    fetchOneItem()
  }, [id])

  if(!isLoading) {
    return (
      <section>
            <SubHeading>{item.name}</SubHeading>
            <PTag>{item.category}</PTag>
            <Image src= {item.image} />
            <PTag>{item.price}</PTag>
            <PTag>{item.quantity}</PTag>
            <PTag>{item.description}</PTag>
            <Footer />
            
        </section>
    )
  }

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