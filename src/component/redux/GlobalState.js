import React, { createContext, useEffect, useReducer } from 'react';
import axios from "axios"
import appReducer from './appReducer';

const initialState = {
  data: [
  ]
};
console.log(initialState)
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

const getData = async () => {
  try {
    const res = await axios.get('https://moneytracker-lumn.onrender.com/money');

    dispatch({
      type: "GET_MONEY",
      payload: res.data
    });
  } catch (err) {
    console.log(err)
  }
};
useEffect(()=>{
  getData()
},[])


const addMoney = async (data) => {
  const add = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post('https://moneytracker-lumn.onrender.com/money', data, add);

    dispatch({
      type: "ADD_MONEY",
      payload: res.data
    });
    getData();
  } catch (err) {
   console.log(err)
  }
};

  function editMoney(data) {
    dispatch({
      type: "EDIT_MONEY",
      payload: data
    });
  }

 const removeMoney = async (id) => {
      try {
        await axios.delete(`https://moneytracker-lumn.onrender.com/money/${id}`);
        dispatch({
          type: "REMOVE_MONEY",
          payload: id
        });
      }  catch (err) {
        console.log(err)
      }
  };

  return (
    <GlobalContext.Provider
      value={{
        data: state.data,
        addMoney,
        editMoney,
        removeMoney,
        getData
      }}
      >
      {children}
    </GlobalContext.Provider>
  );
};