import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Featured from "./Components/Featured.jsx";
import Footer from "./Components/Footer.jsx";
import Home from "./Components/Home.jsx";
import Navbar from "./Components/Navbar.jsx";
import Projects from "./Components/Projects.jsx";
import Skills from "./Components/Skills.jsx";
import './Styles/App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Home />
        <Featured />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
