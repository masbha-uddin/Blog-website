import React from 'react'
import './Blogs.css'
import Header from './Header'
import CTA from './CTA'
import Last_pat from './Last_pat'
import { Link } from "react-router-dom";


function Blogs() {
  return (
    <div>
      <Header/>
      
      <div className='Blogs_pat'>

        <h5>BLOG</h5>
        <div className='line_18'></div>
        <h1>Insights & Resources</h1>

        <Link to={'/Blog_1'}>
        <div className='Blogs_pat_1'>
            <img src='img/img_11.png'/>
            <h3>January 10,2025</h3>
            <h4>Organizational Development</h4>
            <h2>Effective Change Management Guiding Your Team Through Transition</h2>

        </div>
        </Link>
        
        <Link to={'/Blog_2'}>
        <div className='Blogs_pat_2'>
            <img src='img/img_12.png'/>
            <h3>January 10,2025</h3>
            <h4>Financiai Management</h4>
            <h2>Financial Health Key Indicators Every Business Should Monitor</h2>
        </div>
        </Link>
        
        <Link to={'/Blog_3'}>
        <div className='Blogs_pat_3'>
            <img src='img/img_13.png'/>
            <h3>January 9,2025</h3>
            <h4>Technology & Innovatin</h4>
            <h2>Tech-Driven Growth How Digital Transformatin Can Revolutionize Your Bussiness</h2>
            
        </div>
        </Link>
        
        <Link to={'/Blog_4'}>
        <div className='Blogs_pat_4'>
            <img src='img/img_14.png'/>
            <h3>January 9,2025</h3>
            <h4>Expansion</h4>
            <h2>Maximizing Market Expansion Strategies for Global Growth</h2>
            
        </div>
        </Link>
        
        <Link to={'/Blog_5'}>
        <div className='Blogs_pat_5'>
            <img src='img/img_15.png'/>
            <h3>January 8,2025</h3>
            <h4>Technology</h4>
            <h2>Digital Transformation How Technology is Shaping the Future of Business</h2>
            
        </div>
        </Link>
        
        <Link to={'/Blog_6'}>
        <div className='Blogs_pat_6'>
            <img src='img/img_19.png'/>
            <h3>January 8,2025</h3>
            <h4>Finance</h4>
            <h2>The Role of Tax Planning in Achieving Financial Health</h2>
            
        </div>
        </Link>

      </div>
      <CTA/>
      <Last_pat/>



    </div>
  )
}

export default Blogs