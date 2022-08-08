import React from 'react';

const Menu = ({items}) => {
  return <div className='section-center'>
    {items.map((menuItem)=>{
      const {id,title,img,price}=menuItem;
      return <article key={id} className='menu-item'>
        <div>
          <img src={img} alt={title} className='photo'/>
        </div>
        <div className='item-info'>
            <h4>{title}</h4>
            <h4 className='price'>{price}</h4>
        </div>
      </article>
    })}

  </div>
};

export default Menu;
