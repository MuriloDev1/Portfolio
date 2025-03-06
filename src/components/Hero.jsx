import styled from "styled-components";

const Hero = () => {
  return (
    <HeroContainer>
      <Content>
        <Greeting>Olá, meu nome é</Greeting>
        <Title>Murilo Antunes.</Title>
        <Subtitle>Construindo experiências digitais.</Subtitle>

        <Description>
          Desenvolvedor Full Stack apaixonado por tecnologia e inovação. Estou
          focado em aprender e me desenvolver cada vez mais.
        </Description>
        <Button href="#projects">
          Download CV <i className="fa-solid fa-download"></i>
        </Button>
      </Content>

      <SocialsContainer>
        <SocialLink href="https://github.com/seuusuario" target="_blank">
          <i className="fa-brands fa-github"></i>
        </SocialLink>
        <SocialLink href="https://linkedin.com/in/seuusuario" target="_blank">
          <i className="fa-brands fa-linkedin"></i>
        </SocialLink>
        <SocialLink href="https://twitter.com/seuusuario" target="_blank">
          <i className="fa-brands fa-whatsapp"></i>
        </SocialLink>
      </SocialsContainer>
    </HeroContainer>
  );
};

const HeroContainer = styled.section`
  position: relative;
  text-align: start;
  height: 90dvh;
  padding: 0 6rem;
`;

const Content = styled.div`
  position: absolute;
  top: 25%;
  max-width: 100%;
  padding-bottom: 1rem;
`;

const Greeting = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  color: var(--highlight-color);
`;

const Title = styled.h1`
  margin: 0.8rem 0;
  font-size: 5rem;
`;

const Subtitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #a8a8a8f1;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #aaaaaa;
  max-width: 600px;
  margin-bottom: 3rem;
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
`;

const SocialsContainer = styled.div`
  position: absolute;
  top: 35%;
  padding: 0 6rem;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
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
