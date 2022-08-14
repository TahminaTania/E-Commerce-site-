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
                    <ul>
                       <li className='header-mail'> <AiFillMail/> hello@colorlib.com</li>
                       <li>Free Shipping for all Order of $99</li>
                    </ul>
                </div>
            </div>
            <div  className="center ">
             <ul className='social-icons'>
                        {social.map((socialIcon) => {
                            const { id, url, icon } = socialIcon;
                            return (
                            <li key={id}>
                            <Link to={url}>{icon}</Link>
                            </li>
                        ); 
                        })}
                    </ul>
            </div >
            
            <div  className="right">
                <div className="select">
                    <select className='Language'>
                            <option selected>Language</option>
                            <option value="1">English</option>
                            <option value="2">Bangla</option>
                    </select> 
                </div>
                <div className='logIn'>
                  <span><a href='#'><FaUserAlt/> Log in</a></span> 
                </div>
            </div >
        
    </section>
  )
}


// Using style componend instead of using CSS