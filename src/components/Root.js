import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
const Root = () => {
  
  return (
    <div>
       <Navbar/>
<div className='outlet-outer'>
    <Outlet/>
</div>
      
    </div>
  )
}

export default Root
