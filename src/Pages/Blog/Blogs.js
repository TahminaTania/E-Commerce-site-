import React from 'react';
import blogpost from './Blogdata';
import './blogpage.css';
import {FiMessageCircle,FiCalendar} from 'react-icons/fi';
// import ShowMore from 'react-show-more-button';
// import ShowMore from 'react-show-more-button/dist/module';


export default function Blogs() {
    
  return (
    <div>
        <section className=''>
            <div className='row'>
                {blogpost.map((blog) => (
                    <div className="col-6">
                        <div className='blogPic'> 
                          <img src={blog.image}></img>
                        </div>
                        <div className='blogitems'> 
                            <div><span><FiCalendar/>  </span>{blog.date}</div>
                            <div> <span><FiMessageCircle/> </span>{blog.msg}</div>
                        </div>
                        <div> 
                            <div className='blg-ttl'><h5><a href='#'>{blog.title}</a></h5></div>
                            <div className='blg-dscrp'><p>{blog.description}</p></div>
                        </div>

                    </div>
                ))}
            </div>
      </section>
    </div>
  )
}

