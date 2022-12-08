import { createContext, useState, useEffect, useReducer, useContext } from "react";
import axios from "axios";

 const ContextGlobal = createContext();

 const initialState = {theme: " ", data: []}

 const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
      

  return (
    <ContextGlobal.Provider>
      {children}
    </ContextGlobal.Provider>
  );
};


export default ContextProvider;

export const useGlobalStates = () => {
  return useContext(ContextGlobal)
}
