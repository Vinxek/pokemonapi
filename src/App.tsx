import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import PokemonCards from "./components/PokemonCards";
import Pokemon from "./components/Pokemon";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firestore";
import RegisterPage from "./components/RegisterPage";
import { AuthContextProvider } from "./config/AuthContext";

function App() {
  const [allUsers, setAllUsers] = useState([]);

  const getAllUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const usersData = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      usersData.push(doc.data());
    });
    setAllUsers(usersData);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  console.log(allUsers);
  return (
    <>
      <div>
        <Navbar />
      </div>

      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<PokemonCards />} />
          <Route path="/pokemon/:pokemonIndex" element={<Pokemon />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
