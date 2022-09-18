import React from 'react';
import classes from './Blog.module.css';
import {AiOutlineSearch} from 'react-icons/ai'
import Blogs from './Blogs';
import Recent from './Recent';
import SearchBy from './SearchBy';
import blogpost from './Blogdata';
import { useState } from 'react';


const allCateg=['all', ...new Set(blogpost.map((blog)=> blog.category))];
console.log("all category",allCateg);

export default function Options() {

    const [categBlog,setCategBlog]=useState(blogpost);
    const [categories, setCategories]=useState(allCateg);
    const [totalCatag, setTotalCetag]=useState(categBlog.length);
  
  
    const filterCetagory =(category,e)=>{

      if(category=== 'all'){
        setCategBlog(blogpost(blogpost.length));
        setTotalCetag(blogpost.legth)
        return;
      }
    const newBlog =blogpost.filter((blog)=> blog.category === category);
        setCategBlog(newBlog)    
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
                        <div>
                            {/* <Cetagories categories={categories} filterCetagory={filterCetagory} totalCatag={totalCatag}/> */}
                            <div className={classes.blogCetag}>
                                {categories.map((category,index) =>{
                                return <div>
                                    <div type='button' className='filter-btn' onClick={(e)=> filterCetagory(category)} key={index}> 
                                        <span>{category}</span>
                                        <span>({(category=== 'all')? (blogpost.length): (blogpost.filter((blog)=> blog.category === category).length)})</span>
                                    </div>
                                
                                </div>
                                })} 
                                
                            </div>
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
                    <Blogs blogpost={categBlog}/>
                </div>

            </div>
        </div>

    </section>
  )
}
