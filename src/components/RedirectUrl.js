import React, { useEffect } from 'react'
import axios from "axios";
const RedirectUrl = () => {
    function handleredirect(){
        axios.get('http://127.0.1:5000/541')
        .then((res)=>{
            console.log(res)
        }).catch((error)=>{
            console.log(error)
        })
    }
    useEffect(()=>{
handleredirect();
    },[])
   
    
       
    
  return (
    <div>
      hello
    </div>
  )
}

export default RedirectUrl
