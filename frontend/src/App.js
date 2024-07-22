import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Navbar,
  Home,
  People,
  ContactUs,
} from "./components/exporter";
import "./App.css";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import ProjectSpectrum from "./components/ProjectSpectrum";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/people" element={<People />}/>
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/project-spectrum" element={<ProjectSpectrum />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
