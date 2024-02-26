import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Home = () => {
  const navigate=useNavigate();
  const [url, setUrl] = useState("");
  function handleUrl(e) {
    e.preventDefault();
    if(!localStorage.getItem("userid")){
      navigate("login");
    }
    axios.post("http://127.0.0.1:5000/api/url",{userid:`${localStorage.getItem("userid")}`,url:url})
    console.log(url);
    setUrl("");
  }
  return (
    <div className="home-outer">
      <h1>{localStorage.getItem("name")}</h1>
      <div className="home-inner-text">
        Create short links.<br/> Share them anywhere. <br/>Track what's working, and
        what's not. <br/>All inside the Weeip Analytics Platform.
      </div>
      <div className="home-form-outer">
        <form className="form-main-outer"onSubmit={handleUrl}>
          <label className="form-text">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="enter or paste your url"
              required
            />
            <button className="form-button"type="submit">Submit</button>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Home;
