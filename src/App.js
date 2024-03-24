import { Fade } from "react-awesome-reveal";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";

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
          <div className="flex items-center justify-center h-screen bg-fuchsia-900 m-7 rounded-3xl" id='contact'>
              <h1>contact me</h1>
          </div>
          <div className="flex items-center justify-center h-screen bg-fuchsia-900 m-7 rounded-3xl" id='404'>
              <h1>404</h1>
          </div>
        </Fade>
    
      </main>

    </div>
  );
}

export default App;
