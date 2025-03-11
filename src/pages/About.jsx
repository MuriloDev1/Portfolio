import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";

const AboutWrapper = styled.section`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const About = () => {
  return (
    <Layout>
      <AboutWrapper>
        <h1>Sobre Mim</h1>
        <p>Esta é a página Sobre, onde falo mais sobre mim e meu trabalho.</p>
      </AboutWrapper>
    </Layout>
  );
};

export default About;
