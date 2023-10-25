import "./Contact.css";
import gmail from "../vectores/gmail.svg";

export default function Contact() {
  return (
    <>
      <section className="contact" id="sectionContact">
        <h2>¡Mantengamos el contacto!</h2>
        <p>
          Con mis conocimientos y tus ideas e iniciativas nuestra creatividad no
          tendrá límites.
        </p>
        <p>
          Te invito a que me hables por
          <span className="parapDestaque"> mi Gmail </span>así podremos
          conocernos mutuamente y
          <span className="parapDestaque"> ¡Explotar tus objetivos!</span>
        </p>
        <a href="mailto:mancillariadna04@@gmail.com?Subject=Interesado%20en%20el%20Desarrollo%20Web%20o%20Diseño%20UX%20UI">
          <img src={gmail} alt="" />
        </a>
      </section>
    </>
  );
}
