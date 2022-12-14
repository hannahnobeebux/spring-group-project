import React from "react";
import styled from "styled-components";
import placeholder from "../images/placeholder-image.png";

export default function Item() {
  return (
    <Section>
      <SubHeading>Title</SubHeading>
      <PTag>Price</PTag>
      <Image src={placeholder} />
      <Wishlist>Add to wishlist</Wishlist>
    </Section>
  );
}

// Styling

const Section = styled.section`
  background-color: orange;
  width: 20vw;
  height: 25vw;
  margin: 2vw 1vw;
  display: flex;
  flex-direction: column;
`;

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

const Wishlist = styled.button`
  margin-top: 1vw;
  width: fit-content;
  align-self: center;
  justify-self: flex-end;
`;
