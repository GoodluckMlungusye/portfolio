import { Fade } from "react-awesome-reveal";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";

function App() {

  return (
    <div className="body">

      <header>
        <NavBar/>
      </header>

      <main>
        <Home/>
        <Fade direction="up" triggerOnce>
        <About/>
        <Skills/>
        <Services/>
        <Projects/>
        <Contacts/>
        </Fade>
    
      </main>

    </div>
  );
}

export default App;
