import { ADD_FAV,FILTER,ORDER,REMOVE_FAV } from "./actions";

const initialState={
    myFavorites:[],
    allCharacters:[]
}

const reducer=(state=initialState,action)=>{
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: action.payload,
                allCharacters: action.payload,
            };
       case REMOVE_FAV:
            return {
                ...state,
                myFavorites: action.payload,
                allCharacters: action.payload,
            };
        case FILTER:
            return{
                ...state,
                myFavorites:state.allCharacters.filter((fav)=>fav.gender===action.payload)
            }
        case ORDER:
            const orderCharacters=[...state.allCharacters]
            return{
                ...state,
                myFavorites:
                action.payload==="A" 
                ? orderCharacters.sort((a,b)=>a.id-b.id) 
                :orderCharacters.sort((a,b)=>b.id-a.id)   
            }
        default:
            return {...state}
 
    }
    
};

export default reducer;