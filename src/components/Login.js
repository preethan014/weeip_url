import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { render } from '@testing-library/react';
const Login = () => {
  const navigate=useNavigate();
  const[username,setUsername]=useState("");
  const[password,setPassword]=useState("");
  const[displayerrors,setdisplayerrors]=useState({
    password:false,
    account:false
  })
  const [messgaeblinker,setmessageblinker]=useState(true);
  function messageBlinker(){
    setTimeout(()=>{
      console.log("activated")
      setmessageblinker(true);
    },3000)
  }
 function handleGetLogin(){
    axios.post('http://127.0.0.1:5000/api/login',{username,password})
    .then((res)=>{
      
      if(res.data.msg==="valid user"){
        console.log(res.data);
        localStorage.setItem("userid",`${res.data.userdata._id}`)
        localStorage.setItem("name",`Hello ${res.data.userdata.username}`);
        return navigate("/");
      }
      else if(res.data.msg==="password wrong"){
        setmessageblinker(!messgaeblinker);
        messageBlinker();
        setdisplayerrors({
          ...displayerrors,
          password:!displayerrors.password
        })

      }
      else if(res.data.msg==="account not found"){
        setdisplayerrors({
          ...displayerrors,
          account:!displayerrors.account
        })

      }
    })
    .catch((err)=>{
      console.log("error",err)
    })
   
  }
  
  

  function handleLogin(e){
    e.preventDefault();
    console.log(username,password);
    handleGetLogin();
  }
  return (
    <div className='login-form-outer'>
      <form className='login-form-inner' onSubmit={handleLogin}>
        <h1 className='login-heading'>Login Form</h1>
      <label className='login-input-name'><FaUser />Username:
        <input value={username} placeholder="enter your name" onChange={(e)=> setUsername(e.target.value)} type="text" />
      </label>
      <label className='login-input-password'><RiLockPasswordLine />Password:
        <input value={password} placeholder="enter your password" onChange={(e)=> setPassword(e.target.value)} type="password" />
      </label>
     {!messgaeblinker?<h1 className='login-blinker'>please check your username or password</h1>:""}
      <button className='login-button' type='submit'>Login</button>
    </form>
    </div>
  )
}

export default Login
