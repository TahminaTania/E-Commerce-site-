import React from 'react';
import './products.css'

const Categories = ({ categories,filterItems}) => {
  return (
    <section>
      <div className='btn-container'>
        {categories.map((category,index) =>{
          return <button type='button' className='filter-btn' onClick={()=> filterItems(category)} key={index} >
            {category}
          </button>
        })}
        
      </div>
  </section>
  )
};

export default Categories;
