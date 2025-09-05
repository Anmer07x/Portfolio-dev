import Navbar from "./components/menu";
import Banner from "./components/banner";
import About from "./components/aboutme";
import Footer from "./components/footer";
import Projects from "./components/projects";
import Experience from "./components/experience";
import Skills from "./components/skills";
import "./App.css";

function App() {
  return (
    <div className="">
      <Navbar />
      <br />
      <br />
      <Banner />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
