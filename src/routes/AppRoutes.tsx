import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import Projects from "../pages/Projects/Projects";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);

export default AppRoutes;
