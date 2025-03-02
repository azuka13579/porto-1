import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./Pages/About";
import AboutAGSN from "./Pages/AboutAGSN";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi dalam ms
      once: true, // Animasi hanya berjalan sekali
    });
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/agsn" element={<AboutAGSN />} />
      </Routes>
    </Router>
  );
};

export default App;
