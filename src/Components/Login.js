import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const Signin = (e) => {
    //e.preventDefualt();
    try {
      const user = signInWithEmailAndPassword(auth, email, password).then(
        navigate("/")
      )
      console.log(auth.currentUser);
      //logout();
      
    } catch (error) {

      console.log(error.message);
    }
  };
  const Register = () => {
    //e.preventDefualt();
    try {
      const user = createUserWithEmailAndPassword(auth, email, password).then(navigate('/'))
      
      console.log(auth.currentUser);
      
    } catch (error) {
      console.log(error.message);
    }

  };

 
  return (
    <div className="Login">
      <Link to="/">
        <img
          className="Login__image"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="amazon_logo"
        />
      </Link>
      <div className="Login__container">
        <form>
          <h1>Sign-in</h1>
          <h5>Email</h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=" Enter your Email"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder=" Enter your password"
          />
          <button type="submit" onClick={Signin}>
            Sign In
          </button>
          <p>
            By continuing, you agree to the{" "}
            <Link to="/">Fake cloned Amazon's</Link> Conditions of Use and
            Privacy Notice.
          </p>
        </form>
      </div>
      <div className="Login__container2">
        <p>New to Amazon?</p>
        <button onClick={Register}>Create Your Amazon Account</button>
      </div>
    </div>
  );
}

export default Login;
