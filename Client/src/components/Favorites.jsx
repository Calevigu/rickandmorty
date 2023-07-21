import React, { useState } from 'react'
import {connect} from "react-redux"
import Card from './Card'
import { useDispatch } from 'react-redux'
import { filterCards,orderCards } from '../redux/actions'
import style from "../css/Favorites.module.css"

const Favorites = ({myFavorites}) => {
  const [aux,setAux]=useState(false);

  const dispatch=useDispatch();

  const handleOrder=(e)=>{
    dispatch(orderCards(e.target.value))
    setAux(!aux)
  }
  const handleFilter=(e)=>{
    dispatch(filterCards(e.target.value))
  }
  return (
    <div className={style.div}>
      <select className={style.select} onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <select className={style.select} onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
        {myFavorites.map((el,index)=>{
            return(
              <div className={style.divCards} >
                <Card
                key={index}
                id={el.id}
                name={el.name}
                status={el.status}
                species={el.species}
                gender={el.gender}
                origin={el.origin.name}
                image={el.image}
              />
              </div>
            )
        })}
    </div>
  )
}

const mapStateToProps=(state)=>{
    return{
       myFavorites:state.myFavorites 
    }
}


export default connect(mapStateToProps,null)(Favorites);