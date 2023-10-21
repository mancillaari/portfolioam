import "./Proyects.css";
import imgProyect from "./img/imgProyect.jpg";
import html from "./vectores/html.svg";
import css from "./vectores/css.svg";
import github from "./vectores/github.svg";
import javascript from "./vectores/javascript.svg";
import reactjs from "./vectores/reactjs.svg";

export default function Proyects() {
  return (
    <>
      <section className="proyects" id="sectionProyectos">
        <h2>PROYECTOS</h2>
        <article className="infoProyects">
          <h4>E-Commerce: Codespresso</h4>
          <p>
            Este E-Commerce fue el proyecto final con dos instancias
            calificadoras: Front-end y Back-end. Primero, mi compañero y yo
            maquetamos la estructura en Figma para luego pasar a código
            utilizando React JS y CSS.
          </p>
          <img src={imgProyect} alt="" />
          <div className="vectoresProyect">
            <img src={html} alt="" />
            <p>Conocimientos: Intermedio-Avanzado</p>
            <img src={css} alt="" />
            <p>Conocimientos: Intermedio-Avanzado</p>
            <img src={github} alt="" />
            <p>Conocimientos: Intermedio</p>
            <img src={javascript} alt="" />
            <p>Conocimientos: Intermedio</p>
            <img src={reactjs} alt="" />
            <p>Conocimientos: Intermedio</p>
          </div>
        </article>
      </section>
    </>
  );
}
