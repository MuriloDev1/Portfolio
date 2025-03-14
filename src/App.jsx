import React, { useEffect } from "react";
import GlobalStyle from "./styles/GlobalStyles";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Skills from "./components/Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./pages/About";
import Projects from "./pages/Projects";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

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
      <ScrollToTop />
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
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
