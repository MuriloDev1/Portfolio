import React from "react";
import Header from "./components/Header";
import GlobalStyle from "./styles/GlobalStyles";
import Main from "./components/Main";
import Hero from "./components/Hero";
import Services from "./components/Services";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      
        <Hero />
        <Services />

    </>
  );
}

export default App;
