import "./App.css";
import Nav from "./assets/Nav";
import Header from "./assets/Header";
import AboutMe from "./assets/About";
import Skills from "./assets/Skills";
import Education from "./assets/Education";
import Idioms from "./assets/Idioms";
import Socials from "./assets/Socials";
import Footer from "./assets/Footer";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <AboutMe />
      {/* <Skills /> */}
      <Education />
      <Idioms />
      <Socials />
      <Footer />
    </>
  );
}

export default App;
