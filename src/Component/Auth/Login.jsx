import style from "./Login.module.css";
import loginlogo from "../../assets/olxLogo.png";
import { IoClose } from "react-icons/io5";
import { useState,useContext } from "react";
import {AuthContext} from '../../Context/AuthProvider'
const Login = () => {

// AuthContext
const {login,openFormHandler} = useContext(AuthContext)

// Login state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitFormHandler = (e) => {
    e.preventDefault();
    if (password.length > 7) {
      const user ={
        email,
        password,
        setEmail,
        setPassword,
      }
    login(user);
    } else {
      alert("Password length must be 8");
    }
  };

  return (
    <div className={style.loginSection}>
      <form className={style.loginForm} onSubmit={submitFormHandler}>
        <IoClose
          className={style.closeIcon}
          onClick={() => openFormHandler(null)}
        />
        <img src={loginlogo} alt="loginLogo" />
        <h2>Login</h2>

        <div className={style.inputField}>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id="email"
            placeholder="Enter email "
            required
          />
        </div>

        <div className={style.inputField}>
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="password"
            placeholder="Enter password "
            required
          />
        </div>

        <button type="submit">Login</button>
        <p
          className={style.newAccountText}
          onClick={() => openFormHandler("signup")}
        >
          Create a new OLX account
        </p>
      </form>
    </div>
  );
};

export default Login;
