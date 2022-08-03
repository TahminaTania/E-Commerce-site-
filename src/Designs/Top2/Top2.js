import './top.css';
import logo from '../Images/logo.webp'
import React, { useState } from 'react';
// import Nav from './Nav';
import { MdFavorite, MdShoppingCart} from 'react-icons/md';

export default function () {
    const [item,SetItem]=useState(150.00);
  return (
    <section>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 p-4'>
                    <div className='row'>
                       <div className='col-md-3'>
                           <img src={logo}/>
                       </div>
                       <div className='col-md-6'>
                           <ul>
                               <li>Home</li>
                               <li>Shop</li>
                               <li>Page</li>
                               <li>Blog</li>
                               <li>Contact</li>
                           </ul>
                       </div>
                       <div className='col-md-3 billing'>
                           <div><MdFavorite/></div>
                           <div><MdShoppingCart/></div>
                           <div>item: ${item}</div>
                       </div>
                    </div>
                </div>
                <Nav/>
            </div>
        </div>


    </section>
  )
}
