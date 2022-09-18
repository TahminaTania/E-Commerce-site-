import React from 'react';
import classes from './Blog.module.css';
import {AiOutlineSearch} from 'react-icons/ai'
import Blogs from './Blogs';
import Recent from './Recent';
import SearchBy from './SearchBy';
import blogpost from './Blogdata';
import { useState } from 'react';


const allCategories=['all', ...new Set(blogpost.map((blog)=> blog.cetagory))];
console.log("all category",allCategories);

export default function Options() {

    const [blog,setBlog]=useState(blogpost);
    const [categories, setCategories]=useState(allCategories);
    const [totalCatag, setTotalCetag]=useState(blog.length);
  
  
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
    <section>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>

                    <div className={classes.src}>
                        <input placeholder="   Search"/>
                        <span className={classes.SrcIcn}><AiOutlineSearch/></span>
                    </div>
                
                    <div className='mt-5'>
                       <div className={classes.title}>
                                <h4>Categories</h4>
                            </div>
                            <div className={classes.blogCetag}>
                            {categories.map((category,index) =>{
                            return <div>
                                <button type='button' className='filter-btn' onClick={()=> filterCetagory(category)} key={index}>
                                {category}({category.length})
                            </button>
                            </div>
                            })}
                            
                        </div>
                    </div>
                    <div className='mt-5'>
                        <Recent/>
                    </div>
                    <div className='mt-5'>
                        <SearchBy />
                    </div>

                </div>

        
                    <div className='col-md-8'>
                       <Blogs blogpost={blog}/>
                    </div>
            </div>
        </div>

    </section>
  )
}
