import React from 'react'
import style from "../css/About.module.css";

const About = () => {
  return (
    <div className={style.divAbout}>
      <h1>About us</h1>
      <p>We are Rick and Morty fan page </p>
      <img className={style.imgAbout} src="gif14.webp" alt="" />
      <footer className={style.footer}>
        <h2>Create by Alejandra</h2>
      </footer>
    </div>
  )
}

export default About