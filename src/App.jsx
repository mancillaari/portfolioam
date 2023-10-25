import React from "react";

import "./App.css";
import Nav from "./assets/Nav";
import AboutMe from "./assets/About";
import Skills from "./assets/Skills";
import Education from "./assets/Education";
import Idioms from "./assets/Idioms";
import Socials from "./assets/Socials";
import Proyects from "./assets/Proyects";
import Tools from "./assets/Tools";
import Footer from "./assets/Footer";
import Contact from "./assets/Components/Contact";

function App() {
  return (
    <>
      <Nav />
      <AboutMe />
      <Education />
      <Idioms />
      <Socials />
      <Contact />
      <Skills />
      <Proyects />
      <Tools />
      <Footer />
    </>
  );
}

export default App;
