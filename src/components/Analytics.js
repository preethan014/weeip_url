import React, { useState } from "react";
import { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Analytics = () => {
  const [data,setUrldata]=useState([]);
  const navigate=useNavigate();
  useEffect(()=>{
    fetchData();
    if(!localStorage.getItem("userid")){
      navigate("/")
    }
},[])
  async function fetchData(){
      await axios.post("http://127.0.0.1:5000/api/urls",{userid:localStorage.getItem("userid")}).then((res)=>{
       setUrldata(res.data.data);
      }).catch((error)=>{
        console.log(error);
      })
  }
console.log(data);
  
  const [deltab, setDelTab] = useState(false);
  const [deliddetails, setdeliddetails] = useState({});

  let k = 0;
  function handledeletetab() {
    setDelTab(!deltab);
  }

  function handledelete(urlid) {
    let details = data.filter((each) => {
      return each.urlid === urlid;
    });
    setdeliddetails(details[0]);
    handledeletetab();
    console.log(urlid);
  }

  function handleyes() {
    console.log(deliddetails);
    console.log("deleted succesfully");
    handledeletetab();
    setdeliddetails({});
  }
  function handlecancel() {
    console.log("delete cancelled !");
    handledeletetab();
    setdeliddetails({});
  }
  return !deltab ? (
    <div className="analytics-outer">
      <h1>Analytics</h1>
      <div className="analytics-table-outer">
        <table className="analytics-table-main-outer">
          <thead >
            <tr className="table-thead">
              <th>S.No</th>
              <th>Original URL</th>
              <th>Short URL</th>
              <th>Clicks</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {data.map((each) => {
              const { urlid, originalurl, redirecturl, clicks } = each;
              return (
                <tr className="table-data table-thead" key={urlid}>
                  <td>{++k}</td>
                  <td>{originalurl}</td>
                  <td>{redirecturl}</td>
                  <td>{clicks}</td>
                  <td onClick={() => handledelete(urlid)}>
                    <MdDelete />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  ) : (
    <div className="delete-outer">
      <div className="delete-inner">
        <p>Are you sure to delete {deliddetails.originalurl}?</p>
        <button onClick={handleyes}>yes</button>
        <button onClick={handlecancel}>cancel</button>
      </div>
    </div>
  );
};

export default Analytics;
