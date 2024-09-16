import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/home/Home";
import RPS from "./pages/rps/RPS";
import PwdInput from "./pages/password/PwdInput";
import Horloge from "./pages/horloge/Horloge";
import Pokemon from "./pages/pokemon/Pokemon";
import Sudoku from "./pages/sudoku/Sudoku";

function App() {
  function DynamicPage() {
    const [page, setPage] = useState(null);
    const location = useLocation();

    useEffect(() => {
      const queryParams = new URLSearchParams(location.search);
      setPage(queryParams.get("page"));
    }, [location]);

    switch (page) {
      case "rps":
        return <RPS />;
      case "horloge":
        return <Horloge />;
      case "password":
        return <PwdInput />;
      case "pokemon":
        return <Pokemon />;
      case "sudoku":
        return <Sudoku />;
      default:
        return <Home />;
    }
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/games" element={<DynamicPage />} />
      </Routes>
    </>
  );
}

export default App;
