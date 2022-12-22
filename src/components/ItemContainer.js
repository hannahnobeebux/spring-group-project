import React from "react";
import styled from "styled-components";
import Item from "./Item";

export default function ItemContainer() {
  return (
    <Section>
      <Item />
    </Section>
  );
}

// Styling

const Section = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  // overflow: hidden;

  @media(max-width:480px) {
    padding: 20px;
    flex-direction: column;
    flex-wrap: none;
    align-items: center;
  }

  @media(min-width: 481px) and (max-width:1024px) {
    padding: 20px;
    /* flex-direction: column;
    flex-wrap: none;
    align-items: center; */
  }
  
`;
