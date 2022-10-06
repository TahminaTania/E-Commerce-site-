import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { BiUser } from 'react-icons/bi';
import { links, Cart } from './top2Data';
import logo from './logo.png';
import { Link , NavLink } from 'react-router-dom';
import './top.css'


const TopNav = () => {

  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

  return (
    <nav>
      <div className='row nav-center'>
          <div className='col-3 nav-header'>
            <img src={logo} className='logo' alt='logo' />
            <button className='nav-toggle' onClick={toggleLinks}>
              <FaBars />
            </button>
          </div>

          <div className='col-6 links-container' ref={linksContainerRef}>
            <div className='links' ref={linksRef}>
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <div  className='pageLink' key={id}>
                    <Link to={url}>{text}</Link>
                  </div>
                );
              })}
            </div>
          </div>

          <div className='col-3 informations'>
            <div className='cart-icons'>
                {Cart.map((C) => {
                  const { id, value, icon } = C;
                  return (
                    <div key={id}>
                      <p>{icon}</p>
                    </div>
                  );
                })}
            </div>
              <div>
                  <div className='logIn'><Link to="/log_in"><BiUser className='userIcn'/> Log In</Link></div>
              </div>
          </div>
            

          
      </div>
    </nav>
  );
};

export default TopNav;
