import React from 'react';
import { FaPinterestP, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import logo from '../Designs/Top2/logo.webp';
import './Footer.css'

export default function Footer() {
  return (
    <section className='footer mt-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='row'>
                        <div className='col-md-4 footer-info'>
                            <img src={logo}></img>
                            <div>Address: 60-49 Road 11378 New York</div>
                            <div>Phone: +65 11.188.888</div>
                            <div>Email: hello@colorlib.com</div>
                        </div>
                        <div className='col-md-4'>
                            <div className='row footer-info'>
                            <h6>Useful Links</h6>
                                <div className='col-md-6'>
                                    <div className=' footer-info'>
                                        <ul>
                                            <li><a href='#'>About Us</a></li>
                                            <li><a href='#'>About Our Shop</a></li>
                                            <li><a href='#'>Secure Shopping</a></li>
                                            <li><a href='#'>Delivery infomation</a></li>
                                            <li><a href='#'>Privacy Policy</a></li>
                                            <li><a href='#'>Our Sitemap</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                  <div className=' footer-info'>
                                       <ul>
                                            <li><a href='#'>Who We Are</a></li>
                                            <li><a href='#'>Our Services</a></li>
                                            <li><a href='#'>Projects</a></li>
                                            <li><a href='#'>Contact</a></li>
                                            <li><a href='#'>Innovation</a></li>
                                            <li><a href='#'>Testimonials</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='footer-info'>
                                <h6>Join Our Newsletter Now</h6>
                                <p>Get E-mail updates about our latest shop and special offers.</p>
                                <div className='subscribe'>
                                </div> 
                                <div className='social-links'>
                                        <a href='#'><FaFacebook/></a>
                                        <a href='#'><FaLinkedin/></a>
                                        <a href='#'><FaPinterestP/></a>
                                        <a href='#'><FaTwitter/></a>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}
