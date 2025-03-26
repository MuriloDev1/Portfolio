import styled from "styled-components";

const ContainerBase = styled.section`
  position: relative;
  text-align: start;
  min-height: 100vh;
  margin-bottom: 1rem;
  padding: 2rem 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PrimaryContainer = styled(ContainerBase)`
  background-color: var(--primary-background);
`;

const SecondaryContainer = styled(ContainerBase)`
  background-color: var(--secondary-background);
`;

export { PrimaryContainer, SecondaryContainer };
