import React from "react";
import Header from "./components/Header";
import GlobalStyle from "./styles/GlobalStyles";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <Services />
      <Skills />
    </>
  );
}

export default App;
