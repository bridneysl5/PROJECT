import "./App.css";
import "./css/bootstrap.css";
import "./css/app2.css";
import "./css/estilos.css";
import "./css/app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Notfound from "./components/Notfound";
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import SidebarPacient from "./components/SidebarPacient";
import SidebarDr from "./components/SidebarDr";
import SignUpPacient from "./pages/SignUpPacient";
import SignUpDr from "./pages/SignUpDr";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup/" element={<SignUpPacient />} />
        <Route path="/signupDr/" element={<SignUpDr />} />
        <Route path="/SobreNosotros" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        {sessionStorage.getItem('token')&&(<Route path="/InnerHealth/*" element={<SidebarPacient />} />) }
        {sessionStorage.getItem('token_Dr')&&(<Route path="/InnerHealthDr/*" element={<SidebarDr />} />)}
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
