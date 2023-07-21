import style from "../css/SearchBar.module.css"
import { useState } from "react";

export default function SearchBar({onSearch}) {
   const [id, setId] = useState("");

   const handleChange=(event)=>{
      setId(event.target.value)
   }
   return (
      <div className={style.div}>
         <input value={id} onChange={handleChange} placeholder="Ingrese Id" className={style.input} type='search' />
         <button className={style.button} onClick={()=>onSearch(id)}>Agregar</button> 
      </div>
   );
}
