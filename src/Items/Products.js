import React, { useState } from 'react';
import Menu from './items';
import Categories from './Categories';
import items from './data';
import Offers from './Offers';


const allCategories=['all', ...new Set(items.map((item)=> item.category))];
console.log(allCategories);


function Products() {
  const [menuItem,setMenuItems]=useState(items);
  const [categories, setCategories]=useState(allCategories);

  const filterItems =(category,e)=>{

    if(category=== 'all'){
      setMenuItems(items)
      return;
    }
  const newItems =items.filter((item)=> item.category === category);
      setMenuItems(newItems)    
  }


  return <main >
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <div>
            <div className='product-section'>
              <div className='title'>
                <h2>Featured Product</h2>
                <div className='underline'></div>
              </div>
              <Categories categories={categories} filterItems ={filterItems}/>
              <Menu items={menuItem}/>
            </div>
            <Offers/>
          </div>
        </div>
      </div>
    </div>
  </main>
}

export default Products;
