import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { Fade } from "react-awesome-reveal";

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
          <div className="flex items-center justify-center h-screen bg-fuchsia-900 m-7 rounded-3xl" id='skills'>
              <h1>skills</h1>
          </div>
          <div className="flex items-center justify-center h-screen bg-fuchsia-900 m-7 rounded-3xl" id='services'>
              <h1>services</h1>
          </div>
          <div className="flex items-center justify-center h-screen bg-fuchsia-900 m-7 rounded-3xl" id='projects'>
              <h1>projects</h1>
          </div>
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
