import React from "react";
import styled from "styled-components";

import { Container } from "../layout/Container";
import { Subtitle, Title, TitleWrapper } from "./SectionTitle";

const skillsData = [
  { name: "Comunicação", percentage: 80 },
  { name: "Liderança", percentage: 70 },
  { name: "Trabalho em Equipe", percentage: 90 },
  { name: "Flexível", percentage: 80 },
];

const Skills = () => {
  return (
    <Container>
      <ContentWrapper>
        <SkillsContent>
          <TitleWrapper>
            <Subtitle>|| Soft Skills</Subtitle>
            <Title>Minhas Skills</Title>
          </TitleWrapper>
        </SkillsContent>

        <SkillBox>
          {skillsData.map((skill, index) => (
            <SingleSkillItem key={index}>
              <SkillHeader>
                <Tag>{skill.name}</Tag>
                <SkillPercentage>{skill.percentage}%</SkillPercentage>
              </SkillHeader>
              <ProgressBar>
                <ProgressValue style={{ width: `${skill.percentage}%` }} />
              </ProgressBar>
            </SingleSkillItem>
          ))}
        </SkillBox>
      </ContentWrapper>
    </Container>
  );
};

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const SkillsContent = styled.div`
  flex: 1;
  max-width: 40%;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 2rem;
  }
`;


const SingleSkillItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--secondary-background);
  padding: 1.5rem 2rem;
  gap: 0.8rem;
  box-sizing: border-box;
`;

const SkillHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
`;

const Tag = styled.div`
  font-size: 1rem;
  font-weight: normal;
  color: #aaaaaa;
  flex: 1;
  min-width: 0;
  word-break: break-word;
`;

const SkillPercentage = styled.div`
  font-size: 1rem;
  font-weight: normal;
  color: #aaaaaa;
  flex-shrink: 0;
`;

const SkillBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex: 1;
  margin-left: 3rem;
  width: 100%;

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
  }
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
