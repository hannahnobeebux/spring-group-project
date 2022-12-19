import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
      <p>Created by Hannah, Vicky, Tyrese, Michael, Omar</p>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background-color: #709fb0;
  color: white;
  text-align: center;
  padding: 10px;
  margin: 0;
  margin-top: 1rem;
  position: sticky;
  display: none;
  bottom: 0;
  left: 0%;
  width: 100vw;
  font-weight: bold;
`;
