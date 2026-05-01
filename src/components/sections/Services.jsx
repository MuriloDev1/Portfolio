import React from "react";
import styled from "styled-components";
// Imports Components
import { Container } from "../layout/Container";
import { Subtitle, Title, Wrapper } from "../sections/SectionTitle";
// Import Images 
import serviceIcon1 from "../../assets/service-icon-1.webp";
import serviceIcon2 from "../../assets/service-icon-2.webp";
import serviceIcon3 from "../../assets/service-icon-3.webp";


const servicesData = [
  {
    imgSrc: serviceIcon1,
    title: "UI/UX Design",
    items: [
      "Prototipação e Wireframing",
      "Fluxo de Usuário",
      "Design Mobile-First",
      "Sistemas de Design",
    ],
  },
  {
    imgSrc: serviceIcon2,  
    title: "FrontEnd",
    items: ["HTML/CSS", "JavaScript", "Animações Web", "React"],
  },
  {
    imgSrc: serviceIcon3,
    title: "BackEnd",
    items: ["Java/SpringBoot", "APIs RESTful", "SQL/NoSQL", "Scrum"],
  },
];

const Services = () => {
  return (
    <Container $secondary={true}>
      <Wrapper>
        <Subtitle>|| Services</Subtitle>
        <Title>Serviços e Conhecimentos</Title>
      </Wrapper>

      <ContainerItems>
        {servicesData.map((service, index) => (
          <SingleItem key={index}>
            <img src={service.imgSrc} alt="Ícone" />
            <h2>{service.title}</h2>
            <ul>
              {service.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </SingleItem>
        ))}
      </ContainerItems>
    </Container >
  );
};

const ContainerItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: right;
  align-items: start;
  gap: 2.5rem;
`;

const SingleItem = styled.div`
  cursor: pointer;
  background-color: var(--primary-background);
  width: 300px;
  min-height: 450px;
  padding: 3rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
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
    width: 400px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default Services;
