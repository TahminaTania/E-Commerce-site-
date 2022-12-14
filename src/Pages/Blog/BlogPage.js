import React from 'react';
import Blog from '../../Designs/Blog/Blog';
import Blogs from './Blogs';
import Options from './Options';

export default function BlogPage() {
  return (
    <section>
          <div className='Shop-Cover d-flex align-items-center justify-content-center mb-5'>
            <div className=''>
              <h1 style={{ fontWeight: 'bolder'}}>Blog</h1>
              <div><span style={{ fontWeight: 'bolder'}}>Home- </span>Blog</div>
            </div>
          </div>

          <div className='container'>
            <div className='row'>
              <Options/>

              {/* <div className='col-4'><Options/></div>
              <div className='col-8'><Blogs/></div> */}
              
            </div>
          </div>
        
    </section>
  )
}
