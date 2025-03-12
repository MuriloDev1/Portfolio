import React from "react";
import Layout from "../components/PageLayout";
import { Link } from "react-router-dom";
import { Content,  } from "../components/PageTitle";

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
      <Content>
        <img src="/" alt="Foto Pessoal" />
      </Content>
    </Layout>
  );
};


export default About;
