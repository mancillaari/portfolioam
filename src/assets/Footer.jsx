import "./Footer.css";
import logo from "./img/logo.png";

export default function Footer() {
  return (
    <footer className="footerContaine">
      <img src={logo} alt="" />
      <div className="infoFooter"></div>
    </footer>
  );
}
