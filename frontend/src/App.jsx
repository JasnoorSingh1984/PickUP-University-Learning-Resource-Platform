import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";
import ScrollToTop from "./components/ScrollToTop";
import useReveal from "./hooks/useReveal";

import Home from "./pages/Home";
import Resources from "./pages/Resources";
import Quiz from "./pages/Quiz";
import Roadmap from "./pages/Roadmap";
import CgpaCalculator from "./pages/CgpaCalculator";
import Contact from "./pages/Contact";
import SemesterDetail from "./pages/SemesterDetail";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  useReveal();

  return (
    <>
      <ScrollToTop />
      <ParticleBackground />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/semester/:semesterId" element={<SemesterDetail />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/cgpa-calculator" element={<CgpaCalculator />} />
        <Route path="/calculator" element={<CgpaCalculator />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;