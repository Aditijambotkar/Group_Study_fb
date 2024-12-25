import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBarContainer = styled.nav`
  background-color: #4CAF50;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  color: white;
  font-size: 2rem;
  font-family: 'Arial', sans-serif;
`;

const NavLinks = styled.div`
  a {
    color: white;
    margin-left: 1.5rem;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s ease;

    &:hover {
      color: #f2f2f2;
    }
  }
`;

const Navbar = () => {
  return (
    <NavBarContainer>
      <Logo>Study Hub</Logo>
      <NavLinks>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </NavLinks>
    </NavBarContainer>
  );
};

export default Navbar;
