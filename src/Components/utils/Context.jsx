import { createContext, useState, useEffect, useReducer, useContext } from "react";
import axios from "axios";

 const ContextGlobal = createContext();

 const initialState = {theme: " "}

 const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const url = 'https://jsonplaceholder.typicode.com/users'
  const [data, setData] = useState([])

  useEffect(() => {
    axios(url)
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  }, [])

  return (
    <ContextGlobal.Provider 
      value = { {data} }>
      {children}
    </ContextGlobal.Provider>
  )
}


export default ContextProvider;

export const useGlobalStates = () => {
  return useContext(ContextGlobal)
}
