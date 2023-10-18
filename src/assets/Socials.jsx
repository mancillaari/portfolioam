import "./Socials.css";
import linkedin from "./vectores/linkedin.svg";
import behance from "./vectores/behance.svg";

export default function Socials() {
  return (
    <section className="socialMedia">
      <h2>REDES SOCIALES</h2>
      <div className="infoSocials">
        <p>
          ¡Te invito a chequear mi
          <span className="destaque"> Curriculum Vitae</span>! Aquí abajo:
        </p>

        <p>
          En
          <span className="destaque">LinkedIn</span>
          tengo más información acerca de mis estudios, experiencias laborales y
          proyectos digitales. ¡Adelante!
        </p>
        <a href="https://www.linkedin.com/in/ariadna-mancilla/">
          <img src={linkedin} alt="" />
        </a>
        <p>
          Puedes ver mis trabajos y aplicaciones cómo diseñadora en
          <span className="destaque"> Behance:</span>
        </p>
        <a href="https://www.behance.net/ariadnamancilla1">
          <img src={behance} alt="" />
        </a>
      </div>
    </section>
  );
}
