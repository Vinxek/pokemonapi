import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateCurrentUser,
} from "firebase/auth";
import {auth} from "./firestore"


const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {

  const [user, setUser]=useState({})

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);

  };
  const logout = () =>{
    return signOut(auth)
  }

  const signIn = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
  }

  useEffect(()=>{
    const unsubcribe = onAuthStateChanged(auth, (currentUser) =>{
      console.log(currentUser)
      setUser(currentUser)
    })
  })

  return (
    <UserContext.Provider value={{createUser, user, logout, signIn}}>{children}</UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
