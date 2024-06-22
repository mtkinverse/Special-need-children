import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Adhd from "./components/Adhd";
import Autism from "./components/Autism";
import CerebralPalsy from "./components/CerebralPalsy";
import Downsyndrome from "./components/Downsyndrome";
import Dyslexia from "./components/Dyslexia";
import Home from "./components/Home"
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adhd" element={<Adhd />} />
          <Route path="/autism" element={<Autism />} />
          <Route path="/cerebral-palsy" element={<CerebralPalsy />} />
          <Route path="/downsyndrome" element={<Downsyndrome />} />
          <Route path="/dyslexia" element={<Dyslexia />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
