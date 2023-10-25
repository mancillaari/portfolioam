import "./Tools.css";
import html from "./vectores/html.svg";
import css from "./vectores/css.svg";
import github from "./vectores/github.svg";
import javascript from "./vectores/javascript.svg";
import reactjs from "./vectores/reactjs.svg";
import mysql from "./vectores/mysql.svg";
import figma from "./vectores/figma.svg";

export default function Tools() {
  return (
    <>
      <section className="tools">
        <div className="title">
          <h2>Lenguajes y Herramientas utilizados</h2>{" "}
        </div>
        <div className="vectoresTools">
          <img src={html} alt="" />
          <h5>HTML5</h5>
          <img src={css} alt="" />
          <h5>CSS</h5>
          <img src={github} alt="" />
          <h5>GitHub</h5>
          <img src={javascript} alt="" />
          <h5>JavaScript</h5>
          <img src={reactjs} alt="" />
          <h5>ReactJS</h5>
          <img src={mysql} alt="" />
          <h5>MySQL</h5>
          <img src={figma} alt="" />
          <h5>Figma</h5>
        </div>
      </section>
    </>
  );
}
