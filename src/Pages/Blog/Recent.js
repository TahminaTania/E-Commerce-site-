import React from 'react';
import blogpost from './Blogdata';
import classes from './Blog.module.css'

export default function Recent() {
  return (
    <div>
        <div className={classes.title}>
            <h4>Recent News</h4>
        </div>
        <div className='container'>
            <div className='col-md-12 mt-5'>
            {blogpost.slice(10,14).map((blog) => (
                <div className='row rectnt-blog'> 
                        <div className='col-md-4 recent-news'><img src={blog.image}></img></div>
                        <div className='col-md-8'>
                            <div className='recent-header'><h6>{blog.title}</h6> </div>
                            <div className='recent-date'><p>{blog.date}</p></div>
                        </div>

                </div>
                ))}
            </div>
        </div>
    </div>
  )
}
