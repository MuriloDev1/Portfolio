import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../components/layout/PageLayout";
import { Link } from "react-router-dom";

const timelineData = [
  {
    title: "Graduação",
    year: "2025",
    description:
      "Estudando na faculdade Senai em parceria com a Toyota - Análise e Desenvolvimento de Sistemas.",
    details: [
      "Participação direta de um projeto de grande escala para a Instituição Toyota Brasil.",
      "Desenvolvimento de projetos pessoais.",
      "Aprendizado contínuo em tecnologias web e backend.",
    ],
    category: "Educacao",
  },
  {
    title: "Técnico Integrado",
    year: "2023-2024",
    description: "Início dos estudos em programção e desenvolvimento web",
    details: ["Curso Técnico em ADS - Senai"],
    category: "Educacao",
  },
  {
    title: "Ensino Médio",
    year: "2022-2024",
    description: "Ensino Médio - Rede Sesi",
    details: ["Integrante Equipe de Robótica - Sesi"],
    category: "Educacao",
  },
  {
    title: "Estágio - Apoio de Informática",
    year: "2025",
    description:
      "Atendimento a alunos e professores na escola Objetivo Centro Sorocaba.",
    details: [
      "Redefinição de senhas e suporte ao sistema Geekie via Google.",
      "Configuração e manutenção de redes e dispositivos.",
      "Resolução de problemas no Wi-Fi e ajustes no PowerPoint.",
    ],
    category: "Experiencia",
  },
  {
    title: "Monitor de Festas Infantis",
    year: "2023",
    description: "Atuação como Monitor de Festas Infantis",
    details: [
      "Organização e condução de brincadeiras e atividades recreativas, estimulando a interação entre as crianças.",
      "Desenvolvimento de habilidades de comunicação e trabalho em equipe para coordenar eventos de forma eficiente.",
      "Gerenciamento de imprevistos e atendimento aos pais e responsáveis, garantindo um ambiente seguro e agradável.",
      "Aprimoramento da paciência, liderança e capacidade de resolver problemas em situações dinâmicas.",
    ],
    category: "Experiencia",
  },
];

const About = () => {
  const [selectedCategory, setSelectedCategory] = useState("Educacao");
  const [filteredTimeline, setFilteredTimeline] = useState([]);

  // Atualiza o estado sempre que a categoria mudar
  useEffect(() => {
    setFilteredTimeline(
      timelineData.filter((item) => item.category === selectedCategory)
    );
  }, [selectedCategory]);

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
          <li
            onClick={() => setSelectedCategory("Educacao")}
            className={selectedCategory === "Educacao" ? "active" : ""}
          >
            Educação
          </li>
          <li
            onClick={() => setSelectedCategory("Experiencia")}
            className={selectedCategory === "Experiencia" ? "active" : ""}
          >
            Experiência
          </li>
        </ul>

        <Timeline>
          {filteredTimeline.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineContent>
                <h2>{item.title}</h2>
                <h3>{item.year}</h3>
                <p>{item.description}</p>
                {item.details.map((detail, i) => (
                  <p key={i}>{detail}</p>
                ))}
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Journey>
    </Layout>
  );
};

//  Sobre Mim
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
    img {
      width: 80%;
    }
    section {
      width: 100%;
      text-align: center;
    }
    h2 {
      text-align: center;
    }
  }
`;

// Minha Jornada
const Journey = styled.div`
  background-color: var(--primary-background);
  min-height: 100dvh;
  padding: 3rem 6rem;

  @media screen and (max-width: 680px) {
    padding: 3rem 3rem; // <-- Reduz o padding para telas menores
  }

  ul {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }

  li {
    cursor: pointer;
    width: 40%;
    min-width: 350px;
    text-align: center;
    font-size: 1.8rem;
    padding: 1rem 0;
    border: 1px solid #aaaaaa27;
    background-color: var(--secondary-background);
    list-style: none;

  }
  @media screen and (max-width: 768px) {
    ul {
      display: block;
    }

    li {
      min-width: 0;
      width: 100%;
      margin: 1.5rem 0;
    }
  }
`;

const Timeline = styled.div`
  position: relative;
  padding: 2rem 0;
  width: 100%;
  max-width: 800px;
  margin: 3rem auto;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    width: 2px;
    height: 100%;
    background: #aaa;
    transform: translateX(-50%);
  }

  @media screen and (max-width: 740px) {
    &::before {
      display: none; /* Esconde a linha central em telas pequenas */
    }
  }
`;

const TimelineItem = styled.div`
  position: relative;
  cursor: pointer;
  width: 60%;
  padding: 1rem 2rem;
  box-sizing: border-box;

  &:nth-child(odd) {
    left: -10%;
  }

  &:nth-child(even) {
    text-align: left;
    left: 50%;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: -10px;
    width: 20px;
    height: 20px;
    background: var(--highlight-color);
    border-radius: 50%;
    box-shadow: 0 0 12px var(--highlight-color);
  }

  &:nth-child(even)::before {
    left: -10px;
  }

  @media screen and (max-width: 740px) {
    width: 100%;
    left: 0 !important;
    text-align: start;

    &::before {
      display: none; /* Remove os pontos de marcação nas telas pequenas */
    }
  }
`;

const TimelineContent = styled.div`
  background: var(--secondary-background);
  padding: 2rem 2rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: start;

  h3 {
    font-weight: normal;
    font-style: italic;
    margin: 0.5rem 0 1.2rem;
  }

  p {
    color: #aaaaaa;
    line-height: 1.3rem;
    margin-bottom: 1.1rem;
  }

  @media (max-width: 540px) {
    padding: 1rem;
  }
`;

export default About;
