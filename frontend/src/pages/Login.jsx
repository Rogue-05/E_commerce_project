import React,{useContext, useState} from "react";
import styles from './Login.module.css';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { UserContext } from "../../context/UserContext";

const LoginForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const {setUser}=useContext(UserContext)
  const navigate=useNavigate();


  async function handleSubmit(){
    try{
      const res=await axios.post("http://localhost:5555/api/auth/login",{email,password},{withCredentials:true});
      console.log("login Successful");
      setUser(res.data);
      setError(false);
      navigate("/")
      
    }catch (error) {
      setError(true)
      console.log(error);
    }
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <div className={styles.loginHeader}>
          <p className={styles.loginTitle}>Login</p>
        </div>

        <div className={styles.input}>
          <div>
            <input
              type="email"
              placeholder="Email"
              className={styles.inputField}
              onChange={(e)=>setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className={styles.inputField}
              onChange={(e)=>setPassword(e.target.value)}
            />
            <p className={styles.forgotPassword}>Forgot password?</p>
          </div>
        </div>

        <div className={styles.loginButton}>
        {error && <p className={styles.errorMessage}>Something Went Wrong</p>} {/* Display error message */}
          <button onClick={handleSubmit}>Login</button>
          <p>
            Don't have an account?
            <Link to='/SignUp'>
            <span className={styles.signupLink}>Signup</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
