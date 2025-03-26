import styled from "styled-components";

export const Content = styled.div`
  max-width: 100%;
  padding-bottom: 1rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: start;
    text-align: start;
  }
`;

export const Greeting = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  color: var(--highlight-color);
`;

export const Title = styled.h1`
  margin: 0.8rem 0;
  font-size: 5rem;

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 2.8rem;
  margin-bottom: 1rem;
  color: #a8a8a8f1;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  color: #aaaaaa;
  max-width: 600px;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
