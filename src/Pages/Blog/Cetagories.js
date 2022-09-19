import React from 'react';
import blogpost from './Blogdata';
import { useState } from 'react';
import { ClassNames } from '@emotion/react';
import classes from './Blog.module.css'





export default function Cetagories({categories,filterCetagory}) {


  return (
    <div>
        <div className={ClassNames.blogCetag}>
        {categories.map((category,index) =>{
          return <div>
            <button type='button' className='filter-btn' onClick={()=> filterCetagory(category)} key={index}>
            <span>{category}</span>
            <span>({(category=== 'all')? (blogpost.length): (blogpost.filter((blog)=> blog.category === category).length)})</span>
          </button>
          </div>
        })}
        
      </div>
    </div>
  )
}
