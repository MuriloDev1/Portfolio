import React from "react";
import styled from "styled-components";

const Layout = ({ children, hero }) => {
  return (
    <LayoutWrapper>
      {hero && <HeroContent>{hero}</HeroContent>}
      <MainContent>{children}</MainContent>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const HeroContent = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-background);
  height: 70dvh;

  h2 {
    font-size: 3rem;
    margin-bottom: 2rem;
  }

  ul {
    position: relative;
    display: flex;
    justify-content: space-evenly;
    margin: 0 auto;
    max-width: 200px;
    padding: 1.4rem;
    border-radius: 5rem;
    background-color: var(--secondary-background);
  }

  li {
    list-style: none;
    color: #aaaaaa;
  }

  li a:hover {
    transition: all 0.2s ease-in;
    color: #fff;
  }

  li:last-child {
    color: #fff;
  }

  li:not(:last-child)::after {
    content: "||";
    margin: 0 1rem;
    color: #aaaaaa;
  }
`;

const MainContent = styled.main`
  flex: 1;
  padding: 0px;
  background-color: var(--secondary-background);
`;

export default Layout;
