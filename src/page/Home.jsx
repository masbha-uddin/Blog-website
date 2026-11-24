import React from 'react'
import './Home.css';
import Header from './Header';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div>
        
      <Header/>
   
       <div className='frents'>
         <img src='img/body.png' className='body'/>
         <div className='child'>
            <h1 className='text'>
              Innovating Solutions,<br/> Driving Success
            </h1>
            <Link to={"/ReadMore"}><button className='readMore'>Read More</button></Link>
            <button className='services'>Our Services</button>
           
           <div className='tite_1'>
              <h1>500+</h1>
              <div className='line_1'></div>
              <h5>Clients successfully partnered <br/> with businesses worldwide.</h5>
           </div>

           <div className='tite_2'>
              <h1>100+</h1>
              <div className='line_2'></div>
              <h5>Industries: Expertise across <br/>diverse sectors.</h5>
           </div>

         </div>
       </div>

    </div>
  )
}

export default Home;