import React from 'react';
import saleoff from './Saledata';
import {MdOutlineFavoriteBorder, MdOutlineShoppingCart , MdOutlineSearch} from 'react-icons/md';


export default function SaleOff() {
  return (
    <section>
        <div className='sale-page'>
            <div>
              <div><h1>Sale Off</h1></div>
              <div className='underline'></div>
            </div>
            <div className='saleoff-cont'>
            {saleoff.map((sale) => {
                    const { id,title,price,img,category } = sale;
                    return (
                      <div className='' key={id}>
                        <div className='saleoff-box' >
                            <div className='sale-box'>
                                <img src={img} alt={title} className=''/>
                                 <div className='sale-icon'>
                                    <MdOutlineFavoriteBorder className='icn'/>
                                    <MdOutlineSearch className='icn'/>
                                    <MdOutlineShoppingCart className='icn'/>
                                </div> 
                            </div>
                              <div className='saleoff-info mt-3'>
                                 <div className='category text-center'>{category}</div>
                                 <div className='name text-center'>{title}</div>
                                <div className='price text-center '>${price} <span>${price}</span></div>
                            </div> 
                        </div> 
                          
                        
                      </div>
                      );
                    })}
              
            </div>

        </div>
    </section>
  )
}



