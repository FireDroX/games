import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/home/Home";
import RPS from "./pages/rps/RPS";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/games" element={<Home />} />
        <Route path="/games/rps" element={<RPS />} />

        <Route path="*" element={<Navigate to={"/games"} />} />
      </Routes>
    </>
  );
}

export default App;
