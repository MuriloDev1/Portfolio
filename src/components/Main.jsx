import styled from "styled-components";

const MainContainer = styled.main`
  width: 100%;
  margin: 0 auto;
  border: 1px solid;
`;

const Main = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

export default Main;
