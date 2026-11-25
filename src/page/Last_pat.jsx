import React from 'react'
import './Last_pat.css'
import { Link } from 'react-router-dom';


function Last_pat() {
  return (
    <div>
        <div className='main_pat'>
            <div className='left_pat_3'>
                <h4>Whether it's optimizing operations,<br/> expanding markets, or redefining <br/> strategy, Casho is your partner for<br/> success.</h4>
                <h6>Newsletter</h6>
                <input type='email' placeholder='Enter your email'/>
                <button >▶</button>
                <div className='line_14'></div>
                <ul className='cetagori'>
                    <li>Changelog</li>
                    <li>Licencing</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>

                </ul>

            </div>

            <div className='right_pat_3'>
                <h5 className='pages'>Pages</h5>
                

                <ul className='cetagori_2'>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Case Study</li>
                    <li>Team</li>
                </ul>

                <h5 className='Resources'>Resources</h5>
                <ul className='cetagori_3'>
                    <li>Blogs</li>
                    <li>Reviews</li>
                    <li>Contact Us</li>
                </ul>

                <h5 className='Location'>Location</h5>
                <h4 className='business'>123 Business Street, Suite 456 <br/> New York, NY 10001, USA</h4>


                <h5 className='Follow_us'>Follow Us</h5>
                <div className='img_pat_3'>
                    <Link><img src='img/facebook_2.png' className='facebook'/></Link>
                    <Link><img src='img/instagram_3.png' className='instagram'/></Link>
                    <Link><img src='img/telegram_1.png' className='telegram'/></Link>
                    <Link><img src='img/whatsapp_2.png' className='whatsapp'/></Link>
                </div>

                <h5 className='Contact_us'>Contact us</h5>
                <h5 className='number'>+001831048934</h5>
                <h5 className='gmail'>masbha192@gmail.com</h5>

            </div>

            <div className='line_15'></div>

            <img src='img/log.png' className='last_pat_logo' />

            <h4 className='last_pat_text'>© 2025 Casho-Work by Onmix. Made with  Webflow.Webflow</h4>


        </div>
    </div>
  )
}

export default Last_pat