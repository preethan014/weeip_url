import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [checkUser, setCheckUser] = useState(false);
function hcheckUser(){
  if(!localStorage.getItem('userid')){
    navigate('login')
  }
}
function RenderStart(){
  console.log("rendering")
}
  function handleLogout() {
    localStorage.removeItem("userid");
    localStorage.removeItem("name");
    setCheckUser(false);
  }
  useEffect(() => {
    if(localStorage.getItem('userid')){
      setCheckUser(true);
    }
    RenderStart();
  }, []);
  const navigate = useNavigate();
  function handleHome() {
    navigate("/");
  }
  return (
    <div className="navbar-outer">
      <div className="navbar-inner">
        <div className="navbar-logo-outer">
          <h2 onClick={handleHome}>Wee-Ip</h2>
          <p>Short Link, Easy Click</p>
        </div>
        <div className="navbar-right-outer">
        <div onClick={hcheckUser} className="navbar-analytics-outer">
          <NavLink to="analytics">analytics</NavLink>
        </div>
        <div className="navbar-auth-outer">
          {checkUser ? (
            <div className="navbar-auth-logout" onClick={handleLogout}>logout</div>
          ) : (
            <div className="navbar-auth-2">
              <NavLink to="login">Login</NavLink>
              <NavLink to="signup">Signup</NavLink>
            </div>
          )}
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
