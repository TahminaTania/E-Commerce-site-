import React from 'react';
import './top.css'
import { AiFillMail} from 'react-icons/ai';
import {FaFacebookF, FaTwitter , FaLinkedin , FaPinterestP, FaUserAlt} from 'react-icons/fa';
import { social } from './Top2/top2Data';
// import Top2 from './Top2';

export default function Top() {
    
  return (
    <div className='top'>
        <div className='top-sections'>
            <div className='container'>
                <div className='row'>
                  <div className='col-md-12'>
                      <div className='row pt-2'>        
                            <div className='col-md-6'>
                                <div className='left-header'>
                                    <ul>
                                        <li className='header-mail'> <AiFillMail/> hello@colorlib.com</li>
                                        <li>Free Shipping for all Order of $99</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='right-header'>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <div className='row'>
                                                <div className='col-md-4'>
                                                   <ul className='social-icons'>
                                                       {social.map((socialIcon) => {
                                                          const { id, url, icon } = socialIcon;
                                                          return (
                                                          <li key={id}>
                                                            <a href={url}>{icon}</a>
                                                           </li>
                                                        );
                                                      })}
                                                    </ul>
                                                </div>
                                                <div className='col-md-4'>
                                                   <select class="form-select-sm mt-1">
                                                        <option selected>Language</option>
                                                        <option value="1">English</option>
                                                        <option value="2">Bangla</option>
                                                    </select>
                                                
                                                </div>
                                                <div className='col-md-4'> <FaUserAlt/> Log in</div>
                                            </div>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                      </div>    
                 </div>
                </div>
            </div>
        </div>
    </div>

                    
  )
}
