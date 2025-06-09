import { Routes, Route } from "react-router-dom";
import Home from "../features/Home/Home";
import NotFound from "../features/NotFound/NotFound";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
