import React from "react";
import styled from "styled-components";
import "../App.css";

export default function NavBar() {
  return (
    <Nav>
      <nav>
        <ATag href="https://www.google.com/">One</ATag>
        <ATag href="https://www.google.com/">Two</ATag>
        <ATag href="https://www.google.com/">Three</ATag>
        <ATag href="https://www.google.com/">Four</ATag>
        <ATag href="https://www.google.com/">Five</ATag>
      </nav>
    </Nav>
  );
}

// Styling

const Nav = styled.div`
  padding: 1vw;
  margin: 0;
  background-color: #61dafb;
`;

const ATag = styled.a`
  padding: 0.5vw;
`;
