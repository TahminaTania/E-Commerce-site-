import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, Cart } from './top2Data';
import logo from './logo.webp';
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
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <Link to={url}>{text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className='cart-icons'>
          {Cart.map((C) => {
            const { id, value, icon } = C;
            return (
              <li key={id}>
                <p>{icon}</p>
              </li>
            );
          })}
        </ul>
        <ul>
            <li>Item: ${item}</li>
        </ul>
      </div>
    </nav>
  );
};

export default TopNav;
