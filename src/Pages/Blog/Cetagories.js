import React from 'react';
import blogpost from './Blogdata';
import { useState } from 'react';
import { ClassNames } from '@emotion/react';
import classes from './Blog.module.css'


// const allCategories=['all', ...new Set(blogpost.map((blog)=> blog.cetagory))];
// console.log("all category",allCategories);


export default function Cetagories({categories,filterCetagory,totalCatag}) {

  //const [totalCatag, setTotalCetag]=useState(TotalLength);

  return (
    <div>
        <div className={ClassNames.blogCetag}>
        {categories.map((category,index) =>{
          return <div>
            <button type='button' className='filter-btn' onClick={()=> filterCetagory(category)} key={index}>
            {category}({totalCatag})
          </button>
          </div>
        })}
        
      </div>
    </div>
  )
}
