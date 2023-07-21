import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import {useState,useEffect} from 'react';
import axios from 'axios'; //axios es una libreria.
import About from "./components/About"
import Detail from './components/Detail';
import Error from './components/Error';
import Form from './components/Form';
import { useLocation,useNavigate,Routes,Route } from 'react-router-dom';
import Favorites from './components/Favorites';

function App() {
   const [characters, setCharacters] = useState([])
   const [access,setAccess]=useState(false)


   const navigate=useNavigate();

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   async function login(userData) {
      try {
        const { email, password } = userData;
        const URL = "http://localhost:3001/rickandmorty/login/";
        const response = await axios(
          URL + `?email=${email}&password=${password}`
        );
        const data = response.data;
        const { access } = data;
        setAccess(access);
        access && navigate("/home");
      } catch (error) {
        alert(error.message);
      }
   }
  
   
   const onSearch = async (id) => {
      try {
        const response = await axios(
          `http://localhost:3001/rickandmorty/character/${id}`
        );
        const data = response.data;
        if (data.name) {
          const isCharacterExist = characters.find(
            (character) => character.id === data.id
          );
          if (isCharacterExist) {
            window.alert("¡El personaje ya está en pantalla!");
          } else {
            setCharacters([...characters, data]);
          }
        } else {
          alert("!No hay personaje con este ID!");
        }
      } catch (error) {
        alert(error.message);
      }
   };
  

   const onClose=(id)=>{
      let filterCharacter=characters.filter((character)=>{
        return character.id !== parseInt(id)
      })
      setCharacters(filterCharacter);
   }
   //console.log(characters)
   const {pathname}=useLocation();
   
   
   return (
      <div className='App'>
         {pathname!== "/"&& <Nav onSearch={onSearch}/>}
         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='*' element={<Error/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
         </Routes>
      </div>
   );
}

export default App;