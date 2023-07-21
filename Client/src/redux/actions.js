import axios from "axios";
export const ADD_FAV="ADD_FAV";
export const REMOVE_FAV="REMOVE_FAV";
export const FILTER="FILTER";
export const ORDER="ORDER";

export const addFav = (character) => async (dispatch) => {
    try {
      const endpoint = "http://localhost:3001/rickandmorty/fav";
      const response = axios.post(endpoint, character);
      const data = (await response).data;
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
}; 
  
export const removeFav = (id) => async (dispatch) => {
    try {
      const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
      const response = await axios.delete(endpoint);
      const data = response.data;
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

export const filterCards=(gender)=>{
    return{
        type:FILTER,
        payload:gender
    }
}
export const orderCards=(orden)=>{
    return{
        type:ORDER,
        payload:orden
    }
}