import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  text-align: start;
  min-height: 100vh;
  margin-bottom: 1rem;
  padding: 2rem 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
   background-color: ${({ $secondary }) =>
    $secondary ? "var(--secondary-background)" : "var(--primary-background)"};
`;

export default Container;
