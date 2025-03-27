import React from "react";
import Layout from "../components/layout/PageLayout";
import { Link } from "react-router-dom";

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
    ></Layout>
  );
};

export default Projects;
