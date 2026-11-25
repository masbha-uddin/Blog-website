import React from 'react'
import './Case_study.css'
import Header from './Header';
import FAQ_pat from './FAQ_pat';
import Last_pat from './Last_pat';




function Case_study() {
  return (
    <div>
      <Header/>
        <div className='case_study_pat'>
            
            <h4>Success Stories</h4>
            <div className='line_17'></div>
            <h1>Case Studies</h1>

            
            <div className='body_1'>
              <img src='img/logo_img_1.png'/>
              <h4>Customer Experience | February 2024 </h4>
              <h2>Transforming AutoTrend Motors' Customer Journey for Personalized Engagement</h2>

            </div>

            <div className='body_2'>
              <img src='img/logo_img_2.png'/>
              <h4>Finance | June 2024 </h4>
              <h2>Achieving Corporate Tax Optimization for PrimeTex Solutions' Multinational Clients</h2>

            </div>

            <div className='body_3'>
              <img src='img/logo_img_3.png'/>
              <h4>Finance | March 2024 </h4>
              <h2>Maximizing Investment Strategies for FinSecure Investments' Client Portfolios</h2>

            </div>
                   
            <div className='body_4'>
              <img src='img/logo_img_4.png'/>
              <h4>Technology | November 2024 </h4>
              <h2>Empowring GlobalTech Solution to Secure Market Leadership</h2>

            </div> 

            <div className='body_5'>
              <img src='img/logo_img_5.png'/>
              <h4>Expansion | April 2024 </h4>
              <h2>Breaking New Ground in Internation Markets for SolarTech Innovation</h2>

            </div> 

            <div className='body_6'>
              <img src='img/logo_img_6.png'/>
              <h4>Tochnology | May 2024 </h4>
              <h2>Driving Growth Throught a Modernized eCommerco Platform for eCommercePro</h2>

            </div> 
  

        </div>

        <FAQ_pat/>
        <Last_pat/>







    </div>
  )
}

export default Case_study