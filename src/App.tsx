import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import AppRoutes from "./routes/AppRoutes";
import DefaultLayout from "./layouts/DefaultLayout";
import ScrollToTop from "./components/ScrollToTop";
import "./index.css";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <DefaultLayout>
          <AppRoutes />
        </DefaultLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
