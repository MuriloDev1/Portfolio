import React from "react";
import styled from "styled-components";
import { PrimaryContainer } from "./Container";
import { Subtitle, Title } from "./Titles";

const Skills = () => {
  return (
    <PrimaryContainer>
      <Subtitle>|| Skills</Subtitle>
      <Title>Minhas Skills</Title>

      {/* Inicio Skill Progress */}
      <SkillBox>
        <SingleSkillItem>
          <Tag>Comunicação</Tag>
          <SkillPercentage>80%</SkillPercentage>
          <ProgressBar>
            <ProgressValue style={{ width: "90%" }}></ProgressValue>
          </ProgressBar>
        </SingleSkillItem>
      </SkillBox>
    </PrimaryContainer>
  );
};

const SkillBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: start;
  gap: 1.5rem;
`;

const SingleSkillItem = styled.div`
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--secondary-background);
  padding: 4rem;
  gap: 1rem;
`;

const Tag = styled.div`
  font-size: 1rem;
  font-weight: normal;
  color: #aaaaaa;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 0.4rem;
  background-color: #aaaaaa;
  position: relative;
`;

const ProgressValue = styled.div`
  height: 100%;
  background-color: #fff;
`;

const SkillPercentage = styled.div`
  font-size: 1rem;
  font-weight: normal;
  color: #aaaaaa;
`;

export default Skills;
