import "./Education.css";
import Star from "./vectores/Star.svg";
import Monitor from "./vectores/Monitor.svg";
import Study from "../assets/vectores/Study.svg";

export default function Education() {
  return (
    <section className="education">
      <h2>EDUCACIÓN</h2>
      <div className="contentInfo">
        <div className="vectores">
          <img src={Study} alt="" />
          <img src={Monitor} alt="" />
        </div>
        <div className="infoUTN">
          <h4>
            DIPLOMATURA EN: DESARROLLO WEB FULL STACK En Centro E-Learning UTN
          </h4>
          <p>
            Contenidos: Front-End: HTML5, CSS, JavaScript, ReactJs, Typescript.
            Back-End: MySQL, Base de datos relacionales y no relaciones.
            MongoDB.
          </p>
        </div>

        <div className="vectores">
          <img src={Study} alt="" />
          <img src={Star} alt="" />
        </div>
        <div className="infoDesign">
          <h4>CURSO DE: DISEÑO UX/UI Por WorkerTech, BID LAB y ADA</h4>
          <p>
            Contenidos: Investigación UX: Proto y Usser persona, Mapa de
            empatía. POV, Storytelling, Storyboard. Arquitectura de la
            información, Card sorting, Design Thinking.
          </p>
        </div>
      </div>
    </section>
  );
}
