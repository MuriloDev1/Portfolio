import React, { useEffect } from "react";
import GlobalStyle from "./styles/GlobalStyles";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Skills from "./components/Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease",
      once: true,
    });
  }, []);

  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <Skills />
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
