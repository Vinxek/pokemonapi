import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import PokemonCards from "./components/PokemonCards";
import Pokemon from "./components/Pokemon";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firestore";
import RegisterPage from "./components/RegisterPage";
import { AuthContextProvider } from "./config/AuthContext";
import Login from "./components/Login";
import ProtectedRoute from "./config/ProtectedRoute";
import TestComponent from "./components/TestComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <AuthContextProvider>
        <div>
          <Navbar />
        </div>

        <Routes>
          <Route path="/pokemonapi/" element={<PokemonCards />} />

          <Route
            path="pokemonapi/pokemon/:pokemonIndex"
            element={
              <ProtectedRoute>
                <Pokemon />
              </ProtectedRoute>
            }
          />

          <Route path="pokemonapi/register" element={<RegisterPage />} />
          <Route path="pokemonapi/login" element={<Login />} />
        </Routes>
        <ToastContainer />
      </AuthContextProvider>
    </>
  );
}

export default App;
