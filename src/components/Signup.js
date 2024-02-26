import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const navigate=useNavigate();
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    function clearInputs(){
      setUsername("");
      setEmail("");
      setPassword("");
    }

    function handlePostUser(){
      axios.post("http://localhost:5000/api/signup",{username,email,password}).then((response)=>{
        console.log("response:",response)
        if(response.data.msg=="successfully created"){
          clearInputs();
          navigate("/login")
        }
      }).catch((err)=>{
        console.log("Error occured",err)
      })
    }
    
    function handleSignupSubmit(e){
        e.preventDefault();
        console.log(username,email,password);
        handlePostUser();
    }

  return (
    <div className='login-form-outer'>
      <form className='login-form-inner' onSubmit={handleSignupSubmit}>
        <h1 className='login-heading'>Signup form</h1>
        <label className='login-input-name'><FaUser />Username
          <input type='text' value={username} onChange={(e)=>{
            setUsername(e.target.value)
        }} placeholder='enter your username' required/>
       
        </label>
       
            <label className='login-input-name'> <MdEmail />Email
            <input type='email' value={email} onChange={(e)=>{
            setEmail(e.target.value)
        }} placeholder='enter your email' required/>
       </label>
       
            <label className='login-input-name'> <RiLockPasswordLine />Password
            <input type='password' onChange={(e)=>{
            setPassword(e.target.value) 
        }} placeholder='enter your password' value={password} required/>
     
     </label>
   <button className='login-button' type='submit'>Signup</button>
      
    
      </form>
    </div>
  )
}

export default Signup
