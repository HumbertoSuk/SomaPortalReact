import { Routes, Route } from "react-router-dom";
import Home from "../features/Home/Home";
import Contact from "../features/Contact/Contact";
import Projects from "../features/Projects/Projects";
import NotFound from "../features/NotFound/NotFound";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
