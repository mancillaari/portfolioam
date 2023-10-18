import "./About.css";
import piccv from "./img/piccv.jpeg";

export default function AboutMe() {
  return (
    <section className="aboutInfo">
      <div className="infoContaine">
        <h3>¿Sobre mi?</h3>
        <p>
          Tengo 19 años y actualmente estoy estudiando una Diplomatura Full
          Stack en la Universidad Tecnológica Nacional. Paralelamente, estudio
          con la Fundación Empujar, dónde tengo mentorías, mejoro mis
          habilidades sociales y comunicativas. Como también estoy estudiando un
          curso de medio año, donde aprendo todo lo necesario acerca del Diseño
          UX UI. ¡Espero que le guste mi portafolio!
        </p>
      </div>
      <img src={piccv} alt="" />
    </section>
  );
}
