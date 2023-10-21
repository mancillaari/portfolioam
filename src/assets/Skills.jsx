import "./Skills.css";

export default function Skills() {
  return (
    <>
      <section className="skillSet">
        <div className="titles">
          <p>Servicios</p>
          <h3>Skill Set</h3>
        </div>
        <div className="infoSet">
          <div className="squareInfo one">
            <h4>Investigación UX</h4>
            <p>
              Conocimientos en: Proto persona, mapa de empatía, Usser persona.
              POV, Storytelling, Storyboard. Arquitectura de Info, Card Sorting.
              Taskflow, Userflow, WIreframe.
            </p>
          </div>
          <div className="squareInfo two">
            <h4>App Design</h4>
            <p>Conocimientos en: Armado de App y Página Web. Estructura. Responsive design.</p>
          </div>
          <div className="squareInfo three">
            <h4>Front-End Desarrollo</h4>
            <p>
              Conocimientos en: HTML5 y CSS, escala de conocimiento:
              intermedio-avanzado. JavaScript y ReactJS, escala de conocimiento:
              intermedio.
            </p>
          </div>
          <div className="squareInfo four">
            <h4>Back-End Desarrollo</h4>
            <p>
              Con conocimientos en: Base de Datos en MySQL, escala de
              conocimiento: intermedio. MongoDB.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
