import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar,Adhd,Autism,Downsyndrome,Dyslexia,Home,People,ContactUs } from './components/exporter';
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
          <Route path="/downsyndrome" element={<Downsyndrome />} />
          <Route path="/dyslexia" element={<Dyslexia />} />
          <Route path="/people" element={<People />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
