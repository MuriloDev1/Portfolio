import React from "react";
import styled from "styled-components";

const Services = () => {
  return (
    <ServicesContainer>
      <Title>Serviço prestado aos meus clientes.</Title>
      <ContainerItems>
        <SingleItem>
          <img src="./src/assets/service-icon-1.webp" alt="Icone" />
          <h2>UI/UX Design</h2>

          <ul>
            <li>Prototipação e Wireframing</li>
            <li>Fluxo de Usuário</li>
            <li>Design Mobile-First</li>
            <li>Sistemas de Design</li>
            <li>Design de Interação</li>
          </ul>
        </SingleItem>

        <SingleItem>
          <img src="./src/assets/service-icon-2.webp" alt="Icone" />
          <h2>Desenvolvimento</h2>

          <ul>
            <li>Prototipação e Wireframing</li>
            <li>Fluxo de Usuário</li>
            <li>Design Mobile-First</li>
            <li>Sistemas de Design</li>
            <li>Design de Interação</li>
          </ul>
        </SingleItem>

        <SingleItem>
          <img src="./src/assets/service-icon-3.webp" alt="Icone" />
          <h2>Development</h2>

          <ul>
            <li>Prototipação e Wireframing</li>
            <li>Fluxo de Usuário</li>
            <li>Design Mobile-First</li>
            <li>Sistemas de Design</li>
            <li>Design de Interação</li>
          </ul>
        </SingleItem>
      </ContainerItems>
    </ServicesContainer>
  );
};

const ServicesContainer = styled.section`
  text-align: start;
  height: 100dvh;
  padding: 0 6rem;
  background-color: var(--secondary-background);
`;

const Title = styled.h1`
  text-align: start;
  padding: 10rem 0;
  font-size: 3.5vw;
  font-weight: normal;
`;

const ContainerItems = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: start;
  align-items: start;
  gap: 2.5rem;
`;

const SingleItem = styled.div`
  background-color: var(--primary-background);
  padding: 54px;

  h2 {
    margin: 2rem 0;
  }

  li {
    list-style: none;
    margin-bottom: 1.5rem;
  }
`;

export default Services;
