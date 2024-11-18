import React, { useState } from 'react';
import styles from './SignUp.module.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleRegister = async () => {

    try {
      const res = await axios.post("http://localhost:5555/api/auth/signup", { username, email, password })
      setUsername(res.data.username);
      setEmail(res.data.email);
      setPassword(res.data.password)
      setError(false)
      navigate("/Login");
    } catch (error) {
      setError(true)
      console.log(error);
    }
  }

  return (
    <div className={styles.signupContainer}>
      <div className={styles.signupBox}>
        <div className={styles.signupHeader}>
          <p className={styles.signupTitle}>Signup</p>
        </div>

        <div className={styles.signupForm}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className={styles.inputField}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={styles.inputField}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={styles.inputField}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className={styles.errorMessage}>Something Went Wrong</p>} {/* Display error message */}
          <div className={styles.signupButton}>
            <button type="button" onClick={handleRegister}>Signup</button>
            <p>
              Already have an account?{' '}
              <Link to="/login" className={styles.loginLink}>
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signup;
