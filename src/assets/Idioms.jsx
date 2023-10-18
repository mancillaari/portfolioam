import "./Idioms.css";
import Lenguage from "./vectores/Lenguage.svg";

export default function Idioms() {
  return (
    <section className="idioms">
      <h2>IDIOMAS</h2>
      <div className="allContents">
        <div className="vector">
          <img src={Lenguage} alt="" />
        </div>
        <div className="contentIdioms">
          <h4>ESPAÑOL:</h4>
          <p>Nativo</p>
          <h4>INGLÉS:</h4>
          <p>
            Nivel Escrito: Upper Intermediate - B2 Nivel Oral: Intermediate -
            A2/ B1
          </p>
        </div>
      </div>
    </section>
  );
}
