import React, { useEffect } from "react";
import GlobalStyle from "./styles/GlobalStyles";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Skills from "./components/Skills";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease",
      once: true,
    });
  }, []);

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
