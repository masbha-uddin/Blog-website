import React from 'react'
import './Man_3.css'
import Header from './Header'
import FAQ_pat from './FAQ_pat';
import Last_pat from './Last_pat';
import { Link } from "react-router-dom";

function Man_3() {
  return (
    <div>
        <Header/>
      
          <div className='Pat_1'>
           <h5>Team</h5>
           <div className='line_9'></div>
           <h1>Team Member</h1>

           <div className='team_pat'>

            <div className='left_pat_4'>
                <img src='img/man_3.png'/>
            </div>
           
           
            <div className='right_pat_4'>
                <h1>Jane Smith</h1>
                <h5>Head of Risk Management</h5>
                <h6>As the Chief Head of Risk Management of GlobalTech Solutions, Jane Smith brings over 12 years of experience in operational management and strategic planning. Her leadership has been pivotal in streamlining processes, enhancing team productivity, and driving sustainable growth. Jane’s expertise in optimizing operations ensures that GlobalTech Solutions consistently delivers top-tier services to its clients..<br/> <br/>

                Jane Smith is a firm believer in the power of people. He is committed to creating a work environment where every team member feels empowered, valued, and motivated to achieve their full potential. He leads by example, advocating for transparency, integrity, and collaboration across all levels of the company.</h6>

                <div className='line_10'></div>
                <h4>Follow Me :</h4>

                <div className='logo_pat'>
                    <Link><img src='img/facebook.png' className='facebook'/></Link>
                    <Link><img src='img/instagram.png' className='instagram'/></Link>
                    <Link><img src='img/telegram.png' className='telegram'/></Link>
                    <Link><img src='img/whatsapp.png' className='whatsapp'/></Link>
                </div>
            </div>

            </div>

        </div>

        <FAQ_pat/>
        <Last_pat/>

        
    </div>
  )
}

export default Man_3