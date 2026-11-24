import React from 'react'
import './Team.css';
import Header from './Header';
import CTA from './CTA';
import Last_pat from './Last_pat';
import { Link } from 'react-router-dom';


function Team() {
  return (
    <div>
        <Header/>
        
        <div className='team_pat_2'>
            <h5>Our Team</h5>
            <div className='line_19'></div>
            <h1>Meet the Consultation Team</h1>

            <div className='team_pat_img'>
              
                  
              <div className='img_pat'>
                <div  className='man_1'>
                  <Link to={"/Man_1"}><img src='img/man_1.png' className='man_1_img'/></Link>
                  <h2>Masbha Uddin</h2>
                  <h5>Chief Executive Officer</h5>
                </div>

                <div  className='man_2'>
                  <Link to={"/Man_2"}><img src='img/man_2.png' className='man_2_img'/></Link>
                  <h2>S.Arnob</h2>
                  <h5>Chief Financial Officer</h5>
                </div>

                <div  className='man_3'>
                  <Link to={"/Man_3"}><img src='img/man_3.png' className='man_3_img'/></Link>
                  <h2>Jane Smith</h2>
                  <h5>Head of Risk Management</h5>
                </div>

                <div  className='man_4'>
                  <Link to={"/Man_4"}><img src='img/man_4.png' className='man_4_img'/></Link>
                  <h2>Al Mamun</h2>
                  <h5>Acquisitions Advisor</h5>
                </div>

                <div  className='man_5'>
                  <Link to={"/Man_5"}><img src='img/man_5.png' className='man_5_img'/></Link>
                  <h2>David Williams</h2>
                  <h5>Chief Technology Officer</h5>
                </div>

                <div  className='man_6'>
                  <Link to={"/Man_6"}><img src='img/man_6.png' className='man_6_img'/></Link>
                  <h2>Robert Brown</h2>
                  <h5>Chief Legal Officer</h5>
                </div>

                <div  className='man_7'>
                  <Link to={"/Man_7"}><img src='img/man_7.png' className='man_7_img'/></Link>
                  <h2>M.Steven</h2>
                  <h5>Chief Human Resources Officer</h5>
                </div>

                <div  className='man_8'>
                  <Link to={"/Man_8"}><img src='img/man_8.png' className='man_8_img'/></Link>
                  <h2>J.Anthony</h2>
                  <h5>Chief Product Officer</h5>
                </div>

               


              </div>
            </div>

        </div>
        <CTA/>
        <Last_pat/>



    </div>
  )
}

export default Team