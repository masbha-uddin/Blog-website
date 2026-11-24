import React from 'react'
import './About.css';
import Header from './Header';
import FAQ_pat from './FAQ_pat';
import Last_pat from './Last_pat';
import { Link } from 'react-router-dom';

function About() {
  return (

  <div>

    <Header/>
    
     {/* 1st pat  */}
    <div className='body'>
        <div className='left_pat'>
          <h5>ABOUT US</h5>
          <div className='line'></div>
          <h1>Our Story</h1>

          <img alt='' src='img/img_3.png' className='img_1' />
        </div>

        <div className='right_pat'>
          <h1 className='title_text'>A thribing Business With Genuine Professiobal</h1>

          <ul className='manu_pat'>
            <li>Why Need<br/>Consultation</li>
            <li>Why Choose Us</li>
            <li>How It Works</li>

          </ul>
          
        </div>

    </div>

          {/* 2nd pat    */}
        <div className='animation_pat'>
          <h5>CLIENT</h5>
          <div className='line_3'>

          </div>

          <h1>Those Who Trusted Us</h1>

          <div className='carousel'>
            <div className='group'>
              <div className='card'><img src='img/logo_1.png'/></div>
              <div className='card'><img src='img/logo_2.png'/></div>
              <div className='card'><img src='img/logo_3.png'/></div>
              <div className='card'><img src='img/logo_4.png'/></div>
              <div className='card'><img src='img/logo_3.png'/></div>
            </div>
            
            <div aria-hidden className='group'>
              <div className='card'><img src='img/logo_1.png'/></div>
              <div className='card'><img src='img/logo_2.png'/></div>
              <div className='card'><img src='img/logo_3.png'/></div>
              <div className='card'><img src='img/logo_4.png'/></div>
              <div className='card'><img src='img/logo_3.png'/></div>
            </div>

          </div>

        </div>

          {/* 3rd pat  */}
        <div className='pat_3'>
          <div className='left_pat_2'>
           <h5>OUR HISTORY</h5>
           <div className='line_5'></div>
           <h1>Empowering businesses  with innovation</h1>
           <h6>At the core of every successful business lies the ability to adapt, innovate, and lead. We empower businesses by crafting transformative strategies that harness the latest technologies and insights, ensuring they stay ahead in a dynamic market. From streamlining operations to implementing groundbreaking solutions, our approach focuses on driving sustainable</h6>

           <button className='btn_4'>Contact Us</button>
           <div className='line_4'></div>

            <div className='section_father'>
              <div className='section_1'>
                <h1>95%</h1>
                <div className='line_s_1'></div>
                <h5>Customer Satisfaction</h5>
              </div>

              <div className='section_2'>
                <h1>50+</h1>
                <div className='line_s_2'></   div>
                <h5>Global Clients Served</h5>
              </div>

              <div className='section_3'>
                <h1>90%</h1>
                <div className='line_s_3'></div>
                <h5>Retention Rate</h5>
              </div>

            </div>

          </div>

          <div className='right_pat_2' >
            <img src='img/img_5.png' className='right_photo' />         
          </div>
          
        </div>

         {/* 4th pat  */}
        <div className='pat_4'>
           <h5>Our Values</h5>
           <div className='line_6'></div>
           <h1>Guiding Principles That Drive Our Success</h1>
            <div className='experiance'>
              <div className='left_pat_3'>
               <div className='setion_1'>
               <h3>Ethical Excellence</h3>
               </div>
               <div className='setion_2'>
               <h3>Collaborative Innovation</h3>
               </div>
               <div className='setion_3'>
               <h3>Client-First Approach</h3>
               </div>
               <div className='setion_4'>
               <h3>Integrity & Trust</h3>
               </div>
              </div>

              <div className='mid_pat'>
                 <img src='img/img_6.png'/>
              </div>

              <div className='end_pat'>
                  <h1>Guided by Values, Driven by Results</h1>
                  <h5>At Casho, our values empower us to transform challenges into opportunities. Join us on a journey where integrity, innovation, and collaboration pave the way for your success.</h5>
                  <button>Contact Us</button>
              </div>

            </div>
        </div>

        {/* 5th pat  */}
        {/* <div className='pat_5'>
          <div className='left_pat_5'>
             <h5>Review</h5>
             <div className='line_7'></div>
             <h1>What our Customer Say ?</h1>
             <h4>More than 99% customer satisfaction is our success.</h4>

             <div className='carousel_2'>
               <div className='card_2'><h3>Card 1</h3></div>
               <div className='card_2'><h3>Card 2</h3></div>
               <div className='card_2'><h3>Card 3</h3></div>
               <div className='card_2'><h3>Card 4</h3></div>
               <div className='card_2'><h3>Card 5</h3></div>
             </div>
            
          </div>

          <div className='right_pat_5'>
             <img src='img/img_8.png'/>
          </div>
        </div> */}


        {/* 6th pat  */}
        <div className='pat_6'>
          <h5>Our Values</h5>
          <div className='line_8'></div>
          <h1>Meet the consultation team</h1>
          <Link to={'/Team'}><button className='btn_6'>View All</button></Link>
          
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


          </div>
        </div>
         
        {/* 7th pat  */}
        <FAQ_pat/>


        {/* 8th pat  */}
        <Last_pat/>

     




        


  </div>

  )
}

export default About