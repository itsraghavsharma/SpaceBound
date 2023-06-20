import React, { useEffect } from 'react'
import './Login.scss'
import loginDisplay from "../../assets/sb.png"

import googleIconBlack from "../../assets/google-icon-black.svg"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { auth, db, provider } from '../../services/firebase'
import { doc, getDoc } from 'firebase/firestore'
import { teamDataConverter } from '../../models/UserModel'

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const email = user.email;
        const docRef = doc(db, "users", email).withConverter(teamDataConverter);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          var userData = docSnap.data();
          // if (userData !== 'NA') {
          //   navigate('/library');
          // }else{
          //   navigate('/accountsetup');
          // }
        }
      } 
    })
  });

  const handleLogin = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {};
    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }
    await signInWithEmailAndPassword(auth, data['email'], data['password']).then((userCredential) => {
      const user = userCredential.user;
      
    })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage)
      });
  }

  const handleContinueWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const currentUser = result.user;
        const docRef = doc(db, "users", currentUser.email).withConverter(teamDataConverter);
        const docSnap = await getDoc(docRef);
        const data = docSnap.data();
        if (!docSnap.exists()) {
          alert("Please use team leader's email to login")
        }
        else{

          navigate('/')
          
        }

      }).catch((error) => {
        const errorMessage = error.message;
      

        alert(errorMessage)

      });
  }


  return (
    <div className='login'>
      <div className='left-content'>
        <div className='row'>

        </div>
        <div className='title'>Welcome Back</div>
        <div onClick={handleContinueWithGoogle} className='continue-with-google'>
          <img src={googleIconBlack} alt="Continue with google" />
          <div>Continue with google</div>
        </div>
        <div className='or'>
          or

        </div>

        <form onSubmit={handleLogin}>
          <input className='input-feild' name='email' type="email" placeholder='Enter your email' />
          <div className='password-section'>
            <input className='input-feild' name='password' type={showPassword ? 'text' : 'password'} placeholder='Enter your password' />

          </div>
          <button className='login-button'>
            Log In
          </button>
        </form>
        <div className="center">

        </div>

      </div>
      <div className='right-content'>
        <img className='login-display' src={loginDisplay} alt="Login display image" />

      </div>
    </div>
  )

}

export default Login