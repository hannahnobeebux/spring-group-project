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
  justify-content: space-evenly;
`;
