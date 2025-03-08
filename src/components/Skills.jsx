import React from "react";
import styled from "styled-components";
import { PrimaryContainer } from "./Container";
import { Subtitle, Title } from "./Titles";

const Skills = () => {
  return (
    <PrimaryContainer>
      <Subtitle>|| Soft Skills</Subtitle>
      <Title>Minhas Skills</Title>

      {/* Inicio Skill Progress */}
      <SkillBox>
        <SingleSkillItem>
          <SkillHeader>
            <Tag>Comunicação</Tag>
            <SkillPercentage>80%</SkillPercentage>
          </SkillHeader>
          <ProgressBar>
            <ProgressValue style={{ width: "90%" }}></ProgressValue>
          </ProgressBar>
        </SingleSkillItem>

        <SingleSkillItem>
          <SkillHeader>
            <Tag>LIderança</Tag>
            <SkillPercentage>70%</SkillPercentage>
          </SkillHeader>
          <ProgressBar>
            <ProgressValue style={{ width: "70%" }}></ProgressValue>
          </ProgressBar>
        </SingleSkillItem>

        <SingleSkillItem>
          <SkillHeader>
            <Tag>Trabalho Em Equipe</Tag>
            <SkillPercentage>90%</SkillPercentage>
          </SkillHeader>
          <ProgressBar>
            <ProgressValue style={{ width: "90%" }}></ProgressValue>
          </ProgressBar>
        </SingleSkillItem>

        <SingleSkillItem>
          <SkillHeader>
            <Tag>Flexível</Tag>
            <SkillPercentage>80%</SkillPercentage>
          </SkillHeader>
          <ProgressBar>
            <ProgressValue style={{ width: "80%" }}></ProgressValue>
          </ProgressBar>
        </SingleSkillItem>
      </SkillBox>
    </PrimaryContainer>
  );
};

const SkillBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: start;
  gap: 1.5rem;
`;

const SingleSkillItem = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--secondary-background);
  padding: 4rem;
  gap: 1rem;
`;

const SkillHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Tag = styled.div`
  font-size: 1rem;
  font-weight: normal;
  color: #aaaaaa;
`;

const SkillPercentage = styled.div`
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

export default Skills;
