import React from "react";
import styled from "styled-components";

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 20px;
`;

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <MainContent>{children}</MainContent>
    </LayoutWrapper>
  );
};

export default Layout;
