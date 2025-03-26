import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { Content, Greeting, Title, Subtitle, Description } from "../layout/PageTitle";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease",
      once: true,
    });
  }, []);

  return (
    <HeroContainer>
      <Content>
        <Greeting data-aos="fade-left">Olá! meu nome é</Greeting>
        <Title data-aos="fade-up">Murilo Antunes.</Title>
        <Subtitle data-aos="fade-up" data-aos-delay="200">
          Construindo experiências digitais.
        </Subtitle>
        <Description data-aos="fade-up" data-aos-delay="400">
          Desenvolvedor Full Stack apaixonado por tecnologia e inovação. Estou
          focado em aprender e me desenvolver cada vez mais.
        </Description>
        <Button
          data-aos="fade-up"
          href="/Murilo_Antunes_CV.pdf"
          download="Murilo_Antunes_CV"
        >
          Download CV <i className="fa-solid fa-download"></i>
        </Button>
      </Content>

      <SocialsContainer data-aos="fade-up">
        <SocialLink href="https://github.com/MuriloDev1" target="_blank">
          <i className="fa-brands fa-github"></i>
        </SocialLink>
        <SocialLink
          href="https://www.linkedin.com/in/murilo-carvalho-145085319/"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin"></i>
        </SocialLink>
        <SocialLink href="https://wa.me/5515988235261" target="_blank">
          <i className="fa-brands fa-whatsapp"></i>
        </SocialLink>
      </SocialsContainer>
    </HeroContainer>
  );
};

const HeroContainer = styled.section`
  position: relative;
  text-align: start;
  min-height: 90dvh;
  padding: 0 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 6rem 6rem;
    text-align: start;
  }
`;

const Button = styled.a`
  padding: 15px 50px;
  border: 1px solid var(--highlight-color);
  color: var(--highlight-color);
  font: bold;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  border-radius: 5px;

  &:hover {
    background-color: var(--highlight-color);
    color: white;
  }

  @media (max-width: 768px) {
    padding: 10px 30px;
  }
`;

const SocialsContainer = styled.div`
  position: absolute;
  top: 35%;
  right: 6rem;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 1044px) {
    position: static;
    flex-direction: row;
    justify-content: start;
    gap: 20px;
    padding: 0;
    margin: 2rem 0;
  }
`;

const SocialLink = styled.a`
  font-size: 2rem;
  color: var(--highlight-color);
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: white;
  }
`;

export default Hero;
