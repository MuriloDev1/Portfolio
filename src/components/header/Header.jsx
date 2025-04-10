import React from "react";
import styled from "styled-components";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo src={logo} alt="Logo do Portfólio" />

      {/* Menu Desktop */}
      <Nav className="desktop-menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/projects">Projetos</Link>
          </li>
          <li>
            <ContactButton as={Link} to="/contact">
              Contato
            </ContactButton>
          </li>
        </ul>
      </Nav>

      {/* Menu Mobile (Hambúrguer) */}
      <MobileMenu className="mobile-menu">
        <Menu right>
          <Link className="menu-item" to="/">
            Home
          </Link>
          <Link className="menu-item" to="/about">
            Sobre
          </Link>
          <Link className="menu-item" to="/projects">
            Projetos
          </Link>
          <Link className="menu-item" to="#Contact">
            Contato
          </Link>
        </Menu>
      </MobileMenu>
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
  box-shadow: rgba(0, 0, 0, 0.35) 0px 3px 8px;
`;

const Logo = styled.img`
  padding: 0 1.5rem;
  height: 90px;
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

  @media screen and (max-width: 900px) {
    display: none;
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

const MobileMenu = styled.div`
  display: none;

  @media screen and (max-width: 900px) {
    display: block;

    .bm-burger-button {
      position: fixed;
      width: 25px;
      height: 20px;
      top: 35px;
    }

    .bm-burger-bars {
      background: var(--highlight-color);
    }

    .bm-menu {
      background: var(--header);
      padding: 4rem;
      font-size: 1.15em;
      text-align: center;
    }

    .bm-item {
      display: inline-block;
      color: white;
      padding: 0.6rem 0;
      text-decoration: none;
      transition: color 0.2s;
    }

    .bm-item:hover {
      color: var(--highlight-color);
    }
  }
`;

export default Header;
