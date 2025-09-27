import style from './Login.module.css'
import loginlogo from '../../assets/olxLogo.png'
import { IoClose } from "react-icons/io5";
import { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
const SignUp = () => {

// Signup state
 const [username, setUsername] = useState('');
 const [userEmail, setUserEmail] = useState('');
 const [userPassword, setUserPassword] = useState('');

//  AuthContext
const {signup,openFormHandler} = useContext(AuthContext);

// Submit Form 
const submitFormHandler =(e)=>{
  e.preventDefault();
  if(userPassword.length > 7){
  const user = {
          username,
          userEmail,
          userPassword,
         }
  signup(user)
  setUsername('')
  setUserEmail('')
  setUserPassword('')
  }else{
    alert('Password Length must be  or greater than 8');
  }
  
}
  return (
    <div className={style.loginSection}>
      <form className={style.loginForm} onSubmit={submitFormHandler} >
      <IoClose className={style.closeIcon} onClick={()=>openFormHandler(false)} />
       <img src={loginlogo} alt="loginLogo" />
       <h2>SignUp</h2>

       <div className={style.inputField}>
        <label htmlFor="name">Name</label>
        <input 
        value={username}
        onChange={(e)=> setUsername(e.target.value)}
        type="text" 
        name="name" 
        id="name" 
        placeholder='Enter name required'
        required />
       </div> 
         
       <div className={style.inputField}>
        <label htmlFor="email">Email</label>
        <input 
        value={userEmail}
        onChange={(e)=> setUserEmail(e.target.value)}
        type="email"
        name="email"
        id="email" 
        placeholder='Enter email'
        required />
       </div>

        <div className={style.inputField}>
        <label htmlFor="password">Password</label>
        <input 
          value={userPassword}
          onChange={(e)=> setUserPassword(e.target.value)}
          type="password"
          name="password"
          id="password"
          placeholder='Enter password '
          required />
       </div>
       
        <button type='submit'>Create</button>
        <p className={style.newAccountText} onClick={()=> openFormHandler('login')}>Already have an Account ? login</p>
      </form>
    </div>
  )
}

export default SignUp