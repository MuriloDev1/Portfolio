import React from "react";
import styled from "styled-components";
import Layout from "../components/layout/PageLayout";
import { Link } from "react-router-dom";
// Imagem Projetos
import CadastroImg from "../assets/cadastro-usuarios.png";
import TechMobImg from "../assets/techmob.png";
import SpotifyImg from "../assets/spotify.webp";
import ProjetoFinancas from "../assets/projeto-gestao-financas.jpg";
import ProjetoTerapia from "../assets/projeto-terapia.png";

const Projects = () => {
  return (
    <Layout
      hero={
        <div>
          <h2>Projetos</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Projetos</li>
          </ul>
        </div>
      }
    >
      <ContainerProjects>
        <ContainerItems>
          {projectsData.map((project, index) => (
            <Items key={index}>
              <img src={project.img} alt={project.title} />
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </Items>
          ))}
        </ContainerItems>
      </ContainerProjects>
    </Layout>
  );
};

const projectsData = [
  {
    title: "Cadastro de Usuários",
    description: "Node.js / Express / React",
    img: CadastroImg,
  },
  {
    title: "Projeto - Spotify",
    description: "Node.js / Express / React ",
    img: SpotifyImg,
  },
  {
    title: "Projeto - Gestão de Finanças",
    description: "Gerenciador de finanças",
    img: ProjetoFinancas,
  },
  {
    title: "Landing Page - Terapia",
    description: "Página de terapia com React",
    img: ProjetoTerapia,
  },
  {
    title: "Projeto - Toyota ",
    description: "Projeto em produção para a toyota em parceria com Senai",
    img: TechMobImg,
  },
];

const ContainerProjects = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 6rem;
`;

const ContainerItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const Items = styled.section`
  background-color: #1b1d2a;
  overflow: hidden;
  width: 350px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-8px);
  }

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  h2 {
    font-size: 1.2rem;
    margin: 1rem 1rem 0.5rem;
  }

  p {
    font-size: 0.95rem;
    color: #ccc;
    margin: 0 1rem 1rem;
  }
`;

export default Projects;
