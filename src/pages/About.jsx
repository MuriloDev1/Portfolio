import React from "react";
import styled from "styled-components";
import Layout from "../components/PageLayout";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Layout
      hero={
        <div>
          <h2>Sobre Mim</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Sobre</li>
          </ul>
        </div>
      }
    >
      <ContentAbout>
        <img src="/perfil.jpg" alt="Foto Pessoal" />

        <section>
          <h2>Murilo Antunes</h2>
          <h3>
            Desenvolvedor Full Stack | Aprendendo JS, React, Java, Spring e SQL
          </h3>
          <p>
            Sou Murilo Antunes, desenvolvedor Full Stack apaixonado por
            tecnologia e inovação. Atualmente, estou aprimorando minhas
            habilidades em JavaScript, React, Java, Spring e SQL, sempre
            buscando novos desafios e oportunidades para crescer na área de
            desenvolvimento.
          </p>
        </section>
      </ContentAbout>

      <Journey>
        <ul>
          <li>Educação</li>
          <li>Experiência</li>
        </ul>
        <TimeLine>
          <span>2023</span>
        </TimeLine>
      </Journey>
    </Layout>
  );
};

const ContentAbout = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 6rem 6rem;
  gap: 4rem;

  @media screen and (max-width: 1024px) {
    padding: 4rem 3rem;
  }

  section {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    color: #aaaaaa;
    margin: 0.8rem 0;
    font-weight: 600;
  }

  p {
    color: #aaaaaa;
    font-weight: normal;
  }

  img {
    width: 40%;
    min-width: 300px;
    min-height: 300px;
    background-size: cover;
    background-color: var(--primary-background);
  }

  @media screen and (max-width: 1024px) {
    section {
      width: 100%;
      text-align: center;
    }
    h2 {
      text-align: center;
    }
  }
`;

const Journey = styled.div`
  background-color: var(--primary-background);
  min-height: 100dvh;
  padding: 3rem 6rem;

  ul {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }

  li {
    width: 35%;
    text-align: center;
    font-size: 1.8rem;
    padding: 1rem 0;
    border: 1px solid #aaaaaa27;
    background-color: var(--secondary-background);
    list-style: none;
  }
`;

const TimeLine = styled.div`
  position: relative;
  left: 20%;
  margin: 6rem 0;
  float: left;
  min-height: 200px;
  border-right: 1px solid;

  span {
    margin-right: 2rem;
    padding: 2px 15px;
    background-color: var(--secondary-background);
    position: relative;
    clip-path: polygon(0 0, 100% 0, calc(100% - 10px) 50%, 100% 100%, 0 100%);
  }

  &::after {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    background-color: var(--highlight-color);
    box-shadow: 0 0 12px var(--highlight-color),
      0 0 20px rgba(130, 195, 191, 0.7);
    border-radius: 50%;
    right: -8px;
    top: -25px;
  }
`;

export default About;
