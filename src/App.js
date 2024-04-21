import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Totop from "./sub-components/Totop";

function App() {

  return (
    <div className="body">

      <header>
        <NavBar/>
      </header>

      <main>
        <Home/>
        <About/>
        <Skills/>
        <Services/>
        <Projects/>
        <Contacts/>
        <Totop/>
      </main>

    </div>
  );
}

export default App;
