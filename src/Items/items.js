import React from 'react';
import {MdOutlineFavoriteBorder, MdOutlineShoppingCart , MdOutlineSearch} from 'react-icons/md'

const Items = ({items}) => {
  return <div className='section-center'>
    {items.map((menuItem)=>{
      const {id,title,img,price}=menuItem;
      return <article key={id} className='menu-item'>
        <div className='item-box'>
          <img src={img} alt={title} className='photo'/>
          <div className='items-icon'>
            <MdOutlineFavoriteBorder className='icn'/>
            <MdOutlineSearch className='icn'/>
            <MdOutlineShoppingCart className='icn'/>
          </div>
        </div>
        <div className='item-info'>
            <h4>{title}</h4>
            <h4 className='price'>{price}</h4>
        </div>
      </article>
    })}

  </div>
};

export default Items;
