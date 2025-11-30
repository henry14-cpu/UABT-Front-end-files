import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import EspaceEtudiants from "./pages/EspaceEtudiants";
import ForgotP1 from "./pages/ForgotP1";
import ForgotP2 from "./pages/ForgotP2";
import ForgotP3 from "./pages/ForgotP3";
import EspaceAdmins from "./pages/EspaceAdmins";
import EspaceEnseignants from "./pages/EspaceEnseignants";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/EspaceEtudiants" element={<EspaceEtudiants />} />
        <Route path="/ForgotP1" element={<ForgotP1 />} />
        <Route path="/ForgotP2" element={<ForgotP2 />} />
        <Route path="/ForgotP3" element={<ForgotP3 />} />
        <Route path="/EspaceAdmins" element={<EspaceAdmins />} />
        <Route path="/EspaceEnseignants" element={<EspaceEnseignants />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
