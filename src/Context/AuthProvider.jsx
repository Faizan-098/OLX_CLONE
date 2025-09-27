import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const AuthContext= createContext();

const AuthProvider = ({children}) => {
const navigate = useNavigate()
// Get loggedIn Data
useEffect(() => {
  const getAuthData = localStorage.getItem('Auth')
  if(getAuthData){
    const  data = JSON.parse(localStorage.getItem('Auth'));
      if(data.isloggedIn){
        setUser(data)
      }
  }else{
    setUser(null)
  }
}, [])


// Form Type state
const [formType, setFormType] = useState(null);

//  Open Form According to the type
const openFormHandler = (type) => {
    setFormType(type);
};

// User LoggedIn userData State 
const [user, setUser] = useState(null);


// Login 
const login =(loginUser)=>{
  const signupUser = localStorage.getItem('Auth')? JSON.parse(localStorage.getItem('Auth')):null
  if(signupUser){
    if(signupUser.userEmail == loginUser.email && signupUser.userPassword == loginUser.password){
      signupUser.isloggedIn=true;
      localStorage.setItem('Auth',JSON.stringify(signupUser))
      alert('Login Successfully');
      loginUser.setEmail('');
      loginUser.setPassword('');
      openFormHandler(null);
      setUser(signupUser)
    }else{
      alert('Invalid Email or Password')
    }
  }else{
    alert("Account doesn't Exist!")
  }
  
}

// Set User Data in LocalStorage
const signup =(newUser)=>{
  localStorage.setItem('Auth',JSON.stringify(newUser));
  alert('Account Created Successfully')
  openFormHandler('login')
}
 
  // isloggedIn
  const isloggedIn = ()=>{
    if(user){
      navigate('/sell')
    }else{
      openFormHandler('login')
    }
  }



// DropDown
const [dropDown, setDropDown] = useState(false)




// Logout
const logout =()=>{
  const loginUser = localStorage.getItem('Auth')? JSON.parse(localStorage.getItem('Auth')):null
  if(loginUser){
     delete loginUser.isloggedIn
     localStorage.setItem('Auth',JSON.stringify(loginUser))
     setDropDown(false);
    setUser(null)
     navigate('/')
    return
  }
  return 
}



  return (
    <AuthContext.Provider value={{signup , login , user , formType, setFormType, openFormHandler,dropDown ,setDropDown , logout, isloggedIn}}  >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider