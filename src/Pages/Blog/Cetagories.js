import React from 'react';
import blogpost from './Blogdata';
import { useState } from 'react';
import { ClassNames } from '@emotion/react';
import classes from './Blog.module.css'


const allCategories=['all', ...new Set(blogpost.map((blog)=> blog.cetagory))];
console.log("all category",allCategories);
const TotalLength=[blogpost.length,...new Set(blogpost.map((blog)=> blog.cetagory.length))];
console.log("all category length",TotalLength);

export default function Cetagories() {
  const [blog,setBlog]=useState(blogpost);
  const [categories, setCategories]=useState(allCategories);
  const [totalCatag, setTotalCetag]=useState(TotalLength);


  const filterCetagory =(category)=>{
    if(category=== 'all'){
      setBlog(blogpost);
      setTotalCetag(blogpost.legth)
      return;
    }
    const newBlog =blogpost.filter((blog)=> blog.category ===category);
    setBlog(newBlog)
    setTotalCetag(newBlog.length)
  }




  return (
    <div>
        <div className={classes.title}>
            <h4>Categories</h4>
        </div>
        <div className={ClassNames.blogCetag}>
        {categories.map((category,index) =>{
          return <div>
            <button type='button' className='filter-btn' onClick={()=> filterCetagory(category)} key={index}>
            {category}({category.length})
          </button>
          </div>
        })}
        
      </div>
    </div>
  )
}
