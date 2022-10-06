import React from 'react'
import styled from 'styled-components';
import { AiFillMail} from 'react-icons/ai';
import {FaFacebookF, FaTwitter , FaLinkedin , FaPinterestP, FaUserAlt} from 'react-icons/fa';
import { social } from './top2Data';
import './top.css'
import { Link } from 'react-router-dom';

export default function() {

  return (
    <section className='toppest'>
            <div className="left">
                <div className='toppest-header'>
                       <div className='header-mail'><span><AiFillMail/></span>hello@contat.com</div>
                       <div className='header-offer'>Free Shipping for all Order of $99</div>
                       <div></div>
                </div>
            </div>
            <div  className="center">
             <div className='social-icons'>
                        {social.map((socialIcon) => {
                            const { id, url, icon } = socialIcon;
                            return (
                            <div key={id}>
                            <Link to={url}>{icon}</Link>
                            </div>
                        ); 
                        })}
                    </div>
            </div >
            
            <div  className="right">
                <div className="select">
                    <select className='Language'>
                            <option selected>Language</option>
                            <option value="1">English</option>
                            <option value="2">Bangla</option>
                    </select> 
                </div>
            </div >
        
    </section>
  )
}


// Using style componend instead of using CSS