import styled from "styled-components";

export const Title = styled.h1`
  text-align: start;
  padding: 0 0 5rem;
  font-size: 5rem;
  font-weight: normal;

  @media (max-width: 1024px) {
    padding-bottom: 3rem;
    font-size: 3.5rem;
  }
`;

export const Subtitle = styled.h2`
  margin: 1.5rem 0;
  font-size: 1.5rem;
  font-weight: normal;
  color: #aaaaaa;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
