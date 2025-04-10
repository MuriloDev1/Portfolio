import React, { useEffect } from "react";
import GlobalStyle from "./styles/GlobalStyles";
import Header from "./components/header/Header";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Skills from "./components/sections/Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./pages/About";
import Projects from "./pages/Projects";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Contact from "./pages/Contact";

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
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
