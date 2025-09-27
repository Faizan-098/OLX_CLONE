import React, { useContext } from 'react'
import Home from './Pages/Home'
import { Routes, Route } from 'react-router'
import Detailed from './Pages/Detailed'
import Sell from './Pages/Sell'
import Navbar from './Component/navbar/Navbar'
import Footer from './Component/Footer/Footer'
import Login from './Component/Auth/Login'
import SignUp from './Component/Auth/SignUp'
import { AuthContext } from './Context/AuthProvider'
import MyAds from './Pages/MyAds'
const App = () => {
  // AuthContext 
  const { formType } = useContext(AuthContext);

  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* LoginForm */}
      {formType == "login" && (
        <Login />
      )}
      {formType == "signup" && (
        <SignUp />
      )}
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detailed" element={<Detailed />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/myAds" element={<MyAds />} />
      </Routes>
      {/* Footer */}
     <Footer/>
    </>
  )
}

export default App