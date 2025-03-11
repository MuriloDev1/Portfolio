import React from "react";
import styled from "styled-components";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo src={logo} alt="Logo do Portfólio" />
      <Nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/">Projetos</Link>
          </li>
          <li>
            <ContactButton as={Link} to="#Contact">
              Contato
            </ContactButton>
          </li>
        </ul>
      </Nav>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 99999;
  background-color: var(--header);
  padding: 0rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  padding: 0 1.5rem;
  height: 120px;
  width: auto;
`;

const Nav = styled.nav`
  ul {
    display: flex;
    list-style: decimal-leading-zero;
    font-weight: 500;
    padding: 0;
  }

  li::marker {
    color: var(--highlight-color);
    font-weight: bold;
  }

  li {
    transition: 0.3s;
    margin-left: 80px;
  }

  li:last-child {
    list-style: none;
    margin-left: 40px;
  }

  li:hover {
    color: #ccccccf3;
  }

  @media screen and (max-width: 728px) {
    display: block;
  }
`;

const ContactButton = styled.a`
  border: 1px solid var(--highlight-color);
  border-radius: 4px;
  padding: 0.8rem;
  color: var(--highlight-color);
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;

  &:hover {
    background-color: var(--highlight-color);
    color: white;
  }
`;

export default Header;
