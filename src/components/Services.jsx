import React from "react";
import styled from "styled-components";
// Imports Components
import { SecondaryContainer } from "./Container";
import { Subtitle, Title } from "./Titles";

const Services = () => {
  return (
    <SecondaryContainer>
      <Subtitle>|| Services</Subtitle>
      <Title>Serviços e Conhecimentos</Title>
      <ContainerItems>
        <SingleItem>
          <img src="./src/assets/service-icon-1.webp" alt="Icone" />
          <h2>UI/UX Design</h2>

          <ul>
            <li>Prototipação e Wireframing</li>
            <li>Fluxo de Usuário</li>
            <li>Design Mobile-First</li>
            <li>Sistemas de Design</li>
          </ul>
        </SingleItem>

        <SingleItem>
          <img src="./src/assets/service-icon-2.webp" alt="Icone" />
          <h2>Desenvolvimento</h2>

          <ul>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>Animações Web</li>
            <li>React</li>
          </ul>
        </SingleItem>

        <SingleItem>
          <img src="./src/assets/service-icon-3.webp" alt="Icone" />
          <h2>Stack</h2>

          <ul>
            <li>Java/SpringBoot</li>
            <li>APIs RESTful</li>
            <li>SQL/NoSQL</li>
            <li>Scrum</li>
          </ul>
        </SingleItem>
      </ContainerItems>
    </SecondaryContainer>
  );
};

const ContainerItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: start;
  gap: 2.5rem;
`;

const SingleItem = styled.div`
  background-color: var(--primary-background);
  width: 300px;
  min-height: 450px;
  padding: 3rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }

  h2 {
    margin: 2rem 0;
    font-size: 1.5rem;
  }

  li {
    color: #aaaaaa;
    list-style: none;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 1024px) {
    width: 250px;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
  }
`;

export default Services;
