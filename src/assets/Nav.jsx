import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";
import logo from "./img/logo.png";
import Contact from "./Components/Contact";

export default function Nav() {
  return (
    <>
      <nav className="navFonts">
        <div className="navInfo">
          <img src={logo} alt="" />
          <a href="#sectionInicio">INICIO</a>
          <a href="#sectionProyectos">PROYECTOS</a>
          <a href="#sectionContact">CONTACTO</a>
        </div>
      </nav>
    </>
  );
}
