import React from 'react'
import SearchBar from "./SearchBar.jsx"
import { Link } from 'react-router-dom';
import style from "../css/Nav.module.css"

const Nav = ({onSearch}) => {
  return (
    <div className={style.div}>
      <div className={style.btn}>
        <img className={style.img} src="gif11.gif" alt="" />
        <Link to="/about"><li className={style.link}>About</li></Link>
        <Link to="/home"><li className={style.link}>Home</li></Link>
        <Link to="/favorites"><li className={style.link}>Favorites</li></Link>
      </div>
      <div className={style.search}><SearchBar  onSearch={onSearch} /></div>
    </div>
  )
}

export default Nav