import React from "react";
import styled from "styled-components";

// FOR MEDIA QUERIES 
import { Device } from './Device';

export default function Footer() {
  return (
    <StyledFooter>
      <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
  integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
  crossOrigin="anonymous"
/>

      <div className="footer-content">
        <p>Created by Hannah, Vicky, Tyrese, Michael, Omar, ChatGPT.</p>
        <div className="social-links">
          <a href="https://twitter.com/" target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://facebook.com/" target="_blank">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://instagram.com/" target="_blank">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/hannahnobeebux/spring-group-project" target="_blank">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
      <div className="footer-links">
        <a href="mailto:example@example.com">Contact Us</a>
        <a href="#">Track Orders</a>
        <a href="#">Return Item</a>
        <a href="#">About</a>
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  /* background-color: #709fb0; */
  background-color: #66806A;
  color: white;
  text-align: center;
  padding: 10px;
  margin: 0;
  bottom: 0;
  left: 0%;
  width: 100%;
  font-weight: bold;
margin-top: auto;

  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .social-links {
    display: flex;
    align-items: center;

    a {
      margin-left: 10px;
      color: white;
      margin-right: 20px;
      font-size: 1.5rem;
      transition: all 0.3s;

      &:hover {
        color: #FF7956;
      }
    }
  }
  .footer-links {
    margin-top: 10px;
  
    a {
      color: white;
      font-size: 1rem;
      margin-right: 50px; /* increase the value of this property to increase the spacing between the links */
      text-decoration: none;
      transition: all 0.3s;
  
      &:hover {
        color: #FF7956;
      }
    }
  }

  @media ${Device.mobileS}{
    /* background-color:green; */
    width: 100%;
  }
`;
