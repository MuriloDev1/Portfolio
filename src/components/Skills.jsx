import React from "react";
import styled from "styled-components";
import { PrimaryContainer } from "./Container";
import { Subtitle, Title, TitleWrapper } from "./Titles";

const Skills = () => {
  return (
    <PrimaryContainer>
      <ContentWrapper>
        <SkillsContent>
          <TitleWrapper>
            <Subtitle>|| Soft Skills</Subtitle>
            <Title>Minhas Skills</Title>
          </TitleWrapper>
        </SkillsContent>

        <SkillBox>
          <SingleSkillItem>
            <SkillHeader>
              <Tag>Comunicação</Tag>
              <SkillPercentage>80%</SkillPercentage>
            </SkillHeader>
            <ProgressBar>
              <ProgressValue style={{ width: "80%" }}></ProgressValue>
            </ProgressBar>
          </SingleSkillItem>

          <SingleSkillItem>
            <SkillHeader>
              <Tag>Liderança</Tag>
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
      </ContentWrapper>
    </PrimaryContainer>
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

const SkillBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1.5rem;
  flex: 1;
  margin-left: 3rem;

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    align-items: center;
  }
`;

const SingleSkillItem = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--secondary-background);
  padding: 2rem;
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
