import  { useEffect, useState } from 'react'
import { app,auth } from '../../firebase/firebase'
import './InstagramLogin.css'
import instLogo from './../../Photos/Instagram/InstagramDark.png'

import { doCreateUserWithEmailPassword,doSendPasswordReset,doSignInWithEmailAndPassword,doSignInWithGoogle } from "../../firebase/auth"
import {useAuth} from './../Context/authContext'
import InstagramMain from './InstagramMain'

export default function InstagramLogin({logined,setLogined,user,setUser}) {

  const [haveAc,setHaveAc] = useState(true)
  const [isSiging,setIsSiging] = useState(true)
  
  const [name,setName] = useState('')
  const [nameUser,setNameUser] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [errorMes,setErrorMes] = useState('')



  const toLoginOrRegis = ()=>{
    setHaveAc(!haveAc)
  }

  const loginTo = async (e) =>{
    e.preventDefault()
    if(!isSiging){
      setIsSiging(true)

      await doSignInWithEmailAndPassword(email,password)
    }

  }

  const onGoogleSignIn = (e) =>{
    e.preventDefault()
    if(!isSiging){
      setIsSiging(true)

      doSignInWithGoogle().catch(err =>{
        setIsSiging(false)
      })
    }
  }

  const onChangeUserName = (e)=>{
    const text = e.target.value.toLowerCase()
    setNameUser(text)
    
  }

  const onChangeName = (e)=>{
    setName(e.target.value)
    console.log(e.target.value);
    
  }

  const onChangeEmail = (e)=>{
    const email = e.target.value.toLowerCase()
    setEmail(email)
    console.log(e.target.value);
    
  }

  const onChangePassword = (e)=>{
    setPassword(e.target.value)
    console.log(e.target.value);
    
  }

  const registerTo = async (e) =>{
    e.preventDefault()
    setUser({
    userName: nameUser,
    userFullName: name,
    userEmail: email,
    userPassword: password
  })
  if(!isSiging){
      setIsSiging(true)
      setLogined(true)
      await doCreateUserWithEmailPassword(email,password)
    }
  }

  const resetTo = () =>{
    // doSendPasswordReset(email)
    
  }
  console.log(auth.currentUser);

  return (
    <>
    
      {
        !isSiging ? 
          <>{haveAc ?
            <div className='Login'>
                <img src={instLogo} alt="" className="instLoginLogo" />
                <div className="auth">
                  <input type="text" placeholder='Login or email..' />
                  <input type="password" placeholder='Password..' />
                  <p className='forgotPassword' onClick={resetTo}>Forgot Password</p>
                  <button className='loginIn' onClick={loginTo}>Login In</button>
                  <div className="signWhith" onClick={onGoogleSignIn}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                    </svg>
                    Login In with Google
                  </div>
                  <p className="toSignUp">
                    Don't have an account ?  
                    <span className='btnToSignUp' onClick={toLoginOrRegis}> Sign Up</span>
                  </p>
                </div>
            </div>
            :
            <div className="Register">
              <img src={instLogo} alt="" className="instLoginLogo" />
                <div className="auth">
                  <input type="text" placeholder='Username' onChange={onChangeUserName} value={nameUser}/>
                  <input type="text" placeholder='Full name' onChange={onChangeName} value={name}/>
                  <input type="text" placeholder='Email' onChange={onChangeEmail} value={email} />
                  <input type="password" placeholder='Password' onChange={onChangePassword} value={password} />
                  <button className='loginIn' onClick={registerTo}>Sign Up</button>
                  <p className="toSignUp">
                    Do have an account ?  
                    <span className='btnToSignUp' onClick={toLoginOrRegis}> Sign In</span>
                  </p>
                </div>
            </div>
        } </> : <InstagramMain user={auth.currentUser} setIsSiging={setIsSiging} />
        
      }
        
    </>
  )
}
