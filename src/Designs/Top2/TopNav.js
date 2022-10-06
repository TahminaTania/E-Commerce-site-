import React, { useState, useRef, useEffect } from 'react';
import { FaBars ,FaUserAlt } from 'react-icons/fa';
import { links, Cart } from './top2Data';
import logo from './logo.png';
import { Link , NavLink } from 'react-router-dom';

const TopNav = () => {
  const [item,SetItem]=useState(150.00);

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
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='logo' alt='logo' />
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
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
            <div className='logIn'><Link to="#"><span><FaUserAlt/></span>Log In</Link></div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
