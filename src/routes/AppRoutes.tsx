import { Routes, Route } from "react-router-dom";
import Home from "../features/Home/Home";
import Contact from "../features/Contact/Contact";
import Projects from "../features/Projects/Projects";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);

export default AppRoutes;
