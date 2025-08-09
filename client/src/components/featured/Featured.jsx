import React, { useState } from "react";
import './featured.scss';
import{ useNavigate} from 'react-router-dom';

function Featured() {
  const [input,setinput]=useState("");
  const navigate=useNavigate();
  const handlesubmit=()=>{
    navigate(`gigs?search=${input}`);
  }
    return (
     [ 
      <div className="featured">
        <div className="container">
          <div className="left">
            <h1>
              Unlock top-notch <span>freelance</span> <br></br>
              <span>solutions</span> crafted for your business
            </h1>
            <div className="search">
              <div className="searchInput">
                <img src="/images/search.png" alt="" />
                <input type="text" placeholder='Try "building your app idea"' onChange={e=>setinput(e.target.value)} />
              </div>
              <button onClick={handlesubmit}>Search</button>
            </div>
            <div className="popular">
            <span>Popular Services:</span>
            <button onClick={e => navigate(`gigs?search=${e.target.innerHTML}`)}>UI Design</button>
            <button onClick={e => navigate(`gigs?search=${e.target.innerHTML}`)}>Web Dev</button>
            <button onClick={e => navigate(`gigs?search=${e.target.innerHTML}`)}>Branding</button>
            <button onClick={e => navigate(`gigs?search=${e.target.innerHTML}`)}>AI Tools</button>
          </div>

          </div>
        </div>
      </div>]
    );
  }
export default Featured;