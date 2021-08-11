import Featured from "./Components/Featured.jsx";
import Home from "./Components/Home.jsx";
import Navbar from "./Components/Navbar.jsx";
import Projects from "./Components/Projects.jsx";
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
      </main>
    </div>
  );
}

export default App;
