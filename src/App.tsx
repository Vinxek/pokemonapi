import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import PokemonCards from "./components/PokemonCards";
import Pokemon from "./components/Pokemon";

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<PokemonCards />} />
        <Route path="/pokemon/:pokemonIndex" element={<Pokemon />} />
      </Routes>
    </>
  );
}

export default App;
