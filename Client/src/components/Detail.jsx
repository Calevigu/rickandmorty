import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState ,useEffect } from 'react'
import style from "../css/detail.module.css"

const Detail = () => {
  const [character,setCharacter]=useState({})
  const {id}=useParams();
  //console.log(id);

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
          console.log(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);


  return (
    <div className={style.div}>
      <div className={style.div2}>
        <h3>{character.name}</h3>
        <h2>{character.status}</h2>
        <h2>{character.species}</h2>
        <h2>{character.gender}</h2>
        <h2>{character.origin?.name}</h2>
        <img className={style.img2} src={character.image} alt={character.name} />
      </div>
    </div>

  )
}

export default Detail