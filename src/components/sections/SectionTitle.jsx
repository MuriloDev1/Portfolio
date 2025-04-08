import styled from "styled-components";

export const Title = styled.h1`
  font-size: 4.5rem;
  font-weight: normal;
  display: inline;

  @media (max-width: 1024px) {
    font-size: 3.5rem;
  }

  @media (max-width: 600px) {
    font-size: 2.5rem;
  }
`;

export const Subtitle = styled.h2`
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  font-weight: normal;
  color: #aaaaaa;
  display: inline;
  margin-right: 0.5rem;

  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`;

export const Wrapper = styled.div`
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: end;
  text-align: right;

  @media (max-width: 1024px) {
    margin: 2rem 0;
  }

  @media (max-width: 600px) {
    align-items: end;
    text-align: end;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;

  @media (max-width: 600px) {
    text-align: center;
    align-items: center;
  }
`;
