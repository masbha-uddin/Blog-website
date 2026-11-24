import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    
    <div>


        <div className='header_pat'>
    


        <img src='img/log.png' className='logo'/> 
        <ul className='manu'>


            <Link to={"/About"}><li>ABOUT</li></Link>
            <Link to={"/Services"}><li>SERVICES</li></Link>
            <Link to={"/Case_study"}><li>CASE STUDY</li></Link>
            <Link to={"/Blogs"} ><li>BLOGS</li></Link>
            <Link to={"/Team"}><li>TEAM</li></Link>
            <Link to={"Review"}><li>REVIEW</li></Link>
        

        </ul>

       {/* <Link to={"/Menu"}><img src='img/fourDot.png' className='fourDot'/></Link>  */}

        <button className='btn'>Contact Us</button>
        </div>

    </div>
  )
}

export default Header