import React from "react";
import styled from "styled-components";
import placeholder from "../images/sunset.png";

export default function Item() {
  return (
    <Section>
      <h3>Title</h3>
      <p>Price</p>
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
  margin: 1vw;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 15vw;
  height: 10vw;
  align-self: center;
`;

const Wishlist = styled.button`
  margin-top: 1vw;
  width: fit-content;
  align-self: center;
  justify-self: flex-end;
`;
