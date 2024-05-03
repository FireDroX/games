import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/home/Home";
import RPS from "./pages/rps/RPS";
import PwdInput from "./pages/password/PwdInput";
import Horloge from "./pages/horloge/Horloge";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/games" element={<Home />} />
        <Route path="/games/rps" element={<RPS />} />
        <Route path="/games/password" element={<PwdInput />} />
        <Route path="/games/horloge" element={<Horloge />} />

        <Route path="*" element={<Navigate to={"/games"} />} />
      </Routes>
    </>
  );
}

export default App;
