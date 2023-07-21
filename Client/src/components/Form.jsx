import {useState} from 'react'
import validation from './validation.js'
import style from "../css/Form.module.css"

const Form = ({login}) => {
    const[errors,setErrors]=useState({})
    const[userData,setUserData]=useState({email:"",password:""})

    const handleChange=(event)=>{
        setUserData({...userData,[event.target.name]:event.target.value})
        setErrors(validation({...userData,[event.target.name]:event.target.value}))
    }
    //console.log(userData);

    const handleSubmit=(event)=>{
        event.preventDefault()
        login(userData)
    }


    
  return (
    <div className={style.divForm}>
        <form className={style.Form} >
            <label className={style.label}>Email</label>
            <input className={style.input} type="text" placeholder='email...' value={userData.email} name='email' onChange={handleChange}/>
             {errors.email ? <span style={{color:"red"}}>{errors.email}</span>  : null}
            <label className={style.label} >Password</label> 
            <input  className={style.input} type="password" placeholder='password...' value={userData.password} name='password' onChange={handleChange}/>
            {errors.password ? <span style={{color:"red"}}>{errors.password}</span>  : null}
            <input  className={style.input1} type="submit" onClick={handleSubmit} />
        </form>
    </div>
  )
}

export default Form