import style from "../css/Card.module.css";
import { Link } from "react-router-dom";
import { addFav,removeFav } from "../redux/actions";
import { connect } from "react-redux";
import { useState,useEffect } from "react";

function Card({name,status,species,gender,origin,image,onClose,id,addFav,removeFav,myFavorites}) {

   const [isFav,setIsFav]=useState(false);

   const handleFavorite=()=>{
      if(isFav){
         setIsFav (false)
         removeFav(id)
      }else{
         setIsFav(true)
         addFav({name,status,species,gender,origin,image,id})
      }
   }
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   
   return (
      <div className={style.divCard}>
         {
         isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ) : (
            <button onClick={handleFavorite}>🤍</button>
            )
         }
         <button className={style.button} onClick={()=>onClose(id)}>X</button>
         <Link to={`/detail/${id}`}> <h2 className={style.name}>{name}</h2></Link>
         <h2 className={style.h2}>{status}</h2>
         <h2 className={style.h2}>{species}</h2>
         <h2 className={style.h2}>{gender}</h2>
         <h2 className={style.h2}>{origin}</h2>
         <img className={style.img} src={image} alt={name} /> 
      </div>
   );
}

const mapDispatchToProps=(dispatch)=>{
   return{
      addFav:(personaje)=>dispatch(addFav(personaje)),
      removeFav:(id)=>dispatch(removeFav(id))
   }
};

const mapStateToProps=(state)=>{
   return{
      myFavorites:state.myFavorites
   }
}


export default connect(mapStateToProps,mapDispatchToProps)(Card);