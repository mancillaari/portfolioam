import "./Nav.css";
import logo from "./img/logo.png";

export default function Nav() {
  return (
    <>
      <nav className="navFonts">
        <div className="navInfo">
          <img src={logo} alt="" />
          <a href="#sectionInicio">INICIO</a>
          <a href="#sectionProyectos">PROYECTOS</a>
          <a href="#">CONTACTO</a>
        </div>
      </nav>
    </>
  );
}
