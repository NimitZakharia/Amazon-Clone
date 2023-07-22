import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
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
          <input value={email} onChange={e=>setEmail(e.target.value)} placeholder=" Enter your Email"/>
          <h5>Password</h5>
          <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder=" Enter your password"/>
          <button type="submit">Sign In</button>
          <p>By continuing, you agree to the <Link to="/">Fake cloned Amazon's</Link> Conditions of Use and Privacy Notice.</p>
        </form>
      </div>
      <div className="Login__container2">
        <p>New to Amazon?</p>
        <button>Create Your Amazon Account</button>
      </div>
    </div>
  );
}

export default Login;
