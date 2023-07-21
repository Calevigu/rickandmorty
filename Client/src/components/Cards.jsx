import Card from './Card';
import style from "../css/Cards.module.css";

export default function Cards({characters,onClose}) {
   //console.log(onClose);
   return (
      <div className={style.divCards}>
         {characters.map((el)=>{
            //console.log(el);
           return(
           <Card 
            key={el.id}
            id={el.id}
            name={el.name}
            status={el.status}
            species={el.species}
            gender={el.gender}
            origin={el.origin.name}
            image={el.image}
            onClose={onClose}
           />
           )  
         })}
      </div>
   )
}
