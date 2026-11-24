import React from 'react'
import './Services.css'
import Header from './Header';
import FAQ_pat from './FAQ_pat'
import CTA from './CTA';
import Last_pat from './Last_pat';


function Services() {
  return (
    <div>
      <Header/>

      <h5>What We Do</h5>
      <line className='line_15'></line>
      <h1>Our Services</h1>

      <div className='services_pat'>

        <div className='services_pat_1'>
          <div className='services_img_pat_1'>
              <img src='img/tir_img.png'/>
          </div>

          <div className='services_text_pat_1'>
            <h4>Business Strategy Development</h4>
            <h6>Achieve chrity and drection with our custom designed strategies. We analyze your goals market trends and competition to create a roadmap for sustained growth.</h6>
          </div>

        </div>

        <div className='services_pat_2'>
          <div className='services_img_pat_2'>
              <img src='img/text_img.png'/>
          </div>

          <div className='services_text_pat_2'>
            <h4>Operational Excellence</h4>
            <h6>Streamline your processes. improve efficiency.and reduce costs.Our team helps you implement systems that drive seamiess operation and measurable results.</h6>

          </div>
          
        </div>

        <div className='services_pat_3'>
          <div className='services_img_pat_3'>
              <img src='img/valu_img.png'/>
          </div>

          <div className='services_text_pat_3'>
            <h4>Financial Advisory</h4>
            <h6>Optimize your financial performance with expert insights and planning. From budgeting to investment strategies. we ensure your business remains financiall healthy.</h6>
            

          </div>
          
        </div>

        <div className='services_pat_4'>
          <div className='services_img_pat_4'>
             <img src='img/mayke_img.png'/>
          </div>

          <div className='services_text_pat_4'>
            <h4>Market Expansion</h4>
            <h6>Unlock new markets and opportunities with our indepth market reserch and expansion strategies. We help you scale while minimizing risks.</h6>

          </div>
          
        </div>

        <div className='services_pat_5'>
          <div className='services_img_pat_5'>
              <img src='img/setting_img.png'/>
          </div>

          <div className='services_text_pat_5'>
            <h4>Digital Transformation</h4>
            <h6>Modernize your business with cutting-edge digital solution. We help you integrate technology to stay competitive and enhance customer experiences.</h6>

          </div>
          
        </div>

        <div className='services_pat_6'>
          <div className='services_img_pat_6'>
             <img src='img/message_img.png'/>
          </div>

          <div className='services_text_pat_6'>
            <h4>Tax Planning</h4>
            <h6>Navigating the complexities of taxation can be challenging, but with our expert tax planning services, you can confidently optimize your financial strategies.</h6>

          </div>
          
        </div>

      </div>
      

      <FAQ_pat/>
      <CTA/>
      <Last_pat/>
       
    </div>
  )
}

export default Services