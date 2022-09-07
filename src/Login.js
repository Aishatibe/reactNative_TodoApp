import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from './firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  confirmPasswordReset,
  FacebookAuthProvider,
} from 'firebase/auth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();
  };

  const register = (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(email, password)
     
      };
  };
  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src="" />
      </Link>
      <div>
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={signIn}>
            Sign in
          </button>
        </form>
        <button type="submit" onClick={register}>
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Login;
