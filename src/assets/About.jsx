import "./About.css";
import piccv from "./img/piccv.jpeg";

export default function AboutMe() {
  return (
    <>
      <section className="about" id="sectionInicio">
        <header className="headerBanner">
          <div className="principalText">
            <h1>Ariadna Ivone Mancilla</h1>
          </div>
          <div className="info">
            <h4>DISEÑADORA UX/UI</h4>
            <h4>DESARROLLADORA FULL STACK</h4>
          </div>
        </header>
        <section className="aboutInfo">
          <div className="infoContaine">
            <h3>¿Sobre mi?</h3>
            <p>
              Tengo 19 años y actualmente estoy estudiando una Diplomatura Full
              Stack en la Universidad Tecnológica Nacional. Paralelamente,
              estudio con la Fundación Empujar, dónde tengo mentorías, mejoro
              mis habilidades sociales y comunicativas. Como también estoy
              estudiando un curso de medio año, donde aprendo todo lo necesario
              acerca del Diseño UX UI. ¡Espero que le guste mi portafolio!
            </p>
          </div>
          <img src={piccv} alt="" />
        </section>
      </section>
    </>
  );
}
